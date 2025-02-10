export interface DentalProcedure {
  id: string;
  name: string;
  category: string;
  duration: string;
  cost: number;
  description: string;
  requiredEquipment?: string[];
  contraindications?: string[];
  postCareInstructions?: string[];
}

export interface ToothCondition {
  toothNumber: number;
  status: "healthy" | "treated" | "needs-treatment" | "missing";
  conditions?: string[];
  treatments?: string[];
  notes?: string;
  lastUpdated: string;
}

export interface TreatmentPlan {
  id: string;
  patientId: string;
  createdDate: string;
  status: "draft" | "proposed" | "accepted" | "in-progress" | "completed";
  procedures: {
    procedureId: string;
    teeth: number[];
    notes?: string;
    scheduledDate?: string;
    completedDate?: string;
  }[];
  totalCost: number;
  insuranceCoverage?: number;
  patientResponsibility?: number;
  notes?: string;
}

export interface DentalChart {
  patientId: string;
  lastUpdated: string;
  teeth: ToothCondition[];
  notes?: string;
}

export interface InsuranceClaim {
  id: string;
  patientId: string;
  procedureId: string;
  dateOfService: string;
  submissionDate: string;
  status: "pending" | "approved" | "denied" | "paid";
  amount: number;
  insuranceProvider: string;
  claimNumber?: string;
  notes?: string;
}
