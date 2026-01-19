import { molarMass } from "../services/molarMass.service.js";

export const molarMassCalc = (req, res) => {
  const { formula } = req.body;
  const result = molarMass(formula);
  res.json({ result });
};
export const premiumOnly = (req, res) => {
  if (req.user.role !== "PREMIUM" && req.user.role !== "ADMIN") {
    return res.status(403).json({ error: "Premium required" });
  }
};