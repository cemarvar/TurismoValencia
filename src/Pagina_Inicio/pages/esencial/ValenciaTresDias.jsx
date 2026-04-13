import { useState } from 'react';
import '../../assets/cssEsencial/ValenciaTresDias.css';
import Footer from '../../FOOTER/Footer';

var dias = [
  {
    num: '01',
    dia: 'Día 1',
    zona: 'Centro Histórico',
    titulo: 'Patrimonio, mercados y barrio del Carmen',
    desc: 'El casco antiguo de Valencia concentra siglos de historia en un laberinto de calles y plazas. Desde la Catedral y el Santo Cáliz hasta la Lonja de la Seda declarada Patrimonio de la Humanidad, pasando por el bullicio modernista del Mercado Central y el ambiente bohemio del barrio del Carmen.',
    lugares: [
      { nombre: 'Catedral y Miguelete', detalle: 'Sube los 207 escalones para las mejores vistas del casco histórico' },
      { nombre: 'Plaza de la Virgen y Plaza de la Reina', detalle: 'Corazón simbólico de la ciudad, escenario de la ofrenda floral de las Fallas' },
      { nombre: 'Iglesia de San Nicolás', detalle: 'La Capilla Sixtina valenciana: casi 2.000 m² de frescos barrocos en sus bóvedas' },
      { nombre: 'Lonja de la Seda', detalle: 'Obra maestra del gótico civil, Patrimonio de la Humanidad desde 1996' },
      { nombre: 'Mercado Central', detalle: 'Más de 250 puestos bajo una cúpula modernista de principios del siglo XX' },
      { nombre: 'Barrio del Carmen', detalle: 'Arte urbano, el IVAM, el Centre del Carme y las Torres de Serranos al final del paseo' },
    ],
    tags: [{ label: 'A pie', type: 'highlight' }, { label: 'Patrimonio UNESCO' }, { label: 'Gastronomía' }, { label: 'Cultura' }],
    imgClass: 'img-dia1',
    consejo: 'Empieza temprano en la Catedral antes de que lleguen los grupos. El Mercado Central cierra a las 15:00 h: úsalo para un esmorzaret a media mañana.',
  },
  {
    num: '02',
    dia: 'Día 2',
    zona: 'Albufera · Bioparc · Poblados Marítimos',
    titulo: 'Naturaleza, paella y la Valencia más vanguardista',
    desc: 'Una mañana en el Parque Natural de l\'Albufera para descubrir el origen de la paella valenciana a bordo de una barca tradicional, y una tarde entre el Bioparc y la Marina, con los mejores atardeceres mediterráneos desde la playa de la Malvarrosa.',
    lugares: [
      { nombre: 'Parque Natural de l\'Albufera', detalle: 'A 10 km del centro: arrozales, lago, fauna y paseo en barca albuferenca' },
      { nombre: 'El Palmar', detalle: 'Pedanía pesquera donde probar la auténtica paella valenciana en su lugar de origen' },
      { nombre: 'Bioparc Valencia', detalle: 'Inmersión en la sabana africana con más de 4.000 animales de 160 especies' },
      { nombre: 'El Cabanyal', detalle: 'Barrio marinero con modernismo popular, azulejos únicos y gastronomía emergente' },
      { nombre: 'Playa de la Malvarrosa', detalle: 'Más de 2 km de arena dorada con restaurantes en primera línea de mar' },
      { nombre: 'Marina de València y Veles e Vents', detalle: 'El edificio de David Chipperfield y el mejor atardecer con el Mediterráneo de fondo' },
    ],
    tags: [{ label: 'Naturaleza' }, { label: 'Paella' }, { label: 'Playa' }, { label: 'Atardecer' }],
    imgClass: 'img-dia2',
    consejo: 'Para la Albufera toma el bus 24 o 25 desde el centro (incluido en la València Tourist Card). Reserva mesa en El Palmar con antelación los fines de semana.',
  },
  {
    num: '03',
    dia: 'Día 3',
    zona: 'Jardín del Turia · Ciutat de les Arts i les Ciències',
    titulo: 'El futuro a orillas del río',
    desc: 'El antiguo cauce del río Turia, transformado en 9 kilómetros de parque urbano sin coches, conecta el corazón de la ciudad con el skyline más icónico de Valencia: la Ciutat de les Arts i les Ciències, diseñada por Santiago Calatrava, con el Oceanogràfic, el Museu de les Ciències y el Hemisfèric.',
    lugares: [
      { nombre: 'Jardín del Turia', detalle: '9 km de parque lineal: ideal a pie o en bici, con el Bioparc en un extremo y la CAC en el otro' },
      { nombre: 'Museu de les Ciències Príncipe Felipe', detalle: 'Ciencia interactiva en un edificio que parece el esqueleto de un animal prehistórico' },
      { nombre: 'Oceanogràfic', detalle: 'El acuario más grande de Europa: más de 500 especies del Mediterráneo y otros mares' },
      { nombre: 'Hemisfèric', detalle: 'La pantalla cóncava de cine 3D más grande de España, con 900 m² de proyección' },
      { nombre: 'Umbracle y Palau de les Arts', detalle: 'El jardín de las esculturas y el gran coliseo de ópera que cierra el complejo' },
    ],
    tags: [{ label: 'Bici' }, { label: 'Arquitectura' }, { label: 'Ciencia' }, { label: 'Familia' }],
    imgClass: 'img-dia3',
    consejo: 'Compra las entradas de la CAC online para evitar colas. Si vas en bici desde el centro, el trayecto por el Jardín del Turia hasta la CAC son unos 35 minutos sin esfuerzo.',
  },
];

