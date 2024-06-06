import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as S from "./styleInicio.jsx";

// Imagens
import Cardiologia from "../../assets/imagens/cardiologia.png";
import Endocrino from "../../assets/imagens/endocrinologista.png";
import Geriatra from "../../assets/imagens/geriatria.png";
import Nefro from "../../assets/imagens/nefrologia.png";
import Ortopedia from "../../assets/imagens/ortopediatria.png";
import Psicologia from "../../assets/imagens/psicologia.png";

function Especialidades() {
    return (
        <S.SectionEspecialidades>
            <section class="sessaoEspecialidades">
                <section class="informacaoEspecialidades">
                    <h2>Conheça nossas especialidades</h2>
                </section>
                <section class="tipoespecialidades">
                    <div class="medicos">
                        <div class="img-medicos">
                            <img src={Cardiologia} alt="" width="100%"/>
                        </div>
                        Cardiologista
                    </div>
                    <div class="medicos">
                        <div class="img-medicos">
                            <img src={Ortopedia} alt="" width="100%"/>
                        </div>
                        Ortopedistra
                    </div>
                    <div class="medicos">
                        <div class="img-medicos">
                            <img src={Psicologia} alt="" width="100%"/>
                        </div>
                        Psicologista
                    </div>
                    <div className="medicos">
                        <div className="img-medicos">
                            <img src={Endocrino} alt="" width="100%"/>
                        </div>
                        Endocrinologista
                    </div>
                    <div className="medicos">
                        <div className="img-medicos">
                            <img src={Nefro} alt="" width="100%"/>
                        </div>
                        Nefrologista
                    </div>
                    <div className="medicos">
                        <div className="img-medicos">
                            <img src={Geriatra} alt="" width="100%"/>
                        </div>
                        Geriatria
                    </div>
                </section>
            </section>
        </S.SectionEspecialidades>
    );
}

export default Especialidades;
