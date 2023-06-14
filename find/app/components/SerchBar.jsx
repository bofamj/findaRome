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
    <div className="text-left text-sm  py-3 mx-4  flex justify-center md:m-auto md:text-lg">
      <input
        className="rounded  mr-3 p-2 w-[450px] dark:bg-slate-900 dark:text-white dark:placeholder:text-white"
        type="text"
        placeholder="State, city or town"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <button
        className="rounded bg-blue-600 px-3 md:px-9 py-2 text-white  dark:bg-red-900"
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
