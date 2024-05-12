// import { useState } from "react";
import styled from "styled-components";

import searchIcon from "../assets/search.png";
import searchBar from "../assets/searchBar.png";

const SearchBox = styled.div`
  display: flex;
  background-size: cover;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  z-index: 1000;
  top: 20px;
  width: 338px;
  height: 47px;
  padding-left: 40px;
  background-image: url(${searchBar});
  border-radius: 24px;
  & input {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    text-align: start;
    font-size: 16px;
    color: #686f80;
    & img {
      margin: 0;
      padding: 0;
    }
  }
`;

// export const SearchBar = ({ setResults }) => {
export const SearchBar = () => {
  // const [input, setInput] = useState("");

  // const fetchData = (value) => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const results = json.filter((user) => {
  //         return (
  //           value &&
  //           user &&
  //           user.name &&
  //           user.name.toLowerCase().includes(value)
  //         );
  //       });
  //       setResults(results);
  //     });
  // };

  // const handleChange = (value) => {
  //   setInput(value);
  //   fetchData(value);
  // };

  return (
    <SearchBox>
      <img src={searchIcon}></img>
      <input placeholder="Search your MooMap spot!"></input>
    </SearchBox>

    // value={input}
    // onChange={(e) => handleChange(e.target.value)}
  );
};
