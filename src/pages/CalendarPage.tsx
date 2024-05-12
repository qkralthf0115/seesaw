import "react-calendar/dist/Calendar.css"; // css import

import { useState } from "react";
import Calendar from "react-calendar";
import LinearGradient from "react-native-linear-gradient";
import styled from "styled-components";

import logo from "../assets/Montly Moomap Log.png";
const Wrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 30px;
  gap: 30px;
  background-color: white;
  flex-direction: column;
  align-items: center;
  .react-calendar__tile--now {
    background: purple;
    color: white;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: pink;
    border-radius: 5px;
    color: white;
  }
`;

export default function CalanderPage() {
  const [value, onChange] = useState(new Date());

  return (
    <Wrap>
      <img src={logo} alt="logo" />
      <Calendar onChange={onChange} value={value} />
    </Wrap>
  );
}
