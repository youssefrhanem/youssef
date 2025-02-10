import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Activity, AlertTriangle, FileText, Plus } from "lucide-react";

interface ToothRecord {
  date: string;
  procedure: string;
  diagnosis: string;
  dentist: string;
  notes?: string;
}

interface ToothRecordsProps {
  toothNumber: number;
  condition: "healthy" | "treated" | "needs-treatment" | "missing";
  records?: ToothRecord[];
  onClose: () => void;
}

const defaultRecords: ToothRecord[] = [
  {
    date: "2024-03-15",
    procedure: "Root Canal",
    diagnosis: "Deep cavity with pulp involvement",
    dentist: "Dr. Smith",
    notes: "Patient reported sensitivity to cold",
  },
  {
    date: "2024-02-01",
    procedure: "Filling",
    diagnosis: "Moderate cavity",
    dentist: "Dr. Johnson",
    notes: "Composite filling on distal surface",
  },
];

const ToothRecords: React.FC<ToothRecordsProps> = ({
  toothNumber,
  condition,
  records = defaultRecords,
  onClose,
}) => {
  const getConditionColor = (condition: string) => {
    const colors = {
      healthy: "bg-teal-100 text-teal-800",
      treated: "bg-blue-100 text-blue-800",
      "needs-treatment": "bg-amber-100 text-amber-800",
      missing: "bg-slate-100 text-slate-800",
    };
    return colors[condition] || colors.healthy;
  };

  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="space-y-1">
          <CardTitle>Tooth {toothNumber}</CardTitle>
          <Badge className={getConditionColor(condition)}>{condition}</Badge>
        </div>
        <Button variant="outline" size="sm" onClick={onClose}>
          Close
        </Button>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="history">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="history">Treatment History</TabsTrigger>
            <TabsTrigger value="info">Information</TabsTrigger>
          </TabsList>

          <TabsContent value="history" className="space-y-4">
            <div className="flex justify-between items-center py-2">
              <h3 className="text-sm font-medium">Treatment Records</h3>
              <Button size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Add Record
              </Button>
            </div>

            <ScrollArea className="h-[400px] pr-4">
              <div className="space-y-4">
                {records.map((record, index) => (
                  <Card key={index}>
                    <CardContent className="p-4 space-y-2">
                      <div className="flex justify-between">
                        <Badge variant="outline">{record.date}</Badge>
                        <span className="text-sm text-muted-foreground">
                          {record.dentist}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-medium flex items-center gap-2">
                          <Activity className="h-4 w-4 text-blue-500" />
                          {record.procedure}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {record.diagnosis}
                        </p>
                      </div>
                      {record.notes && (
                        <div className="text-sm bg-muted/50 p-2 rounded">
                          <FileText className="h-4 w-4 inline mr-2" />
                          {record.notes}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="info">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Surface Status</h4>
                  <div className="space-y-1 text-sm">
                    <p>Mesial: Healthy</p>
                    <p>Distal: Treated</p>
                    <p>Buccal: Healthy</p>
                    <p>Lingual: Healthy</p>
                    <p>Occlusal: Treated</p>
                  </div>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="text-sm font-medium mb-2">Conditions</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Restored</Badge>
                    <Badge variant="secondary">Root Canal</Badge>
                  </div>
                </div>
              </div>

              {condition === "needs-treatment" && (
                <div className="p-4 border rounded-lg bg-amber-50">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-4 w-4 text-amber-500 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-medium">Treatment Needed</h4>
                      <p className="text-sm text-muted-foreground">
                        Recommended: Crown replacement
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ToothRecords;
