import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ChatBot from './ChatBot/ChatBot';
import Header from './HEADER/Header';
import Ver from '../../Que_Ver/Ver';
import Inicio from '../Inicio';
import Eventos from '../../Eventos/Eventos';
import Gastronomia from '../../Gastronomia/Gastronomia';
import Alojamientos from '../../Alojamientos/Alojamientos';
import Scroll from './SCROLL/Scroll';
import Entradas from '../../Entradas/Entradas';
import Navidad from '../pages/esencial/Navidad';
import VisitasImprescindibles from '../pages/esencial/VisitasImprescindibles';
import ValenciaTresDias from '../pages/esencial/ValenciaTresDias';
import CiudadAmurallada from '../pages/esencial/CiudadAmurallada';
import PatrimonioHumanidad from '../pages/esencial/PatrimonioHumanidad';
import MonumentosMuseos from '../pages/esencial/MonumentosMuseos';
import CAC from '../pages/esencial/CAC';
import Bioparc from '../pages/esencial/Bioparc';
import Espectaculo from '../pages/planes/Espectaculo';
import Familia from '../pages/planes/Familia';
import Naturaleza from '../pages/planes/Naturaleza';
import FiestasTradicionales from '../pages/planes/FiestasTradicionales';
import Deportes from '../pages/planes/Deportes';
import Exposicion from '../pages/planes/Exposicion';
import MueveteValencia from '../pages/sostenible/MueveteValencia';
import Ecoturismo from '../pages/sostenible/Ecoturismo';
import ComercioLocal from '../pages/sostenible/ComercioLocal';
import Consejos from '../pages/sostenible/Consejos';
import ViajeResponsable from '../pages/sostenible/ViajeResponsable';
import ViajeSostenible from '../pages/sostenible/ViajeSostenible';
import LonjaSeda from '../../Que_Ver/pages/LonjaSeda';
import CatedralCaliz from '../../Que_Ver/pages/CatedralCaliz';
import BarrioCarmen from '../../Que_Ver/pages/BarrioCarmen';
import MercadoCentral from '../../Que_Ver/pages/MercadoCentral';
import Oceanografic from '../../Que_Ver/pages/Oceanografic';
import LaMarina from '../../Que_Ver/pages/LaMarina';
import JardinTuria from '../../Que_Ver/pages/JardinTuria';
import MuseoBellasArtes from '../../Que_Ver/pages/MuseoBellasArtes';
import Ruzafa from '../../Que_Ver/pages/Ruzafa';
import Playes from '../../Que_Ver/pages/Playes';
import Albufera from '../../Que_Ver/pages/Albufera';
import IglesiaSanNicolas from '../../Que_Ver/pages/IglesiaSanNicolas';
import Mestalla from '../../Que_Ver/pages/Mestalla';
import Festivos from '../../Eventos/pages/Festivos';
import Fallas from '../../Eventos/pages/Fallas';
import GranFeria from '../../Eventos/pages/GranFeria';
import FestivalesVerano from '../../Eventos/pages/FestivalesVerano';
import CorpusChristi from '../../Eventos/pages/CorpusChristi';
import Paella from '../../Gastronomia/pages/Paella';
import Fideua from '../../Gastronomia/pages/Fideua';
import ArrozHorno from '../../Gastronomia/pages/ArrozHorno';
import Esgarraet from '../../Gastronomia/pages/Esgarraet';
import ArrozNegro from '../../Gastronomia/pages/ArrozNegro';
import AllPebre from '../../Gastronomia/pages/AllPebre';
import Buenuelo from '../../Gastronomia/pages/Buenuelo';
import ArrozSenyoret from '../../Gastronomia/pages/ArrozSenyoret';
import Horchata from '../../Gastronomia/pages/Horchata';
import Centro from '../../Alojamientos/pages/Centro';
import CiudadArtesCienciasAloj from '../../Alojamientos/pages/CiudadArtesCienciasAloj';
import BarrioRuzada from '../../Alojamientos/pages/BarrioRuzada';
import BarrioGranVia from '../../Alojamientos/pages/BarrioGranVia';
import ZonaPlayaPaseoMaritimo from '../../Alojamientos/pages/ZonaPlayaPaseoMaritimo';
import BaratoExclusivo from '../../Alojamientos/pages/BaratoExclusivo';
import ValenciaCard from '../../Entradas/pages/Entradas/ValenciaCard';
import BusTuristico from '../../Entradas/pages/Entradas/BusTuristico';
import CentroHistorico from '../../Entradas/pages/Tours/CentroHistorico';
import CienciasArtes from '../../Entradas/pages/Tours/CienciasArtes';
import Bici from '../../Entradas/pages/Tours/Bici';
import PrivadoGrupo from '../../Entradas/pages/Tours/PrivadoGrupo';
import PaseoMaritimo from '../../Entradas/pages/Tours/PaseoMaritimo';
import Excursiones from '../../Entradas/pages/Experiencias/Excursiones';
import ActividadesGastronomicas from '../../Entradas/pages/Experiencias/ActividadesGastronomicas';
import Nauticas from '../../Entradas/pages/Experiencias/Nauticas';
import PoliticaPrivacidad from '../pages/legal/PoliticaPrivacidad';
import AvisoLegal from '../pages/legal/AvisoLegal';

