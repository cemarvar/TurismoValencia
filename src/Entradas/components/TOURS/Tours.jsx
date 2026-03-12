export default function Tours({ imagen, titulo })
{
    return(
        <div className="icono-tours">
            <img src={imagen} alt={titulo} className="icono-circular-tours" />
            <p className="titulo-icono-tours">{titulo}</p>
        </div>
    );
}
