"use client";
import { Button } from "@/components/ui/button";
import { BadgeCheck, Check, StepBack } from "lucide-react";

function Profile() {
  return (
    <div className="container flex justify-center ">
      <div className="profileBloc dark:bg-card mt-2 w-full bg-white p-6 rounded-lg shadow-md dark:text-foreground">
        <div className="mb-4 flex items-center flex-wrap justify-between">
          <Button
            variant={"secondary"}
            onClick={() => {
              window.history.back();
            }}
          >
            <StepBack /> Orqaga
          </Button>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <BadgeCheck className=" text-blue-700  " />
            Admin Profili
          </h2>
          <div className="actionBtns flex gap-4 items-center">
            <Button>Tahrirlash</Button>
          </div>
        </div>
        <div className="row gap-10 mt-2 grid grid-cols-1 lg:grid-cols-[150px_1fr] dark:text-foreground ">
          <div className="profileImgBox shadow-md h-80 lg:w-40 lg:h-40  rounded flex items-center bg-gray-200 justify-center border overflow-hidden border-gray-300 dark:bg-input dark:border-sidebar-border ">
            <h1 className="text-8xl font-bold text-center text-gray-700 dark:text-foreground">
              AP
            </h1>
          </div>
          <div>
            <div className="div w-full">
              <div className="inputRow grid   grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-foreground">
                    Ismi
                  </label>
                  <input
                    disabled
                    className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                    type="text"
                    placeholder="-"
                  />
                </div>

                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-foreground">
                    Familiyasi
                  </label>
                  <input
                    disabled
                    className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                    type="text"
                    placeholder="-"
                  />
                </div>
              </div>
              <div className="inputRow grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500  dark:text-foreground">
                    Ismi
                  </label>
                  <input
                    disabled
                    className="border  py-2 px-4 dark:bg-input dark:border-sidebar-border rounded bg-gray-100 border-gray-300 w-full"
                    type="text"
                    placeholder="-"
                  />
                </div>

                <div className="inputCol flex flex-col gap-2 mb-4">
                  <label className="text-sm text-gray-500 dark:text-foreground">
                    Familiyasi
                  </label>
                  <input
                    disabled
                    className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
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
              <label className="text-sm text-gray-500 dark:text-foreground">
                Fakulteti
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                Yo&apos;nalishi
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                Guruhi
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>

        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                Passport ID{" "}
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                Passport JSHSHIR
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>

            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                Qabul qilingan sana
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
        <div className="div">
          <div className="inputRow grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="inputCol flex flex-col gap-2 mb-4">
              <label className="text-sm text-gray-500 dark:text-foreground">
                {" "}
                Umumiy to&apos;lov
              </label>
              <input
                disabled
                className="border dark:bg-input dark:border-sidebar-border py-2 px-4 rounded bg-gray-100 border-gray-300 w-full"
                type="text"
                placeholder="-"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
