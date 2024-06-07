import { Link } from "react-router-dom"
import * as S from "./stylePaciente.jsx";

// Imagens
import Historico from "../../assets/imagens/historico.png";
import Agenda from "../../assets/imagens/agendamento.png";
import Especialistas from "../../assets/imagens/especialistas.png";


function Inicio() {
  return (
    <>
      <S.SectionInicio>
          <div class="titulo">
            <h3>Bem-Vindo a sua página!!</h3>
          </div>
          <div class="proximasConsultas">
            <h4>Próximas consultas:</h4>
            <ul>
              <li>Dr. João Silva - Data: 21/06/2024 - Horário: 12:00</li>
              <li>Dra. Maria Oliveira - Data: 29/06/2024 - Horário: 16:00</li>
              <li>Dra. Carlos Souza - Data: 30/07/2024 - Horário: 10:00</li>
            </ul>
          </div>
          <p>Outros serviços:</p>
          <div class="servicos">
            <div class="elementos">
              <div class="icones">
                <img src={Historico} alt="" width="100%" />
              </div>
              <Link to="/paciente/historico" className="buscas">Historico</Link>
            </div>
            <div class="elementos">
              <div class="icones">
                <img src={Agenda} alt="" width="100%" />
              </div>
              <Link to="/paciente/agendamento" className="buscas">Agendamentos</Link>
              
            </div>
            <div class="elementos">
              <div class="icones">
                <img src={Especialistas} alt="" width="100%" />
              </div>
              <Link to="/paciente/especialistas" className="buscas"> Lista de especialistas</Link>
            </div>
          </div>
      </S.SectionInicio>
    </>
  )
}

export default Inicio