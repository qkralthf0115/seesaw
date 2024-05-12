import styled from "styled-components";

import pin from "../assets/pin.png";

const PinImage = styled.div`
  width: 50px;
  height: 50px;
  background-image: url(${pin});
`;

const Circle = styled.div<{ color: string }>`
  width: 47px;
  height: 47px;
  border-radius: 50%;
  opacity: 70%;
  background-color: ${(props) => props.color};
`;

export default function Pin() {
  return (
    <div>
      <PinImage>
        <Circle color="red" />
      </PinImage>
    </div>
  );
}
