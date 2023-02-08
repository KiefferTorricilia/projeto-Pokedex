import { Container, DivLogo, PokedexButton, Retorna, Excluir, Engloba } from "./Styled"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import {goToPokedex} from '../../routes/coordinator'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"

export default function Header (){
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {mudaHeader, setMudaHeader} = context
    

    if(mudaHeader === 2){
        return(
            <Container>
                <DivLogo>
                <img src={logo} />
                </DivLogo>
                <PokedexButton onClick={() => goToPokedex(navigate)} >Pokédex</PokedexButton>
            </Container>
        )
    }

    if(mudaHeader === 1){
        return(
            <Container>
                <Retorna>Todos Pokémons</Retorna>
                <DivLogo>
                    <img src={logo} />
                </DivLogo>
            </Container>
        )
    }

    if(mudaHeader === 0){
        return(
            <Container>
                <Retorna>Todos Pokémons</Retorna>
                <DivLogo>
                    <img src={logo} />
                </DivLogo>
                <Excluir>Excluir da Pokedex</Excluir>
            </Container>
        )
    }

}