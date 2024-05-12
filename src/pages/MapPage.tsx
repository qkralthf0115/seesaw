// import { useState } from "react";
// import { on } from "events";

import BarButton from "src/component/barButton";
import styled from "styled-components";

import bench from "../assets/bench.png";
import calendar from "../assets/calendar.png";
import heart from "../assets/heart.png";
import people from "../assets/people.png";
import person from "../assets/person.png";
import profile from "../assets/profile.png";
import quiet from "../assets/quiet.png";
import tree from "../assets/tree.png";
import Map from "../component/map";
// import Pin from "../componant/pin";
import { SearchBar } from "../component/searchBar";
import TagButton from "../component/tagButton";
// import { SearchResultsList } from "../componant/SearchResultList";
function handle() {
  console.log("click");
}
const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;
const TagWrapper = styled.div`
  display: flex;
  width: 100%;
  position: fixed;
  z-index: 1500;
  margin-top: 80px;
  width: 100%;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const SearchWrapper = styled.div`
  display: flex;
  width: 90%;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;
const ProfileButton = styled.div`
  background-image: url(${profile});
  background-size: cover;
  position: fixed;
  top: 20px;
  right: 10px;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  z-index: 1000;
`;
const CalendarButton = styled.div`
  background-image: url(${calendar});
  background-size: cover;
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0;
  cursor: pointer;
`;
const CalendarButtonWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 20%;
  justify-content: left;
  align-items: center;
  width: 100%;
  gap: 10px;
  left: 5%;
`;
const BarWrapper = styled.div`
  display: flex;
  position: fixed;
  bottom: 30px;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export default function MapPage() {
  // const [results, setResults] = useState([]);
  return (
    <Wrap>
      <SearchWrapper>
        <SearchBar></SearchBar>
        <ProfileButton></ProfileButton>
      </SearchWrapper>
      <TagWrapper>
        <TagButton text="뷰가 좋은" handle={handle} icon={tree}></TagButton>
        <TagButton text="쾌적한 실내" handle={handle} icon={bench}></TagButton>
        <TagButton text="여러 명" handle={handle} icon={people}></TagButton>
        <TagButton text="나홀로" handle={handle} icon={person}></TagButton>
        <TagButton text="조용한" handle={handle} icon={quiet}></TagButton>
        <TagButton text="인기" handle={handle} icon={heart}></TagButton>
        <CalendarButtonWrapper>
          <CalendarButton></CalendarButton>
        </CalendarButtonWrapper>
        <BarWrapper>
          <BarButton text="Social MooMap 보기"></BarButton>
        </BarWrapper>
      </TagWrapper>
      <Map></Map>
    </Wrap>
  );
}
