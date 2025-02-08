import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarClock, Clock, User } from "lucide-react";

interface Appointment {
  id: string;
  patientName: string;
  time: string;
  status: "scheduled" | "completed" | "cancelled";
  type: string;
}

interface AppointmentCalendarProps {
  appointments?: Appointment[];
  onAddAppointment?: (date: Date) => void;
  onSelectAppointment?: (appointment: Appointment) => void;
}

const defaultAppointments: Appointment[] = [
  {
    id: "1",
    patientName: "John Doe",
    time: "09:00",
    status: "scheduled",
    type: "Check-up",
  },
  {
    id: "2",
    patientName: "Jane Smith",
    time: "11:30",
    status: "completed",
    type: "Cleaning",
  },
  {
    id: "3",
    patientName: "Mike Johnson",
    time: "14:00",
    status: "cancelled",
    type: "Consultation",
  },
];

const AppointmentCalendar: React.FC<AppointmentCalendarProps> = ({
  appointments = defaultAppointments,
  onAddAppointment = () => {},
  onSelectAppointment = () => {},
}) => {
  const [selectedDate, setSelectedDate] = React.useState<Date | undefined>(
    new Date(),
  );
  const [isDialogOpen, setIsDialogOpen] = React.useState(true);

  const statusColors = {
    scheduled: "bg-blue-100 text-blue-800",
    completed: "bg-green-100 text-green-800",
    cancelled: "bg-red-100 text-red-800",
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        <Card className="p-4 flex-1">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-4 flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Appointments</h3>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button>
                  <CalendarClock className="mr-2 h-4 w-4" />
                  New Appointment
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Schedule New Appointment</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="patient">Patient Name</Label>
                    <Input id="patient" placeholder="Enter patient name" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="time">Time</Label>
                    <Input id="time" type="time" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="type">Appointment Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="checkup">Check-up</SelectItem>
                        <SelectItem value="cleaning">Cleaning</SelectItem>
                        <SelectItem value="consultation">
                          Consultation
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div className="space-y-4">
            {appointments.map((appointment) => (
              <Card
                key={appointment.id}
                className="p-4 cursor-pointer hover:bg-gray-50"
                onClick={() => onSelectAppointment(appointment)}
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium">
                        {appointment.patientName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>{appointment.time}</span>
                    </div>
                    <div>
                      <Badge variant="secondary">{appointment.type}</Badge>
                    </div>
                  </div>
                  <Badge className={statusColors[appointment.status]}>
                    {appointment.status}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AppointmentCalendar;
