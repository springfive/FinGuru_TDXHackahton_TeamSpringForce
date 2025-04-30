import { LightningElement, wire, track } from 'lwc';
import getAllTasks from '@salesforce/apex/TaskController.getAllTasks';
import getUpcomingMeetings from '@salesforce/apex/TaskController.getUpcomingMeetings';

export default class Task extends LightningElement {
    @track tasks = [];
    totalTasks = 0;
    pendingTasks = 0;

    @track meetings = [];

    @wire(getAllTasks)
    wiredTasks({ error, data }) {
        if (data) {
            const today = new Date();
            this.tasks = data.map(task => {
                const dueDate = new Date(task.ActivityDate);
                const isCompleted = false;

                return {
                    ...task,
                    isCompleted,
                    className: 'task-box',
                    titleClass: 'task-title',
                    formattedDate: dueDate.toLocaleDateString('en-GB', {
                        day: '2-digit', month: 'short', year: 'numeric'
                    }),
                    isPastDue: dueDate < today
                };
            });
            this.totalTasks = this.tasks.length;
            this.pendingTasks = this.totalTasks;
        } else if (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    handleTaskToggle(event) {
        const taskId = event.target.dataset.id;
        this.tasks = this.tasks.map(task => {
            if (task.Id === taskId) {
                task.isCompleted = !task.isCompleted;
                task.className = task.isCompleted ? 'task-box completed-bg' : 'task-box';
                task.titleClass = task.isCompleted ? 'task-title completed' : 'task-title';
            }
            return task;
        });

        this.pendingTasks = this.tasks.filter(task => !task.isCompleted).length;
    }


    // ✅ Fetch upcoming meetings (added)
    @wire(getUpcomingMeetings)
    wiredMeetings({ error, data }) {
        if (data) {
            this.meetings = data.map(meeting => {
                const dateObj = new Date(meeting.Advice_Date_Time__c);
                return {
                    ...meeting,
        cleanAgenda: meeting.Reccommendation__c?.replace(/<[^>]+>/g, '').trim(),
                    date: dateObj.toLocaleDateString('en-US', {
                        month: 'short', day: 'numeric', year: 'numeric'
                    }),
                    time: dateObj.toLocaleTimeString('en-US', {
                        hour: '2-digit', minute: '2-digit'
                    })
                };
            });
        } else if (error) {
            console.error('Error fetching upcoming meetings:', error);
        }
    }
}