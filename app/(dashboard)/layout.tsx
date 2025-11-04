"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    // Check if we're on the client side before accessing localStorage
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (!token) router.push("/login");
    }
  }, [router]);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-gray-50 dark:bg-background">
          {/* Sidebar */}
          <AppSidebar />
          
          {/* Main content wrapper */}
          <div className="flex-1 flex flex-col w-full min-w-0">
            {/* Navbar */}
            <Navbar />
            
            {/* Content with top padding for navbar */}
            <main className="flex-1 px-4 pt-4 md:px-6 lg:px-8">
              {children}
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
}