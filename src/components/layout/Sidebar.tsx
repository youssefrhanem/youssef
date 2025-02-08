import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Users,
  Home,
  Settings,
  FileText,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  className?: string;
}

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href: string;
}

import { Package, Video, BarChart, CreditCard } from "lucide-react";

const defaultNavItems: NavItem[] = [
  { icon: <Home size={20} />, label: "Dashboard", href: "/" },
  {
    icon: <Calendar size={20} />,
    label: "Appointments",
    href: "/appointments",
  },
  { icon: <Users size={20} />, label: "Patients", href: "/patients" },
  { icon: <FileText size={20} />, label: "Records", href: "/records" },
  { icon: <Video size={20} />, label: "Teledentistry", href: "/teledentistry" },
  { icon: <Package size={20} />, label: "Inventory", href: "/inventory" },
  { icon: <CreditCard size={20} />, label: "Billing", href: "/billing" },
  { icon: <BarChart size={20} />, label: "Analytics", href: "/analytics" },
  { icon: <Settings size={20} />, label: "Settings", href: "/settings" },
];

const Sidebar = ({
  collapsed = false,
  onToggle = () => {},
  className = "",
}: SidebarProps) => {
  return (
    <div
      className={cn(
        "flex flex-col h-full bg-background border-r transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className,
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!collapsed && <h2 className="text-lg font-semibold">Dental Clinic</h2>}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={onToggle}
        >
          {collapsed ? <Menu size={20} /> : <X size={20} />}
        </Button>
      </div>

      <ScrollArea className="flex-1 py-4">
        <nav className="space-y-2 px-2">
          {defaultNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-accent hover:text-accent-foreground transition-colors",
                "text-muted-foreground",
              )}
            >
              {item.icon}
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t">
        {!collapsed && (
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 rounded-full bg-muted" />
            <div>
              <p className="text-sm font-medium">Dr. Smith</p>
              <p className="text-xs text-muted-foreground">Admin</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
