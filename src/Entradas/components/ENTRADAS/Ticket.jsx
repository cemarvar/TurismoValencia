export default function Ticket({ imagen, titulo })
{
    return(
        <div className="icono-ticket">
            <img src={imagen} alt={titulo} className="icono-circular-ticket" />
            <p className="titulo-icono-ticket">{titulo}</p>
        </div>
    );
}
