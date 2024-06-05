import React from "react";
import { createGlobalStyle } from "styled-components";
import Inicio from "./componentes/inicio/inicio";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <Inicio/>
      <GlobalStyle />
    </>
  );
}

export default App;
