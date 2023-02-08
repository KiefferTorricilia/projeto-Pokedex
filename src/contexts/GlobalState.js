import { GlobalContext } from "./GlobalContext"
import { useState } from "react"


const GlobalState = (props) => {
    const [mudaHeader, setMudaHeader] = useState(0)


    
    const data = {
        mudaHeader,
        setMudaHeader
    }

    return(
        <GlobalContext.Provider value={data} >
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState