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
import { Download } from "lucide-react";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
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
        <div className="pageTitle">
          <h1 className="text-3xl font-semibold">Talabalar</h1>
          <p className="text-md text-gray-600">
            Yotoqxonada yashovchi talabalar ro&apos;yxati
          </p>
        </div>
        <div className="studentFilters flex gap-4 mt-6 flex-wrap">
          <CreatableSelect
            className="w-36"
            placeholder="Jins"
            isClearable
            options={genderOptions}
          />
          <CreatableSelect
            className="w-44"
            placeholder="To'lov holati"
            isClearable
            options={paymentOptions}
          />
          <CreatableSelect
            className="w-36"
            placeholder="Xona"
            isClearable
            options={roomOptions}
          />
        </div>
        <div className="studentsList border-2 rounded-md mt-6">
          <div className="flex justify-between items-center p-4 border-b">
            <form className="searchForm" action="#">
              <input
                className="border border-gray-400 p-2 rounded m-4 w-64 "
                type="text"
                placeholder="Qidirish..."
              />
            </form>
            <button className="flex items-center gap-2 border px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-600 transition">
              <Download />
              Yuklab olish
            </button>
          </div>
          <Table className="bg-white">
            <TableHeader>
              <TableRow className="bg-gray-100 h-16">
                <TableHead className="text-gray-500 text-md font-semibold">
                  NO
                </TableHead>
                <TableHead className="text-gray-500 text-md font-semibold">
                  ISM FAMILIYA
                </TableHead>
                <TableHead className="text-gray-500 text-md font-semibold">
                  YO&apos;NALISH
                </TableHead>
                <TableHead className="text-gray-500 text-center text-md font-semibold">
                  XONA
                </TableHead>
                <TableHead className="text-gray-500 text-center text-md font-semibold">
                  GURUH
                </TableHead>
                <TableHead className="text-gray-500 text-center text-md font-semibold">
                  STATUS
                </TableHead>
                <TableHead className="text-gray-500 text-md text-center font-semibold">
                  UMUMIY TO&apos;LOV
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((s) => (
                <TableRow key={s.id} className="hover:bg-gray-50 h-16">
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
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Students;
