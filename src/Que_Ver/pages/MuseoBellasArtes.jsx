import '../assets/css/MuseoBellasArtes.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var colecciones = [
  {
    num: '01',
    nombre: 'Primitivos Valencianos · Pintura Gótica',
    tipo: 'Siglos XIV–XV · Uno de los conjuntos más importantes de España',
    subtitulo: 'Gonçal Peris Sarrià · Starnina · Retablo de Fray Bonifacio Ferrer',
    desc: 'La colección de primitivos valencianos es la joya del museo y uno de los conjuntos de pintura gótica más importantes de España. Refleja la escuela de pintura internacional que floreció en Valencia durante el siglo XV, cuando la ciudad era un gran centro mercantil y cultural del Mediterráneo. Las obras maestras de Gonçal Peris Sarrià representan lo más destacado de este período. También se conserva el Retablo de Fray Bonifacio Ferrer, encargado al artista florentino Gherardo Starnina, una de las piezas más valiosas del museo por su detallismo excepcional.',
    artistas: ['Gonçal Peris Sarrià', 'Gherardo Starnina', 'Jacomart', 'Joan Reixach', 'Bartolomé Bermejo'],
    obra: 'Retablo de Fray Bonifacio Ferrer · Starnina · Detallismo florentino extraordinario',
    imgClass: 'img-gotico',
    tags: [{ label: 'Gótico valenciano' }, { label: 'Siglo XV' }, { label: 'Único en España' }],
  },
  {
    num: '02',
    nombre: 'Renacimiento y Manierismo',
    tipo: 'Siglo XVI · Valencia como puerta del Renacimiento en España',
    subtitulo: 'Joan de Joanes · Il Pinturicchio · El Bosco · Botticelli',
    desc: 'En el siglo XVI, Valencia fue un importante centro mercantil y la principal puerta de entrada del Renacimiento italiano en España. Esta sala incluye el único retrato de Botticelli expuesto en España, así como obras de Il Pinturicchio —colaborador de Rafael en la Capilla Sixtina—, El Bosco y Joan de Joanes, el pintor valenciano más influyente del siglo XVI. También se conserva Andrea del Sarto y obras del manierista Luis de Morales. El conjunto refleja los intercambios culturales entre Valencia, Italia y los Países Bajos.',
    artistas: ['Joan de Joanes', 'Sandro Botticelli', 'Il Pinturicchio', 'El Bosco', 'Andrea del Sarto', 'Luis de Morales'],
    obra: 'Retrato de Botticelli · El único expuesto en España · Sala del Renacimiento',
    imgClass: 'img-renacimiento',
    tags: [{ label: 'Renacimiento' }, { label: 'Botticelli único en España' }, { label: 'S. XVI' }],
  },
  {
    num: '03',
    nombre: 'Barroco Español y Europeo · El Siglo de Oro',
    tipo: 'Siglo XVII · Velázquez · El Greco · Ribera · Murillo · Van Dyck',
    subtitulo: 'Autorretrato de Velázquez · José de Ribera · El Greco · Escuela flamenca',
    desc: 'La sala del Barroco es la más internacional del museo. Destaca el Autorretrato de Diego Velázquez —uno de los dos únicos que se conocen, el otro es en Las Meninas— y San Juan Bautista de El Greco. De José de Ribera se conserva el espectacular San Sebastián atendido por Santa Irene y su criada. La colección flamenca incluye a Van Dyck con Don Francisco de Moncada, artista con muy escasa presencia en museos españoles. La pintura italiana barroca está representada por Luca Giordano, Giovanni Baglione y Matthias Stom.',
    artistas: ['Diego Velázquez', 'El Greco', 'José de Ribera', 'Bartolomé Esteban Murillo', 'Anthony van Dyck', 'Luca Giordano'],
    obra: 'Autorretrato de Velázquez · Solo se pintó a sí mismo aquí y en Las Meninas',
    imgClass: 'img-barroco',
    tags: [{ label: 'Velázquez' }, { label: 'Siglo de Oro' }, { label: 'Escuela flamenca' }],
  },
  {
    num: '04',
    nombre: 'Francisco de Goya y el Neoclasicismo',
    tipo: 'Finales del siglo XVIII · Goya y sus contemporáneos',
    subtitulo: 'Retrato de Joaquina Candado · Vicente López · Academia de San Carlos',
    desc: 'El museo conserva un conjunto notable de obras de Francisco de Goya, entre las que destaca el Retrato de doña Joaquina Candado. La primera planta del edificio antiguo alberga las pinturas relacionadas con la Real Academia de Bellas Artes de San Carlos —fundada en 1768— con bocetos de Ignacio Vergara y obras tempranas de Vicente López, uno de los grandes retratistas del tránsito entre el siglo XVIII y XIX. La "escuela valenciana de flores" con obras de Benito Espinos completa este período.',
    artistas: ['Francisco de Goya', 'Vicente López', 'Ignacio Vergara', 'Benito Espinos', 'Francisco Bayeu'],
    obra: 'Retrato de doña Joaquina Candado · Goya · Una de las mejores obras del período',
    imgClass: 'img-goya',
    tags: [{ label: 'Goya' }, { label: 'Academia de San Carlos' }, { label: 'Neoclasicismo' }],
  },
  {
    num: '05',
    nombre: 'Sorolla y la Pintura Valenciana del Siglo XIX',
    tipo: '7 salas dedicadas a Sorolla · La joya de la corona',
    subtitulo: 'Joaquín Sorolla · Ignacio Pinazo · José Benlliure · Muñoz Degrain',
    desc: 'El Museo de Bellas Artes de Valencia conserva la colección de Sorolla más completa fuera del Museo Sorolla de Madrid: siete salas distribuidas en dos plantas recorren toda su trayectoria. La Grupa Valenciana, que retrata a sus hijos en una fiesta campestre, es una de las obras más queridas. Ignacio Pinazo, fundador de la luminosa escuela valenciana del XIX, y José Benlliure, con su sensibilidad intimista, completan el gran capítulo de la pintura valenciana decimonónica. También destaca la colección de paisajistas españoles del XIX.',
    artistas: ['Joaquín Sorolla', 'Ignacio Pinazo', 'José Benlliure', 'Antonio Muñoz Degrain', 'Cecilio Plá'],
    obra: 'Grupa Valenciana · Sorolla · Retrata a sus hijos en una fiesta campestre valenciana',
    imgClass: 'img-sorolla',
    tags: [{ label: '7 salas Sorolla' }, { label: 'Pintura valenciana' }, { label: 'Siglo XIX' }],
  },
  {
    num: '06',
    nombre: 'El Edificio · Claustro y Patio del Embajador Vich',
    tipo: 'Arquitectura barroca · Siglo XVII–XVIII · Juan Bautista Pérez Castiel',
    subtitulo: 'Antiguo Colegio Seminario San Pío V · Claustro de triple arquería · 1683',
    desc: 'El edificio del museo es en sí mismo una obra de arte. Construido a partir de 1683 como Colegio Seminario de San Pío V por encargo del arzobispo Juan Tomás de Rocabertí, su arquitectura barroca fue proyectada por Juan Bautista Pérez Castiel —maestro de obras de la Catedral de Valencia—. La planta casi cuadrada se organiza alrededor de un claustro de triple arquería superpuesta en cuyos lados se abren cinco arcos. Dentro del museo se conserva también el Patio del Embajador Vich, uno de los patios renacentistas más importantes del siglo XVI, reconstruido aquí en 2006.',
    artistas: ['Juan Bautista Pérez Castiel (arquitecto)', 'Juan Tomás de Rocabertí (comitente)'],
    obra: 'Patio del Embajador Vich · Patio renacentista del s. XVI reconstruido en el museo en 2006',
    imgClass: 'img-edificio',
    tags: [{ label: 'Arquitectura barroca' }, { label: '1683' }, { label: 'Patio renacentista' }],
  },
];

