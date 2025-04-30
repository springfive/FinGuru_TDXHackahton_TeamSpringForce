
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { meetings } from "@/lib/data";
import { format, isAfter, isBefore, addDays } from 'date-fns';

const MeetingsCard = () => {
  // Get current date
  const today = new Date();
  const nextWeek = addDays(today, 7);
  
  // Filter meetings for the upcoming week
  const upcomingMeetings = meetings
    .filter(meeting => {
      const meetingDate = new Date(meeting.date);
      return (isAfter(meetingDate, today) || 
              format(meetingDate, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd')) && 
             isBefore(meetingDate, nextWeek);
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  
  return (
    <Card className="col-span-1 row-span-1 h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold">Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {upcomingMeetings.length > 0 ? (
            upcomingMeetings.map(meeting => (
              <div key={meeting.id} className="border-l-4 border-primary pl-4 py-2">
                <div className="flex justify-between">
                  <p className="font-medium">{meeting.clientName}</p>
                  <p className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {meeting.type}
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <p className="text-sm text-muted-foreground">
                    {format(new Date(meeting.date), 'EEE, MMM d')}
                  </p>
                  <span className="text-muted-foreground">•</span>
                  <p className="text-sm text-muted-foreground">{meeting.time}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-muted-foreground py-6">No meetings scheduled for this week</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingsCard;
