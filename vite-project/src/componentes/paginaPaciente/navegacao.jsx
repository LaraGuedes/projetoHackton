import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "./stylePaciente.jsx";

// Rotas
// import Inicio from "../paginaPaciente/paginaInicial.jsx";
import Dados from "../paginaPaciente/meusDados.jsx";
import Especialistas from "../paginaPaciente/especialistas.jsx";
import Historico from "../paginaPaciente/historico.jsx";
// import NovaConsulta from "../paginaPaciente/novaConsulta.jsx";
// import Agendamento from "../paginaPaciente/agendamento.jsx";
import Sair from "../inicio/inicio.jsx";
import Login from "../login/templates/Login/index.jsx";
import Inicio from "./inicio.jsx";


function NavegacaoPaciente() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/meusDados" element={<Dados />} />
        <Route path="/especialistas" element={<Especialistas />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </>
  );
}

export default NavegacaoPaciente;
