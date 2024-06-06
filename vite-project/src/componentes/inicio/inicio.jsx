import React from "react";
import * as S from "./styleInicio.jsx";
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Imagens
import Logo from "../../assets/imagens/logo.png";


function Inicio() {
    return (
        <S.SectionPaginaInicio>
            <section className="principal">
            <section className="informativo">
                <div className="textoInformativo">
                    <h2>Bem-vindo ao hospital
                        <br/><span class="nome">MedVita!!</span> </h2>
                        <p>A longevidade é nosso compromisso e a qualidade de vida é nossa missão. </p>
                </div>

                <div className="botaoInformativo">
                    <button>Agendar</button>
                </div>
            </section>
            
            <section className="imagemClinica">
                <div className="img-info">
                    <img src="./images.jpg" alt="" width="100%"/>
                </div>
            </section>
        </section>

        </S.SectionPaginaInicio>
    )
}
export default Inicio
