"use client";

import { useEffect, useCallback, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
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
  const pathname = usePathname();
  const [defaultOpen, setDefaultOpen] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const checkAuth = useCallback(() => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem("token");
      if (!token && !pathname.includes('/login')) {
        router.replace("/login");
      }
    }
  }, [router, pathname]);

  useEffect(() => {
    checkAuth();
    
    // Load sidebar state from localStorage
    const savedState = localStorage.getItem("sidebar-collapsed");
    if (savedState !== null) {
      setDefaultOpen(!JSON.parse(savedState));
    }
    setIsLoaded(true);
  }, [checkAuth]);

  // Don't render until localStorage state is loaded to prevent hydration mismatch
  if (!isLoaded) {
    return null;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      storageKey="joybor-theme"
    >
      <SidebarProvider defaultOpen={defaultOpen}>
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