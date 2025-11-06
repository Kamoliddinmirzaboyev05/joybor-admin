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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  FileUser,
  Search,
  Filter,
  Eye,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Calendar,

} from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
});

interface Application {
  id: number;
  studentName: string;
  studentId: string;
  email: string;
  phone: string;
  applicationType: "Xona almashtirish" | "Chiqish" | "Shikoyat" | "Yordam so&apos;rash" | "Boshqa";
  title: string;
  description: string;
  submittedDate: string;
  status: "Yangi" | "Ko&apos;rib chiqilmoqda" | "Tasdiqlangan" | "Rad etilgan" | "Tugallangan";
  priority: "Yuqori" | "O&apos;rta" | "Past";
  assignedTo?: string;
  responseDate?: string;
  response?: string;
}

const Applications = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<{value: string, label: string} | null>(null);
  const [selectedType, setSelectedType] = useState<{value: string, label: string} | null>(null);
  const [selectedPriority, setSelectedPriority] = useState<{value: string, label: string} | null>(null);

  const statusOptions = [
    { value: "Yangi", label: "Yangi" },
    { value: "Ko&apos;rib chiqilmoqda", label: "Ko&apos;rib chiqilmoqda" },
    { value: "Tasdiqlangan", label: "Tasdiqlangan" },
    { value: "Rad etilgan", label: "Rad etilgan" },
    { value: "Tugallangan", label: "Tugallangan" },
  ];

  const typeOptions = [
    { value: "Xona almashtirish", label: "Xona almashtirish" },
    { value: "Chiqish", label: "Chiqish" },
    { value: "Shikoyat", label: "Shikoyat" },
    { value: "Yordam so&apos;rash", label: "Yordam so&apos;rash" },
    { value: "Boshqa", label: "Boshqa" },
  ];

  const priorityOptions = [
    { value: "Yuqori", label: "Yuqori" },
    { value: "O&apos;rta", label: "O&apos;rta" },
    { value: "Past", label: "Past" },
  ];

  // Sample applications data
  const [applications] = useState<Application[]>([
    {
      id: 1,
      studentName: "Aliyev Alisher",
      studentId: "1001",
      email: "alisher.aliyev@student.uz",
      phone: "+998 90 123-45-67",
      applicationType: "Xona almashtirish",
      title: "101-xonadan 201-xonaga o&apos;tish so&apos;rovi",
      description: "Hozirgi xonadoshlarim bilan muammolar tufayli boshqa xonaga o&apos;tishni so&apos;rayapman. 201-xonada bo&apos;sh joy borligini bildim.",
      submittedDate: "2024-11-05",
      status: "Yangi",
      priority: "O&apos;rta",
      assignedTo: "Karimov K.K."
    },
    {
      id: 2,
      studentName: "Valiyeva Malika",
      studentId: "1002",
      email: "malika.valiyeva@student.uz",
      phone: "+998 91 234-56-78",
      applicationType: "Shikoyat",
      title: "Xonada isitish tizimi ishlamayapti",
      description: "102-xonada radiatorlar sovuq, xona harorati juda past. Bir hafta oldin xabar bergan edim, lekin hali ham tuzatilmagan.",
      submittedDate: "2024-11-04",
      status: "Ko&apos;rib chiqilmoqda",
      priority: "Yuqori",
      assignedTo: "Rahimov R.R.",
      responseDate: "2024-11-05",
      response: "Texnik xizmat bilan bog&apos;lanildi, ertaga tuzatiladi."
    },
    {
      id: 3,
      studentName: "Hasanov Hasan",
      studentId: "1003",
      email: "hasan.hasanov@student.uz",
      phone: "+998 93 345-67-89",
      applicationType: "Yordam so&apos;rash",
      title: "Wi-Fi parolini tiklash",
      description: "Xona Wi-Fi parolini unutib qoldim, yangi parol olishga yordam kerak.",
      submittedDate: "2024-11-03",
      status: "Tugallangan",
      priority: "Past",
      assignedTo: "IT bo&apos;limi",
      responseDate: "2024-11-03",
      response: "Yangi parol yuborildi: TDU_Room103_2024"
    },
    {
      id: 4,
      studentName: "Karimova Nodira",
      studentId: "1004",
      email: "nodira.karimova@student.uz",
      phone: "+998 94 456-78-90",
      applicationType: "Chiqish",
      title: "Yotoqxonadan chiqish so&apos;rovi",
      description: "Oilaviy vaziyat tufayli yotoqxonadan chiqishim kerak. Barcha to&apos;lovlarni amalga oshirdim.",
      submittedDate: "2024-11-02",
      status: "Tasdiqlangan",
      priority: "O&apos;rta",
      assignedTo: "Direktor",
      responseDate: "2024-11-04",
      response: "Ariza tasdiqlandi. 15-noyabrgacha chiqish mumkin."
    },
    {
      id: 5,
      studentName: "Toshmatov Timur",
      studentId: "1005",
      email: "timur.toshmatov@student.uz",
      phone: "+998 95 567-89-01",
      applicationType: "Boshqa",
      title: "Xonaga qo&apos;shimcha shkaf so&apos;rovi",
      description: "Xonada kiyim-kechak uchun joy yetarli emas, qo&apos;shimcha shkaf o&apos;rnatish mumkinmi?",
      submittedDate: "2024-11-01",
      status: "Rad etilgan",
      priority: "Past",
      assignedTo: "Xo&apos;jalik bo&apos;limi",
      responseDate: "2024-11-02",
      response: "Hozircha qo&apos;shimcha mebel o&apos;rnatish imkoni yo&apos;q."
    }
  ]);

  // Filter applications
  const filteredApplications = applications.filter(app => {
    const matchesSearch = app.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         app.studentId.includes(searchTerm) ||
                         app.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = !selectedStatus || app.status === selectedStatus.value;
    const matchesType = !selectedType || app.applicationType === selectedType.value;
    const matchesPriority = !selectedPriority || app.priority === selectedPriority.value;
    
    return matchesSearch && matchesStatus && matchesType && matchesPriority;
  });

  const getStatusBadge = (status: Application["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "Yangi":
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
      case "Ko&apos;rib chiqilmoqda":
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`;
      case "Tasdiqlangan":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      case "Rad etilgan":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      case "Tugallangan":
        return `${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400`;
      default:
        return baseClasses;
    }
  };

  const getPriorityBadge = (priority: Application["priority"]) => {
    const baseClasses = "px-2 py-1 rounded text-xs font-medium";
    switch (priority) {
      case "Yuqori":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      case "O&apos;rta":
        return `${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`;
      case "Past":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      default:
        return baseClasses;
    }
  };

  const getStatusIcon = (status: Application["status"]) => {
    switch (status) {
      case "Yangi":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "Ko&apos;rib chiqilmoqda":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case "Tasdiqlangan":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "Rad etilgan":
        return <XCircle className="w-4 h-4 text-red-600" />;
      case "Tugallangan":
        return <CheckCircle className="w-4 h-4 text-gray-600" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  // Statistics
  const stats = {
    total: applications.length,
    new: applications.filter(app => app.status === "Yangi").length,
    inProgress: applications.filter(app => app.status === "Ko&apos;rib chiqilmoqda").length,
    completed: applications.filter(app => app.status === "Tugallangan" || app.status === "Tasdiqlangan").length,
    highPriority: applications.filter(app => app.priority === "Yuqori").length
  };

  return (
    <div className="mt-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="pageTitle">
          <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
            <FileUser className="w-8 h-8" />
            Arizalar
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Talabalar tomonidan yuborilgan arizalar va so&apos;rovlar
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Jami</p>
                <p className="text-xl font-bold text-blue-600">{stats.total}</p>
              </div>
              <FileUser className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Yangi</p>
                <p className="text-xl font-bold text-blue-600">{stats.new}</p>
              </div>
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Jarayonda</p>
                <p className="text-xl font-bold text-yellow-600">{stats.inProgress}</p>
              </div>
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Tugallangan</p>
                <p className="text-xl font-bold text-green-600">{stats.completed}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Muhim</p>
                <p className="text-xl font-bold text-red-600">{stats.highPriority}</p>
              </div>
              <AlertCircle className="w-6 h-6 text-red-600" />
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex gap-4 mt-6 flex-wrap items-center"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-muted-foreground">Filtrlar:</span>
          </div>
          
          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="Holat"
            isClearable
            value={selectedStatus}
            onChange={setSelectedStatus}
            options={statusOptions}
          />
          
          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="Tur"
            isClearable
            value={selectedType}
            onChange={setSelectedType}
            options={typeOptions}
          />
          
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Muhimlik"
            isClearable
            value={selectedPriority}
            onChange={setSelectedPriority}
            options={priorityOptions}
          />
        </motion.div>

        {/* Applications Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="border-2 rounded-md mt-6"
        >
          <div className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-muted/50">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                className="border border-gray-400 dark:border-sidebar-border dark:bg-input dark:text-foreground pl-10 pr-4 py-2 rounded w-64"
                type="text"
                placeholder="Qidirish..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
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
                  ARIZA TURI
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  SARLAVHA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  SANA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  MUHIMLIK
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  HOLAT
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  AMALLAR
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredApplications.map((application) => (
                <TableRow key={application.id} className="hover:bg-gray-50 dark:hover:bg-muted/50 h-16">
                  <TableCell className="font-medium">{application.id}</TableCell>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-semibold">{application.studentName}</span>
                      <span className="text-sm text-gray-500">ID: {application.studentId}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">
                      {application.applicationType}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <p className="truncate font-medium">{application.title}</p>
                    <p className="text-sm text-gray-500 truncate">{application.description}</p>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex flex-col items-center">
                      <span className="text-sm">
                        {new Date(application.submittedDate).toLocaleDateString('uz-UZ')}
                      </span>
                      <Calendar className="w-3 h-3 text-gray-400 mt-1" />
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <span className={getPriorityBadge(application.priority)}>
                      {application.priority}
                    </span>
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      {getStatusIcon(application.status)}
                      <span className={getStatusBadge(application.status)}>
                        {application.status}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="text-center">
                    <Link href={`/applications/${application.id}`}>
                      <Button size="sm" variant="outline" className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        Ko&apos;rish
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {filteredApplications.length === 0 && (
            <div className="text-center py-8 text-gray-500 dark:text-muted-foreground">
              <FileUser className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Hech qanday ariza topilmadi</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Applications;