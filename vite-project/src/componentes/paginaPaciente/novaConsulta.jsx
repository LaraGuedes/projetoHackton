import React, { useState } from "react";
import * as S from "./styleAgendamento.jsx";

const NovaConsulta = ({ adicionarConsulta }) => {
    const [especialidade, setEspecialidade] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [nome, setNome] = useState("");

    const enviarForm = (e) => {
        e.preventDefault();
        if (!especialidade || !data || !hora) {
            alert("Preencha todos os campos");
            return;
        }

        adicionarConsulta(nome, especialidade, data, hora); // Adicione o nome do médico ou obtenha-o de alguma forma
        setEspecialidade("");
        setData("");
        setHora("");
        alert("Consulta agendada com sucesso!");
    };

    return (
        <S.Section>
            <S.Conteudo>
                <h2 style={{paddingTop: 80}}>Agende uma nova consulta</h2>
                <S.Buscar>
                    <form onSubmit={enviarForm}>
                        <br></br> 
                        <br></br> 
                        <br></br> 
                        <h5>Selecione a especialidade</h5>
                        <br></br> 
                        <S.Select
                            value={especialidade}
                            onChange={(e) => setEspecialidade(e.target.value)} 
                            style={{padding: 10, width: 250, border: "1px solid black"}}
                        >
                            <option value="">Selecione uma especialidade</option>
                            <option value="Cardiologista">Cardiologista</option>
                            <option value="Dermatologista">Dermatologista</option>
                            <option value="Pediatra">Pediatra</option>
                        </S.Select>
                        <br/>
                        <br></br> 
                        <h5>Selecione o médico</h5> 
                        <br></br> 
                        <S.Select
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            style={{padding: 10, width: 250, border: "1px solid black"}}
                        >
                            <option value="">Selecione o Médico</option>
                            <option value="joao">Joao</option>
                            <option value="alfredo">Alfredo</option>
                            <option value="cleiton">Cleiton</option>
                        </S.Select>
                        <br></br> 
                        <br></br> 
                        <h5>Selecione a data</h5> 
                        <br></br> 
                        <S.Input
                            type="date"
                            value={data}
                            onChange={(e) => setData(e.target.value)}
                        />
                        <br></br> 
                        <br></br> 
                        <h5>Selecione a hora</h5> 
                        <br></br> 
                        <S.Input
                            type="time"
                            value={hora}
                            onChange={(e) => setHora(e.target.value)}
                            style={{padding: 10, width: 250, border: "1px solid black"}}
                        />
                        <S.Btn type="submit" style={{padding: 10}}>Agendar</S.Btn>
                    </form>
                </S.Buscar>
            </S.Conteudo>
        </S.Section>
    );
};

export default NovaConsulta;
