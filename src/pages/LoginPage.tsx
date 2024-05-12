import Button from "src/component/button";
import Text from "src/component/text";
import styled from "styled-components";

import homeImage from "../assets/first.png";
const Wrap = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${homeImage});
  background-size: cover;
`;

const ButtonWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10%;
`;
const ButtonWrapCenter = styled.div`
  display: flex;
  gap: 15px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function onclick() {
  console.log("click");
}

export default function HomePage() {
  return (
    <Wrap>
      <ButtonWrap>
        <ButtonWrapCenter>
          <Text
            text="잠시 쉬어가도 괜찮아요"
            color="white"
            fontSize=""
            fontWeight="400"
          ></Text>
          <Text
            text="나의 쉼터를 찾아보세요"
            color="white"
            fontSize="27px"
            fontWeight="400"
          ></Text>
          <Text
            text="오늘의 나를 정비하고 기록할 수 있어요"
            color="white"
            fontSize="12px"
            fontWeight="400"
          ></Text>
          <Button
            text="Sign in"
            onClick={onclick}
            color="black"
            background="white"
          ></Button>
          <Button
            text="Sign up"
            onClick={onclick}
            color="white"
            background="black"
          ></Button>
        </ButtonWrapCenter>
      </ButtonWrap>
    </Wrap>
  );
}
