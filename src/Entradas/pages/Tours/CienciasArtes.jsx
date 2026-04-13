import '../../assets/cssTours/CienciasArtes.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var visitasOficiales = [
  {
    num: '01',
    nombre: 'Visita arquitectónica — La mirada del arquitecto',
    tipo: 'Visita oficial CAC · Exterior + zonas restringidas · Calatrava y Candela',
    subtitulo: 'Acceso a zonas restringidas al público · Vistas panorámicas privilegiadas · Dos itinerarios a elegir',
    desc: 'La visita más exclusiva de la Ciutat de les Arts i les Ciències. Un recorrido principalmente por exteriores que permite acceder a zonas normalmente cerradas al público general, con vistas panorámicas privilegiadas sobre todo el complejo. El guía descubre la obra de dos magníficos arquitectos: Santiago Calatrava —responsable del Museu de les Ciències, el Hemisfèric, el Umbracle, el Àgora y el Palau de les Arts— y Félix Candela, el ingeniero que diseñó el Oceanogràfic con sus estructuras de hormigón en forma de paraboloides hiperbólicos. Se puede elegir entre dos itinerarios: el Itinerario 1 recorre el Museu de les Ciències, el Àgora, el Hemisfèric, el Umbracle y el Palau de les Arts Reina Sofía; el Itinerario 2 sustituye el Palau de les Arts por el Oceanogràfic.',
    itinerarios: [
      { label: 'Itinerario 1', val: 'Museu de les Ciències · Àgora · Hemisfèric · Umbracle · Palau de les Arts Reina Sofía' },
      { label: 'Itinerario 2', val: 'Museu de les Ciències · Àgora · Hemisfèric · Umbracle · Oceanogràfic' },
    ],
    datos: [
      { d: 'Precio', v: 'Desde 65 € · 60 € jubilados y carnet joven · 55 € niños 4–12 años · Menores de 3 años: gratis' },
      { d: 'Punto de inicio', v: 'Puerta principal del Museu de les Ciències (enfrente del Hemisfèric)' },
      { d: 'Horario', v: 'Mañanas (10–13 h) o tardes (16–19 h) · Mínimo 2 personas · Sujeto a disponibilidad' },
      { d: 'Compra', v: 'En taquillas del Museu de les Ciències o tel. 96 197 46 86 · Av. Professor López Piñero, 7' },
    ],
    imgClass: 'img-ca-arquitectonica',
    tags: [{ label: 'Zonas restringidas' }, { label: 'Calatrava + Candela' }, { label: '2 itinerarios' }],
    url: 'https://cac.es/tarifas/visitas-guiadas/',
  },
  {
    num: '02',
    nombre: 'Visita guiada al Museu de les Ciències',
    tipo: 'Visita oficial CAC · Interior del Museu · Personal especializado · Actividades dinámicas',
    subtitulo: 'Ideal para primera visita o grupos con poco tiempo · Exposiciones principales · Ciencia participativa',
    desc: 'La visita guiada oficial al interior del Museu de les Ciències Príncep Felip, conducida por personal especializado del propio museo. Recorre de primera mano los contenidos de las exposiciones más relevantes del museo y demuestra que la ciencia puede ser divertida y entretenida. Incluye actividades dinámicas para descubrir conceptos científicos de forma amena y participativa. Esta visita es ideal para grupos que disponen de poco tiempo o que visitan el museo por primera vez y quieren orientarse rápidamente por sus 26.000 m² de exposición interactiva: genética, exploración espacial, física, tecnología y medio ambiente. El museo fue inaugurado en noviembre de 2000 y es el mayor museo de ciencia interactiva de España.',
    itinerarios: [],
    datos: [
      { d: 'Precio', v: '3,50 € adicionales sobre la entrada al Museu · Comprar en taquillas del Museu' },
      { d: 'Contenido', v: 'Exposiciones más relevantes · Actividades dinámicas · Personal especializado del CAC' },
      { d: 'Ideal para', v: 'Primera visita · Grupos con poco tiempo · Familias · Grupos escolares' },
      { d: 'Compra', v: 'Taquillas del Museu de les Ciències o tel. 96 197 46 86 · Programación sujeta a cambios' },
    ],
    imgClass: 'img-ca-museu',
    tags: [{ label: 'Personal CAC' }, { label: 'Ciencia interactiva' }, { label: 'Todas las edades' }],
    url: 'https://cac.es/tarifas/visitas-guiadas/',
  },
  {
    num: '03',
    nombre: 'Visita guiada "Marte. La conquista de un sueño"',
    tipo: 'Visita oficial CAC · Exposición permanente · Exploración espacial',
    subtitulo: 'Planeta rojo · Cráteres marcianos · Similitudes con la Tierra · Historia de la exploración espacial',
    desc: 'Una visita guiada especializada por la exposición "Marte. La conquista de un sueño", una de las más visitadas del Museu de les Ciències. El guía lleva al visitante por todos los rincones del planeta rojo: sus cráteres, volcanes y valles; cómo sonaría tu voz en Marte y cuál sería tu peso allí; las similitudes y diferencias entre paisajes marcianos y terrestres que sorprenden incluso a los adultos. También repasa cómo ha ido cambiando la percepción de Marte a lo largo de la historia —desde la Antigüedad hasta las primeras misiones espaciales—, los rovers marcianos y la aspiración humana de poner un pie en el planeta rojo. La tercera planta del Museu alberga además "Gravedad Cero" y maquetas de cohetes, de la Estación Espacial Internacional y del módulo lunar más famoso de la historia.',
    itinerarios: [],
    datos: [
      { d: 'Precio', v: '3,50 € adicionales sobre la entrada al Museu · Comprar en taquillas del Museu' },
      { d: 'Exposición', v: 'Marte. La conquista de un sueño · Planta 3 del Museu · Rovers · ISS · Módulo lunar' },
      { d: 'También en planta 3', v: '"Gravedad Cero" · "La Luna al alcance de tus manos" · Maquetas espaciales' },
      { d: 'Compra', v: 'Taquillas del Museu · Tel. 96 197 46 86 · Programación sujeta a cambios' },
    ],
    imgClass: 'img-ca-marte',
    tags: [{ label: 'Exploración espacial' }, { label: 'Marte' }, { label: '3,50 € extra' }],
    url: 'https://cac.es/tarifas/visitas-guiadas/',
  },
  {
    num: '04',
    nombre: 'Visita guiada "Leonardo. 500 años de genio"',
    tipo: 'Visita oficial CAC · Exposición temporal · Experiencia inmersiva SENSORY4™',
    subtitulo: 'Códices · Escritura en espejo · Máquinas · Anatomía · Galería inmersiva · VR Florencia flyover',
    desc: 'Una visita guiada que sumerge al visitante en la mente y el universo creativo de Leonardo da Vinci con motivo del 25 aniversario del Museu. El guía descifra los enigmáticos códices de Leonardo, su escritura en espejo, sus revolucionarias máquinas de guerra y de vuelo, y sus estudios anatómicos que anticiparon en siglos los conocimientos médicos. La experiencia incluye la galería inmersiva con tecnología SENSORY4™ que transporta al visitante a las calles de Florencia, los canales de Venecia y la grandeza de Milán; la colección de más de 50 máquinas a gran escala basadas en sus bocetos; áreas interactivas dedicadas a la Mona Lisa y al Hombre de Vitruvio; y el simulador de realidad virtual "VR Florencia flyover". Gracias al proyecto OrganKits de la Universidad de Murcia, los participantes también examinan órganos reales y comprueban cómo algunas de sus teorías anatómicas se han confirmado en el siglo XXI.',
    itinerarios: [],
    datos: [
      { d: 'Precio', v: '3,50 € adicionales sobre la entrada al Museu · Comprar en taquillas del Museu' },
      { d: 'Tecnología', v: 'Galería inmersiva SENSORY4™ · VR Florencia flyover · +50 máquinas a escala real' },
      { d: 'Contenido', v: 'Códices · Máquinas · Anatomía · Mona Lisa · Hombre de Vitruvio · OrganKits UV Murcia' },
      { d: 'Compra', v: 'Taquillas del Museu · Tel. 96 197 46 86 · Consultar disponibilidad de fechas' },
    ],
    imgClass: 'img-ca-leonardo',
    tags: [{ label: 'Inmersiva SENSORY4™' }, { label: 'VR flyover' }, { label: '3,50 € extra' }],
    url: 'https://cac.es/tarifas/visitas-guiadas/',
  },
];

