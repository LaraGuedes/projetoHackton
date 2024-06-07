import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "./styleInicio.jsx";

// Imagens
import Logo from "../../assets/imagens/logo.png";

// Rotas
import Inicio from "../inicio/inicio.jsx";
import Sobre from "../inicio/sobre.jsx";
import Especialidades from "../inicio/especialidades.jsx";
import Login from "../login/templates/Login/index.jsx";
import NavegacaoPaciente from "../paginaPaciente/navegacao.jsx";

function Navegacao() {
    return (
        <>
            <S.SectionInicio>
                <header>
                    <div className="logo">
                        <div className="img-logo">
                            <img src={Logo} alt="Logo" width="100%" />
                        </div>
                        <div className="nome">
                            <h3>MedVita</h3>
                        </div>
                    </div>
                    <nav>
                        <ul>
                            <li className="inicio"><Link to="/">Inicio</Link></li>
                            <li className="sobre"><Link to="/Sobre">Sobre</Link></li>
                            <li className="especialidades"><Link to="/Especialidades">Especialidades</Link></li>
                            <li className="cadastro"><Link to="/paciente/login">Cadastro</Link></li>
                        </ul>
                    </nav>
                </header>
            </S.SectionInicio>
            <Routes>
                <Route exact path="/" element={<Inicio />} />
                <Route exact path="/Sobre" element={<Sobre />} />
                <Route exact path="/Especialidades" element={<Especialidades />} />
                <Route exact path='/Paciente' element={<NavegacaoPaciente />} />
            </Routes>
        </>
    );
}

export default Navegacao;
