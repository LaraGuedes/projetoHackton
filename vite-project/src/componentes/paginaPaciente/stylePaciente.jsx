import styled from "styled-components";

export const Sectionpagina = styled.section`
    .pagina{
        width: 100%;
        flex-direction: column;
    }
    
    .direita{
        width: 90%;
        margin: auto;
    }

    .titulo h3{
        font-size: 20px;
        padding-top: 30px;
        padding-bottom: 40px;
    }

    .direita p{
        padding-top: 80px;
        padding-bottom: 20px;
        color: #333;
        border-radius: 5px;
        font-size: 20px;
    }

    .direita a{

        color: #333;
        border-radius: 5px;
        font-size: 20px;
    }

    .direita h4{
        padding: 10px;
        
        color: #333;
        border-radius: 5px;
        font-size: 18px;
    }


    .esquerda{
        width: 100%;
        // height: 100vh;

        background-color: #0DB26F;
        // position: fixed;
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

    .esquerda p, .esquerda a{
        color: white;
        font-size: 16px;
        line-height: 26px;
        font-weight: 400;
        
        padding-top: 10px;
    }


    
    @media screen and (max-width: 1030px) {
        .direita p {
            padding-top: 40px;
            padding-bottom: 10px;
            text-align: center;
        }

    }


    @media screen and (min-width: 1030px) {
        .pagina{
            display: flex;
        }

        .esquerda{
            width: 20%;
            height: 100vh;

            position: fixed;
        }
        .direita{
            width: 70%;
            height: 150px;
            
            padding-left: 250px; //Mudar valores
        }

        .titulo h3{
            font-size: 40px;
            padding-top: 10px;
            padding-bottom: 40px;
        }
        
        .direita h4{
            font-size: 20px;
        }

    }

`

export const SectionInicio = styled.section`

.proximasConsultas{
    width: 100%;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.proximasConsultas ul{
    list-style: none;    
}

.proximasConsultas li{
    padding: 10px;  
}

.servicos{
    width: 100%;
    display: flex;
    justify-content: space-around;
    text-align: center;

    padding-top: 20px;
    padding-bottom: 20px;
}

.elementos {
    width: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}


.icones{
    width: 100px;
    padding: 10px;
}

.buscas{
    position: relative;
        display: inline-block;
        padding-bottom: 3px; 
}

.buscas::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px; 
        background-color: #0DB26F; 
        transform: scaleX(0); 
        transition: transform 0.3s ease;
    }
    .buscas:hover::after {
        transform: scaleX(1);
    }



@media screen and (max-width: 1030px) {
    .servicos{
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .elementos {
        padding: 20px;
    }

}

@media screen and (min-width: 1030px) {
    .proximasConsultas{
    width: 80%;
}

}


`

export const SectionDados = styled.section`

.titulo {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    
    padding-top: 80px;
}

.subtitulo {
    font-size: 24px;
    color: #333;
    margin-bottom: 10px;
}

.dados, .form-editar {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.dados p, .form-editar p {
    margin-bottom: 10px;
}

.dados p, .form-editar p  {
    padding: 10px;
}

.botoes {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.botao, .sair {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #fff;
    text-decoration: none;
    cursor: pointer;
}

.botao {
    background-color: #0DB26F;
}

.sair {
    background-color: transparent;
    
    border: 1px solid black;
}

.botao:hover, .sair:hover {
    opacity: 0.8;
}

.input {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.erro {
    color: #dc3545;
    margin-bottom: 10px;
}
`
export const SectionHistorico = styled.section`

.historico {
    display: flex;
    flex-direction: column;
    gap: 20px;
    // margin: 50px;
}

.alerta {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 10px;
    position: relative;
}

.alerta img {
    width: 50px;
}

.consultas{
    width: 10%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 15px;
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


.botao-voltar{
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px;
    padding-bottom: 20px;
}

.botaoVoltar {
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

.botaoVoltar:hover {
    background-color: #0DB26F; 
    transform: translateY(-2px); 
}

.direita a{
    color: #000;
}

`

export const SectionMedicos = styled.section`
    
.medicos-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    max-width: 1200px;
    padding: 20px;
}

.titulo-especialistas{
    padding: 20px;

}

.titulo-especialistas h2{

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


.botao{
    width: 100%;
    display: flex;
    justify-content: end;
    margin: 10px;
    padding-bottom: 20px;
}

.botao-voltar {
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

.botao-voltar:hover {
    background-color: #0DB26F; 
    transform: translateY(-2px); 
}
.botao-voltar{
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
`