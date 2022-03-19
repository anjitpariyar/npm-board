import { ReactNode } from "react";
export interface TableProps {
    currentPage: number;
    data: any[];
    pageSize: number;
}
export interface PaginationProps {
    totalCount: number;
    pageSize: number;
    currentPage: number;
}
export interface PaginationOptions {
    currentPage: number;
    pageSize: number;
    onPageChange: any;
    totalData: any;
    prev: any;
    next: any;
    paginationSize?: number;
    trimmer?: boolean;
    goto?: boolean;
}
export interface TableBoardData {
    data: any;
    columns: any;
    pageSize?: number;
    activePage?: number;
    prev?: ReactNode;
    next?: ReactNode;
    showCode?: boolean;
    onPageChange: (page: number) => void;
    page: number | undefined;
}
export interface paginationStyleProps {
    color?: string;
    backgroundColor?: string;
    activeBackground?: string;
    activeColor?: string;
    align?: string;
    customStyle?: string;
}
//# sourceMappingURL=index.d.ts.map