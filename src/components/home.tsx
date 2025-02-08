import React from "react";
import { useState } from "react";
import DashboardHeader from "./layout/DashboardHeader";
import Sidebar from "./layout/Sidebar";
import AppointmentCalendar from "./dashboard/AppointmentCalendar";
import QuickActions from "./dashboard/QuickActions";
import PatientCard from "./patients/PatientCard";
import Analytics from "./dashboard/Analytics";
import InventoryManagement from "./dashboard/InventoryManagement";
import PatientRecords from "./patients/PatientRecords";
import VideoConsultation from "./teledentistry/VideoConsultation";

interface HomeProps {
  defaultLanguage?: string;
  defaultDirection?: "ltr" | "rtl";
}

const Home = ({
  defaultLanguage = "English",
  defaultDirection = "ltr",
}: HomeProps) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [direction, setDirection] = useState(defaultDirection);

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
          <div className="max-w-7xl mx-auto space-y-6">
            <QuickActions />

            <Analytics />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <AppointmentCalendar />
                <InventoryManagement />
              </div>

              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Recent Patients
                  </h2>
                  <div className="space-y-4">
                    <PatientCard
                      name="Sarah Johnson"
                      email="sarah.j@example.com"
                      phone="+1 234 567 8901"
                      nextAppointment="2024-04-20"
                      appointmentTime="09:30 AM"
                    />
                    <PatientCard
                      name="Ahmed Hassan"
                      email="ahmed.h@example.com"
                      phone="+1 234 567 8902"
                      nextAppointment="2024-04-21"
                      appointmentTime="11:00 AM"
                    />
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Teledentistry
                  </h2>
                  <VideoConsultation
                    patientName="James Wilson"
                    appointmentTime="2:30 PM"
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
