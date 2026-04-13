import '../assets/css/Festivos.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

// Festivos 2026 Valencia: nacionales + autonómicos + locales
var festivos2026 = [
  {
    mes: 'Enero',
    num: '01',
    dias: [
      {
        fecha: '1 ene',
        dia: 'Jueves',
        nombre: 'Año Nuevo',
        tipo: 'nacional',
        desc: 'Inicio del año. La Plaza del Ayuntamiento acoge las campanadas de la víspera y los primeros eventos del año.',
        icono: '🎆',
      },
      {
        fecha: '6 ene',
        dia: 'Martes',
        nombre: 'Epifanía del Señor · Reyes Magos',
        tipo: 'nacional',
        desc: 'Cabalgata de los Reyes Magos por el centro de Valencia la víspera. La ilusión de los más pequeños en la noche más mágica del invierno.',
        icono: '👑',
      },
      {
        fecha: '22 ene',
        dia: 'Jueves',
        nombre: 'San Vicente Mártir',
        tipo: 'local',
        desc: 'Festivo local exclusivo de la ciudad de Valencia. Patrón de la ciudad, mártir valenciano del siglo IV. Se celebra con actos religiosos y la recreación del bautizo de San Vicente Ferrer.',
        icono: '⛪',
      },
    ],
  },
  {
    mes: 'Marzo',
    num: '03',
    dias: [
      {
        fecha: '19 mar',
        dia: 'Jueves',
        nombre: 'San José · Las Fallas',
        tipo: 'nacional',
        desc: 'La noche más esperada del año. La "cremà" quema todas las fallas en una espectacular muestra de fuego y pirotecnia. El día grande de la mayor fiesta de Valencia, Patrimonio Inmaterial de la Humanidad.',
        icono: '🔥',
      },
    ],
  },
  {
    mes: 'Abril',
    num: '04',
    dias: [
      {
        fecha: '3 abr',
        dia: 'Viernes',
        nombre: 'Viernes Santo',
        tipo: 'nacional',
        desc: 'Semana Santa Marinera en los Poblados Marítimos, con procesiones únicas de cofradías de granaderos al estilo napoleónico. Una de las Semanas Santas más singulares de España.',
        icono: '✝',
      },
      {
        fecha: '6 abr',
        dia: 'Lunes',
        nombre: 'Lunes de Pascua',
        tipo: 'autonomico',
        desc: 'Festivo autonómico de la Comunitat Valenciana. Junto con el Viernes Santo, crea un puente de cuatro días en Semana Santa.',
        icono: '🐣',
      },
      {
        fecha: '28 abr',
        dia: 'Martes',
        nombre: 'San Vicente Ferrer',
        tipo: 'local',
        desc: 'Festivo local de la ciudad de Valencia y patrón de la Comunitat Valenciana. Se representan los "miracles" de San Vicente, obras teatrales callejeras que recrean milagros del santo en plazas y barrios.',
        icono: '🎭',
      },
    ],
  },
  {
    mes: 'Mayo',
    num: '05',
    dias: [
      {
        fecha: '1 may',
        dia: 'Viernes',
        nombre: 'Día del Trabajo',
        tipo: 'nacional',
        desc: 'Festivo nacional. En Valencia coincide con la proximidad de la festividad de la Virgen de los Desamparados, patrona de la ciudad.',
        icono: '✊',
      },
      {
        fecha: '10 may',
        dia: 'Domingo',
        nombre: 'Virgen de los Desamparados',
        tipo: 'referencia',
        desc: 'Patrona de Valencia y de la Comunitat. El segundo domingo de mayo, la Plaza de la Virgen se llena de flores y danzas. El traslado de la imagen desde la Basílica a la Catedral es uno de los momentos más emotivos del año.',
        icono: '🌸',
      },
    ],
  },
  {
    mes: 'Junio',
    num: '06',
    dias: [
      {
        fecha: '24 jun',
        dia: 'Miércoles',
        nombre: 'Fogueres de Sant Joan',
        tipo: 'autonomico',
        desc: 'Festivo autonómico de la Comunitat Valenciana. Las hogueras de San Juan llenan las playas valencianas en la noche más corta del año. Tradición milenaria que celebra el solsticio de verano con fuego y pólvora.',
        icono: '🌊',
      },
    ],
  },
  {
    mes: 'Agosto',
    num: '08',
    dias: [
      {
        fecha: '15 ago',
        dia: 'Sábado',
        nombre: 'Asunción de la Virgen',
        tipo: 'nacional',
        desc: 'Festivo nacional en pleno verano. Valencia disfruta de su máxima actividad turística y los festivales de verano están en su apogeo.',
        icono: '☀',
      },
    ],
  },
  {
    mes: 'Octubre',
    num: '10',
    dias: [
      {
        fecha: '9 oct',
        dia: 'Viernes',
        nombre: 'Día de la Comunitat Valenciana',
        tipo: 'autonomico',
        desc: 'La gran festividad valenciana. Conmemora la entrada del Rey Jaume I en Valencia en 1238. La Senyera desfila en procesión cívica desde el Ayuntamiento hasta el Parterre. Entrada de Moros y Cristianos y bailes regionales.',
        icono: '🏴',
      },
      {
        fecha: '12 oct',
        dia: 'Lunes',
        nombre: 'Fiesta Nacional de España',
        tipo: 'nacional',
        desc: 'Día de la Hispanidad. En 2026 cae en lunes, creando un puente largo junto al 9 de octubre.',
        icono: '🇪🇸',
      },
    ],
  },
  {
    mes: 'Noviembre',
    num: '11',
    dias: [
      {
        fecha: '1 nov',
        dia: 'Domingo',
        nombre: 'Todos los Santos',
        tipo: 'nacional',
        desc: 'Festividad de recogimiento y homenaje a los difuntos. Los cementerios de Valencia acogen miles de visitantes con flores.',
        icono: '🕯',
      },
      {
        fecha: '2 nov',
        dia: 'Lunes',
        nombre: 'Día de los Difuntos',
        tipo: 'autonomico',
        desc: 'Festivo autonómico de la Comunitat Valenciana, recuperable. Complementa el día de Todos los Santos.',
        icono: '🌹',
      },
    ],
  },
  {
    mes: 'Diciembre',
    num: '12',
    dias: [
      {
        fecha: '6 dic',
        dia: 'Domingo',
        nombre: 'Día de la Constitución Española',
        tipo: 'nacional',
        desc: 'Conmemoración de la Constitución de 1978. Festivo nacional.',
        icono: '📜',
      },
      {
        fecha: '8 dic',
        dia: 'Martes',
        nombre: 'Inmaculada Concepción',
        tipo: 'nacional',
        desc: 'Festividad religiosa. En Valencia se vive ya el ambiente navideño con los encendidos de luces y los primeros belenes.',
        icono: '⭐',
      },
      {
        fecha: '25 dic',
        dia: 'Viernes',
        nombre: 'Navidad',
        tipo: 'nacional',
        desc: 'La gran fiesta familiar del invierno. Valencia celebra la Navidad con belenes artísticos, la feria Expojove y el ambiente único de la Plaza del Ayuntamiento iluminada.',
        icono: '🎄',
      },
    ],
  },
];

