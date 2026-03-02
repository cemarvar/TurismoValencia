import '../../assets/css/estilo_espacios.css';
import Espacios from '../ESPACIOS/Espacios';

export default function GridEspacios() {
    var elementos = [
        { imagen: "/img/img-espacios/lonja.jpg", titulo: "Lonja de Seda" },
        { imagen: "/img/img-espacios/catedral.jpg", titulo: "Catedral y Santo Cadiz" },
        { imagen: "/img/img-espacios/barri_carmen.jpg", titulo: "Barrio del Carmen" },
        { imagen: "/img/img-espacios/oceanografic.jpg", titulo: "Oceanografic" },
        { imagen: "/img/img-espacios/mercado_central.jpg", titulo: "Mercado Central" },
        { imagen: "/img/img-espacios/bioparc.jpg", titulo: "Bioparc" },
        { imagen: "/img/img-espacios/c_a_c.jpg", titulo: "Ciudad de las Artes y las Ciencias" },
        { imagen: "/img/img-espacios/marina.jpg", titulo: "La Marina" },
        { imagen: "/img/img-espacios/jardi_turia.jpg  ", titulo: "Jardín del Turia" },
        { imagen: "/img/img-espacios/m_b_a.jpg", titulo: "Museo de Bellas Artes" },
        { imagen: "/img/img-espacios/ruzafa.jpg", titulo: "Ruzafa" },
        { imagen: "/img/img-espacios/playas.jpg", titulo: "Playas" },
        { imagen: "/img/img-espacios/albufera.jpg", titulo: "Albufera" },
        { imagen: "/img/img-espacios/iglesia_nicolas.png", titulo: "Iglesia de san Nicolas" },
        { imagen: "/img/img-espacios/mestalla.jpg", titulo: "Mestalla" }
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
                    <Espacios key={index} imagen={item.imagen} titulo={item.titulo} />
                ))}
            </section>
        </>
    );
}