var cienciaEscena = [
  {
    nombre: 'Química en acción',
    desc: 'Los experimentos más sorprendentes de la química. La magia de las reacciones químicas en directo, con participación del público.',
    edad: 'Todas las edades',
  },
  {
    nombre: 'La Ciencia invisible',
    desc: 'Experiencias relacionadas con la presión, el aire y los fenómenos físicos invisibles al ojo humano.',
    edad: 'Todas las edades',
  },
  {
    nombre: 'Robots',
    desc: 'Robótica y tecnología en acción. Demostraciones en directo de los principios básicos de la inteligencia artificial y la mecánica.',
    edad: 'Todas las edades',
  },
  {
    nombre: 'Científic@ por un día',
    desc: 'Los más pequeños experimentan con la materia y sus propiedades. Aprendizaje científico a través del juego y la experimentación.',
    edad: 'Niños 4–8 años',
  },
];

var simulador = {
  nombre: 'Simulador Espacial',
  desc: 'Una experiencia espacial interactiva única. El simulador recrea las condiciones de un viaje al espacio, con tecnología de inmersión total. No requiere entrada al Museu para adquirir esta actividad por separado.',
  precio: '3,50 € · Se puede comprar sin entrada al Museu',
  url: 'https://tickets.cac.es/internetCAC/actividades.do',
};

