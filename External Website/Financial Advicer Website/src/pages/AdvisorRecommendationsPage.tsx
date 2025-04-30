
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  priority: "high" | "medium" | "low";
}

const AdvisorRecommendationsPage: React.FC = () => {
  const recommendations: Recommendation[] = [
    {
      id: 1,
      title: "Rebalance Portfolio",
      description: "Consider rebalancing your investment portfolio to reduce exposure to high-volatility stocks and increase allocation to fixed income securities.",
      date: "24 Apr 2025",
      category: "Investment",
      priority: "high",
    },
    {
      id: 2,
      title: "Tax-Loss Harvesting",
      description: "Implement tax-loss harvesting strategy before fiscal year end to optimize tax position.",
      date: "15 Apr 2025",
      category: "Tax",
      priority: "medium",
    },
    {
      id: 3,
      title: "Health Insurance Review",
      description: "Review and update your health insurance policy to ensure adequate coverage for you and your family.",
      date: "10 Apr 2025",
      category: "Insurance",
      priority: "low",
    },
    {
      id: 4,
      title: "Retirement Planning Session",
      description: "Schedule a detailed retirement planning session to review and adjust your long-term financial goals.",
      date: "30 Apr 2025",
      category: "Planning",
      priority: "medium",
    },
    {
      id: 5,
      title: "Education Fund Allocation",
      description: "Consider increasing monthly contribution to children's education fund to account for rising education costs.",
      date: "17 Apr 2025",
      category: "Planning",
      priority: "high",
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Investment":
        return "bg-blue-100 text-blue-800";
      case "Tax":
        return "bg-purple-100 text-purple-800";
      case "Insurance":
        return "bg-indigo-100 text-indigo-800";
      case "Planning":
        return "bg-teal-100 text-teal-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Advisor Recommendations</h1>
          <p className="text-wealth-gray-500 mt-1">Financial advice tailored for you</p>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">{rec.title}</h3>
                    <span className="text-sm text-wealth-gray-500">{rec.date}</span>
                  </div>
                  <p className="text-wealth-gray-600 mb-4">{rec.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getCategoryColor(rec.category)}>{rec.category}</Badge>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority.charAt(0).toUpperCase() + rec.priority.slice(1)} Priority
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Schedule Advisory Meeting</CardTitle>
            <CardDescription>Discuss these recommendations with your financial advisor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-wealth-blue-50 p-4 rounded-lg border border-wealth-blue-100">
              <p className="text-wealth-gray-600">
                To discuss these recommendations in detail, consider scheduling a meeting with your advisor.
                Visit the Meetings section to find available slots for your next consultation.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdvisorRecommendationsPage;
