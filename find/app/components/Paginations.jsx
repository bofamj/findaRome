"use client";
import { Pagination } from "@mui/material";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import _ from "lodash";

export default function Paginations({ items, pageSize }) {
  const { setCurrentPage, currentPage } = useContext(DataContext);

  const handleChange = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = items / pageSize;

  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);

  return (
    <Pagination
      count={pages.length}
      variant="outlined"
      shape="rounded"
      onChange={handleChange}
    />
  );
}
