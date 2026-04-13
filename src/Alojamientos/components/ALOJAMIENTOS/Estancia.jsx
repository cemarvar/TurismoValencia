import { Link } from 'react-router-dom';

export default function Estancia({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-estancia">
            <img src={imagen} alt={titulo} className="icono-circular-estancia" />
            <p className="titulo-icono-estancia">{titulo}</p>
        </Link>
    );
}
