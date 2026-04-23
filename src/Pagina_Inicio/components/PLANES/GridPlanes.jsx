import "../../assets/css/estilo_planes.css";
import Planes from '../PLANES/Planes';

export default function GridPlanes() 
{
    var elementos = [
        { imagen: "/img/img-planes/espectaculo.webp",    titulo: "Espectáculo",           ruta: "/Espectaculo"},
        { imagen: "/img/img-planes/familia.webp",        titulo: "En familia" ,           ruta: "/Familia"},
        { imagen: "/img/img-planes/naturaleza.webp",     titulo: "Naturaleza" ,           ruta: "/Naturaleza"},
        { imagen: "/img/img-planes/tradicionales.webp",  titulo: "Fiestas Tradicionales", ruta: "/FiestasTradicionales"},
        { imagen: "/img/img-planes/deporte.webp",        titulo: "Deportes",              ruta: "/Deportes"},
        { imagen: "/img/img-planes/expo.webp",           titulo: "Exposición",            ruta: "/Exposicion"}
    ];

    return (
        <> 
            <div className="container_planes">
                <section className="planes"> 
                    <div className="planes_texto">
                        <h2 className="tx1_planes"> Planes que alimentan el alma </h2>
                        <p className="tx2_planes"> Conciertos, exposiciones, festividades y experiencias gastronómicas durante todo el año </p>
                        <div className="hr_2"></div> 
                    </div>
                </section>
            </div>
            <section className="grid_planes">
                {elementos.map((item, index) => (
                    <Planes key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}