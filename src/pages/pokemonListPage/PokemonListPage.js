import { useContext, useEffect, useState } from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Cor, Largura, Titulo } from "./Styled";
import PokemonCard from "../../components/pokemonCard/PokemonCard";
import axios from "axios";
import { ChakraProvider } from "@chakra-ui/react";



export default function PokemonListPage () {

    const context = useContext(GlobalContext)
    const {dados} = context
   

    return(
        <>
        <Header/>
        <Cor>Todos os Pokémons</Cor>
        <Largura> 
        {dados
        .map((pokemon, index) => {
            // console.log(pokemon)
            return(
                <PokemonCard key={index}  pokemon={pokemon} />
                )
            })}
        </Largura>
            </>
        )
    }

   