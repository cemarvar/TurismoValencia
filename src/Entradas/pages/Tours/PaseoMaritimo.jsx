import '../../assets/cssTours/PaseoMaritimo.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var playas = [
  {
    num: '01',
    nombre: 'Playa del Cabanyal · Las Arenas',
    tipo: 'Playa urbana · Bandera Azul · Junto a la Marina de València · ~200 m de anchura',
    subtitulo: 'La más animada · Junto al puerto · Hotel Las Arenas · Inmortalizada por Sorolla · Servicios completos',
    desc: 'La playa que los valencianos siguen llamando Las Arenas, por el antiguo balneario del mismo nombre hoy reconvertido en el Hotel Las Arenas Balneario Resort. Sus aguas, sus pescadores y los niños chapoteando a orillas del Mediterráneo fueron inmortalizados por el pintor Joaquín Sorolla. Con casi 200 metros de anchura es la playa más ancha del litoral urbano de Valencia, lo que la convierte en la preferida de las familias. Se encuentra entre La Marina de València —la zona de ocio del puerto— y la playa de La Malvarrosa, unidas de forma continua por el Paseo Marítimo bordeado de palmeras. Cuenta con áreas deportivas, canal náutico para deportes acuáticos, zonas de juego para niños y numerosos restaurantes especializados en paella y arroces con vistas al mar. Algunos locales del Paseo Neptuno se convierten en punto de encuentro nocturno.',
    datos: [
      { d: 'Ubicación', v: 'Paseo de Neptuno · Junto a la Marina de València · Barrio del Cabanyal' },
      { d: 'Dimensiones', v: '1,2 km de longitud · ~200 m de anchura · Arena fina y dorada' },
      { d: 'Servicios', v: 'Bandera Azul · Socorristas · Duchas · Vestuarios · Alquiler sombrillas y tumbonas · Accesible' },
      { d: 'Transporte', v: 'Metro L6, L7, L8 parada Las Arenas · Bus 19, 31, 32, 92, 93 · Carril bici desde el Turia' },
    ],
    imgClass: 'img-pm-arenas',
    tags: [{ label: 'Bandera Azul' }, { label: 'Sorolla' }, { label: 'La más animada' }],
  },
  {
    num: '02',
    nombre: 'Playa de La Malvarrosa',
    tipo: 'Playa urbana · Bandera Azul · Q de Calidad Turística · La más famosa de Valencia',
    subtitulo: '1,8 km · 135 m de anchura · Primer arrecife artificial de España · Casa-Museo Blasco Ibáñez',
    desc: 'La playa más famosa de Valencia y una cita obligada en toda visita a la ciudad. Con 1,8 kilómetros de longitud y una anchura media de 135 metros, ofrece un vasto espacio para disfrutar del sol mediterráneo. Su nombre deriva de las plantaciones de malvarrosas —flores rosáceas— que cubrían esta zona a mediados del siglo XIX cuando el botánico francés del Jardín Botánico de Valencia la transformó en un gran huerto de flores para producir jabones, perfumes y aceites esenciales. Hoy es la playa preferida de muchos valencianos por su carácter local, su proximidad a restaurantes y ocio, y su extraordinaria dotación de servicios: es la más indicada para visitantes con movilidad reducida, con pasarelas y rampas que llegan hasta la orilla. Junto a sus aguas se encuentra el primer arrecife subacuático artificial de España. En la zona norte, la Casa-Museo de Vicente Blasco Ibáñez conserva la fachada original del chalet donde residió el escritor.',
    datos: [
      { d: 'Ubicación', v: 'Paseo Marítimo de la Malvarrosa · Barrio de La Malvarrosa · al norte de Las Arenas' },
      { d: 'Dimensiones', v: '1,8 km de longitud · 135 m de anchura media · Arena fina y dorada' },
      { d: 'Certificaciones', v: 'Bandera Azul · Q de Calidad Turística · Qualitur · Norma UNE 170001 (accesibilidad)' },
      { d: 'Transporte', v: 'Metro L4, L6 parada Eugenia Viñes · Bus 1, 2, 19, 31, 32 · Valenbisi estaciones 163–170' },
    ],
    imgClass: 'img-pm-malvarrosa',
    tags: [{ label: 'La más famosa' }, { label: '100% accesible' }, { label: 'Q Calidad' }],
  },
  {
    num: '03',
    nombre: 'Playa de La Patacona',
    tipo: 'Playa urbana · Alboraya · Menos masificada · Ambiente de barrio · Horchata de Alboraya',
    subtitulo: 'Continuación natural de La Malvarrosa · Más tranquila · Terrazas con ambiente local · Horchata auténtica',
    desc: 'La Patacona es la playa de Alboraya, la continuación natural de La Malvarrosa hacia el norte, y el final —o el inicio— de la ruta de las tres playas del litoral urbano de Valencia. Al estar algo más alejada del centro está menos masificada que sus vecinas del sur, con un ambiente de barrio más auténtico que atrae tanto a locales como a viajeros que buscan algo menos turístico. Las casitas de colores originales del barrio van dejando paso a terrazas y restaurantes donde el ambiente de reunión vecinal sigue latente. Muy cerca se encuentran las famosas horchaterías de Alboraya, el municipio donde se produce la auténtica horchata de chufa artesanal, considerada la bebida refrescante más típica de la Comunitat Valenciana. A primera hora de la mañana y al atardecer, los caballos de un centro ecuestre cercano pasean por la orilla creando una imagen de postal mediterránea.',
    datos: [
      { d: 'Ubicación', v: 'Alboraya · Continuación norte de La Malvarrosa · ~5 km del centro de Valencia' },
      { d: 'Ambiente', v: 'Menos masificada · Ambiente local · Ideal para escapar del turismo masificado' },
      { d: 'Especialidad', v: 'Horchaterías de Alboraya · La horchata de chufa más auténtica de Valencia' },
      { d: 'Transporte', v: 'Metro L4, L6 parada Alboraya-Peris Aragó · Bus 92, 93 · En bici desde La Malvarrosa' },
    ],
    imgClass: 'img-pm-patacona',
    tags: [{ label: 'Tranquila' }, { label: 'Horchata Alboraya' }, { label: 'Ambiente local' }],
  },
];

