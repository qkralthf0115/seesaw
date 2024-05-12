import { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import pin from "../assets/pin.png";
import useKakaoLoader from "./useKakaoLoader";
const center = {
  // 지도의 중심좌표
  lat: 35.227294188768795,
  lng: 126.84161046683074,
};
export default function BasicMap() {
  useKakaoLoader();
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Map // 지도를 표시할 Container
        id="map"
        center={center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "100vh",
        }}
        level={3} // 지도의 확대 레벨
        onClick={(_, mouseEvent) => {
          const latlng = mouseEvent.latLng;
          setPosition({
            lat: latlng.getLat(),
            lng: latlng.getLng(),
          });
        }}
      >
        <MapMarker
          position={position ?? center}
          clickable={true}
          onMouseOver={
            // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
            () => setIsOpen(true)
          }
          onMouseOut={
            // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
            () => setIsOpen(false)
          }
          image={{
            src: pin,
            size: {
              width: 56,
              height: 66,
            },
          }}
          {...(isOpen && (
            <div style={{ padding: "5px", color: "#000" }}>Hello World!</div>
          ))}
        />
      </Map>
    </>
  );
}
