import { useState } from 'react';
import '../../assets/cssPlanes/Exposicion.css';
import Footer from '../../FOOTER/Footer';

var espacios = [
  {
    num: '01',
    nombre: 'IVAM · Institut Valencià d\'Art Modern',
    subtitulo: 'La referencia del arte moderno y contemporáneo en Valencia',
    tipo: 'Arte moderno',
    tipoClass: 'moderno',
    ubicacion: 'C/ de Guillem de Castro, 118 · Barrio del Carmen',
    entrada: 'Gratuito domingos · 6 € resto de días',
    horario: 'Mar–Dom 10:00–19:00 h · Lunes cerrado',
    desc: 'El Instituto Valenciano de Arte Moderno es la referencia cultural de la ciudad para el arte del siglo XX y XXI. Fundado en 1989 como el primer museo de arte moderno de España, alberga la mayor colección de obras del escultor Julio González y programa exposiciones temporales de artistas nacionales e internacionales de primer nivel.',
    coleccion: [
      { c: 'Colección Julio González', d: 'La mayor colección del mundo del escultor valenciano de vanguardia' },
      { c: 'Arte del siglo XX', d: 'Obras de Picasso, Calder, Lichtenstein y grandes maestros modernos' },
      { c: 'Arte contemporáneo', d: 'Exposiciones temporales con artistas de la escena actual internacional' },
    ],
    tags: [{ label: 'Gratuito domingos', type: 'free' }, { label: 'Arte moderno' }, { label: 'Siglo XX-XXI' }],
    imgClass: 'img-ivamexp',
  },
  {
    num: '02',
    nombre: 'Museo de Bellas Artes de Valencia',
    subtitulo: 'La segunda pinacoteca más importante de España',
    tipo: 'Pintura clásica',
    tipoClass: 'clasico',
    ubicacion: 'C/ de Sant Pius V, 9 · Jardín del Turia',
    entrada: 'Gratuito · Acceso libre todo el año',
    horario: 'Mar–Dom 10:00–20:00 h · Lunes cerrado',
    desc: 'El Museo de Bellas Artes de Valencia alberga la segunda colección pictórica más importante de España tras el Prado. Ocupa un antiguo colegio del siglo XVII junto al Jardín del Turia y su colección abarca desde el arte medieval valenciano hasta el impresionismo. Sorolla, Ribalta, Joan de Joanes y los primitivos valencianos son los grandes protagonistas.',
    coleccion: [
      { c: 'Sorolla', d: 'La mayor colección pública de pinturas de Joaquín Sorolla fuera del Museo Sorolla de Madrid' },
      { c: 'Primitivos valencianos', d: 'Joan de Joanes y los grandes maestros del gótico valenciano del siglo XV' },
      { c: 'Francisco Ribalta', d: 'El maestro del tenebrismo valenciano en su contexto histórico completo' },
    ],
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Sorolla' }, { label: 'Pintura española' }],
    imgClass: 'img-bbaaexp',
  },
  {
    num: '03',
    nombre: 'Centre del Carme Cultura Contemporánea',
    subtitulo: 'Arte actual en un convento gótico del siglo XIII',
    tipo: 'Arte contemporáneo',
    tipoClass: 'contemporaneo',
    ubicacion: 'C/ del Museu, 2 · Barrio del Carmen',
    entrada: 'Gratuito · Exposiciones permanentes y temporales libres',
    horario: 'Mar–Dom 11:00–20:00 h · Lunes cerrado',
    desc: 'El Centre del Carme es un espacio cultural único: un antiguo convento de carmelitas del siglo XIII reconvertido en centro de arte contemporáneo por el Consorci de Museus de la Generalitat Valenciana. Sus claustros góticos y sus salas de piedra son el marco perfecto para exposiciones de fotografía, instalaciones, arte urbano y propuestas de artistas emergentes y consagrados.',
    coleccion: [
      { c: 'Arte valenciano contemporáneo', d: 'Exposiciones de artistas locales y nacionales en espacios históricos únicos' },
      { c: 'Fotografía y arte urbano', d: 'Ciclos dedicados a la fotografía documental y el arte de calle' },
      { c: 'Claustros góticos', d: 'El espacio en sí mismo es patrimonio: claustro del siglo XIII con exposiciones integradas' },
    ],
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Arte contemporáneo' }, { label: 'Barrio del Carmen' }],
    imgClass: 'img-carmeexp',
  },
  {
    num: '04',
    nombre: 'Centro de Arte Hortensia Herrero',
    subtitulo: 'Arte internacional en un palacio del siglo XVII',
    tipo: 'Arte contemporáneo internacional',
    tipoClass: 'contemporaneo',
    ubicacion: 'C/ del Museu, 4 · Casco Histórico',
    entrada: 'Entrada de pago · Consultar precio en web',
    horario: 'Mar–Dom 10:00–19:00 h · Lunes cerrado',
    desc: 'Abierto en 2023 en el Palacio Valeriola, un edificio del siglo XVII totalmente restaurado, el Centro de Arte Hortensia Herrero alberga una de las colecciones privadas de arte contemporáneo más importantes de España. Obras de Andreas Gursky, Anselm Kiefer, Georg Baselitz, Anish Kapoor y Mat Collishaw conviven con restos arqueológicos de un circo romano, una judería medieval y una fuente islámica.',
    coleccion: [
      { c: 'Colección permanente', d: 'Gursky, Kiefer, Baselitz, Kapoor: grandes nombres del arte internacional' },
      { c: 'Restos arqueológicos', d: 'Vestigios del circo romano, judería medieval y fuente islámica en el subsuelo' },
      { c: 'Exposiciones temporales', d: 'Propuestas de artistas internacionales de primer nivel en rotación constante' },
    ],
    tags: [{ label: 'Arte internacional' }, { label: 'Palacio histórico' }, { label: 'Arqueología' }],
    imgClass: 'img-hortensiaexp',
  },
  {
    num: '05',
    nombre: 'Fundación Bancaja',
    subtitulo: 'Grandes exposiciones temporales en el corazón de la ciudad',
    tipo: 'Exposiciones temporales',
    tipoClass: 'temporal',
    ubicacion: 'Plaza de Tetuán, 23 · Centro',
    entrada: 'Variable según exposición · Desde 6 €',
    horario: 'Mar–Dom 10:00–20:00 h · Lunes cerrado',
    desc: 'La Fundación Bancaja es el centro cultural de referencia para las grandes exposiciones temporales de Valencia. Con un programa anual que combina arte clásico, fotografía, ciencia y cultura popular, ha acogido muestras sobre Sorolla en formato inmersivo, el antiguo Egipto con Tutankamón y otras exposiciones de gran formato que atraen a cientos de miles de visitantes.',
    coleccion: [
      { c: 'Exposiciones de gran formato', d: 'Muestras itinerantes internacionales de alto impacto visual y cultural' },
      { c: 'Arte inmersivo', d: 'Experiencias multisensoriales con tecnología y proyecciones de gran escala' },
      { c: 'Talleres y conferencias', d: 'Programa educativo y de actividades culturales paralelas a cada exposición' },
    ],
    tags: [{ label: 'Exposiciones top' }, { label: 'Inmersivo' }, { label: 'Plaza Tetuán' }],
    imgClass: 'img-bancajaexp',
  },
  {
    num: '06',
    nombre: 'CaixaForum Valencia',
    subtitulo: 'El jardín vertical más grande de Europa + arte de primer nivel',
    tipo: 'Arte y cultura',
    tipoClass: 'moderno',
    ubicacion: 'Av. del Professor López Piñero · Ciudad de las Artes y las Ciencias',
    entrada: 'Acceso libre al edificio · Exposiciones con entrada',
    horario: 'Lun–Dom 08:00–00:00 h · Abierto todos los días',
    desc: 'CaixaForum Valencia ocupa el Àgora de la Ciutat de les Arts i les Ciències y tiene el jardín vertical más grande de Europa en su fachada exterior. Un espacio cultural versátil con exposiciones de arte internacional, ciclos de conferencias, conciertos y talleres familiares. Tiene librería y restaurante con vistas al lago del complejo. El acceso al edificio es libre; las exposiciones llevan entrada.',
    coleccion: [
      { c: 'Exposiciones internacionales', d: 'Arte contemporáneo, ciencia y fotografía de colecciones mundiales' },
      { c: 'Jardín vertical', d: 'El mayor jardín vertical de Europa en la fachada exterior del edificio' },
      { c: 'Actividades familiares', d: 'Talleres educativos para niños y familias todos los fines de semana' },
    ],
    tags: [{ label: 'Acceso libre', type: 'free' }, { label: 'CAC' }, { label: 'Familia' }, { label: 'Abierto 365 días' }],
    imgClass: 'img-caixaforumexp',
  },
  {
    num: '07',
    nombre: 'MuVIM · Museu Valencià de la Il·lustració i la Modernitat',
    subtitulo: 'La historia del pensamiento moderno en imágenes',
    tipo: 'Historia y cultura',
    tipoClass: 'historia',
    ubicacion: 'C/ de Quevedo, 10 · Centro',
    entrada: 'Gratuito · Acceso libre',
    horario: 'Mar–Sáb 10:00–14:00 h y 16:00–20:00 h · Dom 10:00–14:00 h',
    desc: 'El Museu Valencià de la Il·lustració i la Modernitat es el único museo de España dedicado al pensamiento moderno y la Ilustración. Su programa expositivo abarca la historia del diseño gráfico, la arquitectura contemporánea, el arte urbano, la cultura pop y las tradiciones valencianas, en exposiciones que combinan rigor histórico con propuestas visuales atractivas.',
    coleccion: [
      { c: 'Ilustración y modernidad', d: 'La única colección dedicada a la historia del pensamiento moderno en España' },
      { c: 'Arte urbano y diseño', d: 'Exposiciones sobre grafiti, diseño gráfico y cultura visual contemporánea' },
      { c: 'Cultura valenciana', d: 'Muestras sobre las tradiciones, fiestas y patrimonio inmaterial de Valencia' },
    ],
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Historia' }, { label: 'Diseño' }, { label: 'Arte urbano' }],
    imgClass: 'img-muvimexp',
  },
  {
    num: '08',
    nombre: 'Museo Nacional de Cerámica · Palacio Marqués de Dos Aguas',
    subtitulo: 'El barroco más exuberante de España convertido en museo',
    tipo: 'Arte decorativo',
    tipoClass: 'clasico',
    ubicacion: 'C/ del Poeta Querol, 2 · Centro histórico',
    entrada: 'Gratuito sábados tarde y domingos · 3 € resto',
    horario: 'Mar–Sáb 10:00–14:00 h y 16:00–20:00 h · Dom 10:00–14:00 h',
    desc: 'El Palacio del Marqués de Dos Aguas es uno de los edificios barrocos más exuberantes de España, con una portada del siglo XVIII tallada en alabastro que deja boquiabierto a cualquier visitante. En su interior, el Museo Nacional de Cerámica alberga una de las colecciones de cerámica más importantes del mundo, con piezas desde la época árabe hasta la actualidad.',
    coleccion: [
      { c: 'Portada de alabastro', d: 'La fachada barroca del siglo XVIII, una de las más impresionantes de España' },
      { c: 'Cerámica valenciana', d: 'Colección desde los azulejos árabes hasta las piezas de Manises del siglo XX' },
      { c: 'Artes decorativas', d: 'Mobiliario, textiles y objetos suntuarios de distintas épocas históricas' },
    ],
    tags: [{ label: 'Gratuito domingos', type: 'free' }, { label: 'Barroco' }, { label: 'Cerámica' }, { label: 'Palacio histórico' }],
    imgClass: 'img-ceramicaexp',
  },
];

