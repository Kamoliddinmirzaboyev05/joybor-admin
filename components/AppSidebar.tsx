"use client"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
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
import Image from "next/image";
import Link from "next/link";
import { DropdownMenu } from "./ui/dropdown-menu";
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

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
    url: "dormitory",
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
    title: "Settings",
    url: "/settings",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <div className="pt-12">
      <Sidebar collapsible="icon" className="">
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Applications</SidebarGroupLabel>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton className="text-lg" asChild>
                    <Link href={item.url}>
                      <item.icon className="text-lg" /> {item.title}
                    </Link>
                  </SidebarMenuButton>
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
