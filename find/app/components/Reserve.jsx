"use client";
import axios from "axios";
import Cost from "./Cost";
import Gusts from "./Gusts";
import Picker from "./Picker";
import Reviews from "./Reviews";
//import usePayment from "../../hooks/usePayment";
import Link from "next/link";
import { useState, useContext } from "react";
import DataContext from "../context/DataContext";

export default function Reserve({ hotel }) {
  console.log("🚀 ~ file: Reserve.jsx:13 ~ Reserve ~ hotel:", hotel);
  const { bookingDays, setBookingDays } = useContext(DataContext);
  const tatalCost = hotel.price * bookingDays;
  const [reservation, setReservation] = useState([
    {
      tatalCost,
      name: hotel.name,
      image: hotel.images[0],
    },
  ]);

  const createCheckoutSession = async () => {
    axios
      .post("http://localhost:3000/api/checkout_sessions", { reservation })
      .then((res) => {
        console.log(res);
        window.location = res.data.sessionURL;
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="w-[20rem] h-[30rem] shadow-md rounded-lg py-5 px-3 text-slate-900 relative ">
      <div className="flex justify-between ">
        <h6 className="mr-3"> ${hotel.price} night</h6>
        <Reviews ret={hotel.rating} rev={`${hotel.reviewsCount} reviews`} />
      </div>
      <div className="mt-5 m-auto">
        <Picker />
      </div>
      <div className="relative mb-4 h-20 bg-white">
        <Gusts bedrooms={hotel.bedrooms} />
      </div>
      <button
        className="py-2 px-[7.5rem] rounded text-white   bg-pink-800"
        onClick={createCheckoutSession}
      >
        Reserve
      </button>
      <Cost hotel={hotel} />
    </section>
  );
}
//
