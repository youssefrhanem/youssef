import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Package, AlertTriangle } from "lucide-react";

interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  threshold: number;
  maxQuantity: number;
  category: string;
  status: "normal" | "low" | "critical";
}

interface InventoryManagementProps {
  items?: InventoryItem[];
  onOrderMore?: (item: InventoryItem) => void;
}

const defaultItems: InventoryItem[] = [
  {
    id: "1",
    name: "Dental Anesthetic",
    quantity: 50,
    threshold: 20,
    maxQuantity: 100,
    category: "Medicines",
    status: "normal",
  },
  {
    id: "2",
    name: "Disposable Gloves",
    quantity: 15,
    threshold: 50,
    maxQuantity: 200,
    category: "Supplies",
    status: "critical",
  },
  {
    id: "3",
    name: "Dental Implants",
    quantity: 25,
    threshold: 30,
    maxQuantity: 100,
    category: "Equipment",
    status: "low",
  },
];

const InventoryManagement: React.FC<InventoryManagementProps> = ({
  items = defaultItems,
  onOrderMore = () => {},
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "critical":
        return "bg-red-100 text-red-800";
      case "low":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-green-100 text-green-800";
    }
  };

  return (
    <Card className="w-full bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Package className="h-5 w-5" />
          Inventory Status
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status}
                </Badge>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Quantity: {item.quantity}</span>
                  <span>{item.maxQuantity}</span>
                </div>
                <Progress
                  value={(item.quantity / item.maxQuantity) * 100}
                  className="h-2"
                />
                {item.quantity <= item.threshold && (
                  <div className="flex items-center gap-2 text-sm text-amber-600">
                    <AlertTriangle className="h-4 w-4" />
                    <span>Low stock alert</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default InventoryManagement;