var tradiciones = [
  { nombre: 'Las Fallas', fecha: '1–19 marzo', icono: '🔥', desc: 'Patrimonio Inmaterial UNESCO' },
  { nombre: 'Semana Santa Marinera', fecha: 'Semana Santa', icono: '⛵', desc: 'Poblados Marítimos' },
  { nombre: 'Virgen dels Desamparats', fecha: '2.º domingo mayo', icono: '🌸', desc: 'Patrona de Valencia' },
  { nombre: 'Corpus Christi', fecha: '64 días tras Pascua', icono: '🌺', desc: 'Procesión y alfombras' },
  { nombre: '9 d\'Octubre', fecha: '9 octubre', icono: '🏴', desc: 'Día de la Comunitat' },
  { nombre: 'Gran Fira de Juliol', fecha: 'Todo julio', icono: '🎆', desc: 'Desde 1871' },
  { nombre: 'San Vicente Ferrer', fecha: 'Lunes de Pascua', icono: '🎭', desc: 'Miracles callejeros' },
  { nombre: 'Navidad', fecha: 'Dic–ene', icono: '🎄', desc: 'Belenes y Cabalgata' },
];

var tipoBadge = {
  nacional: { label: 'Nacional', cls: 'badge-nacional' },
  autonomico: { label: 'Autonómico', cls: 'badge-autonomico' },
  local: { label: 'Local Valencia', cls: 'badge-local' },
  referencia: { label: 'Festividad', cls: 'badge-referencia' },
};

