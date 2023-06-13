const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reservation = req.body.reservation;
    const transformedItems = reservation.map((reservation) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: reservation.name,
        },
        unit_amount: reservation.tatalCost * 100,
      },
      quantity: 1,
    }));

    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        line_items: transformedItems,
        mode: "payment",
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/`,
      });
      res.json({ sessionURL: session.url });
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}

/* const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const fs = require("fs");

export default async function handler(req, res) {
  const { items, amount } = req.body;
  const body = req.body;
  console.log("🚀 ~ file: checKout_sessions.js:7 ~ handler ~ body:", body);

  const line_items = {
    price_data: {
      currency: "usd",
      product_data: {
        name: body.items,
      },
      unit_amount: body.amount * 100,
    },

    quantity: 1,
  };

  if (req.method === "POST") {
    try {
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items,
        mode: "payment",
        success_url: `${req.headers.origin}/?success=true`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });

      res.redirect(303, session.url);
    } catch (err) {
      console.log("🚀 ~ file: checKout_sessions.js:40 ~ handler ~ err:", err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
 */
