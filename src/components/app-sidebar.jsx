"use client";
import { Contact, Home, Inbox, LogOut, ChartLine } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ConfirmationDialog } from "./confirmation-dialog";

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
import { Separator } from "./ui/separator";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/admin/dashboard",
    icon: Home,
  },
  {
    title: "Reports",
    url: "/admin/reports",
    icon: Inbox,
  },
  {
    title: "Contacts",
    url: "/admin/contacts",
    icon: Contact,
  },
  {
    title: "Analytics",
    url: "/admin/analytics",
    icon: ChartLine,
  },
];

export function AppSidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();
  const [logoutDiaglog, setLogoutDialog] = useState(false);
  return (
    <>
      <Sidebar variant="inset">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild className="h-12">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    className="w-8 h-8 mr-2"
                  />
                  <span>Krishna Dashboard</span>
                </Avatar>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <Separator orientation="horizontal" className="my-2" />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title} className="h-10">
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      <Link href={item.url}>
                        <item.icon />
                        <span className="text-base">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
                <Separator orientation="horizontal" className="my-2" />
                <SidebarMenuItem>
                  <SidebarMenuButton
                    asChild
                    onClick={() => setLogoutDialog(true)}
                  >
                    <button>
                      <LogOut />
                      <span>Logout</span>
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      {logoutDiaglog && (
        <ConfirmationDialog
          isOpen={logoutDiaglog}
          onClose={() => setLogoutDialog(false)}
          onConfirm={() => logout()}
          title="Confirm Logout"
          message={`Are you sure you want to logout?`}
          submitting={false}
        />
      )}
    </>
  );
}
