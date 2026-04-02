import { useState } from 'react';
import '../../assets/cssPlanes/Naturaleza.css';
import Footer from '../../FOOTER/Footer';

var espaciosVerdes = [
  {
    num: '01',
    nombre: 'Jardín del Turia',
    tipo: 'Parque urbano · 9 km',
    tipoClass: 'urbano',
    ubicacion: 'De Bioparc a la Ciudad de las Artes · Centro de la ciudad',
    desc: 'El pulmón verde más grande de Valencia: nueve kilómetros de parque lineal en el antiguo cauce del río Turia, sin coches y sin interrupciones. Conecta el Bioparc y el Parque de Cabecera en el oeste con la Ciutat de les Arts i les Ciències en el este. En su recorrido hay zonas deportivas, cafeterías, el Parque Gulliver, el Palau de la Música y numerosos puentes históricos.',
    actividades: [
      { act: 'Ruta en bicicleta', desc: 'Carril bici continuo de 9 km desde el Bioparc hasta la CAC' },
      { act: 'Running y deporte', desc: 'Pistas de atletismo, campos de fútbol y zonas de calistenia en el cauce' },
      { act: 'Parque Gulliver', desc: 'El parque infantil de 70 m integrado en el jardín, de acceso gratuito' },
      { act: 'Paseo histórico', desc: 'Dieciséis puentes de distintas épocas cruzan el jardín de orilla a orilla' },
    ],
    precio: 'Gratuito · Acceso libre todo el año',
    distancia: 'Centro de la ciudad',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: '9 km' }, { label: 'Bici' }, { label: 'Familia' }],
    imgClass: 'img-natuturia',
  },
  {
    num: '02',
    nombre: 'La Huerta Valenciana',
    tipo: 'Paisaje agrícola · Patrimonio cultural',
    tipoClass: 'huerta',
    ubicacion: 'Alrededores de la ciudad · Anillo verde metropolitano',
    desc: 'El paisaje más auténtico y desconocido de Valencia: los campos de naranjos, huertos, barracas tradicionales y acequias históricas que rodean la ciudad desde época árabe. La huerta es la despensa de la cocina valenciana y el origen de la paella. El Anillo Verde Metropolitano recorre este territorio en rutas ciclistas y peatonales señalizadas.',
    actividades: [
      { act: 'Anillo Verde Metropolitano', desc: 'Ruta circular de más de 100 km que rodea Valencia por su corona agrícola' },
      { act: 'Visitas a barracas', desc: 'Las construcciones tradicionales de la huerta valenciana, con tejado de paja' },
      { act: 'Rutas ciclistas', desc: 'Caminos rurales señalizados para descubrir la huerta en bicicleta' },
      { act: 'Gastronomía kilómetro 0', desc: 'Mercados locales y restaurantes que trabajan con producto de la huerta directa' },
    ],
    precio: 'Gratuito · Acceso libre',
    distancia: '10–20 min del centro',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Bici' }, { label: 'Gastronomía' }, { label: 'Tradición' }],
    imgClass: 'img-natuhuerta',
  },
  {
    num: '03',
    nombre: 'Jardín Botánico de Valencia',
    tipo: 'Jardín histórico · Museo vivo',
    tipoClass: 'urbano',
    ubicacion: 'C/ Quart, 80 · Junto al barrio del Carmen',
    desc: 'El jardín universitario más antiguo de España, fundado en 1567, con más de 3.000 especies vegetales de los cinco continentes. Un museo vivo que combina historia, ciencia y naturaleza en pleno centro histórico. Sus invernaderos, el umbráculum y el jardín de cactáceas son los espacios más singulares de este oasis urbano junto al barrio del Carmen.',
    actividades: [
      { act: 'Colección botánica', desc: 'Más de 3.000 especies de los cinco continentes en un jardín histórico' },
      { act: 'Invernaderos tropicales', desc: 'Flora tropical y subtropical en espacios acondicionados' },
      { act: 'Jardín de cactáceas', desc: 'Una de las colecciones de cactus y suculentas más grandes de España' },
      { act: 'Exposiciones temporales', desc: 'Muestras de fotografía y ciencia natural en el edificio central' },
    ],
    precio: 'Desde 3 € · Gratuito con Tourist Card',
    distancia: 'Casco histórico',
    tags: [{ label: 'Historia' }, { label: 'Ciencia' }, { label: 'Centro' }, { label: '+3.000 especies' }],
    imgClass: 'img-natubotanico',
  },
  {
    num: '04',
    nombre: 'Parques y jardines municipales',
    tipo: 'Red de parques urbanos',
    tipoClass: 'urbano',
    ubicacion: 'Varios puntos de la ciudad',
    desc: 'Valencia cuenta con cerca de cinco millones de m² de zonas verdes urbanas, entre los que destacan los Jardines de Viveros (con el anfiteatro al aire libre), el Jardín del Real, el Parque de Cabecera (junto al Bioparc) y el Parque de l\'Exposició. Una red de naturaleza urbana que convierte Valencia en una de las ciudades más verdes del Mediterráneo.',
    actividades: [
      { act: 'Jardines de Viveros', desc: 'El parque con el anfiteatro al aire libre donde se celebran los conciertos del verano' },
      { act: 'Parque de Cabecera', desc: 'Gran parque junto al Bioparc con lago y áreas de descanso al oeste de la ciudad' },
      { act: 'Jardín del Real', desc: 'El jardín histórico del antiguo palacio real, con rosaleda y estanque' },
      { act: 'Ruta de árboles monumentales', desc: 'Itinerario señalizado por los ejemplares más longevos de la ciudad' },
    ],
    precio: 'Gratuito · Acceso libre',
    distancia: 'Toda la ciudad',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Conciertos' }, { label: 'Familia' }, { label: 'Deporte' }],
    imgClass: 'img-natuparques',
  },
];

