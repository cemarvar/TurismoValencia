import '../assets/css/Playes.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var playas = [
  {
    num: '01',
    nombre: 'Playa del Cabanyal · Las Arenas',
    tipo: 'Playa urbana · Bandera Azul · 1,2 km',
    subtitulo: 'Junto al barrio marinero del Cabanyal · Junto a la Marina · Inspiró a Sorolla',
    desc: 'La playa del Cabanyal, también llamada Las Arenas, es la más cercana a la Marina Real Juan Carlos I y una de las más emblemáticas de la ciudad. Con 1,2 kilómetros de longitud y una anchura de hasta 200 metros, es el arenal urbano más amplio de Valencia. Ubicada junto al histórico barrio marinero del Cabanyal, fue la playa que inspiró al pintor Joaquín Sorolla en muchas de sus obras de temática marinera. Frente a ella se levanta el antiguo Hotel Balneario Las Arenas, que en los años 20–40 fue el balneario de moda de la ciudad y hoy es hotel de lujo. El paseo marítimo que la bordea conecta directamente con el Paseo Neptuno y la Malvarrosa.',
    datos: [
      { d: 'Longitud', v: '1,2 km · Anchura: hasta 200 m · Una de las más anchas de Valencia' },
      { d: 'Sorolla', v: 'Esta playa inspiró al pintor valenciano en sus obras de temática marinera' },
      { d: 'Servicios', v: 'Bandera Azul · Q de Calidad Turística · Duchas · Socorristas · Alquiler sombrillas' },
      { d: 'Acceso', v: 'Metro L4 parada Les Arenes · L6 Mediterrani · L8 Marina Reial · Bus 19, 95, 99' },
    ],
    imgClass: 'img-cabanyal',
    tags: [{ label: 'Bandera Azul' }, { label: 'Sorolla' }, { label: 'Marina' }],
  },
  {
    num: '02',
    nombre: 'Playa de la Malvarrosa',
    tipo: 'Playa urbana · La más popular de Valencia · 1,8 km',
    subtitulo: 'El gran paseo marítimo · La Pepica · La Marcelina · Casa Carmela',
    desc: 'La Malvarrosa es la playa más emblemática y visitada de Valencia. Con 1,8 kilómetros de arena dorada y 135 metros de anchura, ofrece espacio para todos. Su paseo marítimo, animado todo el año, está flanqueado de palmeras y concentra algunos de los restaurantes más tradicionales de la ciudad: La Pepica y La Marcelina, ambas abiertas hace más de un siglo, son instituciones de la paella valenciana frente al mar. El escritor Blasco Ibáñez vivió junto a esta playa y en su parte norte se conserva la Casa Museo donde residió. El Océanogràfic bombea directamente el agua del mar desde esta playa. Tiene la Q de Calidad Turística, el Qualitur y la certificación de accesibilidad.',
    datos: [
      { d: 'Longitud', v: '1,8 km · Anchura: 135 m · La más amplia y animada de las playas urbanas' },
      { d: 'Restaurantes', v: 'La Pepica y La Marcelina (s. XIX) · Casa Carmela · Paella con vistas al mar' },
      { d: 'Cultura', v: 'Casa Museo Blasco Ibáñez en el extremo norte · Escritor valenciano más internacional' },
      { d: 'Servicios', v: 'Bandera Azul · Q de Calidad · Carril bici · Acceso adaptado · Socorristas' },
    ],
    imgClass: 'img-malvarrosa',
    tags: [{ label: 'Bandera Azul' }, { label: 'Paella frente al mar' }, { label: 'Blasco Ibáñez' }],
  },
  {
    num: '03',
    nombre: 'Playa de la Patacona',
    tipo: 'Playa urbana · Alboraya · Ambiente tranquilo · 1+ km',
    subtitulo: 'Horchata de la huerta · Ambiente relajado · Caballos al amanecer',
    desc: 'La Patacona es la continuación natural de la Malvarrosa hacia el norte, perteneciente al municipio de Alboraya —la capital mundial de la horchata—. Con más de un kilómetro de longitud y 100 metros de anchura, mantiene un ambiente algo más tranquilo que sus vecinas, especialmente entre semana. A primera hora de la mañana y al atardecer, jinetes de un centro ecuestre cercano pasean a caballo por la orilla, creando una imagen de postal única. Su paseo marítimo concentra una buena oferta de bares, heladerías, restaurantes y chiringuitos que en verano organizan conciertos al caer el sol. A dos minutos de la playa, la huerta valenciana ofrece los mejores establecimientos de horchata auténtica.',
    datos: [
      { d: 'Longitud', v: 'Más de 1 km · Anchura: 100 m · Municipio de Alboraya' },
      { d: 'Ambiente', v: 'Más tranquila que la Malvarrosa · Ideal entre semana · Público local' },
      { d: 'Caballos', v: 'Jinetes pasean por la orilla al amanecer y al atardecer · Imagen de postal' },
      { d: 'Horchata', v: 'A 2 min: la mejor horchata de Valencia en la huerta de Alboraya' },
    ],
    imgClass: 'img-patacona',
    tags: [{ label: 'Tranquila' }, { label: 'Horchata' }, { label: 'Alboraya' }],
  },
  {
    num: '04',
    nombre: 'Playa de El Saler',
    tipo: 'Playa natural · Parque Natural de la Albufera · 5 km',
    subtitulo: 'Dunas · Pinares · Bandera Azul · Windsurf y kitesurf',
    desc: 'La playa de El Saler es la joya del litoral valenciano y un cambio total de paisaje respecto a las playas urbanas. Situada dentro del Parque Natural de la Albufera —a solo 15 minutos en coche del centro—, sus 5 kilómetros de arena fina y dorada están rodeados de dunas naturales y pinares mediterráneos que actúan como barrera frente al viento. El entorno protegido y las condiciones del viento la hacen especialmente popular entre aficionados al windsurf y el kitesurf. Tiene Bandera Azul y todos los servicios esenciales: socorristas, duchas, baños, restaurantes y carril bici que atraviesa las dunas. Para los amantes de la naturaleza es una experiencia única.',
    datos: [
      { d: 'Longitud', v: '5 km · Anchura: 35 m · Dentro del Parque Natural de la Albufera' },
      { d: 'Entorno', v: 'Dunas naturales, pinares mediterráneos y flora autóctona protegida' },
      { d: 'Deporte', v: 'Windsurf y kitesurf favorito del litoral valenciano · Carril bici por las dunas' },
      { d: 'Acceso', v: '15 min en coche · Bus desde Valencia · Parking disponible junto a la playa' },
    ],
    imgClass: 'img-saler',
    tags: [{ label: 'Bandera Azul' }, { label: 'Parque Natural' }, { label: 'Windsurf' }],
  },
  {
    num: '05',
    nombre: 'Playa de Pinedo',
    tipo: 'Playa semiurbana · Tranquila · 1,5+ km',
    subtitulo: 'Pueblo de pescadores y agricultores · Entorno de huerta',
    desc: 'La playa de Pinedo es una de las mejores opciones para escapar del bullicio sin alejarse demasiado de la ciudad. Con más de un kilómetro y medio de longitud, ofrece un entorno tranquilo junto al pintoresco pueblo de Pinedo, un antiguo enclave de pescadores y agricultores que en los últimos años se ha convertido en un atractivo turístico. La anchura de apenas 32 metros y su ambiente local la hacen ideal para quienes buscan playa sin aglomeraciones. Entre Pinedo y El Saler se sitúa la playa del Arbre del Gos, una de las más vírgenes de la ciudad, con 2,6 kilómetros de longitud en pleno entorno de la Albufera.',
    datos: [
      { d: 'Longitud', v: 'Más de 1,5 km · Anchura: 32 m · Entre la ciudad y El Saler' },
      { d: 'Ambiente', v: 'Local y tranquilo · Pueblo de pescadores y agricultores de Pinedo' },
      { d: 'Arbre del Gos', v: 'A continuación: 2,6 km vírgenes en el Parque Natural de la Albufera' },
      { d: 'Servicios', v: 'Bandera Azul · Socorristas · Duchas · Restaurantes locales' },
    ],
    imgClass: 'img-pinedo',
    tags: [{ label: 'Tranquila' }, { label: 'Local' }, { label: 'Huerta' }],
  },
  {
    num: '06',
    nombre: 'Playa de la Devesa',
    tipo: 'Playa salvaje · Parque Natural · 5 km',
    subtitulo: 'La más natural de Valencia · Pinares · Dunas · Fauna protegida',
    desc: 'La Devesa es la playa más salvaje de Valencia y una de las experiencias más únicas del litoral mediterráneo español. Con casi 5 kilómetros de longitud, se sitúa entre el Mediterráneo y el lago de la Albufera —uno de los lagos de agua dulce más grandes de España—. El ecosistema que la rodea incluye pinares, palmitos, coscojas, lentiscos y un sistema dunar de gran valor ecológico donde es posible observar docenas de especies de aves. La zona de conexión con la playa del Saler tiene uso naturista. Tiene Bandera Azul y servicios de vigilancia, duchas y lavabos, junto a un punto de información del Parque Natural de la Albufera y un observatorio de fauna.',
    datos: [
      { d: 'Longitud', v: '~5 km · Entre el Mediterráneo y el lago de la Albufera' },
      { d: 'Ecosistema', v: 'Pinares, palmitos, dunas naturales y observatorio de aves' },
      { d: 'Fauna', v: 'Docenas de especies de aves · Punto de observación de fauna' },
      { d: 'Acceso', v: '~20 min en coche · Carretera del Parque Natural de la Albufera · Parking' },
    ],
    imgClass: 'img-devesa',
    tags: [{ label: 'Bandera Azul' }, { label: 'Salvaje' }, { label: 'Aves' }],
  },
];

