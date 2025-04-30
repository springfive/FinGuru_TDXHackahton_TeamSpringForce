
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import ClientsCard from "@/components/dashboard/ClientsCard";
import InvestmentsCard from "@/components/dashboard/InvestmentsCard";
import MeetingsCard from "@/components/dashboard/MeetingsCard";
import TasksCard from "@/components/dashboard/TasksCard";
import { Users, Calendar, Check, DollarSign } from "lucide-react";
import { getTotalAUM, getTotalClients, getUpcomingMeetings, getPendingTasks } from "@/lib/data";

const Index = () => {
  const totalAUM = getTotalAUM();
  const totalClients = getTotalClients();
  const upcomingMeetings = getUpcomingMeetings();
  const pendingTasks = getPendingTasks();

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Total Clients" 
                  value={totalClients} 
                  icon={<Users className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Assets Under Management" 
                  value={`$${(totalAUM / 1000000).toFixed(1)}M`}
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={3.5}
                />
                <StatCard 
                  title="Upcoming Meetings" 
                  value={upcomingMeetings} 
                  icon={<Calendar className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Pending Tasks" 
                  value={pendingTasks} 
                  icon={<Check className="h-5 w-5 text-primary" />} 
                />
              </div>
              
              {/* Main Dashboard Content */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* First Row: Investments and Clients */}
                <div className="lg:col-span-3 space-y-6">
                  <InvestmentsCard />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <MeetingsCard />
                    <TasksCard />
                  </div>
                </div>
                
                {/* Right Column: Clients */}
                <div className="lg:col-span-1 space-y-6">
                  <ClientsCard />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Index;