var parquesNaturales = [
  {
    num: '05',
    nombre: 'Parque Natural de l\'Albufera',
    tipo: 'Parque Natural · Laguna costera',
    tipoClass: 'natural',
    ubicacion: '10 km del centro · Bus 24 y 25',
    desc: 'El humedal más importante de la Comunitat Valenciana y uno de los grandes humedales de la Península. Un lago de agua dulce de 2.800 hectáreas rodeado de arrozales, pinares y dunas, a tan solo diez kilómetros del centro de Valencia. El lugar donde nació la paella valenciana y el destino de miles de aves migratorias. Los atardeceres sobre el lago son únicos.',
    actividades: [
      { act: 'Paseo en barca albuferenca', desc: 'La experiencia más auténtica: recorrer el lago en la barca tradicional de pesca' },
      { act: 'Observación de aves', desc: 'Más de 250 especies de aves, especialmente en época de migración' },
      { act: 'Rutas en bici por la Devesa', desc: 'El bosque de pinos entre el lago y el mar, con senderos señalizados' },
      { act: 'Gastronomía en El Palmar', desc: 'Paella valenciana auténtica en el pueblo pesquero dentro del parque' },
    ],
    precio: 'Acceso gratuito · Barca desde 8 € · Bus con Tourist Card gratis',
    distancia: '10 km del centro',
    tags: [{ label: 'Aves' }, { label: 'Paella' }, { label: 'Barca' }, { label: 'Atardecer' }],
    imgClass: 'img-natualbufera',
  },
  {
    num: '06',
    nombre: 'Parque Natural de la Sierra Calderona',
    tipo: 'Parque Natural · Senderismo',
    tipoClass: 'natural',
    ubicacion: '30 km al norte de Valencia',
    desc: 'Un macizo montañoso de 47.000 hectáreas que se extiende entre las provincias de Valencia y Castellón, a solo treinta kilómetros del centro. Bosques mediterráneos de pinos y encinas, barrancos, miradores y pueblos de montaña como Serra, Náquera y Estivella. El Pico del Garbí, con sus 598 metros, ofrece unas de las mejores vistas de Valencia y el Mediterráneo.',
    actividades: [
      { act: 'Senderismo al Garbí', desc: 'La ruta más popular: 3 h de ida y vuelta con vistas panorámicas al Mediterráneo' },
      { act: 'Rutas MTB', desc: 'Senderos y pistas forestales habilitados para el ciclismo de montaña' },
      { act: 'Pueblos de montaña', desc: 'Serra, Náquera y Estivella: arquitectura rural y gastronomía de interior' },
      { act: 'Escalada deportiva', desc: 'Vías equipadas en distintos sectores de roca calcárea del macizo' },
    ],
    precio: 'Acceso gratuito · Coche o transporte público',
    distancia: '30 km · 30 min en coche',
    tags: [{ label: 'Senderismo' }, { label: 'MTB' }, { label: 'Vistas' }, { label: '30 km' }],
    imgClass: 'img-natucalderona',
  },
  {
    num: '07',
    nombre: 'Parque Natural del Turia',
    tipo: 'Parque Natural · Río · Barranquismo',
    tipoClass: 'natural',
    ubicacion: '25 km al oeste de Valencia',
    desc: 'El río Turia, antes de llegar a Valencia, discurre entre bosques mediterráneos y barrancos de roca calcárea en un parque natural de casi 20.000 hectáreas. Chulilla, con su impresionante puente colgante, y los pueblos de Gestalgar y Bugarra son los destinos más visitados. El barranquismo, la escalada y las rutas de senderismo por el cauce son las actividades estrella.',
    actividades: [
      { act: 'Puente colgante de Chulilla', desc: 'El puente de madera sobre el barranco, uno de los más fotografiados de la provincia' },
      { act: 'Barranquismo', desc: 'Descenso del barranco del Turia con rapeles y pozas de agua cristalina' },
      { act: 'Escalada', desc: 'Chulilla es uno de los destinos de escalada deportiva de referencia de España' },
      { act: 'Senderismo por el cauce', desc: 'Rutas señalizadas que recorren el río entre pozas y vegetación de ribera' },
    ],
    precio: 'Acceso gratuito · Barranquismo con empresa desde 40 €',
    distancia: '25 km · 35 min en coche',
    tags: [{ label: 'Senderismo' }, { label: 'Barranquismo' }, { label: 'Escalada' }, { label: 'Río' }],
    imgClass: 'img-natuparqueturia',
  },
  {
    num: '08',
    nombre: 'Hoces del Cabriel',
    tipo: 'Paraje natural · Aguas turquesas',
    tipoClass: 'natural',
    ubicacion: '100 km al oeste · Comarca Plana de Utiel-Requena',
    desc: 'El tesoro natural más desconocido de la provincia de Valencia: el río Cabriel discurre entre cañones de roca calcárea formando pozas de agua de un turquesa intenso casi inverosímil. Declarado Parque Natural en 2021, el Cabriel es el río con mejor calidad de agua de España. Las rutas de senderismo por sus orillas y el piragüismo son las actividades más demandadas.',
    actividades: [
      { act: 'Senderismo por el cañón', desc: 'Rutas de 2 a 6 horas bordeando las hoces y las pozas del río Cabriel' },
      { act: 'Piragüismo y kayak', desc: 'Descenso del río entre paisajes de película con aguas de color turquesa' },
      { act: 'Baño en pozas naturales', desc: 'Agua cristalina y temperaturas agradables de junio a septiembre' },
      { act: 'Vías verdes y ruta del vino', desc: 'La comarca de Utiel-Requena combina naturaleza y enoturismo de calidad' },
    ],
    precio: 'Acceso gratuito · Kayak desde 25 €',
    distancia: '100 km · 1 h en coche',
    tags: [{ label: 'Pozas' }, { label: 'Kayak' }, { label: 'Baño' }, { label: 'Agua turquesa' }],
    imgClass: 'img-natucabriel',
  },
];

