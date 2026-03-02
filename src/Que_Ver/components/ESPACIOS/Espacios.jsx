export default function Espacios({ imagen, titulo })
{
    return(
        <div className="icono-espacios">
            <img src={imagen} alt={titulo} className="icono-circular-espacios" />
            <p className="titulo-icono-espacios">{titulo}</p>
        </div>
    );
}
