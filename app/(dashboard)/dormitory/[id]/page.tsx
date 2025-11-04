"use client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EllipsisVertical, Filter, PlusCircle, SkipBack } from "lucide-react";

function DormitoryDetails() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <Button>
            <SkipBack />
            Orqaga
          </Button>
          <h2 className="text-2xl font-semibold flex items-center gap-1 dark:text-foreground">
            1-Qavat xonalari{" "}
            <span className="py-1 px-2 rounded-full bg-blue-200 text-xs text-blue-600">
              Yigitlar
            </span>
          </h2>
        </div>
        <div className="flex">
          <Button>
            <PlusCircle />
            Xona qo&apos;shish
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-8 gap-4">
        <div className="bg-card dark:bg-card rounded-md border p-4">
          <p className="text-sm text-gray-400 dark:text-muted-foreground">Jami xona:</p>
          <h2 className="text-xl font-bold dark:text-foreground">3</h2>
        </div>
        <div className="bg-card dark:bg-card rounded-md border p-4">
          <p className="text-sm text-gray-400 dark:text-muted-foreground">Jami xona:</p>
          <h2 className="text-xl font-bold dark:text-foreground">3</h2>
        </div>
        <div className="bg-card dark:bg-card rounded-md border p-4">
          <p className="text-sm text-gray-400 dark:text-muted-foreground">Jami xona:</p>
          <h2 className="text-xl font-bold dark:text-foreground">3</h2>
        </div>
        <div className="bg-card dark:bg-card rounded-md border p-4">
          <p className="text-sm text-gray-400 dark:text-muted-foreground">Jami xona:</p>
          <h2 className="text-xl font-bold dark:text-foreground">3</h2>
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-2 dark:text-foreground">
          <Filter />
          Filterlar:
        </div>
        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger
              className="data-[state=active]:bg-blue-500"
              value="all"
            >
              Barchasi
            </TabsTrigger>
            <TabsTrigger value="empty">Bo&apos;sh</TabsTrigger>
            <TabsTrigger value="unpaid">To&apos;lamagan</TabsTrigger>
            <TabsTrigger value="paid">To&apos;lgan</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="grid mt-6 grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4">
        <div className="rounded  p-4 border bg-card">
          <div className="flex justify-between items-center">
            <h2>101-xona</h2>
            <span className="flex items-center gap-6">
              <span className="border p-1 px-2 rounded-full text-xs">0/5</span>
              <button>
                <EllipsisVertical />
              </button>
            </span>
          </div>
          <div className="mt-4">
            <Progress value={33} />
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">1. M. Kamoliddin</p>
            <p className="text-sm">2. M. Kamoliddin</p>
            <p className="text-sm">3. M. Kamoliddin</p>
            <p className="text-sm">4. M. Kamoliddin</p>
            <p className="text-sm">5. M. Kamoliddin</p>
          </div>
        </div>
        <div className="rounded  p-4 border bg-card">
          <div className="flex justify-between items-center">
            <h2>101-xona</h2>
            <span className="flex items-center gap-6">
              <span className="border p-1 px-2 rounded-full text-xs">0/5</span>
              <button>
                <EllipsisVertical />
              </button>
            </span>
          </div>
          <div className="mt-4">
            <Progress value={33} />
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">1. M. Kamoliddin</p>
            <p className="text-sm">2. M. Kamoliddin</p>
            <p className="text-sm">3. M. Kamoliddin</p>
            <p className="text-sm">4. M. Kamoliddin</p>
            <p className="text-sm">5. M. Kamoliddin</p>
          </div>
        </div>
        <div className="rounded  p-4 border bg-card">
          <div className="flex justify-between items-center">
            <h2>101-xona</h2>
            <span className="flex items-center gap-6">
              <span className="border p-1 px-2 rounded-full text-xs">0/5</span>
              <button>
                <EllipsisVertical />
              </button>
            </span>
          </div>
          <div className="mt-4">
            <Progress value={33} />
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">1. M. Kamoliddin</p>
            <p className="text-sm">2. M. Kamoliddin</p>
            <p className="text-sm">3. M. Kamoliddin</p>
            <p className="text-sm">4. M. Kamoliddin</p>
            <p className="text-sm">5. M. Kamoliddin</p>
          </div>
        </div>
        <div className="rounded  p-4 border bg-card">
          <div className="flex justify-between items-center">
            <h2>101-xona</h2>
            <span className="flex items-center gap-6">
              <span className="border p-1 px-2 rounded-full text-xs">0/5</span>
              <button>
                <EllipsisVertical />
              </button>
            </span>
          </div>
          <div className="mt-4">
            <Progress value={33} />
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">1. M. Kamoliddin</p>
            <p className="text-sm">2. M. Kamoliddin</p>
            <p className="text-sm">3. M. Kamoliddin</p>
            <p className="text-sm">4. M. Kamoliddin</p>
            <p className="text-sm">5. M. Kamoliddin</p>
          </div>
        </div>
        <div className="rounded  p-4 border bg-card">
          <div className="flex justify-between items-center">
            <h2>101-xona</h2>
            <span className="flex items-center gap-6">
              <span className="border p-1 px-2 rounded-full text-xs">0/5</span>
              <button>
                <EllipsisVertical />
              </button>
            </span>
          </div>
          <div className="mt-4">
            <Progress value={33} />
          </div>
          <div className="flex flex-col mt-4">
            <p className="text-sm">1. M. Kamoliddin</p>
            <p className="text-sm">2. M. Kamoliddin</p>
            <p className="text-sm">3. M. Kamoliddin</p>
            <p className="text-sm">4. M. Kamoliddin</p>
            <p className="text-sm">5. M. Kamoliddin</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DormitoryDetails;