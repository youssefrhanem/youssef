export interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  minThreshold: number;
  maxQuantity: number;
  price: number;
  supplier: string;
  lastRestocked: string;
  expiryDate?: string;
  status: "in-stock" | "low-stock" | "out-of-stock";
  location?: string;
}

export interface Supplier {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  items: string[];
}

export interface Order {
  id: string;
  items: Array<{
    itemId: string;
    quantity: number;
    price: number;
  }>;
  supplier: string;
  status: "pending" | "ordered" | "received" | "cancelled";
  orderDate: string;
  expectedDelivery?: string;
  totalAmount: number;
}
