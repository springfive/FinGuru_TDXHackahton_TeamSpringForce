
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { investments } from "@/lib/data";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import StatCard from "@/components/dashboard/StatCard";
import { DollarSign } from "lucide-react";

const InvestmentsPage = () => {
  // Calculate investment stats
  const totalInvestmentValue = investments.reduce((sum, inv) => sum + inv.value, 0);
  const avgGrowth = (investments.reduce((sum, inv) => sum + inv.growth, 0) / investments.length).toFixed(1);
  const positiveGrowth = investments.filter(inv => inv.growth > 0).length;
  const positiveGrowthPercentage = Math.round((positiveGrowth / investments.length) * 100);

  // Prepare pie chart data
  const pieData = investments.map(inv => ({
    name: inv.name,
    value: inv.allocation,
  }));

  // Colors for the pie chart
  const COLORS = ['#6E59A5', '#8B5CF6', '#9b87f5', '#D6BCFA', '#E5DEFF'];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Investment Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Total Investments" 
                  value={`$${(totalInvestmentValue / 1000000).toFixed(1)}M`} 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Average Growth" 
                  value={`${avgGrowth}%`}
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                  trend={Number(avgGrowth)}
                />
                <StatCard 
                  title="Asset Classes" 
                  value={investments.length} 
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Growing Assets" 
                  value={`${positiveGrowthPercentage}%`}
                  icon={<DollarSign className="h-5 w-5 text-primary" />} 
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Pie Chart */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Asset Allocation</CardTitle>
                    <CardDescription>Distribution of investments by asset class</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-72">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={pieData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}
                          >
                            {pieData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip formatter={(value) => [`${value}%`, 'Allocation']} />
                          <Legend />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Investment Table */}
                <Card className="lg:col-span-1">
                  <CardHeader>
                    <CardTitle>Investment Details</CardTitle>
                    <CardDescription>Performance of each asset class</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-6 py-3">Asset Class</th>
                            <th scope="col" className="px-6 py-3">Value</th>
                            <th scope="col" className="px-6 py-3">Growth</th>
                            <th scope="col" className="px-6 py-3">Allocation</th>
                          </tr>
                        </thead>
                        <tbody>
                          {investments.map((investment) => (
                            <tr key={investment.id} className="bg-white border-b">
                              <td className="px-6 py-4 font-medium">{investment.name}</td>
                              <td className="px-6 py-4">${investment.value.toLocaleString()}</td>
                              <td className={`px-6 py-4 ${investment.growth >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                                {investment.growth >= 0 ? '+' : ''}{investment.growth}%
                              </td>
                              <td className="px-6 py-4">{investment.allocation}%</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default InvestmentsPage;
