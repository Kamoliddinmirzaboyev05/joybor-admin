import { Building, CreditCardIcon, File, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="mt-6 dark:bg-background">
      <div className="pageTitle">
        <h1 className="text-3xl font-semibold text-black">Dashboard</h1>
        <p className="text-md text-gray-600">
          Yotoqxona boshqaruvi umumiy ko&apos;rinishi
        </p>
      </div>
      <div className="dashboardCards py-8 flex  justify-between gap-6 mt-6 flex-wrap">
        <div className="dashboardCard border-1 p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground">
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <div className=" rounded-full flex justify-center items-center w-12 h-12 bg-[#2b6cef] text-white">
              <Users className="text-3xl" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">TALABALAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Yigitlar:</p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Qizlar:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">0</p>
            </div>
          </div>
        </div>
        <div className="dashboardCard border-1 p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground">
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <div className=" rounded-full flex justify-center items-center w-12 h-12 bg-[#0dad79] text-white">
              <Building className="text-3xl" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">
              BO&apos;SH JOYLAR
            </h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">
                Jami bo&apos;sh:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">
                Yigitlar uchun:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Qizlar uchun:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">0</p>
            </div>
          </div>
        </div>
        <div className="dashboardCard border-1 p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground">
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <div className="rounded-full flex justify-center items-center w-12 h-12 bg-[#e78a07] text-white">
              <CreditCardIcon />
            </div>
            <h2 className="text-lg font-bold text-gray-900">TO&apos;LOVLAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Qarzdorlar:</p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Haqdorlar:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">0</p>
            </div>
          </div>
        </div>
        <div className="dashboardCard border-1 p-6 shadow-md rounded-lg flex-1 min-w-[250px] bg-white dark:bg-card dark:text-foreground">
          <div className="dashboardCardTop pb-8 flex justify-center items-center flex-col gap-4">
            <div className=" rounded-full flex justify-center items-center w-12 h-12 bg-[#2b6cef] text-white">
              <File className="text-3xl" />
            </div>
            <h2 className="text-lg font-bold text-gray-900">ARIZALAR</h2>
          </div>
          <div className="cardData">
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Jami:</p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 font-medium flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">
                Qabul qilingan:
              </p>
              <p className="text-sm font-medium text-[#2b6cef]">0</p>
            </div>
            <div className="w-full pb-2 flex justify-between items-center mt-4">
              <p className="text-sm font-medium text-gray-600">Rad etilgan:</p>
              <p className="text-sm font-semibold text-[#2b6cef]">0</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboardAnalitic flex gap-6 flex-wrap mb-12">
        <div className="monthlyIncome flex-1 bg-white p-6 rounded-lg shadow-md border-1 min-w-[300px] min-h-[350px]">
          <h2 className="text-xl font-semibold mb-4">Oylik daromad</h2>
        </div>
        <div className="monthlyIncome flex-1 bg-white p-6 rounded-lg shadow-md border-1 min-w-[300px] min-h-[350px]">
          <h2 className="text-xl font-semibold mb-4">Xonalar holati</h2>
        </div>
      </div>
    </div>
  );
}
