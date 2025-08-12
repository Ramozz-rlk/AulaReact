import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Paginas/Home";

import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import SantaCatarina from "./Paginas/SantaCatarina";



export default function App()
{
    return (
       <BrowserRouter>    
       <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="sp" element={ <SaoPaulo/> } />
          <Route path="mg" element={ <MinasGerais/> } />
          <Route path="rj" element={ <RioDeJaneiro/> } />
          <Route path="es" element={ <EspiritoSanto/> } />
          <Route path="sc" element={ <SantaCatarina/> } />
          <Route path="rs" element={ <RioGrandeDoSul/> } />





 

       </Routes> 
       </BrowserRouter>

    );
}