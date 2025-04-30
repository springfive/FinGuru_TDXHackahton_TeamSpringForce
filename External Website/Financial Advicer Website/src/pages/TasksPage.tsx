
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: "pending" | "completed" | "overdue";
  description?: string;
  category?: string;
}

const TasksPage: React.FC = () => {
  const tasks: Task[] = [
    {
      id: 1,
      title: "Submit income verification documents",
      dueDate: "30 Apr 2025",
      status: "pending",
      description: "Please provide your latest salary slips and tax returns for portfolio review.",
      category: "Documentation"
    },
    {
      id: 2,
      title: "Review retirement plan contribution",
      dueDate: "01 May 2025",
      status: "pending",
      description: "Review and confirm if you want to increase your monthly retirement fund contribution.",
      category: "Planning"
    },
    {
      id: 3,
      title: "Sign updated investment policy statement",
      dueDate: "28 Apr 2025",
      status: "completed",
      description: "The updated policy reflects your new risk tolerance and investment goals.",
      category: "Documentation"
    },
    {
      id: 4,
      title: "Complete risk assessment questionnaire",
      dueDate: "25 Apr 2025",
      status: "overdue",
      description: "This helps us understand your current risk appetite and investment preferences.",
      category: "Assessment"
    },
    {
      id: 5,
      title: "Review insurance coverage",
      dueDate: "10 May 2025",
      status: "pending",
      description: "Ensure your insurance policies provide adequate coverage for your current needs.",
      category: "Insurance"
    },
    {
      id: 6,
      title: "Set up automatic investment plan",
      dueDate: "15 Apr 2025",
      status: "completed",
      description: "Your monthly automatic investments have been set up successfully.",
      category: "Investment"
    },
  ];

  const pendingTasks = tasks.filter(task => task.status === "pending");
  const completedTasks = tasks.filter(task => task.status === "completed");
  const overdueTasks = tasks.filter(task => task.status === "overdue");

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "pending":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "overdue":
        return <AlertCircle className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  };

  const renderTaskList = (taskList: Task[]) => {
    return (
      <div className="space-y-4">
        {taskList.length === 0 ? (
          <p className="text-center py-8 text-wealth-gray-500">No tasks found</p>
        ) : (
          taskList.map((task) => (
            <Card key={task.id}>
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getStatusIcon(task.status)}</div>
                  <div className="flex-1">
                    <h3 className="font-medium">{task.title}</h3>
                    {task.description && (
                      <p className="text-wealth-gray-600 text-sm mt-1">{task.description}</p>
                    )}
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs bg-wealth-gray-100 text-wealth-gray-600 px-2 py-1 rounded-md">
                        {task.category}
                      </span>
                      <span className="text-sm text-wealth-gray-500">Due: {task.dueDate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Tasks</h1>
          <p className="text-wealth-gray-500 mt-1">Manage your financial tasks</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="rounded-full bg-blue-100 p-3 mb-2">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="text-xl font-bold">{pendingTasks.length}</div>
              <div className="text-wealth-gray-500">Pending Tasks</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="rounded-full bg-red-100 p-3 mb-2">
                <AlertCircle className="h-6 w-6 text-red-600" />
              </div>
              <div className="text-xl font-bold">{overdueTasks.length}</div>
              <div className="text-wealth-gray-500">Overdue Tasks</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center">
              <div className="rounded-full bg-green-100 p-3 mb-2">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <div className="text-xl font-bold">{completedTasks.length}</div>
              <div className="text-wealth-gray-500">Completed Tasks</div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="all">All Tasks</TabsTrigger>
            <TabsTrigger value="pending">Pending</TabsTrigger>
            <TabsTrigger value="overdue">Overdue</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {renderTaskList(tasks)}
          </TabsContent>
          
          <TabsContent value="pending" className="mt-0">
            {renderTaskList(pendingTasks)}
          </TabsContent>
          
          <TabsContent value="overdue" className="mt-0">
            {renderTaskList(overdueTasks)}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            {renderTaskList(completedTasks)}
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TasksPage;
