import styled from "styled-components";

import save from "../assets/save.png";

const BarButton = styled.div`
  display: flex;
  align-self: center;
  align-items: center;
  background-image: url(${save});
  background-size: cover;
  height: 67px;
  color: #000000;
  font-size: 18px;
  padding: 0.2em 1em;
  border: none;
  font-family: Poppins;
  cursor: pointer;
  font-weight: 600;
  background-size: cover;
`;

export default function barButton({ text }: { text: string }) {
  return <BarButton>{text}</BarButton>;
}
