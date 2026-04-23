import "../../assets/css/estilo_sostenible.css";
import Sostenible from "../SOSTENIBLE/Sostenible";

export default function GridSostenible() 
{
    var elementos = [
        { imagen: "/img/img-sostenible/muevete.webp",            titulo: "Muévete por valencia ",        ruta: "/MueveteValencia"},
        { imagen: "/img/img-sostenible/ecoturismo.webp",         titulo: "Practica el ecoturismo",       ruta: "/Ecoturismo"},
        { imagen: "/img/img-sostenible/comercio_local.webp",     titulo: "Compra en comercio local",     ruta: "/ComercioLocal"},
        { imagen: "/img/img-sostenible/consejos.webp",           titulo: "Consejos para ir a tu aire",   ruta: "/Consejos" },
        { imagen: "/img/img-sostenible/viaje_sostenible.webp",   titulo: "Haz tu viaje más sostenible",  ruta: "/ViajeSostenible"},
        { imagen: "/img/img-sostenible/viaje_responsable.webp",  titulo: "Haz un viaje responsable",     ruta: "/ViajeResponsable"}
    ];

    return (
        <> 
            <div className="container_sostenible">
                <section className="sostenible"> 
                    <div className="sostenible_texto">
                        <h2 className="tx1_sostenible"> Turismo Sostenible </h2>
                        <p className="tx2_sostenible"> Explora la ciudad de forma sostenible </p>
                        <div className="hr_3"></div> 
                    </div>
                </section>
            </div>
            <section className="grid_sostenible">
                {elementos.map((item, index) => (
                    <Sostenible key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta}/>
                ))}
            </section>
        </>
    );
}