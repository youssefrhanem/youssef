import React from "react";
import PatientList from "./PatientList";
import PatientForm from "./PatientForm";
import PatientRecords from "./PatientRecords";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Patient } from "./types";

const PatientPage = () => {
  const [isFormOpen, setIsFormOpen] = React.useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = React.useState(false);
  const [selectedPatient, setSelectedPatient] = React.useState<Patient | null>(
    null,
  );
  const [formMode, setFormMode] = React.useState<"create" | "edit">("create");
  const [showRecords, setShowRecords] = React.useState(false);

  const handleAddNew = () => {
    setFormMode("create");
    setSelectedPatient(null);
    setIsFormOpen(true);
  };

  const handleEdit = (patient: Patient) => {
    setFormMode("edit");
    setSelectedPatient(patient);
    setIsFormOpen(true);
  };

  const handleDelete = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsDeleteDialogOpen(true);
  };

  const handleViewRecords = (patient: Patient) => {
    setSelectedPatient(patient);
    setShowRecords(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Form submitted:", data);
    setIsFormOpen(false);
  };

  const handleConfirmDelete = () => {
    console.log("Deleting patient:", selectedPatient);
    setIsDeleteDialogOpen(false);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Patients</h1>
      </div>

      {showRecords && selectedPatient ? (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">
              Medical Records - {selectedPatient.name}
            </h2>
            <Button variant="outline" onClick={() => setShowRecords(false)}>
              Back to List
            </Button>
          </div>
          <PatientRecords patientId={selectedPatient.id} />
        </div>
      ) : (
        <PatientList
          onAddNew={handleAddNew}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onViewRecords={handleViewRecords}
        />
      )}

      <PatientForm
        open={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onSubmit={handleFormSubmit}
        initialData={selectedPatient || {}}
        mode={formMode}
      />

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              patient record and all associated data.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleConfirmDelete}>
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default PatientPage;
