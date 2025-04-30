
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const InvestmentDetails: React.FC = () => {
  // Sample investment data
  const investmentData = [
    { name: "Equity", value: 4500000, color: "#3B82F6" },
    { name: "Mutual Funds", value: 2800000, color: "#10B981" },
    { name: "Fixed Income", value: 1800000, color: "#F59E0B" },
    { name: "Gold", value: 800000, color: "#FBBF24" },
    { name: "Real Estate", value: 3500000, color: "#6366F1" },
  ];

  const totalInvestment = investmentData.reduce((sum, item) => sum + item.value, 0);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Investment Details</h1>
          <p className="text-wealth-gray-500 mt-1">View and manage your investment portfolio</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
            <CardDescription>Your current investment mix</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="h-[300px] flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={investmentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {investmentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `₹${Number(value).toLocaleString()}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Investment Breakdown</h3>
                <div className="space-y-3">
                  {investmentData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></div>
                        <span>{item.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">₹{item.value.toLocaleString()}</div>
                        <div className="text-sm text-wealth-gray-500">
                          {((item.value / totalInvestment) * 100).toFixed(1)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Portfolio Value</span>
                    <span className="text-xl font-bold text-wealth-blue-700">₹{totalInvestment.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Performance History</CardTitle>
            <CardDescription>Investment growth over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-wealth-gray-50 p-8 rounded-lg text-center">
              <p className="text-wealth-gray-500">Detailed performance history will be available soon</p>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Investment Recommendations</CardTitle>
            <CardDescription>Based on your risk profile and goals</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-wealth-blue-100 bg-wealth-blue-50 rounded-lg">
              <h4 className="font-medium mb-1">Consider increasing equity allocation</h4>
              <p className="text-wealth-gray-600 text-sm">
                Based on your age and risk profile, we recommend increasing equity allocation by 5-10% 
                for potential higher long-term returns.
              </p>
            </div>
            <div className="p-4 border border-wealth-blue-100 bg-wealth-blue-50 rounded-lg">
              <h4 className="font-medium mb-1">Diversify fixed income investments</h4>
              <p className="text-wealth-gray-600 text-sm">
                Consider adding corporate bonds to your portfolio to improve overall yield 
                while maintaining similar risk profile.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InvestmentDetails;
