import Image from "next/image";
import React from "react";

export default function Trending() {
  return (
    <section className="flex flex-col mt-10 m-auto  py-8  w-[90%]">
      <h1 className="text-4xl capitalize ml-6 text-slate-900 dark:text-white">
        Trending destinations
      </h1>
      <div className="flex  items-center justify-center m-auto mt-9 w-[100%] ">
        <div className="w-1/2  flex  items-center justify-center">
          <Image
            src="https://media.timeout.com/images/105859738/image.jpg"
            alt="img"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="w-1/2  flex  items-center justify-center">
          {" "}
          <Image
            src="https://media.timeout.com/images/105859738/image.jpg"
            alt="img"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 items-center w-[95%] m-auto mt-8">
        <div className="">
          {" "}
          <Image
            src="https://media.timeout.com/images/105859738/image.jpg"
            alt="img"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="">
          {" "}
          <Image
            src="https://media.timeout.com/images/105859738/image.jpg"
            alt="img"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
        <div className="">
          {" "}
          <Image
            src="https://media.timeout.com/images/105859738/image.jpg"
            alt="img"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}
