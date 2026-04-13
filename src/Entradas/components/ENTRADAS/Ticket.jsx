import { Link } from 'react-router-dom';

export default function Ticket({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-ticket">
            <img src={imagen} alt={titulo} className="icono-circular-ticket" />
            <p className="titulo-icono-ticket">{titulo}</p>
        </Link>
    );
}