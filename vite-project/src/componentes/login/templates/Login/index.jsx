import { useContext } from 'react';
import './style.css';
import { UserContext } from '../../contexts/UserGlobalContext';
import { useNavigate } from 'react-router-dom';
import * as S from "../../../paginaPaciente/stylePaciente.jsx";
import { Link } from "react-router-dom"

const Login = () => {
    const userContext = useContext(UserContext);
    const navigate = useNavigate();
    
    const consultas = [
        {
            data: '19/10/2024',
            status: 'AGENDADA',
            medico: 'Dra. Juliana Almeida'
        }
    ];

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const cpf = e.target.elements.cpf.value;
        const password = e.target.elements.password.value;

        if(cpf === 'admin' && password === 'admin') {
            // userContext.funcs.handleLogin({name: 'Vitória Alves', consultas});
            navigate('/paciente');
        }
    };

    return (
        <S.Sectionpagina >
          <section className="esquerda">
            
            </section>
            
            <section className="direita">
        <div className="conteiner">
            <div className="formulario-login">
                <div className="cabaçalho-formulario">
                    <div className="cabecalho-formulario-interno">
                        <form onSubmit={handleLoginSubmit} className="formulario-login">
                            
                        <h1 className="titulo-formulario">Login</h1>
                            <div className="grupo-formulario">
                                <label htmlFor="cpf" className="rotulo-formulario">CPF</label>
                                <input
                                    type="text"
                                    className="entrada-formulario"
                                    id="cpf"
                                    placeholder="XXX.XXX.XXX-XX"
                                />
                            </div>
                            <div className="grupo-formulario">
                                <label htmlFor="password" className="rotulo-formulario">Senha</label>
                                <input
                                    type="password"
                                    className="entrada-formulario"
                                    id="password"
                                    placeholder="Digite sua senha"
                                />
                            </div>
                            <div className="grupo-formulario">
                                <button type="button" className="botao-esqueceu-senha">
                                    Esqueceu sua senha?
                                </button>
                                <button type="submit" className="botao-login">
                                    Entrar
                                </button>
                                <p >
                                    Não possui cadastro? <Link to="/cadastro" className="novoCadastro"> Cadastre aqui</Link>.
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        </section>
    </S.Sectionpagina>
    );
};

export default Login;
