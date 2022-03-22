// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';
import { ReactNode } from "react";

export interface TableProps {
  currentPage: number; //defult 1
  data: any[]; //required
  pageSize: number;
}

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  currentPage: number;
}

export interface PaginationOptions {
  currentPage: number; //required
  pageSize: number; //required
  onPageChange: any; //required
  totalData: any; //required'
  prev: any; // default is <,
  next: any; // default is >,
  paginationSize?: number; //default is 5
  trimmer?: boolean; // default is true
  goto?: boolean; // default is true, that show an example
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

export interface SearchProps {
  placeholder?: string;
  buttonText?: string | ReactNode;
  onFinish: (searchText: string) => void;
}

export interface GotoProps {
  data: any[];
  onPageChange: (page: number) => void;
  pageSize: number;
}

export interface CommentsWrapperProps {
  datas: any[];
  CommentForm: any;
  CommentBox: any;
}

export interface CommentsBoardData {
  data: any;
  pageSize?: number;
  activePage?: number;
  prev?: ReactNode;
  next?: ReactNode;
  onPageChange: (page: number) => void;
  page: number | undefined;
  CommentBox: any;
  CommentForm: any;
}
