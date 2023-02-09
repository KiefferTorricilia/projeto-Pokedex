import { GlobalContext } from "./GlobalContext"
import { useEffect, useState } from "react"
import axios from "axios"



const GlobalState = (props) => {
    const [mudaHeader, setMudaHeader] = useState(0)

//     const PegarPokemons =  () => {
//             axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//             .then((result) => {
//                 console.log(result)
//             })
//             .catch((error) => {
//                 console.log(error)
//             })

//     }

// useEffect(() => {
//     PegarPokemons()
// }, [])


    const data = {
        mudaHeader,
        setMudaHeader,
        // PegarPokemons,
    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState