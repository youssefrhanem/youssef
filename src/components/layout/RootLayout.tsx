import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";

const RootLayout = () => {
  const [language, setLanguage] = React.useState("English");
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const [direction, setDirection] = React.useState<"ltr" | "rtl">("ltr");

  const handleLanguageChange = (newLang: string) => {
    setLanguage(newLang);
    setDirection(newLang === "Arabic" ? "rtl" : "ltr");
  };

  return (
    <div
      className="min-h-screen bg-gray-100"
      dir={direction}
      style={{ backgroundColor: "#f3f4f6" }}
    >
      <DashboardHeader
        currentLanguage={language}
        onLanguageChange={handleLanguageChange}
        onMenuClick={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
