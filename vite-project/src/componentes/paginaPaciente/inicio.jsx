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
              <li>Dr. João Silva - Data: 10/05/2023 - Horário: 10:00</li>
              <li>Dra. Maria Oliveira - Data: 15/06/2023 - Horário: 14:30</li>
              <li>Dra. Ana Costa - Data: 25/08/2023 - Horário: 11:00</li>
            </ul>
          </div>
          <p>Outros serviços:</p>
          <div class="servicos">
            <div class="elementos">
              <div class="icones">
                <img src={Historico} alt="" width="100%" />
              </div>
              <Link to="/paciente/historico">Historico</Link>
            </div>
            {/* <div class="elementos">
              <div class="icones">
                <img src={Agenda} alt="" width="100%" />
              </div>
              <Link to="/paciente/historico">Agendamentos</Link>
              
            </div> */}
            <div class="elementos">
              <div class="icones">
                <img src={Especialistas} alt="" width="100%" />
              </div>
              <Link to="/paciente/especialistas"> Lista de especialistas</Link>
            </div>
          </div>
      </S.SectionInicio>
    </>
  )
}

export default Inicio