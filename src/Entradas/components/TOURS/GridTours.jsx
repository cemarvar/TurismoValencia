import '../../assets/css/estilo_tours.css';
import Tours from '../TOURS/Tours';

export default function GridTours() {
    var elementos = [
        { imagen: "/img/img-tours/centro.webp",              titulo: "Centro Histórico",                            ruta: "/CentroHistorico"  },
        { imagen: "/img/img-tours/arts-ciencies.webp",       titulo: "Ciudad de las Artes y las Ciencias",          ruta: "/CienciasArtes"  },
        { imagen: "/img/img-tours/bici.webp",                titulo: "Bici",                                        ruta: "/Bici"  },
        { imagen: "/img/img-tours/grup.webp",                titulo: "Privados o en grupo",                         ruta: "/PrivadoGrupo"  },
        { imagen: "/img/img-tours/paseo.webp",               titulo: "Zona de playa y Paseo Marítimo",              ruta: "/PaseoMaritimo"  },
        { imagen: "/img/img-tours/mestalla.webp",            titulo: "Mestalla",                                    ruta: "/Mestalla"  }
    ];

    return (
        <>
            <div className="container_tours">
                <section className="tours">
                    <div className="tours_texto">
                        <h2 className="txt1_tours"> Tours </h2>
                        <div className="hr_tours"></div>
                    </div>
                </section>
            </div>
            <section className="grid-tours">
                {elementos.map((item, index) => (
                    <Tours key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
