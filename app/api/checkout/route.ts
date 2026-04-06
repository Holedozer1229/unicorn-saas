import { stripe } from "@/lib/stripe";

export async function POST() {
  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name: "Unicorn OS Pro" },
        unit_amount: 1200,
        recurring: { interval: "month" }
      },
      quantity: 1
    }],
    success_url: "https://yourapp.com",
    cancel_url: "https://yourapp.com"
  });

  return Response.json({ url: session.url });
}