var exposicionesEspeciales = [
  {
    nombre: 'La leyenda del Titanic',
    espacio: 'Itinerante · Valencia 2026',
    desc: 'Objetos de época, historia real y arte inmersivo para sentirse pasajero del transatlántico más famoso de la historia.',
    tipo: 'Inmersiva',
    imgClass: 'img-titanicexp',
  },
  {
    nombre: 'La Ruta · Modernidad, cultura y descontrol',
    espacio: 'Bombas Gens Centre d\'Arts Digitals',
    desc: 'La «Ruta del Bakalao» valenciana revisitada como fenómeno cultural: arte, fotografía, moda y música con elementos interactivos.',
    tipo: 'Interactiva',
    imgClass: 'img-rutaexp',
  },
  {
    nombre: 'Leonardo. 500 años de genio',
    espacio: 'Museu de les Ciències · CAC',
    desc: 'Las máquinas e inventos de Leonardo da Vinci en formato expositivo en el Museu de les Ciències hasta abril de 2026.',
    tipo: 'Ciencia y arte',
    imgClass: 'img-leonardoexp',
  },
  {
    nombre: 'Exposiciones IVAM temporales',
    espacio: 'IVAM · Barrio del Carmen',
    desc: 'El IVAM programa al año 8-10 exposiciones temporales de artistas internacionales. Consultar programación actualizada en ivam.es.',
    tipo: 'Arte moderno',
    imgClass: 'img-ivam-tempexp',
  },
];

