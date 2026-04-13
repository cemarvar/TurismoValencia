import { Link } from 'react-router-dom';

export default function Tours({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-tours">
            <img src={imagen} alt={titulo} className="icono-circular-tours" />
            <p className="titulo-icono-tours">{titulo}</p>
        </Link>
    );
}
