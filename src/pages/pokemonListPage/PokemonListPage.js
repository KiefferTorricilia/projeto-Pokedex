import { useContext} from "react";
import Header from "../../components/header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Cor, Largura} from "./Styled";
import PokemonCard from "../../components/pokemonCard/PokemonCard";




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

   