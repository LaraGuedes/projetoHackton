import { Link } from "react-router-dom"

import * as S from "./stylePaciente.jsx";


function Inicio() {
  return (
    <>
      <S.SectionInicio>

        <section className="esquerda">
          <div className="parteCima">
            <div className="usuario">
              <Link to="/paciente/meusdados"><img src="./perfil.png" alt="" width="100%" /></Link>
            </div>
            <div className="dadosDoUsuario">
              <p className="paginainicial"><Link to="/paciente/meusDados">MeusDados</Link></p>
            </div>
          </div>
          <div className="sair">
            <p className="sair"><Link to="/">Sair</Link></p>
          </div>
        </section>
        <section class="direita">
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
                <img src="./historico.png" alt="" width="100%" />
              </div>
              <Link to="/paciente/historico">Historico</Link>
            </div>
            {/* <div class="elementos">
              <div class="icones">
                <img src="./agendamento.png" alt="" width="100%" />
              </div>
              <Link to="/paciente/historico">Agendamentos</Link>
              
            </div> */}
            <div class="elementos">
              <div class="icones">
                <img src="./especialistas.png" alt="" width="100%" />
              </div>
              <Link to="/paciente/especialistas"> Lista de especialistas</Link>
             
            </div>
          </div>
        </section>
      </S.SectionInicio>
    </>
  )
}

export default Inicio