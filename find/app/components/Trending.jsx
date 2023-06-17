import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Trending() {
  return (
    <section className="flex flex-col mt-10 m-auto py-8 w-[100%]  md:w-[90%]">
      <h1 className="text-2xl capitalize ml-6 text-slate-900 dark:text-white md:text-4xl">
        Trending destinations
      </h1>
      <div className="flex flex-col  items-center justify-center gap-3 m-auto mt-9 w-[100%] px-3 md:px-8 md:flex-row">
        <div className="w-[100%] h-[300px] flex  items-center justify-center  relative rounded md:w-1/2 md:h-[280px]">
          <Link href={`/location/turky`} className="no-underline">
            <Image
              src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/507000/507808-istanbul.jpg"
              alt="img"
              fill
              className="rounded-lg "
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
              <h1 className="text-xl">istanbul</h1>
            </div>
          </Link>
        </div>
        <div className="w-[100%] h-[350px] flex  items-center justify-center  relative rounded md:w-1/2 md:h-[280px]">
          <Link href={`/location/spain`} className="no-underline">
            <Image
              src="https://destinationwellknown.com/wp-content/uploads/2023/03/where-to-stay-mallorca.webp"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
              <h1 className="text-xl">majorca</h1>
            </div>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 items-center w-[95%] m-auto mt-8 md:grid-cols-3">
        <div className="relative w-[100%] h-[200px]">
          <Link href={`/location/italy`} className="no-underline">
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
              <h1 className="text-xl"> rome</h1>
            </div>
          </Link>
        </div>
        <div className="relative w-[100%] h-[200px]">
          <Link href={`/location/greece`} className="no-underline">
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
              <h1 className="text-xl">athens</h1>
            </div>
          </Link>
        </div>
        <div className="relative w-[100%] h-[200px]">
          <Link href={`/location/maldives`} className="no-underline">
            <Image
              src="https://img.veenaworld.com/wp-content/uploads/2022/08/A-Travel-Guide-to-the-Maldives-Things-to-Do-Places-to-Explore-and-the-Best-Season-to-Visit-scaled-e1663098468473.jpg"
              alt="img"
              fill
              className="rounded-lg  "
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-4 left-4 text-white uppercase text-lg font-bold">
              <h1 className="text-xl">maldives</h1>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
