import styled from "styled-components";

export const SectionInicio = styled.section`
    
header{
    width: 100%;
    height: 150px;

    display: inline-flex;
}

.logo{
    width: 40%;
    height: 100%;

    display: inline-flex;
    justify-content: left;
    align-items: center;
}

.img-logo{
    width: 7rem;
    margin: 10px;
    padding: 10px;
}

.nome{
    font-size: 25px;
    font-weight: 700;
    color: #017143;
}

nav{
    width: 60%;
    height: 100%;

    padding-right: 10px;
    gap: 10px;
    display: inline-flex;
    align-items: center;
    justify-content: end;
}

ul{
    display: flex;
    flex-direction: row;
    list-style: none;
}

li {
    background-color: white; 
    color: #333; 
    border: none; 
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s, transform 0.3s; 

    
    padding: 10px 20px; 
    font-size: 20px; 
    margin-left: 25px;
    position: relative;
}

li:hover {
    background-color: transparent; 
    transform: none; 
}

li:active {
    background-color: transparent; 
    transform: none; 
}

li::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    display: block;
    background: #017143;
    transition: width 0.3s;
    left: 0;
    bottom: 0;
}
nav ul li:hover::after {
    width: 100%;
}

.cadastro {
    background-color: #28a745; 
    color: white; 
    border: none;
    padding: 10px 20px; 
    font-size: 20px;
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s, transform 0.3s; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.cadastro:hover {
    background-color: #218838; 
    transform: translateY(-2px); 
}

.cadastro:active {
    background-color: #1e7e34; 
    transform: translateY(0);
    
}

@media screen and (min-width: 1030px) {
    

}
`
export const SectionPaginaInicio = styled.section`
    .principal{
    width: 100%;
    /* height: 500px; */
}

.informativo {
    width: 80%;
    padding: 30px;
}

.textoInformativo p {
    text-align: left;
    font-size: 25px;
    color: #333;

    margin-bottom: 20px;
    padding: 10px;
}

.textoInformativo h2{
    font-size: 60px;
    font-weight: 500;
}

.textoInformativo span{
    color: #017143;
    font-size: 70px;
}

.botaoInformativo {
    width: 40%;
    text-align: center;
    
    position: relative;
    display: inline-block;
}

.botaoInformativo button {
    background-color: #28a745; 
    color: white; 
    border: none; 
    padding: 15px 30px; 
    font-size: 18px; 
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s, transform 0.3s; 
    position: relative;
    z-index: 1;
}

.botaoInformativo button:hover {
    background-color: #218838; 
    transform: translateY(-2px); 
}

.botaoInformativo button:active {
    background-color: #1e7e34; 
    transform: translateY(0); 
}

.botaoInformativo::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 10px;
    border: 2px solid #28a745;
    animation: arcoPiscar 1.5s infinite;
    z-index: 0;
}

@keyframes arcoPiscar {
    0% {
        opacity: 0.2;
        transform: scale(1);
    }
    50% {
        opacity: 1;
        transform: scale(1.1);
    }
    100% {
        opacity: 0.2;
        transform: scale(1);
    }
}

.imagemClinica{
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}


@media screen and (min-width: 1030px){
    .principal{
        display: flex;
    }

    .informativo {
        width: 50%;
        padding: 30px;
    
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .textoInformativo{
        width: 70%;
    }

    .textoInformativo span{
        font-weight: 900;
    }

    .imagemClinica{
        width: 50%;
    
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .img-info{
        width: 500px;
    }
}
`
export const SectionSobre = styled.section`
    .sessaoSobre{
    color: #333;
    width: 100%;
}

.animacao{
    width: 50%;
}

.informacoesImportantes{
    width: 80%;
    padding: 10px;
}


.sobreHospital h2{
    font-size: 40px;
    line-height: 58px;
    font-weight: 600;
    color: #242f51;
}

.informacoesImportantes h3, h2{
    padding: 25px 0px;
}

.informacoesImportantes p{
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
}

.missao, .visao, .valores{
    display: flex;
    justify-items: center;
    align-items: center;
}

.img-missao, .img-visao, .img-valores{
    padding: 20px;
    width: 120px;
}

.missao h3{
    color: #f55767;
}

.visao h3{
    color: #2563ff;
}

.valores h3{
    color: #40975f;
}

@media screen and (min-width: 1030px) {
    .sessaoSobre{
        display: flex;
    }

    .informacoesImportantes{
        width: 40%;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: end;
        padding-right: 150px;
    }

    .missao, .visao, .valores{
        width: 30rem;
    }

    .sobreHospital{
        width: 30rem;
    }
}
`

export const SectionEspecialidades = styled.section`
    .sessaoEspecialidades{
    width: 100%;
}

.informacaoEspecialidades{
    width: 50%;
    font-size: 30px;
    line-height: 50px;
    font-weight: 600;
    color: #333;
    padding: 10px;
}

.tipoespecialidades{
    width: 100%;
    text-align: center;

    /* display: inline-flex; */
    justify-content: space-around;
}

.tipoespecialidades div{
    color: #333;
}

.medicos{
    width: 280px;
    padding: 20px;
}

.img-medicos{
    padding: 10px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
}

@media screen and (min-width: 1030px) {
    .tipoespecialidades{
        width: 100%;
        text-align: center;
        display: inline-flex;
        justify-content: space-around;
    }
}
`