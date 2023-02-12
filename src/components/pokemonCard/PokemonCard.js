import { Container, Id, Name, Type, Type2, Imagem, Detalhes,PokebolaImagem, Capturar, Organizar } from "./Styled"
import Header from "../header/Header"
import Poison from "../../assets/Poison.png"
import Grass from '../../assets/Grass.png'
import Bulbassauro from "../../assets/Bulbassauro.png"
import Pokebola from '../../assets/Pokebola.png'


export default function PokemonCard () {


    return(
        <Container>
            <Id>#01</Id>
            <Name>Bulbasaur</Name>
            <Type> <img src={Poison} />  poison</Type>
            <Type2> <img src={Grass}  /> grass</Type2>
            <Imagem src={Bulbassauro} /> 
            <Detalhes>Detalhes</Detalhes>
            <PokebolaImagem src={Pokebola} />
            <Capturar>Capturar!</Capturar>
        </Container>
    )
}