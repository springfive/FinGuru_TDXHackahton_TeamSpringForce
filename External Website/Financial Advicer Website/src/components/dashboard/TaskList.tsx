
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  status: "pending" | "completed";
}

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  const [checkedTasks, setCheckedTasks] = React.useState<number[]>(
    tasks.filter(task => task.status === "completed").map(task => task.id)
  );

  const handleTaskToggle = (taskId: number) => {
    setCheckedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const isPastDue = (dateString: string) => {
    const dueDate = new Date(dateString);
    const today = new Date();
    return dueDate < today && !checkedTasks.includes(dateString as unknown as number);
  };

  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Tasks</CardTitle>
        <Badge variant="outline" className="bg-wealth-gray-100">
          {tasks.filter(task => task.status === "pending").length} pending
        </Badge>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {tasks.map((task) => {
            const isChecked = checkedTasks.includes(task.id);
            const isPastDueTask = isPastDue(task.dueDate);
            
            return (
              <li 
                key={task.id}
                className={`flex items-start space-x-3 p-3 rounded-md transition-colors 
                  ${isChecked ? 'bg-wealth-gray-50' : 'hover:bg-wealth-gray-50'}`}
              >
                <Checkbox
                  checked={isChecked}
                  onCheckedChange={() => handleTaskToggle(task.id)}
                  className="mt-1"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap justify-between gap-2">
                    <p className={`font-medium transition-all ${isChecked ? 'line-through text-wealth-gray-500' : ''}`}>
                      {task.title}
                    </p>
                    <div>
                      {isPastDueTask ? (
                        <Badge variant="outline" className="bg-risk-high/10 text-risk-high border-risk-high">
                          Past due
                        </Badge>
                      ) : (
                        <span className="text-sm text-wealth-gray-500">Due: {task.dueDate}</span>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
};

export default TaskList;
