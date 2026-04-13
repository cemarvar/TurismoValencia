import '../assets/css/Mestalla.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'El Estadio · 100 Años de Historia',
    tipo: 'El estadio más antiguo de LaLiga · Inaugurado 1923',
    subtitulo: '49.430 espectadores · 105 × 68 m · La tribuna norte más inclinada de Europa',
    desc: 'El Camp de Mestalla es mucho más que un estadio de fútbol: es el coliseo más longevo de la élite del fútbol español. Inaugurado el 20 de mayo de 1923 con un amistoso entre el Valencia FC y el Levante FC —primer gol de Arturo Montesinos, "Montes"—, nació en lo que entonces eran huertos y campos de cultivo junto a la acequia que le dio nombre. Desde enero de 2020 es el estadio más antiguo en Primera División de España, tras la desaparición del viejo San Mamés. The Telegraph lo clasificó como el segundo mejor estadio de Europa, definiendo su afición como "la más exigente de España con más ambiente" y sus gradas como las de "mayor inclinación en comparación con cualquier estadio importante de Europa".',
    datos: [
      { d: 'Inauguración', v: '20 de mayo de 1923 · Valencia FC 1-0 Levante FC · Primer gol: Arturo Montesinos' },
      { d: 'Capacidad', v: '49.430 espectadores · Campo: 105 × 68 m · El más veterano de LaLiga' },
      { d: 'Tribuna norte', v: 'La más inclinada de cualquier estadio importante de Europa · Atmósfera única' },
      { d: 'Nombre', v: 'De la acequia de Mestalla · Entre 1969 y 1994 se llamó Estadio Luis Casanova' },
    ],
    imgClass: 'img-estadio',
    tags: [{ label: 'Más antiguo de LaLiga' }, { label: '1923' }, { label: 'The Telegraph Top 2 Europa' }],
  },
  {
    num: '02',
    nombre: 'El Tour Mestalla Forever',
    tipo: 'Visita al estadio · ~1 hora · Todos los días',
    subtitulo: 'Vestuarios · Túnel de jugadores · Sala de prensa · Salida al césped · Sala de trofeos',
    desc: 'El Mestalla Forever Tour es una de las atracciones turísticas más populares de Valencia para los amantes del fútbol —y también para quien simplemente quiere entender por qué este estadio es un símbolo de la ciudad. En aproximadamente una hora, los guías especializados narran la historia centenaria del estadio mientras recorres los rincones más cargados de emoción: los vestuarios donde se vistieron leyendas como Kempes, Mendieta o David Villa; el túnel de jugadores que vibra con los cánticos de la Gradona; la sala de prensa; el balcón de la afición; el palco VIP; la capilla; y la salida al césped por el mismo pasillo que usan los jugadores. También incluye el museo "Récords Blanquinegres" y la tienda oficial.',
    datos: [
      { d: 'Recorrido', v: 'Vestuarios, túnel, sala prensa, palco VIP, salida al césped, sala trofeos' },
      { d: 'Precio adulto', v: '~10,90 € · Reducida: ~8,50 € · Menores de 4 años: gratis' },
      { d: 'Horario', v: 'Lun–Sáb 10:30–14:30 h y 15:30–18:30 h · Dom 10:30–14:30 h · Último tour 13:30 h' },
      { d: 'Días de partido', v: 'Solo visita matutina · Vestuarios cerrados · Consultar en valenciacf.com' },
    ],
    imgClass: 'img-tour',
    tags: [{ label: 'Tour ~1 hora' }, { label: 'Guiado' }, { label: 'Todos los días' }],
  },
  {
    num: '03',
    nombre: 'Palmarés · Los Grandes Títulos del Valencia CF',
    tipo: 'Uno de los clubs más laureados de España',
    subtitulo: '6 Ligas · 8 Copas del Rey · 1 Recopa UEFA · 2 Supercopas Europa',
    desc: 'El Valencia CF es uno de los grandes del fútbol español con más de un siglo de historia. Los años 40 fueron la primera época dorada: la legendaria "delantera eléctrica" de Epi, Amadeo, Mundo, Asensi y Gorostiza conquistó tres ligas y dos copas. La segunda época dorada llegó con Kempes en los 80: Copa del Rey (1979), Recopa de Europa (1980) y Supercopa de Europa (1980). Y el mejor momento reciente, a caballo del siglo XXI, con dos Ligas consecutivas (1999–2000 y 2001–02), la Copa del Rey (1999) y dos finales consecutivas de la Champions League (2000 y 2001). Mestalla ha acogido 10 finales de la Copa del Rey y 36 partidos de la selección española, incluida la fase de grupos del Mundial de 1982.',
    datos: [
      { d: 'Ligas', v: '6 Campeonatos de Liga · 1942, 1944, 1947, 1971, 2001–02 y 2002–03' },
      { d: 'Copas del Rey', v: '8 títulos · Mestalla ha acogido 10 finales de la Copa del Rey' },
      { d: 'Europa', v: '1 Recopa UEFA (1980) · 2 Supercopas de Europa (1980, 2004) · 13 Champions' },
      { d: 'Leyendas en Mestalla', v: 'Kempes, Maradona, Pelé · Han jugado en este césped' },
    ],
    imgClass: 'img-palmares',
    tags: [{ label: '6 Ligas' }, { label: '8 Copas' }, { label: 'Recopa UEFA' }],
  },
  {
    num: '04',
    nombre: 'La Gradona · La Tribuna Norte Más Inclinada',
    tipo: 'La esencia de Mestalla · El ambiente más electrizante de España',
    subtitulo: 'Inclinación extrema · Ambiente único en Europa · Fondos de la afición local',
    desc: 'La Gradona —como se conoce popularmente al fondo norte de Mestalla— es la razón por la que este estadio tiene una personalidad única en el fútbol europeo. Sus gradas verticales, con una inclinación que pone los pelos de punta incluso a quien las ha visto mil veces, crean una acústica sin igual que convierte cada partido en una experiencia auditiva excepcional. Es el fondo donde se concentra la afición más activa del Valencia CF, la que canta durante los 90 minutos, la que genera ese ambiente que The Telegraph calificó como el más intenso de España. Asistir a un partido con la Gradona llena es una de las experiencias de fútbol más auténticas del continente.',
    datos: [
      { d: 'Inclinación', v: 'La mayor de cualquier estadio importante de Europa · Única en España' },
      { d: 'Acústica', v: 'El ambiente más intenso de LaLiga · Calificado por The Telegraph como único' },
      { d: 'Afición', v: '"La más exigente de España con más ambiente" · The Telegraph' },
      { d: 'Partido recomendado', v: 'Partidos de LaLiga y Europa · Consultar agenda en visitvalencia.com' },
    ],
    imgClass: 'img-gradona',
    tags: [{ label: 'La Gradona' }, { label: 'Ambiente único' }, { label: 'Fútbol en vivo' }],
  },
  {
    num: '05',
    nombre: 'Mestalla en la Historia de Valencia',
    tipo: 'Monumento vivo de la ciudad · Más allá del fútbol',
    subtitulo: 'Mundial 1982 · JJ.OO. Barcelona 1992 · Copa del Rey · Liga de Naciones 2025',
    desc: 'Mestalla es un escenario que va más allá del fútbol del Valencia CF. Ha sido sede de tres grupos de la fase de grupos del Mundial de España 1982, de partidos olímpicos en los Juegos de Barcelona 1992, de 10 finales de Copa del Rey y de 36 encuentros de la selección española. En 2025 acogió la vuelta de los cuartos de final de la Liga de Naciones de la UEFA. Por su césped han corrido Pelé, Maradona, Kempes, Maldini, Ronaldo y los mejores jugadores de la historia. Durante la Guerra Civil sirvió como campo de concentración y almacén de chatarra; sobrevivió a la Gran Riada de 1957; y en la pandemia de 2020 fue centro de distribución del Banco de Alimentos. Un estadio con memoria.',
    datos: [
      { d: 'Mundial 1982', v: '3 partidos de fase de grupos · Debut de España en el Mundial' },
      { d: 'JJ.OO. 1992', v: 'Sede de fútbol de los Juegos Olímpicos de Barcelona (salvo la final)' },
      { d: 'Finales Copa Rey', v: '10 finales · 1926, 1929, 1936, 1990, 1993, 1998, 2000, 2009, 2011, 2014' },
      { d: 'Liga Naciones', v: '2025 · Cuartos de final · Mestalla como sede de la selección española' },
    ],
    imgClass: 'img-historia',
    tags: [{ label: 'Mundial 1982' }, { label: 'JJ.OO. 1992' }, { label: 'Selección española' }],
  },
  {
    num: '06',
    nombre: 'Nou Mestalla · El Futuro del Club',
    tipo: 'Nuevo estadio en construcción · Av. de les Corts Valencianes',
    subtitulo: 'Proyectado con ~70.000 localidades · El futuro del Valencia CF en Valencia',
    desc: 'El Nou Mestalla es el estadio del futuro del Valencia CF, proyectado en la Avenida de les Corts Valencianes, en el barrio de Benicalap. Las obras, iniciadas en 2007 y paralizadas durante años por problemas financieros y la crisis, han retomado su desarrollo. El nuevo estadio está proyectado para tener alrededor de 70.000 localidades y convertirse en uno de los recintos más modernos de Europa. Mientras tanto, el Camp de Mestalla sigue siendo la casa del club y el escenario de la historia viva del Valencia CF. La convivencia entre el estadio centenario que aguarda y el futuro en construcción es parte de la identidad actual del club.',
    datos: [
      { d: 'Ubicación', v: 'Avenida de les Corts Valencianes · Barrio de Benicalap · Valencia' },
      { d: 'Capacidad proyectada', v: '~70.000 localidades · Uno de los más grandes de España' },
      { d: 'Obras', v: 'Iniciadas en 2007 · Paralizadas · Retomadas · Fecha de apertura pendiente' },
      { d: 'Mestalla actual', v: 'Sigue activo · La casa del Valencia CF hasta la apertura del Nou Mestalla' },
    ],
    imgClass: 'img-nouveau',
    tags: [{ label: 'Nou Mestalla' }, { label: '~70.000 aficionados' }, { label: 'Futuro' }],
  },
];

