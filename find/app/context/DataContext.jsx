"use client";

import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <DataContext.Provider
      value={{
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
