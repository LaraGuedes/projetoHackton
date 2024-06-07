import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';
import * as S from "../../../paginaPaciente/stylePaciente.jsx";

function Cadastro() {
    const [errorMessage, setErrorMessage] = useState('');
    const [cadastrado, setCadastrado] = useState(false);
    const handleBlur = (event) => {
        const campo = event.target;
        if (!campo.value.trim()) {
            setErrorMessage('Por favor, preencha todos os campos.');
            campo.style.borderColor = 'red';
        } else {
            setErrorMessage('');
            campo.style.borderColor = '#ccc';
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const campos = document.querySelectorAll('#cadastroForm input');
        let formValido = true;

        campos.forEach(function(campo) {
            if (!campo.value.trim()) {
                formValido = false;
                campo.style.borderColor = 'red';
            } else {
                campo.style.borderColor = '#ccc';
            }
        });

        if (formValido) {
            const senha = document.getElementById('senha').value;
            const confirmarSenha = document.getElementById('confirmarsenha').value;

            if (senha !== confirmarSenha) {
                setErrorMessage('As senhas não coincidem.');
                return;
            }

            alert('Cadastro realizado com sucesso! Agora você pode fazer login.');
            setCadastrado(true);
        } else {
            setErrorMessage('Por favor, preencha todos os campos.');
        }
    };

    return (
        <S.Sectionpagina >
          <section className="esquerda">
            
            </section>
            
            <section className="direita">
        <div className="card">
            {cadastrado ? (
                <div>
                    <p>Cadastro realizado com sucesso! Agora você pode fazer login.</p>
                    <Link to="/login">Ir para a página de Login</Link>
                </div>
            ) : (
                <form id="cadastroForm" onSubmit={handleSubmit}>
                    <h2>Cadastro</h2>
                    <div className="dado">
                        <label>NOME COMPLETO:</label>
                        <br />
                        <input id="name" type="text" name="name" placeholder="Digite seu nome" required onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>DATA DE NASCIMENTO:</label>
                        <br />
                        <input id="dataNascimento" type="date" name="dataNascimento" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>CPF:</label>
                        <br />
                        <input id="cpf" type="text" name="cpf" placeholder="Digite seu CPF" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>EMAIL:</label>
                        <br />
                        <input id="email" type="email" name="email" placeholder="Digite seu Email" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>ENDEREÇO:</label>
                        <br />
                        <input id="endereco" type="text" name="endereco" placeholder="Digite seu Endereço" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>TELEFONE:</label>
                        <br />
                        <input id="telefone" type="text" name="telefone" placeholder="Digite seu Telefone" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>CELULAR:</label>
                        <br />
                        <input id="celular" type="text" name="celular" placeholder="Digite seu Celular" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>SENHA:</label>
                        <br />
                        <input id="senha" type="password" name="senha" placeholder="Crie uma Senha" onBlur={handleBlur} />
                    </div>

                    <div className="dado">
                        <label>CONFIRMAÇÃO DE SENHA:</label>
                        <br />
                        <input id="confirmarsenha" type="password" name="confirmarsenha" placeholder="Confirme sua Senha" onBlur={handleBlur} />
                    </div>

                    <div className="botaoFinalizar">
                        <button type="submit" className="finalizar">Finalizar</button>
                    </div>
                </form>
            )}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
        </section>
    </S.Sectionpagina>
    );
}

export default Cadastro;
