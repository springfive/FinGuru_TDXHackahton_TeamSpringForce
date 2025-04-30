
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import RiskProfile from "@/components/dashboard/RiskProfile";
import InvestmentChart from "@/components/dashboard/InvestmentChart";
import FinancialSummary from "@/components/dashboard/FinancialSummary";
import AdvisorRecommendations from "@/components/dashboard/AdvisorRecommendations";
import TaskList from "@/components/dashboard/TaskList";
import MeetingsList from "@/components/dashboard/MeetingsList";

// Sample data
const investmentData = [
  { name: "Equity", value: 4500000, color: "#3B82F6" },
  { name: "Mutual Funds", value: 2800000, color: "#10B981" },
  { name: "Fixed Income", value: 1800000, color: "#F59E0B" },
  { name: "Gold", value: 800000, color: "#FBBF24" },
  { name: "Real Estate", value: 3500000, color: "#6366F1" },
];

const assetData = [
  { label: "Real Estate", value: "₹3,50,00,000" },
  { label: "Investments", value: "₹1,34,00,000" },
  { label: "Cash & Bank", value: "₹25,00,000" },
  { label: "Others", value: "₹12,00,000" },
];

const liabilityData = [
  { label: "Home Loan", value: "₹85,00,000" },
  { label: "Car Loan", value: "₹12,00,000" },
  { label: "Personal Loan", value: "₹5,00,000" },
];

const recommendationsData = [
  {
    id: 1,
    title: "Rebalance Portfolio",
    description:
      "Consider rebalancing your investment portfolio to reduce exposure to high-volatility stocks and increase allocation to fixed income securities.",
    date: "24 Apr 2025",
    category: "Investment",
    priority: "high" as const,
  },
  {
    id: 2,
    title: "Tax-Loss Harvesting",
    description:
      "Implement tax-loss harvesting strategy before fiscal year end to optimize tax position.",
    date: "15 Apr 2025",
    category: "Tax",
    priority: "medium" as const,
  },
  {
    id: 3,
    title: "Health Insurance Review",
    description:
      "Review and update your health insurance policy to ensure adequate coverage for you and your family.",
    date: "10 Apr 2025",
    category: "Insurance",
    priority: "low" as const,
  },
];

const taskData = [
  {
    id: 1,
    title: "Submit income verification documents",
    dueDate: "30 Apr 2025",
    status: "pending" as const,
  },
  {
    id: 2,
    title: "Review retirement plan contribution",
    dueDate: "01 May 2025",
    status: "pending" as const,
  },
  {
    id: 3,
    title: "Sign updated investment policy statement",
    dueDate: "28 Apr 2025",
    status: "completed" as const,
  },
  {
    id: 4,
    title: "Complete risk assessment questionnaire",
    dueDate: "25 Apr 2025",
    status: "pending" as const,
  },
];

const meetingsData = [
  {
    id: 1,
    title: "Quarterly Portfolio Review",
    date: "May 5, 2025",
    time: "10:00 AM",
    duration: "1 hour",
    location: "Video call",
    agenda: "Review Q1 performance, discuss market outlook, and plan for Q2 investment strategy.",
  },
  {
    id: 2,
    title: "Tax Planning Session",
    date: "May 15, 2025",
    time: "2:30 PM",
    duration: "45 minutes",
    location: "Office Meeting",
    agenda: "Discuss year-end tax planning strategies and optimization opportunities.",
  },
];

const Index: React.FC = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-wealth-gray-500 mt-1">
            Welcome back, Gokul! Here's an overview of your financial status.
          </p>
        </div>

        <RiskProfile level="Moderate" score={65} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <InvestmentChart 
            data={investmentData} 
            total="₹1,34,00,000" 
          />
          
          <FinancialSummary 
            assets={assetData} 
            liabilities={liabilityData} 
            netWorth="₹4,19,00,000" 
          />
        </div>
        
        <AdvisorRecommendations recommendations={recommendationsData} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TaskList tasks={taskData} />
          <MeetingsList meetings={meetingsData} />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
