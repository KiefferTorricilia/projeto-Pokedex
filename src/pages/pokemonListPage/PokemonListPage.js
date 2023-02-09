import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Cor } from "./Styled";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import axios from "axios";



export default function PokemonListPage () {


    const [pokemons, setPokemons] = useState([])
    
    const PegarPokemons =  () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/`)
        .then((result) => {
            console.log(result.data.results)
            setPokemons(result.data.results)
        })
        .catch((error) => {
            console.log(error)
        })
}

useEffect(() => {
    PegarPokemons()
}, [])

    return(
        <>
        <h1>Não é bug burro</h1>
        {pokemons.map((pokemon) => {
            return(
                <PokemonCard pokemon={pokemon} />
            )
        })}
        </>
    )
}