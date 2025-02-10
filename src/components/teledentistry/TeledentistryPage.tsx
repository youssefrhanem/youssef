import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import VideoConsultation from "./VideoConsultation";
import { Video, Calendar, Plus } from "lucide-react";

const TeledentistryPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teledentistry</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Schedule Consultation
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VideoConsultation
            patientName="James Wilson"
            appointmentTime="2:30 PM"
          />
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Consultations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-start p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Sarah Johnson</h3>
                    <div className="text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 inline mr-1" />
                      Today, 3:00 PM
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    Scheduled
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeledentistryPage;
