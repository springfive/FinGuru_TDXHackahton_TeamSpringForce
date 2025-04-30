
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  agenda?: string;
}

interface MeetingsListProps {
  meetings: Meeting[];
}

const MeetingsList: React.FC<MeetingsListProps> = ({ meetings }) => {
  return (
    <Card className="dashboard-card animate-fade-in">
      <CardHeader>
        <CardTitle>Upcoming Meetings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {meetings.length > 0 ? (
            meetings.map((meeting) => (
              <div
                key={meeting.id}
                className="p-4 rounded-md border border-wealth-gray-200 hover:border-wealth-blue-300 bg-white transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-wealth-blue-100 rounded-md p-3 hidden sm:flex">
                    <Calendar className="h-5 w-5 text-wealth-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between gap-2 mb-1">
                      <h4 className="font-medium">{meeting.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-1 bg-wealth-blue-50 text-wealth-blue-700 rounded text-xs font-medium">
                          {meeting.date}
                        </span>
                        <span className="px-2 py-1 bg-wealth-gray-50 text-wealth-gray-700 rounded text-xs font-medium">
                          {meeting.time}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-wealth-gray-500 text-sm mb-3">
                      {meeting.duration} • {meeting.location}
                    </p>
                    
                    {meeting.agenda && (
                      <div className="mt-2">
                        <p className="text-sm text-wealth-gray-600 font-medium">Agenda:</p>
                        <p className="text-sm text-wealth-gray-600">{meeting.agenda}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-wealth-gray-500">No upcoming meetings scheduled.</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MeetingsList;
