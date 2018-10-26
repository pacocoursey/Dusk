import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  width: 100%;
  max-width: 990px;
  margin-bottom: 30px;
`;

const SearchBar = styled.input`
  flex: 1;
  padding: 15px;
  font-size: 16px;
  border-radius: 3px;
  border: 1px solid transparent;
  background-color: #fff;
  outline: none;
  max-width: 990px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 2px 4px;

  transition: border 200ms;

  :focus {
    border: 1px solid #868e96;
  }
`;

const Toggle = styled.button`
  padding: 15px;
  margin-left: 20px;
  width: 130px;

  color: #343a40;
  font-size: 12px;
  text-transform: uppercase;

  border-radius: 3px;
  border: 1px solid #dee2e6;

  cursor: pointer;
  outline: none;
  background-color: transparent;
  transition: background-color 200ms;

  :hover,
  :focus {
    background-color: #f8f9fa;
  }

  :active {
    background-color: #f1f3f5;
  }
`;

const Search = (props) => {
  const { onChange, handleClick, active } = props;

  return (
    <Box>
      <SearchBar
        aria-label="Search icons"
        type="text"
        placeholder="Search icons..."
        onChange={e => onChange(e)}
      />

      <Toggle onClick={() => handleClick()}>
        {active ? 'Hide Colors' : 'Show Colors'}
      </Toggle>
    </Box>
  );
};

export default Search;
