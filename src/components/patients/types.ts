export type Patient = {
  id: string;
  name: string;
  email: string;
  phone: string;
  lastVisit: string;
  nextAppointment: string;
  status: "active" | "inactive" | "pending";
};
