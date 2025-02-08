import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Edit2, Trash2, AlertTriangle } from "lucide-react";
import type { InventoryItem } from "./types";

const defaultItems: InventoryItem[] = [
  {
    id: "1",
    name: "Dental Anesthetic",
    category: "Medicines",
    quantity: 50,
    unit: "vials",
    minThreshold: 20,
    maxQuantity: 100,
    price: 25.99,
    supplier: "MedSupply Co",
    lastRestocked: "2024-03-15",
    expiryDate: "2025-03-15",
    status: "in-stock",
    location: "Cabinet A1",
  },
  {
    id: "2",
    name: "Disposable Gloves",
    category: "Supplies",
    quantity: 15,
    unit: "boxes",
    minThreshold: 50,
    maxQuantity: 200,
    price: 12.99,
    supplier: "DentalSupplies Inc",
    lastRestocked: "2024-03-10",
    status: "low-stock",
    location: "Storage Room B",
  },
];

const InventoryList = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [items, setItems] = React.useState<InventoryItem[]>(defaultItems);

  const getStatusColor = (status: string) => {
    const colors = {
      "in-stock": "bg-green-100 text-green-800",
      "low-stock": "bg-yellow-100 text-yellow-800",
      "out-of-stock": "bg-red-100 text-red-800",
    };
    return colors[status] || colors["in-stock"];
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search inventory..."
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
                <TableHead>Item</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Quantity</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Restocked</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{item.name}</div>
                      <div className="text-sm text-gray-500">
                        {item.supplier}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {item.quantity} {item.unit}
                      {item.quantity <= item.minThreshold && (
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(item.status)}>
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{item.lastRestocked}</TableCell>
                  <TableCell>${item.price.toFixed(2)}</TableCell>
                  <TableCell>{item.location}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Edit", item)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Delete", item)}
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

export default InventoryList;
