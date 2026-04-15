import '../../assets/cssEsencial/Bioparc.css';
import Footer from '../../FOOTER/Footer';

var habitats = [
  {
    num: '01',
    nombre: 'Sabana africana',
    subtitulo: 'El paisaje africano por excelencia',
    desc: 'El hábitat más extenso de BIOPARC recrea la sabana subsahariana con una fidelidad asombrosa. Barreras prácticamente invisibles permiten compartir el espacio visual con los animales, creando la ilusión de estar en el corazón del continente africano. Es el hogar de las especies más emblemáticas y de mayor tamaño del parque.',
    animales: [
      { nombre: 'Elefantes africanos', desc: 'La manada reina de la sabana, con crías que nacen en el parque' },
      { nombre: 'Rinocerontes blancos', desc: 'BIOPARC fue el primer zoo de España en lograr su reproducción en cautividad' },
      { nombre: 'Leones', desc: 'El rey de la sabana en una instalación que recrea su hábitat natural' },
      { nombre: 'Jirafas y cebras', desc: 'Conviven en el mismo espacio junto a impalas y avestruces' },
    ],
    imgClass: 'img-sabana',
    tags: [{ label: 'Elefantes' }, { label: 'Leones' }, { label: 'Rinocerontes' }, { label: 'Jirafas' }],
  },
  {
    num: '02',
    nombre: 'África ecuatorial',
    subtitulo: 'La selva donde los primates son los reyes',
    desc: 'La densa vegetación de la selva ecuatorial africana acoge a los grandes simios y a algunas de las especies más sorprendentes y difíciles de ver en libertad. La recreación del ecosistema incluye plantas tropicales auténticas, riachuelos y zonas de sombra que imitan las condiciones reales de la selva centroafricana.',
    animales: [
      { nombre: 'Gorilas occidentales', desc: 'Una de las especies más amenazadas del planeta, en familia' },
      { nombre: 'Chimpancés', desc: 'Los primates más inteligentes, con comportamientos sociales fascinantes' },
      { nombre: 'Leopardos', desc: 'Los felinos más elusivos de África, habitualmente difíciles de ver' },
      { nombre: 'Antílopes y bongos', desc: 'Especies forestales que conviven en el sotobosque del hábitat' },
    ],
    imgClass: 'img-ecuatorial',
    tags: [{ label: 'Gorilas' }, { label: 'Chimpancés' }, { label: 'Leopardos' }, { label: 'Primates' }],
  },
  {
    num: '03',
    nombre: 'Humedales africanos',
    subtitulo: 'Las aguas donde acechan hipopótamos y cocodrilos',
    desc: 'Inspirado en la cueva de Kitum, en Kenia, y en los grandes sistemas de humedales africanos, este hábitat recrea las orillas y aguas interiores del continente. Una experiencia única que permite observar a los hipopótamos tanto desde la superficie como bajo el agua, a través de cristales sumergidos.',
    animales: [
      { nombre: 'Hipopótamos', desc: 'Visibles nadando bajo el agua a través de los acristalamientos' },
      { nombre: 'Cocodrilos del Nilo', desc: 'El reptil más temido de África en su entorno natural recreado' },
      { nombre: 'Flamencos', desc: 'Colonias de flamencos rosados en las lagunas del hábitat' },
      { nombre: 'Aves acuáticas', desc: 'Diversas especies de aves africanas ligadas al agua y los humedales' },
    ],
    imgClass: 'img-humedalesbio',
    tags: [{ label: 'Hipopótamos' }, { label: 'Cocodrilos' }, { label: 'Bajo el agua' }, { label: 'Flamencos' }],
  },
  {
    num: '04',
    nombre: 'Isla de Madagascar',
    subtitulo: 'El reino de los lémures en la isla más singular de África',
    desc: 'Madagascar es una de las islas con mayor biodiversidad del planeta: el 90 % de sus especies no existen en ningún otro lugar de la Tierra. BIOPARC recrea este ecosistema único con hasta siete especies de lémures, algunos de ellos en peligro crítico de extinción, en un espacio diseñado para facilitar el acercamiento y la observación de estos primates tan peculiares.',
    animales: [
      { nombre: 'Lémures de cola anillada', desc: 'El lémur más reconocible, activo y social del parque' },
      { nombre: 'Lémures ratón', desc: 'Los primates más pequeños del mundo, de hábitos nocturnos' },
      { nombre: 'Indri', desc: 'El lémur más grande, conocido por sus llamadas que resuenan en la selva' },
      { nombre: 'Fosa', desc: 'El mayor depredador de Madagascar, parecido a un felino' },
    ],
    imgClass: 'img-madagascar',
    tags: [{ label: 'Lémures' }, { label: 'Endémico' }, { label: '7 especies' }, { label: 'En peligro' }],
  },
];

