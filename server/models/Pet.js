import mongoose from "mongoose";

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    agency: {
       type: String, 
    },
    location: String,
    description: String,
    picturePath: {
      type: String,
      default: "",
    },
    species: String,
    age: Number,
    gender: String,
    breed: String,
    neutered: {
        type: Boolean,
    },
    declawed: {
        type: Boolean,
    },
    houseTrained: {
        type: Boolean,
    },
    adoptionPrice: Number,
    goodWithkids: {
        type: Boolean,
    },
    goodWithCats: {
        type: Boolean,
    },
    goodWithDogs: {
        type: Boolean,
    },
    matches: {
        type: Array,
        default: [],
    },
    foster: {
        type: Boolean,
    },
  },
  { timestamps: true }
);

const Pet = mongoose.model("Pet", PetSchema);
export default Pet;