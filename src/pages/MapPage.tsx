// import { useState } from "react";
// import { on } from "events";
import { Map } from "react-kakao-maps-sdk";
import BarButton from "src/component/barButton";
import styled from "styled-components";

import bench from "../assets/bench.png";
import calander from "../assets/calander.png";
import heart from "../assets/heart.png";
import people from "../assets/people.png";
import person from "../assets/person.png";
import profile from "../assets/profile.png";
import quiet from "../assets/quiet.png";
import tree from "../assets/tree.png";
// import Pin from "../componant/pin";
import { SearchBar } from "../component/searchBar";
import TagButton from "../component/tagButton";
// import { SearchResultsList } from "../componant/SearchResultList";
import useKakaoLoader from "./useKakaoLoader";
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
  width: 100%;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  & div {
    position: fixed;
    z-index: 1500;
    bottom: 10px;
  }
`;
const ProfileButton = styled.div`
  background-image: url(${profile});
  width: 47px;
  height: 47px;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;
const CalanderButton = styled.div`
  background-image: url(${calander});
  width: 47px;
  height: 47px;
  padding: 0;
  margin: 0;
`;

export default function MapPage() {
  // const [results, setResults] = useState([]);
  useKakaoLoader();
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
        <SearchWrapper>
          <div>
            <CalanderButton></CalanderButton>
            <BarButton text="Social MooMap 보기"></BarButton>
          </div>
        </SearchWrapper>
      </TagWrapper>
      {/* <SearchBar setResults={setResults} />
      {results && results.length > 0 && <SearchResultsList results={results} />} */}
      <Map // 지도를 표시할 Container
        id="map"
        center={{
          // 지도의 중심좌표
          lat: 35.22756912448965,
          lng: 126.84162915595074,
        }}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
      ></Map>
    </Wrap>
  );
}
