import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './HEADER/Header';
import Ver from '../../Que_Ver/Ver';
import Inicio from '../Inicio';
import Scroll from './SCROLL/Scroll';

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
                </Routes>
        </BrowserRouter>
    );
}
