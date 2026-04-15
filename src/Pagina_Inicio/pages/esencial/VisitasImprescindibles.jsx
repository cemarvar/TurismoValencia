import { useState } from 'react';
import '../../assets/cssEsencial/VisitasImprescindibles.css';
import Footer from '../../FOOTER/Footer';

var planes = [
  {  
    num: '01',
    region: 'Ciudad de las Artes y las Ciencias',
    titulo: 'El icono futurista de Valencia',
    desc: 'El gran complejo cultural diseñado por Santiago Calatrava en el antiguo cauce del Turia reúne el Oceanogràfic, el Museu de les Ciències y el Hemisfèric, con la pantalla de cine 3D más grande de España.',
    tags: [{ label: 'Desde 10 €' }, { label: 'Todas las edades' }, { label: 'Arquitectura' }, { label: 'Todo el año' }],
    imgClass: 'img-cacvi'
  },
  {
    num: '02',
    region: 'Casco Histórico',
    titulo: 'Plaza de la Virgen, Catedral y Miguelete',
    desc: 'El corazón monumental de Valencia. Junto a la Basílica de los Desamparados y la Catedral se eleva el Miguelete, la torre campanario gótica desde la que se obtienen las mejores vistas del centro histórico.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Panorámicas' }, { label: 'Gótico' }, { label: 'Todo el año' }],
    imgClass: 'img-catedralvi'
  },
  {
    num: '03',
    region: 'Casco Histórico',
    titulo: 'Iglesia de San Nicolás: la Capilla Sixtina valenciana',
    desc: 'Apodada la Capilla Sixtina valenciana, este templo gótico del siglo XIV deslumbra por sus bóvedas cubiertas de frescos barrocos del XVII. Casi 2.000 metros cuadrados de pintura que cortan la respiración.',
    tags: [{ label: '10 €' }, { label: 'Arte' }, { label: 'Barroco' }, { label: 'Reserva previa' }],
    imgClass: 'img-sannicolasvi'
  },
  {
    num: '04',
    region: 'Casco Histórico',
    titulo: 'Lonja de la Seda: Patrimonio de la Humanidad',
    desc: 'Obra cumbre del gótico civil valenciano del siglo XV y declarada Patrimonio de la Humanidad por la UNESCO. Sus esbeltas columnas helicoidales y la luz que filtra por sus ventanales la convierten en uno de los rincones más bellos de la ciudad.',
    tags: [{ label: '2 €' }, { label: 'UNESCO' }, { label: 'Gótico civil' }, { label: 'Todo el año' }],
    imgClass: 'img-lonjavi'
  },
  {
    num: '05',
    region: 'Casco Histórico',
    titulo: 'Mercado Central: un templo del modernismo y la gastronomía',
    desc: 'Uno de los mercados de abastos más grandes de Europa, con más de 250 puestos bajo una cúpula modernista de 8.000 m². Declarado Bien de Interés Cultural y escenario ideal para el tradicional esmorzaret valenciano.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Gastronomía' }, { label: 'Modernismo' }, { label: 'Lun–Sáb' }],
    imgClass: 'img-mercadovi'
  },
  {
    num: '06',
    region: 'Casco Histórico',
    titulo: 'Plaza Redonda y torre de Santa Catalina',
    desc: 'Una de las plazas más singulares de España: perfectamente circular y accesible desde cuatro calles distintas. Desde aquí se contempla la torre barroca de Santa Catalina, uno de los campanarios más fotografiados de Valencia.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Fotogénico' }, { label: 'Barroco' }, { label: 'Todo el año' }],
    imgClass: 'img-plazaredondavi'
  },
  {
    num: '07',
    region: 'Casco Histórico',
    titulo: 'Barrio del Carmen y Torres de Serranos',
    desc: 'El barrio medieval más vibrante de Valencia: callejuelas con arte urbano, el IVAM, el Centre del Carme y el Portal de la Valldigna. En sus extremos se alzan las Torres de Serranos y de Quart, únicas puertas que quedan de la ciudad amurallada del siglo XV.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Arte urbano' }, { label: 'Medieval' }, { label: 'Todo el año' }],
    imgClass: 'img-carmenvi'
  },
  {
    num: '08',
    region: 'Jardín del Turia',
    titulo: 'Jardín del Turia: 9 km de parque urbano',
    desc: 'El pulmón verde de Valencia discurre por el antiguo cauce del río durante nueve kilómetros, libre de coches. Puentes históricos, zonas deportivas, el Bioparc y el parque de Gulliver convierten este espacio en un paseo imprescindible a pie o en bici.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Naturaleza' }, { label: 'Bici' }, { label: 'Todo el año' }],
    imgClass: 'img-jturiavi'
  },
  {
    num: '09',
    region: 'Poblados Marítimos',
    titulo: 'El Cabanyal: el alma marinera de Valencia',
    desc: 'Barrio pesquero declarado Conjunto Histórico Protegido, con un modernismo popular único en sus fachadas de azulejos. Bohemio, gastronómico y auténtico: el contrapunto perfecto al centro histórico.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Marinero' }, { label: 'Modernismo' }, { label: 'Todo el año' }],
    imgClass: 'img-cabanyalvi'
  },
  {
    num: '10',
    region: 'L\'Albufera · 10 km del centro',
    titulo: 'Parque Natural de l\'Albufera: paella y atardecer sobre el lago',
    desc: 'Uno de los humedales más importantes de la Península Ibérica, a solo diez kilómetros del centro. Arrozales, dunas vírgenes, bosques de pinos y el gran lago donde descubrir el origen de la paella valenciana a bordo de una barca tradicional albuferenca.',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Naturaleza' }, { label: 'Gastronomía' }, { label: 'Todo el año' }],
    imgClass: 'img-palbuferavi'
  },
];

