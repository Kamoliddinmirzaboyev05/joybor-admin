"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { EllipsisVertical, Filter, Building2 } from "lucide-react";
import { motion } from "motion/react";

// react-select ni faqat clientda ishlashi uchun
const CreatableSelect = dynamic(() => import("react-select/creatable"), {
  ssr: false,
  loading: () => <div className="w-36 h-10 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
});
const Dormitory = () => {
  const genderOptions = [
    { value: "erkak", label: "Erkak" },
    { value: "ayol", label: "Ayol" },
  ];
  const roomStatusOptions = [
    { value: "tolgan", label: "To'lgan" },
    { value: "tolmagan", label: "To'lmagan" },
    { value: "bosh", label: "Bo'sh" },
  ];
  const rooms = [
    { id: 1, name: "101-xona", status: "Bo'sh" },
    { id: 2, name: "102-xona", status: "To'lgan" },
    { id: 3, name: "103-xona", status: "Bo'sh" },
    { id: 4, name: "104-xona", status: "To'lmagan" },
    { id: 5, name: "105-xona", status: "Bo'sh" },
    { id: 6, name: "106-xona", status: "Bo'sh" },
    { id: 7, name: "107-xona", status: "Bo'sh" },
    { id: 8, name: "108-xona", status: "Bo'sh" },
    { id: 9, name: "109-xona", status: "Bo'sh" },
    { id: 10, name: "110-xona", status: "Bo'sh" },
    { id: 11, name: "111-xona", status: "Bo'sh" },
    { id: 12, name: "112-xona", status: "Bo'sh" },
  ];
  const floors = [
    { id: 1, name: "1-qavat", type: "Yigitlar" },
    { id: 2, name: "2-qavat", type: "Qizlar" },
  ];

  return (
    <div className="mt-8">
      <div className="rounded-lg">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pageTitle flex justify-between items-center mb-6"
        >
          <div>
            <h1 className="text-3xl font-semibold dark:text-foreground flex items-center gap-3">
              <Building2 className="w-8 h-8" />
              Yotoqxona
            </h1>
            <p className="text-md text-gray-600 dark:text-muted-foreground mt-1">
              Xonalar va qavatlar boshqaruvi
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="addBtns flex justify-center items-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 py-2 px-4 items-center gap-2 text-white rounded hover:bg-blue-700 transition-colors"
            >
              + Qavat qo&apos;shish
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 py-2 px-4 items-center gap-2 text-white rounded hover:bg-blue-700 transition-colors"
            >
              + Xona qo&apos;shish
            </motion.button>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="dormitoryFilters flex justify-start items-center gap-3"
        >
          <h2 className="text-md flex items-center gap-1 font-regular text-gray-700 dark:text-muted-foreground">
            <Filter />
            Filterlar:
          </h2>
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Jins"
            isClearable
            options={genderOptions}
          />
          <CreatableSelect
            className="w-36"
            classNamePrefix="react-select"
            placeholder="Xona holati"
            isClearable
            options={roomStatusOptions}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="floors"
        >
          {floors?.map((floor, floorIndex) => {
            return (
              <motion.div
                key={floor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + floorIndex * 0.2, duration: 0.5 }}
              >
                <Link
                  href={`/dormitory/${floor.id}`}
                  className="floorBlock block relative bg-white dark:bg-card p-4 rounded mt-6 border-gray-300 dark:border-sidebar-border border hover:shadow-lg transition-shadow"
                >
                <motion.span
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 text-2xl rounded-full p-3 right-4 bg-white dark:bg-muted text-gray-400 dark:text-muted-foreground cursor-pointer hover:bg-gray-200 dark:hover:bg-muted/80 transition-colors"
                >
                  <EllipsisVertical />
                </motion.span>
                <div className="floorTitle flex justify-start items-center pb-2 mb-4">
                  <h2 className="text-xl font-semibold dark:text-foreground">{floor.name}</h2>
                  <span
                    className={`flex justify-center items-center gap-1 ml-4 px-4 py-1 rounded-full ${
                      floor.type === "Yigitlar" ? "bg-blue-100" : "bg-pink-100"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        floor.type === "Yigitlar"
                          ? "text-blue-600"
                          : "text-pink-600"
                      } font-semibold`}
                    >
                      {floor.type}
                    </p>
                  </span>
                </div>
                <div className="floorBox ">
                  <div className="roomBox flex flex-wrap gap-4">
                    {rooms?.map((room) => {
                      return (
                        <div
                          key={room.id}
                          className="px-9 py-3 border border-gray-300 dark:border-sidebar-border rounded p-4 bg-[#f9fafb] dark:bg-background shadow flex flex-col justify-center items-center w-fit"
                        >
                          <p className="text-md font-semibold pb-4 dark:text-foreground">
                            {room.name}
                          </p>
                          <span className="bg-gray-100 dark:bg-background flex justify-center items-center py-1 px-2 rounded-full w-fit">
                            <p className="text-sm font-semibold text-gray-700 dark:text-muted-foreground">
                              {room.status.toUpperCase()}
                            </p>
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Dormitory;
