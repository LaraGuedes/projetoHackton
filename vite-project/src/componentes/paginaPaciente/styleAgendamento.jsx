import styled from "styled-components";

// Estilos gerais
export const Section = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f4f4f4;
    min-height: 100vh;
`;

export const Perfil = styled.div`
    flex: 1;
    max-width: 300px;
    padding: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Info = styled.div`
    text-align: center;
    margin-bottom: 20px;
`;

export const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 10px;
`;

export const Button = styled.button`
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #0056b3;
    }
`;

// Estilos do conteúdo
export const Conteudo = styled.div`
  flex: 3;
  margin-left: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Card = styled.div`
  flex: 1 1 calc(33.333% - 20px);
  background-color: #e9ecef;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Consulta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const Item = styled.div`
  margin-bottom: 15px;

  h3 {
    margin: 10px 0;
    font-size: 20px;
    color: #333;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #666;
  }
`;

export const Btns = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const Btn = styled(Button)`
  flex: 1;
  margin: 5px;
  background-color: #85e085;

  &:hover {
    background-color: #66cc66;
  }

  &:nth-child(2) {
    background-color: #ff9999;

    &:hover {
      background-color: #ff6666;
    }
  }

  &:nth-child(3) {
    background-color: #ffe680;

    &:hover {
      background-color: #ffd11a;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;

  ${Btn} {
    margin-left: 10px;
    background-color: #007bff;

    &:hover {
      background-color: #0056b3;
    }
  }
`;


export const Buscar = styled.div`
width: 50%;
height: 7%;
display: flex;
justify-content: space-evenly;
`
export const Select = styled.select`
width: 25%;
border-radius: 10px;
font-weight: 400;
`;
export const Input = styled.input`
width: 25%;
  border-radius: 10px;
  font-weight: 400;
`;

