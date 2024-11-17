import mongoose from "mongoose";

const MedicalReportSchema = new mongoose.Schema({}, { timestamps: true });

export const MedicalReport = mongoose.model(
  "MedicalReport",
  MedicalReportSchema
);
