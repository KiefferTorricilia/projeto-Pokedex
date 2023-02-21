import { Container, DivLogo, PokedexButton, Retorna, Excluir, Sinal } from "./Styled"
import logo from "../../assets/logo.png"
import { useLocation, useNavigate } from "react-router-dom"
import {goToListPage, goToPokedex} from '../../routes/coordinator'
import { useContext } from "react"
import { GlobalContext } from "../../contexts/GlobalContext"
import Menos from '../../assets/Menos.png'

export default function Header (){
    const navigate = useNavigate()
    const location = useLocation()

    const context = useContext(GlobalContext)
    const {mudaHeader, setMudaHeader, pokedex, setPokedex, dados, setDados, detalhes, filtroPokelist} = context

    const excluirFromDetails = () => {
        const copiaPokedex = [...pokedex]
        const verificacao = copiaPokedex.find((itens) => {
            return itens === detalhes
        })
        if(verificacao !== undefined){
            const filtro =  pokedex.filter((pokemons) => {
                    return pokemons !== detalhes
                })
                setPokedex(filtro)
                setDados([...dados, detalhes])
            }
    }

    const adicionaFromDetails = () => {
        const copiaPokedex = [...pokedex]
        const verificacao = pokedex.find((itens) => {
           return itens === detalhes
        })
        console.log(verificacao)
       if(verificacao === undefined){
            copiaPokedex.push(detalhes)
       }
       setPokedex(copiaPokedex)
       filtroPokelist(detalhes)
    }
    

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
                <Retorna onClick={() => goToListPage(navigate, setMudaHeader)} > <Sinal src={Menos} /> Todos Pokémons</Retorna>
                <DivLogo>
                    <img src={logo} />
                </DivLogo>
                <Excluir variant={pokedex.find((itens) => itens === detalhes)}  onClick={() => {
                    adicionaFromDetails()
                    excluirFromDetails()
                    }} > {pokedex.find((itens) => itens === detalhes) === undefined ? "Adicionar Pokemon" : "Excluir Pokemon" } </Excluir>
            </Container>
        )
    }

}