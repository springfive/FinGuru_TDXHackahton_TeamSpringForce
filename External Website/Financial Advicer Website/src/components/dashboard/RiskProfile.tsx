
import React from "react";
import { CircleArrowDown, CircleArrowUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";

type RiskLevel = "Conservative" | "Moderate" | "High";

interface RiskProfileProps {
  level: RiskLevel;
  score: number;
}

const RiskProfile: React.FC<RiskProfileProps> = ({ level, score }) => {
  const getColorClass = (level: RiskLevel) => {
    switch (level) {
      case "Conservative":
        return "bg-risk-conservative";
      case "Moderate":
        return "bg-risk-moderate";
      case "High":
        return "bg-risk-high";
    }
  };

  const getTextColorClass = (level: RiskLevel) => {
    switch (level) {
      case "Conservative":
        return "text-risk-conservative";
      case "Moderate":
        return "text-risk-moderate";
      case "High":
        return "text-risk-high";
    }
  };

  const getIcon = (level: RiskLevel) => {
    switch (level) {
      case "Conservative":
        return <CircleArrowDown className="h-5 w-5 text-risk-conservative" />;
      case "Moderate":
        return <CircleArrowDown className="h-5 w-5 text-risk-moderate" />;
      case "High":
        return <CircleArrowUp className="h-5 w-5 text-risk-high" />;
    }
  };

  return (
    <div className="dashboard-card p-6 animate-fade-in">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h3 className="text-wealth-gray-500">Risk Profile</h3>
          <div className="mt-2 flex items-center">
            <span className={`text-2xl font-bold ${getTextColorClass(level)}`}>{level}</span>
            <div className="ml-2">{getIcon(level)}</div>
          </div>
        </div>
        <div className="flex items-center px-3 py-1 rounded-full bg-wealth-gray-100">
          <span className={`text-sm font-medium ${getTextColorClass(level)}`}>Score: {score}/100</span>
        </div>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-xs mb-1">
          <span>Conservative</span>
          <span>Moderate</span>
          <span>High Risk</span>
        </div>
        <div className="h-2 w-full bg-wealth-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full ${getColorClass(level)} rounded-full transition-all duration-500 ease-in-out`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default RiskProfile;
