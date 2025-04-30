
import React from 'react';
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/DashboardSidebar";
import DashboardHeader from "@/components/layout/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Settings, Bell, Shield, User } from "lucide-react";

const SettingsPage = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <DashboardSidebar />
        <div className="flex-1 flex flex-col">
          <DashboardHeader />
          <main className="flex-1 p-4 md:p-6 overflow-auto bg-gray-50/30">
            <div className="max-w-screen-2xl mx-auto space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-5 w-5 text-primary" />
                    <CardTitle>Settings</CardTitle>
                  </div>
                  <CardDescription>Manage your account preferences and application settings</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="account" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8">
                      <TabsTrigger value="account" className="flex items-center gap-2">
                        <User className="h-4 w-4" /> Account
                      </TabsTrigger>
                      <TabsTrigger value="notifications" className="flex items-center gap-2">
                        <Bell className="h-4 w-4" /> Notifications
                      </TabsTrigger>
                      <TabsTrigger value="security" className="flex items-center gap-2">
                        <Shield className="h-4 w-4" /> Security
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="account">
                      <div className="space-y-6">
                        {/* Profile Information */}
                        <div className="space-y-4">
                          <h3 className="text-lg font-medium">Profile Information</h3>
                          <div className="flex items-center gap-4 mb-6">
                            <Avatar className="h-20 w-20">
                              <AvatarImage src="/placeholder.svg" />
                              <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                              <Button variant="outline" size="sm" className="mb-2">
                                Upload Photo
                              </Button>
                              <p className="text-sm text-muted-foreground">
                                PNG, JPG or GIF. Max 2MB.
                              </p>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="first-name">First Name</Label>
                              <Input id="first-name" defaultValue="John" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="last-name">Last Name</Label>
                              <Input id="last-name" defaultValue="Doe" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="email">Email</Label>
                              <Input id="email" defaultValue="john.doe@example.com" />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="phone">Phone Number</Label>
                              <Input id="phone" defaultValue="(555) 123-4567" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Company Settings */}
                        <div className="space-y-4 pt-4 border-t">
                          <h3 className="text-lg font-medium">Company Information</h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="company-name">Company Name</Label>
                              <Input id="company-name" defaultValue="Wealth Advisors Inc." />
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="website">Website</Label>
                              <Input id="website" defaultValue="https://wealthadvisors.example.com" />
                            </div>
                            
                            <div className="space-y-2 md:col-span-2">
                              <Label htmlFor="address">Business Address</Label>
                              <Input id="address" defaultValue="123 Financial District, New York, NY 10005" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="notifications">
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium">Notification Preferences</h3>
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Email Notifications</p>
                              <p className="text-sm text-muted-foreground">Receive emails about account activity</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Meeting Reminders</p>
                              <p className="text-sm text-muted-foreground">Get notified before scheduled meetings</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Task Deadlines</p>
                              <p className="text-sm text-muted-foreground">Alerts about upcoming task deadlines</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Client Portfolio Updates</p>
                              <p className="text-sm text-muted-foreground">Get updates on significant portfolio changes</p>
                            </div>
                            <Switch defaultChecked />
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Market News</p>
                              <p className="text-sm text-muted-foreground">Digest of relevant market updates</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="security">
                      <div className="space-y-6">
                        <h3 className="text-lg font-medium">Security Settings</h3>
                        
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="current-password">Current Password</Label>
                            <Input id="current-password" type="password" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="new-password">New Password</Label>
                            <Input id="new-password" type="password" />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="confirm-password">Confirm New Password</Label>
                            <Input id="confirm-password" type="password" />
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t space-y-4">
                          <h4 className="font-medium">Two-Factor Authentication</h4>
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="font-medium">Enable 2FA</p>
                              <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                            </div>
                            <Switch />
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t space-y-4">
                          <h4 className="font-medium">Session Management</h4>
                          <p className="text-sm text-muted-foreground">
                            You're currently signed in on this device. You can sign out of all other devices for security.
                          </p>
                          <Button variant="destructive" size="sm">Sign Out All Other Devices</Button>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
                <CardFooter className="flex justify-end space-x-4 border-t pt-6">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default SettingsPage;
