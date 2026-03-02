import "../../assets/css/estilo_planes.css";
import Planes from '../PLANES/Planes';

export default function GridPlanes() 
{
    var elementos = [
        { imagen: "/img/img-planes/espectaculo.jpg", titulo: "Espectaculo" },
        { imagen: "/img/img-planes/familia.jpg", titulo: "En familia" },
        { imagen: "/img/img-planes/naturaleza.jpg", titulo: "Naturaleza" },
        { imagen: "/img/img-planes/tradicionales.jpg", titulo: "Fiestas Tradicionales" },
        { imagen: "/img/img-planes/deporte.jpg", titulo: "Deportes" },
        { imagen: "/img/img-planes/expo.jpg", titulo: "Exposición" }
    ];

    return (
        <> 
            <div className="container_planes">
                <section className="planes"> <div className="planes_texto">
                    <h2 className="tx1_planes"> Planes que alimentan el alma </h2>
                    <p className="tx2_planes"> Conciertos, exposiciones, festividades y experiencias gastronómicas durante todo el año </p>
                    <div className="hr_2"></div> </div>
                </section>
            </div>
            <section className="grid_planes">
                {elementos.map((item, index) => (
                    <Planes key={index} imagen={item.imagen} titulo={item.titulo} />
                ))}
            </section>
        </>
    );
}