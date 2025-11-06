"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  FileUser,
  ArrowLeft,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Calendar,
  User,
  Mail,
  Phone,
  MessageSquare,

  Save,
  FileText
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

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
  attachments?: string[];
}

const ApplicationDetail = () => {
  const params = useParams();
  const applicationId = parseInt(params.id as string);
  
  const [isResponseModalOpen, setIsResponseModalOpen] = useState(false);
  const [responseText, setResponseText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  // Sample application data (in real app, this would come from API)
  const application: Application = {
    id: applicationId,
    studentName: "Aliyev Alisher",
    studentId: "1001",
    email: "alisher.aliyev@student.uz",
    phone: "+998 90 123-45-67",
    applicationType: "Xona almashtirish",
    title: "101-xonadan 201-xonaga o&apos;tish so&apos;rovi",
    description: `Hurmatli yotoqxona ma'muriyati!

Men hozirda 101-xonada yashayman va bu xonada ba'zi muammolar mavjud:

1. Xonadoshlarim bilan vaqt jadvalimiz mos kelmayapti
2. Ular kechqurun ovozli musiqa tinglashadi, men esa erta uxlashim kerak
3. Xonada tartibsizlik ko'p bo'ladi

201-xonada bo'sh joy borligini bildim va u yerda yashayotgan talabalar bilan tanishman. Ular ham meni qabul qilishga rozilari.

Iltimos, xona almashtirishga ruxsat bering.

Oldindan rahmat!`,
    submittedDate: "2024-11-05",
    status: "Yangi",
    priority: "O&apos;rta",
    assignedTo: "Karimov K.K.",
    attachments: ["xona_rasmi.jpg", "talaba_guvohnomasi.pdf"]
  };

  const handleStatusChange = (newStatus: string) => {
    console.log(`Changing status to: ${newStatus}`);
    // Here you would update the status in your backend
  };

  const handleSubmitResponse = () => {
    if (!responseText.trim() || !selectedStatus) return;
    
    console.log("Submitting response:", {
      applicationId,
      response: responseText,
      status: selectedStatus,
      responseDate: new Date().toISOString()
    });
    
    // Here you would submit the response to your backend
    setIsResponseModalOpen(false);
    setResponseText("");
    setSelectedStatus("");
  };

  const getStatusBadge = (status: Application["status"]) => {
    const baseClasses = "px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2";
    switch (status) {
      case "Yangi":
        return (
          <span className={`${baseClasses} bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400`}>
            <Clock className="w-4 h-4" />
            Yangi
          </span>
        );
      case "Ko&apos;rib chiqilmoqda":
        return (
          <span className={`${baseClasses} bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400`}>
            <AlertCircle className="w-4 h-4" />
            Ko&apos;rib chiqilmoqda
          </span>
        );
      case "Tasdiqlangan":
        return (
          <span className={`${baseClasses} bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400`}>
            <CheckCircle className="w-4 h-4" />
            Tasdiqlangan
          </span>
        );
      case "Rad etilgan":
        return (
          <span className={`${baseClasses} bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-400`}>
            <XCircle className="w-4 h-4" />
            Rad etilgan
          </span>
        );
      case "Tugallangan":
        return (
          <span className={`${baseClasses} bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400`}>
            <CheckCircle className="w-4 h-4" />
            Tugallangan
          </span>
        );
      default:
        return null;
    }
  };

  const getPriorityBadge = (priority: Application["priority"]) => {
    const baseClasses = "px-3 py-1 rounded text-sm font-medium";
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

  return (
    <div className="mt-6">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <Link href="/applications">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Orqaga
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
              <FileUser className="w-8 h-8" />
              Ariza #{application.id}
            </h1>
            <p className="text-md text-gray-600 dark:text-muted-foreground">
              {application.title}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Application Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Ariza tafsilotlari
                </h2>
                <div className="flex items-center gap-2">
                  <span className={getPriorityBadge(application.priority)}>
                    {application.priority} muhimlik
                  </span>
                  {getStatusBadge(application.status)}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Ariza turi
                  </Label>
                  <p className="mt-1 text-lg">{application.applicationType}</p>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Sarlavha
                  </Label>
                  <p className="mt-1 text-lg font-medium">{application.title}</p>
                </div>

                <div>
                  <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Batafsil ma&apos;lumot
                  </Label>
                  <div className="mt-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm leading-relaxed">
                      {application.description}
                    </pre>
                  </div>
                </div>

                {application.attachments && application.attachments.length > 0 && (
                  <div>
                    <Label className="text-sm font-medium text-gray-600 dark:text-gray-400">
                      Qo&apos;shimcha fayllar
                    </Label>
                    <div className="mt-2 space-y-2">
                      {application.attachments.map((file, index) => (
                        <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded">
                          <FileText className="w-4 h-4 text-gray-500" />
                          <span className="text-sm">{file}</span>
                          <Button size="sm" variant="outline" className="ml-auto">
                            Yuklab olish
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Response Section */}
            {application.response && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
              >
                <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <MessageSquare className="w-5 h-5" />
                  Javob
                </h2>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    Javob sanasi: {application.responseDate && new Date(application.responseDate).toLocaleDateString('uz-UZ')}
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm leading-relaxed">{application.response}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Student Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <User className="w-5 h-5" />
                Talaba ma&apos;lumotlari
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-400">Ism Familiya</Label>
                  <p className="font-medium">{application.studentName}</p>
                </div>
                
                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-400">Talaba ID</Label>
                  <p className="font-medium">{application.studentId}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <a href={`mailto:${application.email}`} className="text-blue-600 hover:underline text-sm">
                    {application.email}
                  </a>
                </div>
                
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <a href={`tel:${application.phone}`} className="text-blue-600 hover:underline text-sm">
                    {application.phone}
                  </a>
                </div>

                <div className="pt-2">
                  <Link href={`/students/${application.studentId}`}>
                    <Button variant="outline" size="sm" className="w-full">
                      Talaba profilini ko&apos;rish
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Application Meta */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
            >
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                <Calendar className="w-5 h-5" />
                Ariza ma&apos;lumotlari
              </h3>
              
              <div className="space-y-3">
                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-400">Yuborilgan sana</Label>
                  <p className="font-medium">
                    {new Date(application.submittedDate).toLocaleDateString('uz-UZ')}
                  </p>
                </div>
                
                {application.assignedTo && (
                  <div>
                    <Label className="text-sm text-gray-600 dark:text-gray-400">Mas&apos;ul shaxs</Label>
                    <p className="font-medium">{application.assignedTo}</p>
                  </div>
                )}
                
                <div>
                  <Label className="text-sm text-gray-600 dark:text-gray-400">Hozirgi holat</Label>
                  <div className="mt-1">
                    {getStatusBadge(application.status)}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-card p-6 rounded-lg border shadow-sm"
            >
              <h3 className="text-lg font-semibold mb-4">Amallar</h3>
              
              <div className="space-y-3">
                <Dialog open={isResponseModalOpen} onOpenChange={setIsResponseModalOpen}>
                  <DialogTrigger asChild>
                    <Button className="w-full flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Javob berish
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Arizaga javob berish</DialogTitle>
                      <DialogDescription>
                        Talaba arizasiga javob yozing va holatni yangilang
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="status">Yangi holat</Label>
                        <select
                          id="status"
                          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background mt-1"
                          value={selectedStatus}
                          onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                          <option value="">Holatni tanlang</option>
                          <option value="Ko&apos;rib chiqilmoqda">Ko&apos;rib chiqilmoqda</option>
                          <option value="Tasdiqlangan">Tasdiqlangan</option>
                          <option value="Rad etilgan">Rad etilgan</option>
                          <option value="Tugallangan">Tugallangan</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="response">Javob matni</Label>
                        <textarea
                          id="response"
                          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-background mt-1 min-h-[120px]"
                          placeholder="Arizaga javobingizni yozing..."
                          value={responseText}
                          onChange={(e) => setResponseText(e.target.value)}
                        />
                      </div>
                      
                      <div className="flex justify-end gap-2">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => setIsResponseModalOpen(false)}
                        >
                          Bekor qilish
                        </Button>
                        <Button 
                          onClick={handleSubmitResponse}
                          disabled={!responseText.trim() || !selectedStatus}
                          className="flex items-center gap-2"
                        >
                          <Save className="w-4 h-4" />
                          Javobni yuborish
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>

                <div className="grid grid-cols-2 gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange("Tasdiqlangan")}
                    className="flex items-center gap-1"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Tasdiqlash
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleStatusChange("Rad etilgan")}
                    className="flex items-center gap-1 text-red-600 hover:text-red-700"
                  >
                    <XCircle className="w-4 h-4" />
                    Rad etish
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetail;