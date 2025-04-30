
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, ChevronDown, Search } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";

const DashboardHeader = () => {
  return (
    <header className="h-16 border-b flex items-center px-4 sm:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div className="hidden sm:block">
          <h1 className="font-semibold text-lg">Dashboard Overview</h1>
        </div>
      </div>
      
      <div className="flex-1" />
      
      <div className="flex items-center gap-3">
        <div className="rounded-full w-8 h-8 bg-gray-100 text-gray-500 flex items-center justify-center">
          <Search className="h-4 w-4" />
        </div>
        
        <div className="rounded-full w-8 h-8 bg-gray-100 text-gray-500 flex items-center justify-center">
          <Bell className="h-4 w-4" />
        </div>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 p-1">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>
              <div className="hidden sm:flex flex-col items-start text-sm">
                <span className="font-medium">John Doe</span>
                <span className="text-xs text-muted-foreground">Financial Advisor</span>
              </div>
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
