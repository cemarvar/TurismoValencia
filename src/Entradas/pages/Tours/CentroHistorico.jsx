import '../../assets/cssTours/CentroHistorico.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var toursEsenciales = [
  {
    num: '01',
    nombre: 'Valencia esencial y sus Patrimonios de la Humanidad',
    tipo: 'Tour a pie · 2 horas · Guía oficial · Disponible todo el año',
    subtitulo: 'Español · Inglés · Italiano · Francés · 10% dto. VTC · Puntuación 4,9/5',
    desc: 'El tour más completo para descubrir el alma de Valencia en dos horas. Un guía oficial de turismo conduce el recorrido por los monumentos más emblemáticos del centro histórico: la Catedral y el Santo Cáliz, la Lonja de la Seda (Patrimonio de la Humanidad), las Torres de Serranos, la Plaza de la Virgen y la Basílica de los Desamparados, el Mercado Central y el barrio del Carmen. El recorrido combina los grandes hitos medievales con las historias cotidianas de la Valencia de siempre: sus mitos, leyendas, tradiciones y la gastronomía que nació en estas calles. Disponible en español, inglés, italiano y francés. Ideal para quienes visitan Valencia por primera vez y quieren orientarse desde el primer día con el contexto cultural necesario para entender la ciudad.',
    datos: [
      { d: 'Duración', v: '2 horas · A pie por el casco histórico · Guía oficial de turismo bilingüe' },
      { d: 'Precio', v: 'Desde 18,00 € por persona · 10% de descuento con Valencia Tourist Card' },
      { d: 'Idiomas', v: 'Español · Inglés · Italiano · Francés' },
      { d: 'Disponibilidad', v: 'Disponible todo el año · Consultar horarios y sesiones disponibles en la web' },
    ],
    imgClass: 'img-ch-esencial',
    tags: [{ label: 'Más vendido' }, { label: 'Patrimonio UNESCO' }, { label: '4,9/5 ★' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/valencia-esencial-patrimonios-humanidad',
  },
  {
    num: '02',
    nombre: 'City Tour: cultura, comercio y visita al interior de la Lonja de la Seda',
    tipo: 'Tour a pie · 2 horas · Domingos 11:00 · Entrada a la Lonja incluida',
    subtitulo: 'Español · Inglés · Italiano · Francés · Entrada Lonja incluida · 10% dto. VTC · 5/5 ★',
    desc: 'Una visita guiada especial que incluye el acceso al interior de la Lonja de la Seda, el edificio civil gótico más importante de España y uno de los más impresionantes de Europa. Declarado Patrimonio de la Humanidad por la UNESCO en 1996, el recorrido descubre el Salón Columnario, la Torre y el Consulado del Mar con toda su historia mercantil medieval. Además del interior de la Lonja, el tour recorre las calles comerciales históricas de Valencia, el Mercado Central, la Plaza del Mercado y el entorno de la Ciudad Vieja, explicando cómo el comercio de la seda convirtió a Valencia en una de las ciudades más ricas del Mediterráneo en el siglo XV. Disponible los domingos a las 11:00 h.',
    datos: [
      { d: 'Duración', v: '2 horas · Entrada al interior de la Lonja de la Seda incluida en el precio' },
      { d: 'Precio', v: 'Desde 18,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Horario', v: 'Domingos · 11:00 h · Consultar disponibilidad' },
      { d: 'Idiomas', v: 'Español · Inglés · Italiano · Francés' },
    ],
    imgClass: 'img-ch-lonja',
    tags: [{ label: 'Lonja interior' }, { label: 'Patrimonio UNESCO' }, { label: 'Domingos' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/city-tour-valencia-cultura-comercio-y-lonja',
  },
  {
    num: '03',
    nombre: 'Tour de arte y arquitectura por el casco antiguo',
    tipo: 'Tour a pie · 3 horas · Martes a sábado · Entradas a monumentos incluidas',
    subtitulo: 'Español · Inglés · Italiano · Entradas incluidas · 10% dto. VTC · 5/5 ★',
    desc: 'El tour más completo y profundo del centro histórico, pensado para los amantes del arte y la arquitectura. Durante 3 horas, un guía especializado descubre las capas históricas y artísticas de la Valencia medieval, gótica, renacentista y barroca, incluyendo las entradas a los monumentos más relevantes del recorrido. El tour analiza en detalle la arquitectura de la Catedral, la Lonja, el Palacio del Marqués de Dos Aguas y las iglesias del barrio del Carmen, contextualizando las obras dentro de los movimientos artísticos de cada época. Ideal para viajeros con interés cultural profundo que quieren ir mucho más allá de la visita superficial.',
    datos: [
      { d: 'Duración', v: '3 horas · Entradas a monumentos incluidas en el precio del tour' },
      { d: 'Precio', v: 'Desde 45,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Horario', v: 'De martes a sábado · Consultar sesiones disponibles' },
      { d: 'Idiomas', v: 'Español · Inglés · Italiano' },
    ],
    imgClass: 'img-ch-arte',
    tags: [{ label: '3 horas' }, { label: 'Entradas incluidas' }, { label: 'Arte y arquitectura' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/tour-arte-y-arquitectura-centro-historico',
  },
];

var toursTematicos = [
  {
    nombre: 'València, ciudad del Santo Cáliz',
    subtitulo: 'Viernes · 10:00 h · Entrada a la Catedral incluida · 2 h',
    precio: 'Desde 18,00 €',
    detalle: '15% dto. VTC · Español · Inglés · Puntuación 5/5',
    desc: 'Recorrido por la ruta del Santo Cáliz, el cáliz que según la tradición fue usado por Jesús en la Última Cena y que se custodia en la Catedral de Valencia. Incluye entrada a la Catedral.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/visita-guiada-ruta-santo-grial',
  },
  {
    nombre: 'Visita Guiada especial con niños por lo mejor de València',
    subtitulo: 'Diaria · 10:30 h · 2 h · Familiar',
    precio: 'Desde 16,00 €',
    detalle: '10% dto. VTC · Español · Italiano · Puntuación 5/5',
    desc: 'Tour diseñado especialmente para familias con niños. Dinámico, participativo y lleno de historias y curiosidades que harán que los más pequeños descubran Valencia de otra manera.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/valencia-tour-familiar',
  },
  {
    nombre: 'Visita guiada "Sorolla, el pintor de València"',
    subtitulo: 'Domingos · 2 h · Español e Inglés',
    precio: 'Desde 18,00 €',
    detalle: '10% dto. VTC · Español · Inglés · Puntuación 5/5',
    desc: 'Un recorrido por los escenarios valencianos que inspiraron al pintor Joaquín Sorolla: las calles, la luz mediterránea, la playa y el barrio que marcaron su obra y su visión del mundo.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/visita-guiada-sorolla',
  },
  {
    nombre: 'Las Fallas de Valencia: emoción todo el año',
    subtitulo: 'Sábados · 10:30 h · 2 h · Español e Inglés',
    precio: 'Desde 35,00 €',
    detalle: 'Español · Inglés · Fallas Patrimonio UNESCO',
    desc: 'Descubre la fiesta más importante de Valencia a lo largo de todo el año. Un tour que explica el origen, los rituales, los personajes y los lugares clave de las Fallas, Patrimonio de la Humanidad.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/visita-guiada-fallas-todo-el-ano',
  },
];

var toursIglesias = [
  {
    nombre: 'Entrada a la Iglesia de San Nicolás — la Capilla Sixtina valenciana',
    subtitulo: 'Martes a domingo · 45 min – 1h 15 min · Audioguía en 6 idiomas',
    precio: 'Desde 16,00 €',
    detalle: '-1 € con VTC · 4,9/5 (141 opiniones) · Español · Inglés · Italiano · Francés',
    desc: 'La Iglesia de San Nicolás alberga uno de los techos pintados más impresionantes del mundo: 1.600 m² de frescos barrocos del siglo XVII que cubren completamente bóveda y paredes, creando un efecto visual comparable a la Capilla Sixtina. Audioguía disponible en español, inglés, italiano y francés.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/visita-turistica-iglesia-san-nicolas',
  },
  {
    nombre: 'Entrada a la Iglesia de los Santos Juanes con audiovisual "Barroc Immersive"',
    subtitulo: 'Todos los días · Multilingüe · Audiovisual inmersivo',
    precio: 'Desde 15,00 €',
    detalle: '-1 € con VTC · 5/5 · Español · Inglés · Italiano · Francés · Alemán · Neerlandés',
    desc: 'La iglesia junto al Mercado Central ofrece una experiencia audiovisual inmersiva "Barroc Immersive" que muestra la historia y el arte barroco de este templo del siglo XVII de forma innovadora y emocionante.',
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-centro-historico/iglesia-santos-juanes-entradas',
  },
];

var recorrido = [
  { lugar: 'Plaza del Ayuntamiento', detalle: 'El corazón de Valencia · Punto de inicio habitual' },
  { lugar: 'Universidad La Nao', detalle: 'El edificio histórico de la Universitat de València' },
  { lugar: 'Palacio del Marqués de Dos Aguas', detalle: 'Portada churrigueresca · Museo Nacional de Cerámica' },
  { lugar: 'Plaza Redonda', detalle: 'La única plaza circular del centro histórico' },
  { lugar: 'Mercado Central', detalle: 'Mercado modernista más grande de Europa · 1920' },
  { lugar: 'Lonja de la Seda', detalle: 'Gótico civil · Patrimonio UNESCO · s. XV' },
  { lugar: 'Plaza de Santa Catalina', detalle: 'Horchaterías tradicionales · Campanario mudéjar' },
  { lugar: 'Plaza de la Reina', detalle: 'Frente a la Catedral · Eje del centro histórico' },
  { lugar: 'Catedral de Valencia', detalle: 'Santo Cáliz · Miguelete · Estilos gótico, barroco y neoclásico' },
  { lugar: 'Plaza de la Almoina', detalle: 'Yacimiento arqueológico · Origen romano de la ciudad' },
  { lugar: 'Plaza de la Virgen', detalle: 'Fuente del Turia · La plaza más bella de Valencia' },
  { lugar: 'Basílica de los Desamparados', detalle: 'Patrona de Valencia · Barroco valenciano · s. XVII' },
];

export default function CentroHistorico() {
  return (
    <div className="ch-page">

      {/* Hero */}
      <div className="ch-hero">
        <div className="ch-hero-overlay" />
        <div className="ch-hero-content">
          <div className="ch-eyebrow">Tours Guiados · Centro Histórico de Valencia · Visitas a pie</div>
          <h1>Tours por el<br />Centro<br />Histórico</h1>
          <p>Descubre 2.000 años de historia con guías oficiales de turismo: la Catedral, la Lonja de la Seda (Patrimonio UNESCO), el barrio del Carmen, la Plaza de la Virgen y mucho más.</p>
        </div>
        <div className="ch-hero-stats">
          <div className="ch-stat">
            <span className="ch-stat-num">2.000</span>
            <span className="ch-stat-label">Años de historia</span>
          </div>
          <div className="ch-stat-sep" />
          <div className="ch-stat">
            <span className="ch-stat-num">Desde 15€</span>
            <span className="ch-stat-label">Por persona</span>
          </div>
          <div className="ch-stat-sep" />
          <div className="ch-stat">
            <span className="ch-stat-num">10</span>
            <span className="ch-stat-label">Tours disponibles</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="ch-intro-box">
        <div className="ch-intro-icono">🏛️</div>
        <div className="ch-intro-content">
          <div className="ch-intro-titulo">La Ciutat Vella · El corazón de Valencia</div>
          <p>El centro histórico de Valencia —la <strong>Ciutat Vella</strong>— es uno de los cascos medievales mejor conservados del Mediterráneo. Fundada por los romanos en el año 138 a.C. como <em>Valentia Edetanorum</em>, la ciudad acumula capas de historia romana, visigoda, árabe, medieval y barroca visibles a cada paso. Sus joyas son la <strong>Catedral</strong> —que custodia el Santo Cáliz—, la <strong>Lonja de la Seda</strong> (Patrimonio de la Humanidad), la iglesia de <strong>San Nicolás</strong> —llamada la Capilla Sixtina valenciana—, el <strong>Mercado Central</strong> modernista y el laberíntico <strong>barrio del Carmen</strong>. Un guía oficial convierte un simple paseo en un viaje en el tiempo.</p>
        </div>
      </div>

      {/* Recorrido chips */}
      <div className="ch-recorrido-wrap">
        <div className="ch-recorrido-titulo">Lugares que visitan los tours del centro histórico</div>
        <div className="ch-recorrido-grid">
          {recorrido.map(r => (
            <div className="ch-recorrido-chip" key={r.lugar}>
              <span className="ch-recorrido-nombre">{r.lugar}</span>
              <span className="ch-recorrido-detalle">{r.detalle}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section title */}
      <div className="ch-section-title">
        <h2>Tours esenciales del Centro Histórico</h2>
        <p>Los tres recorridos más recomendados para conocer Valencia en profundidad.</p>
      </div>

      {/* Tours esenciales */}
      <div className="ch-routes">
        {toursEsenciales.map(tour => (
          <div className="ch-route-item" key={tour.num}>
            <div className="ch-route-num">{tour.num}</div>
            <div className="ch-route-text">
              <div className="ch-tipo">{tour.tipo}</div>
              <h2>{tour.nombre}</h2>
              <div className="ch-subtitulo">{tour.subtitulo}</div>
              <p className="ch-desc">{tour.desc}</p>
              <div className="ch-datos-titulo">Datos clave</div>
              <ul className="ch-datos">
                {tour.datos.map(d => (
                  <li key={d.d}>
                    <span className="ch-dato-label">{d.d}:</span>
                    <span className="ch-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="ch-tags">
                {tour.tags.map(t => (
                  <span key={t.label} className="ch-tag">{t.label}</span>
                ))}
              </div>
              <a href={tour.url} target="_blank" rel="noopener noreferrer" className="ch-comprar-btn">
                Reservar en visitvalencia.com →
              </a>
            </div>
            <div className="ch-route-img">
              <div className={`ch-route-img-inner ${tour.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tours temáticos */}
      <div className="ch-tematicos-section">
        <h3>Visitas guiadas temáticas</h3>
        <p className="ch-tematicos-desc">Tours especializados para profundizar en aspectos concretos de la historia y la cultura valenciana.</p>
        <div className="ch-tematicos-grid">
          {toursTematicos.map(t => (
            <div className="ch-tematico-card" key={t.nombre}>
              <div className="ch-tematico-nombre">{t.nombre}</div>
              <div className="ch-tematico-subtitulo">{t.subtitulo}</div>
              <p className="ch-tematico-desc-text">{t.desc}</p>
              <div className="ch-tematico-footer">
                <span className="ch-tematico-precio">{t.precio}</span>
                <span className="ch-tematico-detalle">{t.detalle}</span>
              </div>
              <a href={t.url} target="_blank" rel="noopener noreferrer" className="ch-tematico-link">
                Reservar →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Iglesias */}
      <div className="ch-iglesias-section">
        <h3>Visitas a iglesias · Entradas con audioguía</h3>
        <p className="ch-iglesias-desc">Dos de las iglesias más impresionantes de Valencia, con acceso independiente y audioguía incluida.</p>
        <div className="ch-iglesias-grid">
          {toursIglesias.map(ig => (
            <div className="ch-iglesia-card" key={ig.nombre}>
              <div className="ch-iglesia-nombre">{ig.nombre}</div>
              <div className="ch-iglesia-subtitulo">{ig.subtitulo}</div>
              <p className="ch-iglesia-desc-text">{ig.desc}</p>
              <div className="ch-iglesia-footer">
                <span className="ch-iglesia-precio">{ig.precio}</span>
                <span className="ch-iglesia-detalle">{ig.detalle}</span>
              </div>
              <a href={ig.url} target="_blank" rel="noopener noreferrer" className="ch-iglesia-link">
                Comprar entrada →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Tour Discovering Valencia */}
      <div className="ch-discovering-box">
        <div className="ch-discovering-icono">🧭</div>
        <div className="ch-discovering-content">
          <div className="ch-discovering-titulo">Visita guiada a pie · La esencia del centro histórico</div>
          <p>La empresa <strong>Discovering Valencia</strong> ofrece una visita guiada a pie por el centro histórico disponible todo el año, desde <strong>15 € por persona</strong>, con guía oficial de turismo. El recorrido visita los exteriores de los monumentos más emblemáticos: Plaza del Ayuntamiento, Palacio del Marqués de Dos Aguas, Plaza Redonda, Plaza Santa Catalina, Catedral, Plaza de la Almoina, Plaza de la Virgen y Basílica de los Desamparados. La visita es <strong>100% accesible</strong> para personas con movilidad reducida y usuarios de silla de ruedas. Para grupos de más de 10 personas se puede contratar visita privada.</p>
          <div className="ch-discovering-datos">
            <span>📍 Precio: 15 € por persona</span>
            <span>⏱ Disponible todo el año · Lunes a domingo</span>
            <span>♿ 100% accesible</span>
            <span>📞 687 025 082 · info@discovering-valencia.com</span>
          </div>
          <a
            href="https://discovering-valencia.com/es/"
            target="_blank"
            rel="noopener noreferrer"
            className="ch-discovering-btn"
          >
            Ver en discovering-valencia.com →
          </a>
        </div>
      </div>

      {/* Info box */}
      <div className="ch-info-box">
        <h3>Consejos para visitar el Centro Histórico de Valencia</h3>
        <ul className="ch-info-list">
          <li>La mejor hora para el tour es <strong>por la mañana temprano</strong> (9–11 h): menos calor, menos turistas y mejor luz para fotografiar los monumentos</li>
          <li>Si solo tienes tiempo para un tour, elige el de <strong>Valencia esencial y sus Patrimonios de la Humanidad</strong>: en 2 horas ves los puntos clave con contexto histórico real</li>
          <li>La <strong>Iglesia de San Nicolás</strong> (la Capilla Sixtina valenciana) se puede visitar de forma independiente desde 16 €; los frescos del techo son absolutamente impresionantes</li>
          <li>El tour del <strong>Santo Cáliz</strong> (viernes 10 h) incluye entrada a la Catedral: la única forma de ver de cerca el cáliz que según la tradición usó Jesús en la Última Cena</li>
          <li>Con la <strong>Valencia Tourist Card</strong> tienes un 10–15% de descuento en casi todos los tours del centro histórico</li>
          <li>El <strong>barrio del Carmen</strong> es ideal para explorar a tu aire después del tour: callejuelas medievales, galerías de arte, murales y la mejor selección de terrazas de tapas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}