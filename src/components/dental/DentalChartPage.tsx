import React from "react";
import DentalChart from "./DentalChart";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DentalChartPage = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Dental Chart</h1>

      <Tabs defaultValue="chart" className="space-y-6">
        <TabsList>
          <TabsTrigger value="chart">Chart</TabsTrigger>
          <TabsTrigger value="history">Treatment History</TabsTrigger>
          <TabsTrigger value="notes">Clinical Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="chart" className="space-y-6">
          <DentalChart />
        </TabsContent>

        <TabsContent value="history">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Treatment History</h2>
            {/* Add treatment history component */}
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Clinical Notes</h2>
            {/* Add clinical notes component */}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DentalChartPage;
