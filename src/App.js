import React from "react";
import {createGlobalStyle} from "styled-components";

import AnimationCreator from "./animation";

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    font-family: sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <AnimationCreator />
    </>
  );
}

export default App;
