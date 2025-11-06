"use client";

import { Building, CreditCardIcon, File, Users, LayoutDashboard } from "lucide-react";
import { motion } from "motion/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Home() {
  // Oylik daromad ma'lumotlari
  const monthlyIncomeData = [
    { month: 'Yan', income: 45000000 },
    { month: 'Fev', income: 52000000 },
    { month: 'Mar', income: 48000000 },
    { month: 'Apr', income: 61000000 },
    { month: 'May', income: 55000000 },
    { month: 'Iyun', income: 67000000 },
    { month: 'Iyul', income: 72000000 },
    { month: 'Avg', income: 68000000 },
    { month: 'Sen', income: 75000000 },
    { month: 'Okt', income: 71000000 },
    { month: 'Noy', income: 78000000 },
    { month: 'Dek', income: 82000000 }
  ];

  // Xonalar holati ma'lumotlari
  const roomStatusData = [
    { name: "To'lgan", value: 180, color: '#ef4444' },
    { name: "To'lmagan", value: 85, color: '#f59e0b' },
    { name: "Bo'sh", value: 135, color: '#10b981' }
  ];

  return (
    <div className="mt-6 dark:bg-background">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="pageTitle"
      >
        <h1 className="text-3xl font-semibold text-black dark:text-foreground flex items-center gap-3">
          <LayoutDashboard className="w-8 h-8" />
          Dashboard
        </h1>
        <p className="text-md text-gray-600 dark:text-muted-foreground">
          Yotoqxona boshqaruvi umumiy ko&apos;rinishi
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.2 }}
        className="dashboardCards py-8 flex justify-between gap-6 mt-6 flex-wrap"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.2 }}
          className="dashboardCard border p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground"
        >
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
              className="rounded-full flex justify-center items-center w-12 h-12 bg-[#2b6cef] text-white"
            >
              <Users className="text-3xl" />
            </motion.div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-foreground">TALABALAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">485</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Yigitlar:</p>
              <p className="text-sm font-medium text-[#2b6cef]">285</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Qizlar:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">200</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.13, duration: 0.2 }}
          className="dashboardCard border p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground"
        >
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.18, type: "spring", stiffness: 400 }}
              className="rounded-full flex justify-center items-center w-12 h-12 bg-[#0dad79] text-white"
            >
              <Building className="text-3xl" />
            </motion.div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-foreground">
              BO&apos;SH JOYLAR
            </h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">
                Jami bo&apos;sh:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">115</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">
                Yigitlar uchun:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">65</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Qizlar uchun:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">50</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.16, duration: 0.2 }}
          className="dashboardCard border p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground"
        >
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.21, type: "spring", stiffness: 400 }}
              className="rounded-full flex justify-center items-center w-12 h-12 bg-[#e78a07] text-white"
            >
              <CreditCardIcon />
            </motion.div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-foreground">TO&apos;LOVLAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">242.5M</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Qarzdorlar:</p>
              <p className="text-sm font-medium text-[#2b6cef]">28</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Haqdorlar:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">457</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.19, duration: 0.2 }}
          className="dashboardCard border p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground"
        >
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.24, type: "spring", stiffness: 400 }}
              className="rounded-full flex justify-center items-center w-12 h-12 bg-[#2b6cef] text-white"
            >
              <File className="text-3xl" />
            </motion.div>
            <h2 className="text-lg font-bold text-gray-900 dark:text-foreground">ARIZALAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">15</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">
                Qabul qilingan:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">8</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600 dark:text-muted-foreground">Rad etilgan:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">2</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.2 }}
        className="dashboardAnalitic flex gap-6 flex-wrap mb-12"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.2 }}
          className="monthlyIncome flex-1 bg-white dark:bg-card p-6 rounded-lg shadow-md border min-w-[300px] min-h-[350px]"
        >
          <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Oylik daromad</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyIncomeData}>
                <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
                <XAxis 
                  dataKey="month" 
                  className="text-sm"
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  className="text-sm"
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`}
                />
                <Tooltip 
                  formatter={(value: number) => [`${(value / 1000000).toFixed(1)}M so'm`, 'Daromad']}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#2563eb" 
                  strokeWidth={3}
                  dot={{ fill: '#2563eb', strokeWidth: 2, r: 4 }}
                  activeDot={{ r: 6, stroke: '#2563eb', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.33, duration: 0.2 }}
          className="monthlyIncome flex-1 bg-white dark:bg-card p-6 rounded-lg shadow-md border min-w-[300px] min-h-[350px]"
        >
          <h2 className="text-xl font-semibold mb-4 dark:text-foreground">Xonalar holati</h2>
          <div className="h-64 flex items-center justify-center">
            <div className="w-full h-full flex items-center">
              <div className="w-1/2 h-full">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={200} height={200}>
                    <Pie
                      data={roomStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={30}
                      outerRadius={70}
                      paddingAngle={3}
                      dataKey="value"
                      animationBegin={0}
                      animationDuration={800}
                    >
                      {roomStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value} ta`, 'Xonalar']}
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="w-1/2 pl-6">
                <div className="space-y-4">
                  {roomStatusData.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.55 + index * 0.03, duration: 0.15 }}
                      className="flex items-center gap-3"
                    >
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium dark:text-foreground">{item.name}</p>
                        <p className="text-xs text-gray-500 dark:text-muted-foreground">{item.value} ta xona</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}