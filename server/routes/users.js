import express from "express";
import {  
    getUser,
    getUserMatches,
    addRemoveMatch
} from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get(":/id", verifyToken, getUser);
router.get("/:id/matches", verifyToken, getUserMatches);

/* UPDATE */
router.patch("/:id/:matchId", verifyToken, addRemoveMatch);

export default router;