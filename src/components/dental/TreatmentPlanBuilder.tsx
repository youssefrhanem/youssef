import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CircleDot, FilePlus, Calendar, DollarSign } from "lucide-react";

interface TreatmentStep {
  id: string;
  procedure: string;
  teeth: string[];
  estimatedDuration: string;
  cost: number;
  notes?: string;
}

const TreatmentPlanBuilder = () => {
  const [steps, setSteps] = React.useState<TreatmentStep[]>([]);

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Treatment Plan Builder</h1>
        <div className="flex gap-2">
          <Button>
            <FilePlus className="h-4 w-4 mr-2" />
            Add Procedure
          </Button>
          <Button variant="outline">
            <Calendar className="h-4 w-4 mr-2" />
            Schedule All
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Dental Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Dental Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-16 gap-2">
                {Array.from({ length: 32 }, (_, i) => (
                  <div
                    key={i + 1}
                    className="aspect-square border rounded flex items-center justify-center hover:bg-gray-50 cursor-pointer"
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Treatment Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Treatment Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {steps.map((step) => (
                  <Card key={step.id}>
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium">{step.procedure}</h4>
                          <div className="flex gap-2 mt-1">
                            {step.teeth.map((tooth) => (
                              <Badge key={tooth} variant="secondary">
                                Tooth {tooth}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center gap-1 text-green-600">
                            <DollarSign className="h-4 w-4" />
                            {step.cost.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {step.estimatedDuration}
                          </div>
                        </div>
                      </div>
                      {step.notes && (
                        <p className="text-sm text-muted-foreground mt-2">
                          {step.notes}
                        </p>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Summary and Actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Treatment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">
                    Total Procedures:
                  </span>
                  <span className="font-medium">{steps.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Estimated Cost:</span>
                  <span className="text-2xl font-bold text-green-600">
                    $
                    {steps.reduce((sum, step) => sum + step.cost, 0).toFixed(2)}
                  </span>
                </div>
                <div className="pt-4 border-t">
                  <Button className="w-full">Save Treatment Plan</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea
                placeholder="Add treatment plan notes..."
                className="min-h-[150px]"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TreatmentPlanBuilder;
