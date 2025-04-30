
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { tasks } from "@/lib/data";
import { format, parseISO, isAfter, isBefore, addDays } from 'date-fns';
import { ListTodo } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";

const TasksPage = () => {
  // Get current date
  const today = new Date();
  
  // Task filters
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const overdueTasks = pendingTasks.filter(task => 
    isBefore(parseISO(task.dueDate), today) && 
    format(parseISO(task.dueDate), 'yyyy-MM-dd') !== format(today, 'yyyy-MM-dd')
  );
  const todayTasks = pendingTasks.filter(task => 
    format(parseISO(task.dueDate), 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')
  );
  
  // Group tasks by priority
  const highPriorityTasks = pendingTasks.filter(task => task.priority === 'high');
  const mediumPriorityTasks = pendingTasks.filter(task => task.priority === 'medium');
  const lowPriorityTasks = pendingTasks.filter(task => task.priority === 'low');
  
  // Helper function for priority styling
  const getPriorityClass = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Task Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Pending Tasks" 
                  value={pendingTasks.length} 
                  icon={<ListTodo className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="High Priority" 
                  value={highPriorityTasks.length} 
                  icon={<ListTodo className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Due Today" 
                  value={todayTasks.length} 
                  icon={<ListTodo className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="Overdue" 
                  value={overdueTasks.length} 
                  icon={<ListTodo className="h-5 w-5 text-primary" />} 
                />
              </div>
              
              {/* Tasks List */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* High Priority Tasks */}
                <Card>
                  <CardHeader className="bg-red-50">
                    <CardTitle className="text-red-800">High Priority</CardTitle>
                    <CardDescription>Tasks requiring immediate attention</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      {highPriorityTasks.length > 0 ? (
                        highPriorityTasks.map(task => (
                          <div key={task.id} className="flex items-start gap-3">
                            <Checkbox className="mt-1" id={`high-task-${task.id}`} />
                            <div className="flex-1">
                              <label 
                                htmlFor={`high-task-${task.id}`} 
                                className="font-medium cursor-pointer"
                              >
                                {task.title}
                              </label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                              {task.clientName && (
                                <p className="text-xs text-primary mt-1">
                                  Client: {task.clientName}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground mt-1">
                                Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-6">
                          No high priority tasks
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Medium Priority Tasks */}
                <Card>
                  <CardHeader className="bg-orange-50">
                    <CardTitle className="text-orange-800">Medium Priority</CardTitle>
                    <CardDescription>Tasks to complete soon</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      {mediumPriorityTasks.length > 0 ? (
                        mediumPriorityTasks.map(task => (
                          <div key={task.id} className="flex items-start gap-3">
                            <Checkbox className="mt-1" id={`med-task-${task.id}`} />
                            <div className="flex-1">
                              <label 
                                htmlFor={`med-task-${task.id}`} 
                                className="font-medium cursor-pointer"
                              >
                                {task.title}
                              </label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                              {task.clientName && (
                                <p className="text-xs text-primary mt-1">
                                  Client: {task.clientName}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground mt-1">
                                Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-6">
                          No medium priority tasks
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
                
                {/* Low Priority Tasks */}
                <Card>
                  <CardHeader className="bg-green-50">
                    <CardTitle className="text-green-800">Low Priority</CardTitle>
                    <CardDescription>Tasks to handle when time permits</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <div className="space-y-4">
                      {lowPriorityTasks.length > 0 ? (
                        lowPriorityTasks.map(task => (
                          <div key={task.id} className="flex items-start gap-3">
                            <Checkbox className="mt-1" id={`low-task-${task.id}`} />
                            <div className="flex-1">
                              <label 
                                htmlFor={`low-task-${task.id}`} 
                                className="font-medium cursor-pointer"
                              >
                                {task.title}
                              </label>
                              <p className="text-sm text-muted-foreground mt-1">
                                {task.description}
                              </p>
                              {task.clientName && (
                                <p className="text-xs text-primary mt-1">
                                  Client: {task.clientName}
                                </p>
                              )}
                              <p className="text-xs text-muted-foreground mt-1">
                                Due: {format(parseISO(task.dueDate), 'MMM d, yyyy')}
                              </p>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-center text-muted-foreground py-6">
                          No low priority tasks
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default TasksPage;