var categorias = [
  { id: 'todos', label: 'Todos los espacios' },
  { id: 'moderno', label: 'Arte moderno' },
  { id: 'contemporaneo', label: 'Arte contemporáneo' },
  { id: 'clasico', label: 'Arte clásico' },
  { id: 'temporal', label: 'Exposiciones temporales' },
  { id: 'historia', label: 'Historia y cultura' },
];

export default function Exposicion() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const espaciosFiltrados = filtroActivo === 'todos'
    ? espacios
    : espacios.filter(e => e.tipoClass === filtroActivo);

  return (
    <div className="ex-page">

      {/* Hero */}
      <div className="ex-hero">
        <div className="ex-hero-overlay" />
        <div className="ex-hero-content">
          <div className="ex-eyebrow">Valencia · Arte y cultura · Museos y galerías</div>
          <h1>Exposiciones<br />en Valencia</h1>
          <p>Más de 34 museos y centros culturales, desde la segunda pinacoteca de España hasta las mejores exposiciones inmersivas. La agenda cultural de Valencia no para en todo el año.</p>
        </div>
        <div className="ex-hero-stats">
          <div className="ex-stat">
            <span className="ex-stat-num">34+</span>
            <span className="ex-stat-label">museos</span>
          </div>
          <div className="ex-stat-sep" />
          <div className="ex-stat">
            <span className="ex-stat-num">6</span>
            <span className="ex-stat-label">gratuitos</span>
          </div>
          <div className="ex-stat-sep" />
          <div className="ex-stat">
            <span className="ex-stat-num">365</span>
            <span className="ex-stat-label">días de arte</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="ex-intro">
        <p>Valencia tiene una de las escenas culturales más activas de España. Desde la segunda pinacoteca del país en el Museo de Bellas Artes hasta el arte contemporáneo internacional del Centro Hortensia Herrero, pasando por las grandes exposiciones inmersivas de la Fundación Bancaja. La mayoría de los museos municipales son gratuitos, y los grandes centros privados ofrecen programaciones de primer nivel durante todo el año.</p>
        <p>Aquí encontrarás los <strong>principales espacios expositivos de Valencia</strong> con sus colecciones permanentes, horarios y precios actualizados.</p>
      </div>

      {/* Filtros */}
      <div className="ex-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`ex-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Espacios expositivos */}
      <div className="ex-routes">
        {espaciosFiltrados.map(esp => (
          <div className="ex-route-item" key={esp.num}>
            <div className="ex-route-num">{esp.num}</div>

            <div className="ex-route-text">
              <div className="ex-meta-row">
                <span className={`ex-tipo-badge ${esp.tipoClass}`}>{esp.tipo}</span>
                <span className="ex-ubicacion">📍 {esp.ubicacion}</span>
              </div>
              <h2>{esp.nombre}</h2>
              <div className="ex-subtitulo">{esp.subtitulo}</div>
              <p className="ex-desc">{esp.desc}</p>

              <div className="ex-coleccion-titulo">Qué destacar</div>
              <ul className="ex-coleccion">
                {esp.coleccion.map(col => (
                  <li key={col.c}>
                    <span className="ex-col-nombre">{col.c}:</span>
                    <span className="ex-col-desc"> {col.d}</span>
                  </li>
                ))}
              </ul>

              <div className="ex-horarios-row">
                <div className="ex-horario-dato">
                  <span className="ex-h-label">🕐 Horario</span>
                  <span className="ex-h-val">{esp.horario}</span>
                </div>
                <div className="ex-horario-dato">
                  <span className="ex-h-label">🎟 Entrada</span>
                  <span className="ex-h-val">{esp.entrada}</span>
                </div>
              </div>

              <div className="ex-tags">
                {esp.tags.map(t => (
                  <span key={t.label} className={`ex-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

            </div>

            <div className="ex-route-img">
              <div className={`ex-route-img-inner ${esp.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Exposiciones especiales */}
      <div className="ex-especiales-section">
        <div className="ex-section-title">
          <h2>Exposiciones especiales e inmersivas</h2>
          <p>Muestras de gran formato, experiencias inmersivas y propuestas únicas en Valencia.</p>
        </div>
        <div className="ex-especiales-grid">
          {exposicionesEspeciales.map(exp => (
            <div className="ex-especial-card" key={exp.nombre}>
              <div className={`ex-especial-img ${exp.imgClass}`} />
              <div className="ex-especial-body">
                <div className="ex-especial-tipo">{exp.tipo}</div>
                <div className="ex-especial-nombre">{exp.nombre}</div>
                <div className="ex-especial-espacio">{exp.espacio}</div>
                <p className="ex-especial-desc">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ex-info-box">
        <h3>Consejos para visitar museos y exposiciones en Valencia</h3>
        <ul className="ex-info-list">
          <li>El <strong>Museo de Bellas Artes</strong> es gratuito todo el año y tiene las mejores pinturas de Sorolla en acceso libre</li>
          <li>El <strong>IVAM, el Centre del Carme y el MuVIM</strong> son gratuitos: perfectos para un día de museos sin presupuesto</li>
          <li>La <strong>Fundación Bancaja</strong> acoge las grandes exposiciones de temporada: reserva con antelación</li>
          <li>El <strong>Centro Hortensia Herrero</strong> tiene aforo limitado: compra la entrada online antes de ir</li>
          <li>Los museos municipales cierran los lunes: planifica bien la visita</li>
          <li>CaixaForum está <strong>abierto todos los días del año</strong>, incluso festivos, con acceso libre al edificio</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}