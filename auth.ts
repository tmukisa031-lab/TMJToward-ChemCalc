import api from "./api";

export async function login(email: string, password: string) {
  const res = await api.post("/auth/login", { email, password });
  localStorage.setItem("token", res.data.token);
}

export async function register(email: string, password: string) {
  await api.post("/auth/register", { email, password });
}