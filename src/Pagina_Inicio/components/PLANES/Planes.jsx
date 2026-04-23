import { Link } from 'react-router-dom';

export default function Planes({ imagen, titulo, ruta })
{
    return(
        <Link to={ruta} className="icono-planes">
            <img src={imagen} alt={titulo} className="icono-circular-planes" loading="lazy" width="400" height="220" />
            <p className="titulo-icono-planes">{titulo}</p>
        </Link>
    );
}

