import '../../assets/css/estilo_gastronomia.css';
import Culinaria from '../CULINARIA/Culinaria';

export default function GridCulinaria() {
    var elementos = [
        { imagen: "/img/img-gastronomia/paella.webp",            titulo: "Paella Valenciana",        ruta: "/Paella" },
        { imagen: "/img/img-gastronomia/fideua.webp",           titulo: "Fideuà",                   ruta: "/Fideua"},
        { imagen: "/img/img-gastronomia/arroz-al-horno.webp",    titulo: "Arroz al horno",           ruta: "/ArrozHorno" },
        { imagen: "/img/img-gastronomia/esgarraet.webp",         titulo: "Esgarraet",                ruta: "/Esgarraet" },
        { imagen: "/img/img-gastronomia/Arroz-negro.webp",       titulo: "Arroz Negro",              ruta: "/ArrozNegro" },
        { imagen: "/img/img-gastronomia/allipebre.webp",         titulo: "All i pebre",              ruta: "/AllPebre" },
        { imagen: "/img/img-gastronomia/bunuelos.webp",          titulo: "Buñuelo de Calabaza",      ruta: "/Buenuelo" },
        { imagen: "/img/img-gastronomia/arroz-senyoret.webp",    titulo: "Arroz del senyoret",       ruta: "/ArrozSenyoret" },
        { imagen: "/img/img-gastronomia/horchata.webp",          titulo: "Horchata",                 ruta: "/Horchata" }
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
                    <Culinaria key={index} imagen={item.imagen} titulo={item.titulo} ruta={item.ruta} />
                ))}
            </section>
        </>
    );
}
