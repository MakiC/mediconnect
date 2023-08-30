import { Doctor } from "./doctor.model";
import { Patient } from "./patient.model";

export interface Appointment {
    id?: number;
    doctor: Doctor;
    patient: Patient;
    date: Date;
    service: string;
    duration: number;
}