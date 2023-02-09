import { GlobalContext } from "./GlobalContext"
import { useEffect, useState } from "react"
import axios from "axios"



const GlobalState = (props) => {
    const [mudaHeader, setMudaHeader] = useState(0)

    const [pokemons, setPokemons] = useState([])

    const PegarPokemons = async () => {
        const url = []

        try {
            const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
            // console.log(result)
            setPokemons(result.data.results)
            const pokemons = result.data.results
            try {
                for(let i in pokemons){
                    let newResult = await axios.get(pokemons[i].url)
                    url.push(newResult.data)
                    console.log(url)
                }
                
            } catch (error) {
                console.log(error)
            }

        } catch (error) {
            
        }
    }
    


//     const PegarPokemons =  () => {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/`)
//         .then((result) => {
//             console.log(result.data.results)
//             setPokemons(result.data.results)
//         })
//         .catch((error) => {
//             console.log(error)
//         })
// }

useEffect(() => {
    PegarPokemons()
}, [])


    const data = {
        mudaHeader,
        setMudaHeader,
        pokemons,
        setPokemons,
        PegarPokemons,
    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState