import { useState } from 'react';
import '../../assets/cssPlanes/Espectaculo.css';
import Footer from '../../FOOTER/Footer';

var venues = [
  {
    num: '01',
    nombre: 'Palau de les Arts Reina Sofía',
    tipo: 'Ópera · Ballet · Conciertos sinfónicos',
    tipoClass: 'opera',
    ubicacion: 'Av. del Professor López Piñero, 1 · Ciudad de las Artes y las Ciencias',
    desc: 'El gran coliseo de las artes escénicas de Valencia, diseñado por Santiago Calatrava. Con más de 40.000 m² y cuatro salas de distinta capacidad, alberga ópera, ballet, conciertos sinfónicos, flamenco, danza contemporánea y lied. Su temporada se extiende de septiembre a julio con artistas y compañías de primer nivel internacional.',
    programacion: [
      { cat: 'Ópera', desc: 'Producciones de gran formato con directores y voces de talla mundial' },
      { cat: 'Ballet y danza', desc: 'Compañías internacionales y el ciclo "Viernes de Danza"' },
      { cat: 'Sinfónico', desc: 'Ciclos con la Orquestra de la Comunitat Valenciana' },
      { cat: 'Flamenco y lied', desc: 'Ciclos propios de música de cámara y artes escénicas diversas' },
    ],
    precio: 'Desde 6 € · Según producción',
    horario: 'Temporada sept–julio · Consultar programación en lesarts.com',
    tags: [{ label: 'Ópera' }, { label: 'Ballet' }, { label: 'Sinfónico' }, { label: 'Calatrava' }],
    imgClass: 'img-parf',
    web: 'lesarts.com',
  },
  {
    num: '02',
    nombre: 'Palau de la Música de Valencia',
    tipo: 'Música clásica · Conciertos · Ciclos',
    tipoClass: 'musica',
    ubicacion: 'Passeig de l\'Albereda, 30 · Jardín del Turia',
    desc: 'El auditorio de referencia para la música clásica en Valencia, situado a orillas del Jardín del Turia. Sede de la Orquesta de Valencia y de numerosos ciclos de temporada que abarcan desde la música de cámara hasta los grandes conciertos corales. Su programación incluye el Ciclo de Cámara, el Ciclo Sinfónico y el Ciclo de Piano, entre otros.',
    programacion: [
      { cat: 'Ciclo Sinfónico', desc: 'Grandes conciertos con la Orquesta de Valencia y orquestas invitadas' },
      { cat: 'Ciclo de Cámara', desc: 'Música de cámara con cuartetos y solistas de renombre internacional' },
      { cat: 'Ciclo de Piano', desc: 'Recitales de los pianistas más destacados del panorama actual' },
      { cat: 'Conciertos de Navidad', desc: 'La Coral Infantil de la Generalitat y el gran concierto navideño' },
    ],
    precio: 'Desde 8 € · Abonos de temporada disponibles',
    horario: 'Temporada oct–junio · Consultar en palaudevalencia.com',
    tags: [{ label: 'Clásica' }, { label: 'Orquesta' }, { label: 'Piano' }, { label: 'Abonos' }],
    imgClass: 'img-palaumusica',
    web: 'palaudevalencia.com',
  },
  {
    num: '03',
    nombre: 'Teatro Olympia',
    tipo: 'Musicales · Teatro · Monólogos',
    tipoClass: 'teatro',
    ubicacion: 'Carrer de Sant Vicent Màrtir, 44 · Centro histórico',
    desc: 'Con más de 100 años de historia, el Teatro Olympia es el coliseo del entretenimiento popular en Valencia. Su amplia programación combina grandes musicales en español, teatro clásico y contemporáneo, monólogos de humor y espectáculos en familia. El acceso a la platea es posible mediante rampas para usuarios de movilidad reducida.',
    programacion: [
      { cat: 'Grandes musicales', desc: 'Mamma Mia, Tootsie, La Bella Durmiente y producciones de Broadway en español' },
      { cat: 'Teatro clásico', desc: 'Obras del repertorio con compañías de primer nivel nacional' },
      { cat: 'Monólogos y humor', desc: 'Los mejores cómicos del panorama español en directo' },
      { cat: 'En familia', desc: 'Espectáculos para todas las edades, especialmente en Navidad' },
    ],
    precio: 'Desde 18 € · Según espectáculo',
    horario: 'Programación todo el año · teatro-olympia.com',
    tags: [{ label: 'Musicales' }, { label: 'Teatro' }, { label: 'Humor' }, { label: '+100 años' }],
    imgClass: 'img-olympia',
    web: 'teatro-olympia.com',
  },
  {
    num: '04',
    nombre: 'Teatre Talia',
    tipo: 'Teatro · Danza · Flamenco · Familia',
    tipoClass: 'teatro',
    ubicacion: 'Carrer de Caballeros, 31 · Casco histórico',
    desc: 'El Teatre Talia es la sala hermana del Olympia, con una programación más diversa y experimental que abarca el teatro en valenciano y en castellano, la danza contemporánea, el flamenco y los espectáculos familiares. El ciclo "Abono Noches Talia+" es una de las propuestas más populares de la ciudad para los amantes del teatro.',
    programacion: [
      { cat: 'Teatro en valenciano', desc: 'Producciones propias y en coproducción con compañías locales' },
      { cat: 'Flamenco', desc: 'Ciclo Panorama Flamenco con los artistas más destacados del género' },
      { cat: 'Danza contemporánea', desc: 'Compañías nacionales e internacionales de danza actual' },
      { cat: 'En familia', desc: 'Espectáculos accesibles para los más pequeños los fines de semana' },
    ],
    precio: 'Desde 19 € · Abono Noches Talia+ disponible',
    horario: 'Programación todo el año · teatretalia.es',
    tags: [{ label: 'Flamenco' }, { label: 'Danza' }, { label: 'Valenciano' }, { label: 'Familia' }],
    imgClass: 'img-talia',
    web: 'teatretalia.es',
  },
  {
    num: '05',
    nombre: 'Sala Russafa',
    tipo: 'Teatro alternativo · Comedia · Off',
    tipoClass: 'alternativo',
    ubicacion: 'Carrer del Literat Azorín, 33 · Ruzafa',
    desc: 'La sala de referencia del teatro alternativo en Valencia, ubicada en el animado barrio de Ruzafa. Con una programación ecléctica y arriesgada, la Sala Russafa es el escaparate del teatro más contemporáneo e independiente de la ciudad, con espectáculos de pequeño formato, comedias, monólogos y propuestas escénicas innovadoras.',
    programacion: [
      { cat: 'Teatro independiente', desc: 'Compañías locales y nacionales con propuestas de vanguardia' },
      { cat: 'Comedia y monólogos', desc: 'Humor en formato íntimo con los mejores cómicos emergentes' },
      { cat: 'Teatro musical', desc: 'Producciones de pequeño y mediano formato con música en directo' },
      { cat: 'Propuestas escénicas', desc: 'Proyectos de investigación teatral y propuestas experimentales' },
    ],
    precio: 'Desde 12 € · Abonos y bonos de descuento disponibles',
    horario: 'Jueves a domingo · salarussafa.com',
    tags: [{ label: 'Alternativo' }, { label: 'Ruzafa' }, { label: 'Independiente' }, { label: 'Off' }],
    imgClass: 'img-russafa',
    web: 'salarussafa.com',
  },
];

