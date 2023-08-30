import express from "express";
import {  
    getPet,
    getPetMatches,
    addRemoveMatch
} from "../controllers/pets.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get(":/id", verifyToken, getPet);
router.get("/:id/matches", verifyToken, getPetMatches);

/* UPDATE */
router.patch("/:id/:matchId", verifyToken, addRemoveMatch);

export default router;