import "../assets/css/estilo_ver.css";

export default function App_Ver() {
    return (
        <div className="container_app_ver">
            <div className="container_header_app_ver">
                <header className="header_app_ver">
                    <div className="container header-container_app_ver">
                        <a href="#" className="logo_app_ver">
                            <img src="/img/TURISMO (3).png" alt="Valencia" className="logo-img_app_ver" />
                            <span>Valencia</span> Mejor esta vida
                        </a>
                        <nav className="nav_app_ver">
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="">Qué ver</a></li>
                                <li><a href="">Eventos</a></li>
                                <li><a href="">Gastronomía</a></li>
                                <li><a href="">Alojamiento</a></li>
                                <li><a href="">Contacto</a></li>
                                <li>
                                    <button className="bt_header_app_ver">
                                        TICKETS <br />& <br /> TOURS
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
                <div className="hr_ver_app"></div>
            </div>
        </div>
    );
}
