"use client";
import Reserve from "@/app/components/Reserve";
import Reviews from "@/app/components/Reviews";
import HotelMap from "../../components/HotelMap";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

export default function page({ params }) {
  return (
    <section className="px-2 mx-3 my-5 text-slate-900 dark:text-white md:px-20">
      {/* <div className="">
        <h1 className="text-xl tracking-wide mb-3 md:text-2xl">{hotel.name}</h1>
        <Reviews
          ret={hotel.rating}
          rev={`${hotel.reviewsCount} reviews`}
          name={hotel.city}
        />
      </div>
      <div className="w-[100%] h-[500] flex flex-col mt-3  items-center justify-center  relative rounded md:flex-row md:h-[280px]">
        <div className="w-[100%] h-1/2 flex mb-5  items-center justify-center  relative rounded-l-lg md:w-1/2 md:h-[280px] md:mb-0">
          <img
            src={hotel.images[0]}
            alt="img"
            fill
            className="md:rounded-l-lg w-[100%] h-[280px]"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="w-[100%] h-1/2 grid grid-cols-2 gap-2 ml-2 items-center justify-center  relative rounded-r-lg md:w-1/2 md:h-[280px]">
          <div className="w-[100%] h-1/2 flex  items-center justify-center  relative rounded">
            <img
              src={hotel.images[1]}
              alt="img"
              fill
              className="w-[100%] h-[135px]"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] rounded flex  items-center justify-center  relative md:rounded-r-lg">
            <img
              src={hotel.images[2]}
              alt="img"
              fill
              className="w-[100%] h-[135px]  md:rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative ">
            <img
              src={hotel.images[3]}
              alt="img"
              fill
              className="w-[100%] h-[135px] "
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[100%] h-[100%] flex  items-center justify-center  relative rounded-r-lg ">
            <img
              src={hotel.images[4]}
              alt="img"
              fill
              className="w-[100%] h-[135px]  md:rounded-r-lg"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col  mt-10 md:flex-row">
        <Reserve hotel={hotel} />
        <div className="pl-0 h-[650px] w-[100%] mt-3 rounded-lg overflow-hidden tracking-wider leading-7 md:mt-0 md:w-2/3 md:pl-20 md:h-[470px]">
          <p>
            {hotel.previewAmenities}
            {hotel.name}
          </p>
          <HotelMap late={hotel.lat} lone={hotel.lng} />
        </div>
      </div> */}
    </section>
  );
}
