import "../../assets/css/estilo.css";
import {Link} from  'react-router-dom'; 


export default function Header() 
{
    const scrollToContacto = () => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    return (
            <div className="container">
                <div className="container_header">
                    <header>
                        <div className="container header-container">
                            <Link to="/Inicio" className="logo">
                                <img src="/img/TURISMO (3).png" alt="Valencia" className="logo-img" />
                                <span>Valencia</span> Mejor esta vida
                            </Link>
                            <nav>
                                <ul>
                                    <li><Link to="/Inicio">Inicio</Link></li>
                                    <li><Link to="/Que_Ver">Que ver</Link></li>
                                    <li><Link to="/Eventos">Eventos</Link></li>
                                    <li><Link to="/Gastronomia">Gastronomia</Link></li>
                                    <li><Link to="/Alojamientos">Alojamientos</Link></li>
                                    <li>
                                <span style={{ cursor: 'pointer' }} onClick={scrollToContacto}>
                                    Contacto
                                </span>
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