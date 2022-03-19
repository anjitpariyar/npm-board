import React, { useState, useEffect } from "react";
const Goto = ({ totalPageCount, onPageChange, }) => {
    const [page, setPage] = useState("");
    const onChange = (event) => {
        setPage(event.target.value);
    };
    useEffect(() => {
        if (page && parseInt(page) <= totalPageCount) {
            onPageChange(parseInt(page));
        }
    }, [page]);
    return (React.createElement("div", null,
        React.createElement("label", { htmlFor: "goto" }, "Goto"),
        React.createElement("input", { id: "goto", type: "number", placeholder: "from 1 to " + totalPageCount, min: "1", max: totalPageCount, value: page, onChange: (event) => onChange(event) })));
};
export default Goto;
