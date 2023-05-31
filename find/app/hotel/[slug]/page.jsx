import Reserve from "@/app/components/Reserve";
import Reviews from "@/app/components/Reviews";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="px-20 mx-3 my-5 text-slate-900 dark:text-white">
      <div className="">
        <h1 className="text-2xl tracking-wide mb-3">
          Rooftop Room in a Hip, Refined House -combinable with Tulum-
        </h1>
        <Reviews
          ret="5.0"
          rev="66 reviews"
          name="Mexico City, Ciudad de México, Mexico"
        />
      </div>
      <div className="w-[100%] h-[280px] flex mt-3  items-center justify-center  relative rounded">
        <div className="w-1/2 h-[280px] flex  items-center justify-center  relative rounded-l-lg ">
          <Image
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
            alt="img"
            fill
            className="rounded-l-lg "
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-1/2 h-[280px] grid grid-cols-2 gap-2 ml-2 items-center justify-center  relative rounded-r-lg">
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded">
            <Image
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
              alt="img"
              fill
              className=" "
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded-r-lg">
            <Image
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
              alt="img"
              fill
              className="rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative ">
            <Image
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
              alt="img"
              fill
              className=""
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded-r-lg ">
            <Image
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
              alt="img"
              fill
              className=" rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex mt-10">
        <Reserve />
        <div className="pl-20 tracking-wider leading-7">
          <p>
            Conveniently located in the center of Istanbul, HaciBayramHotel
            provides air-conditioned rooms, a garden, free WiFi and a shared
            lounge. This 3-star hotel offers room service and a 24-hour front
            desk. The property has a concierge service, a tour desk and currency
            exchange for guests. At the hotel, each room comes with a desk, a
            flat-screen TV, a private bathroom, bed linen and towels. Every room
            is equipped with a safety deposit box, while selected rooms are
            equipped with a balcony and others also offer garden views. Guest
            rooms will provide guests with a closet and an electric tea pot. A
            buffet, Full English/Irish or American breakfast is served at the
            property. HaciBayramHotel has a terrace. Popular points of interest
            near the accommodation include Blue Mosque, Hagia Sophia and
            Basilica Cistern. The nearest airport is Istanbul Sabiha Gokcen
            International, 24 miles from HaciBayramHotel, and the property
            offers a paid airport shuttle service.
          </p>
        </div>
      </div>
    </section>
  );
}