var servicios = [
  { nombre: 'Bandera Azul', icono: '🚩' },
  { nombre: 'Socorristas', icono: '🛟' },
  { nombre: 'Cruz Roja', icono: '➕' },
  { nombre: 'Duchas y baños', icono: '🚿' },
  { nombre: 'Alquiler sombrillas', icono: '⛱' },
  { nombre: 'Carril bici', icono: '🚴' },
  { nombre: 'Acceso adaptado', icono: '♿' },
  { nombre: 'Restaurantes', icono: '🍽' },
  { nombre: 'Windsurf y kitesurf', icono: '🏄' },
  { nombre: 'Voleibol playa', icono: '🏐' },
  { nombre: 'Paddle surf', icono: '🛶' },
  { nombre: 'Parking', icono: '🅿' },
];

var datosVisita = [
  { label: 'Litoral total', val: '19,5 km de playas en la ciudad de Valencia · 8 playas con Bandera Azul · Más de 300 días de sol al año' },
  { label: 'Playas urbanas', val: 'Las Arenas (Cabanyal), Malvarrosa y Patacona · 3+ km de frente litoral continuo junto al centro' },
  { label: 'Playas naturales', val: 'Pinedo, Arbre del Gos, El Saler, Garrofera, La Devesa y Recatí-Perellonet · Parque Natural de la Albufera' },
  { label: 'Acceso en metro', val: 'L4 parada Les Arenes · L6 parada Mediterrani · L8 parada Marina Reial Joan Carles I' },
  { label: 'Acceso en bus', val: 'Líneas EMT 19, 31, 32, 95 y 99 · Bus al Saler desde la Av. Menéndez Pidal' },
  { label: 'En bicicleta', val: 'Carril bici desde el Jardín del Turia hasta la Patacona · Valenbisi disponible en toda la zona' },
  { label: 'Mejor temporada', val: 'Todo el año · Temporada alta jun–sep · Temperatura media del agua: 23–25 °C en verano' },
  { label: 'Gastronomía', val: 'Paseo Neptuno y Paseo Marítimo · La Pepica, La Marcelina, Casa Carmela · Paella frente al mar' },
];

