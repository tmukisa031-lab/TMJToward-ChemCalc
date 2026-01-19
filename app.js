import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.routes.js";
import calculatorRoutes from "./routes/calculator.routes.js";
import adminRoutes from "./routes/admin.routes.js";
app.use("/api/admin", adminRoutes);
import paymentRoutes from "./routes/payments.routes.js";
app.use("/api/payments", paymentRoutes);

const app = express();

app.use(cors());
app.post(
  "/api/payments/webhook",
  express.raw({ type: "application/json" }),
  stripeWebhook
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/calculate", calculatorRoutes);

export default app;