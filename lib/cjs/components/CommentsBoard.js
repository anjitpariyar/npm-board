"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pagination_1 = __importDefault(require("./Pagination"));
const CommentsWrapper_1 = __importDefault(require("./CommentsWrapper"));
const react_1 = require("react");
const Board_1 = require("../Hook/Board");
const react_2 = __importDefault(require("react"));
function CommentsBoard({ pageSize, activePage, data, prev, next, onPageChange, page, CommentBox, CommentForm, }) {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(activePage || 1); // start with one
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
        prev: prev || react_2.default.createElement("span", null, "<"),
        next: next || react_2.default.createElement("span", null, ">"), // default is >,
    };
    (0, react_1.useEffect)(() => {
        if (page) {
            setCurrentPage(page);
        }
    }, [page]);
    return (react_2.default.createElement(react_2.default.Fragment, null,
        react_2.default.createElement(CommentsWrapper_1.default, { datas: pageData, CommentBox: CommentBox, CommentForm: CommentForm }),
        react_2.default.createElement(Pagination_1.default, Object.assign({}, paginationOptions))));
}
exports.default = CommentsBoard;
