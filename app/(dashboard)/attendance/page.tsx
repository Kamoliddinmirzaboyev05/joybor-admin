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
  UserCheck,
  Search,
  Filter,
  Calendar,
  Clock,
  Users,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Download,
  Plus,
  Eye,
  TrendingUp,
  BarChart3
} from "lucide-react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
});

interface AttendanceRecord {
  id: number;
  studentId: string;
  studentName: string;
  room: string;
  checkInTime?: string;
  checkOutTime?: string;
  status: "Hozir" | "Yo&apos;q" | "Kech kelgan" | "Ruxsatsiz chiqgan";
  date: string;
  notes?: string;
}

interface DailyAttendance {
  date: string;
  totalStudents: number;
  present: number;
  absent: number;
  late: number;
  attendanceRate: number;
}

const Attendance = () => {
  const [activeTab, setActiveTab] = useState("today");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<{value: string; label: string} | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<{value: string; label: string} | null>(null);
  const [isMarkAttendanceOpen, setIsMarkAttendanceOpen] = useState(false);


  const statusOptions = [
    { value: "Hozir", label: "Hozir" },
    { value: "Yo&apos;q", label: "Yo&apos;q" },
    { value: "Kech kelgan", label: "Kech kelgan" },
    { value: "Ruxsatsiz chiqgan", label: "Ruxsatsiz chiqgan" },
  ];

  const roomOptions = [
    { value: "101", label: "101-xona" },
    { value: "102", label: "102-xona" },
    { value: "201", label: "201-xona" },
    { value: "202", label: "202-xona" },
  ];

  // Sample attendance data
  const todayAttendance: AttendanceRecord[] = [
    {
      id: 1,
      studentId: "1001",
      studentName: "Aliyev Alisher",
      room: "101",
      checkInTime: "22:30",
      status: "Hozir",
      date: "2024-11-06",
      notes: "Vaqtida keldi"
    },
    {
      id: 2,
      studentId: "1002",
      studentName: "Valiyeva Malika",
      room: "102",
      checkInTime: "23:15",
      status: "Kech kelgan",
      date: "2024-11-06",
      notes: "Darsdan kech qaytdi"
    },
    {
      id: 3,
      studentId: "1003",
      studentName: "Hasanov Hasan",
      room: "103",
      status: "Yo&apos;q",
      date: "2024-11-06",
      notes: "Uyga ketgan"
    },
    {
      id: 4,
      studentId: "1004",
      studentName: "Karimova Nodira",
      room: "201",
      checkInTime: "22:45",
      checkOutTime: "01:30",
      status: "Ruxsatsiz chiqgan",
      date: "2024-11-06",
      notes: "Tungi vaqtda chiqib ketgan"
    },
    {
      id: 5,
      studentId: "1005",
      studentName: "Toshmatov Timur",
      room: "202",
      checkInTime: "22:20",
      status: "Hozir",
      date: "2024-11-06"
    }
  ];

  const weeklyAttendance: DailyAttendance[] = [
    {
      date: "2024-11-06",
      totalStudents: 485,
      present: 457,
      absent: 28,
      late: 15,
      attendanceRate: 94.2
    },
    {
      date: "2024-11-05",
      totalStudents: 485,
      present: 461,
      absent: 24,
      late: 12,
      attendanceRate: 95.1
    },
    {
      date: "2024-11-04",
      totalStudents: 485,
      present: 455,
      absent: 30,
      late: 18,
      attendanceRate: 93.8
    },
    {
      date: "2024-11-03",
      totalStudents: 485,
      present: 468,
      absent: 17,
      late: 8,
      attendanceRate: 96.5
    },
    {
      date: "2024-11-02",
      totalStudents: 485,
      present: 452,
      absent: 33,
      late: 22,
      attendanceRate: 93.2
    }
  ];

  // Filter today's attendance
  const filteredAttendance = todayAttendance.filter(record => {
    const matchesSearch = record.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.studentId.includes(searchTerm);
    const matchesStatus = !selectedStatus || record.status === selectedStatus.value;
    const matchesRoom = !selectedRoom || record.room === selectedRoom.value;
    
    return matchesSearch && matchesStatus && matchesRoom;
  });

  const getStatusBadge = (status: AttendanceRecord["status"]) => {
    const baseClasses = "px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1";
    switch (status) {
      case "Hozir":
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`}>
            <CheckCircle className="w-3 h-3" />
            Hozir
          </span>
        );
      case "Yo&apos;q":
        return (
          <span className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`}>
            <XCircle className="w-3 h-3" />
            Yo&apos;q
          </span>
        );
      case "Kech kelgan":
        return (
          <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`}>
            <Clock className="w-3 h-3" />
            Kech kelgan
          </span>
        );
      case "Ruxsatsiz chiqgan":
        return (
          <span className={`${baseClasses} bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-400`}>
            <AlertTriangle className="w-3 h-3" />
            Ruxsatsiz chiqgan
          </span>
        );
      default:
        return null;
    }
  };

  // Statistics for today
  const todayStats = {
    total: todayAttendance.length,
    present: todayAttendance.filter(r => r.status === "Hozir").length,
    absent: todayAttendance.filter(r => r.status === "Yo&apos;q").length,
    late: todayAttendance.filter(r => r.status === "Kech kelgan").length,
    unauthorized: todayAttendance.filter(r => r.status === "Ruxsatsiz chiqgan").length
  };

  const attendanceRate = ((todayStats.present + todayStats.late) / todayStats.total * 100).toFixed(1);

  return (
    <div className="mt-6">
      <div className="w-full">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pageTitle"
        >
          <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
            <UserCheck className="w-8 h-8" />
            Davomat
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Talabalar davomat nazorati va hisobotlari
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Jami</p>
                <p className="text-xl font-bold text-blue-600">{todayStats.total}</p>
              </div>
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Hozir</p>
                <p className="text-xl font-bold text-green-600">{todayStats.present}</p>
              </div>
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Yo&apos;q</p>
                <p className="text-xl font-bold text-red-600">{todayStats.absent}</p>
              </div>
              <XCircle className="w-6 h-6 text-red-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Kech</p>
                <p className="text-xl font-bold text-yellow-600">{todayStats.late}</p>
              </div>
              <Clock className="w-6 h-6 text-yellow-600" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-white dark:bg-card p-4 rounded-lg border shadow-sm"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-muted-foreground">Davomat %</p>
                <p className="text-xl font-bold text-purple-600">{attendanceRate}%</p>
              </div>
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-6"
        >
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
              <TabsTrigger value="today" className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Bugun
              </TabsTrigger>
              <TabsTrigger value="weekly" className="flex items-center gap-2">
                <BarChart3 className="w-4 h-4" />
                Haftalik
              </TabsTrigger>
              <TabsTrigger value="reports" className="flex items-center gap-2">
                <Eye className="w-4 h-4" />
                Hisobotlar
              </TabsTrigger>
            </TabsList>

            {/* Today's Attendance Tab */}
            <TabsContent value="today" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Filters and Actions */}
                <div className="flex gap-4 flex-wrap items-center justify-between">
                  <div className="flex gap-4 flex-wrap items-center">
                    <div className="flex items-center gap-2">
                      <Filter className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-muted-foreground">Filtrlar:</span>
                    </div>
                    
                    <CreatableSelect
                      className="w-36"
                      classNamePrefix="react-select"
                      placeholder="Holat"
                      isClearable
                      value={selectedStatus}
                      onChange={(newValue) => setSelectedStatus(newValue as {value: string; label: string} | null)}
                      options={statusOptions}
                    />
                    
                    <CreatableSelect
                      className="w-36"
                      classNamePrefix="react-select"
                      placeholder="Xona"
                      isClearable
                      value={selectedRoom}
                      onChange={(newValue) => setSelectedRoom(newValue as {value: string; label: string} | null)}
                      options={roomOptions}
                    />
                  </div>

                  <Dialog open={isMarkAttendanceOpen} onOpenChange={setIsMarkAttendanceOpen}>
                    <DialogTrigger asChild>
                      <Button className="flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Davomat belgilash
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <UserCheck className="w-5 h-5" />
                          Davomat belgilash
                        </DialogTitle>
                        <DialogDescription>
                          Talaba uchun davomat holatini belgilang
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="student_search">Talaba qidirish</Label>
                          <Input
                            id="student_search"
                            placeholder="Talaba ismi yoki ID..."
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="attendance_status">Davomat holati</Label>
                          <select
                            id="attendance_status"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background mt-1"
                          >
                            <option value="">Holatni tanlang</option>
                            <option value="Hozir">Hozir</option>
                            <option value="Yo&apos;q">Yo&apos;q</option>
                            <option value="Kech kelgan">Kech kelgan</option>
                            <option value="Ruxsatsiz chiqgan">Ruxsatsiz chiqgan</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="check_time">Vaqt</Label>
                          <Input
                            id="check_time"
                            type="time"
                            className="mt-1"
                          />
                        </div>
                        
                        <div>
                          <Label htmlFor="notes">Izoh</Label>
                          <textarea
                            id="notes"
                            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background mt-1"
                            rows={3}
                            placeholder="Qo&apos;shimcha ma&apos;lumot..."
                          />
                        </div>
                        
                        <div className="flex justify-end gap-2 pt-4">
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => setIsMarkAttendanceOpen(false)}
                          >
                            Bekor qilish
                          </Button>
                          <Button>
                            Saqlash
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                {/* Attendance Table */}
                <div className="border-2 rounded-md">
                  <div className="flex justify-between items-center p-4 border-b bg-gray-50 dark:bg-muted/50">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        className="border border-gray-400 dark:border-sidebar-border dark:bg-input dark:text-foreground pl-10 pr-4 py-2 rounded w-64"
                        type="text"
                        placeholder="Talaba qidirish..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      Eksport
                    </Button>
                  </div>
                  
                  <Table className="bg-white dark:bg-card">
                    <TableHeader>
                      <TableRow className="bg-gray-100 dark:bg-card h-16">
                        <TableHead>Talaba ID</TableHead>
                        <TableHead>Ism Familiya</TableHead>
                        <TableHead>Xona</TableHead>
                        <TableHead>Kirish vaqti</TableHead>
                        <TableHead>Chiqish vaqti</TableHead>
                        <TableHead className="text-center">Holat</TableHead>
                        <TableHead>Izoh</TableHead>
                        <TableHead className="text-center">Amallar</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredAttendance.map((record, index) => (
                        <motion.tr
                          key={record.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                          className="hover:bg-gray-50 dark:hover:bg-muted/50 h-16"
                        >
                          <TableCell className="font-medium">{record.studentId}</TableCell>
                          <TableCell>
                            <Link 
                              href={`/students/${record.studentId}`}
                              className="font-semibold text-blue-600 hover:underline"
                            >
                              {record.studentName}
                            </Link>
                          </TableCell>
                          <TableCell>
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                              {record.room}-xona
                            </span>
                          </TableCell>
                          <TableCell>
                            {record.checkInTime ? (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-green-600" />
                                {record.checkInTime}
                              </span>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </TableCell>
                          <TableCell>
                            {record.checkOutTime ? (
                              <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4 text-red-600" />
                                {record.checkOutTime}
                              </span>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </TableCell>
                          <TableCell className="text-center">
                            {getStatusBadge(record.status)}
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <span className="text-sm text-gray-600 truncate">
                              {record.notes || "-"}
                            </span>
                          </TableCell>
                          <TableCell className="text-center">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4" />
                            </Button>
                          </TableCell>
                        </motion.tr>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </motion.div>
            </TabsContent>

            {/* Weekly Attendance Tab */}
            <TabsContent value="weekly" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card rounded-lg border shadow-sm"
              >
                <div className="flex justify-between items-center p-6 border-b">
                  <h2 className="text-xl font-semibold flex items-center gap-2">
                    <BarChart3 className="w-5 h-5" />
                    Haftalik davomat hisoboti
                  </h2>
                  <Button variant="outline" className="flex items-center gap-2">
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
                    {weeklyAttendance.map((day, index) => (
                      <motion.tr
                        key={day.date}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <TableCell className="font-medium">
                          {new Date(day.date).toLocaleDateString('uz-UZ')}
                        </TableCell>
                        <TableCell>{day.totalStudents}</TableCell>
                        <TableCell className="text-green-600 font-medium">{day.present}</TableCell>
                        <TableCell className="text-red-600 font-medium">{day.absent}</TableCell>
                        <TableCell className="text-yellow-600 font-medium">{day.late}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-sm font-medium ${
                            day.attendanceRate >= 95 
                              ? "bg-green-100 text-green-800" 
                              : day.attendanceRate >= 90 
                              ? "bg-yellow-100 text-yellow-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {day.attendanceRate}%
                          </span>
                        </TableCell>
                      </motion.tr>
                    ))}
                  </TableBody>
                </Table>
              </motion.div>
            </TabsContent>

            {/* Reports Tab */}
            <TabsContent value="reports" className="mt-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm text-center"
              >
                <Eye className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <h3 className="text-lg font-semibold mb-2">Batafsil hisobotlar</h3>
                <p className="text-gray-600 dark:text-muted-foreground mb-4">
                  Davomat bo&apos;yicha batafsil hisobotlar uchun hisobotlar sahifasiga o&apos;ting
                </p>
                <Link href="/reports">
                  <Button className="flex items-center gap-2 mx-auto">
                    <BarChart3 className="w-4 h-4" />
                    Hisobotlar sahifasiga o&apos;tish
                  </Button>
                </Link>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
};

export default Attendance;