var datosVisita = [
  { label: 'Dirección', val: 'Av. del Professor López Piñero, 7 · 46013 Valencia · cac.es' },
  { label: 'Teléfono', val: '96 197 46 86 · También disponible en taquillas del Museu de les Ciències' },
  { label: 'Compra online', val: 'tickets.cac.es · Actividades en tickets.cac.es/internetCAC/actividades.do' },
  { label: 'Horario taquillas', val: 'Cierran 1 hora antes del cierre del Museu · Horario variable por temporada' },
  { label: 'Transporte', val: 'Bus EMT L13, 14, 19, 35, 40 · Metro L3, 5, 7, 9 parada Alameda · Bici por el Turia' },
  { label: 'Aparcamiento', val: 'Parking del Umbracle (dentro del complejo) · Sujeto a disponibilidad por eventos' },
  { label: 'Accesibilidad', val: 'Complejo totalmente adaptado para personas con movilidad reducida · Ascensor disponible' },
  { label: 'Audioguías', val: '1 € · Descargables en el móvil · Disponibles en varios idiomas' },
];

var recintos = [
  { nombre: 'Museu de les Ciències', icono: '🔬', detalle: 'Calatrava · 26.000 m² · Ciencia interactiva' },
  { nombre: "L'Hemisfèric", icono: '👁️', detalle: 'IMAX Dome · 900 m² · Cine inmersivo' },
  { nombre: "L'Oceanogràfic", icono: '🐋', detalle: 'Candela · +45.000 animales · Acuario Europa' },
  { nombre: 'Palau de les Arts Reina Sofía', icono: '🎭', detalle: 'Ópera · 40.000 m² · 4 salas' },
  { nombre: "L'Umbracle", icono: '🌿', detalle: '+50 especies · Paseo esculturas · Mirador' },
  { nombre: "L'Àgora", icono: '⬡', detalle: 'Eventos · Exposiciones · Rodeado de agua' },
];

