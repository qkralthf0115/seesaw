import styled from "styled-components";

import save from "../assets/save.png";

const BarButton = styled.button`
  background-image: url(${save});
  background-size: cover;
  height: 67px;
  color: #000000;
  font-size: 18px;
  padding: 0.5em 1em;
  border: none;
  font-family: Poppins;
  cursor: pointer;
  font-weight: 600;
`;

export default function barButton({ text }) {
  return <BarButton>{text}</BarButton>;
}
