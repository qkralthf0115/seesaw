import BackButton from "src/component/backButton";
import styled from "styled-components";

import profile from "../assets/profile.png";
import Line from "../component/line";
import Logo from "../component/logo";
import Text from "../component/text";
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 100px;
`;

const LineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
`;
const LeftWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 15px;
`;
export default function MyInfoPage() {
  return (
    <Wrapper>
      {/* <BackButton /> */}
      <Logo />
      <Text
        text="User Information"
        fontWeight="600"
        color="grey"
        fontSize="16px"
      />
      <img src={profile} alt="profile" />
      <LeftWrapper>
        <Text text="Email" fontWeight="400" color="grey" fontSize="17px"></Text>
        <LineWrapper>
          <Text
            text="email@email.com"
            fontWeight="400"
            color="#515151"
            fontSize="14px"
          ></Text>
          <Line />
        </LineWrapper>
        <Text
          text="Username"
          fontWeight="400"
          color="grey"
          fontSize="17px"
        ></Text>
        <LineWrapper>
          <Text
            text="moomoomoo"
            fontWeight="400"
            color="#515151"
            fontSize="14px"
          ></Text>
          <Line />
        </LineWrapper>
      </LeftWrapper>
    </Wrapper>
  );
}
