"use client";
import { useEffect, useState, useContext } from "react";
import DataContext from "../context/DataContext";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

export default function Picker() {
  const { setBookingDays } = useContext(DataContext);

  const [value, setValue] = useState([new Date(), new Date()]);
  const from = value[0].toLocaleDateString("en-CA");
  const to = value[1].toLocaleDateString("en-CA");
  const diffInMs = new Date(to) - new Date(from);
  //*how meny days
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  setBookingDays(diffInDays);

  return (
    <DateRangePicker
      className="py-3 px-3 flex w-[300px] purple"
      appearance="default"
      format="yyyy-MM-dd"
      placeholder="Select Date Range"
      value={value}
      onChange={setValue}
    />
  );
}
