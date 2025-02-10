import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AppointmentPage from "./components/appointments/AppointmentPage";
import PatientPage from "./components/patients/PatientPage";
import InventoryPage from "./components/inventory/InventoryPage";
import MedicalRecordsPage from "./components/medical-records/MedicalRecordsPage";
import UserManagementPage from "./components/users/UserManagementPage";
import DentalChartPage from "./components/dental/DentalChartPage";
import ProcedureLibrary from "./components/dental/ProcedureLibrary";
import TreatmentPlanBuilder from "./components/dental/TreatmentPlanBuilder";
import BillingPage from "./components/billing/BillingPage";
import AnalyticsPage from "./components/analytics/AnalyticsPage";
import SettingsPage from "./components/settings/SettingsPage";
import TeledentistryPage from "./components/teledentistry/TeledentistryPage";
import RootLayout from "./components/layout/RootLayout";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/appointments" element={<AppointmentPage />} />
          <Route path="/patients" element={<PatientPage />} />
          <Route path="/dental-chart" element={<DentalChartPage />} />
          <Route path="/procedures" element={<ProcedureLibrary />} />
          <Route path="/treatment-plans" element={<TreatmentPlanBuilder />} />
          <Route path="/inventory" element={<InventoryPage />} />
          <Route path="/records" element={<MedicalRecordsPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/teledentistry" element={<TeledentistryPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/users" element={<UserManagementPage />} />
        </Route>
      </Routes>
      {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
    </Suspense>
  );
}

export default App;
