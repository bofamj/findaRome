"use client";
import { useContext, useEffect } from "react";
import DataContext from "../context/DataContext";

export default function Cost({ hotel }) {
  const { bookingDays } = useContext(DataContext);

  useEffect(() => {
    bookingDays;
  }, [bookingDays]);
  return (
    <div className="text-slate-900">
      <div className="mt-3 flex items-center justify-between">
        <p>
          ${hotel.price} x {bookingDays} nights
        </p>
        <p>$800</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p>Weekly stay discount</p>
        <p>-$80</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <p>Cleaning fee </p>
        <p>$15</p>
      </div>
    </div>
  );
}
