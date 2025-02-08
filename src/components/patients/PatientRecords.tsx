import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FileText, Image, Activity, Pill } from "lucide-react";

interface Treatment {
  date: string;
  procedure: string;
  notes: string;
  dentist: string;
}

interface Prescription {
  date: string;
  medication: string;
  dosage: string;
  duration: string;
}

interface PatientRecordsProps {
  patientId?: string;
  treatments?: Treatment[];
  prescriptions?: Prescription[];
  xrays?: Array<{ date: string; url: string; description: string }>;
}

const defaultTreatments: Treatment[] = [
  {
    date: "2024-03-15",
    procedure: "Root Canal",
    notes: "Successful procedure, follow-up needed",
    dentist: "Dr. Smith",
  },
  {
    date: "2024-02-20",
    procedure: "Dental Cleaning",
    notes: "Regular checkup, no issues found",
    dentist: "Dr. Johnson",
  },
];

const defaultPrescriptions: Prescription[] = [
  {
    date: "2024-03-15",
    medication: "Amoxicillin",
    dosage: "500mg",
    duration: "7 days",
  },
  {
    date: "2024-02-20",
    medication: "Ibuprofen",
    dosage: "400mg",
    duration: "3 days",
  },
];

const PatientRecords: React.FC<PatientRecordsProps> = ({
  patientId = "123",
  treatments = defaultTreatments,
  prescriptions = defaultPrescriptions,
  xrays = [
    {
      date: "2024-03-15",
      url: "https://example.com/xray1.jpg",
      description: "Full mouth X-ray",
    },
  ],
}) => {
  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle>Patient Records</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="treatments">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="treatments">Treatments</TabsTrigger>
            <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
            <TabsTrigger value="xrays">X-Rays</TabsTrigger>
          </TabsList>

          <TabsContent value="treatments">
            <ScrollArea className="h-[400px] w-full pr-4">
              <div className="space-y-4">
                {treatments.map((treatment, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-blue-500" />
                      <h3 className="font-medium">{treatment.procedure}</h3>
                    </div>
                    <p className="text-sm text-gray-500">{treatment.notes}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{treatment.date}</span>
                      <span>{treatment.dentist}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="prescriptions">
            <ScrollArea className="h-[400px] w-full pr-4">
              <div className="space-y-4">
                {prescriptions.map((prescription, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="flex items-center gap-2">
                      <Pill className="h-4 w-4 text-blue-500" />
                      <h3 className="font-medium">{prescription.medication}</h3>
                    </div>
                    <p className="text-sm">
                      Dosage: {prescription.dosage}
                      <br />
                      Duration: {prescription.duration}
                    </p>
                    <p className="text-sm text-gray-500">
                      Prescribed on: {prescription.date}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="xrays">
            <ScrollArea className="h-[400px] w-full pr-4">
              <div className="grid grid-cols-2 gap-4">
                {xrays.map((xray, index) => (
                  <div key={index} className="p-4 border rounded-lg space-y-2">
                    <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                      <Image className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-sm font-medium">{xray.description}</p>
                    <p className="text-sm text-gray-500">{xray.date}</p>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default PatientRecords;
