
import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface InvestmentData {
  name: string;
  value: number;
  color: string;
}

interface InvestmentChartProps {
  data: InvestmentData[];
  total: string;
}

const InvestmentChart: React.FC<InvestmentChartProps> = ({ data, total }) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 shadow-md rounded-md border border-wealth-gray-200">
          <p className="font-medium">{payload[0].name}</p>
          <p className="text-wealth-blue-500">{formatCurrency(payload[0].value)}</p>
          <p className="text-wealth-gray-500 text-sm">
            {Math.round((payload[0].value / data.reduce((sum, item) => sum + item.value, 0)) * 100)}%
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Investment Portfolio</CardTitle>
            <CardDescription>Asset allocation</CardDescription>
          </div>
          <div className="text-right">
            <p className="text-sm text-wealth-gray-500">Total Value</p>
            <p className="text-2xl font-bold text-wealth-gray-900">{total}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend
                layout="vertical"
                verticalAlign="middle"
                align="right"
                formatter={(value, entry, index) => (
                  <span className="text-sm text-wealth-gray-700">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentChart;
