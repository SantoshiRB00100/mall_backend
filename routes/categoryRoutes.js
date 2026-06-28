import express from "express";

import {
  createCategory,
  getCategories,
  getCategory,
  updateCategory,
  deleteCategory,
} from "../controllers/categoryController.js";

import { protect,  } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.post("/", protect,adminOnly, createCategory);

router.get("/", getCategories);

router.get("/:id", getCategory);

router.put("/:id", protect, adminOnly, updateCategory);

router.delete("/:id", protect,adminOnly, deleteCategory);

export default router;