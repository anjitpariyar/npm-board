import React, { useState, useEffect } from "react";
import { usePagination, paginationStyle } from "../Hook/Board";
import Goto from "./Goto";
// option
// color = "#000",
//   backgroundColor = "transparent",
//   activeBackground = "rgba(0, 0, 0, 0.04)",
//   activeColor = "#000",
//align = "center",
//margin: "20px 0";
//custom style
// @ts-ignore
const styleInstance = paginationStyle({ customStyle: { padding: "20px" } });
const { Ul, Li, Button } = styleInstance;
const Pagination = ({ onPageChange, currentPage = 1, pageSize, totalData, prev = React.createElement("span", null, "<"), next = React.createElement("span", null, ">"), 
// paginationSize = 5,
trimmer = true, goto = true, }) => {
    // console.log("currentPage", currentPage);
    const [range, setRange] = useState([]);
    const Instance = usePagination({
        totalCount: totalData,
        pageSize: pageSize,
        currentPage: 1, // default 1
    });
    const { totalPageCount } = Instance;
    //options
    // color = "#000",
    // backgroundColor = "transparent",
    // activeBackground = "rgba(0, 0, 0, 0.04)",
    // activeColor = "#000",
    const PrevFunc = () => {
        if (currentPage !== 1) {
            onPageChange(currentPage - 1);
        }
    };
    const NextFunc = () => {
        if (currentPage !== totalPageCount) {
            onPageChange(currentPage + 1);
        }
    };
    useEffect(() => {
        let start = currentPage - 1;
        let end = currentPage + 1;
        if (start <= 1) {
            end = end + 2 - Math.abs(start);
            start = 2;
        }
        if (end >= totalPageCount) {
            start = start - 1 - (end - totalPageCount);
            end = totalPageCount - 1;
        }
        let tempRange = [...Array(end - start + 1).keys()].map((x) => x + start);
        setRange([...tempRange]);
    }, [currentPage, totalPageCount]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Ul, null,
            React.createElement(Button, { disabled: currentPage === 1, onClick: () => PrevFunc(), key: "-1" }, prev),
            trimmer ? (React.createElement(React.Fragment, null,
                React.createElement(Li, { key: 0, active: currentPage === 1, onClick: () => onPageChange(1) }, "1"),
                currentPage > 3 && React.createElement("span", null, "..."),
                range.length > 0 &&
                    range.map((count) => {
                        return (React.createElement(Li, { key: count, active: count === currentPage, onClick: () => onPageChange(count) }, count));
                    }),
                currentPage < totalPageCount - 2 && React.createElement("span", null, "..."),
                React.createElement(Li, { key: totalPageCount, active: currentPage === totalPageCount, onClick: () => onPageChange(totalPageCount) }, totalPageCount))) : ([...Array(totalPageCount)].map((count, index) => {
                return (React.createElement(Li, { key: index + count || "0", active: index === currentPage - 1, onClick: () => onPageChange(index + 1) }, index + 1));
            })),
            React.createElement(Button, { disabled: currentPage === totalPageCount, onClick: () => NextFunc(), key: totalPageCount + 10 }, next)),
        goto && (React.createElement(Goto, { totalPageCount: totalPageCount, onPageChange: onPageChange }))));
};
export default Pagination;
