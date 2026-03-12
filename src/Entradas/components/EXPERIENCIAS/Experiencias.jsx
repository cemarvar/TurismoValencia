export default function Experiencias({ imagen, titulo })
{
    return(
        <div className="icono-experiencias">
            <img src={imagen} alt={titulo} className="icono-circular-experiencias" />
            <p className="titulo-icono-experiencias">{titulo}</p>
        </div>
    );
}
