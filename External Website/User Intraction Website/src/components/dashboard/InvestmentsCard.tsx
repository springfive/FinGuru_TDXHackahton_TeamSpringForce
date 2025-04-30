
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip, Cell } from 'recharts';
import { investments } from "@/lib/data";

const InvestmentsCard = () => {
  const chartData = investments.map(inv => ({
    name: inv.name,
    value: inv.allocation,
    growth: inv.growth
  }));

  // Calculate average growth
  const avgGrowth = investments.reduce((acc, inv) => acc + inv.growth, 0) / investments.length;
  
  const totalValue = investments.reduce((total, inv) => total + inv.value, 0);
  
  return (
    <Card className="col-span-2 row-span-1 h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-semibold">Investment Allocation</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">
              ${totalValue.toLocaleString()}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${avgGrowth >= 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
              {avgGrowth >= 0 ? '+' : ''}{avgGrowth.toFixed(1)}%
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} barSize={40} barGap={8}>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => value.split(' ').slice(-1)[0]}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12 }}
                tickFormatter={(value) => `${value}%`}
              />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Allocation']}
                labelFormatter={(label) => label}
              />
              <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                {chartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.growth >= 0 ? '#6E59A5' : '#9b87f5'}
                    opacity={0.8}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="grid grid-cols-5 gap-2 mt-4">
          {investments.map((inv, index) => (
            <div key={inv.id} className="text-center">
              <p className="text-xs font-medium truncate">{inv.name.split(' ').slice(-1)[0]}</p>
              <p className={`text-xs ${inv.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {inv.growth >= 0 ? '+' : ''}{inv.growth}%
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InvestmentsCard;
