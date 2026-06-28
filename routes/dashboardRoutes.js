import express from "express";
import { getDashboard } from "../controllers/dashboardController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/", protect, adminOnly, getDashboard);

export default router;