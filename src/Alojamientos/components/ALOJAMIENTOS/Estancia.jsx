export default function Estancia({ imagen, titulo })
{
    return(
        <div className="icono-estancia">
            <img src={imagen} alt={titulo} className="icono-circular-estancia" />
            <p className="titulo-icono-estancia">{titulo}</p>
        </div>
    );
}
