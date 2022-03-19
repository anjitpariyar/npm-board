"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginationStyle = exports.useTable = exports.paginationController = exports.usePagination = void 0;
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
/**
 *
 * @param totalCount required, pageSize is total number of row in one page default is 10, currentPage default 0
 * @returns
 */
const usePagination = ({ totalCount, pageSize = 10, currentPage = 0, }) => {
    const paginationRange = (0, react_1.useMemo)(() => {
        // Our implementation logic will go here
        const totalPageCount = Math.ceil(totalCount / pageSize);
        return { pageSize, currentPage, totalPageCount };
    }, [totalCount, pageSize, currentPage]);
    return paginationRange;
};
exports.usePagination = usePagination;
/**
 *
 */
const paginationController = ({ page }) => {
    (0, react_1.useMemo)(() => {
        // Our implementation logic will go here
        const newPage = page;
        return { newPage };
    }, [page]);
};
exports.paginationController = paginationController;
const useTable = ({ currentPage = 1, data, pageSize = 10, }) => {
    const tableData = (0, react_1.useMemo)(() => {
        // data slice
        const firstPageIndex = (currentPage - 1) * pageSize;
        const lastPageIndex = firstPageIndex + pageSize;
        const pageData = data.slice(firstPageIndex, lastPageIndex);
        const totalData = data.length;
        return { pageData, totalData };
    }, [currentPage]);
    debugger;
    return tableData;
};
exports.useTable = useTable;
// style inside board not sure its a good idea
/**
 *
 * @param param0
 * @returns
 */
const paginationStyle = ({ color = "#000", backgroundColor = "transparent", activeBackground = "rgba(0, 0, 0, 0.04)", activeColor = "#000", align = "center", customStyle, }) => {
    const Ul = styled_components_1.default.ul `
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: margin;

    justify-content: ${align === "center"
        ? "center"
        : align === "right"
            ? "flex-end"
            : "flex-start"};

    ${customStyle}
  `;
    const Li = styled_components_1.default.li `
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: ${({ active }) => (active ? activeColor : color)};
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    cursor: pointer;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none;
    background-color: ${({ active }) => active ? activeBackground : backgroundColor};

    &:hover {
      background-color: ${activeBackground};
    }
  `;
    const Button = (0, styled_components_1.default)(Li) `
    cursor: ${({ disabled }) => disabled && "not-allowed"};
  `;
    return { Ul, Li, Button };
};
exports.paginationStyle = paginationStyle;
