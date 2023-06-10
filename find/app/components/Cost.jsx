"use client";
import { useContext } from "react";
import DataContext from "../context/DataContext";

export default function Cost({ hotel }) {
  const { bookingDays, setBookingDays } = useContext(DataContext);
  const tatalCost = hotel.price * bookingDays;
  const discond = () => {
    if (bookingDays >= 6) {
      return 80;
    } else {
      return 0;
    }
  };

  return (
    <div className="text-slate-900">
      <div className="mt-3 flex items-center justify-between">
        <p>
          ${hotel.price} x {bookingDays} nights
        </p>
        <p>${tatalCost}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p>Weekly stay discount</p>
        <p>-${discond()}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p>Cleaning fee </p>
        <p>$15</p>
      </div>
    </div>
  );
}
