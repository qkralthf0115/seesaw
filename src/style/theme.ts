import styled from "styled-components";

const colors = {
  red: "#ed7571",
  orange: "#f1b13e",
  green: "#70b06f",
  yellow: "#84aaf9",
  dark: "#555555",
};

const universalComponent = {
  SvgIcon: styled.img<{ size: number }>`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
  `,
  DivTextContainer: styled.div<{ color: string; fontSize: number }>`
    color: ${(props) => props.color};
    font-size: ${(props) => props.fontSize}px;
  `,
};
export const theme = {
  colors,
  universalComponent,
};
