import { Link } from 'react-router-dom';

export default function Culinaria({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-culinaria">
            <img src={imagen} alt={titulo} className="icono-circular-culinaria" />
            <p className="titulo-icono-culinaria">{titulo}</p>
        </Link>
    );
}