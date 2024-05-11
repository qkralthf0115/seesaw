import "./App.css";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import styled, { CSSProperties } from "styled-components";

import LoginPage from "./pages/LoginPage";
import MapPage from "./pages/MapPage";
import SignInPage from "./pages/SignInPage";
const AppWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  flex-direction: column;
  align-items: center;
`;
function App() {
  return (
    <AppWrap>
      <SignInPage></SignInPage>
    </AppWrap>
  );
}

export default App;
