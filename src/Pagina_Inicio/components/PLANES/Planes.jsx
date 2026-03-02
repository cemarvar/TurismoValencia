export default function Planes({ imagen, titulo })
{
    return(
        <div className="icono-planes">
            <img src={imagen} alt={titulo} className="icono-circular-planes" />
            <p className="titulo-icono-planes">{titulo}</p>
        </div>
    );
}