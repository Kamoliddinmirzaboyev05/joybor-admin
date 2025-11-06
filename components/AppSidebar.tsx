"use client";

import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  UserRoundCheck,
  LayoutDashboard,
  CreditCard,
  Building2,
  Settings,
  FileUser,
  Users,
  ClipboardList,
  GraduationCap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Talabalar",
    url: "/students",
    icon: Users,
  },
  {
    title: "To'lovlar",
    url: "/payments",
    icon: CreditCard,
  },
  {
    title: "Yotoqxona",
    url: "/dormitory",
    icon: Building2,
  },
  {
    title: "Davomat",
    url: "/attendance",
    icon: UserRoundCheck,
  },
  {
    title: "Arizalar",
    url: "/applications",
    icon: FileUser,
  },
  {
    title: "Hisobotlar",
    url: "/reports",
    icon: ClipboardList,
  },
  {
    title: "Sozlamalar",
    url: "/settings",
    icon: Settings,
  },
];

export default function AppSidebar() {
  const pathname = usePathname();
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Save sidebar state to localStorage
  React.useEffect(() => {
    localStorage.setItem("sidebar-collapsed", JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  return (
    <div className="pt-12">
      <Sidebar collapsible="icon" className="border-r">
        <SidebarContent>
          <SidebarGroup>
            <AnimatePresence>
              {!isCollapsed && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SidebarGroupLabel>Sahifalar</SidebarGroupLabel>
                </motion.div>
              )}
            </AnimatePresence>
            <SidebarMenu>
              {items.map((item, index) => {
                const isActive = pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.2 }}
                    >
                      <SidebarMenuButton
                        asChild
                        tooltip={{
                          children: item.title,
                          className: "bg-gray-900 text-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700"
                        }}
                        isActive={isActive}
                        size="lg"
                        className={`relative transition-all duration-200 hover:bg-accent ${
                          isActive
                            ? "bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400"
                            : "hover:text-foreground"
                        }`}
                      >
                        <Link
                          href={item.url}
                          className={`flex items-center w-full ${isCollapsed ? "justify-center px-0" : "gap-2 px-2"}`}
                        >
                          <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{
                              type: "spring",
                              stiffness: 400,
                              damping: 17,
                            }}
                          >
                            <item.icon
                              className={`size-4 ${
                                isActive
                                  ? "text-blue-600 dark:text-blue-400"
                                  : ""
                              }`}
                            />
                          </motion.div>
                          <AnimatePresence>
                            {!isCollapsed && (
                              <motion.span
                                initial={{ opacity: 0, width: 0 }}
                                animate={{ opacity: 1, width: "auto" }}
                                exit={{ opacity: 0, width: 0 }}
                                transition={{ duration: 0.2 }}
                                className="truncate"
                              >
                                {item.title}
                              </motion.span>
                            )}
                          </AnimatePresence>
                          {isActive && (
                            <motion.div
                              layoutId="activeIndicator"
                              className="absolute inset-0 bg-blue-100 dark:bg-blue-900/20 rounded-md -z-10"
                              initial={false}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                              }}
                            />
                          )}
                        </Link>
                      </SidebarMenuButton>
                    </motion.div>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <SidebarMenuButton
                  tooltip={{
                    children: "Universitet Yotoqxona",
                    className: "bg-gray-900 text-gray-100 dark:bg-gray-800 dark:text-gray-100 dark:border dark:border-gray-700"
                  }}
                  size="lg"
                  className="transition-all duration-200"
                >
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                    <GraduationCap className="size-4" />
                  </div>
                  <AnimatePresence>
                    {!isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "auto" }}
                        exit={{ opacity: 0, width: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid flex-1 text-left text-sm leading-tight"
                      >
                        <span className="truncate font-semibold">
                          Universitet
                        </span>
                        <span className="truncate text-xs">Yotoqxona</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
