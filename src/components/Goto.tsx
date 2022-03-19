import React, { useState, useEffect } from "react";

const Goto = ({
  totalPageCount,
  onPageChange,
}: {
  totalPageCount: number;
  onPageChange: (page: number) => void;
}) => {
  const [page, setPage] = useState("");

  const onChange = (event: any) => {
    setPage(event.target.value);
  };

  useEffect(() => {
    if (page && parseInt(page) <= totalPageCount) {
      onPageChange(parseInt(page));
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
