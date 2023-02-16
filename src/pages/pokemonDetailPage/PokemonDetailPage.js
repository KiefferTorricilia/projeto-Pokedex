import { Titulo, Container, ContainerDetalhes, BoxImagem, BaseStats } from "./Styled";
import Header from '../../components/header/Header'

export default function PokemonDetailPage () {



    return(
        <>
        <Header/>
        <Container>
        <Titulo>Detalhes</Titulo>
        <ContainerDetalhes>
            <BoxImagem>
            Bulbasauro
            </BoxImagem>
            <BoxImagem>
            Charizard
            </BoxImagem>
            <BaseStats>
            Estatus
            </BaseStats>
        </ContainerDetalhes>
        </Container>
        </>
    )
}