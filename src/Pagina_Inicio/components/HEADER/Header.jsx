import "../../assets/css/estilo.css";
import {Link} from  'react-router-dom'; 
import { HashLink } from 'react-router-hash-link';
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
                                    <li><Link to="/Gastronomia">Gastronomia</Link></li>
                                    <li><Link to="/Alojamientos">Alojamientos</Link></li>
                                    <li>
                                    {location.pathname === '/Inicio' ? (
                                        <span
                                            style={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                const el = document.getElementById('contacto');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                        >
                                            Contacto
                                        </span>
                                    ) : (
                                        <HashLink
                                            smooth
                                            to="/#contacto"
                                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                                            className="nav-link"
                                        >
                                            Contacto
                                        </HashLink>
                                    )}
                                </li>
                                    <li>
                                        <button className="bt_header">
                                        <Link to="/Entradas"> TICKETS <br />& <br /> TOURS</Link>
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