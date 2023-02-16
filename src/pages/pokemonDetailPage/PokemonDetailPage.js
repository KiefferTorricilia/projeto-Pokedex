import { Titulo, Container, ContainerDetalhes, BoxImagem, BaseStats, Imagem } from "./Styled";
import Header from '../../components/header/Header'
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";

export default function PokemonDetailPage () {

    const context = useContext(GlobalContext)
    const {detalhes} = context
    console.log(detalhes)

    return(
        <>
        <Header/>
        <Container>
        <Titulo>Detalhes</Titulo>
        <ContainerDetalhes>
            <BoxImagem>
            <Imagem src={detalhes.frontDetail} />
            </BoxImagem>
            <BoxImagem>
            <Imagem src={detalhes.backDetail} />
            </BoxImagem>
            <BaseStats>
            Estatus
            </BaseStats>
        </ContainerDetalhes>
        </Container>
        </>
    )
}