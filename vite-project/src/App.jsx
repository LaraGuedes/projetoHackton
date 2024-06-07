import React from "react";
import { createGlobalStyle } from "styled-components";

import Navegacao from "./componentes/inicio/navegacao.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavegacaoPaciente from "./componentes/paginaPaciente/navegacao.jsx";
import Login from './componentes/login/templates/Login/index.jsx'
import Cadastro from './componentes/login/templates/cadastro/index.jsx'

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
    
}
`;

function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Navegacao />} />
          <Route path="/login" element={<Login />} />
          <Route path="/paciente/*" element={<NavegacaoPaciente />} />
            <Route path="/cadastro" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>

      <GlobalStyle />
    </>
  );
}

export default App;
