import mongoose from "mongoose";
const DoctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    specilized: {
      type: String,
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    experienceInYears: {
      type: Number,
      required: true,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", DoctorSchema);
