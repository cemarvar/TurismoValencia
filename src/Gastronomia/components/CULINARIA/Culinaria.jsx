export default function Culinaria({ imagen, titulo })
{
    return(
        <div className="icono-culinaria">
            <img src={imagen} alt={titulo} className="icono-circular-culinaria" />
            <p className="titulo-icono-culinaria">{titulo}</p>
        </div>
    );
}
