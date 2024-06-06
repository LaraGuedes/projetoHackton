import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "./styleInicio.jsx";

// Imagens
import Missao from "../../assets/imagens/missao.png"
import Visao from "../../assets/imagens/visao.png"
import Valores from "../../assets/imagens/valores.png"

// Rotas

function Sobre() {
    return (
        <S.SectionSobre>
            <section className="sessaoSobre">
                <section className="animacao">
                    
                </section>
                <section className="informacoesImportantes">
                    <div className="sobreHospital">
                        <h2>Sobre nossa empresa</h2>
                        <p>
                            No Hospital Medvita, somos dedicados a fornecer cuidados de saúde excepcionais e integrados,  especialmente focados em promover a longevidade e o bem-estar de nossos pacientes idosos. Nossa abordagem holística considera não apenas a saúde física, mas também o bem-estar mental e emocional, garantindo um cuidado completo e humanizado.
                        </p>
                    </div>
                    <div className="missao">
                        <div className="img-missao">
                            <img src={Missao} alt="" width="100%"/> 
                        </div>
                        <div className="texto-img">
                            <h3>Missão</h3>
                            <p>
                                Prover cuidados de saúde excepcionais e integrados para promover a Longevidade e qualidade de vida, com foco no bem-estar físico, mental e emocional de nossos pacientes idosos.
                            </p>
                        </div>
                    </div>
                    <div className="visao">
                        <div className="img-visao">
                            <img src={Visao} alt="" width="100%"/>
                        </div>
                        <div className="texto-img">
                            <h3>Visão</h3>
                            <p>
                                Ser o hospital de referência em cuidados de longevidade, reconhecido pela excelência no atendimento, inovação em tratamentos geriátricos e compromisso com a vida saudável e digna em todas as fases do envelhecimento. 
                            </p>
                        </div>
                    </div>
                    <div className="valores">
                        <div className="img-valores">
                            <img src={Valores} alt="" width="100%"/>
                        </div>
                        <div className="texto-img">
                            <h3>Valores</h3>
                            <p>
                                Buscamos constantemente novas abordagens e tecnologias para melhor o atendimento geriátrico, promovendo a inovação em todos os aspectos do cuidado à saúde.
                            </p>
                        </div>
                    </div>
                </section>
        </section>
    </S.SectionSobre>
        );
}

export default Sobre;