export default function CienciasArtes() {
  return (
    <div className="ca-page">

      {/* Hero */}
      <div className="ca-hero">
        <div className="ca-hero-overlay" />
        <div className="ca-hero-content">
          <div className="ca-eyebrow">Tours Guiados · Ciutat de les Arts i les Ciències · cac.es</div>
          <h1>Visitas guiadas<br />en la Ciudad<br />de las Artes</h1>
          <p>Descubre los secretos de Calatrava y Candela, la ciencia interactiva, el planeta Marte y el universo de Leonardo da Vinci con guías especializados del propio CAC.</p>
        </div>
        <div className="ca-hero-stats">
          <div className="ca-stat">
            <span className="ca-stat-num">6</span>
            <span className="ca-stat-label">Recintos únicos</span>
          </div>
          <div className="ca-stat-sep" />
          <div className="ca-stat">
            <span className="ca-stat-num">350.000</span>
            <span className="ca-stat-label">m² de complejo</span>
          </div>
          <div className="ca-stat-sep" />
          <div className="ca-stat">
            <span className="ca-stat-num">Desde 3,50€</span>
            <span className="ca-stat-label">Visitas guiadas</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="ca-intro-box">
        <div className="ca-intro-icono">🏛️</div>
        <div className="ca-intro-content">
          <div className="ca-intro-titulo">Calatrava · Candela · La Valencia del siglo XXI</div>
          <p>La <strong>Ciutat de les Arts i les Ciències</strong> ofrece visitas guiadas oficiales que van mucho más allá de lo que cualquier visitante puede descubrir por su cuenta. El CAC dispone de guías especializados en arquitectura, ciencia y arte que abren el acceso a <strong>zonas restringidas al público</strong>, desvelan los secretos estructurales de los edificios de <strong>Santiago Calatrava</strong> y <strong>Félix Candela</strong> y guían por las exposiciones más complejas con actividades dinámicas y participativas. Las visitas van desde los 3,50 € adicionales sobre la entrada al Museu hasta los 65 € por la visita arquitectónica completa con acceso a áreas exclusivas. La programación está <strong>sujeta a cambios</strong>; se recomienda confirmar siempre en taquillas o en el 96 197 46 86.</p>
        </div>
      </div>

      {/* Chips de recintos */}
      <div className="ca-recintos-wrap">
        <div className="ca-recintos-titulo">Los 6 recintos de la Ciutat de les Arts i les Ciències</div>
        <div className="ca-recintos-grid">
          {recintos.map(r => (
            <div className="ca-recinto-chip" key={r.nombre}>
              <span className="ca-recinto-icono">{r.icono}</span>
              <div>
                <span className="ca-recinto-nombre">{r.nombre}</span>
                <span className="ca-recinto-detalle">{r.detalle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section title */}
      <div className="ca-section-title">
        <h2>Visitas guiadas oficiales del CAC</h2>
        <p>Cuatro visitas con guías especializados, directamente organizadas por la Ciutat de les Arts i les Ciències.</p>
      </div>

      {/* Visitas oficiales */}
      <div className="ca-routes">
        {visitasOficiales.map(v => (
          <div className="ca-route-item" key={v.num}>
            <div className="ca-route-num">{v.num}</div>
            <div className="ca-route-text">
              <div className="ca-tipo">{v.tipo}</div>
              <h2>{v.nombre}</h2>
              <div className="ca-subtitulo">{v.subtitulo}</div>
              <p className="ca-desc">{v.desc}</p>

              {v.itinerarios.length > 0 && (
                <div className="ca-itinerarios">
                  {v.itinerarios.map(it => (
                    <div className="ca-itinerario" key={it.label}>
                      <span className="ca-itinerario-label">{it.label}:</span>
                      <span className="ca-itinerario-val"> {it.val}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="ca-datos-titulo">Precios y datos clave</div>
              <ul className="ca-datos">
                {v.datos.map(d => (
                  <li key={d.d}>
                    <span className="ca-dato-label">{d.d}:</span>
                    <span className="ca-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="ca-tags">
                {v.tags.map(t => (
                  <span key={t.label} className="ca-tag">{t.label}</span>
                ))}
              </div>

              <a href={v.url} target="_blank" rel="noopener noreferrer" className="ca-comprar-btn">
                Ver en cac.es →
              </a>
            </div>
            <div className="ca-route-img">
              <div className={`ca-route-img-inner ${v.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* La Ciencia a Escena */}
      <div className="ca-escena-section">
        <h3>La Ciencia a Escena · Talleres experimentales · 3,50 € por taller</h3>
        <p className="ca-escena-desc">Talleres en directo disponibles todos los días en las aulas experimentales de la planta baja del Museu. Se puede comprar sin necesidad de tener entrada al Museu. Programación sujeta a cambios.</p>
        <div className="ca-escena-grid">
          {cienciaEscena.map(t => (
            <div className="ca-escena-card" key={t.nombre}>
              <div className="ca-escena-nombre">{t.nombre}</div>
              <div className="ca-escena-edad">{t.edad}</div>
              <p className="ca-escena-desc-text">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Simulador Espacial */}
      <div className="ca-simulador-box">
        <div className="ca-simulador-icono">🚀</div>
        <div className="ca-simulador-content">
          <div className="ca-simulador-titulo">Simulador Espacial · {simulador.precio}</div>
          <p>{simulador.desc}</p>
          <a href={simulador.url} target="_blank" rel="noopener noreferrer" className="ca-simulador-btn">
            Ver actividades en tickets.cac.es →
          </a>
        </div>
      </div>

      {/* Tabla datos práctica */}
      <div className="ca-info-practica">
        <h3>Información práctica · Ciutat de les Arts i les Ciències</h3>
        <div className="ca-tabla">
          {datosVisita.map(d => (
            <div className="ca-tabla-fila" key={d.label}>
              <div className="ca-tabla-label">{d.label}</div>
              <div className="ca-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ca-info-box">
        <h3>Consejos para las visitas guiadas del CAC</h3>
        <ul className="ca-info-list">
          <li>La <strong>visita arquitectónica</strong> es la única forma de acceder a zonas restringidas del complejo: vistas panorámicas y rincones que ningún visitante normal puede ver</li>
          <li>Los talleres de <strong>La Ciencia a Escena</strong> (3,50 €) se pueden comprar sin entrada al Museu: perfectos para familias con poco tiempo o para completar una visita parcial</li>
          <li>El <strong>Simulador Espacial</strong> tampoco requiere entrada al Museu y es una de las experiencias más valoradas por todos los públicos</li>
          <li>Confirma siempre la programación en <strong>taquillas o en el 96 197 46 86</strong> antes de ir: los horarios y la disponibilidad de visitas guiadas están sujetos a cambios</li>
          <li>Para la visita arquitectónica se requiere un <strong>mínimo de 2 personas</strong>; para la visita con entradas al Oceanogràfic y Museu (operadores externos) el mínimo es 4 personas</li>
          <li>Combina la visita guiada del Museu por la mañana con el <strong>Hemisfèric por la tarde</strong>: es la jornada perfecta en la CAC sin saturación y aprovechando al máximo las entradas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}