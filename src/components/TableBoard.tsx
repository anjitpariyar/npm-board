import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import { useState, useEffect } from "react";
import { useTable } from "../Hook/Board";
import { PaginationOptions, TableBoardData } from "../interfaces";

export default function TableBoard({
  pageSize,
  activePage,
  data,
  prev,
  next,
  showCode,
  columns,
  onPageChange,
  page,
}: TableBoardData) {
  const [currentPage, setCurrentPage] = useState<number>(activePage || 1); // start with one

  const tableOption = {
    currentPage: currentPage, //defult 1
    data: data, //required
    pageSize: pageSize || 10, //default is 10

    // searchValue: searchValue,
  };

  //initilizing table hook
  const { pageData, totalData } = useTable({ ...tableOption });
  // pagination option
  const paginationOptions: PaginationOptions = {
    currentPage: currentPage, //required
    pageSize: pageSize || 10, //required
    onPageChange: onPageChange, //required
    totalData: totalData, //required'
    prev: prev || <span>{"<"}</span>, // default is <,
    next: next || <span>{">"}</span>, // default is >,
  };

  useEffect(() => {
    if (page) {
      setCurrentPage(page);
    }
  }, [page]);
  return (
    <>
      {/* for now its a only wat to connect pagination and table */}
      <Table data={pageData} columns={columns} />
      <Pagination {...paginationOptions} />
      {showCode && (
        <div>
          {" "}
          <pre>
            <code>
              {JSON.stringify(
                {
                  pageSize,
                  currentPage,
                  totalData,
                },
                null,
                2
              )}
            </code>
          </pre>
        </div>
      )}
    </>
  );
}