var planesAireLibre = [
  { nombre: 'Playas urbanas y salvajes', desc: 'Casi 20 km de playas con Bandera Azul. Malvarrosa, Cabanyal, Pinedo y El Saler, la playa virgen de dunas a 10 km del centro.', imgClass: 'img-natuplayas', tags: ['Verano', 'Baño'] },
  { nombre: 'Rutas en bicicleta', desc: 'Más de 160 km de carril bici y 40 ciclocalles. La ruta del Jardín del Turia es la más popular; la del Anillo Verde rodea toda la ciudad.', imgClass: 'img-natubici', tags: ['Bici', 'Gratuito'] },
  { nombre: 'Senderismo provincial', desc: 'Rutas cerca de Montanejos, el Salto de Chella y las dehesas de Soneja. Paisajes de interior a menos de una hora de la ciudad.', imgClass: 'img-natusenderismo', tags: ['Senderismo', 'Interior'] },
  { nombre: 'Astroturismo Starlight', desc: 'Varios municipios de la provincia tienen certificación Starlight. Los cielos de Ademuz y Requena son ideales para la observación astronómica.', imgClass: 'img-natuastro', tags: ['Noche', 'Estrellas'] },
  { nombre: 'Deportes de aventura', desc: 'Puenting, escalada, tirolinas y descensos de barranco en enclaves naturales a menos de una hora de Valencia.', imgClass: 'img-natuaventura', tags: ['Aventura', 'Adrenalina'] },
  { nombre: 'Reservas de la Biosfera', desc: 'El Maestrat, el Alto Turia y la Sierra del Negrete son reservas de la biosfera a menos de dos horas que apenas conoce el turismo masivo.', imgClass: 'img-natubiosfera', tags: ['Naturaleza', 'Tranquilidad'] },
];

