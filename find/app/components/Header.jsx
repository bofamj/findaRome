import React from "react";
import SerchBar from "./SerchBar";

export default function Header() {
  return (
    <main className="h-[25rem] bg-main-bg flex items-center justify-center">
      <div className="flex flex-col items-center justify-center tracking-wide">
        <h1 className="text-4xl capitalize text-white dark:text-slate-900 mb-3">
          Find your next stay
        </h1>
        <p className="text-xl  capitalize text-white dark:text-slate-900 ">
          Search deals on hotels, homes, and much more...
        </p>
        <SerchBar />
      </div>
    </main>
  );
}
