import styled from "styled-components";


const corTipo = (cor) => {

    switch(cor){
        case "grass":
            return '#70B873';
        case "fire":
            return '#F44900'
        case "water":
            return '#33A4F5'
        case "bug":
            return '#316520'
        case "normal":
            return '#8A8A8A'
        case 'flying':
            return '#6892B0'
        case 'poison':
            return '#AD61AE'
    }
}

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
width: 95vw;
height: 110vh;
position: absolute;
left: 25px;
top: 330px;
border-radius: 37.88571548461914px;
background: #729F92;

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

export const BaseStats = styled.div`
width: 343px;
height: 623px;
position: relative;
top: 24px;
right: 250px;


background: #FFFFFF;
border-radius: 12px;
`

export const Id = styled.div`
position: absolute;
width: 30px;
height: 19px;
left: 774px;
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
left: 771px;
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
left: 772px;
top: 100px;

background: ${(props) => corTipo(props.variant) };
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
left: 885px;
top: 100px;

background: ${(props) => corTipo(props.variant)};
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

left: 1000px;
bottom: 545px;
`

export const PokebolaDeFundo = styled.img`
height: 675px;
width: 650px;
left: 644px;

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
left: 771px;
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



