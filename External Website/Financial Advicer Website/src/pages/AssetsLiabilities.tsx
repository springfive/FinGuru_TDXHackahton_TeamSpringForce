
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Wallet, Home, Car, CreditCard } from "lucide-react";

const AssetsLiabilities: React.FC = () => {
  const assetData = [
    { label: "Real Estate", value: "₹3,50,00,000", icon: Home },
    { label: "Investments", value: "₹1,34,00,000", icon: Wallet },
    { label: "Cash & Bank", value: "₹25,00,000", icon: Wallet },
    { label: "Others", value: "₹12,00,000", icon: Wallet },
  ];
  
  const liabilityData = [
    { label: "Home Loan", value: "₹85,00,000", icon: Home },
    { label: "Car Loan", value: "₹12,00,000", icon: Car },
    { label: "Personal Loan", value: "₹5,00,000", icon: CreditCard },
  ];

  const totalAssets = 52100000; // Pre-calculated for display
  const totalLiabilities = 10200000; // Pre-calculated for display
  const netWorth = totalAssets - totalLiabilities;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Assets & Liabilities</h1>
          <p className="text-wealth-gray-500 mt-1">Track your financial health</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Financial Overview</CardTitle>
              <CardDescription>Complete breakdown of your assets and liabilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Wallet className="h-5 w-5 mr-2 text-wealth-blue-500" />
                    Assets
                  </h3>
                  
                  {assetData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4 mr-2 text-wealth-gray-400" />
                        <span>{item.label}</span>
                      </div>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">Total Assets</span>
                    <span className="font-bold text-wealth-green-600">₹{totalAssets.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <CreditCard className="h-5 w-5 mr-2 text-wealth-red-500" />
                    Liabilities
                  </h3>
                  
                  {liabilityData.map((item, index) => (
                    <div key={index} className="flex justify-between items-center border-b pb-3">
                      <div className="flex items-center">
                        <item.icon className="h-4 w-4 mr-2 text-wealth-gray-400" />
                        <span>{item.label}</span>
                      </div>
                      <span className="font-medium">{item.value}</span>
                    </div>
                  ))}
                  
                  <div className="flex justify-between items-center pt-2">
                    <span className="font-bold">Total Liabilities</span>
                    <span className="font-bold text-wealth-red-600">₹{totalLiabilities.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Net Worth</CardTitle>
              <CardDescription>Your overall financial position</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col items-center justify-center h-full space-y-6">
                <div className="text-center">
                  <div className="text-wealth-gray-500 mb-1">Total Assets</div>
                  <div className="text-lg font-bold text-wealth-green-600">₹{totalAssets.toLocaleString()}</div>
                </div>
                
                <div className="text-center">
                  <div className="text-wealth-gray-500 mb-1">Total Liabilities</div>
                  <div className="text-lg font-bold text-wealth-red-600">₹{totalLiabilities.toLocaleString()}</div>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <div className="text-wealth-gray-500 mb-1">Net Worth</div>
                  <div className="text-2xl font-bold text-wealth-blue-700">₹{netWorth.toLocaleString()}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Assets Growth Projection</CardTitle>
            <CardDescription>Based on current savings and investment patterns</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-wealth-gray-50 p-8 rounded-lg text-center">
              <p className="text-wealth-gray-500">Detailed growth projections and analysis coming soon</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AssetsLiabilities;
