import React from "react";
import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface DashboardHeaderProps {
  onMenuClick?: () => void;
  onLanguageChange?: (lang: string) => void;
  currentLanguage?: string;
  clinicName?: string;
}

const DashboardHeader = ({
  onMenuClick = () => {},
  onLanguageChange = () => {},
  currentLanguage = "English",
  clinicName = "Dental Clinic",
}: DashboardHeaderProps) => {
  return (
    <header className="w-full h-16 bg-white border-b border-gray-200 px-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={onMenuClick}
        >
          <Menu className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-gray-900">{clinicName}</h1>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="gap-2">
              <Globe className="h-4 w-4" />
              {currentLanguage}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => onLanguageChange("English")}>
              English
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("French")}>
              French
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => onLanguageChange("Arabic")}>
              Arabic
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default DashboardHeader;
