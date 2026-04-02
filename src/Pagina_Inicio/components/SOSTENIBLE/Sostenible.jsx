import { Link } from 'react-router-dom';

export default function Planes({ imagen, titulo, ruta })
{
    return(
        <Link to={ruta} className="icono-sostenible">
            <img src={imagen} alt={titulo} className="icono-circular-sostenible" />
            <p className="titulo-icono-sostenible">{titulo}</p>
        </Link>
    );
}

