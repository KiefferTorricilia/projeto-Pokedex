import styled from "styled-components";


const corDeFundo = (cor) => {
    
switch(cor){
	case "grass":
		return '#729F92';
	case "fire":
		return '#EAAB7D'
	case "water":
		return '#71C3FF'
	case "bug":
		return '#76A866'
	case "normal":
		return '#BF9762'
}
}

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

export const Teste = styled.img`
`



export const Container = styled.div`

height: 210px;
width: 440px;
left: 0px;
top: 0px;
border-radius: 12px;



background: ${(props) => corDeFundo(props.variant)};

position: relative;
width: 440px;
height: 210px;
left: 0px;
top: 0px;


border-radius: 12px;
`

export const Id = styled.p`
height: 19px;
width: 30px;
left: 23px;
top: 25px;
border-radius: nullpx;

font-family: Inter;
font-size: 16px;
font-weight: 700;
line-height: 19px;
letter-spacing: 0em;
text-align: left;

/* background: #FFFFFF; */

position: absolute;
width: 30px;
height: 19px;
left: 23px;
top: 25px;

font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;

color: #FFFFFF;
`

export const Name = styled.p`
height: 39px;
width: 159px;
left: 23px;
top: 40px;
border-radius: nullpx;

font-family: Inter;
font-size: 32px;
font-weight: 700;
line-height: 39px;
letter-spacing: 0em;
text-align: left;


position: absolute;
width: 159px;
height: 39px;
left: 23px;
top: 25px;

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
left: 23px;
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
left: 129px;
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

export const Imagem = styled.img`
height: 193px;
width: 193px;
border-radius: 0px;
position: relative;
left: 240px;
bottom: 50px;


`

export const Detalhes = styled.button`
/* background-color: red; */
font-family: Poppins;
font-size: 16px;
font-weight: 700;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: white;

position: absolute;
bottom: 20px;
left: 23px;

text-decoration: underline;
background: none;
border-style: none;
`

export const PokebolaImagem = styled.img`
position: absolute;
bottom: 0px;
left: 191px;
`

export const Capturar = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

width: 146px;
height: 38px;

background: ${(props) => props.variant === '/' ? "#FFFFFF" : "#FF6262"}  ;
border-radius: 8px;

border-style: none;

font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
/* identical to box height */


/* color: #0F0F0F; */
color:  ${(props) => props.variant === '/' ? "#0F0F0F " : "#FFFFFF" } ;

position: absolute;
left: 275px;
bottom: 10px;
`

