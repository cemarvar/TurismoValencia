import { Link } from 'react-router-dom';

export default function Experiencias({ imagen, titulo, ruta }) {
    return (
        <Link to={ruta} className="icono-experiencias">
            <img src={imagen} alt={titulo} className="icono-circular-experiencias" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-experiencias">{titulo}</p>
        </Link>
    );
}
