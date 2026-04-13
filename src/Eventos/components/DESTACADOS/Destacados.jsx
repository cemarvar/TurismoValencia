import { Link } from 'react-router-dom';

export default function Destacados({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-destacados">
            <img src={imagen} alt={titulo} className="icono-circular-destacados" />
            <p className="titulo-icono-destacados">{titulo}</p>
        </Link>
    );
}