export default function Festivos() {
  return (
    <div className="fest-page">

      {/* Hero */}
      <div className="fest-hero">
        <div className="fest-hero-overlay" />
        <div className="fest-hero-content">
          <div className="fest-eyebrow">Eventos · Calendario Festivos 2026</div>
          <h1>Festivos en<br />Valencia 2026</h1>
          <p>14 días festivos entre nacionales, autonómicos y locales. El calendario completo de días no laborables en la ciudad de Valencia para 2026, con las tradiciones y celebraciones de cada fecha.</p>
        </div>
        <div className="fest-hero-stats">
          <div className="fest-stat">
            <span className="fest-stat-num">14</span>
            <span className="fest-stat-label">días festivos</span>
          </div>
          <div className="fest-stat-sep" />
          <div className="fest-stat">
            <span className="fest-stat-num">8</span>
            <span className="fest-stat-label">nacionales</span>
          </div>
          <div className="fest-stat-sep" />
          <div className="fest-stat">
            <span className="fest-stat-num">4+2</span>
            <span className="fest-stat-label">autonómicos + locales</span>
          </div>
        </div>
      </div>

      {/* Leyenda tipos */}
      <div className="fest-leyenda">
        <div className="fest-leyenda-item">
          <span className="badge badge-nacional">Nacional</span>
          <span className="fest-leyenda-desc">Festivo en toda España</span>
        </div>
        <div className="fest-leyenda-item">
          <span className="badge badge-autonomico">Autonómico</span>
          <span className="fest-leyenda-desc">Comunitat Valenciana</span>
        </div>
        <div className="fest-leyenda-item">
          <span className="badge badge-local">Local Valencia</span>
          <span className="fest-leyenda-desc">Solo ciudad de Valencia</span>
        </div>
      </div>

      {/* Intro */}
      <div className="fest-intro">
        <p>En 2026, Valencia disfruta de <strong>14 días festivos oficiales</strong>: 8 nacionales comunes a toda España, 4 autonómicos propios de la Comunitat Valenciana y 2 festivos locales exclusivos de la ciudad de Valencia —San Vicente Mártir (22 de enero) y San Vicente Ferrer (28 de abril)—. El año viene marcado por dos puentes especialmente generosos: <strong>Semana Santa</strong> (Viernes Santo + Lunes de Pascua = 4 días) y <strong>principios de octubre</strong> (9 d'Octubre + 12 de octubre en lunes).</p>
      </div>

      {/* Tradiciones y festividades del año */}
      <div className="fest-tradiciones-wrap">
        <div className="fest-tradiciones-titulo">Principales tradiciones y festividades del año en Valencia</div>
        <div className="fest-tradiciones-grid">
          {tradiciones.map(t => (
            <div className="fest-tradicion-card" key={t.nombre}>
              <span className="fest-tradicion-icono">{t.icono}</span>
              <div className="fest-tradicion-nombre">{t.nombre}</div>
              <div className="fest-tradicion-fecha">{t.fecha}</div>
              <div className="fest-tradicion-desc">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Calendario mes a mes */}
      <div className="fest-section-title">
        <h2>Calendario festivo 2026 · Mes a mes</h2>
        <p>Fechas, tipo de festivo y tradición cultural asociada a cada día libre en Valencia.</p>
      </div>

      <div className="fest-calendar">
        {festivos2026.map(mes => (
          <div className="fest-mes-block" key={mes.mes}>
            <div className="fest-mes-header">
              <span className="fest-mes-num">{mes.num}</span>
              <span className="fest-mes-nombre">{mes.mes}</span>
              <span className="fest-mes-count">{mes.dias.length} festivo{mes.dias.length > 1 ? 's' : ''}</span>
            </div>

            <div className="fest-dias">
              {mes.dias.map(d => (
                <div className={`fest-dia-item ${d.tipo === 'local' ? 'fest-dia-item--local' : ''}`} key={d.fecha}>
                  <div className="fest-dia-fecha-col">
                    <span className="fest-dia-fecha">{d.fecha}</span>
                    <span className="fest-dia-diaSemana">{d.dia}</span>
                    <span className="fest-dia-icono">{d.icono}</span>
                  </div>
                  <div className="fest-dia-content">
                    <div className="fest-dia-nombre">{d.nombre}</div>
                    <span className={`badge ${tipoBadge[d.tipo].cls}`}>{tipoBadge[d.tipo].label}</span>
                    <p className="fest-dia-desc">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info box puentes */}
      <div className="fest-info-box">
        <h3>🌉 Puentes destacados de 2026 en Valencia</h3>
        <ul className="fest-info-list">
          <li><strong>Semana Santa (3–6 abr):</strong> Viernes Santo + Lunes de Pascua = 4 días consecutivos de puente</li>
          <li><strong>San Vicente Ferrer (25–28 abr):</strong> Festivo local el martes, posible puente largo de fin de semana</li>
          <li><strong>Octubre (9–13 oct):</strong> 9 de Octubre (viernes) + 12 de Octubre (lunes) = fin de semana largo doble</li>
          <li><strong>Navidad (25–27 dic):</strong> Navidad en viernes crea un puente natural de tres días hasta el domingo</li>
          <li><strong>San José / Fallas (19 mar):</strong> Cae en jueves → posible puente de las Fallas de 4 días</li>
          <li><strong>Inmaculada (8 dic):</strong> Cae en martes → posible puente con el fin de semana anterior</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}