var titulos = [
  { titulo: '6 Ligas', icono: '🏆' },
  { titulo: '8 Copas del Rey', icono: '🏅' },
  { titulo: '1 Recopa UEFA', icono: '⭐' },
  { titulo: '2 Supercopas Europa', icono: '🌟' },
  { titulo: '1 Copa Intertoto', icono: '🥇' },
  { titulo: '10 Finales de Copa', icono: '🏟' },
  { titulo: '13 Champions League', icono: '🔵' },
  { titulo: '36 partidos Selección', icono: '🇪🇸' },
  { titulo: 'Mundial 1982', icono: '⚽' },
  { titulo: 'JJ.OO. Barcelona 92', icono: '🔥' },
  { titulo: 'Top 2 Europa · Telegraph', icono: '📰' },
  { titulo: 'El más antiguo de LaLiga', icono: '📅' },
];

var datosVisita = [
  { label: 'Dirección', val: 'Av. de Suècia, s/n · 46010 Valencia · Barrio de Mestalla · A 15 min a pie del centro' },
  { label: 'Tour Mestalla Forever', val: 'Lun–Sáb 10:30–14:30 h y 15:30–18:30 h · Dom y festivos 10:30–14:30 h · Último tour 13:30 h' },
  { label: 'Precio adulto', val: '~10,90 € tour · Reducida (niños 5–12 años, +65, estudiantes, desempleados): ~8,50 €' },
  { label: 'Menores de 4 años', val: 'Entrada gratuita al Tour Mestalla Forever' },
  { label: 'Días de partido', val: 'Solo visita matutina · Vestuarios cerrados · Consulta el calendario en valenciacf.com' },
  { label: 'Días cerrado', val: '25 de diciembre, 1 y 6 de enero · Consultar posibles excepciones' },
  { label: 'Acceso', val: 'Metro L5 parada Aragón · Bus 10, 12, 13, 78, 79 · A pie desde la Ciudad de las Artes (30 min)' },
  { label: 'Entradas partido', val: 'En valenciacf.com · También en taquillas el día del partido según disponibilidad' },
];

