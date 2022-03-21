import React, { useState } from "react";
import styled from "styled-components";
import { SearchProps } from "../interfaces";

// for now get a value and paint the result
const Search = ({ placeholder, buttonText, onFinish }: SearchProps) => {
  const [searchText, setSearchText] = useState("");
  const onChange = ({ target: { value } }: { target: { value: string } }) => {
    setSearchText(value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    onFinish(searchText);
    setSearchText("");
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchWrapper>
        <input
          id="searchTable"
          type="text"
          placeholder={placeholder || "Search "}
          value={searchText}
          onChange={(event) => onChange(event)}
        />
        <button type="submit">{buttonText || "Search"}</button>
      </SearchWrapper>
    </form>
  );
};

export default Search;

const SearchWrapper = styled.div`
  display: flex;
`;
