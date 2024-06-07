import React, { useState } from "react";
import * as S from "./styleAgendamento.jsx";
import { useNavigate } from 'react-router-dom';
// import Avatar from "../assets/avatar.png";
import NovaConsulta from "./novaConsulta.jsx"; // Importe o componente NovoAgendamento

const Agendamentos = () => {
    const navigate = useNavigate();
    const [consulta, setConsulta] = useState([
        {
            id: "1",
            nome: "Dr(a) João Silva",
            especialidade: "Cardiologista",
            data: "21/06/2024",
            hora: "12:00",
            status: "",
        },
        {
            id: "2",
            nome: "Dr(a) Maria Oliveira",
            especialidade: "Cardiologista",
            data: "29/06/2024",
            hora: "16:00",
            status: "",
        },
        {
            id: "3",
            nome: "Dr(a) Carlos Souza",
            especialidade: "Ortopedista",
            data: "30/07/2024",
            hora: "10:00",
            status: "",
        },
    ]);

    const [mostrarNovaConsulta, setMostrarNovaConsulta] = useState(false); // Renomeado o estado e a função para nova consulta

    const handleConfirm = (id) => {
        setConsulta((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status: "confirmado" } : item
            )
        );
    };

    const handleCancel = (id) => {
        setConsulta((prev) => prev.filter((item) => item.id !== id));
    };

    const handleReschedule = (id) => {
        alert("Por favor, marque uma nova consulta.");
        setConsulta((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, status: "remarcado" } : item
            )
        );
    };

    const adicionarConsulta = (nome, especialidade, data, hora) => {
        const novaConsulta = {
            id: (consulta.length + 1).toString(),
            nome,
            especialidade,
            data,
            hora,
            status: "",
        };
        setConsulta((prev) => [...prev, novaConsulta]);
        setMostrarNovaConsulta(false); // Renomeado a função para nova consulta
    };

    return (
        <S.Section>
            <S.Conteudo>
                {mostrarNovaConsulta ? (
                    <NovaConsulta adicionarConsulta={adicionarConsulta} />
                ) : (
                    <>
                        <h2 style={{ paddingTop: 80, paddingBottom: 30 }}>AGENDAMENTOS</h2>
                        <S.Div>
                            {consulta.map((item) => (
                                <S.Card key={item.id}>
                                    <S.Consulta>
                                        <S.Item>
                                            <h3>{item.nome}</h3>
                                            <p style={{ padding: 10 }}>{item.especialidade}</p>
                                            <p style={{ padding: 10 }}>{item.hora}</p>
                                            <p style={{ padding: 10 }}>{item.data}</p>
                                        </S.Item>
                                        <S.Btns>
                                            {item.status === "confirmado" ? (
                                                <p>Confirmado</p>
                                            ) : item.status === "remarcado" ? (
                                                <p>Remarcado</p>
                                            ) : (
                                                <>
                                                    <S.Btn onClick={() => handleConfirm(item.id)}>
                                                        Confirmar
                                                    </S.Btn>
                                                    <S.Btn onClick={() => handleCancel(item.id)}>
                                                        Cancelar
                                                    </S.Btn>
                                                    <S.Btn onClick={() => handleReschedule(item.id)}>
                                                        Remarcar
                                                    </S.Btn>
                                                </>
                                            )}
                                        </S.Btns>
                                    </S.Consulta>
                                </S.Card>
                            ))}
                        </S.Div>
                        <S.Buttons>
                            <S.Btn onClick={() => setMostrarNovaConsulta(true)}>
                                Nova Consulta
                            </S.Btn>
                            <S.Btn onClick={() => {
                                console.log("clicou");
                                navigate('/paciente/inicio/')
                            }}
                            style={{background:"transparent", color: "#333", border: "1px solid black"}}
                            >Voltar</S.Btn>
                        </S.Buttons>
                    </>
                )}
            </S.Conteudo>
        </S.Section>
    );
};

export default Agendamentos;
