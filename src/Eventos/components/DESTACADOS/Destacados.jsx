export default function Destacados({ imagen, titulo })
{
    return(
        <div className="icono-destacados">
            <img src={imagen} alt={titulo} className="icono-circular-destacados" />
            <p className="titulo-icono-destacados">{titulo}</p>
        </div>
    );
}
