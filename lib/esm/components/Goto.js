import React, { useState, useEffect } from "react";
const Goto = ({ data, onPageChange, pageSize }) => {
    // @ts-ignore
    const totalPageCount = parseInt(data.length, 10) / pageSize;
    const [page, setPage] = useState("");
    const onChange = ({ target: { value } }) => {
        if (value)
            setPage(parseInt(value, 10));
    };
    useEffect(() => {
        if (page && page <= totalPageCount) {
            onPageChange(page);
        }
    }, [page]);
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "goto" }, "Goto"),
        React.createElement("input", { id: "goto", type: "number", placeholder: "from 1 to " + totalPageCount, min: "1", max: totalPageCount, value: page, onChange: (event) => onChange(event) })));
};
export default Goto;
