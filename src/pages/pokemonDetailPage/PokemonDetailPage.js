import {
    Titulo, Container, ContainerDetalhes, BoxImagem, BaseStats, Imagem, Id, Name, Type, Type2,
    ImagemGrande, PokebolaDeFundo, Moves, TituloMoves, Movimentos
} from "./Styled";
import Header from '../../components/header/Header'
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import Grass from '../../assets/Grass.png'
import Bug from '../../assets/Bug.png'
import Fire from '../../assets/Fire.png'
import Fly from '../../assets/Fly.png'
import Normal from '../../assets/Normal.png'
import Poison from '../../assets/Poison.png'
import Water from '../../assets/Water.png'
import PokebolaGrande from '../../assets/PokebolaGrande.png'



export default function PokemonDetailPage() {

    const context = useContext(GlobalContext)
    const { detalhes } = context
    console.log(detalhes)

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

    return (
        <>
            <Header />
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
                    <Id> #{detalhes.id} </Id>
                    <Name> {detalhes.name} </Name>
                    <Type variant={detalhes.type[0]}> <img src={imagem(detalhes.type[0])} />  {detalhes.type[0]} </Type>
                    <Type2 variant={detalhes.type[1]}> <img src={imagem(detalhes.type[1])} />  {detalhes.type[1]} </Type2>
                    <ImagemGrande src={detalhes.img} />
                    <PokebolaDeFundo src={PokebolaGrande} />
                    <Moves>
                        <TituloMoves>Moves:</TituloMoves>
                        <Movimentos> {detalhes.moves[0]}  </Movimentos>
                        <Movimentos> {detalhes.moves[1]}  </Movimentos>
                        <Movimentos> {detalhes.moves[2]}  </Movimentos>
                        <Movimentos> {detalhes.moves[3]}  </Movimentos>
                    </Moves>
                    
                </ContainerDetalhes>
            </Container>
        </>
    )
}