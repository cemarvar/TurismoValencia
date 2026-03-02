export default function Sostenible({ imagen, titulo })
{
    return(
        <div className="icono-sostenible">
            <img src={imagen} alt={titulo} className="icono-circular-sostenible" />
            <p className="titulo-icono-sostenible">{titulo}</p>
        </div>
    );
}