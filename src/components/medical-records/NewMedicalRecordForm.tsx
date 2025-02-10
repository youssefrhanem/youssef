import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

interface NewMedicalRecordFormProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const NewMedicalRecordForm: React.FC<NewMedicalRecordFormProps> = ({
  open,
  onClose,
  onSubmit,
}) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Medical Record</DialogTitle>
        </DialogHeader>

        <form className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="recordType">Record Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="visit">Visit</SelectItem>
                  <SelectItem value="lab">Lab Result</SelectItem>
                  <SelectItem value="procedure">Procedure</SelectItem>
                  <SelectItem value="prescription">Prescription</SelectItem>
                  <SelectItem value="imaging">Imaging</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input type="date" id="date" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="provider">Healthcare Provider</Label>
              <Input id="provider" placeholder="Dr. Name" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" placeholder="Clinic/Hospital" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="diagnosis">Diagnosis</Label>
            <Input id="diagnosis" placeholder="Primary diagnosis" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="symptoms">Symptoms</Label>
            <Textarea
              id="symptoms"
              placeholder="Patient's symptoms and complaints"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="treatment">Treatment Plan</Label>
            <Textarea
              id="treatment"
              placeholder="Prescribed treatment and recommendations"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any additional notes or observations"
              rows={3}
            />
          </div>

          <div className="space-y-2">
            <Label>Attachments</Label>
            <div className="border-2 border-dashed rounded-lg p-4 text-center">
              <Input type="file" className="hidden" id="file-upload" />
              <Label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-500 hover:text-blue-600"
              >
                Click to upload or drag and drop
              </Label>
              <p className="text-sm text-muted-foreground mt-1">
                PDF, JPG, PNG up to 10MB
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save Record</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewMedicalRecordForm;
