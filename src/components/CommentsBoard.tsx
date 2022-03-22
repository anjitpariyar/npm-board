import Pagination from "./Pagination";
import CommentsWrapper from "./CommentsWrapper";
import { useState, useEffect } from "react";
import { useTable } from "../Hook/Board";
import { PaginationOptions, CommentsBoardData } from "../interfaces";
import React from "react";

export default function CommentsBoard({
  pageSize,
  activePage,
  data,
  prev,
  next,
  onPageChange,
  page,
  CommentBox,
  CommentForm,
}: CommentsBoardData) {
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
      <CommentsWrapper
        datas={pageData}
        CommentBox={CommentBox}
        CommentForm={CommentForm}
      />
      <Pagination {...paginationOptions} />
    </>
  );
}