var actividades = [
  {
    nombre: 'La Última Frontera',
    tipo: 'Realidad Virtual',
    desc: 'Una experiencia inmersiva de realidad virtual que te lleva al fondo del océano para descubrir la fascinante fauna marina. Disponible en el interior del parque con reserva previa.',
    precio: 'Precio adicional · Reserva recomendada',
    imgClass: 'img-vr',
  },
  {
    nombre: 'Visitas a Madagascar',
    tipo: 'Visita especial',
    desc: 'Recorridos guiados exclusivos por la Isla de Madagascar para conocer de cerca a los lémures y su historia de conservación de la mano de los cuidadores del parque.',
    precio: 'Precio adicional · Plazas limitadas',
    imgClass: 'img-madagascar-act',
  },
  {
    nombre: 'Encuentro con cuidadores',
    tipo: 'Experiencia única',
    desc: 'Acompañar al equipo de cuidado animal durante su jornada y conocer de primera mano cómo se trabaja con los animales en un parque de conservación de estas características.',
    precio: 'Precio adicional · Reserva obligatoria',
    imgClass: 'img-cuidadores',
  },
  {
    nombre: 'Talleres educativos',
    tipo: 'Educación',
    desc: 'Desde la preparación de cajas-refugio para murciélagos hasta talleres de biología animal para escolares y familias. Consulta el programa completo en la web de BIOPARC.',
    precio: 'Incluido en la entrada · Algunos con coste adicional',
    imgClass: 'img-talleres',
  },
];

var entradas = [
  { tipo: 'Adulto (13–64 años)', precio: '32,50 €', nota: 'Entrada general todo el año', destacada: false },
  { tipo: 'Reducida (3–12 años y +65)', precio: '24,00 €', nota: 'Niños menores de 3 años gratis', destacada: false },
  { tipo: 'Pase anual B!', precio: 'Desde 79 €', nota: 'Acceso ilimitado durante 1 año + descuentos', destacada: true },
  { tipo: 'Pack Entrada + Menú', precio: 'Desde 42 €', nota: 'Ahorro combinando entrada y comida', destacada: false },
  { tipo: 'VTC 72h + Bioparc + CAC', precio: 'Desde 105,63 €', nota: 'Valencia Tourist Card + Oceanogràfic + Museu + Hemisfèric', destacada: false },
];

var comoLlegar = [
  { medio: 'Metro', detalle: 'Líneas 3 y 5 · Parada Nou d\'Octubre o Av. del Cid · 10 min a pie' },
  { medio: 'Autobús', detalle: 'Líneas 67, 73, 95, 98 y 99 · Parada junto al parque' },
  { medio: 'Coche', detalle: 'Aparcamiento propio · 7 €/día · Sin reserva previa' },
  { medio: 'Bicicleta', detalle: 'Por el Jardín del Turia · Carril bici continuo desde el centro' },
];

