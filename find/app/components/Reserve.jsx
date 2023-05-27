import React from "react";
import Reviews from "./Reviews";

export default function Reserve() {
  return (
    <section className="w-[20rem] h-[30rem] shadow-md rounded-lg py-5 px-3 ">
      <div className="flex justify-between ">
        <h1 className="mr-3"> $50 $45 night</h1>
        <Reviews ret="5.0" rev="66 reviews" />
      </div>
    </section>
  );
}
