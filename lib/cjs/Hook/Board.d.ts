import { PaginationProps, TableProps, paginationStyleProps } from "../interfaces";
/**
 *
 * @param totalCount required, pageSize is total number of row in one page default is 10, currentPage default 0
 * @returns
 */
export declare const usePagination: ({ totalCount, pageSize, currentPage, }: PaginationProps) => {
    pageSize: number;
    currentPage: number;
    totalPageCount: number;
};
/**
 *
 */
export declare const paginationController: ({ page }: {
    page: number;
}) => void;
export declare const useTable: ({ currentPage, data, pageSize, }: TableProps) => {
    pageData: any[];
    totalData: number;
};
/**
 *
 * @param param0
 * @returns
 */
export declare const paginationStyle: ({ color, backgroundColor, activeBackground, activeColor, align, customStyle, }: paginationStyleProps) => {
    Ul: import("styled-components").StyledComponent<"ul", any, {}, never>;
    Li: import("styled-components").StyledComponent<"li", any, {
        active?: boolean | undefined;
    }, never>;
    Button: import("styled-components").StyledComponent<"li", any, {
        active?: boolean | undefined;
    } & {
        disabled?: boolean | undefined;
    }, never>;
};
//# sourceMappingURL=Board.d.ts.map