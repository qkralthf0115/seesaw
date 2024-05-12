import "./App.css";

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
import styled from "styled-components";

import CalenderPage from "./pages/CalendarPage";
import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import MyInfoPage from "./pages/MyInfoPage";
import RecordPage from "./pages/RecordPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import WritePage from "./pages/WritePage";
const AppWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <AppWrap>
      <CalenderPage />
    </AppWrap>
  );
}

export default App;
