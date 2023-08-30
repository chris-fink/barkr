import Agency from "../models/Agency.js";
import Pet from "../models/Pet.js";
import User from "../models/User.js";

/* CREATE */
export const createPet = async (req, res) => {
    try {
        const { name, breed, age, picturePath } = req.body;
        const newPet = new Pet({
            name,
            breed,
            age,
            picturePath,
            matches: [] // Initialize with an empty array of matches
        });
        await newPet.save();
        res.status(201).json(newPet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* READ */
export const getAgency = async (req, res) => {
    try {
        const { id } = req.params;
        const agency = await Agency.findById(id);
        res.status(200).json(agency);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

export const getPet = async (req, res) => {
    try {
        const { id } = req.params;
        const pet = await Pet.findById(id);
        res.status(200).json(pet);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

/* UPDATE */
export const updatePet = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, breed, age, picturePath } = req.body;
        const pet = await Pet.findByIdAndUpdate(id, { name, breed, age, picturePath }, { new: true });
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* DELETE */
export const removePet = async (req, res) => {
    try {
        const { id } = req.params;
        await Pet.findByIdAndDelete(id);
        res.status(204).end();
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* Communicate with Users */
export const communicateWithUsers = async (req, res) => {
    try {
        const { id, userIds, message } = req.body;
        const pet = await Pet.findById(id);

        const users = await User.find({ _id: { $in: userIds } });
        const userNames = users.map(user => user.name);

        // Simulate communication logic, e.g., sending notifications
        const communicationResult = {
            petId: id,
            message,
            sentTo: userNames
        };

        res.status(200).json(communicationResult);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

/* Adopt a Pet */
export const adoptPet = async (req, res) => {
    try {
        const { petId, userId } = req.params;
        const pet = await Pet.findById(petId);
        const user = await User.findById(userId);

        // Remove pet from available pets and add to user's matches
        pet.matches = pet.matches.filter(matchId => matchId.toString() !== petId);
        user.matches.push(petId);

        await pet.save();
        await user.save();

        res.status(200).json({ message: `Pet ${petId} adopted by user ${userId}.` });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};