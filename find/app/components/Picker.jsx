"use client";
import { useEffect, useState } from "react";
import { DateRangePicker } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

export default function Picker() {
  const [startDate, setStartDate] = useState(new Date());
  const [data, setData] = useState([]);
  const getHotalels = async function () {
    const url =
      "https://airbnb13.p.rapidapi.com/search-location?location=istanbul&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
        "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();

      setData(result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getHotalels();
  }, []);
  console.log(data);
  return <DateRangePicker className="py-3 px-3 w-[300px] purple" />;
}
