import React from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 20px 0;
`;

// examples: usulpro, mxstbr, kentcdodds

const Search = () => {
  const fetchUser = async (e) => {
    e.preventDefault();
  };

  return (
    <SearchContainer>
      <form onSubmit={fetchUser}>
        <input />
        <button>submit</button>
      </form>
    </SearchContainer>
  );
};

export default Search;
