import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Paginas/Home";

import SaoPaulo from "./Paginas/SaoPaulo";
import MinasGerais from "./Paginas/MinasGerais";
import RioDeJaneiro from "./Paginas/RioDeJaneiro";
import EspiritoSanto from "./Paginas/EspiritoSanto";
import SantaCatarina from "./Paginas/SantaCatarina";
import RioGrandeDoSul from "./Paginas/RioGrandeDoSul";
import Parana from "./Paginas/Parana";
import MatoGrosso from "./Paginas/MatoGrosso";
import MatoGrossoDoSul from "./Paginas/MatoGrossoDoSul";
import Goias from "./Paginas/Goias";
import DistritoFederal from "./Paginas/DistritoFederal";
import Tocantins from "./Paginas/Tocantins";
import Rondonia from "./Paginas/Rondonia";
import Acre from "./Paginas/Acre";
import Amazonas from "./Paginas/Amazonas";
import Roraima from "./Paginas/Roraima";
import Para from "./Paginas/Para";
import Amapa from "./Paginas/Amapa";
import Maranhao from "./Paginas/Maranhao";
import Piaui from "./Paginas/Piaui";
import Ceara from "./Paginas/Ceara";
import RioGrandeDoNorte from "./Paginas/RioGrandeDoNorte";
import Paraiba from "./Paginas/Paraiba";
import Pernambuco from "./Paginas/Pernambuco";
import Alagoas from "./Paginas/Alagoas";
import Sergipe from "./Paginas/Sergipe";
import Bahia from "./Paginas/Bahia";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sp" element={<SaoPaulo />} />
        <Route path="mg" element={<MinasGerais />} />
        <Route path="rj" element={<RioDeJaneiro />} />
        <Route path="es" element={<EspiritoSanto />} />
        <Route path="sc" element={<SantaCatarina />} />
        <Route path="rs" element={<RioGrandeDoSul />} />
        <Route path="pr" element={<Parana />} />
        <Route path="mt" element={<MatoGrosso />} />
        <Route path="ms" element={<MatoGrossoDoSul />} />
        <Route path="go" element={<Goias />} />
        <Route path="df" element={<DistritoFederal />} />
        <Route path="to" element={<Tocantins />} />
        <Route path="ro" element={<Rondonia />} />
        <Route path="ac" element={<Acre />} />
        <Route path="am" element={<Amazonas />} />
        <Route path="rr" element={<Roraima />} />
        <Route path="pa" element={<Para />} />
        <Route path="ap" element={<Amapa />} />
        <Route path="ma" element={<Maranhao />} />
        <Route path="pi" element={<Piaui />} />
        <Route path="ce" element={<Ceara />} />
        <Route path="rn" element={<RioGrandeDoNorte />} />
        <Route path="pb" element={<Paraiba />} />
        <Route path="pe" element={<Pernambuco />} />
        <Route path="al" element={<Alagoas />} />
        <Route path="se" element={<Sergipe />} />
        <Route path="ba" element={<Bahia />} />
      </Routes>
    </BrowserRouter>
  );
}
