import { Link } from 'react-router-dom';

export default function Tours({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-tours">
            <img src={imagen} alt={titulo} className="icono-circular-tours" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-tours">{titulo}</p>
        </Link>
    );
}
