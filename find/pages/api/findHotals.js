import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const location = req.url.split("=")[1];

  var query = require("url").parse(req.url, true).query;

  //res.status(200).json({ maseg: req.params });

  try {
    const cityLocation = await prisma.hotels.findMany({
      where: {
        location,
      },
    });

    res.status(200).json({ cityLocation });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
