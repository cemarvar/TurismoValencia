import { Link } from 'react-router-dom';

export default function Esencial({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-esencial">
            <img src={imagen} alt={titulo} className="icono-circular-esencial" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-esencial">{titulo}</p>
        </Link>
    );
}
