import styled from "styled-components";

import logo from "../assets/MooMap.png";

const Logo = styled.img`
  height: 48px;
  width: 142px;
  background-image: url(${logo});
  background-size: contain;
  background-repeat: no-repeat;
`;

export default function LogoComponent() {
  return <Logo />;
}
