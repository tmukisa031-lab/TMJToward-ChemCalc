"use client";

import api from "../../services/api";

export default function Pricing() {
  const upgrade = async () => {
    const res = await api.post("/payments/checkout", {
      userId: localStorage.getItem("userId")
    });
    window.location.href = res.data.url;
  };

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="text-2xl mb-4">Premium Plan</h1>
      <p>Unlimited chemistry tools</p>
      <button onClick={upgrade} className="mt-4 bg-purple-600 px-6 py-2">
        Upgrade
      </button>
    </div>
  );
}