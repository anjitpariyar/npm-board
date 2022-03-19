"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Pagination_1 = __importDefault(require("./Pagination"));
const Table_1 = __importDefault(require("./Table"));
const react_2 = require("react");
const Board_1 = require("../Hook/Board");
function TableBoard({ pageSize, activePage, data, prev, next, showCode, columns, onPageChange, page, }) {
    const [currentPage, setCurrentPage] = (0, react_2.useState)(activePage || 1); // start with one
    const tableOption = {
        currentPage: currentPage,
        data: data,
        pageSize: pageSize || 10, //default is 10
        // searchValue: searchValue,
    };
    //initilizing table hook
    const { pageData, totalData } = (0, Board_1.useTable)(Object.assign({}, tableOption));
    // pagination option
    const paginationOptions = {
        currentPage: currentPage,
        pageSize: pageSize || 10,
        onPageChange: onPageChange,
        totalData: totalData,
        prev: prev || react_1.default.createElement("span", null, "<"),
        next: next || react_1.default.createElement("span", null, ">"), // default is >,
    };
    (0, react_2.useEffect)(() => {
        if (page) {
            setCurrentPage(page);
        }
    }, [page]);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Table_1.default, { data: pageData, columns: columns }),
        react_1.default.createElement(Pagination_1.default, Object.assign({}, paginationOptions)),
        showCode && (react_1.default.createElement("div", null,
            " ",
            react_1.default.createElement("pre", null,
                react_1.default.createElement("code", null, JSON.stringify({
                    pageSize,
                    currentPage,
                    totalData,
                }, null, 2)))))));
}
exports.default = TableBoard;
