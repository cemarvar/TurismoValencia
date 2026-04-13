import '../../assets/css/estilo_entradas.css';
import Ticket from '../ENTRADAS/Ticket';

export default function GridTicket() {
    var elementos = [
        { imagen: "/img/img-entradas/tourist-card.jpg",                 titulo: "València Card",                            ruta: "/ValenciaCard" },
        { imagen: "/img/img-entradas/artes-ciencias-entradas.jpg",      titulo: "Ciudad de las Artes y las Ciencias",       ruta: "/CAC" },
        { imagen: "/img/img-entradas/espectaculos.jpeg",                titulo: "Espectaculos",                             ruta: "/Espectaculo" },
        { imagen: "/img/img-entradas/bioparc.jpg",                      titulo: "Bioparc",                                  ruta: "/Bioparc" },
        { imagen: "/img/img-entradas/bus-turistic.jpg",                 titulo: "Bus Turístico",                            ruta: "/BusTuristico" },
        { imagen: "/img/img-entradas/museo.jpg",                        titulo: "Museos y Monumentos",                      ruta: "/MonumentosMuseos" }
    ];

    return (
        <>
            <div className="container_ticket">
                <section className="ticket">
                    <div className="ticket_texto">
                        <h2 className="txt1_ticket"> Entradas </h2>
                        <div className="hr_ticket"></div>
                    </div>
                </section>
            </div>
            <section className="grid-ticket">
                {elementos.map((item, index) => (
                    <Ticket key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
