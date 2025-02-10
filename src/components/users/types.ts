export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "nurse" | "staff";
  department: string;
  status: "active" | "inactive";
  lastActive: string;
  imageUrl?: string;
  permissions: string[];
  specialization?: string;
  schedule?: {
    days: string[];
    hours: string;
  };
  contactInfo: {
    phone: string;
    address?: string;
    emergencyContact?: string;
  };
  qualifications?: string[];
  joinDate: string;
  notes?: string;
}

export interface UserFormData extends Omit<User, "id" | "lastActive"> {
  password?: string;
}

export interface Department {
  id: string;
  name: string;
  head: string;
  description: string;
  location: string;
  staff: string[];
}

export interface Role {
  id: string;
  name: string;
  permissions: string[];
  description: string;
}
