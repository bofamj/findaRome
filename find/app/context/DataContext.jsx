"use client";

import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [bookingDays, setBookingDays] = useState();

  return (
    <DataContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        bookingDays,
        setBookingDays,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