export default function App()
{
    return (
        <BrowserRouter>
        <Scroll />
            <Header/>
                <Routes>
                    <Route path='/' element={<Inicio/>}/>
                    <Route path='/Inicio' element={<Inicio/>}/>
                    <Route path="/Que_Ver" element={<Ver />} />
                    <Route path="/Eventos" element={<Eventos />} />
                    <Route path="/Gastronomia" element={<Gastronomia />} />
                    <Route path="/Alojamientos" element={<Alojamientos />} />
                    <Route path="/Entradas" element={<Entradas />} />
                    <Route path="/Navidad" element={<Navidad />} />
                    <Route path="/VisitasImprescindibles" element={<VisitasImprescindibles />} />
                    <Route path="/ValenciaTresDias" element={<ValenciaTresDias />} />
                    <Route path="/CiudadAmurallada" element={<CiudadAmurallada />} />
                    <Route path="/PatrimonioHumanidad" element={<PatrimonioHumanidad />} />
                    <Route path="/MonumentosMuseos" element={<MonumentosMuseos />} />
                    <Route path="/CAC" element={<CAC />} />
                    <Route path="/Bioparc" element={<Bioparc />} />
                    <Route path="/Espectaculo" element={<Espectaculo />} />
                    <Route path="/Familia" element={<Familia />} />
                    <Route path="/Naturaleza" element={<Naturaleza />} />
                    <Route path="/FiestasTradicionales" element={<FiestasTradicionales />} />
                    <Route path="/Deportes" element={<Deportes />} />
                    <Route path="/Exposicion" element={<Exposicion />} />
                    <Route path="/MueveteValencia" element={<MueveteValencia />} />
                    <Route path="/Ecoturismo" element={<Ecoturismo />} />
                    <Route path="/ComercioLocal" element={<ComercioLocal />} />
                    <Route path="/Consejos" element={<Consejos />} />
                    <Route path="/ViajeResponsable" element={<ViajeResponsable />} />
                    <Route path="/ViajeSostenible" element={<ViajeSostenible />} />
                    <Route path="/LonjaSeda" element={<LonjaSeda />} />
                    <Route path="/CatedralCaliz" element={<CatedralCaliz />} />
                    <Route path="/BarrioCarmen" element={<BarrioCarmen />} />
                    <Route path="/Oceanografic" element={<Oceanografic />} />
                    <Route path="/MercadoCentral" element={<MercadoCentral />} />
                    <Route path="/LaMarina" element={<LaMarina />} />
                    <Route path="/JardinTuria" element={<JardinTuria />} />
                    <Route path="/MuseoBellasArtes" element={<MuseoBellasArtes />} />
                    <Route path="/Ruzafa" element={<Ruzafa />} />
                    <Route path="/Playes" element={<Playes />} />
                    <Route path="/Albufera" element={<Albufera />} />
                    <Route path="/IglesiaSanNicolas" element={<IglesiaSanNicolas />} />
                    <Route path="/Mestalla" element={<Mestalla />} />
                    <Route path="/Festivos" element={<Festivos />} />
                    <Route path="/Fallas" element={<Fallas />} />
                    <Route path="/GranFeria" element={<GranFeria />} />
                    <Route path="/FestivalesVerano" element={<FestivalesVerano />} />
                    <Route path="/CorpusChristi" element={<CorpusChristi />} />
                    <Route path="/Paella" element={<Paella />} />
                    <Route path="/Fideua" element={<Fideua />} />
                    <Route path="/ArrozHorno" element={<ArrozHorno />} />
                    <Route path="/Esgarraet" element={<Esgarraet />} />
                    <Route path="/ArrozNegro" element={<ArrozNegro />} />
                    <Route path="/AllPebre" element={<AllPebre />} />
                    <Route path="/Buenuelo" element={<Buenuelo />} />
                    <Route path="/ArrozSenyoret" element={<ArrozSenyoret />} />
                    <Route path="/Horchata" element={<Horchata />} />
                    <Route path="/Centro" element={<Centro />} />
                    <Route path="/CiudadArtesCienciasAloj" element={<CiudadArtesCienciasAloj />} />
                    <Route path="/BarrioRuzada" element={<BarrioRuzada />} />
                    <Route path="/BarrioGranVia" element={<BarrioGranVia />} />
                    <Route path="/ZonaPlayaPaseoMaritimo" element={<ZonaPlayaPaseoMaritimo />} />
                    <Route path="/BaratoExclusivo" element={<BaratoExclusivo />} />
                    <Route path="/ValenciaCard" element={<ValenciaCard />} />
                    <Route path="/BusTuristico" element={<BusTuristico />} />
                    <Route path="/CentroHistorico" element={<CentroHistorico />} />
                    <Route path="/CienciasArtes" element={<CienciasArtes />} />
                    <Route path="/Bici" element={<Bici />} />
                    <Route path="/PrivadoGrupo" element={<PrivadoGrupo />} />
                    <Route path="/PaseoMaritimo" element={<PaseoMaritimo />} />
                    <Route path="/Excursiones" element={<Excursiones />} />
                    <Route path="/ActividadesGastronomicas" element={<ActividadesGastronomicas />} />
                    <Route path="/Nauticas" element={<Nauticas />} />
                    <Route path="/PoliticaPrivacidad" element={<PoliticaPrivacidad />} />
                    <Route path="/AvisoLegal" element={<AvisoLegal />} />
                </Routes>
            <ChatBot />
        </BrowserRouter>
    );
}
