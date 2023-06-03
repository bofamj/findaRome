import Image from "next/image";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import React from "react";

export default async function Property() {
  const data = await prisma.hotels.findMany();
  return (
    <>
      {data.map((d) => (
        <div className="flex mb-5 relative w-[80%]  shadow   px-5 py-5 rounded-lg text-slate-900">
          <div className="flex relative w-[40%] h-[200px]  rounded-lg">
            <img
              src={d.images[0]}
              alt="img"
              fill
              className="rounded-lg w-[100%] "
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="w-[70%] px-5 py-5">
            <h1 className="text-lg">{d.name}</h1>

            <p className="pt-5">
              {d.previewAmenities}
              {d.name}
            </p>
          </div>
          <div className="w-[20%] pt-5">
            <div className="flex mb-3 ">
              <h3 className="mr-2">Very Good</h3>
              <p className=" bg-blue-900 p-1 rounded-t-md rounded-br-md text-white">
                {d.rating ? d.rating : 0}
              </p>
            </div>
            <button className="px-3 py-2 border  rounded-md bg-blue-600 text-white dark:bg-dark-bg capitalize">
              show prices
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
