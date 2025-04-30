
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { clients } from "@/lib/data";
import StatCard from "@/components/dashboard/StatCard";
import { Users, DollarSign } from "lucide-react";

const ClientsPage = () => {
  // Calculate client stats
  const totalClients = clients.length;
  const totalAUM = clients.reduce((total, client) => total + client.portfolioValue, 0);
  const avgPortfolioValue = totalAUM / totalClients;
  const growingPortfolios = clients.filter(client => client.growth > 0).length;
  const growthPercentage = Math.round((growingPortfolios / totalClients) * 100);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Client Stats */}
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
                />
                <StatCard 
                  title="Average Portfolio" 
                  value={`$${(avgPortfolioValue / 1000).toFixed(0)}K`}
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Growing Portfolios" 
                  value={`${growthPercentage}%`}
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={growthPercentage - 50}
                />
              </div>
              
              {/* Client List */}
              <Card>
                <CardHeader>
                  <CardTitle>Client Portfolio Overview</CardTitle>
                  <CardDescription>Manage your client relationships and portfolios</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="divide-y">
                    {clients.map(client => (
                      <div key={client.id} className="py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {client.name.split(' ').map(n => n[0]).join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{client.name}</p>
                            <p className="text-sm text-muted-foreground">{client.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-8">
                          <div>
                            <p className="text-sm text-muted-foreground">Risk Profile</p>
                            <p className="font-medium">{client.riskProfile}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Portfolio Value</p>
                            <p className="font-medium">${client.portfolioValue.toLocaleString()}</p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Growth</p>
                            <p className={`font-medium ${client.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                              {client.growth >= 0 ? '+' : ''}{client.growth}%
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default ClientsPage;
