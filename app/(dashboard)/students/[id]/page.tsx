"use client";

import { Button } from "@/components/ui/button";
import { SkipBackIcon, User } from "lucide-react";
import { motion } from "motion/react";

const StudentProfile = () => {
  return (
    <div className="container flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border mt-2 w-full bg-white dark:bg-card p-6 rounded-lg shadow-md"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="profileBlockTop flex items-center flex-wrap justify-between"
        >
          <Button
            className="dark:text-foreground"
            onClick={() => {
              window.history.back();
            }}
          >
            <SkipBackIcon />
            Orqaga
          </Button>
          <h2 className="text-3xl font-bold flex items-center gap-3 mb-4 dark:text-foreground">
            <User className=" text-blue-700  " />
            Talaba Profili
          </h2>
          <div className="actionBtns flex gap-4 items-center">
            <Button className="dark:text-foreground">Tahrirlash</Button>
            <Button className="dark:text-foreground">O&apos;chirish</Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="row gap-10 mt-2 grid md:grid-cols-[150px_1fr]"
        >
          <div className="profileImgBox shado-md md:w-50 md:h-50 lg:w-40 lg:h-40 rounded flex items-center bg-gray-200 dark:bg-input justify-center border overflow-hidden border-gray-300 dark:border-sidebar-border">
            <h1 className="text-8xl font-bold text-center text-gray-700 dark:text-foreground">
              MK
            </h1>
          </div>
          <div>
            <div className="div w-full">
              <div className="inputRow grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">
                    Ismi
                  </label>
                  <input
                    disabled
                    className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:text-foreground dark:bg-input"
                    type="text"
                    placeholder="-"
                  />
                </div>

                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">
                    Familiyasi
                  </label>
                  <input
                    disabled
                    className="border py-2 px-4 rounded bg-gray-100 border-gray-300 dark:border-sidebar-border w-full dark:text-foreground dark:bg-input"
                    type="text"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
            <div className="div">
              <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">
                    Otasining ismi
                  </label>
                  <input
                    disabled
                    className="border py-2 px-4 rounded bg-gray-100 border-gray-300 dark:border-sidebar-border w-full dark:text-foreground dark:bg-input"
                    type="text"
                    placeholder="-"
                  />
                </div>

                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">
                    Telefon raqami
                  </label>
                  <input
                    disabled
                    className="border py-2 px-4 rounded bg-gray-100 border-gray-300 dark:border-sidebar-border w-full dark:text-foreground dark:bg-input"
                    type="text"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="space-y-6 mt-6"
        >
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Fakulteti</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Yo&apos;nalishi</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 dark:border-sidebar-border border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Guruhi</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>
          </div>

          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Qavat</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Xona</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Viloyat (Shahar)</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>
          </div>

          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Passport ID</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Passport JSHSHIR</label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">
                Qabul qilingan sana
              </label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>
          </div>

          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">
                Umumiy to&apos;lov
              </label>
              <input
                disabled
                className="border py-2 px-4 dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full dark:bg-input"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default StudentProfile;