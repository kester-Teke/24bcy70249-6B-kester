import express from "express";
import { createAccount, getAccounts } from "../controllers/account.controller.js";
import { protect } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createAccount);
router.get("/", protect, getAccounts);

export default router;