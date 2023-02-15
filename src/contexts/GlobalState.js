import { GlobalContext } from "./GlobalContext"
import { useEffect, useState } from "react"
import axios from "axios"



const GlobalState = (props) => {
    const [mudaHeader, setMudaHeader] = useState(0)

    const [pokemons, setPokemons] = useState([])

    const [dados, setDados] = useState([])
    const [pokedex, setPokedex] = useState([])

    // `https://pokeapi.co/api/v2/pokemon/`


   


    const PegarPokemons = async (arrayEstado, estado) => {
        const copiaEstado = [...arrayEstado];
        let pegaId = 0;
        while (pegaId <= 20) {
          pegaId++;
          let arrayTypes = [];
          let arrayMoves = [];

          try {
            const response = await axios.get(`
              https://pokeapi.co/api/v2/pokemon/${pegaId}
              `);

            const objTypes = response.data.types;
            
            for (let j in objTypes) {
              let pegaTypes = objTypes[j].type.name;
              arrayTypes.push(pegaTypes);
              if (arrayTypes.length === 2) {
                break;
              }
            }
            
            const moves = response.data.moves;
            for (let j in moves) {
              let pegaMoves = moves[j].move.name;
              arrayMoves.push(pegaMoves);
              if (arrayMoves.length === 7) {
                break;
              }
              // console.log(response.data)
            }
            
            copiaEstado.push({
              name: response.data.name,
              id: response.data.id,
              type: arrayTypes,
              img: response.data.sprites.other["official-artwork"].front_default,
              moves: arrayMoves,
              stats: response.data.stats,
              frontDetail: response.data.sprites.versions["generation-v"]["black-white"].front_default,
              backDetail: response.data.sprites.versions["generation-v"]["black-white"].back_default
            });
            estado(copiaEstado);
          } catch (error) {
            console.log(error.response);
          }
        }
      };

  

    useEffect(() => {
        PegarPokemons(dados, setDados)
    }, [])
    // console.log(dados)

    const data = {
        mudaHeader,
        setMudaHeader,
        pokemons,
        setPokemons,
        PegarPokemons,
        dados,
        setDados,
        pokedex,
        setPokedex,

    }

    return (
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState