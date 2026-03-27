import '../../assets/css/estilo_esencial.css';
import Esencial from '../ESENCIAL/Esencial';

export default function GridEsencial() {
    var elementos = [
        { imagen: "/img/img-esencial/Navidad.jpg",               titulo: "Navidad",                              ruta: "/Navidad" },
        { imagen: "/img/img-esencial/planes_imprescindibles.jpeg",titulo: "10 visitas imprescindibles",           ruta: "/VisitasImprescindibles" },
        { imagen: "/img/img-esencial/tres_dias.jpg",              titulo: "Valencia en 3 días",                  ruta: "/ValenciaTresDias" },
        { imagen: "/img/img-esencial/amurallada.jpg",             titulo: "Valencia la ciudad amurallada",        ruta: "/CiudadAmurallada" },
        { imagen: "/img/img-esencial/patrimonio_humanidad.jpg",   titulo: "Patrimonio de la humanidad",          ruta: "/PatrimonioHumanidad" },
        { imagen: "/img/img-esencial/monumentos_museos.jpg",      titulo: "Monumentos y Museos",                 ruta: "/MonumentosMuseos" },
        { imagen: "/img/img-esencial/MAC.jpg",                    titulo: "Ciudad de las Artes y las Ciencias",  ruta: "/CiudadArteCiencias" },
        { imagen: "/img/img-esencial/VT.jpg",                     titulo: "Visitas y tours",                     ruta: "/VisitasTous" },
        { imagen: "/img/img-esencial/bioparc.jpg",                titulo: "Bioparc",                             ruta: "/Bioparc" },
    ];

    return (
        <>
            <div className="container_esencial">
                <section className="esencial">
                    <div className="esencial_texto">
                        <h2 className="tx1_esencial">Lo esencial para ver en Valencia</h2>
                        <p className="tx2_esencial">Experiencias que te conectan con el auténtico estilo de vida valenciano</p>
                        <div className="hr"></div>
                    </div>
                </section>
            </div>
            <section className="grid-esencial">
                {elementos.map((item, index) => (
                    <Esencial key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}