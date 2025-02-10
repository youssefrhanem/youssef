import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleDot, Activity } from "lucide-react";
import ToothRecords from "./ToothRecords";

interface ToothData {
  number: number;
  condition: "healthy" | "treated" | "needs-treatment" | "missing";
  treatments: string[];
  notes?: string;
}

const mockTeethData: Record<number, ToothData> = {
  1: { number: 1, condition: "healthy", treatments: [] },
  2: { number: 2, condition: "treated", treatments: ["Filling"] },
  3: { number: 3, condition: "needs-treatment", treatments: [] },
  4: { number: 4, condition: "missing", treatments: [] },
  // Add more teeth data as needed
};

const DentalChart = () => {
  const [selectedTooth, setSelectedTooth] = React.useState<number | null>(null);

  const getToothColor = (toothNumber: number) => {
    const tooth = mockTeethData[toothNumber] || { condition: "healthy" };
    const colors = {
      healthy: "bg-teal-50 hover:bg-teal-100 border-teal-200",
      treated: "bg-blue-50 hover:bg-blue-100 border-blue-200",
      "needs-treatment": "bg-amber-50 hover:bg-amber-100 border-amber-200",
      missing: "bg-slate-50 hover:bg-slate-100 border-slate-200",
    };
    return colors[tooth.condition] || colors.healthy;
  };

  const getToothCondition = (toothNumber: number) => {
    return mockTeethData[toothNumber]?.condition || "healthy";
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-md">
        <CardHeader className="border-b bg-slate-50">
          <CardTitle className="flex items-center gap-2 text-slate-700">
            <Activity className="h-5 w-5 text-teal-600" />
            Dental Chart
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Upper Teeth */}
            <div className="grid grid-cols-16 gap-2">
              {Array.from({ length: 16 }, (_, i) => (
                <TooltipProvider key={i + 1}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`aspect-square border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-sm ${getToothColor(
                          i + 1,
                        )}`}
                        onClick={() => setSelectedTooth(i + 1)}
                      >
                        <span className="text-sm font-medium text-slate-700">
                          {i + 1}
                        </span>
                        <div className="w-full h-1/2 mt-1 flex items-center justify-center">
                          <CircleDot className="h-4 w-4 text-slate-600" />
                        </div>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="font-medium">Tooth {i + 1}</p>
                        <p>Status: {getToothCondition(i + 1)}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* Lower Teeth */}
            <div className="grid grid-cols-16 gap-2">
              {Array.from({ length: 16 }, (_, i) => (
                <TooltipProvider key={i + 17}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div
                        className={`aspect-square border-2 rounded-lg flex flex-col items-center justify-center cursor-pointer shadow-sm ${getToothColor(
                          i + 17,
                        )}`}
                        onClick={() => setSelectedTooth(i + 17)}
                      >
                        <div className="w-full h-1/2 mb-1 flex items-center justify-center">
                          <CircleDot className="h-4 w-4 text-slate-600" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">
                          {i + 17}
                        </span>
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <div className="text-sm">
                        <p className="font-medium">Tooth {i + 17}</p>
                        <p>Status: {getToothCondition(i + 17)}</p>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>

            {/* Legend */}
            <div className="flex gap-4 justify-center border-t pt-4">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-teal-50 border-2 border-teal-200 rounded" />
                <span className="text-sm text-slate-600">Healthy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-50 border-2 border-blue-200 rounded" />
                <span className="text-sm text-slate-600">Treated</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-50 border-2 border-amber-200 rounded" />
                <span className="text-sm text-slate-600">Needs Treatment</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-slate-50 border-2 border-slate-200 rounded" />
                <span className="text-sm text-slate-600">Missing</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedTooth && (
        <ToothRecords
          toothNumber={selectedTooth}
          condition={getToothCondition(selectedTooth)}
          onClose={() => setSelectedTooth(null)}
        />
      )}
    </div>
  );
};

export default DentalChart;