export default function Mestalla() {
  return (
    <div className="mest-page">

      {/* Hero */}
      <div className="mest-hero">
        <div className="mest-hero-overlay" />
        <div className="mest-hero-content">
          <div className="mest-eyebrow">Valencia Club de Fútbol · Inaugurado 1923 · El estadio más antiguo de LaLiga</div>
          <h1>Camp de<br />Mestalla</h1>
          <p>El coliseo blanquinegro. El estadio más antiguo de la élite del fútbol español, con más de cien años de historia, el segundo mejor estadio de Europa según The Telegraph y la casa de uno de los clubs más laureados de España.</p>
        </div>
        <div className="mest-hero-stats">
          <div className="mest-stat">
            <span className="mest-stat-num">49.430</span>
            <span className="mest-stat-label">espectadores</span>
          </div>
          <div className="mest-stat-sep" />
          <div className="mest-stat">
            <span className="mest-stat-num">1923</span>
            <span className="mest-stat-label">inauguración</span>
          </div>
          <div className="mest-stat-sep" />
          <div className="mest-stat">
            <span className="mest-stat-num">+100</span>
            <span className="mest-stat-label">años de historia</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mest-intro">
        <p>El Camp de Mestalla no es solo el estadio del Valencia CF: es un monumento vivo de la historia de Valencia, el estadio más veterano de la liga española de primera división desde 2020 y uno de los escenarios deportivos más emblemáticos de Europa. Por su césped han corrido Pelé, Maradona, Kempes y los mejores jugadores de la historia del fútbol. Ha sobrevivido a una guerra civil, a la Gran Riada de 1957 y a una pandemia. Ha acogido el Mundial 1982, los Juegos Olímpicos de 1992 y 10 finales de la Copa del Rey.</p>
        <p>Tanto si eres aficionado al fútbol como si no, el <strong>Tour Mestalla Forever</strong> es una de las visitas más recomendadas de Valencia: historia, emoción y arquitectura única en un estadio que lleva más de un siglo latiendo en el corazón de la ciudad.</p>
      </div>

      {/* Palmarés chips */}
      <div className="mest-palmares-wrap">
        <div className="mest-palmares-titulo">Palmarés y momentos históricos</div>
        <div className="mest-palmares-grid">
          {titulos.map(t => (
            <div className="mest-titulo-chip" key={t.titulo}>
              <span className="mest-titulo-icono">{t.icono}</span>
              <span className="mest-titulo-nombre">{t.titulo}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Secciones */}
      <div className="mest-section-title">
        <h2>Todo sobre el Camp de Mestalla</h2>
        <p>Seis razones por las que Mestalla es una visita imprescindible, vayas o no a un partido.</p>
      </div>

      <div className="mest-routes">
        {secciones.map(sec => (
          <div className="mest-route-item" key={sec.num}>
            <div className="mest-route-num">{sec.num}</div>

            <div className="mest-route-text">
              <div className="mest-tipo">{sec.tipo}</div>
              <h2>{sec.nombre}</h2>
              <div className="mest-subtitulo">{sec.subtitulo}</div>
              <p className="mest-desc">{sec.desc}</p>

              <div className="mest-datos-titulo">Datos clave</div>
              <ul className="mest-datos">
                {sec.datos.map(d => (
                  <li key={d.d}>
                    <span className="mest-dato-label">{d.d}:</span>
                    <span className="mest-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="mest-tags">
                {sec.tags.map(t => (
                  <span key={t.label} className="mest-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="mest-route-img">
              <div className={`mest-route-img-inner ${sec.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="mest-info-practica">
        <h3>Información práctica · Camp de Mestalla</h3>
        <div className="mest-tabla">
          {datosVisita.map(d => (
            <div className="mest-tabla-fila" key={d.label}>
              <div className="mest-tabla-label">{d.label}</div>
              <div className="mest-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="mest-info-box">
        <h3>Consejos para visitar Mestalla</h3>
        <ul className="mest-info-list">
          <li>El <strong>Tour Mestalla Forever</strong> no requiere reserva previa — pero compra la entrada online en valenciacf.com para evitar esperas</li>
          <li>Si coincides con un <strong>partido de LaLiga</strong>, el ambiente de la Gradona norte es una experiencia que no tiene precio</li>
          <li>Los <strong>días de partido</strong> el tour solo opera por la mañana y el vestuario está cerrado — comprueba el calendario antes</li>
          <li>La <strong>tienda oficial</strong> está dentro del recorrido del tour: perfecta para llevarte el souvenir más valencianista</li>
          <li>El estadio está a <strong>15 min a pie del centro</strong> y a 5 min del metro (L5 parada Aragón) — no hace falta coche</li>
          <li>Para los <strong>Jocs Olímpics París 2024</strong> y grandes eventos de la selección, Mestalla sigue siendo sede habitual — consulta la agenda</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}