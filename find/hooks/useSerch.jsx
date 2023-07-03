"use client";
import DataContext from "../app/context/DataContext";
import axios from "axios";
import { useState } from "react";

export default function useSerch() {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState([]);

  const findCity = async (location) => {
    const searchParams = location;

    const option = {
      params: {
        location: searchParams.searchParams.city,
      },
    };
    const res = await axios.get("http://localhost:3000/api/findHotals", option);
    const data = res.data.cityLocation;
    if (data) {
      setCity(data);
    } else {
      const options = {
        method: "GET",
        url: "https://airbnb13.p.rapidapi.com/search-location",
        params: {
          location: searchParams.searchParams.city,
          checkin: "2023-09-16",
          checkout: "2023-09-17",
          adults: "1",
          children: "0",
          infants: "0",
          pets: "0",
          page: "1",
          currency: "USD",
        },
        headers: {
          "X-RapidAPI-Key":
            "3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6",
          "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);

        setCity(response.data.results);
        const cityData = axios.post("http://localhost:3000/api/hotels", {
          city,
          location: searchParams.searchParams.city,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  return { loading, error, findCity, city };
}

//3cace6a128msh3b60c4110624461p16e8f0jsna4e59d6640d6
//0ab4f2de68msh5db84fd793386d1p15c04ajsnf14c84fd4c7d
