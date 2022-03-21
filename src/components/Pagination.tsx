import React, { useState, useEffect } from "react";
import { usePagination, paginationStyle } from "../Hook/Board";
import { PaginationOptions } from "../interfaces";

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

const Pagination = ({
  onPageChange,
  currentPage = 1,
  pageSize,
  totalData,
  prev = <span>{"<"}</span>,
  next = <span>{">"}</span>,
  paginationSize = 5,
  trimmer = true,
}: PaginationOptions) => {
  // console.log("currentPage", currentPage);
  const [range, setRange]: any[] = useState([]);

  const Instance = usePagination({
    totalCount: totalData, // generated from table
    pageSize: pageSize, // default 10
    currentPage: 1, // default 1
  });

  const { totalPageCount } = Instance;
  const [trimmerState, setTrimmerState] = useState(trimmer);

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

  useEffect(() => {
    if (totalPageCount <= paginationSize) {
      setTrimmerState(false);
    }
  }, [totalPageCount]);

  return (
    <>
      <Ul>
        {totalPageCount > 1 && (
          <Button
            disabled={currentPage === 1}
            onClick={() => PrevFunc()}
            key="-1"
          >
            {prev}
          </Button>
        )}
        {trimmerState ? (
          <>
            <Li
              key={0}
              active={currentPage === 1}
              onClick={() => onPageChange(1)}
            >
              1
            </Li>
            {currentPage > 3 && <span>...</span>}
            {range.length > 0 &&
              range.map((count: number) => {
                return (
                  <Li
                    key={count}
                    active={count === currentPage}
                    onClick={() => onPageChange(count)}
                  >
                    {count}
                  </Li>
                );
              })}
            {currentPage < totalPageCount - 2 && <span>...</span>}

            <Li
              key={totalPageCount}
              active={currentPage === totalPageCount}
              onClick={() => onPageChange(totalPageCount)}
            >
              {totalPageCount}
            </Li>
          </>
        ) : (
          [...Array(totalPageCount)].map((count, index) => {
            return (
              <Li
                key={index + count || "0"}
                active={index === currentPage - 1}
                onClick={() => onPageChange(index + 1)}
              >
                {index + 1}
              </Li>
            );
          })
        )}
        {totalPageCount > 1 && (
          <Button
            disabled={currentPage === totalPageCount}
            onClick={() => NextFunc()}
            key={totalPageCount + 10}
          >
            {next}
          </Button>
        )}
      </Ul>
    </>
  );
};

export default Pagination;
