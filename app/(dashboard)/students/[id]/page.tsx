"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const StudentProfile = () => {
  return (
    <div className="container flex justify-center items-center">
      <div className="profileBloc mt-2 w-full bg-white dark:bg-card p-6 rounded-lg shadow-md">
        <div className="profileBlockTop flex items-center flex-wrap justify-between">
          <Button
            onClick={() => {
              window.history.back();
            }}
          />
          <h2 className="text-3xl font-bold flex items-center gap-3 mb-4 dark:text-foreground">
            <Check className=" text-blue-700  " />
            Talaba Profili
          </h2>
          <div className="actionBtns flex gap-4 items-center">
            <Button />
            <Button />
          </div>
        </div>
        <div className="row gap-10 mt-2 grid md:grid-cols-[150px_1fr] ">
          <div className="profileImgBox shado-md md:w-50 md:h-50 lg:w-40 lg:h-40 rounded flex items-center bg-gray-200 dark:bg-muted justify-center border overflow-hidden border-gray-300 dark:border-sidebar-border">
            <h1 className="text-8xl font-bold text-center text-gray-700 dark:text-foreground">MK</h1>
          </div>
          <div>
            <div className="div w-full">
              <div className="inputRow grid  grid-cols-1  lg:grid-cols-2  gap-6">
                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">Ismi</label>
                  <input
                    disabled
                    className="border py-2 px-4 rounded bg-gray-100 dark:bg-input border-gray-300 dark:border-sidebar-border w-full dark:text-foreground"
                    type="text"
                    placeholder="-"
                  />
                </div>

                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-muted-foreground">Familiyasi</label>
                  <input
                    disabled
                    className="border py-2 px-4 rounded bg-gray-100 dark:bg-input border-gray-300 dark:border-sidebar-border w-full dark:text-foreground"
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
                    className="border py-2 px-4 rounded bg-gray-100 dark:bg-input border-gray-300 dark:border-sidebar-border w-full dark:text-foreground"
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
                    className="border py-2 px-4 rounded bg-gray-100 dark:bg-input border-gray-300 dark:border-sidebar-border w-full dark:text-foreground"
                    type="text"
                    placeholder="-"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Fakulteti</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Yo&apos;nalishi</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Guruhi</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Qavat</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Xona</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Viloyat (Shahar)</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Tuman (Shahar)</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Yo&apos;nalishi</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Guruhi</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Passport ID </label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">Passport JSHSHIR</label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
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
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500">
                {" "}
                Umumiy to&apos;lov
              </label>
              <input
                disabled
                className="border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
