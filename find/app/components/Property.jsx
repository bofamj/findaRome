import Image from "next/image";
import React from "react";

export default function Property() {
  return (
    <div className="flex mb-5 relative w-[80%]  shadow   px-5 py-5 rounded-lg text-slate-900">
      <div className="flex relative w-[40%] h-[200px]  rounded-lg">
        <Image
          src="https://static.independent.co.uk/2023/03/24/09/Best%20New%20York%20boutique%20hotels.jpg"
          alt="img"
          fill
          className="rounded-lg  "
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-[70%] px-5 py-5">
        <h1 className="text-lg">Grand Balyan Hotel & Restaurant</h1>
        <p className="pt-5">
          Featuring a terrace, bar and views of city, Grand Balyan Hotel &
          Restaurant is located in Istanbul, a 15-minute walk from Blue Mosque.
        </p>
      </div>
      <div className="w-[20%] pt-5">
        <div className="flex mb-3 ">
          <h3 className="mr-2">Very Good</h3>
          <p className=" bg-blue-900 p-1 rounded-t-md rounded-br-md text-white">
            8.5
          </p>
        </div>
        <button className="px-3 py-2 border  rounded-md bg-blue-600 text-white dark:bg-dark-bg capitalize">
          show prices
        </button>
      </div>
    </div>
  );
}
