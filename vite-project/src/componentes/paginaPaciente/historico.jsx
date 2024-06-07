import React from "react";
import * as S from "./stylePaciente.jsx";


function Historico() {
    return (
        <S.SectionHistorico>
            <section class="direita">
                <div>
                    <p>Historico de suas consultas anteriores:</p>
                </div>
                <div>
                    <div class="historico">
                        <div class="alerta">
                            <div class="consultas">
                                <img src="./bom.png" alt="Bom" />
                                Consultas em dia!
                            </div>
                            <div class="info">
                                <div class="legenda">Suas consultas estão em dia!</div>
                                <div class="triangulo"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae molestias porro, voluptate odio quis laudantium rerum beatae odit veritatis perferendis similique numquam soluta! Officia animi quidem accusantium exercitationem saepe earum!</div>
                            </div>
                        </div>
                        <div class="alerta">
                            <div class="consultas">
                                <img src="./alerta.png" alt="Atenção" />
                                Consultas próximas
                            </div>
                            <div class="info">
                                <div class="legenda">Você tem consultas em breve!</div>
                                <div class="triangulo"></div>
                            </div>
                        </div>
                        <div class="alerta">
                            <div class="consultas">
                                <img src="./ruim.png" alt="Urgente" />
                                Consultas atrasadas!
                            </div>
                            <div class="info">
                                <div class="legenda">Você tem consultas atrasadas!</div>
                                <div class="triangulo"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </S.SectionHistorico>
    );
}

export default Historico;





