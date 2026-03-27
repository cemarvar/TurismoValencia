import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
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
                </Routes>
        </BrowserRouter>
    );
}
