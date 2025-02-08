import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
import { Eye, FileText } from "lucide-react";
import type { Order } from "./types";

const defaultOrders: Order[] = [
  {
    id: "1",
    items: [
      { itemId: "1", quantity: 50, price: 25.99 },
      { itemId: "2", quantity: 100, price: 12.99 },
    ],
    supplier: "MedSupply Co",
    status: "pending",
    orderDate: "2024-03-15",
    expectedDelivery: "2024-03-22",
    totalAmount: 2299.5,
  },
  {
    id: "2",
    items: [{ itemId: "3", quantity: 25, price: 45.99 }],
    supplier: "DentalSupplies Inc",
    status: "ordered",
    orderDate: "2024-03-14",
    expectedDelivery: "2024-03-21",
    totalAmount: 1149.75,
  },
];

const OrderList = () => {
  const [orders, setOrders] = React.useState<Order[]>(defaultOrders);

  const getStatusColor = (status: string) => {
    const colors = {
      pending: "bg-yellow-100 text-yellow-800",
      ordered: "bg-blue-100 text-blue-800",
      received: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return colors[status] || colors.pending;
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Order Date</TableHead>
                <TableHead>Expected Delivery</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell>#{order.id}</TableCell>
                  <TableCell>{order.supplier}</TableCell>
                  <TableCell>{order.orderDate}</TableCell>
                  <TableCell>{order.expectedDelivery}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("View order", order)}
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => console.log("Download invoice", order)}
                      >
                        <FileText className="h-4 w-4" />
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

export default OrderList;
