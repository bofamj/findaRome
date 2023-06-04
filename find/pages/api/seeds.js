import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export default async function handler(req, res) {
  //await prisma.hotels.deleteMany();

  const url =
    "https://airbnb13.p.rapidapi.com/search-location?location=greece&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    result.results.map(async (data) => {
      await prisma.hotels.createMany({
        data: {
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
          location: "greece",
          reviewsCount: data.reviewsCount,
          type: data.type,
        },
      });
    });
  } catch (error) {
    console.error(error);
  }

  res.status(200).json("Done");
}
