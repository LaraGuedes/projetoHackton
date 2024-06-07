import React from "react";
import * as S from "./stylePaciente.jsx";


function Dados() {
    return (
        <S.SectionDados>
            <section class="direita">
        <h2>MEUS DADOS</h2>

        <form>
            <div class="dado">
                <label class="campo">NOME COMPLETO:</label>
                <br/>
                <input id="name" type="text" name="name" placeholder="Digite seu nome" />
            </div>
            
            <div class="dado">
                <label class="campo">DATA DE NASCIMENTO:</label>
                <br/>
                <input id="number" type="date" name="data" />
            </div>


            <div class="dado">
                <label for="cpf" class="campo"> CPF:</label>
                <br/>
                <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" />
            </div>

            <div class="dado">
                <label class="campo">EMAIL:</label>
                <br/>
                <input id="email" type="email" name="email" placeholder="Digite seu Email" />
            </div>

            <div class="dado">
                <label class="campo">ENDEREÇO</label>
                <br/>
                <input id="endereco" type="text" name="endereco" placeholder="Digite seu Endereço" />
            </div>

            <div class="dado">
                <label class="campo">TELEFONE</label>
                <br/>
                <input id="telefone" type="number" name="telefone" placeholder="Digite seu Telefone" />
            </div>

            <div class="dado">
                <label class="campo">CELULAR:</label>
                <br/>
                <input id="telefone" type="number" name="telefone" placeholder="Digite seu Celular" />

            </div>

            <div class="dado">
                <label class="campo">SENHA:</label>
                <br/>
                <input type="password" id="senha" placeholder="Crie uma Senha" />
            </div>

            <div class="dado">
                <label class="campo">CONFIRMAÇÃO DE SENHA:</label>
                <br/>
                <input type="password" id="confirmarsenha" placeholder="Confirme sua Senha" />
            </div>

            <div class="botaoFinalizar">
                <button type="submit" class="finalizar">Finalizar</button>
            </div>
        </form>
    </section>
        </S.SectionDados>
    );
}

export default Dados;


