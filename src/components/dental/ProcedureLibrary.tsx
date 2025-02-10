import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, FileText } from "lucide-react";

interface Procedure {
  id: string;
  name: string;
  category: string;
  duration: string;
  cost: number;
  description: string;
}

const defaultProcedures: Procedure[] = [
  {
    id: "1",
    name: "Root Canal Treatment",
    category: "Endodontics",
    duration: "90 mins",
    cost: 800,
    description: "Complete root canal treatment including filling",
  },
  {
    id: "2",
    name: "Dental Crown",
    category: "Restorative",
    duration: "60 mins",
    cost: 1200,
    description: "Porcelain crown fitting and placement",
  },
];

const ProcedureLibrary = () => {
  const [procedures, setProcedures] = React.useState(defaultProcedures);
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Procedure Library</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Procedure
        </Button>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="relative mb-6">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search procedures..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {procedures.map((procedure) => (
              <Card key={procedure.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">{procedure.name}</h3>
                      <Badge variant="secondary" className="mt-1">
                        {procedure.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-green-600">
                        ${procedure.cost}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {procedure.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {procedure.description}
                  </p>
                  <div className="mt-4 flex justify-end">
                    <Button variant="ghost" size="sm">
                      <FileText className="h-4 w-4 mr-2" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProcedureLibrary;
