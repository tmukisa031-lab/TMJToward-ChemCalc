"use client";

import { useState } from "react";
import api from "../services/api";

export default function Calculator() {
  const [formula, setFormula] = useState("");
  const [result, setResult] = useState<number | null>(null);

  const calculate = async () => {
    const res = await api.post("/calculate/molar-mass", { formula });
    setResult(res.data.result);
  };

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-lg mb-2">Molar Mass Calculator</h2>
      <input
        className="w-full p-2 text-black"
        placeholder="H2SO4"
        onChange={e => setFormula(e.target.value)}
      />
      <button onClick={calculate} className="mt-2 bg-green-600 px-4 py-2">
        Calculate
      </button>
      {result && <p className="mt-4">Result: {result} g/mol</p>}
    </div>
  );
}