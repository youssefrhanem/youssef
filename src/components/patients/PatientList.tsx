import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Plus, Edit2, Trash2, FileText } from "lucide-react";

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  nextAppointment: string;
  status: "active" | "inactive" | "pending";
}

interface PatientListProps {
  patients?: Patient[];
  onEdit?: (patient: Patient) => void;
  onDelete?: (patient: Patient) => void;
  onViewRecords?: (patient: Patient) => void;
  onAddNew?: () => void;
}

const defaultPatients: Patient[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    lastVisit: "2024-03-15",
    nextAppointment: "2024-04-20",
    status: "active",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    phone: "+1 234 567 8901",
    lastVisit: "2024-03-10",
    nextAppointment: "2024-04-25",
    status: "active",
  },
];

const PatientList: React.FC<PatientListProps> = ({
  patients = defaultPatients,
  onEdit = () => {},
  onDelete = () => {},
  onViewRecords = () => {},
  onAddNew = () => {},
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPatients, setFilteredPatients] = React.useState(patients);

  React.useEffect(() => {
    const filtered = patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.phone.includes(searchTerm),
    );
    setFilteredPatients(filtered);
  }, [searchTerm, patients]);

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-100 text-green-800",
      inactive: "bg-gray-100 text-gray-800",
      pending: "bg-yellow-100 text-yellow-800",
    };
    return colors[status] || colors.active;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search patients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
            </div>
          </div>
          <Button onClick={onAddNew}>
            <Plus className="h-4 w-4 mr-2" />
            Add New Patient
          </Button>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Last Visit</TableHead>
                <TableHead>Next Appointment</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPatients.map((patient) => (
                <TableRow key={patient.id}>
                  <TableCell className="font-medium">{patient.name}</TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{patient.email}</div>
                      <div className="text-gray-500">{patient.phone}</div>
                    </div>
                  </TableCell>
                  <TableCell>{patient.lastVisit}</TableCell>
                  <TableCell>{patient.nextAppointment}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(patient.status)}>
                      {patient.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onViewRecords(patient)}
                      >
                        <FileText className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onEdit(patient)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => onDelete(patient)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default PatientList;
