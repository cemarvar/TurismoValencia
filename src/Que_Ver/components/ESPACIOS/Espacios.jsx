import { Link } from 'react-router-dom';

export default function Espacios({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-espacios">
            <img src={imagen} alt={titulo} className="icono-circular-espacios" />
            <p className="titulo-icono-espacios">{titulo}</p>
        </Link>
    );
}