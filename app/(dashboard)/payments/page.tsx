"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Download,
  Plus,
  CreditCard,
  Calendar,
  DollarSign,
  Filter,
  Search,
} from "lucide-react";
import { motion } from "motion/react";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => (
    <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
  ),
});

interface Payment {
  id: number;
  student_name: string;
  student_id: number;
  amount: number;
  payment_date: string;
  payment_type: "Naqd" | "Plastik" | "Bank o&apos;tkazmasi";
  status: "To&apos;langan" | "Kutilmoqda" | "Bekor qilingan";
  month: string;
  room: number;
  group: string;
  description?: string;
}

const Payments = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedPaymentType, setSelectedPaymentType] = useState<{
    value: string;
    label: string;
  } | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<{
    value: string;
    label: string;
  } | null>(null);

  // Form state for new payment
  const [newPayment, setNewPayment] = useState({
    student_name: "",
    student_id: "",
    amount: "",
    payment_type: "",
    month: "",
    description: "",
  });

  const statusOptions = [
    { value: "To&apos;langan", label: "To&apos;langan" },
    { value: "Kutilmoqda", label: "Kutilmoqda" },
    { value: "Bekor qilingan", label: "Bekor qilingan" },
  ];

  const paymentTypeOptions = [
    { value: "Naqd", label: "Naqd pul" },
    { value: "Plastik", label: "Plastik karta" },
    { value: "Bank o&apos;tkazmasi", label: "Bank o&apos;tkazmasi" },
  ];

  const monthOptions = [
    { value: "2024-01", label: "Yanvar 2024" },
    { value: "2024-02", label: "Fevral 2024" },
    { value: "2024-03", label: "Mart 2024" },
    { value: "2024-04", label: "Aprel 2024" },
    { value: "2024-05", label: "May 2024" },
    { value: "2024-06", label: "Iyun 2024" },
    { value: "2024-07", label: "Iyul 2024" },
    { value: "2024-08", label: "Avgust 2024" },
    { value: "2024-09", label: "Sentyabr 2024" },
    { value: "2024-10", label: "Oktyabr 2024" },
    { value: "2024-11", label: "Noyabr 2024" },
    { value: "2024-12", label: "Dekabr 2024" },
  ];

  const payments: Payment[] = [
    {
      id: 1,
      student_name: "Aliyev Alisher",
      student_id: 1001,
      amount: 500000,
      payment_date: "2024-11-01",
      payment_type: "Naqd",
      status: "To&apos;langan",
      month: "Noyabr 2024",
      room: 101,
      group: "IF-21",
      description: "Yotoqxona to&apos;lovi",
    },
    {
      id: 2,
      student_name: "Valiyev Vali",
      student_id: 1002,
      amount: 500000,
      payment_date: "2024-11-02",
      payment_type: "Plastik",
      status: "To&apos;langan",
      month: "Noyabr 2024",
      room: 102,
      group: "IF-21",
    },
    {
      id: 3,
      student_name: "Hasanov Hasan",
      student_id: 1003,
      amount: 500000,
      payment_date: "2024-11-03",
      payment_type: "Bank o&apos;tkazmasi",
      status: "Kutilmoqda",
      month: "Noyabr 2024",
      room: 103,
      group: "CS-22",
    },
    {
      id: 4,
      student_name: "Karimov Karim",
      student_id: 1004,
      amount: 500000,
      payment_date: "2024-10-28",
      payment_type: "Naqd",
      status: "Bekor qilingan",
      month: "Oktyabr 2024",
      room: 104,
      group: "IT-20",
    },
    {
      id: 5,
      student_name: "Rahimov Rahim",
      student_id: 1005,
      amount: 500000,
      payment_date: "2024-11-04",
      payment_type: "Plastik",
      status: "To&apos;langan",
      month: "Noyabr 2024",
      room: 105,
      group: "IF-21",
    },
  ];

  // Filter payments based on search and filters
  const filteredPayments = payments.filter((payment) => {
    const matchesSearch =
      payment.student_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      payment.student_id.toString().includes(searchTerm);
    const matchesStatus =
      !selectedStatus || payment.status === selectedStatus.value;
    const matchesPaymentType =
      !selectedPaymentType ||
      payment.payment_type === selectedPaymentType.value;
    const matchesMonth =
      !selectedMonth || payment.month === selectedMonth.label;

    return matchesSearch && matchesStatus && matchesPaymentType && matchesMonth;
  });

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("New payment:", newPayment);
    setIsModalOpen(false);
    setNewPayment({
      student_name: "",
      student_id: "",
      amount: "",
      payment_type: "",
      month: "",
      description: "",
    });
  };

  const getStatusBadge = (status: Payment["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "To&apos;langan":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      case "Kutilmoqda":
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`;
      case "Bekor qilingan":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      default:
        return baseClasses;
    }
  };

  const getPaymentTypeIcon = (type: Payment["payment_type"]) => {
    switch (type) {
      case "Naqd":
        return <DollarSign className="w-4 h-4" />;
      case "Plastik":
        return <CreditCard className="w-4 h-4" />;
      case "Bank o&apos;tkazmasi":
        return <Calendar className="w-4 h-4" />;
      default:
        return <DollarSign className="w-4 h-4" />;
    }
  };

  const totalAmount = filteredPayments
    .filter((p) => p.status === "To&apos;langan")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingAmount = filteredPayments
    .filter((p) => p.status === "Kutilmoqda")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="mt-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="pageTitle">
          <h1 className="text-3xl font-semibold dark:text-foreground">
            To&apos;lovlar
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Yotoqxona to&apos;lovlari va moliyaviy hisobotlar
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Jami to&apos;langan
                </p>
                <p className="text-2xl font-bold text-green-600">
                  {totalAmount.toLocaleString()} so&apos;m
                </p>
              </div>
              <div className="bg-green-100 dark:bg-green-900/20 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Kutilayotgan
                </p>
                <p className="text-2xl font-bold text-yellow-600">
                  {pendingAmount.toLocaleString()} so&apos;m
                </p>
              </div>
              <div className="bg-yellow-100 dark:bg-yellow-900/20 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">
                  Jami to&apos;lovlar
                </p>
                <p className="text-2xl font-bold text-blue-600">
                  {filteredPayments.length}
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                <CreditCard className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 mt-6 flex-wrap items-center"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-muted-foreground">
              Filtrlar:
            </span>
          </div>

          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="To'lov holati"
            isClearable
            value={selectedStatus}
            onChange={(newValue) =>
              setSelectedStatus(
                newValue as { value: string; label: string } | null
              )
            }
            options={statusOptions}
          />

          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="To'lov turi"
            isClearable
            value={selectedPaymentType}
            onChange={(newValue) =>
              setSelectedPaymentType(
                newValue as { value: string; label: string } | null
              )
            }
            options={paymentTypeOptions}
          />

          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="Oy"
            isClearable
            value={selectedMonth}
            onChange={(newValue) =>
              setSelectedMonth(
                newValue as { value: string; label: string } | null
              )
            }
            options={monthOptions}
          />
        </motion.div>

        {/* Payments Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="border-2 rounded-md mt-6"
        >
          <div className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-muted/50">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  className="border border-gray-400 dark:border-sidebar-border dark:bg-input dark:text-foreground pl-10 pr-4 py-2 rounded w-64"
                  type="text"
                  placeholder="Talaba nomi yoki ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Yuklab olish
              </Button>

              <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogTrigger asChild>
                  <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4" />
                    To&apos;lov qo&apos;shish
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[500px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Yangi to&apos;lov qo&apos;shish
                    </DialogTitle>
                    <DialogDescription>
                      Talaba uchun yangi to&apos;lov ma&apos;lumotlarini
                      kiriting
                    </DialogDescription>
                  </DialogHeader>

                  <form onSubmit={handleSubmitPayment} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="student_name">Talaba ismi</Label>
                        <Input
                          id="student_name"
                          value={newPayment.student_name}
                          onChange={(e) =>
                            setNewPayment({
                              ...newPayment,
                              student_name: e.target.value,
                            })
                          }
                          placeholder="Ism Familiya"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="student_id">Talaba ID</Label>
                        <Input
                          id="student_id"
                          type="number"
                          value={newPayment.student_id}
                          onChange={(e) =>
                            setNewPayment({
                              ...newPayment,
                              student_id: e.target.value,
                            })
                          }
                          placeholder="1001"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="amount">To&apos;lov miqdori</Label>
                        <Input
                          id="amount"
                          type="number"
                          value={newPayment.amount}
                          onChange={(e) =>
                            setNewPayment({
                              ...newPayment,
                              amount: e.target.value,
                            })
                          }
                          placeholder="500000"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="payment_type">To&apos;lov turi</Label>
                        <select
                          id="payment_type"
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background"
                          value={newPayment.payment_type}
                          onChange={(e) =>
                            setNewPayment({
                              ...newPayment,
                              payment_type: e.target.value,
                            })
                          }
                          required
                        >
                          <option value="">Tanlang</option>
                          <option value="Naqd">Naqd pul</option>
                          <option value="Plastik">Plastik karta</option>
                          <option value="Bank o'tkazmasi">
                            Bank o&apos;tkazmasi
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="month">Oy</Label>
                      <select
                        id="month"
                        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background"
                        value={newPayment.month}
                        onChange={(e) =>
                          setNewPayment({
                            ...newPayment,
                            month: e.target.value,
                          })
                        }
                        required
                      >
                        <option value="">Oyni tanlang</option>
                        {monthOptions.map((month) => (
                          <option key={month.value} value={month.label}>
                            {month.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="description">Izoh (ixtiyoriy)</Label>
                      <Input
                        id="description"
                        value={newPayment.description}
                        onChange={(e) =>
                          setNewPayment({
                            ...newPayment,
                            description: e.target.value,
                          })
                        }
                        placeholder="Qo'shimcha ma'lumot..."
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setIsModalOpen(false)}
                      >
                        Bekor qilish
                      </Button>
                      <Button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        To&apos;lovni saqlash
                      </Button>
                    </div>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          <Table className="bg-white dark:bg-card">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-card h-16">
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  ID
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  TALABA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  MIQDOR
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  TO&apos;LOV TURI
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  SANA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  OY
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  HOLAT
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  XONA
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPayments.map((payment) => (
                <TableRow
                  key={payment.id}
                  className="hover:bg-gray-50 dark:hover:bg-muted/50 h-16"
                >
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <Link
                        href={`/students/${payment.student_id}`}
                        className="font-semibold text-blue-600 hover:underline"
                      >
                        {payment.student_name}
                      </Link>
                      <span className="text-sm text-gray-500">
                        ID: {payment.student_id}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="font-bold text-green-600">
                    {payment.amount.toLocaleString()} so&apos;m
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getPaymentTypeIcon(payment.payment_type)}
                      <span>{payment.payment_type}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    {new Date(payment.payment_date).toLocaleDateString("uz-UZ")}
                  </TableCell>
                  <TableCell className="text-center">{payment.month}</TableCell>
                  <TableCell className="text-center">
                    <span className={getStatusBadge(payment.status)}>
                      {payment.status}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                      {payment.room}-xona
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {filteredPayments.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-muted-foreground">
              <CreditCard className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Hech qanday to&apos;lov topilmadi</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Payments;
