import styled from "styled-components";

export const SectionInicio = styled.section`
.pagina{
    display: flex;
    flex-direction: column;
}

.direita{
    width: 70%;
    height: 150px;
    
    padding-left: 250px;
    margin: auto;
}

.titulo h3{
    font-size: 40px;
    padding-top: 10px;
    padding-bottom: 40px;
}

.proximasConsultas{
    width: 80%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.proximasConsultas ul{
    list-style: none;    
}

.icones{
    width: 80px;
}

.direita p{
    padding-top: 80px;

    color: #333;
    border-radius: 5px;
    font-size: 20px;
}

.direita h4{
    padding: 10px;
    
    color: #333;
    border-radius: 5px;
    font-size: 20px;
}

.servicos{
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;

    padding-top: 20px;
}

.elementos {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.esquerda{
    width: 20%;
    height: 100vh;

    background-color: #0DB26F;
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;
}

.parteCima{
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.usuario{
    width: 50%;
}

.esquerda p{
    color: white;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
}

`

export const SectionDados = styled.section`
    
.campo{   
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;

    padding: 10px;
}

input{
    width: 250px;
    border: 1px solid black;

    padding: 10px;
}

input[type="text"], input[type="password"], input[type="email"], input[type="date"], input[type="number"], rextarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: box-shadow 0.3s ease-in-out;
}
input[type="text"]:focus, input[type="password"]:focus, input[type="email"]:focus, textarea:focus {
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
    outline: none; 
}

.dado{
    padding-bottom: 10px;
}

.botaoFinalizar{
    display: flex;
    justify-content: end;
}

.finalizar {
    background-color: #0DB26F; 
    color: white; 
    border: none;
    padding: 10px 20px; 
    font-size: 20px;
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s, transform 0.3s; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.finalizar:hover {
    background-color: #218838; 
    transform: translateY(-2px); 
}

.finalizar:active {
    background-color: #1e7e34; 
    transform: translateY(0);
    
}
`
export const SectionHistorico = styled.section`
    
.direita p{
    padding-top: 80px;

    color: #333;
    border-radius: 5px;
    font-size: 20px;
}

.historico {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 50px;
}

.alerta {
    display: flex;
    align-items: center;
    /* background-color: #f9f9f9; */
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    position: relative;
}

.alerta img {
    width: 50px;
}

.consultas{
    width: 0%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
}

.info {
    margin-left: 20px;
    flex-grow: 1;
}

.legenda {
    display: none;
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    white-space: nowrap;
    z-index: 1;
}

.alerta:hover .legenda {
    display: block;
}

.triangulo {
    /* width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(0, 0, 0, 0.7);
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    display: none; */
}

.alerta:hover .triangulo {
    /* display: block; */
}
`

export const SectionMedicos= styled.section`
    
.medicos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    margin: 20px;
}

.medicos {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 10px;
    padding: 20px;
    width: 300px;
    box-sizing: border-box;
    transition: transform 0.2s;
}

.medicos:hover {
    transform: scale(1.05);
}

.medicos h2 {
    margin-top: 0;
    font-size: 1.5em;
    color: #333333;
}

.medicos ul {
    list-style-type: none;
    padding: 0;
}

.medicos ul li {
    margin: 10px 0;
    font-size: 1em;
    color: #666666;
}
`