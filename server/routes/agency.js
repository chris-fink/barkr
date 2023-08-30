import express from "express";
import {  
    getAgency,
    getPet,
    updatePet,
    removePet
} from "../controllers/agency.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id", verifyToken, getAgency);
router.get("/:id/pet", verifyToken, getPet);
//router.get("/:id/matches", verifyToken, getPetMatches);

/* UPDATE */
router.patch("/:id/:petId/update", verifyToken, updatePet);
router.patch("/:id/:petId/remove", verifyToken, removePet);

export default router;