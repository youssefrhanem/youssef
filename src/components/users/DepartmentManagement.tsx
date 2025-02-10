import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Department } from "./types";
import { Building2, Plus, Edit, Trash, Users } from "lucide-react";

const defaultDepartments: Department[] = [
  {
    id: "1",
    name: "Dental Surgery",
    head: "Dr. Sarah Smith",
    description: "Surgical procedures and complex treatments",
    location: "Floor 2, Wing A",
    staff: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "General Dentistry",
    head: "Dr. John Wilson",
    description: "Routine checkups and basic procedures",
    location: "Floor 1, Wing B",
    staff: ["4", "5", "6"],
  },
];

const DepartmentManagement = () => {
  const [departments, setDepartments] =
    React.useState<Department[]>(defaultDepartments);

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg">Department Management</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Add Department
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Department</TableHead>
              <TableHead>Head</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Staff Count</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments.map((dept) => (
              <TableRow key={dept.id}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <div>
                      <div className="font-medium">{dept.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {dept.description}
                      </div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{dept.head}</TableCell>
                <TableCell>{dept.location}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    {dept.staff.length} members
                  </div>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default DepartmentManagement;
