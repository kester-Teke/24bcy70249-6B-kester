import express from "express";
import { createTransaction, getTransactions } from "../controllers/transaction.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createTransaction);
router.get("/", protect, getTransactions);

export default router;