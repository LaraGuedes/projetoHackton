import React from "react";
import { createGlobalStyle } from "styled-components";
import Inicio from "./componentes/inicio/inicio.jsx";

import Navegacao from "./componentes/inicio/navegacao.jsx"

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: 0;
    
    font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}

.conteudo{
    width: 100%;
    height: 100vh;
    
    box-sizing: border-box;
}

a{
    text-decoration: none;
    color: #333;
}
`;

function App() {
  return (
    <>
      <Navegacao/>
      <GlobalStyle />
    </>
  );
}

export default App;
