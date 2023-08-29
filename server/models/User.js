import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
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
    interestedPet: {
        type: Map,
        of: Boolean,
    },
    likedPets: {
        type: Array,
        default: [],
    },
    matches: {
        type: Array,
        default: [],
    },
    adopt: {
        type: Boolean,
    },
    foster: {
        type: Boolean,
    },
    kids: {
        type: Boolean,
    },
    cats: {
        type: Boolean,
    },
    dogs: {
        type: Boolean,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;