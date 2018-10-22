import React from 'react';
import styled from 'styled-components';

const SearchBar = styled.input`
  padding: 15px;
  margin-bottom: 30px;
  font-size: 16px;
  border-radius: 3px;
  border: 0;
  background-color: #fff;
  outline: none;
  width: 100%;
  max-width: 990px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 2px 4px;
`;

const Search = () => (
  <SearchBar
    type="text"
    placeholder="Search icons..."
  />
);

export default Search;
