"use client";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  UserRoundCheck,
  ChevronUp,
  LayoutDashboard,
  CreditCard,
  Building2,
  Settings,
  FileUser,
  Users,
  ClipboardList,
  User2,
} from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { usePathname } from "next/navigation";

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

const AppSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="pt-12">
      <Sidebar collapsible="icon" className="">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Sahifalar</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Link href={item.url}>
                    <SidebarMenuButton
                      tooltip={item.title.toUpperCase()}
                      className={`text-md flex items-center gap-3 w-full ${
                        pathname === item.url
                          ? "bg-blue-500 text-white hover:bg-blue-500/90 dark:hover:bg-blue-500/90"
                          : "hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800 text-gray-700"
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton className="text-lg">
                    <User2 /> John Doe <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Log out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
