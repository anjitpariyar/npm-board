import Pagination from "./Pagination";
import CommentsWrapper from "./CommentsWrapper";
import { useState, useEffect } from "react";
import { useTable } from "../Hook/Board";
import React from "react";
export default function CommentsBoard({ pageSize, activePage, data, prev, next, onPageChange, page, CommentBox, CommentForm, }) {
    const [currentPage, setCurrentPage] = useState(activePage || 1); // start with one
    const tableOption = {
        currentPage: currentPage,
        data: data,
        pageSize: pageSize || 10, //default is 10
        // searchValue: searchValue,
    };
    //initilizing table hook
    const { pageData, totalData } = useTable(Object.assign({}, tableOption));
    // pagination option
    const paginationOptions = {
        currentPage: currentPage,
        pageSize: pageSize || 10,
        onPageChange: onPageChange,
        totalData: totalData,
        prev: prev || React.createElement("span", null, "<"),
        next: next || React.createElement("span", null, ">"), // default is >,
    };
    useEffect(() => {
        if (page) {
            setCurrentPage(page);
        }
    }, [page]);
    return (React.createElement(React.Fragment, null,
        React.createElement(CommentsWrapper, { datas: pageData, CommentBox: CommentBox, CommentForm: CommentForm }),
        React.createElement(Pagination, Object.assign({}, paginationOptions))));
}
