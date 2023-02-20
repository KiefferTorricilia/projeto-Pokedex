import { Container, Id, Name, Type, Type2, Imagem, Detalhes, PokebolaImagem, Capturar } from "./Styled"
import Pokebola from '../../assets/Pokebola.png'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { goToDetails } from '../../routes/coordinator'


export default function PokemonCard({ pokemon }) {

    const navigate = useNavigate()

    const location = useLocation()

    const context = useContext(GlobalContext)
    const { pokedex, setPokedex, dados, setDados, setMudaHeader, setDetalhes, filtroPokemon, filtroPokelist, imagem } = context


    const excluir = (pokemon) => {
        if (location.pathname !== "/") {
            const filtro = pokedex.filter((pokemons) => {
                return pokemons !== pokemon
            })
            setPokedex(filtro)
            setDados([...dados, pokemon])
        }
    }

    const filtroDetails = (pokemon) => {
        setDetalhes(pokemon)
    }



    return (
        <Container variant={pokemon.type[0]} >
            <Id> #{pokemon.id} </Id>
            <Name> {pokemon.name} </Name>
            <Type variant={pokemon.type[0]}> <img src={imagem(pokemon.type[0])} />  {pokemon.type[0]} </Type>
            <Type2 variant={pokemon.type[1]}> <img src={imagem(pokemon.type[1])} /> {pokemon.type[1]} </Type2>
            <Imagem src={pokemon.img} />
            <Detalhes onClick={() => {
                filtroDetails(pokemon)
                goToDetails(navigate, setMudaHeader)
            }} >Detalhes</Detalhes>
            <PokebolaImagem src={Pokebola} />
            <Capturar onClick={() => {
                filtroPokemon(pokemon)
                filtroPokelist(pokemon)
                excluir(pokemon)
            }} variant={location.pathname} > {location.pathname === '/' ? "Capturar!" : "Excluir"} </Capturar>
        </Container>
    )
}