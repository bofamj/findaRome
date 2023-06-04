import Reserve from "@/app/components/Reserve";
import Reviews from "@/app/components/Reviews";
import Image from "next/image";
import React from "react";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const fetchHotelBySlug = async (id) => {
  const hotel = await prisma.hotels.findUnique({
    where: {
      id,
    },
  });
  return hotel;
};

export default async function page({ params }) {
  const hotel = await fetchHotelBySlug(Number(params.slug));

  return (
    <section className="px-20 mx-3 my-5 text-slate-900 dark:text-white">
      <div className="">
        <h1 className="text-2xl tracking-wide mb-3">{hotel.name}</h1>
        <Reviews
          ret={hotel.rating}
          rev={`${hotel.reviewsCount} reviews`}
          name={hotel.city}
        />
      </div>
      <div className="w-[100%] h-[280px] flex mt-3  items-center justify-center  relative rounded">
        <div className="w-1/2 h-[280px] flex  items-center justify-center  relative rounded-l-lg ">
          <img
            src={hotel.images[0]}
            alt="img"
            fill
            className="rounded-l-lg w-[100%] h-[280px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 h-[280px] grid grid-cols-2 gap-2 ml-2 items-center justify-center  relative rounded-r-lg">
          <div className="w-[100%] h-1/2 flex  items-center justify-center  relative rounded">
            <img
              src={hotel.images[1]}
              alt="img"
              fill
              className="w-[100%] h-[135px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded-r-lg">
            <img
              src={hotel.images[2]}
              alt="img"
              fill
              className="w-[100%] h-[135px] rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative ">
            <img
              src={hotel.images[3]}
              alt="img"
              fill
              className="w-[100%] h-[135px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded-r-lg ">
            <img
              src={hotel.images[4]}
              alt="img"
              fill
              className="w-[100%] h-[135px] rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <Reserve hotel={hotel} />
        <div className="pl-20 tracking-wider leading-7">
          <p>
            {hotel.previewAmenities}
            {hotel.name}
          </p>
        </div>
      </div>
    </section>
  );
}
/* const getHotalels = async function () {
    const url =
      "https://airbnb13.p.rapidapi.com/search-location?location=istanbul&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      let datas = [];
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
           
            reviewsCount: data.reviewsCount,
            type: data.type,
          },
        });
      });
    } catch (error) {
      console.error(error);
    }
  };
  getHotalels();*/
