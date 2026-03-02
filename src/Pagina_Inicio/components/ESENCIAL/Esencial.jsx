export default function Esencial({ imagen, titulo })
{
    return(
        <div className="icono-esencial">
            <img src={imagen} alt={titulo} className="icono-circular-esencial" />
            <p className="titulo-icono-esencial">{titulo}</p>
        </div>
    );
}
