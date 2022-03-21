import React, { useState, useEffect } from "react";
import { GotoProps } from "../interfaces";

const Goto = ({ data, onPageChange, pageSize }: GotoProps) => {
  // @ts-ignore
  const totalPageCount: number = parseInt(data.length, 10) / pageSize;
  const [page, setPage] = useState<number | string | any>("");
  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    if (value) setPage(parseInt(value, 10));
  };

  useEffect(() => {
    if (page && page <= totalPageCount) {
      onPageChange(page);
    }
  }, [page]);

  return (
    <div>
      <label htmlFor="goto">Goto</label>
      <input
        id="goto"
        type="number"
        placeholder={"from 1 to " + totalPageCount}
        min="1"
        max={totalPageCount}
        value={page}
        onChange={(event) => onChange(event)}
      />
    </div>
  );
};

export default Goto;
