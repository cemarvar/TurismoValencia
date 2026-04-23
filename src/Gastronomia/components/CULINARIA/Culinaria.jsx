import { Link } from 'react-router-dom';

export default function Culinaria({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-culinaria">
            <img src={imagen} alt={titulo} className="icono-circular-culinaria" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-culinaria">{titulo}</p>
        </Link>
    );
}