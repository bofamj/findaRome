"use client";
import Link from "next/link";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Success = () => {
  const { data } = useContext(DataContext);
  console.log("🚀 ~ file: page.jsx:8 ~ Success ~ data:", data);

  return (
    <div className="h-screen grid place-items-center">
      <div className="text-center">
        <h1 className="text-8xl font-bold">Thank You</h1>
        <p className="text-center text-2xl"> Successfully Booked</p>

        <Link href="/">
          <p className="bg-red-600 text-white py-4 px-12 mt-4 hover:bg-red-800 cursor-pointer">
            Back To The Home Page
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Success;
