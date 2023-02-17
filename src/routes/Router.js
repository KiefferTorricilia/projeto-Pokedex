import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../pages/pokedexPage/PokedexPage";
import PokemonDetailPage from "../pages/pokemonDetailPage/PokemonDetailPage";
import PokemonListPage from "../pages/pokemonListPage/PokemonListPage";

export default function Router() {

    return(

        <BrowserRouter>
        
        <Routes>

            <Route index element={<PokemonListPage/>} />
            <Route path="/details" element={<PokemonDetailPage/>}  />
            <Route path="/pokedex" element={<PokedexPage/>}  />
        </Routes>

        </BrowserRouter>
    )
}

