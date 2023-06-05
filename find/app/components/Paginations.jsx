"use client";
import { Pagination } from "@mui/material";
import _ from "lodash";

export default function Paginations({
  items,
  pageSize,
  setCurrentPage,
  onPageChange,
}) {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const pageCount = items / pageSize;

  if (Math.ceil(pageCount) === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const page = 1;
  return (
    <Pagination
      count={pages.length}
      variant="outlined"
      shape="rounded"
      onClick={() => handlePageChange(page)}
    />
  );
}
