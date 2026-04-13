import { useState } from 'react';
import '../../assets/cssEsencial/Navidad.css';
import Footer from '../../FOOTER/Footer';

var planes = [
  {
    num: '01',
    region: 'Plaza del Ayuntamiento',
    titulo: 'El gran árbol de Navidad y el mercado tradicional',
    desc: 'El corazón de la Navidad valenciana. El árbol monumental ilumina la plaza junto a decenas de puestos con artesanía, turrones, figuritas de belén y productos típicos de temporada.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Todas las edades' }, { label: 'Mercado' }, { label: 'Dic–Ene' }],
    imgClass: 'img-navidad'
  },
  {
    num: '02',
    region: 'Jardín del Turia',
    titulo: 'Ruta de las luces: Valencia iluminada',
    desc: 'Más de 800.000 luces adornan las calles del centro histórico. Un paseo nocturno por Colón, Paz y Xàtiva para disfrutar del espectáculo de luz y color en familia.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Familia' }, { label: 'Nocturno' }, { label: 'Todo diciembre' }],
    imgClass: 'img-luces'
  },
  {
    num: '03',
    region: 'Ciudad de las Artes y las Ciencias',
    titulo: 'Belén monumental y exposición de ciencia navideña',
    desc: 'El Museu de les Ciències acoge cada año un belén de grandes dimensiones y una exposición interactiva sobre los fenómenos físicos detrás de la magia navideña.',
    tags: [{ label: '5 €' }, { label: '4–14 años' }, { label: 'Exposición' }, { label: 'Sáb–Dom' }],
    imgClass: 'img-museum'
  },
  {
    num: '04',
    region: 'Bioparc Valencia',
    titulo: 'Navidad en el Bioparc: Safari de Papá Noel',
    desc: 'Los animales del Bioparc se visten de fiesta. Papá Noel recorre el parque en un safari especial, los niños pueden entregarle su carta y participar en talleres de animales.',
    tags: [{ label: '18 €' }, { label: '2–10 años' }, { label: 'Animales' }, { label: 'Fines de semana' }],
    imgClass: 'img-bionavidad'
  },
  {
    num: '05',
    region: 'Mercado Central',
    titulo: 'Taller de turrones y dulces navideños valencianos',
    desc: 'Aprende a elaborar turrones de Xixona, peladillas y mantecados con maestros artesanos del Mercado Central. Una experiencia gastronómica para llevarse el sabor de la Navidad a casa.',
    tags: [{ label: '12 €' }, { label: '8+ años' }, { label: 'Gastronomía' }, { label: 'Jueves–Sábado' }],
    imgClass: 'img-food'
  },
  {
    num: '06',
    region: 'Palau de la Música',
    titulo: 'Concierto de Navidad: Coral Infantil de Valencia',
    desc: 'La Coral Infantil de la Generalitat Valenciana ofrece su concierto anual de Navidad con villancicos tradicionales y piezas clásicas en el emblemático Palau de la Música.',
    tags: [{ label: '8 €' }, { label: 'Todas las edades' }, { label: 'Música' }, { label: '22 Dic' }],
    imgClass: 'img-musica'
  },
];

var filtros = ['Todos', 'Gratuitos', 'Con niños', 'Gastronomía', 'Música', 'Mercados', 'Luces', 'Deportes'];

var fechas = [
  { rango: '1 — 7 Dic', titulo: 'Encendido de luces', count: '12 eventos' },
  { rango: '8 — 22 Dic', titulo: 'Mercados y talleres', count: '31 eventos' },
  { rango: '23 — 26 Dic', titulo: 'Navidad y Belenes', count: '18 eventos' },
  { rango: '31 Dic — 6 Ene', titulo: 'Fin de año y Reyes', count: '24 eventos' }
];



export default function Navidad() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  return (
    <div className="navidad-page">

      {/* Breadcrumb */}

      {/* Hero */}
      <div className="nv-hero">
        
        <div className="nv-hero-overlay" />
        <div className="nv-hero-content">
          <div className="nv-eyebrow">Navidad · Valencia · Diciembre 2025</div>
          <h1>La Navidad<br />más luminosa</h1>
          <p>Mercados, belenes, conciertos y miles de luces. Descubre todo lo que Valencia tiene preparado para las fiestas.</p>
        </div>
        <div className="nv-hero-deco"></div>
      </div>

      {/* Intro */}
      <div className="nv-intro">
        <p>Valencia vive la Navidad con una mezcla única de tradición mediterránea y espectáculo visual. Las calles del centro se transforman en un circuito de luz, los mercados huelen a turrón y naranja, y la ciudad entera invita a pasear y celebrar.</p>
        <p>Hemos reunido los <strong>mejores planes navideños de Valencia</strong>, desde actividades gratuitas en familia hasta experiencias gastronómicas únicas y conciertos imprescindibles.</p>
      </div>


      {/* Lista de planes */}
      <div className="nv-routes">
        {planes.map(plan => (
          <div className="nv-route-item" key={plan.num}>
            <div className="nv-route-num">{plan.num}</div>
            <div className="nv-route-text">
              <div className="nv-region">{plan.region}</div>
              <h2>{plan.titulo}</h2>
              <p>{plan.desc}</p>
              <div className="nv-tags">
                {plan.tags.map(t => (
                  <span key={t.label} className={`nv-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>
            <div className="nv-route-img">
              <div className={`nv-route-img-inner ${plan.imgClass}`}>{plan.emoji}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="nv-info-box">
        <h3>Consejos para la Navidad en Valencia</h3>
        <ul className="nv-info-list">
          <li>El encendido de luces es el 28 de noviembre</li>
          <li>Los mercados abren de 10:00 a 21:00 h</li>
          <li>Reserva los talleres con antelación, se llenan rápido</li>
          <li>La cabalgata de Reyes es el 5 de enero</li>
          <li>El transporte público es gratuito en Nochebuena</li>
          <li>El tiempo en diciembre es suave, entre 10 y 17 °C</li>
        </ul>
      </div>

      <Footer />



    </div>
  );
}