var filtros = ['Todos', 'Gratuitos', 'Casco histórico', 'Naturaleza', 'Gastronomía', 'Arte', 'Arquitectura', 'Playas'];

var zonas = [
  { nombre: 'Casco Histórico', titulo: 'Monumentos y cultura', count: '6 visitas' },
  { nombre: 'Ciudad de las Artes', titulo: 'Vanguardia y ciencia', count: '1 visita' },
  { nombre: 'Jardín del Turia', titulo: 'Naturaleza urbana', count: '1 visita' },
  { nombre: 'Poblados Marítimos', titulo: 'Mar y gastronomía', count: '2 visitas' }
];

export default function VisitasImprescindibles() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  return (
    <div className="imprescindibles-page">

      {/* Hero */}
      <div className="imp-hero">
        <div className="imp-hero-overlay" />
        <div className="imp-hero-content">
          <div className="imp-eyebrow">Valencia · Guía de viaje · Imprescindibles</div>
          <h1>10 visitas<br />imprescindibles</h1>
          <p>Monumentos declarados Patrimonio de la Humanidad, barrios con siglos de historia, naturaleza mediterránea y la gastronomía más reconocida de España. Todo lo que Valencia tiene que ofrecer.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="imp-intro">
        <p>Valencia es mucho más que Fallas y playas. La capital del Turia atesora un patrimonio monumental extraordinario, desde joyas del gótico civil hasta un complejo futurista que ha redefinido la arquitectura contemporánea española.</p>
        <p>Hemos seleccionado los <strong>10 lugares imprescindibles de Valencia</strong> a partir de las mejores guías de viaje: monumentos UNESCO, espacios naturales protegidos y barrios con una identidad única que ningún visitante debería perderse.</p>
      </div>

      {/* Lista de planes */}
      <div className="imp-routes">
        {planes.map(plan => (
          <div className="imp-route-item" key={plan.num}>
            <div className="imp-route-num">{plan.num}</div>
            <div className="imp-route-text">
              <div className="imp-region">{plan.region}</div>
              <h2>{plan.titulo}</h2>
              <p>{plan.desc}</p>
              <div className="imp-tags">
                {plan.tags.map(t => (
                  <span key={t.label} className={`imp-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>
            <div className="imp-route-img">
              <div className={`imp-route-img-inner ${plan.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="imp-info-box">
        <h3>Consejos prácticos para visitar Valencia</h3>
        <ul className="imp-info-list">
          <li>La València Tourist Card incluye transporte y descuentos en monumentos</li>
          <li>La Lonja de la Seda y San Nicolás requieren reserva previa online</li>
          <li>El Mercado Central cierra los domingos y festivos</li>
          <li>Para la Albufera, toma el bus 24 o 25 desde el centro</li>
          <li>El Miguelete cierra a mediodía: visítalo a primera hora</li>
          <li>El Cabanyal es imprescindible para cenar: reserva con antelación</li>
        </ul>
      </div>

      <Footer />

    </div>
  );
}