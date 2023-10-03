import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
/*export default async function handler(req, res) {
  //await prisma.hotels.deleteMany();
  //https://airbnb13.p.rapidapi.com/search-location?location=Paris&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD
  const url =
    // "https://airbnb13.p.rapidapi.com/search-location?location=greece&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
    "https://airbnb13.p.rapidapi.com/search-location?location=istanbul&checkin=2023-10-05&checkout=2023-10-15&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b32d0aeec2msh5375c79ffa37829p134aa0jsn6448278abafb",
      "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
    },
  };

  try {
    /* const response = await fetch(url, options);
    const result = await response.json();
    console.log("🚀 ~ file: seeds.js:21 ~ handler ~ result:", result);*/

/* result.results.map(async (ALLdata) => {
      console.log(
        "🚀 ~ file: seeds.js:24 ~ result.results.map ~ ALLdata:",
        ALLdata.name
      );*/
/* await prisma.hotels.createMany({
        data: {
          bathrooms: ALLdata.bathrooms,
          bedrooms: ALLdata.bedrooms,
          city: ALLdata.city,
          images: ALLdata.images,
          isSuperhost: ALLdata.isSuperhost,
          lat: ALLdata.lat,
          lng: ALLdata.lng,
          name: ALLdata.name,
          previewAmenities: ALLdata.previewAmenities,
          price: ALLdata.price.rate,
          location: "istanbul",
          reviewsCount: ALLdata.reviewsCount,
          type: ALLdata.type,
        },
      });
    });
    await prisma.hotels.updateMany({
      where: {
        location: "rome",
      },
      data: {
        location: "italy",
      },
    });
  } catch (error) {
    console.error(error);
  }

  res.status(200).json("Done");
}*/
