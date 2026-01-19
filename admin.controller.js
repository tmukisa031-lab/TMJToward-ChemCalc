import prisma from "../config/db.js";

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany({
    select: { id: true, email: true, role: true, createdAt: true }
  });
  res.json(users);
};

export const updateUserRole = async (req, res) => {
  const { role } = req.body;
  const user = await prisma.user.update({
    where: { id: req.params.id },
    data: { role }
  });
  res.json(user);
};

export const getSubscriptions = async (req, res) => {
  const subs = await prisma.subscription.findMany({
    include: { user: true }
  });
  res.json(subs);
};