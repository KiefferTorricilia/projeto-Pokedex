import { GlobalContext } from "./GlobalContext"
import { useEffect, useState } from "react"
import axios from "axios"
import Poison from "../assets/Poison.png"
import Grass from '../assets/Grass.png'
import Bug from '../assets/Bug.png'
import Fire from '../assets/Fire.png'
import Fly from '../assets/Fly.png'
import Normal from '../assets/Normal.png'
import Water from '../assets/Water.png'



const GlobalState = (props) => {
    const [mudaHeader, setMudaHeader] = useState(0)

    const [detalhes, setDetalhes] = useState([])

    const [dados, setDados] = useState([])
    const [pokedex, setPokedex] = useState([])

 

    const adicionaPokedex = (pokemon) => {
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


    const PegarPokemons = async (arrayEstado, estado) => {
        const copiaEstado = [...arrayEstado];
        let pegaId = 0;
        while (pegaId <= 21) {
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
   

    const data = {
        mudaHeader,
        setMudaHeader,
        PegarPokemons,
        dados,
        setDados,
        pokedex,
        setPokedex,
        detalhes,
        setDetalhes,
        adicionaPokedex,
        filtroPokelist,
        imagem,

    }

    return (
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState