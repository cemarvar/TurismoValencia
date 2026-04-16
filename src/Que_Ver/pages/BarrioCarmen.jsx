import '../assets/css/BarrioCarmen.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var lugares = [
  {
    num: '01',
    nombre: 'Torres de Serranos',
    tipo: 'Monumento · Entrada gratuita',
    subtitulo: 'La puerta norte de la ciudad amurallada · Siglo XIV',
    desc: 'Las Torres de Serranos son la puerta más imponente que queda de la antigua muralla medieval de Valencia. Construidas entre 1392 y 1398 por el maestro Pere Balaguer, estas torres poligonales de 33 metros de altura fueron durante siglos la entrada principal a la ciudad desde el norte, el camino hacia la serranía. En su interior se conservan varias salas abovedadas, y desde las almenas se obtienen algunas de las mejores vistas panorámicas del Jardín del Turia y del casco histórico.',
    datos: [
      { d: 'Construcción', v: '1392–1398 · Pere Balaguer · Estilo gótico militar' },
      { d: 'Entrada', v: 'Gratuita · Mar–Sáb 10:00–19:00 h · Dom 10:00–14:00 h' },
      { d: 'Altura', v: '33 metros · Vistas panorámicas desde las almenas' },
      { d: 'Curiosidad', v: 'Sirvió de prisión para nobles entre los siglos XVI y XIX' },
    ],
    imgClass: 'img-serranosbc',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Vistas' }, { label: 'Siglo XIV' }],
  },
  {
    num: '02',
    nombre: 'Torres de Quart',
    tipo: 'Monumento · Entrada gratuita',
    subtitulo: 'La puerta de poniente · Cicatrices napoleónicas en la fachada',
    desc: 'Las Torres de Quart cierran el Barrio del Carmen por el oeste. Construidas entre 1441 y 1468, son las torres defensivas góticas mejor conservadas de Europa. Su característica más singular es su fachada exterior, donde todavía se conservan las marcas de los cañonazos del asedio napoleónico de 1808: 132 impactos de bala de cañón y más de 1.000 perforaciones de proyectiles de fusil, cicatrices de la resistencia valenciana que se decidió preservar durante la restauración.',
    datos: [
      { d: 'Construcción', v: '1441–1468 · Francesc Baldomar y Pere Compte' },
      { d: 'Entrada', v: 'Gratuita · Mar–Sáb 10:00–19:00 h · Dom 10:00–14:00 h' },
      { d: 'Altura', v: '34 metros · Un metro más que las de Serranos' },
      { d: 'Curiosidad', v: 'Las marcas de los cañonazos napoleónicos de 1808 se conservan en la fachada' },
    ],
    imgClass: 'img-quartbc',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Historia bélica' }, { label: 'Siglo XV' }],
  },
  {
    num: '03',
    nombre: 'Portal de la Valldigna',
    tipo: 'Monumento · Acceso libre',
    subtitulo: 'Antiguo acceso a la morería · Siglo XI árabe · XV cristiano',
    desc: 'El Portal de la Valldigna es uno de los rincones más fotogénicos y cargados de historia del Barrio del Carmen. Este arco de medio punto, construido sobre la muralla islámica del siglo XI, separaba en la Edad Media la Valencia cristiana de la morería, el barrio donde quedaron concentrados los musulmanes tras la Reconquista de Jaume I. El portal recibe su nombre del Monasterio Cisterciense de Santa María de Valldigna, cuya casa de procura se encontraba frente a él.',
    datos: [
      { d: 'Origen', v: 'Muralla árabe del siglo XI · Portal cristiano del siglo XV' },
      { d: 'Función', v: 'Separaba la ciudad cristiana de la morería medieval' },
      { d: 'Curiosidad', v: 'A pocos metros, Lamberto Palmart instaló la primera imprenta de España (1474)' },
      { d: 'Acceso', v: 'Libre · C/ de la Valldigna · Centro del barrio' },
    ],
    imgClass: 'img-valldignabc',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Árabe' }, { label: 'Medieval' }],
  },
  {
    num: '04',
    nombre: 'Centre del Carme Cultura Contemporània',
    tipo: 'Centro cultural · Acceso libre a exposiciones',
    subtitulo: 'Antiguo Convento del Carmen · Claustros gótico y renacentista',
    desc: 'El Centre del Carme Cultura Contemporània ocupa el antiguo Convento de Nuestra Señora del Carmen, que da nombre al barrio. El edificio, que fue también sede de la Escuela de Bellas Artes y Oficios, conserva dos espectaculares claustros: uno gótico del siglo XIV y otro renacentista del XVI. Hoy es un referente cultural de Valencia con exposiciones de artes visuales, artes escénicas, performance, música y una de las propuestas de arte contemporáneo más dinámicas de la ciudad.',
    datos: [
      { d: 'Edificio', v: 'Antiguo Convento del Carmen · Claustro gótico (s. XIV) y renacentista (s. XVI)' },
      { d: 'Programación', v: 'Artes visuales, performance, música y artes escénicas' },
      { d: 'Entrada', v: 'Muchas exposiciones de acceso libre · Consultar programación' },
      { d: 'Ubicación', v: 'Plaza del Carmen · Corazón del barrio' },
    ],
    imgClass: 'img-carmebc',
    tags: [{ label: 'Arte contemporáneo' }, { label: 'Claustro gótico' }, { label: 'Exposiciones' }],
  },
  {
    num: '05',
    nombre: 'IVAM · Institut Valencià d\'Art Modern',
    tipo: 'Museo · Colección de +12.000 obras',
    subtitulo: 'El museo de arte moderno más importante de la Comunitat',
    desc: 'El Institut Valencià d\'Art Modern es el gran museo de vanguardia del Barrio del Carmen y uno de los más prestigiosos de España. Su colección permanente supera las 12.000 obras de artistas nacionales e internacionales: pintura, escultura, dibujo, fotografía, vídeo e instalación. Entre los artistas representados destacan Julio González, Antoni Tàpies, Yves Klein, Tony Cragg, Carmen Calvo, Manolo Valdés o Fernando Arroyo. El viernes por la tarde la entrada es gratuita.',
    datos: [
      { d: 'Colección', v: '+12.000 obras del siglo XX y XXI' },
      { d: 'Entrada', v: '6 € · Gratuito los viernes por la tarde' },
      { d: 'Horario', v: 'Mar–Dom 10:00–19:00 h · Lunes cerrado' },
      { d: 'Ubicación', v: 'C/ de la Beneficencia, 2 · Junto al barrio del Carmen' },
    ],
    imgClass: 'img-ivambc',
    tags: [{ label: 'Arte moderno' }, { label: 'Gratis viernes' }, { label: '+12.000 obras' }],
  },
  {
    num: '06',
    nombre: 'Muralla Árabe y refugios de la Guerra Civil',
    tipo: 'Patrimonio histórico · Acceso libre',
    subtitulo: 'Siglo XI islámico · Refugios de la capital de la República',
    desc: 'El Barrio del Carmen es el lugar donde más visibles son los restos de la muralla árabe del siglo XI, porque el barrio creció a espaldas de ella, preservando e integrando sus lienzos y torres en las edificaciones. Pueden verse restos en las plazas del Ángel y los Navarros, en la calle de la Cruz, en la plaza del Tossal y en el interior del histórico Horno Montaner. Además, Valencia fue capital de la II República durante parte de la Guerra Civil, y en el número 25 de la calle Serrans y el 37 de la calle Alta se encuentran los refugios antiaéreos de la ciudad.',
    datos: [
      { d: 'Muralla árabe', v: 'Siglo XI · Restos en plaza del Tossal, del Ángel y calle de la Cruz' },
      { d: 'Horno Montaner', v: 'Torre árabe integrada en el edificio · Declarada Monumento Nacional (1963)' },
      { d: 'Refugios antiaéreos', v: 'C/ Serrans, 25 y C/ Alta, 37 · Valencia, capital de la República' },
      { d: 'Acceso', v: 'Los restos de muralla son visibles en la calle · Refugios con visita guiada' },
    ],
    imgClass: 'img-murallabc',
    tags: [{ label: 'Árabe s. XI' }, { label: 'Guerra Civil' }, { label: 'Historia' }],
  },
  {
    num: '07',
    nombre: 'Arte urbano · La Calle de los Colores',
    tipo: 'Galería al aire libre · Acceso libre',
    subtitulo: 'Murales, grafitis y street art · Calle Moret y alrededores',
    desc: 'El Barrio del Carmen es una de las mayores galerías de arte urbano al aire libre de España. La calle Moret, conocida como la Calle de los Colores, es su eje principal: murales de gran formato, grafitis con contenido social y obras de artistas locales como Escif o Vinilo transforman cada fachada en un lienzo. El arte urbano se concentra también en la calle Baja, la calle Alta y los alrededores de la Plaza del Tossal. La oferta cambia por temporadas: cada paseo es diferente al anterior.',
    datos: [
      { d: 'Calle de los Colores', v: 'Calle Moret · El eje principal del street art del Carmen' },
      { d: 'Artistas', v: 'Escif, Vinilo y decenas de artistas locales e internacionales' },
      { d: 'Más murales', v: 'C/ Baja, C/ Alta, Plaza del Tossal y alrededores del IVAM' },
      { d: 'Acceso', v: 'Completamente gratuito · La propuesta cambia cada temporada' },
    ],
    imgClass: 'img-streetartbc',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Street art' }, { label: 'Galería al aire libre' }],
  },
  {
    num: '08',
    nombre: 'Plazas y gastronomía del Carmen',
    tipo: 'Ambiente y gastronomía',
    subtitulo: 'Plaza del Negrito · Plaza del Árbol · Plaza del Carmen · Calle Caballeros',
    desc: 'Las plazas del Barrio del Carmen son el corazón social del barrio y de la vida nocturna valenciana. La Plaza del Negrito concentra bares y ritmo local hasta la madrugada. La Plaza del Árbol es un rincón más tranquilo y con encanto. La Plaza del Carmen, frente al antiguo convento, tiene terrazas perfectas para un café. La calle Caballeros es la arteria gastronómica principal. El "Agua de Valencia" —zumo de naranja, cava y vodka— se inventó aquí, en el Café de las Horas (Conde de Almodóvar, 1).',
    datos: [
      { d: 'Plaza del Negrito', v: 'Epicentro del ocio nocturno · Bares y terrazas hasta la madrugada' },
      { d: 'Calle Caballeros', v: 'La arteria gastronómica principal del barrio' },
      { d: 'Agua de Valencia', v: 'Zumo de naranja + cava + vodka · Inventado en el Café de las Horas' },
      { d: 'Atzucacs', v: 'Busca los callejones sin salida árabes escondidos en el barrio' },
    ],
    imgClass: 'img-plazasbc',
    tags: [{ label: 'Gastronomía' }, { label: 'Ocio nocturno' }, { label: 'Ambiente' }],
  },
];

var datosBarrio = [
  { label: 'Ubicación', val: 'Districte de Ciutat Vella · Extremo noroeste del casco histórico' },
  { label: 'Límites', val: 'Torres de Serranos (norte) · Torres de Quart (oeste) · Calle Caballeros (sur)' },
  { label: 'Historia', val: 'Más de 1.000 años · Arrabal árabe extramuros desde el siglo XI' },
  { label: 'Calles principales', val: 'Serranos, Cavallers, Quart, Guillem de Castro y Blanqueries' },
  { label: 'Cómo llegar', val: 'A pie desde el centro · Metro L1/L2 parada Àngel Guimerà · Valenbisi' },
  { label: 'Mejor momento', val: 'Día para monumentos y museos · Tarde-noche para plazas y gastronomía' },
];

export default function BarrioCarmen() {
  return (
    <div className="brc-page">

      {/* Hero */}
      <div className="brc-hero">
        <div className="brc-hero-overlay" />
        <div className="brc-hero-content">
          <div className="brc-eyebrow">Ciutat Vella · Centro histórico · Más de 1.000 años de historia</div>
          <h1>Barrio<br />del Carmen</h1>
          <p>El barrio más antiguo, más bohemio y más vibrante de Valencia. Un cóctel único de murallas medievales, arte urbano, museos de vanguardia y plazas llenas de vida mediterránea.</p>
        </div>
        <div className="brc-hero-stats">
          <div className="brc-stat">
            <span className="brc-stat-num">1.000</span>
            <span className="brc-stat-label">años de historia</span>
          </div>
          <div className="brc-stat-sep" />
          <div className="brc-stat">
            <span className="brc-stat-num">2</span>
            <span className="brc-stat-label">puertas medievales</span>
          </div>
          <div className="brc-stat-sep" />
          <div className="brc-stat">
            <span className="brc-stat-num">+12.000</span>
            <span className="brc-stat-label">obras de arte en el IVAM</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="brc-intro">
        <p>El Barrio del Carmen, en el extremo noroeste de Ciutat Vella, es el más conocido y visitado de Valencia. Recibe su nombre de la iglesia y el convento del Carmen Calzado y acumula más de mil años de historia: fue un arrabal árabe extramuros en el siglo XI, quedó dentro de la ciudad con la ampliación cristiana de la muralla en el siglo XIV y se convirtió desde entonces en refugio de gremios medievales de lo más variopinto.</p>
        <p>Hoy el Carmen es una combinación perfecta de <strong>arquitectura medieval</strong>, murallas árabes integradas en las casas, museos de arte moderno y contemporáneo, una de las mayores galerías de street art de España y el epicentro de la vida nocturna valenciana. Todo en un área compacta, recorrible completamente a pie.</p>
      </div>

      {/* Lugares */}
      <div className="brc-section-title">
        <h2>Qué ver en el Barrio del Carmen</h2>
        <p>Ocho paradas imprescindibles que combinan historia, cultura, arte y gastronomía.</p>
      </div>

      <div className="brc-routes">
        {lugares.map(lugar => (
          <div className="brc-route-item" key={lugar.num}>
            <div className="brc-route-num">{lugar.num}</div>

            <div className="brc-route-text">
              <div className="brc-tipo">{lugar.tipo}</div>
              <h2>{lugar.nombre}</h2>
              <div className="brc-subtitulo">{lugar.subtitulo}</div>
              <p className="brc-desc">{lugar.desc}</p>

              <div className="brc-datos-titulo">Detalles</div>
              <ul className="brc-datos">
                {lugar.datos.map(dt => (
                  <li key={dt.d}>
                    <span className="brc-dato-label">{dt.d}:</span>
                    <span className="brc-dato-val"> {dt.v}</span>
                  </li>
                ))}
              </ul>

              <div className="brc-tags">
                {lugar.tags.map(t => (
                  <span key={t.label} className={`brc-tag ${t.free ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="brc-route-img">
              <div className={`brc-route-img-inner ${lugar.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos del barrio */}
      <div className="brc-info-practica">
        <h3>Información práctica · Barrio del Carmen</h3>
        <div className="brc-tabla">
          {datosBarrio.map(d => (
            <div className="brc-tabla-fila" key={d.label}>
              <div className="brc-tabla-label">{d.label}</div>
              <div className="brc-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="brc-info-box">
        <h3>Consejos para visitar el Barrio del Carmen</h3>
        <ul className="brc-info-list">
          <li>Las <strong>Torres de Serranos y de Quart</strong> tienen entrada gratuita todo el año: ideal para empezar la visita</li>
          <li>El <strong>IVAM</strong> es gratuito los viernes por la tarde: el mejor momento para visitarlo sin colas</li>
          <li>El <strong>Centre del Carme</strong> tiene muchas exposiciones de acceso libre: consulta la programación antes de ir</li>
          <li>El barrio es completamente <strong>peatonal y plano</strong>: perfecto para recorrerlo en bicicleta con Valenbisi</li>
          <li>Para el arte urbano, empieza por la <strong>calle Moret</strong> (Calle de los Colores) y sigue hacia la Plaza del Tossal</li>
          <li>El <strong>Agua de Valencia</strong> original se toma en el Café de las Horas (Conde de Almodóvar, 1) · Abre desde mediodía</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}