import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  const { city, location } = req.body;

  try {
    const cityLocation = await prisma.hotels.findMany({
      where: {
        location,
      },
    });

    res.status(200).json({ cityLocation });
    if (cityLocation.length > 0) return;

    const hotels = city.map(async (data) => {
      await prisma.hotels.createMany({
        data: {
          id: Number(data.id),
          bathrooms: data.bathrooms,
          bedrooms: data.bedrooms,
          city: data.city,
          images: data.images,
          isSuperhost: data.isSuperhost,
          lat: data.lat,
          lng: data.lng,
          name: data.name,
          previewAmenities: data.previewAmenities,
          price: data.price.rate,
          reviewsCount: data.reviewsCount,
          type: data.type,
          location,
        },
      });
    });
    /* res.status(200).json({ hotels }); */
  } catch (error) {
    return res.status(400).json({ message: error });
  }
}
