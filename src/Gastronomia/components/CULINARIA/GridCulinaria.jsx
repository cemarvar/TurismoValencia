import '../../assets/css/estilo_gastronomia.css';
import Culinaria from '../CULINARIA/Culinaria';

export default function GridCulinaria() {
    var elementos = [
        { imagen: "/img/img-gastronomia/paella.jpg", titulo: "Paella Valenciana" },
        { imagen: "/img/img-gastronomia/fideua.jpeg", titulo: "Fideua" },
        { imagen: "/img/img-gastronomia/arroz-al-horno.jpg", titulo: "Arroz al horno" },
        { imagen: "/img/img-gastronomia/esgarraet.jpg", titulo: "Esgarraet" },
        { imagen: "/img/img-gastronomia/Arroz-negro.jpg", titulo: "Arroz Negro" },
        { imagen: "/img/img-gastronomia/allipebre.jpg", titulo: "All i pebre" },
        { imagen: "/img/img-gastronomia/bunuelos.jpg", titulo: "Buñuelo de Calabaza" },
        { imagen: "/img/img-gastronomia/arroz-senyoret.jpg", titulo: "Arroz del senyoret" },
        { imagen: "/img/img-gastronomia/horchata.jpg", titulo: "Horchata" }
    ];

    return (
        <>
            <div className="container_culinaria">
                <section className="culinaria">
                    <div className="culinaria_texto">
                        <h2 className="txt1_culinaria"> Tradición culinaria </h2>
                        <p className="txt2_culinaria"> Una experiencia gastronómica para todos los sentidos  </p>
                        <div className="hr_culinaria"></div>
                    </div>
                </section>
            </div>
            <section className="grid-culinaria">
                {elementos.map((item, index) => (
                    <Culinaria key={index} imagen={item.imagen} titulo={item.titulo} />
                ))}
            </section>
        </>
    );
}
