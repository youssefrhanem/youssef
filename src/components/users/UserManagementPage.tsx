import React from "react";
import UserForm from "./UserForm";
import RoleManagement from "./RoleManagement";
import DepartmentManagement from "./DepartmentManagement";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Search, Plus, MoreVertical, UserPlus } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "doctor" | "nurse" | "staff";
  department: string;
  status: "active" | "inactive";
  lastActive: string;
  imageUrl?: string;
}

const defaultUsers: User[] = [
  {
    id: "1",
    name: "Dr. Sarah Smith",
    email: "sarah.smith@clinic.com",
    role: "doctor",
    department: "Dental Surgery",
    status: "active",
    lastActive: "2024-03-20 09:30",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "2",
    name: "John Wilson",
    email: "john.wilson@clinic.com",
    role: "nurse",
    department: "General Dentistry",
    status: "active",
    lastActive: "2024-03-20 10:15",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
  },
];

const UserManagementPage = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [formMode, setFormMode] = React.useState<"create" | "edit">("create");
  const [selectedUser, setSelectedUser] = React.useState<User | null>(null);

  const getRoleBadgeColor = (role: string) => {
    const colors = {
      admin: "bg-purple-100 text-purple-800",
      doctor: "bg-blue-100 text-blue-800",
      nurse: "bg-green-100 text-green-800",
      staff: "bg-gray-100 text-gray-800",
    };
    return colors[role] || colors.staff;
  };

  const getStatusColor = (status: string) => {
    return status === "active"
      ? "bg-green-100 text-green-800"
      : "bg-red-100 text-red-800";
  };

  const [activeTab, setActiveTab] = React.useState("users");

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">System Administration</h1>
        <Button
          onClick={() => {
            setFormMode("create");
            setSelectedUser(null);
            setIsFormOpen(true);
          }}
        >
          <UserPlus className="h-4 w-4 mr-2" />
          Add New User
        </Button>
      </div>

      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 max-w-[400px]">
          <TabsTrigger value="users">Users</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
          <TabsTrigger value="departments">Departments</TabsTrigger>
        </TabsList>

        <TabsContent value="users">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1 max-w-sm">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search users..."
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
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Last Active</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {defaultUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={user.imageUrl} />
                              <AvatarFallback>
                                {user.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-medium">{user.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {user.email}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge className={getRoleBadgeColor(user.role)}>
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.department}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>
                            {user.status}
                          </Badge>
                        </TableCell>
                        <TableCell>{user.lastActive}</TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="icon">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem
                                onSelect={() => {
                                  setFormMode("edit");
                                  setSelectedUser(user);
                                  setIsFormOpen(true);
                                }}
                              >
                                Edit User
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onSelect={() => {
                                  setFormMode("edit");
                                  setSelectedUser(user);
                                  setIsFormOpen(true);
                                }}
                              >
                                Change Role
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                className="text-red-600"
                                onSelect={() => {
                                  // Handle user deactivation
                                  console.log("Deactivate user:", user);
                                }}
                              >
                                Deactivate User
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles">
          <RoleManagement />
        </TabsContent>

        <TabsContent value="departments">
          <DepartmentManagement />
        </TabsContent>
      </Tabs>
      <UserForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        mode={formMode}
        initialData={selectedUser}
        onSubmit={(data) => {
          console.log("Form submitted:", data);
          setIsFormOpen(false);
        }}
      />
    </div>
  );
};

export default UserManagementPage;