var obrasClave = [
  { titulo: 'Autorretrato', autor: 'Diego Velázquez', dato: 'Uno de solo dos que pintó de sí mismo · El otro es en Las Meninas' },
  { titulo: 'San Juan Bautista', autor: 'El Greco', dato: 'Obra del período toledano del pintor greco-español' },
  { titulo: 'San Sebastián atendido por Santa Irene y su criada', autor: 'José de Ribera', dato: 'Tenebrismo napolitano de gran impacto visual' },
  { titulo: 'Don Francisco de Moncada', autor: 'Anthony van Dyck', dato: 'Muy escasos lienzos de Van Dyck en museos españoles' },
  { titulo: 'Retrato de doña Joaquina Candado', autor: 'Francisco de Goya', dato: 'Uno de los mejores retratos del período tardío de Goya' },
  { titulo: 'Retablo de Fray Bonifacio Ferrer', autor: 'Gherardo Starnina', dato: 'Maestría florentina del siglo XV con detallismo extraordinario' },
  { titulo: 'Retrato de Botticelli', autor: 'Sandro Botticelli', dato: 'El único retrato de Botticelli expuesto en España' },
  { titulo: 'Grupa Valenciana', autor: 'Joaquín Sorolla', dato: 'Retrata a sus hijos en una fiesta campestre valenciana con luz mediterránea' },
];

