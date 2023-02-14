import { Container, Id, Name, Type, Type2, Imagem, Detalhes,PokebolaImagem, Capturar, Organizar } from "./Styled"
import Header from "../header/Header"
import Poison from "../../assets/Poison.png"
import Grass from '../../assets/Grass.png'
import Bulbassauro from "../../assets/Bulbassauro.png"
import Pokebola from '../../assets/Pokebola.png'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"


export default function PokemonCard ({pokemon}) {

   
  

    return(
        <Container variant={pokemon.type[0]} >
            <Id> #{pokemon.id} </Id>
            <Name> {pokemon.name} </Name>
            <Type> <img src={Poison} />  {pokemon.type[0]} </Type>
            <Type2> <img src={Grass}  /> {pokemon.type[1]} </Type2>
            <Imagem src={pokemon.img} /> 
            <Detalhes>Detalhes</Detalhes>
            <PokebolaImagem src={Pokebola} />
            <Capturar>Capturar!</Capturar>
        </Container>
    )
}