var categorias = ['Todos', 'Ópera y clásica', 'Teatro y musicales', 'Flamenco y danza', 'Deportes'];

var otrasOpciones = [
  {
    nombre: 'Candlelight Concerts',
    desc: 'Conciertos a la luz de las velas en espacios únicos de Valencia. Tributos a Queen, ABBA, Hans Zimmer y otros artistas en el Auditorio Mar Rojo y otros espacios singulares.',
    desde: 'Desde 12 €',
    imgClass: 'img-candlelight',
  },
  {
    nombre: 'Roig Arena',
    desc: 'Partidos de la Lliga Endesa y competición europea en el Pabellón Fuente de San Luis. Uno de los equipos de baloncesto más laureados de España con millones de seguidores.',
    desde: 'Desde 15 €',
    imgClass: 'img-roig',
  },
  {
    nombre: 'Conciertos en la Marina',
    desc: 'El espacio de la Marina de Valencia acoge durante todo el año conciertos al aire libre, festivales y eventos musicales de todos los géneros en un entorno junto al mar.',
    desde: 'Desde 15 €',
    imgClass: 'img-marina',
  },
  {
    nombre: 'Loco Club',
    desc: 'La sala de conciertos más ecléctica de Valencia, en el barrio del Carmen. Rock, jazz, electrónica, indie y todo tipo de géneros en formato íntimo y con gran ambiente.',
    desde: 'Desde 8 €',
    imgClass: 'img-lococclub',
  },
];

