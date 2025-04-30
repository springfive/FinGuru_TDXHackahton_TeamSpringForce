
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { investments, clients } from "@/lib/data";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { DollarSign } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";

const FinancialsPage = () => {
  // Calculate financial metrics
  const totalAUM = clients.reduce((sum, client) => sum + client.portfolioValue, 0);
  const avgPortfolioValue = totalAUM / clients.length;
  const totalInvestmentValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const avgClientGrowth = (clients.reduce((sum, client) => sum + client.growth, 0) / clients.length).toFixed(1);
  
  // Generate monthly revenue data (simulated)
  const monthlyRevenueData = [
    { month: 'Jan', revenue: 42000 },
    { month: 'Feb', revenue: 44500 },
    { month: 'Mar', revenue: 48000 },
    { month: 'Apr', revenue: 46500 },
    { month: 'May', revenue: 49000 },
    { month: 'Jun', revenue: 52000 },
    { month: 'Jul', revenue: 51000 },
    { month: 'Aug', revenue: 53500 },
    { month: 'Sep', revenue: 56000 },
    { month: 'Oct', revenue: 58500 },
    { month: 'Nov', revenue: 61000 },
    { month: 'Dec', revenue: 64000 }
  ];
  
  // Generate asset growth data (simulated)
  const assetGrowthData = [
    { quarter: 'Q1 2024', aum: 3200000 },
    { quarter: 'Q2 2024', aum: 3350000 },
    { quarter: 'Q3 2024', aum: 3450000 },
    { quarter: 'Q4 2024', aum: 3550000 },
    { quarter: 'Q1 2025', aum: totalAUM }
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Financial Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Total AUM" 
                  value={`$${(totalAUM / 1000000).toFixed(1)}M`} 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={4.2}
                />
                <StatCard 
                  title="Average Portfolio" 
                  value={`$${(avgPortfolioValue / 1000).toFixed(0)}K`} 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={2.8}
                />
                <StatCard 
                  title="Revenue YTD" 
                  value="$574K" 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={5.7}
                />
                <StatCard 
                  title="Client Growth" 
                  value={`${avgClientGrowth}%`} 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={Number(avgClientGrowth)}
                />
              </div>
              
              {/* Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Monthly Revenue */}
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Revenue</CardTitle>
                    <CardDescription>Recurring revenue analysis</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={monthlyRevenueData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="month" />
                          <YAxis 
                            tickFormatter={(value) => `$${value / 1000}k`}
                          />
                          <Tooltip 
                            formatter={(value) => [`$${value.toLocaleString()}`, 'Revenue']}
                          />
                          <Legend />
                          <Bar dataKey="revenue" fill="#6E59A5" name="Revenue" />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* AUM Growth */}
                <Card>
                  <CardHeader>
                    <CardTitle>Assets Under Management</CardTitle>
                    <CardDescription>Historical growth of AUM</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={assetGrowthData}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="quarter" />
                          <YAxis 
                            tickFormatter={(value) => `$${value / 1000000}M`}
                          />
                          <Tooltip 
                            formatter={(value) => [`$${(value / 1000000).toFixed(1)}M`, 'AUM']}
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="aum" 
                            stroke="#8B5CF6" 
                            name="AUM"
                            strokeWidth={2}
                            activeDot={{ r: 8 }}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Financial Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Financial Summary</CardTitle>
                  <CardDescription>Key metrics and performance indicators</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Performance</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Total Revenue YTD</span>
                          <span className="font-semibold">$574,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Revenue Growth</span>
                          <span className="font-semibold text-green-600">+8.7%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Expenses YTD</span>
                          <span className="font-semibold">$218,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Net Profit</span>
                          <span className="font-semibold">$356,000</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Profit Margin</span>
                          <span className="font-semibold">62%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium mb-4">Client Metrics</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Total Clients</span>
                          <span className="font-semibold">{clients.length}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Average AUM per Client</span>
                          <span className="font-semibold">${(avgPortfolioValue).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Average Revenue per Client</span>
                          <span className="font-semibold">$114,800</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">Client Retention Rate</span>
                          <span className="font-semibold">94%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-muted-foreground">New Clients YTD</span>
                          <span className="font-semibold">12</span>
                        </div>
                      </div>
                    </div>
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

export default FinancialsPage;
