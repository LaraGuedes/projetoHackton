import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as S from "./stylePaciente.jsx";

function Dados() {
    const [pessoa, setPessoa] = useState({
        nome: 'João Silva',
        cpf: '123.456.789-00',
        telefone: '(11) 98765-4321',
        endereco: 'Rua Exemplo, 123',
        dataNascimento: '01/01/1990', // Adicionei essa informação para exemplificar
        senha: '********' // Adicionei essa informação para exemplificar
    });
    const [editando, setEditando] = useState(false);
    const [novoTelefone, setNovoTelefone] = useState(pessoa.telefone);
    const [novoEndereco, setNovoEndereco] = useState(pessoa.endereco);
    const [erro, setErro] = useState('');

    useEffect(() => {
        // Atualiza os estados com os dados da pessoa
        setNovoTelefone(pessoa.telefone);
        setNovoEndereco(pessoa.endereco);
    }, [editando]);

    const editarDados = () => {
        setEditando(true);
    };

    const concluirEdicao = () => {
        if (!novoTelefone.trim() || !novoEndereco.trim()) {
            setErro('Telefone e Endereço não podem estar vazios.');
            return;
        }
        
        setPessoa({
            ...pessoa,
            telefone: novoTelefone,
            endereco: novoEndereco
        });
        setEditando(false);
        setErro('');
    };

    return (
        <S.SectionDados>
            <h1 className="titulo">Informações da Pessoa</h1>
            {!editando ? (
                <div id="dadosPessoa" className="dados">
                    <p><strong>Nome:</strong> <span id="nome">{pessoa.nome}</span></p>
                    <p><strong>CPF:</strong> <span id="cpf">{pessoa.cpf}</span></p>
                    <p><strong>Telefone:</strong> <span id="telefone">{pessoa.telefone}</span></p>
                    <p><strong>Data de nascimento:</strong> <span id="dataNascimento">{pessoa.dataNascimento}</span></p>
                    <p><strong>Endereço:</strong> <span id="endereco">{pessoa.endereco}</span></p>
                    <p><strong>Senha:</strong> <span id="senha">*******</span></p> {/* Senha não editável */}
                    <div className="botoes">
                        <button id="editarBtn" className="botao" onClick={editarDados}>Editar</button>
                        <Link to="/paciente/inicio" className="botao sair">Sair</Link>
                    </div>
                </div>
            ) : (
                <div id="editarForm" className="form-editar">
                    <h2 className="subtitulo">Editar Informações</h2>
                    {erro && <p className="erro">{erro}</p>}
                    <p><strong>Nome:</strong> <span id="editNome">{pessoa.nome}</span></p>
                    <p><strong>CPF:</strong> <span id="editCpf">{pessoa.cpf}</span></p>
                    <p><strong>Telefone:</strong> <input type="text" id="editTelefone" className="input" value={novoTelefone} onChange={(e) => setNovoTelefone(e.target.value)} /></p>
                    <p><strong>Endereço:</strong> <input type="text" id="editEndereco" className="input" value={novoEndereco} onChange={(e) => setNovoEndereco(e.target.value)} /></p>
                    
                    <button id="concluirBtn" className="botao" onClick={concluirEdicao}>Concluir</button>
                </div>
            )}
        </S.SectionDados>
    );
}

export default Dados;
