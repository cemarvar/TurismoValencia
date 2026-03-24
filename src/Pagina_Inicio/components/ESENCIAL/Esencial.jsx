import { Link } from 'react-router-dom';

export default function Esencial({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-esencial">
            <img src={imagen} alt={titulo} className="icono-circular-esencial" />
            <p className="titulo-icono-esencial">{titulo}</p>
        </Link>
    );
}
