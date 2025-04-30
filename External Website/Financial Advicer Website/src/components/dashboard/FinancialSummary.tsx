
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface FinancialItem {
  label: string;
  value: string;
}

interface FinancialSummaryProps {
  assets: FinancialItem[];
  liabilities: FinancialItem[];
  netWorth: string;
}

const FinancialSummary: React.FC<FinancialSummaryProps> = ({
  assets,
  liabilities,
  netWorth,
}) => {
  const totalAssets = assets.reduce(
    (sum, item) => sum + parseInt(item.value.replace(/[^0-9]/g, "")),
    0
  );
  
  const totalLiabilities = liabilities.reduce(
    (sum, item) => sum + parseInt(item.value.replace(/[^0-9]/g, "")),
    0
  );

  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader>
        <CardTitle>Assets & Liabilities</CardTitle>
        <CardDescription>Financial summary</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-3">
            <h4 className="text-wealth-gray-500 font-medium">Assets</h4>
            {assets.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-wealth-gray-700 mr-2">{item.label}</span>
                <span className="font-medium text-wealth-gray-900 text-right truncate">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t border-dashed">
              <span className="font-medium">Total Assets</span>
              <span className="font-bold text-wealth-blue-700 text-right truncate">{`₹${totalAssets.toLocaleString()}`}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-wealth-gray-500 font-medium">Liabilities</h4>
            {liabilities.map((item, index) => (
              <div key={index} className="flex justify-between items-center">
                <span className="text-wealth-gray-700 mr-2">{item.label}</span>
                <span className="font-medium text-wealth-gray-900 text-right truncate">{item.value}</span>
              </div>
            ))}
            <div className="flex justify-between items-center pt-2 border-t border-dashed">
              <span className="font-medium">Total Liabilities</span>
              <span className="font-bold text-wealth-red-700 text-right truncate">{`₹${totalLiabilities.toLocaleString()}`}</span>
            </div>
          </div>

          <div className="bg-wealth-gray-50 p-4 rounded-lg border border-wealth-gray-200">
            <h4 className="text-wealth-gray-500 mb-3 font-medium">Summary</h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="mr-2">Total Assets</span>
                <span className="text-wealth-green-600 font-medium text-right truncate">{`₹${totalAssets.toLocaleString()}`}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="mr-2">Total Liabilities</span>
                <span className="text-wealth-red-600 font-medium text-right truncate">{`₹${totalLiabilities.toLocaleString()}`}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between items-center">
                <span className="font-medium">Net Worth</span>
                <span className="text-lg font-bold text-wealth-blue-700 text-right truncate">{netWorth}</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialSummary;
