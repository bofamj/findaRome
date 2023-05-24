import Image from "next/image";
import React from "react";

export default function PropertyType() {
  return (
    <section className="flex flex-col mt-10 m-auto  py-8  w-[90%]">
      <h1 className="text-4xl capitalize ml-6 text-slate-900 dark:text-white">
        Browse by property type
      </h1>
      <div className="grid grid-cols-4 gap-3 items-center w-[95%] m-auto mt-10">
        <div>
          <div className="flex relative w-[100%] h-[200px] bg-red-500 rounded-lg">
            {" "}
            <Image
              src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
          </div>

          <h1 className=" text-black uppercase text-lg font-bold mt-3">
            {" "}
            Hotels
          </h1>
        </div>
        <div>
          <div className="relative w-[100%] h-[200px]">
            {" "}
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/1/1e/AIMCO_apartment_interior.jpg"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className=" text-black uppercase text-lg font-bold mt-3">
            Apartments
          </h1>
        </div>
        <div>
          <div className="relative w-[100%] h-[200px]">
            {" "}
            <Image
              src="https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2017/09/Mango-Beach-Resort-in-Alibaug-OG-ss23092017.jpg"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className=" text-black uppercase text-lg font-bold mt-3">
            Resorts
          </h1>
        </div>
        <div>
          <div className="relative w-[100%] h-[200px]">
            {" "}
            <Image
              src="https://media-cdn.tripadvisor.com/media/vr-splice-j/09/f8/37/f3.jpg"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className=" text-black uppercase text-lg font-bold mt-3">
            {" "}
            Villas
          </h1>
        </div>
      </div>
    </section>
  );
}
