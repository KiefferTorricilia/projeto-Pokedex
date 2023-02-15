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
import { useLocation } from "react-router-dom"


export default function PokemonCard({ pokemon }) {

    const location = useLocation()
    console.log(location)

    const context = useContext(GlobalContext)
    const {pokedex, setPokedex, dados, setDados} = context

    const filtroPokemon = (pokemon) => {
        const copiaPokedex = [...pokedex]
        const verificacao = copiaPokedex.find((item) => item.id === pokemon.id  )
        if(verificacao === undefined){
            copiaPokedex.push(pokemon)
        }
        setPokedex(copiaPokedex)
    }

    const filtroPokelist = (pokemon) => {
        const filtro = dados.filter((pokemons) => {
            return pokemons !== pokemon
        })
         setDados(filtro)
    }


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
            <Capturar onClick={() => {
                filtroPokemon(pokemon)
                filtroPokelist(pokemon)
            }} variant={location.pathname} > {location.pathname === '/' ? "Capturar!" : "Excluir" } </Capturar>
        </Container>
    )
}