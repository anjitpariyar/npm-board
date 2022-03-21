"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Board_1 = require("../Hook/Board");
// option
// color = "#000",
//   backgroundColor = "transparent",
//   activeBackground = "rgba(0, 0, 0, 0.04)",
//   activeColor = "#000",
//align = "center",
//margin: "20px 0";
//custom style
// @ts-ignore
const styleInstance = (0, Board_1.paginationStyle)({ customStyle: { padding: "20px" } });
const { Ul, Li, Button } = styleInstance;
const Pagination = ({ onPageChange, currentPage = 1, pageSize, totalData, prev = react_1.default.createElement("span", null, "<"), next = react_1.default.createElement("span", null, ">"), paginationSize = 5, trimmer = true, }) => {
    // console.log("currentPage", currentPage);
    const [range, setRange] = (0, react_1.useState)([]);
    const Instance = (0, Board_1.usePagination)({
        totalCount: totalData,
        pageSize: pageSize,
        currentPage: 1, // default 1
    });
    const { totalPageCount } = Instance;
    const [trimmerState, setTrimmerState] = (0, react_1.useState)(trimmer);
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
    (0, react_1.useEffect)(() => {
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
    (0, react_1.useEffect)(() => {
        if (totalPageCount <= paginationSize) {
            setTrimmerState(false);
        }
    }, [totalPageCount]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Ul, null,
            totalPageCount > 1 && (react_1.default.createElement(Button, { disabled: currentPage === 1, onClick: () => PrevFunc(), key: "-1" }, prev)),
            trimmerState ? (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement(Li, { key: 0, active: currentPage === 1, onClick: () => onPageChange(1) }, "1"),
                currentPage > 3 && react_1.default.createElement("span", null, "..."),
                range.length > 0 &&
                    range.map((count) => {
                        return (react_1.default.createElement(Li, { key: count, active: count === currentPage, onClick: () => onPageChange(count) }, count));
                    }),
                currentPage < totalPageCount - 2 && react_1.default.createElement("span", null, "..."),
                react_1.default.createElement(Li, { key: totalPageCount, active: currentPage === totalPageCount, onClick: () => onPageChange(totalPageCount) }, totalPageCount))) : ([...Array(totalPageCount)].map((count, index) => {
                return (react_1.default.createElement(Li, { key: index + count || "0", active: index === currentPage - 1, onClick: () => onPageChange(index + 1) }, index + 1));
            })),
            totalPageCount > 1 && (react_1.default.createElement(Button, { disabled: currentPage === totalPageCount, onClick: () => NextFunc(), key: totalPageCount + 10 }, next)))));
};
exports.default = Pagination;
