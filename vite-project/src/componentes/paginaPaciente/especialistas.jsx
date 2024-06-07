import React from "react";
import * as S from "./stylePaciente.jsx";
import { Link } from "react-router-dom"; 


function MedicosEspecialistas() {
    return (
        <S.SectionMedicos>
                <div className="titulo-especialistas">
                    <p>Conheça nossa lista de especialistas disponíveis</p>
                </div>
                <div class="medicos-container">
                    
                    <div class="medicos">
                        <h2>Cardiologia</h2>
                        <ul>
                            <li>Dr. João Silva</li>
                            <li>Dr. Maria Oliveira</li>
                            <li>Dr. Carlos Souza</li>
                        </ul>
                    </div>
                    <div class="medicos">
                        <h2>Nefrologia</h2>
                        <ul>
                            <li>Dr. Ana Pereira</li>
                            <li>Dr. Ricardo Lima</li>
                            <li>Dr. Fernanda Gomes</li>
                        </ul>
                    </div>
                    <div class="medicos">
                        <h2>Ortopedia</h2>
                        <ul>
                            <li>Dr. João Silva</li>
                            <li>Dr. Maria Oliveira</li>
                            <li>Dr. Carlos Souza</li>
                        </ul>
                    </div>
                    <div class="medicos">
                        <h2>Psiquiatria</h2>
                        <ul>
                            <li>Dr. Ana Pereira</li>
                            <li>Dr. Ricardo Lima</li>
                            <li>Dr. Fernanda Gomes</li>
                        </ul>
                    </div>
                    <div class="medicos">
                        <h2>Endocrinologia</h2>
                        <ul>
                            <li>Dr. João Silva</li>
                            <li>Dr. Maria Oliveira</li>
                            <li>Dr. Carlos Souza</li>
                        </ul>
                    </div>
                    <div class="medicos">
                        <h2>Geriatria</h2>
                        <ul>
                            <li>Dr. Ana Pereira</li>
                            <li>Dr. Ricardo Lima</li>
                            <li>Dr. Fernanda Gomes</li>
                        </ul>
                    </div>
                    
                </div>
                <div className="botao">
                <div className="botao-voltar">
                    <Link to="/paciente/inicio" className="botaoVoltar">Voltar</Link> 
                </div>
                </div>
        </S.SectionMedicos>
    );
}

export default MedicosEspecialistas;





