import {
    Titulo, Container, ContainerDetalhes, BoxImagem, Stats, Imagem, Id, Name, Type, Type2,
    ImagemGrande, PokebolaDeFundo, Moves, TituloMoves, Movimentos, ProgressBar, BaseStats, NomeStat
} from "./Styled";
import Header from '../../components/header/Header'
import { useContext } from "react";
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

    const total = (status) => {
        console.log("executa")
        console.log(status)
        let total = 0
        status.map((itens) => {
            total = total + itens.base_stat
            console.log(total)
        })
        return total
    }
   


    return (
        <>
            <Header />
            <Container>
                <Titulo>Detalhes</Titulo>
                <ContainerDetalhes variant={detalhes.type[0]} >
                    <BoxImagem>
                        <Imagem src={detalhes.frontDetail} />
                    </BoxImagem>
                    <BoxImagem>
                        <Imagem src={detalhes.backDetail} />
                    </BoxImagem>
                    <Stats>
                        <BaseStats> Base Stats </BaseStats>
                        <NomeStat> HP  {detalhes.stats[0].base_stat} </NomeStat> <ProgressBar variant={detalhes.stats[0].base_stat} > </ProgressBar>
                        <NomeStat> Attack {detalhes.stats[1].base_stat} </NomeStat> <ProgressBar variant={detalhes.stats[1].base_stat} > </ProgressBar>
                        <NomeStat> Defense {detalhes.stats[2].base_stat} </NomeStat><ProgressBar variant={detalhes.stats[2].base_stat} >  </ProgressBar>
                        <NomeStat> Sp.Atk  {detalhes.stats[3].base_stat} </NomeStat><ProgressBar variant={detalhes.stats[3].base_stat} >  </ProgressBar>
                        <NomeStat> Sp.Def  {detalhes.stats[4].base_stat} </NomeStat> <ProgressBar variant={detalhes.stats[4].base_stat} > </ProgressBar>
                        <NomeStat> Speed  {detalhes.stats[5].base_stat} </NomeStat> <ProgressBar variant={detalhes.stats[5].base_stat} > </ProgressBar>
                        <NomeStat> Total {total(detalhes.stats)}  </NomeStat>
                    </Stats>
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