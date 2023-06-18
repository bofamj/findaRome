"use client";
import Link from "next/link";
import { paginate } from "../../utils/psginat";
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Property({ data, pageSize, location }) {
  console.log("🚀 ~ file: Property.jsx:8 ~ Property ~ data:", data);
  const { currentPage } = useContext(DataContext);
  const paginatePosts = paginate(data, currentPage, pageSize);

  return (
    <>
      <h1 className="text-2xl text-slate-900 dark:text-white mb-3 capitalize ">
        {location ? `location ${location}` : ""}
      </h1>
      {paginatePosts.map((d) => (
        <Link href={`/hotel/${d.id}`} className="no-underline">
          <div className="flex flex-col mb-5 relative w-[100%]  shadow   px-5 py-5 rounded-lg text-slate-900 md:flex-row md:w-[80%]">
            <div className="flex relative  h-[200px]  rounded-lg w-[100%] md:w-[40%] ">
              <img
                src={d.images[0]}
                alt="img"
                fill
                className="rounded-lg w-[100%] "
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="w-[100%] md:w-[70%] px-5 py-5">
              <h1 className="text-xl">{d.name}</h1>

              <p className="pt-5">
                {d.previewAmenities}
                {d.name}
              </p>
            </div>
            <div className="flex  md:w-[20%] w-[100%] pt-5 dm:flex-col md:h-[10%]">
              <div className="flex mb-3 mr-2 w-[50%] h-[10%]">
                <h3 className="mr-2 tex-xl">Very Good</h3>
                <p className=" bg-blue-900 p-1 rounded-t-md rounded-br-md text-white">
                  {d.rating ? d.rating : 0}
                </p>
              </div>
              <button className="px-3 text-sm py-2 border  rounded-md bg-blue-600 text-white dark:bg-dark-bg capitalize">
                show prices
              </button>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
}