var actividades = [
  { icono: '🏄', nombre: 'Deportes náuticos', desc: 'Paddle surf, windsurf, kayak, motos de agua y vela en el canal náutico balizado de La Malvarrosa y La Marina de València.' },
  { icono: '🏐', nombre: 'Vóley playa', desc: '32 pistas de vóley playa en La Malvarrosa. Club municipal con escuela, torneos y partidos recreativos para todos los niveles todo el año.' },
  { icono: '🧘', nombre: 'Yoga y fitness', desc: 'Clases gratuitas en verano en la arena: yoga, pilates, taichí, fitness latino, GAP y cross training, con monitores profesionales del programa "Deporte y Salud".' },
  { icono: '🚴', nombre: 'Carril bici', desc: 'Carril bici a lo largo de todo el Paseo Marítimo, conectado con el Jardín del Turia. Desde el centro al mar en bici en menos de 30 minutos.' },
  { icono: '🤿', nombre: 'Buceo y snorkel', desc: 'El primer arrecife subacuático artificial de España está junto a La Malvarrosa. Exploración del fondo marino a pocos metros de la costa.' },
  { icono: '🛶', nombre: 'Náutica en La Marina', desc: 'La Marina de València ofrece actividades náuticas de recreo, escuelas de vela y alquiler de embarcaciones junto a la playa del Cabanyal.' },
];

var gastronomia = [
  {
    nombre: 'Paella y arroces en el Paseo Neptuno',
    desc: 'El Paseo Neptuno y el Paseo Marítimo concentran algunos de los restaurantes de paella y arroces más emblemáticos de Valencia, con terraza directamente frente al mar y vistas al Mediterráneo. La paella valenciana, el arroz a banda, el arroz negro y los guisos de pescado fresco son los protagonistas absolutos de una gastronomía que nació en esta misma orilla.',
  },
  {
    nombre: 'Restaurante La Pepica',
    desc: 'Uno de los restaurantes de paella más famosos de España y del mundo, abierto desde 1898 en el Paseo Neptuno. Fue el favorito de Hemingway, que lo mencionó en algunos de sus escritos, y de personajes como el rey Juan Carlos I o Orson Welles. Referencia histórica e ineludible de la gastronomía valenciana.',
  },
  {
    nombre: 'Horchata y fartons · Alboraya',
    desc: 'La Patacona y Alboraya son el territorio de la horchata de chufa más auténtica de Valencia. Al caer la tarde, la combinación de horchata fría con fartons —el bollo dulce que se moja en la bebida— es uno de los rituales gastronómicos más valencianos que existen. Las horchaterías artesanales de Alboraya son el destino imprescindible.',
  },
  {
    nombre: 'Tardeo y coctelería frente al mar',
    desc: 'Al atardecer, el Paseo Marítimo se transforma: los chiringuitos y terrazas se llenan de gente que viene a tomar copas, cóckteles y tapas mientras el cielo cambia de azul a tonos malva, rosa y rojo sobre el Mediterráneo. Locales como Varadero son referencia del tardeo valenciano junto al mar.',
  },
];

