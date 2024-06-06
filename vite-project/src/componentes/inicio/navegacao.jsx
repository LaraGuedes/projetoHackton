import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "./styleInicio.jsx";

// Imagens
import Logo from "../../assets/imagens/logo.png";

// Rotas
import Inicio from "../inicio/inicio.jsx";
import Sobre from "../inicio/sobre.jsx";
import Especialidades from "../inicio/especialidades.jsx";

function Navegacao() {
    return (
        <BrowserRouter>
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
                            <li className="cadastro"><Link to="/Cadastro">Cadastro</Link></li>
                        </ul>
                    </nav>
                </header>
            </S.SectionInicio>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/Sobre" element={<Sobre />} />
                <Route path="/Especialidades" element={<Especialidades />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navegacao;
