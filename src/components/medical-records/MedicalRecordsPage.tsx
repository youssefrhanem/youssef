import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NewMedicalRecordForm from "./NewMedicalRecordForm";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Search,
  FileText,
  Calendar,
  Activity,
  Pill,
  FilePlus,
  Download,
  Filter,
  Phone,
  Mail,
  AlertTriangle,
  Heart,
  Thermometer,
  LineChart,
  Clock,
  CalendarClock,
  CreditCard,
  MessageSquare,
} from "lucide-react";

interface VitalSign {
  type: string;
  value: string;
  unit: string;
  date: string;
  icon: React.ReactNode;
}

const vitals: VitalSign[] = [
  {
    type: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    date: "2024-03-20",
    icon: <Heart className="h-4 w-4" />,
  },
  {
    type: "Temperature",
    value: "98.6",
    unit: "°F",
    date: "2024-03-20",
    icon: <Thermometer className="h-4 w-4" />,
  },
  {
    type: "Heart Rate",
    value: "72",
    unit: "bpm",
    date: "2024-03-20",
    icon: <Activity className="h-4 w-4" />,
  },
];

const MedicalRecordsPage = () => {
  const [activeTab, setActiveTab] = React.useState("overview");
  const [isNewRecordFormOpen, setIsNewRecordFormOpen] = React.useState(false);

  const handleNewRecordSubmit = (data: any) => {
    console.log("New medical record:", data);
    setIsNewRecordFormOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      {/* Patient Overview Header */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-start gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h1 className="text-2xl font-bold">John Doe</h1>
                  <p className="text-muted-foreground">Patient ID: #12345</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => setIsNewRecordFormOpen(true)}>
                    <FilePlus className="h-4 w-4 mr-2" />
                    Add New Record
                  </Button>
                  <Button variant="outline">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message Patient
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4" />
                    john.doe@example.com
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4" />
                    +1 234 567 8900
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4" />
                    DOB: Jan 15, 1980 (44 years)
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-sm">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    Allergies: Penicillin
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CreditCard className="h-4 w-4" />
                    Insurance: BlueCross #987654
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarClock className="h-4 w-4" />
                    Next Appointment: Apr 15, 2024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Main Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full max-w-[800px] grid-cols-6 mb-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="visits">Visits</TabsTrigger>
          <TabsTrigger value="vitals">Vitals</TabsTrigger>
          <TabsTrigger value="medications">Medications</TabsTrigger>
          <TabsTrigger value="imaging">Imaging</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Vitals Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Recent Vitals</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {vitals.map((vital, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      {vital.icon}
                      {vital.type}
                    </div>
                    <div className="text-2xl font-bold">
                      {vital.value}
                      <span className="text-sm font-normal text-muted-foreground ml-1">
                        {vital.unit}
                      </span>
                    </div>
                    <div className="text-xs text-muted-foreground mt-1">
                      <Clock className="h-3 w-3 inline mr-1" />
                      {vital.date}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Current Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Current Medications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Amoxicillin</TableCell>
                    <TableCell>500mg</TableCell>
                    <TableCell>3x daily</TableCell>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>2024-03-22</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          {/* Allergies and Conditions */}
          <div className="grid grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Allergies</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <AlertTriangle className="h-4 w-4 text-red-500" />
                    <div>
                      <div className="font-medium">Penicillin</div>
                      <div className="text-sm text-muted-foreground">
                        Severe reaction
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Chronic Conditions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 p-2 border rounded">
                    <Activity className="h-4 w-4 text-blue-500" />
                    <div>
                      <div className="font-medium">Hypertension</div>
                      <div className="text-sm text-muted-foreground">
                        Diagnosed 2020
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="visits" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Visit History</CardTitle>
                <Button variant="outline" size="sm">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Provider</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Diagnosis</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>Dr. Smith</TableCell>
                    <TableCell>Check-up</TableCell>
                    <TableCell>Routine examination</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="vitals" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Vital Signs History</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Date Range
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {/* Blood Pressure Chart would go here */}
                <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  Blood Pressure Chart
                </div>
                {/* Temperature Chart would go here */}
                <div className="h-[300px] w-full bg-gray-50 rounded-lg flex items-center justify-center">
                  Temperature Chart
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medications" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Medication History</CardTitle>
                <Button variant="outline" size="sm">
                  <Pill className="h-4 w-4 mr-2" />
                  Add Prescription
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Medication</TableHead>
                    <TableHead>Dosage</TableHead>
                    <TableHead>Frequency</TableHead>
                    <TableHead>Start Date</TableHead>
                    <TableHead>End Date</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Amoxicillin</TableCell>
                    <TableCell>500mg</TableCell>
                    <TableCell>3x daily</TableCell>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>2024-03-22</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="imaging" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Medical Imaging</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Download All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="space-y-2">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      Image Preview {i}
                    </div>
                    <div>
                      <h4 className="font-medium">Dental X-Ray</h4>
                      <p className="text-sm text-muted-foreground">
                        March 15, 2024
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-lg">Billing History</CardTitle>
                <Button variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Insurance</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>2024-03-15</TableCell>
                    <TableCell>Dental Check-up</TableCell>
                    <TableCell>$150.00</TableCell>
                    <TableCell>BlueCross</TableCell>
                    <TableCell>
                      <Badge className="bg-green-100 text-green-800">
                        Paid
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <FileText className="h-4 w-4 mr-2" />
                        View Invoice
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <NewMedicalRecordForm
        open={isNewRecordFormOpen}
        onClose={() => setIsNewRecordFormOpen(false)}
        onSubmit={handleNewRecordSubmit}
      />
    </div>
  );
};

export default MedicalRecordsPage;
