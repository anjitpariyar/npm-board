import React from "react";
import Pagination from "./Pagination";
import Table from "./Table";
import { useState, useEffect } from "react";
import { useTable } from "../Hook/Board";
export default function TableBoard({ pageSize, activePage, data, prev, next, showCode, columns, onPageChange, page, }) {
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
        React.createElement(Table, { data: pageData, columns: columns }),
        React.createElement(Pagination, Object.assign({}, paginationOptions)),
        showCode && (React.createElement("div", null,
            " ",
            React.createElement("pre", null,
                React.createElement("code", null, JSON.stringify({
                    pageSize,
                    currentPage,
                    totalData,
                }, null, 2)))))));
}
