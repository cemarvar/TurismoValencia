import '../../assets/css/estilo_alojamientos.css';
import Estancia from '..//ALOJAMIENTOS/Estancia';

export default function GridEstancia() {
    var elementos = [
        { imagen: "/img/img-alojamientos/centro.jpg",           titulo: "Centro",                                   ruta: "/Centro" },
        { imagen: "/img/img-alojamientos/artes-ciencias.jpg",   titulo: "Ciudad de las Artes y las Ciencias",       ruta: "/CiudadArtesCienciasAloj" },
        { imagen: "/img/img-alojamientos/ruzafa.jpg",           titulo: "Barrio Ruzafa",                            ruta: "/BarrioRuzada" },
        { imagen: "/img/img-alojamientos/gran-via.jpg",         titulo: "Barrio Gran Vía",                          ruta: "/BarrioGranVia" },
        { imagen: "/img/img-alojamientos/arenas.jpg",           titulo: "Zona de playa y Paseo Marítimo",           ruta: "/ZonaPlayaPaseoMaritimo" },
        { imagen: "/img/img-alojamientos/alojamiento.jpg",      titulo: "Alojamiento Barato y Exclusivo",          ruta: "/BaratoExclusivo" }
    ];

    return (
        <>
            <div className="container_estancia">
                <section className="estancia">
                    <div className="estancia_texto">
                        <h2 className="txt1_estancia"> Opciones de alojamiento </h2>
                        <p className="txt2_estancia"> Te proponemos alojamientos recomendados para todos los gustos  </p>
                        <div className="hr_estancia"></div>
                    </div>
                </section>
            </div>
            <section className="grid-estancia">
                {elementos.map((item, index) => (
                    <Estancia key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
