import "../../assets/css/estilo_sostenible.css";
import Sostenible from "../SOSTENIBLE/Sostenible";

export default function GridSostenible() 
{
    var elementos = [
        { imagen: "/img/img-sostenible/muevete.jpg", titulo: "Muevete por valencia " },
        { imagen: "/img/img-sostenible/ecoturismo.jpg", titulo: "Practica el ecoturismo" },
        { imagen: "/img/img-sostenible/comercio_local.jpg", titulo: "Compra en comercio local" },
        { imagen: "/img/img-sostenible/consejos.jpg", titulo: "Consejos para ir a tu aire" },
        { imagen: "/img/img-sostenible/viaje_sostenible.jpg", titulo: "Haz tu viaje más sostenible" },
        { imagen: "/img/img-sostenible/viaje_responsable.jpg", titulo: "Haz un viaje responsable" }
    ];

    return (
        <> 
            <div className="container_sostenible">
                <section className="sostenible"> <div className="sostenible_texto">
                    <h2 className="tx1_sostenible"> Turismo Sostenible </h2>
                    <p className="tx2_sostenible"> Explora la ciudad de forma sostenible </p>
                    <div className="hr_3"></div> </div>
                </section>
            </div>
            <section className="grid_sostenible">
                {elementos.map((item, index) => (
                    <Sostenible key={index} imagen={item.imagen} titulo={item.titulo} />
                ))}
            </section>
        </>
    );
}