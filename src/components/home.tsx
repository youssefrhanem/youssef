import React from "react";
import AppointmentCalendar from "./dashboard/AppointmentCalendar";
import QuickActions from "./dashboard/QuickActions";
import PatientCard from "./patients/PatientCard";
import Analytics from "./dashboard/Analytics";
import InventoryManagement from "./dashboard/InventoryManagement";
import VideoConsultation from "./teledentistry/VideoConsultation";

const Home = () => {
  return (
    <div className="space-y-6">
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
  );
};

export default Home;