var datosUtiles = [
  { label: 'Dirección', val: 'Paseo Marítimo · Eugenia Viñes, 46011 Valencia · Zona: Playa, Marina y Poblados Marítimos' },
  { label: 'Extensión total', val: 'Paseo Marítimo + Paseo Neptuno: 49.865 m² de superficie de vegetación · +3 km de frente litoral' },
  { label: 'Metro', val: 'L6, L7, L8 · Paradas: Eugenia Viñes, Las Arenas, Marina Real' },
  { label: 'Autobús', val: 'Líneas 19, 31, 32, 92, 93, 98, 99 · Nocturno: N1 · Desde Plaza del Ayuntamiento' },
  { label: 'En bici', val: 'Carril bici continuo desde el Jardín del Turia hasta el Paseo Marítimo · ~25–30 min desde el centro' },
  { label: 'Vegetación', val: 'Palmeras, geranios malvarrosa, lavándulas, gazanias, adelfas y tamarix a lo largo del paseo' },
  { label: 'Temporada', val: 'Abierto y animado todo el año · Baño recomendado de mayo a octubre · Servicios de socorrismo en verano' },
  { label: 'Accesibilidad', val: 'Playas adaptadas con pasarelas, rampas y programa de ayuda al baño · WCs adaptados · Acceso silla de ruedas' },
];

