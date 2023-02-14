import { Container, Id, Name, Type, Type2, Imagem, Detalhes, PokebolaImagem, Capturar, Organizar } from "./Styled"
import Header from "../header/Header"
import Poison from "../../assets/Poison.png"
import Grass from '../../assets/Grass.png'
import Bug from '../../assets/Bug.png'
import Fire from '../../assets/Fire.png'
import Fly from '../../assets/Fly.png'
import Normal from '../../assets/Normal.png'
import Water from '../../assets/Water.png'
import Bulbassauro from "../../assets/Bulbassauro.png"
import Pokebola from '../../assets/Pokebola.png'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"


export default function PokemonCard({ pokemon }) {

    const imagem = (type) => {
        switch (type) {
            case "grass":
                return Grass;
            case "fire":
                return Fire;
            case "water":
                return Water;
            case "bug":
                return Bug;
            case "normal":
                return Normal;
            case 'flying':
                return Fly;
            case 'poison':
                return Poison;
            default:
                console.log("Deu merda");
        }
    }



    return (
        <Container variant={pokemon.type[0]} >
            <Id> #{pokemon.id} </Id>
            <Name> {pokemon.name} </Name>
            <Type variant={pokemon.type[0]}> <img src={imagem(pokemon.type[0])}/>  {pokemon.type[0]} </Type>
           
                
            <Type2 variant={pokemon.type[1]}> <img src={imagem(pokemon.type[1])}/> {pokemon.type[1]} </Type2>
            

            <Imagem src={pokemon.img} />
            <Detalhes>Detalhes</Detalhes>
            <PokebolaImagem src={Pokebola} />
            <Capturar>Capturar!</Capturar>
        </Container>
    )
}