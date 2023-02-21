import styled from "styled-components";

export const Container = styled.header`
height: 160px;

display: flex;
justify-content: space-between;
align-items: center;
`

export const DivLogo = styled.div`
width: 33vw;

display: flex;
justify-content: center;
padding-left: 30vw;

`
export const PokedexButton = styled.button`
height: 74px;
width: 287px;
left: 1112px;
top: 41px;
border-radius: 8px;
padding: 4px 10px 4px 10px;

border-style: none;

background: #33A4F5;
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
margin-top: 25px;
margin-right: 25px;
`

export const Retorna = styled.button`
height: 36px;
width: 210px;
left: 100px;
top: 62px;
border-radius: nullpx;

font-family: Poppins;
font-size: 24px;
font-weight: 700;
line-height: 36px;
letter-spacing: 0em;
text-align: left;

position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;

border-style: none;
text-decoration-line: underline;

color: #1A1A1A;
background-color: white;
`

export const Sinal = styled.img`


position: relative;
right: 10.38px;
`

export const Excluir = styled.button`
height: 57px;
width: 226px;
left: 1174px;
top: 51px;
border-radius: 8px;
padding: 4px 10px 4px 10px;

border-style: none;

display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

margin-right: 40px;
width: 226px;
height: 57px;
left: 1174px;
top: 51px;

/* background: #FF6262; */
background: ${(props) => props.variant === undefined ? "green" : "#FF6262" };
border-radius: 8px;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: white;
`

