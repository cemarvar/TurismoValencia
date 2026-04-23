import { Link } from 'react-router-dom';

export default function Estancia({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-estancia">
            <img src={imagen} alt={titulo} className="icono-circular-estancia" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-estancia">{titulo}</p>
        </Link>
    );
}