export default function Espectaculo() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  return (
    <div className="esp-page">

      {/* Hero */}
      <div className="esp-hero">
        <div className="esp-hero-overlay" />
        <div className="esp-hero-content">
          <div className="esp-eyebrow">Valencia · Cultura viva · Espectáculos y ocio</div>
          <h1>Teatros y<br />espectáculos</h1>
          <p>Desde la ópera en el Palau de les Arts hasta el teatro alternativo en Ruzafa. Valencia tiene una agenda cultural que no para, con espectáculos para todos los gustos y presupuestos.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="esp-intro">
        <p>La escena cultural de Valencia combina grandes recintos de nivel internacional con salas íntimas de teatro alternativo, festivales callejeros y una oferta de conciertos que no descansa ningún mes del año. El Palau de les Arts, el Teatro Olympia —con más de un siglo de historia— y la Sala Russafa son algunos de los espacios que hacen de Valencia una ciudad de referencia en las artes escénicas españolas.</p>
        <p>Aquí encontrarás los <strong>principales teatros y salas de espectáculos</strong> de la ciudad, con sus géneros, precios orientativos y dónde comprar las entradas.</p>
      </div>

      {/* Filtros */}
      <div className="esp-filter-bar">
        {categorias.map(c => (
          <button
            key={c}
            className={`esp-pill ${filtroActivo === c ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c)}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Venues principales */}
      <div className="esp-routes">
        {venues.map(v => (
          <div className="esp-route-item" key={v.num}>
            <div className="esp-route-num">{v.num}</div>

            <div className="esp-route-text">
              <div className="esp-ubicacion">{v.ubicacion}</div>
              <div className="esp-tipo-row">
                <span className={`esp-tipo-badge ${v.tipoClass}`}>{v.tipo}</span>
              </div>
              <h2>{v.nombre}</h2>
              <p className="esp-desc">{v.desc}</p>

              <div className="esp-prog-titulo">Programación habitual</div>
              <ul className="esp-prog-lista">
                {v.programacion.map(p => (
                  <li key={p.cat}>
                    <span className="esp-prog-cat">{p.cat}:</span>
                    <span className="esp-prog-desc"> {p.desc}</span>
                  </li>
                ))}
              </ul>

              <div className="esp-visita">
                <span className="esp-visita-icon">🎭</span>
                <span>{v.horario}</span>
                <span className="esp-visita-sep">·</span>
                <span className="esp-visita-precio">{v.precio}</span>
              </div>

              <div className="esp-tags">
                {v.tags.map(t => (
                  <span key={t.label} className="esp-tag">{t.label}</span>
                ))}
              </div>

            </div>

            <div className="esp-route-img">
              <div className={`esp-route-img-inner ${v.imgClass}`} />
              <div className="esp-web-overlay">{v.web}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Otras opciones */}
      <div className="esp-otras-section">
        <div className="esp-section-title">
          <h2>También te puede interesar</h2>
          <p>Más espectáculos, conciertos y planes culturales en Valencia.</p>
        </div>
        <div className="esp-otras-grid">
          {otrasOpciones.map(o => (
            <div className="esp-otra-card" key={o.nombre}>
              <div className={`esp-otra-img ${o.imgClass}`} />
              <div className="esp-otra-body">
                <div className="esp-otra-nombre">{o.nombre}</div>
                <p className="esp-otra-desc">{o.desc}</p>
                <div className="esp-otra-precio">{o.desde}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="esp-info-box">
        <h3>Consejos para disfrutar de los espectáculos en Valencia</h3>
        <ul className="esp-info-list">
          <li>Compra las entradas con antelación — los espectáculos más populares se agotan semanas antes</li>
          <li>El <strong>Palau de les Arts</strong> ofrece entradas desde 6 € para algunos espectáculos del ciclo "Vespres"</li>
          <li>El <strong>Teatro Olympia y el Talia</strong> tienen abonos de temporada con descuentos importantes</li>
          <li>La <strong>Sala Russafa</strong> tiene bonos de varias entradas con precio reducido</li>
          <li>El Palau de la Música ofrece descuentos para jóvenes menores de 30 años</li>
          <li>Consulta la agenda de <strong>Visit Valencia</strong> para espectáculos gratuitos al aire libre</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}