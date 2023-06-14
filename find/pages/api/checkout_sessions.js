const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === "POST") {
    const reservation = req.body.reservation;

    const transformedItems = reservation.map((reservation) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: reservation.name,
          images: [reservation.image],
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

      res.json({ sessionURL: session.url, session: session });
    } catch (err) {
      console.log(err);
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
