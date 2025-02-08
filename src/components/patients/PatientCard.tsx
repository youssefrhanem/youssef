import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Phone, Mail, FileText } from "lucide-react";

interface PatientCardProps {
  name?: string;
  email?: string;
  phone?: string;
  nextAppointment?: string;
  appointmentTime?: string;
  medicalHistory?: string[];
  imageUrl?: string;
}

const PatientCard = ({
  name = "John Doe",
  email = "john.doe@example.com",
  phone = "+1 234 567 8900",
  nextAppointment = "2024-04-15",
  appointmentTime = "10:00 AM",
  medicalHistory = [
    "Regular Checkup - 2024-01-15",
    "Dental Cleaning - 2023-12-10",
  ],
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
}: PatientCardProps) => {
  return (
    <Card className="w-[400px] bg-white shadow-lg">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className="text-xl">{name}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Mail className="h-4 w-4" />
            <span>{email}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Phone className="h-4 w-4" />
            <span>{phone}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-500" />
          <span className="text-sm font-medium">Next Appointment:</span>
          <Badge variant="secondary">{nextAppointment}</Badge>
          <Clock className="h-4 w-4 text-gray-500 ml-2" />
          <span className="text-sm text-gray-500">{appointmentTime}</span>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium">Recent Medical History</span>
          </div>
          <ul className="ml-7 space-y-1">
            {medicalHistory.map((record, index) => (
              <li key={index} className="text-sm text-gray-600">
                • {record}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end gap-2">
        <Button variant="outline">View Details</Button>
        <Button>Schedule Appointment</Button>
      </CardFooter>
    </Card>
  );
};

export default PatientCard;
