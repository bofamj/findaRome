import Image from "next/image";
import React from "react";

export default function Trending() {
  return (
    <section className="flex flex-col mt-10 m-auto  py-8  w-[90%]">
      <h1 className="text-4xl capitalize ml-6 text-slate-900 dark:text-white">
        Trending destinations
      </h1>
      <div className="flex  items-center justify-center gap-3 m-auto mt-9 w-[100%] px-8 ">
        <div className="w-1/2 h-[280px] flex  items-center justify-center  relative rounded">
          <Image
            src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
            alt="img"
            fill
            className="rounded-lg "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
            <h1>istanbul</h1>
          </div>
        </div>
        <div className="w-1/2 h-[280px] flex  items-center justify-center  relative rounded">
          {" "}
          <Image
            src="https://destinationwellknown.com/wp-content/uploads/2023/03/where-to-stay-mallorca.webp"
            alt="img"
            fill
            className="rounded-lg  "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
            <h1>majorca</h1>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center w-[95%] m-auto mt-8">
        <div className="relative w-[100%] h-[200px]">
          {" "}
          <Image
            src="https://americadomani.com/wp-content/uploads/2023/02/rome7th.jpg"
            alt="img"
            /*  width={500}
            height={500}
            className="rounded-lg " */
            fill
            className="rounded-lg  "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
            <h1> rome</h1>
          </div>
        </div>
        <div className="relative w-[100%] h-[200px]">
          {" "}
          <Image
            src="https://cdn.destguides.com/files/store/itinerary/990/background_image/webp_large_202112291737-fa24970d2b2bf67cee7ec041d0dcb5b3.webp"
            alt="img"
            /* width={500}
            height={500}
            className="rounded-lg " */
            fill
            className="rounded-lg  "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
            <h1>athens</h1>
          </div>
        </div>
        <div className="relative w-[100%] h-[200px]">
          {" "}
          <Image
            src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/01/a3/55.jpg"
            alt="img"
            /* width={500}
            height={600}
            className="rounded-lg " */
            fill
            className="rounded-lg  "
            style={{ objectFit: "cover" }}
          />
          <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
            <h1>cairo</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