var consejosPracticos = [
  'La València Tourist Card incluye transporte ilimitado y descuentos en monumentos',
  'El bus 24 y 25 llega a la Albufera: actívalo con la Tourist Card',
  'El Mercado Central cierra a las 15:00 h y los domingos no abre',
  'San Nicolás y la Lonja requieren reserva online con antelación',
  'El Jardín del Turia es el eje verde que une los tres días del itinerario',
  'La València Tourist Card tiene formato de 24, 48 y 72 horas',
];

export default function ValenciaTresDias() {
  const [diaActivo, setDiaActivo] = useState(null);

  return (
    <div className="vtd-page">

      {/* Hero */}
      <div className="vtd-hero">
        <div className="vtd-hero-overlay" />
        <div className="vtd-hero-content">
          <div className="vtd-eyebrow">Valencia · Itinerario · 3 días</div>
          <h1>Valencia<br />en 3 días</h1>
          <p>El itinerario definitivo para descubrir lo mejor de la ciudad del Turia: casco histórico, Albufera, playas y la Ciutat de les Arts i les Ciències.</p>
        </div>
        <div className="vtd-dias-badge">
          <span>72</span>
          <small>horas</small>
        </div>
      </div>

      {/* Intro */}
      <div className="vtd-intro">
        <p>Tres días son suficientes para descubrir la esencia de Valencia: su rico patrimonio medieval, los paisajes del parque natural de la Albufera, las playas urbanas del Mediterráneo y el espectacular complejo arquitectónico de la Ciutat de les Arts i les Ciències.</p>
        <p>Este itinerario, diseñado a partir de las guías oficiales de Visit València y Turisme Comunitat Valenciana, organiza cada jornada para que aproveches al máximo el tiempo sin renunciar a nada imprescindible.</p>
      </div>

      {/* Itinerario por días */}
      <div className="vtd-routes">
        {dias.map(dia => (
          <div className="vtd-route-item" key={dia.num}>
            <div className="vtd-route-num">{dia.num}</div>
            <div className="vtd-route-text">
              <div className="vtd-dia-label">{dia.dia}</div>
              <div className="vtd-region">{dia.zona}</div>
              <h2>{dia.titulo}</h2>
              <p>{dia.desc}</p>

              <ul className="vtd-lugares">
                {dia.lugares.map(l => (
                  <li key={l.nombre}>
                    <span className="vtd-lugar-nombre">{l.nombre}</span>
                    <span className="vtd-lugar-detalle">{l.detalle}</span>
                  </li>
                ))}
              </ul>

              <div className="vtd-consejo">
                <span className="vtd-consejo-icon">→</span>
                {dia.consejo}
              </div>

              <div className="vtd-tags">
                {dia.tags.map(t => (
                  <span key={t.label} className={`vtd-tag ${t.type === 'highlight' ? 'highlight' : ''}`}>{t.label}</span>
                ))}
              </div>

            </div>
            <div className="vtd-route-img">
              <div className={`vtd-route-img-inner ${dia.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="vtd-info-box">
        <h3>Consejos prácticos para el itinerario</h3>
        <ul className="vtd-info-list">
          {consejosPracticos.map(c => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>

      <Footer />

    </div>
  );
}