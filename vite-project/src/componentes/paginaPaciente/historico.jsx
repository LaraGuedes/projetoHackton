import React from "react";
import { Link } from "react-router-dom"; 
import * as S from "./stylePaciente.jsx";

// Imagens
import Bom from "../../assets/imagens/bom.png";
import Alerta from "../../assets/imagens/alerta.png";
import Ruim from "../../assets/imagens/ruim.png";

function Historico() {
    return (
        <S.SectionHistorico>
            <div>
                <p>Historico ds suas consultas anteriores:</p>
            </div>
            <div>
                <div class="historico">
                    <div class="alerta">
                        <div class="consultas">
                            <img src={Bom} alt="Bom" />
                            Consultas em dia!
                        </div>
                        <div class="info">
                            <div class="legenda">Suas consultas estão em dia!</div>
                            <div class="triangulo"> Dr. Carlos - Cardiologia - 07/03/2024 - 10:00</div>
                        </div>
                    </div>
                    <div class="alerta">
                        <div class="consultas">
                            <img src={Alerta} alt="Atenção" />
                            Consultas próximas
                        </div>
                        <div class="info">
                            <div class="legenda">Você tem consultas em breve!</div>
                            <div class="triangulo"> Dra. Ana - Geriatria - 30/12/2023 - 14:30</div>
                        </div>
                    </div>
                    <div class="alerta">
                        <div class="consultas">
                            <img src={Ruim} alt="Urgente" />
                            Consultas atrasadas!
                        </div>
                        <div class="info">
                            <div class="legenda">Você tem consultas atrasadas!</div>
                            <div class="triangulo">Dr. Silva - Ortopedia - 07/04/2023 - 09:15</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="botao-voltar">
                <Link to="/paciente/inicio" className="botaoVoltar">Voltar</Link> 
            </div>
        </S.SectionHistorico>
    );
}

export default Historico;