export default function Playes() {
  return (
    <div className="playa-page">

      {/* Hero */}
      <div className="playa-hero">
        <div className="playa-hero-overlay" />
        <div className="playa-hero-content">
          <div className="playa-eyebrow">Mediterráneo · 19,5 km de arena dorada · 8 Banderas Azules</div>
          <h1>Playas<br />de Valencia</h1>
          <p>Del Cabanyal a la Devesa, del paseo marítimo más animado de España a las dunas vírgenes del Parque Natural de la Albufera. El litoral valenciano tiene playa para cada estilo.</p>
        </div>
        <div className="playa-hero-stats">
          <div className="playa-stat">
            <span className="playa-stat-num">19,5 km</span>
            <span className="playa-stat-label">de playas en Valencia</span>
          </div>
          <div className="playa-stat-sep" />
          <div className="playa-stat">
            <span className="playa-stat-num">8</span>
            <span className="playa-stat-label">Banderas Azules</span>
          </div>
          <div className="playa-stat-sep" />
          <div className="playa-stat">
            <span className="playa-stat-num">300+</span>
            <span className="playa-stat-label">días de sol al año</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="playa-intro">
        <p>Valencia es una de las pocas grandes ciudades del mundo donde puedes ir a la playa en metro. Las playas del Cabanyal, la Malvarrosa y la Patacona forman un frente litoral continuo de más de tres kilómetros de arena dorada con paseo marítimo, restaurantes y todos los servicios, a apenas 20 minutos del centro histórico. Al sur, las playas naturales del Parque Natural de la Albufera —El Saler, Garrofera, la Devesa— ofrecen un cambio radical: dunas, pinares y kilómetros de costa casi virgen.</p>
        <p>Todas las playas de la ciudad cuentan con <strong>Bandera Azul</strong> que garantiza la calidad del agua y los servicios. Y gracias a los más de 300 días de sol al año del clima mediterráneo valenciano, son <strong>disfrutables durante todo el año</strong>.</p>
      </div>

      {/* Servicios chips */}
      <div className="playa-servicios-wrap">
        <div className="playa-servicios-titulo">Servicios disponibles en las playas de Valencia</div>
        <div className="playa-servicios-grid">
          {servicios.map(s => (
            <div className="playa-servicio-chip" key={s.nombre}>
              <span className="playa-servicio-icono">{s.icono}</span>
              <span className="playa-servicio-nombre">{s.nombre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Playas */}
      <div className="playa-section-title">
        <h2>Las playas de Valencia, de norte a sur</h2>
        <p>Seis arenales con personalidad propia, desde la más urbana hasta la más salvaje.</p>
      </div>

      <div className="playa-routes">
        {playas.map(p => (
          <div className="playa-route-item" key={p.num}>
            <div className="playa-route-num">{p.num}</div>

            <div className="playa-route-text">
              <div className="playa-tipo">{p.tipo}</div>
              <h2>{p.nombre}</h2>
              <div className="playa-subtitulo">{p.subtitulo}</div>
              <p className="playa-desc">{p.desc}</p>

              <div className="playa-datos-titulo">Datos clave</div>
              <ul className="playa-datos">
                {p.datos.map(d => (
                  <li key={d.d}>
                    <span className="playa-dato-label">{d.d}:</span>
                    <span className="playa-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="playa-tags">
                {p.tags.map(t => (
                  <span key={t.label} className="playa-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="playa-route-img">
              <div className={`playa-route-img-inner ${p.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="playa-info-practica">
        <h3>Información práctica · Playas de Valencia</h3>
        <div className="playa-tabla">
          {datosVisita.map(d => (
            <div className="playa-tabla-fila" key={d.label}>
              <div className="playa-tabla-label">{d.label}</div>
              <div className="playa-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="playa-info-box">
        <h3>Consejos para disfrutar las playas de Valencia</h3>
        <ul className="playa-info-list">
          <li>Ve en <strong>metro o autobús</strong>: la L4 te deja en Les Arenes y el bus 19 llega a la Malvarrosa sin complicaciones de parking</li>
          <li>La <strong>paella frente al mar</strong> en La Pepica o Casa Carmela es una experiencia que no tiene precio — reserva con antelación en verano</li>
          <li>Si buscas <strong>tranquilidad</strong>, elige la Patacona entre semana o El Saler en vez de la Malvarrosa en agosto</li>
          <li>La playa de <strong>El Saler</strong> está a solo 15 min en coche: dunas vírgenes, pinares y la Albufera de fondo</li>
          <li>El <strong>carril bici</strong> conecta la Marina con la Patacona por el paseo marítimo: una ruta de 8 km plana junto al mar</li>
          <li>En <strong>Patacona</strong> a primera hora: los caballos del centro ecuestre pasean por la orilla al amanecer — no te lo pierdas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}