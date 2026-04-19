import '../assets/css/IglesiaSanNicolas.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var elementos = [
  {
    num: '01',
    nombre: 'La Bóveda · Los Frescos de Palomino y Dionís Vidal',
    tipo: 'El corazón del monumento · ~2.000 m² de pintura al fresco',
    subtitulo: 'Antonio Palomino (diseño) · Dionís Vidal (ejecución) · 1690–1693',
    desc: 'La bóveda de San Nicolás es lo más parecido a la Capilla Sixtina que encontrarás en España. Casi 2.000 metros cuadrados de pinturas al fresco cubren completamente las bóvedas, nervios y columnas del templo, narrando los episodios más relevantes de la vida de los santos titulares: San Nicolás Obispo y San Pedro Mártir. El programa iconográfico fue diseñado por Antonio Palomino —pintor de cámara del rey Carlos II, llamado a Valencia en 1697— y ejecutado por el artista valenciano Dionís Vidal. El apelativo "Capilla Sixtina Valenciana" fue sugerido en 2012 por el propio director de la restauración de la Capilla Sixtina de Roma, Gianluigi Colalucci, tras visitar San Nicolás.',
    datos: [
      { d: 'Extensión', v: 'Casi 2.000 m² de pinturas al fresco · Bóvedas, nervios, ábsides y columnas' },
      { d: 'Diseño', v: 'Antonio Palomino · Pintor de cámara de Carlos II · Valencia, 1697–1700' },
      { d: 'Ejecución', v: 'Dionís Vidal · Artista valenciano discípulo de Palomino' },
      { d: 'Reconocimiento', v: '"Capilla Sixtina Valenciana" · Gianluigi Colalucci, 2012 · Dir. restauración Vaticano' },
    ],
    imgClass: 'img-bovedaisn',
    tags: [{ label: 'Capilla Sixtina Valenciana' }, { label: 'Palomino' }, { label: 'Barroco' }],
  },
  {
    num: '02',
    nombre: 'La Arquitectura · Gótico cubierto de Barroco',
    tipo: 'Siglo XIII–XVII · Dos estilos en perfecta convivencia',
    subtitulo: 'Gótico valenciano s. XV · Transformación barroca 1690–1693 · Juan Bta. Pérez Castiel',
    desc: 'La Iglesia de San Nicolás de Bari y San Pedro Mártir es el mejor ejemplo en Valencia —y probablemente en España— de la convivencia de una estructura gótica con decoración barroca en un mismo espacio. El primitivo templo fue fundado por Jaime I en el siglo XIII tras la conquista cristiana, donado a los dominicos sobre el solar de una mezquita. En el siglo XV alcanzó sus dimensiones actuales: una sola nave de seis tramos con capillas laterales entre los contrafuertes y presbiterio poligonal. Entre 1690 y 1693, el arquitecto Juan Bautista Pérez Castiel —también maestro de obras del Mercado Central y de la Catedral de Valencia— transformó el interior barroco: suavizó los arcos y bóvedas con estuco, preparando la superficie para los frescos de Palomino.',
    datos: [
      { d: 'Estructura', v: 'Gótica s. XV · Una nave, 6 tramos, capillas laterales, presbiterio poligonal' },
      { d: 'Reforma barroca', v: '1690–1693 · Juan Bautista Pérez Castiel · Estucado de arcos y bóvedas' },
      { d: 'Fundación', v: 'Siglo XIII · Jaime I · Sobre solar de mezquita árabe · Donada a dominicos' },
      { d: 'Aula Capitular', v: 'Siglo XV · Bóveda nervada · Obras de Juanes, Espinosa, Orrente, March' },
    ],
    imgClass: 'img-arquitecturaisn',
    tags: [{ label: 'Gótico valenciano' }, { label: 'Barroco' }, { label: 'Pérez Castiel' }],
  },
  {
    num: '03',
    nombre: '"La Luz de San Nicolás" · Experiencia inmersiva',
    tipo: 'Experiencia digital pionera · Incluida en la entrada',
    subtitulo: 'Videomapping sobre la bóveda · Sala interactiva · Sala multimedia · Cada hora',
    desc: 'La Luz de San Nicolás es un proyecto inmersivo permanente que fusiona historia, arte y tecnología avanzada en tres intervenciones artísticas. La proyección "Homenaje a la Belleza" —con videomapping sobre la bóveda, luz y música del siglo XXI— se lanza cada hora en punto a partir de las 11:00 y da vida a los frescos barrocos de Palomino. La sala interactiva "El latido de San Nicolás" combina tótems cronológicos con animaciones y música. La sala multimedia "Lux ex Oriente" evoca los atributos del santo a través de una vidriera de luz. Es una de las experiencias de patrimonio digital más avanzadas de España.',
    datos: [
      { d: '"Homenaje a la Belleza"', v: 'Videomapping sobre la bóveda · Cada hora desde las 11:00 h' },
      { d: '"El latido de San Nicolás"', v: 'Sala interactiva · Tótems cronológicos · Historia de la iglesia' },
      { d: '"Lux ex Oriente"', v: 'Sala multimedia · Vidriera de luz · Atributos de San Nicolás' },
      { d: 'Precio', v: 'Entrada Experiencia inmersiva: 16 € general / 14 € reducida' },
    ],
    imgClass: 'img-luzisn',
    tags: [{ label: 'Inmersivo' }, { label: 'Videomapping' }, { label: 'Cada hora' }],
  },
  {
    num: '04',
    nombre: 'La Restauración · El Mecenazgo del Siglo XXI',
    tipo: '2012–2021 · Fundación Hortensia Herrero · 4,7 millones de euros',
    subtitulo: 'Técnicas innovadoras · Microbacterias · Iluminación de proyección',
    desc: 'La recuperación de San Nicolás ha sido posible gracias al mecenazgo íntegro de la Fundación Hortensia Herrero, con una inversión de 4,7 millones de euros entre 2012 y 2021. La restauración empleó técnicas pioneras nunca antes utilizadas en España: limpieza de los frescos mediante microbacterias no patógenas criadas en laboratorio, que eliminan la suciedad incrustada sin afectar a la pintura. El proceso fue completado en varias fases: nave principal (2012–2019), Capilla de la Comunión (2017–2018) y Sacristía Barroca y Trasagrario (2021). Los frescos lucen hoy como lo hacían a finales del siglo XVII, cuando Dionís Vidal concluyó su excepcional ciclo pictórico.',
    datos: [
      { d: 'Mecenas', v: 'Fundación Hortensia Herrero · Sufragada íntegramente · 4,7 millones de euros' },
      { d: 'Técnica', v: 'Microbacterias no patógenas en laboratorio · Pionera en España · Sin daño a la pintura' },
      { d: 'Duración', v: '2012–2021 en varias fases · Nave, Capilla de la Comunión, Sacristía Barroca' },
      { d: 'Resultado', v: 'Los frescos lucen como en 1693 · Sistema de proyección que elimina distorsiones' },
    ],
    imgClass: 'img-restauracionisn',
    tags: [{ label: '2012–2021' }, { label: 'F. Hortensia Herrero' }, { label: 'Pionera en España' }],
  },
  {
    num: '05',
    nombre: 'La Colección · Obras maestras en las Capillas',
    tipo: 'Pintura valenciana del Siglo de Oro · Aula Capitular',
    subtitulo: 'Joan de Joanes · Jerónimo Jacinto de Espinosa · Orrente · Esteban March',
    desc: 'Más allá de los frescos de la bóveda, San Nicolás atesora una extraordinaria colección de arte sacro. El Aula Capitular —espacio de planta irregular con bóveda nervada que conserva prácticamente su aspecto original del siglo XV— concentra grandes obras de pintores valencianos del Siglo de Oro: Juan de Joanes, Jerónimo Jacinto de Espinosa, Pedro de Orrente y Esteban March. Destaca la Capilla de la Crucifixión con su retablo formado por una imagen de Cristo Crucificado sobre un fondo pictórico de Vicente Macip y su hijo Joan de Joanes. El órgano barroco del altar mayor completa el extraordinario conjunto patrimonial.',
    datos: [
      { d: 'Aula Capitular', v: 'Siglo XV · Bóveda nervada original · Juanes, Espinosa, Orrente, March' },
      { d: 'Capilla Crucifixión', v: 'Retablo: Cristo sobre fondo de Vicente Macip y Joan de Joanes' },
      { d: 'Órgano barroco', v: 'Altar mayor · Instrumento histórico en uso · Pieza patrimonial única' },
      { d: 'Sacristía Barroca', v: 'Estucos, dorados y cerámicas restauradas en 2021 · Trasagrario' },
    ],
    imgClass: 'img-coleccionisn',
    tags: [{ label: 'Joan de Joanes' }, { label: 'Aula Capitular' }, { label: 'Siglo de Oro' }],
  },
  {
    num: '06',
    nombre: 'Los Lunes de San Nicolás · Devoción Viva',
    tipo: 'Tradición religiosa · Cada lunes del año',
    subtitulo: 'Cientos de fieles · Protector de la infancia y la familia · Peregrinación semanal',
    desc: 'Cada lunes del año, cientos de fieles acuden a la Parroquia de San Nicolás para pedir la intercesión del santo, protector de la infancia, de la familia y de los marineros. Los "Lunes de San Nicolás" son una de las tradiciones religiosas más arraigadas de Valencia, convirtiendo a este pequeño templo del barrio del Carmen en uno de los lugares de devoción más populares de la ciudad. San Nicolás sigue siendo una parroquia viva que combina su función de monumento cultural con la vida litúrgica activa: el lunes la iglesia está cerrada al turismo, abierta solo al culto. La fiesta del santo se celebra el 6 de diciembre.',
    datos: [
      { d: 'Cada lunes', v: 'Peregrinación semanal de fieles · Iglesia cerrada al turismo · Solo culto' },
      { d: 'San Nicolás', v: 'Protector de la infancia, la familia y los marineros · Obispo de Mira (s. IV)' },
      { d: 'Fiesta patronal', v: '6 de diciembre · Celebración especial con la cofradía del Cristo del Fossar' },
      { d: 'Transmisión', v: 'Celebraciones en directo en YouTube @parroquiadesannicolasvalencia' },
    ],
    imgClass: 'img-devocionisn',
    tags: [{ label: 'Cada lunes' }, { label: 'Devoción popular' }, { label: 'Parroquia viva' }],
  },
];

