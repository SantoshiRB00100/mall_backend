import express from "express";

import {
  placeOrder,
  myOrders,
  getAllOrders,
  updateOrder,
} from "../controllers/orderController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protect, placeOrder);

router.get("/my", protect, myOrders);

router.get("/", protect, adminOnly, getAllOrders);

router.put("/:id", protect, adminOnly, updateOrder);

export default router;