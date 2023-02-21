import styled from "styled-components";
import { useCorDeFundo } from '../../hooks/useCorDeFundo'
import { useCorTipo } from '../../hooks/useCorTipo'


export const Titulo = styled.h1`
position: absolute;
width: 220px;
height: 72px;
color: white;
left: 40px;
top: 170px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 72px;

`

export const Container = styled.div`
width: 100vw;
height: 180vh;
background-color: #5E5E5E;
`

export const ContainerDetalhes = styled.div`
width: 96vw;
height: 663px;
position: absolute;
top: 330px;
right: 25px;
border-radius: 37.88571548461914px;
background: ${(props) => useCorDeFundo(props.variant)};

display: flex;
flex-direction: column;
row-gap: 47px;
flex-wrap: wrap;

`

export const BoxImagem = styled.div`

display: flex;
align-items: center;
justify-content: center;

height: 282px;
width: 282px;
left: 44px;
top: 26px;
border-radius: 8px;
border: 2px solid #FFFFFF;
background-color: white;

position: relative;
`

export const Imagem = styled.img`
height: 100%;
`

export const Stats = styled.div`
width: 358px;
height: 623px;
position: relative;
top: 24px;
right: 265px;


background: #FFFFFF;
border-radius: 12px;
`

export const Id = styled.div`
position: absolute;
width: 30px;
height: 19px;
left: 780px;
top: 24px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
`

export const Name = styled.div`
position: absolute;
width: 238px;
height: 58px;
left: 780px;
top: 39px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 58px;
color: #FFFFFF;
`
export const Type = styled.span`
color: white;

text-transform: capitalize;

border: 1px solid #FFFFFF78;

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 80px;
height: 21px;
left: 780px;
top: 100px;

background: ${(props) => useCorTipo(props.variant) };
border: 1px dashed rgba(255, 255, 255, 0.47);
border-radius: 8px;

//Letras
font-family: Poppins;
font-size: 14px;
font-weight: 400;
line-height: 21px;
letter-spacing: 0em;
text-align: left;
`

export const Type2 = styled.span`

border: 1px solid #FFFFFF78;

text-transform: capitalize;

display: flex;
flex-direction: row;
align-items: flex-start;
padding: 5px 8px;
gap: 17px;

position: absolute;
width: 80px;
height: 21px;
left: 890px;
top: 100px;

background: ${(props) => useCorTipo(props.variant)};
border: ${(props) => props.variant === undefined ? "none" : "1px dashed rgba(255, 255, 255, 0.47)"};
border-radius: 8px;

//Letras
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 21px;
/* identical to box height */


color: #FFFFFF;
`

export const ImagemGrande = styled.img`
position: absolute;
width: 270px;
height: 270px;

left: 1050px;
bottom: 545px;
`

export const PokebolaDeFundo = styled.img`
height: 675px;
width: 670px;
left: 639px;

border-radius: 0px;

position: absolute;
`

export const Moves = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
flex-wrap: wrap;

position: absolute;
width: 292px;
height: 463px;
left: 770px;
top: 184px;

background: #FFFFFF;
border-radius: 8px;
`

export const TituloMoves = styled.div`
position: absolute;
left: 18px;
top: 10px;
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
width: 87px;
height: 29px;

`
export const Movimentos = styled.div`

/* align-items: center; */
/* justify-content: center; */
padding: 10px;
align-items: flex-start;
gap: 10px;

position: relative;
top: 50px;
left: 15px;
width: 100px;
height: 27px;


background: #ECECEC;

border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
font-family: 'Montserrat';
font-style: normal;
font-weight: 450;
font-size: 17px;
line-height: 25px;
color: #000000;


/* identical to box height */



`

export const BaseStats = styled.div`
font-family: 'Inter';
font-style: normal;
font-weight: 800;
font-size: 24px;
line-height: 29px;
position: absolute;
top: 19px;
left: 18px;
`

export const NomeStat = styled.span`
position: relative;
top: 80px;
left: 20px;

`

export const ProgressBar = styled.div`
  --progress: ${((props) => {return props.variant} )};
  width: 230px;
  height: 25px;
  padding: 5px;
  display: flex;
  gap: 0px;
  position: relative;
  top: 60px;
  left: 45px;
  text-transform: uppercase;
  

  &:after {
    position: relative;
    left: 70px;
    content: "";
    border-radius: 12px;
    height: 10px;
    width: calc(var(--progress) * 1%);
    background-color: hsl( calc(var(--progress) * 0.6) , 100%, 50%);
  }
`




