import '../../assets/css/estilo_espacios.css';
import Espacios from '../ESPACIOS/Espacios';

export default function GridEspacios() {
    var elementos = [
        { imagen: "/img/img-espacios/lonja.jpg",            titulo: "Lonja de Seda",                        ruta: "/LonjaSeda" },
        { imagen: "/img/img-espacios/catedral.jpg",         titulo: "Catedral y Santo Cadiz",               ruta: "/CatedralCaliz"  },
        { imagen: "/img/img-espacios/barri_carmen.jpg",     titulo: "Barrio del Carmen",                    ruta: "/BarrioCarmen"  },
        { imagen: "/img/img-espacios/oceanografic.jpg",     titulo: "Oceanografic",                         ruta: "/Oceanografic"  },
        { imagen: "/img/img-espacios/mercado_central.jpg",  titulo: "Mercado Central",                      ruta: "/MercadoCentral"  },
        { imagen: "/img/img-espacios/bioparc.jpg",          titulo: "Bioparc",                              ruta: "/Bioparc"  },
        { imagen: "/img/img-espacios/c_a_c.jpg",            titulo: "Ciudad de las Artes y las Ciencias",   ruta: "/CAC"  },
        { imagen: "/img/img-espacios/marina.jpg",           titulo: "La Marina",                            ruta: "/LaMarina"  },
        { imagen: "/img/img-espacios/jardi_turia.jpg  ",    titulo: "Jardín del Turia",                     ruta: "/JardinTuria"  },
        { imagen: "/img/img-espacios/m_b_a.jpg",            titulo: "Museo de Bellas Artes",                ruta: "/MuseoBellasArtes"  },
        { imagen: "/img/img-espacios/ruzafa.jpg",           titulo: "Ruzafa",                               ruta: "/Ruzafa"  },
        { imagen: "/img/img-espacios/playas.jpg",           titulo: "Playas",                               ruta: "/Playes"  },
        { imagen: "/img/img-espacios/albufera.jpg",         titulo: "Albufera",                             ruta: "/Albufera"  },
        { imagen: "/img/img-espacios/iglesia_nicolas.png",  titulo: "Iglesia de San Nicolás",               ruta: "/IglesiaSanNicolas"  },
        { imagen: "/img/img-espacios/mestalla.jpg",         titulo: "Mestalla",                             ruta: "/Mestalla"  }
    ];

    return (
        <>
            <div className="container_espacios">
                <section className="espacios">
                    <div className="espacios_texto">
                        <h2 className="txt1_espacios"> Espacios únicos </h2>
                        <p className="txt2_espacios"> Estos son los lugares esenciales para visitar en València </p>
                        <div className="hr_espacios"></div>
                    </div>
                </section>
            </div>
            <section className="grid-espacios">
                {elementos.map((item, index) => (
                    <Espacios key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
