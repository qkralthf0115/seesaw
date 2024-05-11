import styled from "styled-components";

import { IText } from "../interfaces/interfaces";
const StyledText = styled.div<{
  fontWeight: string;
  fontSize: string;
  color: string;
}>`
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "18px"};
  color: ${(props) => props.color || "white"};
  font-family: Poppins;
`;
export default function Text({ text, fontWeight, fontSize, color }: IText) {
  return (
    <StyledText fontWeight={fontWeight} fontSize={fontSize} color={color}>
      {text}
    </StyledText>
  );
}
