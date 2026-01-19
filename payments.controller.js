import stripe from "../config/stripe.js";
import prisma from "../config/db.js";

export const createCheckout = async (req, res) => {
  const { userId } = req.body;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    payment_method_types: ["card"],
    line_items: [{ price: process.env.STRIPE_PRICE_ID, quantity: 1 }],
    success_url: `${process.env.FRONTEND_URL}/dashboard`,
    cancel_url: `${process.env.FRONTEND_URL}/pricing`,
    metadata: { userId }
  });

  res.json({ url: session.url });
};

export const stripeWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  const event = stripe.webhooks.constructEvent(
    req.body,
    sig,
    process.env.STRIPE_WEBHOOK_SECRET
  );

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    const userId = session.metadata.userId;

    await prisma.subscription.upsert({
      where: { userId },
      update: { status: "active", plan: "PREMIUM" },
      create: {
        userId,
        stripeId: session.subscription,
        status: "active",
        plan: "PREMIUM"
      }
    });

    await prisma.user.update({
      where: { id: userId },
      data: { role: "PREMIUM" }
    });
  }

  res.json({ received: true });
};