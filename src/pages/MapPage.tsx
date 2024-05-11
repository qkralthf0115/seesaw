import { Map } from "react-kakao-maps-sdk";

import useKakaoLoader from "./useKakaoLoader";

export default function MapPage() {
  useKakaoLoader();
  return (
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
    />
  );
}
