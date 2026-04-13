import '../../assets/css/estilo_eventos.css';
import Destacados from '../DESTACADOS/Destacados';

export default function GridDestacados() {
    var elementos = [
    { imagen: "/img/img-eventos/valencia-festivos.jpg",         titulo: "Festivos",                   ruta: "/Festivos"  },
        { imagen: "/img/img-eventos/fallas.jpg",                titulo: "Fallas",                     ruta: "/Fallas"  },
        { imagen: "/img/img-eventos/deportes.jpg",              titulo: "Deportes",                   ruta: "/Deportes"  },
        { imagen: "/img/img-eventos/feria.jpeg",                titulo: "Gran Feria de Valencia",     ruta: "/GranFeria"  },
        { imagen: "/img/img-eventos/festivales.jpg",            titulo: "Festivales de Verano",       ruta: "/FestivalesVerano"  },
    { imagen: "/img/img-eventos/corpus.jpg",                    titulo: "Corpus Christi",             ruta: "/GranFeria"  }
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
