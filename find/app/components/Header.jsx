import React from "react";
import SerchBar from "./SerchBar";

export default function Header() {
  return (
    <main className="h-[25rem] bg-main-bg flex items-center justify-center">
      <div className="flex flex-col flex-wrap p-3 items-center justify-center ">
        <h1 className="text-2xl capitalize text-white dark:text-slate-900 mb-3 md:text-4xl">
          Find your next stay
        </h1>
        <p className="text-sm p-3  capitalize text-white dark:text-slate-900 md:text-xl  ">
          Search deals on hotels, homes, and much more...
        </p>
        <SerchBar />
      </div>
    </main>
  );
}
