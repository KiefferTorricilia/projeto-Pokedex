import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Cor } from "./Styled";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import axios from "axios";



export default function PokemonListPage () {

    const context = useContext(GlobalContext)
    const {pokemons} = context



    return(
        <>
        <h1>Não é bug burro</h1>
        {pokemons.map((pokemon, index) => {
            return(
                <PokemonCard pokemon={pokemon} index={index} />
            )
        })}
        </>
    )
}