var datosVisita = [
  { label: 'Dirección', val: 'C/ San Pío V, 9 · 46010 Valencia · Junto al Jardín del Turia y los Jardines del Real' },
  { label: 'Horario', val: 'Martes a domingo 10:00–20:00 h · Lunes cerrado' },
  { label: 'Días de cierre', val: '1 de enero y 25 de diciembre · 24 y 31 de diciembre: 10:00–14:00 h' },
  { label: 'Entrada', val: 'Completamente gratuita · No requiere reserva previa · Grupos máx. 25 personas' },
  { label: 'Rango temporal', val: 'Colección permanente del siglo XIV al XIX · Exposiciones temporales todo el año' },
  { label: 'Destacados', val: 'Autorretrato de Velázquez · 7 salas de Sorolla · Único Botticelli en España' },
  { label: 'Actividades', val: 'Conferencias, artes escénicas, cine y talleres · Consultar agenda en la web del museo' },
  { label: 'Cómo llegar', val: 'Metro L3, L5, L7 parada Alameda · Autobús 6, 11, 16, 36 · A pie desde las Torres de Serranos (5 min)' },
];

export default function MuseoBellasArtes() {
  return (
    <div className="mba-page">

      {/* Hero */}
      <div className="mba-hero">
        <div className="mba-hero-overlay" />
        <div className="mba-hero-content">
          <div className="mba-eyebrow">C/ San Pío V · Junto al Jardín del Turia · Entrada gratuita · Mar–Dom 10:00–20:00 h</div>
          <h1>Museo de<br />Bellas Artes</h1>
          <p>La segunda pinacoteca más importante de España, en un palacio barroco del siglo XVII. Del gótico valenciano a Sorolla, pasando por Velázquez, Goya, El Greco, Botticelli y Van Dyck.</p>
        </div>
        <div className="mba-hero-stats">
          <div className="mba-stat">
            <span className="mba-stat-num">2ª</span>
            <span className="mba-stat-label">pinacoteca de España</span>
          </div>
          <div className="mba-stat-sep" />
          <div className="mba-stat">
            <span className="mba-stat-num">S. XIV–XIX</span>
            <span className="mba-stat-label">colección permanente</span>
          </div>
          <div className="mba-stat-sep" />
          <div className="mba-stat">
            <span className="mba-stat-num">Gratis</span>
            <span className="mba-stat-label">entrada libre</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mba-intro">
        <p>El Museo de Bellas Artes de Valencia —conocido popularmente como el Museo de San Pío V— ocupa el antiguo Colegio Seminario fundado en 1683 a orillas del Jardín del Turia, entre los puentes del Real y de la Trinidad. Su origen está ligado a la Real Academia de Bellas Artes de San Carlos, fundada en 1768, y a las desamortizaciones del siglo XIX, que nutrieron sus colecciones con obras procedentes de conventos suprimidos. Tras varios cambios de sede, las colecciones se instalaron definitivamente en el edificio barroco de San Pío V en 1946.</p>
        <p>Es la <strong>segunda pinacoteca más importante de España</strong> y la visita es completamente gratuita. Su colección recorre la historia del arte valenciano, español y europeo desde el siglo XIV hasta el XIX con obras de primerísima categoría.</p>
      </div>

      {/* Obras clave */}
      <div className="mba-obras-section">
        <div className="mba-obras-titulo">Obras que no puedes perderte</div>
        <div className="mba-obras-grid">
          {obrasClave.map(o => (
            <div className="mba-obra-card" key={o.titulo}>
              <div className="mba-obra-titulo">{o.titulo}</div>
              <div className="mba-obra-autor">{o.autor}</div>
              <p className="mba-obra-dato">{o.dato}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Colecciones */}
      <div className="mba-section-title">
        <h2>Las colecciones del museo</h2>
        <p>Del gótico valenciano del siglo XIV a la luz mediterránea de Sorolla, pasando por el Siglo de Oro español y los maestros flamencos.</p>
      </div>

      <div className="mba-routes">
        {colecciones.map(col => (
          <div className="mba-route-item" key={col.num}>
            <div className="mba-route-num">{col.num}</div>

            <div className="mba-route-text">
              <div className="mba-tipo">{col.tipo}</div>
              <h2>{col.nombre}</h2>
              <div className="mba-subtitulo">{col.subtitulo}</div>
              <p className="mba-desc">{col.desc}</p>

              <div className="mba-artistas-titulo">Artistas representados</div>
              <div className="mba-artistas">
                {col.artistas.map(a => (
                  <span key={a} className="mba-artista">{a}</span>
                ))}
              </div>

              <div className="mba-obra-destac">
                <span className="mba-obra-destac-icon">★</span>
                <span>{col.obra}</span>
              </div>

              <div className="mba-tags">
                {col.tags.map(t => (
                  <span key={t.label} className="mba-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="mba-route-img">
              <div className={`mba-route-img-inner ${col.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla información práctica */}
      <div className="mba-info-practica">
        <h3>Información práctica · Museo de Bellas Artes de Valencia</h3>
        <div className="mba-tabla">
          {datosVisita.map(d => (
            <div className="mba-tabla-fila" key={d.label}>
              <div className="mba-tabla-label">{d.label}</div>
              <div className="mba-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="mba-info-box">
        <h3>Consejos para visitar el museo</h3>
        <ul className="mba-info-list">
          <li>La <strong>entrada es gratuita</strong> todos los días — uno de los museos más accesibles de España</li>
          <li>Si el tiempo es limitado, prioriza el <strong>Autorretrato de Velázquez</strong>, la sala de Sorolla y la colección de Primitivos Valencianos</li>
          <li>El <strong>Patio del Embajador Vich</strong> es el más bello del museo: un renacentista del s. XVI reconstruido aquí en 2006</li>
          <li>El museo organiza <strong>conferencias, artes escénicas y ciclos de cine</strong>: consulta la agenda en museobellasartesvalencia.gva.es</li>
          <li>Está junto al <strong>Jardín del Turia</strong> y los Jardines del Real: combina la visita con un paseo por el parque</li>
          <li>Los <strong>lunes está cerrado</strong>: es el único día de descanso del museo, planifica la visita de martes a domingo</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}