var filtros = ['Todos', 'Ciudad', 'Parques naturales', 'Aire libre'];

export default function Naturaleza() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  return (
    <div className="nat-page">

      {/* Hero */}
      <div className="nat-hero">
        <div className="nat-hero-overlay" />
        <div className="nat-hero-content">
          <div className="nat-eyebrow">Valencia · Naturaleza · Kilómetros de aire puro</div>
          <h1>Naturaleza<br />en Valencia</h1>
          <p>Cinco millones de m² de zonas verdes urbanas, veinte kilómetros de playa con Bandera Azul y cuatro parques naturales a menos de una hora. La naturaleza de Valencia no tiene límites.</p>
        </div>
        <div className="nat-hero-stats">
          <div className="nat-stat">
            <span className="nat-stat-num">5M m²</span>
            <span className="nat-stat-label">zonas verdes</span>
          </div>
          <div className="nat-stat-sep" />
          <div className="nat-stat">
            <span className="nat-stat-num">20 km</span>
            <span className="nat-stat-label">de playa</span>
          </div>
          <div className="nat-stat-sep" />
          <div className="nat-stat">
            <span className="nat-stat-num">160 km</span>
            <span className="nat-stat-label">carril bici</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="nat-intro">
        <p>Valencia es mucho más que ciudad. La capital del Turia atesora una naturaleza extraordinariamente variada: desde el parque lineal del Jardín del Turia en pleno centro hasta la laguna costera de la Albufera, y desde los bosques de la Sierra Calderona hasta las aguas turquesa del Cabriel. Todo accesible, sin necesidad de alejarse más de una hora.</p>
        <p>Más de <strong>160 kilómetros de carril bici</strong> y una ciudad completamente llana hacen que moverse por la naturaleza de Valencia sea sencillo para cualquier nivel físico y cualquier edad.</p>
      </div>

      {/* Filtros */}
      <div className="nat-filter-bar">
        {filtros.map(f => (
          <button
            key={f}
            className={`nat-pill ${filtroActivo === f ? 'active' : ''}`}
            onClick={() => setFiltroActivo(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Espacios verdes en la ciudad */}
      {(filtroActivo === 'Todos' || filtroActivo === 'Ciudad') && (
        <>
          <div className="nat-section-header">
            <h2>Espacios verdes en la ciudad</h2>
            <p>Naturaleza a pie de calle, gratuita y para todos.</p>
          </div>
          <div className="nat-routes">
            {espaciosVerdes.map(e => (
              <div className="nat-route-item" key={e.num}>
                <div className="nat-route-num">{e.num}</div>
                <div className="nat-route-text">
                  <div className="nat-meta-row">
                    <span className={`nat-tipo-badge ${e.tipoClass}`}>{e.tipo}</span>
                    <span className="nat-distancia">📍 {e.distancia}</span>
                  </div>
                  <h3>{e.nombre}</h3>
                  <p className="nat-desc">{e.desc}</p>
                  <div className="nat-actividades-titulo">Qué hacer</div>
                  <ul className="nat-actividades">
                    {e.actividades.map(a => (
                      <li key={a.act}>
                        <span className="nat-act-nombre">{a.act}:</span>
                        <span className="nat-act-desc"> {a.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="nat-precio-row">
                    <span className="nat-precio-icon">→</span>
                    <span className="nat-precio">{e.precio}</span>
                  </div>
                  <div className="nat-tags">
                    {e.tags.map(t => (
                      <span key={t.label} className={`nat-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                    ))}
                  </div>
                </div>
                <div className="nat-route-img">
                  <div className={`nat-route-img-inner ${e.imgClass}`} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Parques naturales */}
      {(filtroActivo === 'Todos' || filtroActivo === 'Parques naturales') && (
        <>
          <div className="nat-section-header nat-section-header--dark">
            <h2>Parques naturales cercanos</h2>
            <p>Cuatro parajes protegidos a menos de una hora de Valencia.</p>
          </div>
          <div className="nat-routes">
            {parquesNaturales.map(p => (
              <div className="nat-route-item" key={p.num}>
                <div className="nat-route-num">{p.num}</div>
                <div className="nat-route-text">
                  <div className="nat-meta-row">
                    <span className={`nat-tipo-badge ${p.tipoClass}`}>{p.tipo}</span>
                    <span className="nat-distancia">📍 {p.distancia}</span>
                  </div>
                  <h3>{p.nombre}</h3>
                  <p className="nat-desc">{p.desc}</p>
                  <div className="nat-actividades-titulo">Qué hacer</div>
                  <ul className="nat-actividades">
                    {p.actividades.map(a => (
                      <li key={a.act}>
                        <span className="nat-act-nombre">{a.act}:</span>
                        <span className="nat-act-desc"> {a.desc}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="nat-precio-row">
                    <span className="nat-precio-icon">→</span>
                    <span className="nat-precio">{p.precio}</span>
                  </div>
                  <div className="nat-tags">
                    {p.tags.map(t => (
                      <span key={t.label} className={`nat-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                    ))}
                  </div>
                </div>
                <div className="nat-route-img">
                  <div className={`nat-route-img-inner ${p.imgClass}`} />
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Planes al aire libre */}
      {(filtroActivo === 'Todos' || filtroActivo === 'Aire libre') && (
        <div className="nat-planes-section">
          <div className="nat-section-header">
            <h2>Más planes en la naturaleza</h2>
            <p>Playas, senderismo, astroturismo y aventura cerca de Valencia.</p>
          </div>
          <div className="nat-planes-grid">
            {planesAireLibre.map(p => (
              <div className="nat-plan-card" key={p.nombre}>
                <div className={`nat-plan-img ${p.imgClass}`} />
                <div className="nat-plan-body">
                  <div className="nat-plan-nombre">{p.nombre}</div>
                  <p className="nat-plan-desc">{p.desc}</p>
                  <div className="nat-plan-tags">
                    {p.tags.map(t => <span key={t} className="nat-tag">{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info box */}
      <div className="nat-info-box">
        <h3>Consejos para disfrutar de la naturaleza en Valencia</h3>
        <ul className="nat-info-list">
          <li>El <strong>Jardín del Turia y todos los parques municipales</strong> son de acceso libre y gratuito</li>
          <li>El bus 24 y 25 llega a la Albufera desde el centro, <strong>gratuito con Tourist Card</strong></li>
          <li>La playa de El Saler tiene acceso en bus público y es la más natural y tranquila</li>
          <li><strong>160 km de carril bici</strong> permiten moverse por la ciudad y la huerta en bicicleta</li>
          <li>La Sierra Calderona está a 30 min en coche y tiene aparcamiento gratuito en los trailheads</li>
          <li>Las aguas del Cabriel alcanzan su mejor color de <strong>mayo a septiembre</strong></li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}