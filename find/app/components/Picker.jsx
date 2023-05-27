"use client";
import { useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

export default function Picker() {
  const [startDate, setStartDate] = useState(new Date());
  return <DateRangePicker className="py-3 px-3 bg-gray-200" />;
}
