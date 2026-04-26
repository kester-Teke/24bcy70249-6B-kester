import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { loggerMiddleware } from "./middlewares/logger.middleware.js";
import accountRoutes from "./routes/account.routes.js";
import transactionRoutes from "./routes/transaction.routes.js";


dotenv.config();

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use(loggerMiddleware);
app.use("/accounts", accountRoutes);
app.use("/transactions", transactionRoutes);

app.use("/users", authRoutes);

app.get("/", (req, res) => {
  res.send("Banking API running");
});

app.use(errorMiddleware);

const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;