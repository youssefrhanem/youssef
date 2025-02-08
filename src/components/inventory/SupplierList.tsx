import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Edit2, Trash2, ShoppingCart } from "lucide-react";
import type { Supplier } from "./types";

const defaultSuppliers: Supplier[] = [
  {
    id: "1",
    name: "MedSupply Co",
    email: "orders@medsupply.com",
    phone: "+1 234 567 8900",
    address: "123 Medical Drive, Healthcare City, HC 12345",
    items: ["1", "3", "5"],
  },
  {
    id: "2",
    name: "DentalSupplies Inc",
    email: "sales@dentalsupplies.com",
    phone: "+1 234 567 8901",
    address: "456 Dental Avenue, Medical District, MD 67890",
    items: ["2", "4", "6"],
  },
];

const SupplierList = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [suppliers, setSuppliers] =
    React.useState<Supplier[]>(defaultSuppliers);

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search suppliers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Supplier</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Address</TableHead>
                <TableHead>Items Supplied</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {suppliers.map((supplier) => (
                <TableRow key={supplier.id}>
                  <TableCell className="font-medium">{supplier.name}</TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div>{supplier.email}</div>
                      <div className="text-sm text-gray-500">
                        {supplier.phone}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{supplier.address}</TableCell>
                  <TableCell>{supplier.items.length} items</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("New order", supplier)}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Edit", supplier)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Delete", supplier)}
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

export default SupplierList;
