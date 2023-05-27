import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section className="px-20 mx-3 my-5">
      <div className="">
        <h1 className="text-2xl tracking-wide mb-3">
          Rooftop Room in a Hip, Refined House -combinable with Tulum-
        </h1>
        <div>
          <span className="pr-5">5.0</span>
          <span className="pr-5">66 reviews</span>
          <span className="pr-5">Mexico City, Ciudad de México, Mexico</span>
        </div>
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
    </section>
  );
}
