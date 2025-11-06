"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Download, Users } from "lucide-react";
import { motion } from "motion/react";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
});

const Students = () => {
  const genderOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" },
  ];
  const paymentOptions = [
    { value: "Haqdor", label: "Haqdor" },
    { value: "Qarzdor", label: "Qarzdor" },
  ];
  const roomOptions = [
    { value: "101", label: "101" },
    { value: "102", label: "102" },
  ];
  const students = [
    {
      id: 1,
      fio: "Aliyev Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      status: "Haqdor",
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 2,
      fio: "Valiyev Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      status: "Haqdor",
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 3,
      fio: "Hasanov Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      status: "Haqdor",
      yonalish: "Informatika",
      xona: 20,
    },
    {
      id: 4,
      fio: "Husanov Alisher",
      guruh: "IF-21",
      umumiy_tolov: 10000,
      status: "Haqdor",
      yonalish: "Informatika",
      xona: 20,
    },
  ];

  return (
    <div className="mt-6">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pageTitle"
        >
          <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
            <Users className="w-8 h-8" />
            Talabalar
          </h1>
          <p className="text-md text-gray-600 dark:text-muted-foreground">
            Yotoqxonada yashovchi talabalar ro&apos;yxati
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="studentFilters flex gap-4 mt-6 flex-wrap"
        >
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Jins"
            isClearable
            options={genderOptions}
          />
          <CreatableSelect
            className="w-44"
            classNamePrefix="react-select"
            placeholder="To&apos;lov holati"
            isClearable
            options={paymentOptions}
          />
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Xona"
            isClearable
            options={roomOptions}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="studentsList border-2 rounded-md mt-6"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <form className="searchForm" action="#">
              <input
                className="border border-gray-400 dark:border-sidebar-border dark:bg-input dark:text-foreground p-2 rounded m-4 w-64 "
                type="text"
                placeholder="Qidirish..."
              />
            </form>
            <button className="flex items-center gap-2 border px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-600 transition">
              <Download />
              Yuklab olish
            </button>
          </div>
          <Table className="bg-white dark:bg-card">
            <TableHeader>
              <TableRow className="bg-gray-100 dark:bg-card h-16">
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  NO
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  ISM FAMILIYA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md font-semibold">
                  YO&apos;NALISH
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  XONA
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  GURUH
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-center text-md font-semibold">
                  STATUS
                </TableHead>
                <TableHead className="text-gray-500 dark:text-muted-foreground text-md text-center font-semibold">
                  UMUMIY TO&apos;LOV
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((s, index) => (
                <motion.tr
                  key={s.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.3 }}
                  className="hover:bg-gray-50 dark:hover:bg-muted/50 h-16"
                >
                  <TableCell>{s.id}</TableCell>
                  <TableCell className="font-semibold min-w-[150px] hover:underline text-blue-600 text-md">
                    <Link href={`/students/${s.id}`}>{s.fio}</Link>
                  </TableCell>
                  <TableCell>{s.yonalish}</TableCell>
                  <TableCell className="text-center">
                    <span className="bg-blue-200  text-blue-800 p-2 rounded-full">
                      {s.xona}-xona
                    </span>
                  </TableCell>
                  <TableCell className="text-center">{s.guruh}</TableCell>
                  <TableCell className="text-center">{s.status}</TableCell>
                  <TableCell className="text-center text-green-600 font-bold">
                    {s.umumiy_tolov} so&apos;m
                  </TableCell>
                </motion.tr>
              ))}
            </TableBody>
          </Table>
        </motion.div>
      </div>
    </div>
  );
};

export default Students;