export default function Bioparc() {
  return (
    <div className="bp-page">

      {/* Hero */}
      <div className="bp-hero">
        <div className="bp-hero-overlay" />
        <div className="bp-hero-content">
          <div className="bp-eyebrow">Valencia · Parque de Cabecera · Abierto 365 días</div>
          <h1>BIOPARC<br />Valencia</h1>
          <p>Un pedazo de África en Valencia. Más de 6.000 animales de 150 especies en 100.000 m² de hábitats africanos donde las barreras son prácticamente invisibles.</p>
        </div>
        <div className="bp-hero-stats">
          <div className="bp-stat">
            <span className="bp-stat-num">6.000+</span>
            <span className="bp-stat-label">Animales</span>
          </div>
          <div className="bp-stat-sep" />
          <div className="bp-stat">
            <span className="bp-stat-num">150</span>
            <span className="bp-stat-label">Especies</span>
          </div>
          <div className="bp-stat-sep" />
          <div className="bp-stat">
            <span className="bp-stat-num">100.000 m²</span>
            <span className="bp-stat-label">de espacio</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="bp-intro">
        <p>BIOPARC Valencia es un zoológico de nueva generación situado en el Parque de Cabecera, a orillas del antiguo cauce del río Turia. A diferencia de los zoológicos tradicionales, en BIOPARC los animales campan a sus anchas por espacios que recrean con fidelidad sus hábitats naturales africanos, y los visitantes se sienten parte de esos mismos ecosistemas gracias a barreras prácticamente invisibles.</p>
        <p>Fundado en 2008 y con <strong>18 años de historia</strong>, BIOPARC Valencia es reconocido internacionalmente por su modelo de conservación y bienestar animal. La Fundación BIOPARC financia proyectos de conservación en el continente africano con parte de los ingresos del parque.</p>
      </div>

      {/* Hábitats */}
      <div className="bp-section-title">
        <h2>Los cuatro hábitats de BIOPARC</h2>
        <p>Cada zona recrea un ecosistema africano diferente con sus especies propias y su vegetación auténtica.</p>
      </div>

      <div className="bp-routes">
        {habitats.map(h => (
          <div className="bp-route-item" key={h.num}>
            <div className="bp-route-num">{h.num}</div>
            <div className="bp-route-text">
              <h2>{h.nombre}</h2>
              <div className="bp-subtitulo">{h.subtitulo}</div>
              <p className="bp-desc">{h.desc}</p>

              <div className="bp-animales-titulo">Animales que verás</div>
              <ul className="bp-animales">
                {h.animales.map(a => (
                  <li key={a.nombre}>
                    <span className="bp-animal-nombre">{a.nombre}:</span>
                    <span className="bp-animal-desc"> {a.desc}</span>
                  </li>
                ))}
              </ul>

              <div className="bp-tags">
                {h.tags.map(t => (
                  <span key={t.label} className="bp-tag">{t.label}</span>
                ))}
              </div>
            </div>
            <div className="bp-route-img">
              <div className={`bp-route-img-inner ${h.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Actividades */}
      <div className="bp-actividades-section">
        <div className="bp-section-title">
          <h2>Actividades especiales</h2>
          <p>Más allá de ver los animales, BIOPARC ofrece experiencias únicas para todos los públicos.</p>
        </div>
        <div className="bp-actividades-grid">
          {actividades.map(a => (
            <div className="bp-actividad-card" key={a.nombre}>
              <div className={`bp-actividad-img ${a.imgClass}`} />
              <div className="bp-actividad-body">
                <div className="bp-actividad-tipo">{a.tipo}</div>
                <div className="bp-actividad-nombre">{a.nombre}</div>
                <p className="bp-actividad-desc">{a.desc}</p>
                <div className="bp-actividad-precio">{a.precio}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Entradas */}
      <div className="bp-entradas-section">
        <h3>Precios de entrada</h3>
        <p className="bp-entradas-nota">BIOPARC está abierto los 365 días del año. Horario de invierno y otoño de 10:00 a 18:00 h · Horario de verano y primavera de 10:00 a 20:00 h. Las taquillas cierran una hora antes del cierre del parque.</p>
        <div className="bp-entradas-tabla">
          {entradas.map(e => (
            <div className={`bp-entrada-fila ${e.destacada ? 'destacada' : ''}`} key={e.tipo}>
              <div className="bp-entrada-tipo">
                {e.destacada && <span className="bp-entrada-badge">Mejor opción</span>}
                {e.tipo}
              </div>
              <div className="bp-entrada-precio">{e.precio}</div>
              <div className="bp-entrada-nota">{e.nota}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo llegar */}
      <div className="bp-llegar-section">
        <h3>Cómo llegar</h3>
        <div className="bp-llegar-grid">
          {comoLlegar.map(c => (
            <div className="bp-llegar-item" key={c.medio}>
              <div className="bp-llegar-medio">{c.medio}</div>
              <div className="bp-llegar-detalle">{c.detalle}</div>
            </div>
          ))}
        </div>
        <div className="bp-direccion">
           Avenida Pío Baroja, 3 · 46015 Valencia · info@bioparcvalencia.es
        </div>
      </div>

      {/* Info box */}
      <div className="bp-info-box">
        <h3>Consejos para visitar BIOPARC Valencia</h3>
        <ul className="bp-info-list">
          <li>Reserva tu entrada <strong>online con antelación</strong> para evitar colas, especialmente en fines de semana</li>
          <li>Dedica <strong>al menos 3 horas</strong> para recorrer todos los hábitats con calma</li>
          <li>La actividad de los animales es mayor a primera hora y al final de la tarde</li>
          <li>El <strong>aparcamiento propio</strong> cuesta 7 €/día sin necesidad de reserva previa</li>
          <li>Los <strong>menores de 3 años</strong> tienen entrada gratuita</li>
          <li>El parque abre los <strong>365 días del año</strong>, incluidos festivos</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}