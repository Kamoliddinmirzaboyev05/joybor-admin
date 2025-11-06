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
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  ClipboardList,
  TrendingUp,
  Users,
  DollarSign,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  FileText,
  UserCheck,
  Building2,
  AlertCircle
} from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
});

interface MonthlyReport {
  month: string;
  totalStudents: number;
  newAdmissions: number;
  departures: number;
  totalRevenue: number;
  occupancyRate: number;
  attendanceRate: number;
}

interface PaymentReport {
  month: string;
  totalCollected: number;
  pending: number;
  overdue: number;
  collectionRate: number;
}

interface AttendanceReport {
  date: string;
  totalStudents: number;
  present: number;
  absent: number;
  attendanceRate: number;
  lateArrivals: number;
}

interface RoomOccupancyReport {
  roomNumber: string;
  floor: number;
  capacity: number;
  occupied: number;
  occupancyRate: number;
  revenue: number;
  status: "Faol" | "Band" | "Ta&apos;mirlash";
}

const Reports = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPeriod, setSelectedPeriod] = useState<any>(null);
  const [selectedMonth, setSelectedMonth] = useState<any>(null);

  const periodOptions = [
    { value: "week", label: "Bu hafta" },
    { value: "month", label: "Bu oy" },
    { value: "quarter", label: "Bu chorak" },
    { value: "year", label: "Bu yil" },
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

  // Sample data
  const monthlyReports: MonthlyReport[] = [
    {
      month: "Noyabr 2024",
      totalStudents: 485,
      newAdmissions: 25,
      departures: 8,
      totalRevenue: 242500000,
      occupancyRate: 80.8,
      attendanceRate: 94.2
    },
    {
      month: "Oktyabr 2024",
      totalStudents: 468,
      newAdmissions: 18,
      departures: 12,
      totalRevenue: 234000000,
      occupancyRate: 78.0,
      attendanceRate: 92.8
    },
    {
      month: "Sentyabr 2024",
      totalStudents: 462,
      newAdmissions: 35,
      departures: 5,
      totalRevenue: 231000000,
      occupancyRate: 77.0,
      attendanceRate: 91.5
    }
  ];

  const paymentReports: PaymentReport[] = [
    {
      month: "Noyabr 2024",
      totalCollected: 230000000,
      pending: 12500000,
      overdue: 5000000,
      collectionRate: 92.9
    },
    {
      month: "Oktyabr 2024",
      totalCollected: 220000000,
      pending: 8000000,
      overdue: 6000000,
      collectionRate: 94.0
    },
    {
      month: "Sentyabr 2024",
      totalCollected: 215000000,
      pending: 10000000,
      overdue: 6000000,
      collectionRate: 93.1
    }
  ];

  const attendanceReports: AttendanceReport[] = [
    {
      date: "2024-11-06",
      totalStudents: 485,
      present: 457,
      absent: 28,
      attendanceRate: 94.2,
      lateArrivals: 15
    },
    {
      date: "2024-11-05",
      totalStudents: 485,
      present: 461,
      absent: 24,
      attendanceRate: 95.1,
      lateArrivals: 12
    },
    {
      date: "2024-11-04",
      totalStudents: 485,
      present: 455,
      absent: 30,
      attendanceRate: 93.8,
      lateArrivals: 18
    }
  ];

  const roomOccupancyReports: RoomOccupancyReport[] = [
    {
      roomNumber: "101",
      floor: 1,
      capacity: 4,
      occupied: 4,
      occupancyRate: 100,
      revenue: 2000000,
      status: "Band"
    },
    {
      roomNumber: "102",
      floor: 1,
      capacity: 4,
      occupied: 3,
      occupancyRate: 75,
      revenue: 1500000,
      status: "Faol"
    },
    {
      roomNumber: "201",
      floor: 2,
      capacity: 2,
      occupied: 2,
      occupancyRate: 100,
      revenue: 1500000,
      status: "Band"
    },
    {
      roomNumber: "202",
      floor: 2,
      capacity: 2,
      occupied: 0,
      occupancyRate: 0,
      revenue: 0,
      status: "Ta&apos;mirlash"
    }
  ];

  const getStatusBadge = (status: RoomOccupancyReport["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
    switch (status) {
      case "Faol":
        return `${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`;
      case "Band":
        return `${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`;
      case "Ta&apos;mirlash":
        return `${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`;
      default:
        return baseClasses;
    }
  };

  const exportReport = (type: string) => {
    console.log(`Exporting ${type} report...`);
    // Here you would implement actual export functionality
  };

  return (
    <div className="mt-6">
      <div className="w-full">
        {/* Page Header */}
        <div className="pageTitle">
          <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
            <ClipboardList className="w-8 h-8" />
            Hisobotlar
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Yotoqxona faoliyati bo&apos;yicha batafsil hisobotlar va statistikalar
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Jami talabalar</p>
                <p className="text-2xl font-bold text-blue-600">485</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +3.2% bu oyda
                </p>
              </div>
              <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-full">
                <Users className="w-6 h-6 text-blue-600" />
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
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Oylik daromad</p>
                <p className="text-2xl font-bold text-green-600">242.5M</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +5.8% o&apos;sish
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
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Band xonalar</p>
                <p className="text-2xl font-bold text-orange-600">80.8%</p>
                <p className="text-xs text-orange-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  +2.1% yuqori
                </p>
              </div>
              <div className="bg-orange-100 dark:bg-orange-900/20 p-3 rounded-full">
                <Building2 className="w-6 h-6 text-orange-600" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Davomat</p>
                <p className="text-2xl font-bold text-purple-600">94.2%</p>
                <p className="text-xs text-green-600 flex items-center gap-1 mt-1">
                  <TrendingUp className="w-3 h-3" />
                  Yaxshi ko&apos;rsatkich
                </p>
              </div>
              <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-full">
                <UserCheck className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 mt-6 flex-wrap items-center"
        >
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-600 dark:text-muted-foreground">Filtrlar:</span>
          </div>
          
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Davr"
            isClearable
            value={selectedPeriod}
            onChange={setSelectedPeriod}
            options={periodOptions}
          />
          
          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="Oy"
            isClearable
            value={selectedMonth}
            onChange={setSelectedMonth}
            options={monthOptions}
          />

          <Button
            variant="outline"
            className="flex items-center gap-2 ml-auto"
            onClick={() => exportReport("all")}
          >
            <Download className="w-4 h-4" />
            Barcha hisobotlarni yuklab olish
          </Button>
        </motion.div>

        {/* Reports Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-[600px]">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Umumiy
              </TabsTrigger>
              <TabsTrigger value="payments" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4" />
                To&apos;lovlar
              </TabsTrigger>
              <TabsTrigger value="attendance" className="flex items-center gap-2">
                <UserCheck className="w-4 h-4" />
                Davomat
              </TabsTrigger>
              <TabsTrigger value="occupancy" className="flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                Xonalar
              </TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Oylik umumiy hisobot
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => exportReport("monthly")}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Eksport
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-muted/50">
                      <TableHead>Oy</TableHead>
                      <TableHead>Jami talabalar</TableHead>
                      <TableHead>Yangi qabul</TableHead>
                      <TableHead>Chiqganlar</TableHead>
                      <TableHead>Daromad</TableHead>
                      <TableHead>Band xonalar</TableHead>
                      <TableHead>Davomat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {monthlyReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{report.month}</TableCell>
                        <TableCell>{report.totalStudents}</TableCell>
                        <TableCell className="text-green-600">+{report.newAdmissions}</TableCell>
                        <TableCell className="text-red-600">-{report.departures}</TableCell>
                        <TableCell className="font-medium text-green-600">
                          {(report.totalRevenue / 1000000).toFixed(1)}M so&apos;m
                        </TableCell>
                        <TableCell>
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                            {report.occupancyRate}%
                          </span>
                        </TableCell>
                        <TableCell>
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                            {report.attendanceRate}%
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Payments Tab */}
            <TabsContent value="payments" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    To&apos;lovlar hisoboti
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => exportReport("payments")}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Eksport
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-muted/50">
                      <TableHead>Oy</TableHead>
                      <TableHead>Yig&apos;ilgan</TableHead>
                      <TableHead>Kutilayotgan</TableHead>
                      <TableHead>Muddati o&apos;tgan</TableHead>
                      <TableHead>Yig&apos;ish foizi</TableHead>
                      <TableHead>Holat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {paymentReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{report.month}</TableCell>
                        <TableCell className="font-medium text-green-600">
                          {(report.totalCollected / 1000000).toFixed(1)}M so&apos;m
                        </TableCell>
                        <TableCell className="text-yellow-600">
                          {(report.pending / 1000000).toFixed(1)}M so&apos;m
                        </TableCell>
                        <TableCell className="text-red-600">
                          {(report.overdue / 1000000).toFixed(1)}M so&apos;m
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            report.collectionRate >= 95 
                              ? "bg-green-100 text-green-800" 
                              : report.collectionRate >= 90 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {report.collectionRate}%
                          </span>
                        </TableCell>
                        <TableCell>
                          {report.collectionRate >= 95 ? (
                            <span className="text-green-600 flex items-center gap-1">
                              <UserCheck className="w-4 h-4" />
                              Yaxshi
                            </span>
                          ) : report.collectionRate >= 90 ? (
                            <span className="text-yellow-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              O&apos;rtacha
                            </span>
                          ) : (
                            <span className="text-red-600 flex items-center gap-1">
                              <AlertCircle className="w-4 h-4" />
                              Past
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Attendance Tab */}
            <TabsContent value="attendance" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <UserCheck className="w-5 h-5" />
                    Davomat hisoboti
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => exportReport("attendance")}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Eksport
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-muted/50">
                      <TableHead>Sana</TableHead>
                      <TableHead>Jami talabalar</TableHead>
                      <TableHead>Hozir</TableHead>
                      <TableHead>Yo&apos;q</TableHead>
                      <TableHead>Kech kelganlar</TableHead>
                      <TableHead>Davomat foizi</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {attendanceReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          {new Date(report.date).toLocaleDateString('uz-UZ')}
                        </TableCell>
                        <TableCell>{report.totalStudents}</TableCell>
                        <TableCell className="text-green-600">{report.present}</TableCell>
                        <TableCell className="text-red-600">{report.absent}</TableCell>
                        <TableCell className="text-orange-600">{report.lateArrivals}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            report.attendanceRate >= 95 
                              ? "bg-green-100 text-green-800" 
                              : report.attendanceRate >= 90 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {report.attendanceRate}%
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Room Occupancy Tab */}
            <TabsContent value="occupancy" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <Building2 className="w-5 h-5" />
                    Xonalar bandligi hisoboti
                  </h2>
                  <Button
                    variant="outline"
                    onClick={() => exportReport("occupancy")}
                    className="flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Eksport
                  </Button>
                </div>
                
                <Table>
                  <TableHeader>
                    <TableRow className="bg-gray-50 dark:bg-muted/50">
                      <TableHead>Xona</TableHead>
                      <TableHead>Qavat</TableHead>
                      <TableHead>Sig&apos;im</TableHead>
                      <TableHead>Band</TableHead>
                      <TableHead>Bandlik foizi</TableHead>
                      <TableHead>Daromad</TableHead>
                      <TableHead>Holat</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {roomOccupancyReports.map((report, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{report.roomNumber}</TableCell>
                        <TableCell>{report.floor}</TableCell>
                        <TableCell>{report.capacity}</TableCell>
                        <TableCell>{report.occupied}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm ${
                            report.occupancyRate === 100 
                              ? "bg-green-100 text-green-800" 
                              : report.occupancyRate >= 50 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {report.occupancyRate}%
                          </span>
                        </TableCell>
                        <TableCell className="font-medium text-green-600">
                          {report.revenue.toLocaleString()} so&apos;m
                        </TableCell>
                        <TableCell>
                          <span className={getStatusBadge(report.status)}>
                            {report.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Reports;