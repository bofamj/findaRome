"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useSerch from "../../hooks/useSerch";
import React from "react";

const SerchBar = () => {
  const { loading, error, findCity } = useSerch();

  const [location, setLocation] = useState("");

  const router = useRouter();

  return (
    <div className="text-left text-sm  py-1 mx-1  flex  justify-center md:flex-row md:m-auto md:text-lg">
      <input
        className="rounded  mr-2 p-2 w-[270px] h-[40PX] dark:bg-slate-900 dark:text-white dark:placeholder:text-white md:w-[450px]"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-blue-600 px-1 md:px-9 py-0 md:py-2 max-h-10 mr-1 mt-0 md:mt-0 text-white  dark:bg-red-900"
        onClick={() => {
          if (location === "") return;
          router.push(`/serchLocation?city=${location}`);
        }}
      >
        Let's go
      </button>
    </div>
  );
};

export default SerchBar;
