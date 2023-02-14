import { Container, DivLogo, PokedexButton, Retorna, Excluir, Sinal } from "./Styled"
import logo from "../../assets/logo.png"
import { useNavigate } from "react-router-dom"
import {goToDetails, goToListPage, goToPokedex} from '../../routes/coordinator'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import Menos from '../../assets/Menos.png'

export default function Header (){
    const navigate = useNavigate()

    const context = useContext(GlobalContext)
    const {mudaHeader, setMudaHeader} = context
    

    if(mudaHeader === 0){
        return(
            <Container>
                <DivLogo>
                <img src={logo} />
                </DivLogo>
                <PokedexButton onClick={() => goToPokedex(navigate, setMudaHeader)} >Pokédex</PokedexButton>
            </Container>
        )
    }

    if(mudaHeader === 1){
        return(
            <Container>
                <Retorna onClick={() => goToListPage(navigate, setMudaHeader)} > <Sinal src={Menos} /> Todos Pokémons</Retorna>
                <DivLogo>
                    <img src={logo} />
                </DivLogo>
            </Container>
        )
    }

    if(mudaHeader === 2){
        return(
            <Container>
                <Retorna onClick={() => goToListPage(navigate, setMudaHeader)} >Todos Pokémons</Retorna>
                <DivLogo>
                    <img src={logo} />
                </DivLogo>
                <Excluir onClick={() => goToDetails(navigate, setMudaHeader)} >Excluir da Pokedex</Excluir>
            </Container>
        )
    }

}