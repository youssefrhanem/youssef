import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InventoryList from "./InventoryList";
import InventoryForm from "./InventoryForm";
import OrderList from "./OrderList";
import SupplierList from "./SupplierList";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const InventoryPage = () => {
  const [activeTab, setActiveTab] = React.useState("inventory");
  const [showForm, setShowForm] = React.useState(false);
  const [formMode, setFormMode] = React.useState<"create" | "edit">("create");

  const handleAddNew = () => {
    setFormMode("create");
    setShowForm(true);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Inventory Management</h1>
        <Button onClick={handleAddNew}>
          <Plus className="h-4 w-4 mr-2" />
          Add New Item
        </Button>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="inventory">Inventory</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="suppliers">Suppliers</TabsTrigger>
        </TabsList>

        <TabsContent value="inventory" className="space-y-4">
          <InventoryList />
        </TabsContent>

        <TabsContent value="orders" className="space-y-4">
          <OrderList />
        </TabsContent>

        <TabsContent value="suppliers" className="space-y-4">
          <SupplierList />
        </TabsContent>
      </Tabs>

      <InventoryForm
        open={showForm}
        onClose={() => setShowForm(false)}
        mode={formMode}
      />
    </div>
  );
};

export default InventoryPage;
