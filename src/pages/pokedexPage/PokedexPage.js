import { Container, MiniContainer, Titulo } from "./styled";
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import Header from "../../components/header/Header";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


export default function PokedexPage () {

    const context = useContext(GlobalContext)
    const {pokedex} = context


    return (
        <>
        <Header />
        <Container>
            <Titulo>Meus Pokémons</Titulo>
        <MiniContainer>
            {pokedex.map((pokemon, index) => {
                return(
                    <PokemonCard key={index} pokemon={pokemon} />
                    )
                })}
            
        </MiniContainer>
        </Container>
        </>
    )
}