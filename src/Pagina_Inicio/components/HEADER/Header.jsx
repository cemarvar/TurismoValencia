import "../../assets/css/estilo.css";
import {Link} from  'react-router-dom'; 
export default function Header() 
{
    return (
            <div className="container">
                <div className="container_header">
                    <header>
                        <div className="container header-container">
                            <a href="#" className="logo">
                                <img src="/img/TURISMO (3).png" alt="Valencia" className="logo-img" />
                                <span>Valencia</span> Mejor esta vida
                            </a>
                            <nav>
                                <ul>
                                    <li><Link to="/Inicio">Inicio</Link></li>
                                    <li><Link to="/Que_Ver">Que ver</Link></li>
                                    <li><Link to="/Eventos">Eventos</Link></li>
                                    <li>Gastronomía</li>
                                    <li>Alojamiento</li>
                                    <li>Contacto</li>
                                    <li>
                                        <button className="bt_header">
                                            TICKETS <br />& <br /> TOURS
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </header>
                </div>

            </div>
    );
}