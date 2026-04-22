import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/estilo.css";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToContacto = () => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header>
            <div className="header-container">

                <Link to="/Inicio" className="logo">
                    <img src="/img/TURISMO (3).png" alt="Valencia" className="logo-img" />
                    <span>Valencia</span> Mejor esta vida
                </Link>

                <nav className={isMenuOpen ? 'active' : ''}>
                    <ul>
                        <li><Link to="/Inicio">Inicio</Link></li>
                        <li><Link to="/Que_Ver">Que ver</Link></li>
                        <li><Link to="/Eventos">Eventos</Link></li>
                        <li><Link to="/Gastronomia">Gastronomía</Link></li>
                        <li><Link to="/Alojamientos">Alojamientos</Link></li>
                        <li><span onClick={scrollToContacto} style={{ cursor: 'pointer' }}>Contacto</span></li>
                        <li>
                            <Link to="/Entradas" className="bt_header">
                                TICKETS & TOURS
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg viewBox="0 0 100 80" width="22" height="22" fill="white">
                        <rect width="100" height="15" rx="8"></rect>
                        <rect y="30" width="100" height="15" rx="8"></rect>
                        <rect y="60" width="100" height="15" rx="8"></rect>
                    </svg>
                </div>

            </div>
        </header>
    );
}