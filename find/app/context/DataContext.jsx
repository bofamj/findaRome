"use client";

import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingDays, setBookingDays] = useState(1);
  const [items, setItems] = useState("my-items");

  return (
    <DataContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        bookingDays,
        setBookingDays,
        items,
        setItems,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
