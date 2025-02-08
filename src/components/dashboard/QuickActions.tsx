import React from "react";
import { Button } from "../ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { UserPlus, Calendar, FolderOpen, Phone } from "lucide-react";

interface QuickActionProps {
  actions?: Array<{
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    tooltip: string;
  }>;
}

const QuickActions = ({
  actions = [
    {
      icon: <UserPlus className="h-4 w-4" />,
      label: "New Patient",
      onClick: () => console.log("New Patient clicked"),
      tooltip: "Add a new patient record",
    },
    {
      icon: <Calendar className="h-4 w-4" />,
      label: "Schedule",
      onClick: () => console.log("Schedule clicked"),
      tooltip: "Schedule a new appointment",
    },
    {
      icon: <FolderOpen className="h-4 w-4" />,
      label: "Records",
      onClick: () => console.log("Records clicked"),
      tooltip: "Access patient records",
    },
    {
      icon: <Phone className="h-4 w-4" />,
      label: "Contact",
      onClick: () => console.log("Contact clicked"),
      tooltip: "Contact patient",
    },
  ],
}: QuickActionProps) => {
  return (
    <div className="w-full h-20 bg-white p-4 flex items-center justify-start gap-4 shadow-sm">
      <TooltipProvider>
        {actions.map((action, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
                onClick={action.onClick}
              >
                {action.icon}
                <span>{action.label}</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>{action.tooltip}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
};

export default QuickActions;
