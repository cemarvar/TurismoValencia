import '../../assets/css/estilo_eventos.css';
import Destacados from '../DESTACADOS/Destacados';

export default function GridDestacados() {
    var elementos = [
    { imagen: "/img/img-eventos/valencia-festivos.webp",         titulo: "Festivos",                   ruta: "/Festivos"  },
        { imagen: "/img/img-eventos/fallas.webp",                titulo: "Fallas",                     ruta: "/Fallas"  },
        { imagen: "/img/img-eventos/deportes.webp",              titulo: "Deportes",                   ruta: "/Deportes"  },
        { imagen: "/img/img-eventos/feria.webp",                titulo: "Gran Feria de Valencia",     ruta: "/GranFeria"  },
        { imagen: "/img/img-eventos/festivales.webp",            titulo: "Festivales de Verano",       ruta: "/FestivalesVerano"  },
    { imagen: "/img/img-eventos/corpus.webp",                    titulo: "Corpus Christi",             ruta: "/CorpusChristi"  }
    ];

    return (
        <>
            <div className="container_destacados">
                <section className="destacados">
                    <div className="destacados_texto">
                        <h2 className="txt1_destacados"> Eventos destacados </h2>
                        <p className="txt2_destacados"> Estos son los eventos valencianos que llenan el corazón  </p>
                        <div className="hr_destacados"></div>
                    </div>
                </section>
            </div>
            <section className="grid-destacados">
                {elementos.map((item, index) => (
                    <Destacados key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
