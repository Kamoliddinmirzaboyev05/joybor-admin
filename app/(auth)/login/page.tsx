"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { motion } from "motion/react";
import { 
  LogIn, 
  User, 
  Lock, 
  Eye, 
  EyeOff, 
  Building2,
  Shield,
  CheckCircle
} from "lucide-react";

export default function LoginPage() {
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleCheck = async () => {
    if (password === "" || login === "") {
      toast.error("Login va password maydonlari bo&apos;sh bo&apos;lishi mumkin emas!");
      return;
    } 
    
    if (password.length < 4 || login.length < 4) {
      toast.error("Login va password maydonlari 4 ta belgidan kam bo&apos;lishi mumkin emas!");
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (login === "admin" && password === "admin") {
      toast.success("Tizimga muvaffaqiyatli kirdingiz!");
      localStorage.setItem("token", "kirdi");
      router.push("/");
    } else {
      toast.error("Login yoki parol xato!");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-20 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
      />
      
      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -3, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-32 right-32 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
      />

      <motion.div
        animate={{ 
          y: [0, -10, 0],
          x: [0, 5, 0]
        }}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute top-1/3 right-20 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20"
      />

      <div className="w-full max-w-md relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <Card className="w-full shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg">
            <CardHeader className="space-y-6 pb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200
                }}
                className="flex flex-col items-center space-y-4"
              >
                <div className="relative">
                  <div className="rounded-full shadow-lg border-4 border-blue-100 dark:border-blue-800 w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -inset-2 rounded-full border-2 border-dashed border-blue-300 dark:border-blue-700"
                  />
                </div>
                
                <div className="text-center space-y-2">
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Yotoqxona Boshqaruvi
                  </CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Administrativ panelga kirish uchun ma&apos;lumotlaringizni kiriting
                  </p>
                </div>
              </motion.div>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleCheck();
              }}>
                <div className="space-y-5">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="login" className="text-sm font-medium flex items-center gap-2">
                      <User className="w-4 h-4 text-blue-600" />
                      Login
                    </Label>
                    <div className="relative">
                      <Input
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        id="login"
                        type="text"
                        placeholder="Foydalanuvchi nomi"
                        className="pl-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                      <Lock className="w-4 h-4 text-blue-600" />
                      Parol
                    </Label>
                    <div className="relative">
                      <Input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        placeholder="Parolingizni kiriting"
                        type={showPassword ? "text" : "password"}
                        className="pl-10 pr-10 h-12 border-2 focus:border-blue-500 transition-colors"
                        required
                      />
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100"
                    >
                      {isLoading ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <span className="flex items-center gap-2">
                          <LogIn className="w-4 h-4" />
                          Kirish
                        </span>
                      )}
                    </Button>
                  </motion.div>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4 pt-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="flex items-center justify-center space-x-4 text-xs text-gray-500 dark:text-gray-400"
              >
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  <span>Xavfsiz</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  <span>Ishonchli</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="text-center"
              >
                <p className="text-xs text-gray-400 dark:text-gray-500">
                  Demo: login: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">admin</span>, 
                  parol: <span className="font-mono bg-gray-100 dark:bg-gray-700 px-1 rounded">admin</span>
                </p>
              </motion.div>
            </CardFooter>
          </Card>
        </motion.div>

        {/* Additional floating elements around the card */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -top-4 -right-4 w-8 h-8 bg-blue-300 dark:bg-blue-700 rounded-full opacity-30"
        />
        
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-6 -left-6 w-6 h-6 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20"
        />
      </div>
    </div>
  );
}