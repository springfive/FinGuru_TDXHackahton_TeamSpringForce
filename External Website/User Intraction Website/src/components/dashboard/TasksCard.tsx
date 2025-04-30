
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { tasks } from "@/lib/data";
import { format, isBefore, isAfter, addDays } from 'date-fns';

const TasksCard = () => {
  const today = new Date();
  const nextWeek = addDays(today, 7);
  
  // Filter tasks and sort by due date (upcoming first)
  const pendingTasks = tasks
    .filter(task => task.status === 'pending')
    .filter(task => {
      const dueDate = new Date(task.dueDate);
      return isBefore(dueDate, nextWeek);
    })
    .sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  
  const getPriorityClass = (priority: string) => {
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
  
  const isOverdue = (dueDate: string) => {
    return isBefore(new Date(dueDate), today) && 
           format(new Date(dueDate), 'yyyy-MM-dd') !== format(today, 'yyyy-MM-dd');
  };
  
  return (
    <Card className="col-span-1 row-span-1 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Pending Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {pendingTasks.map(task => (
            <div key={task.id} className="flex items-start gap-3">
              <Checkbox className="mt-1" id={`task-${task.id}`} />
              <div className="flex-1">
                <div className="flex justify-between">
                  <label 
                    htmlFor={`task-${task.id}`} 
                    className="font-medium cursor-pointer"
                  >
                    {task.title}
                  </label>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getPriorityClass(task.priority)}`}>
                    {task.priority}
                  </span>
                </div>
                {task.clientName && (
                  <p className="text-xs text-muted-foreground mt-1">
                    {task.clientName}
                  </p>
                )}
                <div className={`text-xs ${isOverdue(task.dueDate) ? 'text-red-500 font-medium' : 'text-muted-foreground'} mt-1`}>
                  Due: {format(new Date(task.dueDate), 'MMM d, yyyy')}
                  {isOverdue(task.dueDate) && ' (Overdue)'}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TasksCard;
