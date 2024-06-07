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
import Cadastro from "../login/templates/cadastro/index.jsx";

// Imagens
import Perfil from "../../assets/imagens/perfil.png";

function NavegacaoPaciente() {
  return (
    <>
    <S.Sectionpagina >
      <section className="esquerda">
        <div className="parteCima">
        <div className="usuario">
          <Link to="/paciente/meusdados"><img src={Perfil} alt="" width="100%" /></Link>
        </div>
        <div className="dadosDoUsuario">
          <p className="paginainicial"><Link to="/paciente/meusDados">Meus Dados</Link></p>
        </div>
        </div>
        <div className="sair">
          <p className="sair"><Link to="/">Sair</Link></p>
        </div>
        </section>
        
        <section className="direita">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/meusDados" element={<Dados />} />
            <Route path="/especialistas" element={<Especialistas />} />
            <Route path="/historico" element={<Historico />} />
          </Routes>
        </section>
    </S.Sectionpagina>
    </>
  );
}

export default NavegacaoPaciente;
