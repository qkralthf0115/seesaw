import Button from "src/component/button";
import Logo from "src/component/logo";
import Text from "src/component/text";
import styled from "styled-components";

import chevronLeft from "../assets/chevron-left.svg";
function onclick() {
  console.log("click");
}
const Wrap = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;
  gap: 10px;
  margin-top: 30px;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: start;
`;

const WrapCenter = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #686f80;
  border-radius: 10px;
  padding: 0 10px;
  margin-bottom: 10px;
  font-size: 16px;
  font-family: Poppins;
  color: #686f80;
`;

const BackButton = styled.a`
  background-image: url(${chevronLeft});
  width: 20px;
  height: 20px;
  margin: 0;
  padding: 0;
`;

export default function SignInPage() {
  return (
    <Wrap>
      <BackButton></BackButton>
      <WrapCenter>
        <Logo></Logo>
        <Text
          text="Sign Up"
          color="black"
          fontWeight="500"
          fontSize="16px"
        ></Text>
      </WrapCenter>
      <Text text="Email" color="grey" fontWeight="400" fontSize="14px"></Text>
      <Input></Input>
      <Text
        text="Password"
        color="grey"
        fontWeight="400"
        fontSize="14px"
      ></Text>
      <Input></Input>
      <Text
        text="Forgot Password?"
        color="white"
        fontWeight="400"
        fontSize="14px"
      ></Text>
      <WrapCenter>
        <Button
          text="NEXT"
          onClick={onclick}
          color="white"
          background="black"
        ></Button>
      </WrapCenter>
    </Wrap>
  );
}