var datosVisita = [
  { label: 'Dirección', val: 'C/ Caballeros, 35 · 46001 Valencia · Barrio del Carmen · A 5 min de la Catedral' },
  { label: 'Horario mar–vie', val: '10:30–19:00 h (invierno: 19:30 h · verano: 21:00 h)' },
  { label: 'Horario sábado', val: '10:00–19:00 h (invierno: 18:30 h · verano: 19:30 h)' },
  { label: 'Horario domingo', val: '13:00–20:00 h (verano: 11:30–21:00 h)' },
  { label: 'Lunes', val: 'Cerrado al turismo · Solo apertura al culto · "Lunes de San Nicolás"' },
  { label: 'Entrada general', val: 'Visita cultural: ~12 € online / ~13 € mostrador · Incluye audioguía en 5 idiomas' },
  { label: 'Entrada reducida', val: '~10 € · Estudiantes, pensionistas, desempleados, discapacitados, familia numerosa, Tourist Card' },
  { label: 'Entrada gratuita', val: 'Menores de 12 años · Guías oficiales de turismo · Miembros del ICOM · Con acreditación' },
  { label: 'Experiencia inmersiva', val: '"La Luz de San Nicolás": 16 € general / 14 € reducida · Videomapping cada hora desde 11:00 h' },
  { label: 'Visitas guiadas', val: 'Martes a sábado a las 12:00 h · Visitas en Familia: sábados a las 11:00 h · Con mediadores especializados' },
  { label: 'Audioguía', val: '5 idiomas: español, valenciano, inglés, francés e italiano · Incluida en la entrada' },
  { label: 'Duración', val: 'Unos 45–60 min con audioguía · No requiere reserva previa para la visita general' },
];

