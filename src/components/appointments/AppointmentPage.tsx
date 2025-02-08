import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  CalendarClock,
  Clock,
  User,
  Calendar as CalendarIcon,
  Filter,
  Search,
} from "lucide-react";

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  duration: string;
  type: string;
  status: "scheduled" | "completed" | "cancelled" | "recurring";
  notes?: string;
}

const AppointmentPage = () => {
  const [selectedDate, setSelectedDate] = React.useState<Date>(new Date());
  const [view, setView] = React.useState<"day" | "week" | "month">("week");
  const [appointments, setAppointments] = React.useState<Appointment[]>([
    {
      id: "1",
      patientName: "John Doe",
      time: "09:00",
      duration: "30m",
      type: "Check-up",
      status: "scheduled",
    },
    {
      id: "2",
      patientName: "Sarah Smith",
      time: "10:00",
      duration: "1h",
      type: "Root Canal",
      status: "recurring",
    },
  ]);

  const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

  const getStatusColor = (status: string) => {
    const colors = {
      scheduled: "bg-blue-100 text-blue-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
      recurring: "bg-purple-100 text-purple-800",
    };
    return colors[status] || colors.scheduled;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Appointments</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <CalendarClock className="mr-2 h-4 w-4" />
              New Appointment
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule New Appointment</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="patient">Patient</Label>
                <Input id="patient" placeholder="Search patient..." />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="time">Time</Label>
                <Input id="time" type="time" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="duration">Duration</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select duration" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="30m">30 minutes</SelectItem>
                    <SelectItem value="1h">1 hour</SelectItem>
                    <SelectItem value="1h30m">1.5 hours</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="type">Type</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="checkup">Check-up</SelectItem>
                    <SelectItem value="cleaning">Cleaning</SelectItem>
                    <SelectItem value="rootcanal">Root Canal</SelectItem>
                    <SelectItem value="consultation">Consultation</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="recurring">Recurring</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Not recurring" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="none">Not recurring</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card>
        <CardContent className="p-6">
          <Tabs defaultValue={view} onValueChange={(v) => setView(v as any)}>
            <div className="flex justify-between items-center mb-6">
              <TabsList>
                <TabsTrigger value="day">Day</TabsTrigger>
                <TabsTrigger value="week">Week</TabsTrigger>
                <TabsTrigger value="month">Month</TabsTrigger>
              </TabsList>

              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-2">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border"
                />

                <ScrollArea className="h-[400px] mt-4">
                  <div className="space-y-4">
                    {appointments.map((apt) => (
                      <Card key={apt.id} className="p-3">
                        <div className="flex justify-between items-start">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <User className="h-4 w-4" />
                              <span className="font-medium">
                                {apt.patientName}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                              <Clock className="h-4 w-4" />
                              <span>
                                {apt.time} ({apt.duration})
                              </span>
                            </div>
                          </div>
                          <Badge className={getStatusColor(apt.status)}>
                            {apt.status}
                          </Badge>
                        </div>
                      </Card>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div className="col-span-6 border rounded-lg">
                <div className="grid grid-cols-7 gap-px bg-gray-200">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                    (day) => (
                      <div
                        key={day}
                        className="bg-white p-2 text-center font-medium"
                      >
                        {day}
                      </div>
                    ),
                  )}
                </div>
                <div className="divide-y">
                  {timeSlots.map((time) => (
                    <div key={time} className="flex items-center">
                      <div className="w-16 py-4 px-2 text-sm text-gray-500">
                        {time}
                      </div>
                      <div className="flex-1 grid grid-cols-7 gap-px">
                        {Array(7)
                          .fill(null)
                          .map((_, i) => (
                            <div
                              key={i}
                              className="h-16 bg-white border-r last:border-r-0"
                            />
                          ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default AppointmentPage;
