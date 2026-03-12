import '../../assets/css/estilo_experiencias.css';
import Experiencias from '../EXPERIENCIAS/Experiencias';

export default function GridExperiencias() {
    var elementos = [
        { imagen: "/img/img-experiencias/excursiones.jpg", titulo: " Excursiones" },
        { imagen: "/img/img-experiencias/act-gastronomicas.jpg", titulo: "Actividades Gastrónomicas" },
        { imagen: "/img/img-experiencias/nauticas.jpg", titulo: "Náuticas" }
    ];

    return (
        <>
            <div className="container_experiencias">
                <section className="experiencias">
                    <div className="experiencias_texto">
                        <h2 className="txt1_experiencias"> Experiencias </h2>
                        <div className="hr_experiencias"></div>
                    </div>
                </section>
            </div>
            <section className="grid-experiencias">
                {elementos.map((item, index) => (
                    <Experiencias key={index} imagen={item.imagen} titulo={item.titulo} />
                ))}
            </section>
        </>
    );
}
