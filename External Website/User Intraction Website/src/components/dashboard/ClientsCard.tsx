
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { clients } from "@/lib/data";

const ClientsCard = () => {
  // Sort clients by portfolio value (highest first)
  const topClients = [...clients].sort((a, b) => b.portfolioValue - a.portfolioValue).slice(0, 4);
  
  return (
    <Card className="col-span-1 row-span-1 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Top Clients</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {topClients.map((client) => (
            <div key={client.id} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {client.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{client.name}</p>
                  <p className="text-xs text-muted-foreground">{client.riskProfile}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ${client.portfolioValue.toLocaleString()}
                </p>
                <span className={`text-xs ${client.growth >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {client.growth >= 0 ? '+' : ''}{client.growth}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ClientsCard;
