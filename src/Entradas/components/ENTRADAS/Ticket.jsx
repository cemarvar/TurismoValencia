import { Link } from 'react-router-dom';

export default function Ticket({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-ticket">
            <img src={imagen} alt={titulo} className="icono-circular-ticket" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-ticket">{titulo}</p>
        </Link>
    );
}