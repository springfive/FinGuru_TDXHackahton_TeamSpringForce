
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, MapPin, Video, Users, FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface Meeting {
  id: number;
  title: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  agenda: string;
  participants?: string[];
  virtual?: boolean;
  documents?: string[];
}

const MeetingsPage: React.FC = () => {
  const meetings: Meeting[] = [
    {
      id: 1,
      title: "Quarterly Portfolio Review",
      date: "May 5, 2025",
      time: "10:00 AM",
      duration: "1 hour",
      location: "Video Call",
      agenda: "Review Q1 performance, discuss market outlook, and plan for Q2 investment strategy.",
      participants: ["Rahul Sharma (Financial Advisor)", "Gokul S (You)"],
      virtual: true,
      documents: ["Q1 Portfolio Report", "Market Outlook Document"]
    },
    {
      id: 2,
      title: "Tax Planning Session",
      date: "May 15, 2025",
      time: "2:30 PM",
      duration: "45 minutes",
      location: "Office Meeting",
      agenda: "Discuss year-end tax planning strategies and optimization opportunities.",
      participants: ["Priya Patel (Tax Specialist)", "Rahul Sharma (Financial Advisor)", "Gokul S (You)"],
      virtual: false,
      documents: ["Tax Planning Worksheet", "Previous Year Tax Documents"]
    },
    {
      id: 3,
      title: "Retirement Planning Review",
      date: "May 25, 2025",
      time: "11:15 AM",
      duration: "1 hour 30 minutes",
      location: "Video Call",
      agenda: "Comprehensive review of retirement savings progress and future planning scenarios.",
      participants: ["Rahul Sharma (Financial Advisor)", "Gokul S (You)"],
      virtual: true,
      documents: ["Retirement Projection Model", "Pension Statement"]
    }
  ];

  // Upcoming meetings (future dates)
  const upcomingMeetings = meetings;

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Meetings</h1>
          <p className="text-wealth-gray-500 mt-1">Schedule and manage appointments</p>
        </div>
        
        <Card>
          <CardHeader>
            <CardTitle>Your Next Meeting</CardTitle>
            <CardDescription>Upcoming appointment with your advisor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-wealth-blue-50 border border-wealth-blue-100 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <h3 className="text-xl font-medium text-wealth-blue-800">{upcomingMeetings[0].title}</h3>
                <div className="flex items-center mt-2 md:mt-0">
                  {upcomingMeetings[0].virtual ? (
                    <Button size="sm" className="bg-wealth-blue-600 hover:bg-wealth-blue-700">
                      <Video className="h-4 w-4 mr-1" />
                      Join Meeting
                    </Button>
                  ) : (
                    <span className="text-sm bg-wealth-gray-100 text-wealth-gray-600 px-3 py-1 rounded-full">
                      In-Person Meeting
                    </span>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-3 text-wealth-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-wealth-gray-500">Date</p>
                      <p className="font-medium">{upcomingMeetings[0].date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-wealth-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-wealth-gray-500">Time</p>
                      <p className="font-medium">{upcomingMeetings[0].time} ({upcomingMeetings[0].duration})</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-wealth-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-wealth-gray-500">Location</p>
                      <p className="font-medium">{upcomingMeetings[0].location}</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start mb-4">
                    <FileText className="h-5 w-5 mr-3 text-wealth-blue-600 mt-0.5" />
                    <div>
                      <p className="text-sm text-wealth-gray-500">Agenda</p>
                      <p className="font-medium">{upcomingMeetings[0].agenda}</p>
                    </div>
                  </div>
                  
                  {upcomingMeetings[0].participants && (
                    <div className="flex items-start">
                      <Users className="h-5 w-5 mr-3 text-wealth-blue-600 mt-0.5" />
                      <div>
                        <p className="text-sm text-wealth-gray-500">Participants</p>
                        <ul className="space-y-1 mt-1">
                          {upcomingMeetings[0].participants.map((participant, index) => (
                            <li key={index} className="text-sm">{participant}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {upcomingMeetings[0].documents && (
                <div className="mt-6 pt-4 border-t border-wealth-blue-100">
                  <p className="text-sm font-medium text-wealth-gray-600 mb-2">Documents for Review</p>
                  <div className="flex flex-wrap gap-2">
                    {upcomingMeetings[0].documents.map((doc, index) => (
                      <div key={index} className="flex items-center bg-white border rounded-md px-3 py-1">
                        <FileText className="h-4 w-4 mr-2 text-wealth-blue-500" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Meetings</CardTitle>
            <CardDescription>Your scheduled appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {upcomingMeetings.slice(1).map((meeting) => (
                <div key={meeting.id} className="border rounded-lg hover:shadow-sm transition-shadow">
                  <div className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <h3 className="font-medium">{meeting.title}</h3>
                      <div className="mt-1 md:mt-0 text-sm text-wealth-gray-500">
                        {meeting.date} at {meeting.time}
                      </div>
                    </div>
                    
                    <div className="mt-3 flex flex-wrap gap-4 text-sm">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1 text-wealth-gray-400" />
                        <span>{meeting.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1 text-wealth-gray-400" />
                        <span>{meeting.location}</span>
                      </div>
                      {meeting.participants && (
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1 text-wealth-gray-400" />
                          <span>{meeting.participants.length} participants</span>
                        </div>
                      )}
                    </div>
                    
                    <Separator className="my-3" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-wealth-gray-600">
                        <FileText className="h-4 w-4 inline mr-1" />
                        {meeting.documents?.length || 0} document(s)
                      </span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Request New Meeting</CardTitle>
            <CardDescription>Schedule time with your financial advisor</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-wealth-gray-50 p-8 rounded-lg text-center">
              <p className="text-wealth-gray-500 mb-4">Need to discuss something with your advisor?</p>
              <Button>Schedule Appointment</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default MeetingsPage;
