import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Cor, Largura } from "./Styled";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";



export default function PokemonListPage () {

    const context = useContext(GlobalContext)
    const {pokemons, url, dados} = context
    // console.log(dados)


    return(
        
        <Largura>
        <Header/>
        {pokemons.map((pokemon, index) => {
        return(
            <PokemonCard key={index} url={url}  pokemon={pokemon} />
        )
    })}
        </Largura>

        )
    }

   