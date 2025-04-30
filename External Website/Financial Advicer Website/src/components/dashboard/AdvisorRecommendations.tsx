
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Recommendation {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  priority: "high" | "medium" | "low";
}

interface AdvisorRecommendationsProps {
  recommendations: Recommendation[];
}

const AdvisorRecommendations: React.FC<AdvisorRecommendationsProps> = ({
  recommendations,
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-risk-high text-white";
      case "medium":
        return "bg-risk-moderate text-white";
      case "low":
        return "bg-risk-conservative text-white";
      default:
        return "bg-wealth-gray-200 text-wealth-gray-700";
    }
  };

  const getCategoryBadge = (category: string) => {
    switch (category.toLowerCase()) {
      case "investment":
        return "bg-wealth-blue-100 text-wealth-blue-700 hover:bg-wealth-blue-200";
      case "tax":
        return "bg-wealth-green-100 text-wealth-green-700 hover:bg-wealth-green-200";
      case "insurance":
        return "bg-wealth-amber-100 text-wealth-amber-700 hover:bg-wealth-amber-200";
      default:
        return "bg-wealth-gray-100 text-wealth-gray-700 hover:bg-wealth-gray-200";
    }
  };

  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader>
        <CardTitle>Advisor Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y divide-wealth-gray-100">
          {recommendations.map((rec) => (
            <div key={rec.id} className="p-4 md:p-6 hover:bg-wealth-gray-50 transition-colors">
              <div className="flex flex-wrap gap-2 items-center justify-between mb-2">
                <Badge variant="outline" className={getCategoryBadge(rec.category)}>
                  {rec.category}
                </Badge>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-wealth-gray-500">{rec.date}</span>
                  <Badge className={`${getPriorityColor(rec.priority)} capitalize`}>
                    {rec.priority}
                  </Badge>
                </div>
              </div>
              <h4 className="font-medium text-lg mb-1">{rec.title}</h4>
              <p className="text-wealth-gray-600">{rec.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdvisorRecommendations;
