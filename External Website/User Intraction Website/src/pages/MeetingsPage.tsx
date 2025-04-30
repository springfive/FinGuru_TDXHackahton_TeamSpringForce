
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { meetings } from "@/lib/data";
import { format, parseISO, isAfter, isBefore, addDays } from 'date-fns';
import { Calendar } from 'lucide-react';
import StatCard from "@/components/dashboard/StatCard";

const MeetingsPage = () => {
  // Get current date and dates for filtering
  const today = new Date();
  const nextWeek = addDays(today, 7);
  const nextMonth = addDays(today, 30);
  
  // Filter meetings
  const upcomingMeetings = meetings.filter(meeting => isAfter(parseISO(meeting.date), today));
  const thisWeekMeetings = upcomingMeetings.filter(meeting => 
    isBefore(parseISO(meeting.date), nextWeek)
  );
  const thisMonthMeetings = upcomingMeetings.filter(meeting => 
    isBefore(parseISO(meeting.date), nextMonth)
  );
  
  // Group meetings by date
  const meetingsByDate = upcomingMeetings.reduce((acc, meeting) => {
    const date = meeting.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(meeting);
    return acc;
  }, {});
  
  // Sort dates
  const sortedDates = Object.keys(meetingsByDate).sort((a, b) => 
    parseISO(a).getTime() - parseISO(b).getTime()
  );
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              {/* Meeting Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <StatCard 
                  title="Total Meetings" 
                  value={meetings.length} 
                  icon={<Calendar className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="This Week" 
                  value={thisWeekMeetings.length} 
                  icon={<Calendar className="h-5 w-5 text-primary" />} 
                />
                <StatCard 
                  title="This Month" 
                  value={thisMonthMeetings.length} 
                  icon={<Calendar className="h-5 w-5 text-primary" />} 
                />
              </div>
              
              {/* Upcoming Meetings */}
              <Card>
                <CardHeader>
                  <CardTitle>Scheduled Meetings</CardTitle>
                  <CardDescription>Your upcoming client appointments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {sortedDates.map(date => (
                      <div key={date} className="space-y-4">
                        <h3 className="font-semibold text-lg border-b pb-2 text-primary">
                          {format(parseISO(date), 'EEEE, MMMM d, yyyy')}
                        </h3>
                        <div className="space-y-3">
                          {meetingsByDate[date].map(meeting => (
                            <div key={meeting.id} className="bg-white p-4 rounded-lg shadow-sm border">
                              <div className="flex justify-between items-center">
                                <div>
                                  <h4 className="font-medium">{meeting.clientName}</h4>
                                  <p className="text-sm text-gray-600">{meeting.time}</p>
                                </div>
                                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                                  {meeting.type}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MeetingsPage;
