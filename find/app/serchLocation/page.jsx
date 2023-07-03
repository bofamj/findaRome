"use client";
import Property from "../components/Property";
import Paginations from "../components/Paginations";
import useSerch from "@/hooks/useSerch";
import { useEffect } from "react";
import SershProperty from "../components/SershProperty";

export default async function Hotels(searchParams) {
  const location = searchParams;

  const { loading, error, findCity, city } = useSerch();
  useEffect(() => {
    findCity(location);
  }, [searchParams]);

  const pageSize = 10;

  return (
    <main className=" min-h-screen px-24 mt-20  text-slate-800  bg-gray-100 dark:bg-zinc-900">
      <SershProperty
        data={city}
        pageSize={pageSize}
        location={location.searchParams.city}
      />
      <Paginations items={city.length} pageSize={pageSize} />
    </main>
  );
}
