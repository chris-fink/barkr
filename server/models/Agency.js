import mongoose from "mongoose";

const AgencySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    location: String,
    availablePets: {
        type: Array,
        default: [],
    },
  },
  { timestamps: true }
);

const Agency = mongoose.model("Agency", AgencySchema);
export default Agency;