export default function IglesiaSanNicolas() {
  return (
    <div className="sn-page">

      {/* Hero */}
      <div className="sn-hero">
        <div className="sn-hero-overlay" />
        <div className="sn-hero-content">
          <div className="sn-eyebrow">Barrio del Carmen · Centro histórico · C/ Caballeros, 35</div>
          <h1>Iglesia de<br />San Nicolás</h1>
          <p>La "Capilla Sixtina Valenciana". Casi 2.000 m² de frescos barrocos diseñados por Palomino cubren una estructura gótica del siglo XV en el monumento más sorprendente del centro histórico de Valencia.</p>
        </div>
        <div className="sn-hero-stats">
          <div className="sn-stat">
            <span className="sn-stat-num">~2.000 m²</span>
            <span className="sn-stat-label">de frescos barrocos</span>
          </div>
          <div className="sn-stat-sep" />
          <div className="sn-stat">
            <span className="sn-stat-num">S. XIII</span>
            <span className="sn-stat-label">origen del templo</span>
          </div>
          <div className="sn-stat-sep" />
          <div className="sn-stat">
            <span className="sn-stat-num">2012</span>
            <span className="sn-stat-label">reconocida Sixtina Valenciana</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="sn-intro">
        <p>La Iglesia de San Nicolás de Bari y San Pedro Mártir —conocida popularmente como San Nicolás— es el monumento que más sorprende a los visitantes de Valencia que entran sin saber lo que les espera. La fachada exterior es discreta, propia de una iglesia gótica medieval del barrio del Carmen. El interior es un espectáculo visual sin precedentes en la ciudad.</p>
        <p>El título de <strong>"Capilla Sixtina Valenciana"</strong> no es una metáfora turística: fue sugerido en 2012 por el propio director de la restauración de la Capilla Sixtina del Vaticano, Gianluigi Colalucci, tras visitar el templo. La restauración integral, financiada íntegramente por la Fundación Hortensia Herrero, devolvió en 2019 a los frescos del siglo XVII todo su esplendor original.</p>
      </div>

      {/* Elementos */}
      <div className="sn-section-title">
        <h2>Qué ver en la Iglesia de San Nicolás</h2>
        <p>Seis elementos que hacen de este templo el monumento más fascinante del centro histórico de Valencia.</p>
      </div>

      <div className="sn-routes">
        {elementos.map(el => (
          <div className="sn-route-item" key={el.num}>
            <div className="sn-route-num">{el.num}</div>

            <div className="sn-route-text">
              <div className="sn-tipo">{el.tipo}</div>
              <h2>{el.nombre}</h2>
              <div className="sn-subtitulo">{el.subtitulo}</div>
              <p className="sn-desc">{el.desc}</p>

              <div className="sn-datos-titulo">Datos clave</div>
              <ul className="sn-datos">
                {el.datos.map(d => (
                  <li key={d.d}>
                    <span className="sn-dato-label">{d.d}:</span>
                    <span className="sn-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="sn-tags">
                {el.tags.map(t => (
                  <span key={t.label} className="sn-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="sn-route-img">
              <div className={`sn-route-img-inner ${el.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="sn-info-practica">
        <h3>Información práctica · Iglesia de San Nicolás</h3>
        <div className="sn-tabla">
          {datosVisita.map(d => (
            <div className="sn-tabla-fila" key={d.label}>
              <div className="sn-tabla-label">{d.label}</div>
              <div className="sn-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="sn-info-box">
        <h3>Consejos para visitar San Nicolás</h3>
        <ul className="sn-info-list">
          <li>El <strong>videomapping "La Luz de San Nicolás"</strong> se proyecta cada hora desde las 11:00 h — llega 10 min antes para el mejor sitio</li>
          <li>Lleva la <strong>cabeza preparada para mirar hacia arriba</strong>: la bóveda es el espectáculo, no las paredes laterales</li>
          <li>La <strong>audioguía en 5 idiomas</strong> está incluida en la entrada: úsala para entender cada luneto de la bóveda (45 min de recorrido)</li>
          <li>Los <strong>lunes está cerrado al turismo</strong>: si quieres ver los "Lunes de San Nicolás", el acceso es solo como fiel</li>
          <li>El templo está a <strong>5 min a pie de la Catedral</strong> por la calle Caballeros — combina ambas visitas en la misma mañana</li>
          <li>La <strong>entrada combinada</strong> con el Centro de Arte Hortensia Herrero (22 €) es la mejor opción si visitas los dos monumentos</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}