export default function PaseoMaritimo() {
  return (
    <div className="pm-page">

      {/* Hero */}
      <div className="pm-hero">
        <div className="pm-hero-overlay" />
        <div className="pm-hero-content">
          <div className="pm-eyebrow">Playas urbanas · Paseo Marítimo · Paseo Neptuno · Valencia</div>
          <h1>El Paseo<br />Marítimo<br />de Valencia</h1>
          <p>El jardín más visitado de Valencia: 3 km de arena dorada, palmeras mediterráneas y los mejores restaurantes de paella frente al mar. Las playas del Cabanyal, la Malvarrosa y la Patacona, conectadas por el paseo más emblemático de la ciudad.</p>
        </div>
        <div className="pm-hero-stats">
          <div className="pm-stat">
            <span className="pm-stat-num">3 km</span>
            <span className="pm-stat-label">Frente litoral</span>
          </div>
          <div className="pm-stat-sep" />
          <div className="pm-stat">
            <span className="pm-stat-num">3</span>
            <span className="pm-stat-label">Playas urbanas</span>
          </div>
          <div className="pm-stat-sep" />
          <div className="pm-stat">
            <span className="pm-stat-num">300</span>
            <span className="pm-stat-label">Días de sol al año</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="pm-intro-box">
        <div className="pm-intro-icono">🌊</div>
        <div className="pm-intro-content">
          <div className="pm-intro-titulo">El paseo que une Valencia con el Mediterráneo</div>
          <p>El <strong>Paseo Marítimo de Valencia</strong> discurre junto a las playas de <strong>Las Arenas</strong> (Cabanyal) y <strong>La Malvarrosa</strong>, mientras el <strong>Paseo Neptuno</strong> se extiende frente al puerto y la zona de restaurantes, abarcando entre ambos casi 50.000 m² de superficie de vegetación. Las alineaciones de palmeras y los macizos de geranios malvarrosa, lavándulas, gazanias y adelfas dan la perspectiva característica del paseo. Un <strong>carril bici continuo</strong> recorre su longitud completa, conectando el Jardín del Turia con el mar. El paseo une a Valencia con el Mediterráneo y es <strong>uno de los jardines más visitados de la ciudad</strong>: tanto en verano para disfrutar de la playa como el resto del año para pasear junto al mar, la afluencia de público es constante.</p>
        </div>
      </div>

      {/* Section title playas */}
      <div className="pm-section-title">
        <h2>Las tres playas del Paseo Marítimo</h2>
        <p>Cabanyal, Malvarrosa y Patacona forman más de 3 km de arena dorada sin interrupción.</p>
      </div>

      {/* Playas */}
      <div className="pm-routes">
        {playas.map(playa => (
          <div className="pm-route-item" key={playa.num}>
            <div className="pm-route-num">{playa.num}</div>
            <div className="pm-route-text">
              <div className="pm-tipo">{playa.tipo}</div>
              <h2>{playa.nombre}</h2>
              <div className="pm-subtitulo">{playa.subtitulo}</div>
              <p className="pm-desc">{playa.desc}</p>
              <div className="pm-datos-titulo">Datos clave</div>
              <ul className="pm-datos">
                {playa.datos.map(d => (
                  <li key={d.d}>
                    <span className="pm-dato-label">{d.d}:</span>
                    <span className="pm-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="pm-tags">
                {playa.tags.map(t => (
                  <span key={t.label} className="pm-tag">{t.label}</span>
                ))}
              </div>
            </div>
            <div className="pm-route-img">
              <div className={`pm-route-img-inner ${playa.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Actividades */}
      <div className="pm-actividades-section">
        <h3>Actividades en el Paseo Marítimo y las playas</h3>
        <p className="pm-actividades-desc">Las playas de Valencia ofrecen mucho más que sol y baño. Un destino activo durante los 12 meses del año.</p>
        <div className="pm-actividades-grid">
          {actividades.map(a => (
            <div className="pm-actividad-card" key={a.nombre}>
              <span className="pm-actividad-icono">{a.icono}</span>
              <div className="pm-actividad-nombre">{a.nombre}</div>
              <p className="pm-actividad-desc">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Gastronomía */}
      <div className="pm-gastro-section">
        <h3>Gastronomía frente al mar · Paella, horchata y tardeo</h3>
        <p className="pm-gastro-desc">El Paseo Neptuno y el Paseo Marítimo son la cuna gastronómica de la paella valenciana con vistas al Mediterráneo.</p>
        <div className="pm-gastro-grid">
          {gastronomia.map(g => (
            <div className="pm-gastro-card" key={g.nombre}>
              <div className="pm-gastro-nombre">{g.nombre}</div>
              <p className="pm-gastro-desc-text">{g.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabla datos útiles */}
      <div className="pm-info-practica">
        <h3>Información práctica · Paseo Marítimo de Valencia</h3>
        <div className="pm-tabla">
          {datosUtiles.map(d => (
            <div className="pm-tabla-fila" key={d.label}>
              <div className="pm-tabla-label">{d.label}</div>
              <div className="pm-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="pm-info-box">
        <h3>Consejos para disfrutar el Paseo Marítimo al máximo</h3>
        <ul className="pm-info-list">
          <li>La mejor forma de llegar desde el centro es <strong>en bicicleta por el Jardín del Turia</strong>: 9 km de parque lineal sin semáforos hasta el mar, la ruta más bonita de Valencia</li>
          <li>Para la <strong>paella del domingo</strong> reserva siempre en los restaurantes del Paseo Neptuno: son los más populares y sin reserva es casi imposible encontrar mesa en verano</li>
          <li>El <strong>Paseo Marítimo al amanecer</strong> es mágico: los pescadores salen al mar, el paseo está vacío y la luz mediterránea del alba sobre el agua es imposible de fotografiar mal</li>
          <li>La <strong>playa de La Patacona</strong> (Alboraya) es la más tranquila de las tres: si buscas espacio y ambiente local en lugar de turismo masificado, es la mejor opción especialmente en agosto</li>
          <li>En verano hay <strong>clases gratuitas</strong> de yoga, pilates y fitness en la arena: consulta el programa "Deporte y Salud" del Ayuntamiento de Valencia para horarios</li>
          <li>El <strong>tardeo en el Paseo Marítimo</strong> al atardecer —dicen que la luz toma tonos malva y rosa sobre el mar— es uno de los planes más queridos por los valencianos de fin de semana</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}