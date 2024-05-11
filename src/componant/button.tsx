import styled from "styled-components";

import { IButton } from "../interfaces/interfaces";

const StyledButton = styled.button<{ color: string; background: string }>`
  color: ${(props) => props.color || "gray"};
  background: ${(props) => props.background || "white"};
  font-size: 18px;
  padding: 0.5em 5em;
  border: 2px solid ${(props) => props.background || "white"};
  border-radius: 45px;
  font-family: Poppins;
`;

export default function Button({ text, onClick, color, background }: IButton) {
  return (
    <>
      <StyledButton color={color} background={background} onClick={onClick}>
        {text}
      </StyledButton>
    </>
  );
}
