
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Users, Calendar, Check, DollarSign, ChartBar, Settings, Home, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
}

const SidebarItem = ({ icon: Icon, label, to }: SidebarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild className={cn(isActive && "bg-sidebar-accent text-sidebar-accent-foreground")}>
        <Link to={to} className="flex items-center gap-3">
          <Icon className="h-5 w-5" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-6 text-sidebar-foreground">
          <h1 className="text-xl font-bold">AdvisorHub</h1>
          <p className="text-sm text-sidebar-foreground/70">Financial Advisory Dashboard</p>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem icon={Home} label="Dashboard" to="/" />
              <SidebarItem icon={Users} label="Clients" to="/clients" />
              <SidebarItem icon={ChartBar} label="Investments" to="/investments" />
              <SidebarItem icon={Calendar} label="Meetings" to="/meetings" />
              <SidebarItem icon={Check} label="Tasks" to="/tasks" />
              <SidebarItem icon={DollarSign} label="Financials" to="/financials" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarItem icon={Settings} label="Settings" to="/settings" />
              <SidebarItem icon={LogOut} label="Logout" to="/logout" />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
