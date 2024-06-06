import styled from "styled-components";

export const SectionInicio = styled.section`
    
header{
    width: 100%;
}

.logo{
    width: 40%;
    height: 100%;

    display: inline-flex;
    justify-content: left;
    align-items: center;
}

.img-logo{
    margin: 10px;
    padding: 10px;
}

.nome{
    font-size: 25px;
    font-weight: 700;
    color: #0DB26F;
;
}

nav{
    width: 60%;
    height: 100%;

}

ul{
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
    background: #0DB26F;
    transition: width 0.3s;
    left: 0;
    bottom: 0;
}
nav ul li:hover::after {
    width: 100%;
}

.inicio a, .sobre a, .especialidades a{
    color: #333; 
}

.cadastro {
    background-color: #0DB26F; 
    border: none;
    padding: 10px 20px; 
    font-size: 20px;
    cursor: pointer; 
    border-radius: 5px; 
    transition: background-color 0.3s, transform 0.3s; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
}

.cadastro a{
    color: white; 
}

.cadastro:hover {
    background-color: #0DB26F; 
    transform: translateY(-2px); 
}

.cadastro:active {
    background-color: #0DB26F; 
    transform: translateY(0);
    
}

@media screen and (max-width: 1030px) {
    .logo{
        width: 100%;
    }

    .img-logo{
        width: 6rem;
    }

}

@media screen and (min-width: 1030px) {
    header{
        width: 100%;
        height: 150px;
    
        display: inline-flex;
    }
    
    .img-logo{
        width: 7rem;
        margin: 10px;
        padding: 10px;
    }

    nav{
        padding-right: 10px;
        gap: 10px;
        display: inline-flex;
        align-items: center;
        justify-content: end;
    }

    ul{
        display: flex;
        flex-direction: row;
    }
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
    color: #333;
    font-size: 20px;

    margin-bottom: 20px;
    padding: 10px;
}

.textoInformativo h2{
    font-weight: 500;
    font-size: 30px;
}

.textoInformativo span{
    color: #0DB26F;
    font-size: 40px;
}

.botaoInformativo {
    width: 40%;
    text-align: center;
    
    position: relative;
    display: inline-block;
}

.botaoInformativo button {
    background-color: #0DB26F; 
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
    background-color: #0DB26F; 
    transform: translateY(-2px); 
}

.botaoInformativo button:active {
    background-color: #0DB26F; 
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

@media screen and (max-width: 1030px) {

    .textoInformativo h2 {
        font-size: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
    }

    .textoInformativo span {
        font-size: 40px;
    }

    .textoInformativo p {
        font-size: 20px;
    }
    
    .botaoInformativo button{
        font-size: 20px;
    }

    // Se der tempo mudar
    .botaoInformativo::before{
        top: -5px;
        left: -15px;
        right: -20px;
        bottom: -5px;
    }
    
    .informativo{
        margin: auto;
    }

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
        font-size: 25px;
    }

    .textoInformativo h2{
        font-size: 60px;
    }   

    .textoInformativo span{
    font-size: 70px;
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
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .imagemSite{
        display: flex;
        justify-items: center;
        align-items: center;    
    }

.informacoesImportantes{
    width: 80%;
    padding: 10px;
}


.sobreHospital h2{
    font-size: 40px;
    line-height: 58px;
    font-weight: 600;
    color: #0DB26F;
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

@media screen and (max-width: 1030px){
    .sessaoSobre{
        display: flex;
        flex-direction: column-reverse;
        padding-left: 10px;
    }

    .animacao{
        margin: auto;
    }

    .imagemSite{
        padding: 10px;
    }

    .sobreHospital h2{
        text-align: center;
    }

    .informacoesImportantes{
        margin: auto;
    }
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
        padding-left: 10px;
    }

    .animacao {
    padding-left: 30px;
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
    width: 100%;
    font-size: 30px;
    line-height: 50px;
    font-weight: 600;
    color: #333;
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
    margin: auto;
}

.img-medicos{
    padding: 10px;
    font-size: 16px;
    line-height: 26px;
    font-weight: 400;
}

@media screen and (max-width: 1030px){
    .informacaoEspecialidades {
        width: 100%;
        font-size: 20px;

        margin-top: 30px;
        padding-bottom: 10px;
        
        text-align: center;
    }

    .medicos{
        margin: auto;
        width: 180px;
    }
}

@media screen and (min-width: 1030px) {
    .tipoespecialidades{
        width: 100%;
        text-align: center;
        display: inline-flex;
        justify-content: space-around;
    }

    .informacaoEspecialidades {
        text-align: center;
        padding-bottom: 30px;
        
        padding-top: 10px;
    }
}
`