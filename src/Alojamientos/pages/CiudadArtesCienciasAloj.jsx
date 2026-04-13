import '../assets/css/CiudadArtesCienciasAloj.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var hoteles = [
  {
    num: '01',
    nombre: 'Eurostars Rey Don Jaime',
    tipo: 'Hotel 4 estrellas · Frente al Jardín del Turia · Torre de 14 plantas',
    subtitulo: 'Piscina en azotea · Frente al Palau de la Música · 319 habitaciones · 10 salones de eventos',
    desc: 'El Eurostars Rey Don Jaime es uno de los grandes hoteles de referencia junto a la Ciudad de las Artes y las Ciencias. Su imponente torre de 14 plantas se alza frente al Jardín del Turia y el Palau de la Música de Valencia, a menos de 1 km del complejo de Calatrava. Con 319 habitaciones contemporáneas y amplias —algunas con albornoz y zapatillas en planta superior—, piscina exterior en azotea con solárium y tumbonas, gimnasio y restaurante con productos de proximidad, ofrece una experiencia completa. El desayuno buffet es muy valorado, con opciones vegetarianas, sin lactosa y sin gluten. La línea de autobús 19 tiene parada en la esquina del hotel y conecta con el centro y la playa. Dispone de 10 salones para eventos, congresos y convenciones con capacidad para hasta 250 personas.',
    datos: [
      { d: 'Categoría', v: '4 estrellas · Cadena Eurostars Hotels · Torre de 14 plantas · 319 habitaciones' },
      { d: 'Instalaciones', v: 'Piscina azotea + solárium · Gimnasio · Restaurante km0 · WiFi gratis · Parking' },
      { d: 'Eventos', v: '10 salones equipados · Hasta 250 personas · Ideal para congresos y convenciones' },
      { d: 'Ubicación', v: 'Frente al Jardín del Turia y Palau de la Música · Bus L19 en la puerta · 1 km de la CAC' },
    ],
    imgClass: 'img-reydonjaime',
    tags: [{ label: '4 Estrellas' }, { label: 'Torre 14 plantas' }, { label: 'Piscina azotea' }],
  },
  {
    num: '02',
    nombre: 'Primus Valencia',
    tipo: 'Hotel 4 estrellas superior · Calle Menorca, 22',
    subtitulo: 'Spa de 800 m² · Piscina exterior · Jardín privado 2.000 m² · Diseño de Patricia Urquiola · A 600 m de la CAC',
    desc: 'El Primus Valencia es el hotel más exclusivo de la zona de la Ciudad de las Artes y las Ciencias, con la categoría de 4 estrellas superior. Situado a tan solo 600 metros del complejo, entre el Paseo de la Alameda y la Avenida de Francia, destaca por su diseño de vanguardia con elementos firmados por los arquitectos Patricia Urquiola, Francesc Rifé y Jean Marie Massaud. Sus 262 habitaciones —todas exteriores, luminosas e insonorizadas— incluyen suelo de parquet, minibar, caja fuerte para portátil y cama extragrande. La suite presidencial y la planta ejecutiva Primus elevan la propuesta al nivel premium. El spa de 800 m² es uno de los más completos de Valencia: piscina dinámica, piscina polar, jacuzzi, sauna, hammam, duchas de esencias y cabinas de tratamiento. El jardín privado de 2.000 m² con piscina exterior y terraza de 200 m² completan un hotel que es, en sí mismo, un destino.',
    datos: [
      { d: 'Categoría', v: '4 estrellas superior · 262 habitaciones · 8 plantas · Diseño Patricia Urquiola y Rifé' },
      { d: 'Spa', v: '800 m² · Piscina dinámica · Polar · Jacuzzi · Sauna · Hammam · Duchas de esencias · 18 €/pers.' },
      { d: 'Instalaciones', v: 'Jardín 2.000 m² · Piscina exterior · Terraza 200 m² · Rest. Menorca XXII · 8 salas eventos' },
      { d: 'Ubicación', v: 'Calle Menorca, 22 · 600 m de la CAC · Frente al CC Aqua · Bus a 75 m · Metro Ayora cerca' },
    ],
    imgClass: 'img-primus',
    tags: [{ label: '4★ Superior' }, { label: 'Spa 800 m²' }, { label: 'Diseño firma' }],
  },
  {
    num: '03',
    nombre: 'ILUNION Aqua 3 · ILUNION Aqua 4',
    tipo: 'Dúo de hoteles 3★ y 4★ · Centro Comercial Aqua Multiespacio',
    subtitulo: 'A 300 m del Oceanogràfic · Accesible y pet friendly · Restaurante compartido · Parking · Spa y cines en el mismo edificio',
    desc: 'Los hoteles ILUNION Aqua 3 y Aqua 4 son una propuesta única en Valencia: dos establecimientos hermanos —de 3 y 4 estrellas respectivamente— integrados en el centro comercial Aqua Multiespacio, a solo 300 metros del Oceanogràfic y de la Ciudad de las Artes y las Ciencias. El Aqua 3 ofrece 135 habitaciones dobles estándar modernas y funcionales, mientras el Aqua 4 tiene 163 habitaciones dobles con vistas al Oceanogràfic, 8 suites de 40 m² y habitaciones familiares triples, siendo especialmente recomendado para familias (niños menores de 8 años gratis). Ambos comparten restaurante —el Aqua 3 con menú de mercado; el Aqua 4 con el innovador concepto gastronómico Umániko—, y acceso directo al spa, gimnasio, multicine y tiendas del centro comercial. Toda la cadena ILUNION destaca por su accesibilidad universal y su política pet friendly.',
    datos: [
      { d: 'Categoría', v: 'Aqua 3: 3 estrellas · 135 hab. · Aqua 4: 4 estrellas · 163 hab. + 8 suites de 40 m²' },
      { d: 'Instalaciones', v: 'Restaurante + Umániko · Spa · Gimnasio · Multicine · Tiendas · Parking 16 €/día' },
      { d: 'Destacado', v: 'Accesibilidad total · Pet friendly · Aqua 4: niños <8 años gratis · Suites familiares' },
      { d: 'Ubicación', v: '300 m del Oceanogràfic · CC Aqua Multiespacio · Metro + bus + tranvía en la puerta · V-15' },
    ],
    imgClass: 'img-ilunion',
    tags: [{ label: '3★ y 4★' }, { label: 'Pet friendly' }, { label: 'Accesible' }],
  },
  {
    num: '04',
    nombre: 'Barceló Valencia',
    tipo: 'Hotel 4 estrellas · Avenida de Francia, 11',
    subtitulo: 'Frente al Palau de les Arts · Terraza con piscina en planta 10 · Vistas Calatrava · Restaurante Senyoret',
    desc: 'El Barceló Valencia es el hotel con la ubicación más espectacular de la zona: situado directamente frente al Palau de les Arts Reina Sofía, la obra maestra de Santiago Calatrava, ofrece vistas únicas al skyline de la Ciudad de las Artes y las Ciencias. Sus 187 habitaciones amplias y luminosas —incluyendo 10 junior suites y 2 suites— están equipadas con camas King Size de 2×2 metros, TV LCD, minibar, caja fuerte y WiFi gratuito. La terraza de la décima planta, con piscina y solárium y vistas panorámicas al conjunto de Calatrava, es uno de los puntos más fotografiados de Valencia. El restaurante a la carta Senyoret sirve cocina mediterránea de mercado, mientras el Lobby Bar El Gotet ofrece snacks y cócteles con vistas a la ciudad. La línea de autobús 19 tiene parada en la puerta: llega al centro y a la playa en 10 minutos.',
    datos: [
      { d: 'Categoría', v: '4 estrellas · Barceló Hotel Group · 187 hab. · 10 Junior Suites · 2 Suites' },
      { d: 'Habitaciones', v: 'Camas King Size 2×2 m · TV LCD · Minibar · Caja fuerte · WiFi · Vistas al Palau de les Arts' },
      { d: 'Instalaciones', v: 'Terraza planta 10 + piscina · Rest. Senyoret · Bar El Gotet · Gimnasio · Parking' },
      { d: 'Ubicación', v: 'Av. de França, 11 · Frente al Palau de les Arts · Bus L19 en puerta · 5 min playa' },
    ],
    imgClass: 'img-barcelo',
    tags: [{ label: '4 Estrellas' }, { label: 'Vistas Calatrava' }, { label: 'Terraza piscina' }],
  },
];

var datosBarrio = [
  { label: 'Zona', val: 'Camins al Grau · Avenida de Francia · Entorno Ciudad de las Artes y las Ciencias · Jardín del Turia' },
  { label: 'Monumentos', val: 'L\'Oceanogràfic (acuario más grande de Europa) · L\'Hemisfèric · Museu de les Ciències · Palau de les Arts Reina Sofía · Parque Gulliver' },
  { label: 'Transporte', val: 'Bus L19 (frente a todos los hoteles) · Metro: Ayora y Marítim-Serrería · Tranvía · AVE: Joaquín Sorolla (10 min) · Aeropuerto: 15-20 min' },
  { label: 'Playa', val: 'Playa de la Malvarrosa y Las Arenas a 5–10 min en bus L19 · Puerto de Valencia a 10 min' },
  { label: 'Gastronomía', val: 'Restaurante Vertical (estrella Michelin, en edificio ILUNION Aqua 4) · Restaurante Senyoret (Barceló) · Rest. Menorca XXII (Primus) · CC Aqua' },
  { label: 'Comercio', val: 'Centro Comercial Aqua Multiespacio (spa, multicine, tiendas) · El Corte Inglés en Av. Francia frente al Primus · Roig Arena a 1,9 km' },
  { label: 'Bicicleta', val: 'Carril bici del Jardín del Turia hasta el centro (9 km) · Alquiler en Primus y Eurostars · Valenbisi disponible en la zona' },
  { label: 'Precio medio', val: 'ILUNION Aqua 3: ~70–100 €/noche · ILUNION Aqua 4: ~90–130 € · Eurostars Rey Don Jaime: ~100–160 € · Primus / Barceló: ~130–220 €' },
];

export default function CiudadArtesCienciasAloj() {
  return (
    <div className="cac-page">

      {/* Hero */}
      <div className="cac-hero">
        <div className="cac-hero-overlay" />
        <div className="cac-hero-content">
          <div className="cac-eyebrow">Alojamientos · Ciudad de las Artes y las Ciencias · Av. de França</div>
          <h1>Dormir junto<br />a la Ciudad<br />de Calatrava</h1>
          <p>Cuatro hoteles frente a la obra arquitectónica más icónica de Valencia: el Oceanogràfic, el Palau de les Arts y el Museu de les Ciències a tu puerta.</p>
        </div>
        <div className="cac-hero-stats">
          <div className="cac-stat">
            <span className="cac-stat-num">4</span>
            <span className="cac-stat-label">Alojamientos</span>
          </div>
          <div className="cac-stat-sep" />
          <div className="cac-stat">
            <span className="cac-stat-num">3★ – 4★</span>
            <span className="cac-stat-label">Todas las categorías</span>
          </div>
          <div className="cac-stat-sep" />
          <div className="cac-stat">
            <span className="cac-stat-num">300 m</span>
            <span className="cac-stat-label">Al Oceanogràfic</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="cac-intro-box">
        <div className="cac-intro-icono">🏛️</div>
        <div className="cac-intro-content">
          <div className="cac-intro-titulo">La Valencia más moderna · Calatrava y Candela</div>
          <p>La Ciudad de las Artes y las Ciencias es el gran símbolo de la Valencia contemporánea. Diseñada por <strong>Santiago Calatrava</strong> y <strong>Félix Candela</strong>, este complejo futurista concentra en 350.000 m² algunos de los edificios más fotografiados del mundo: el <strong>L'Oceanogràfic</strong> (el acuario más grande de Europa, con el túnel submarino más largo del continente), el <strong>L'Hemisfèric</strong> con su cine IMAX, el <strong>Museu de les Ciències Príncep Felip</strong> y el imponente <strong>Palau de les Arts Reina Sofía</strong>. Alojarse aquí es vivir en primera fila el espectáculo arquitectónico. El <strong>Jardín del Turia</strong> —9 km de parque urbano en el antiguo cauce del río— conecta toda esta zona con el centro histórico a pie o en bicicleta.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="cac-intro">
        <p>Los hoteles de la zona de la Ciudad de las Artes y las Ciencias cubren todos los perfiles: desde el <strong>hotel de diseño con spa premium</strong> y jardín privado hasta el <strong>dúo de hoteles integrado en un centro comercial</strong> con acceso directo al Oceanogràfic, pasando por una torre clásica frente al Turia y el establecimiento con las mejores vistas directas al skyline de Calatrava.</p>
        <p>La <strong>línea de autobús 19</strong>, con parada frente a todos los hoteles, conecta en 10 minutos con el centro histórico y la Playa de la Malvarrosa. La zona dispone de amplia oferta de parking y conexión en metro, bus y tranvía.</p>
      </div>

      {/* Section title */}
      <div className="cac-section-title">
        <h2>Los alojamientos de la Ciudad de las Artes y las Ciencias</h2>
        <p>Cuatro opciones seleccionadas para distintos presupuestos, a pie del complejo de Calatrava.</p>
      </div>

      {/* Hoteles */}
      <div className="cac-routes">
        {hoteles.map(hotel => (
          <div className="cac-route-item" key={hotel.num}>
            <div className="cac-route-num">{hotel.num}</div>

            <div className="cac-route-text">
              <div className="cac-tipo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="cac-subtitulo">{hotel.subtitulo}</div>
              <p className="cac-desc">{hotel.desc}</p>

              <div className="cac-datos-titulo">Datos clave</div>
              <ul className="cac-datos">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="cac-dato-label">{d.d}:</span>
                    <span className="cac-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="cac-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="cac-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="cac-route-img">
              <div className={`cac-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos del barrio */}
      <div className="cac-info-practica">
        <h3>Información práctica · Alojarse en la Ciudad de las Artes y las Ciencias</h3>
        <div className="cac-tabla">
          {datosBarrio.map(d => (
            <div className="cac-tabla-fila" key={d.label}>
              <div className="cac-tabla-label">{d.label}</div>
              <div className="cac-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="cac-info-box">
        <h3>Consejos para alojarse en la Ciudad de las Artes y las Ciencias</h3>
        <ul className="cac-info-list">
          <li>Para las <strong>mejores vistas a la CAC</strong>: pide habitación con vistas en el Barceló Valencia — la vista al Palau de les Arts desde la habitación es espectacular</li>
          <li>El <strong>Primus Valencia</strong> tiene el mejor spa de la zona (800 m²): 18 €/persona, mucho más barato si eres huésped del hotel</li>
          <li>Los <strong>ILUNION Aqua 3 y 4</strong> son ideales para familias con niños — acceso directo al Oceanogràfic y niños menores de 8 años gratis en el Aqua 4</li>
          <li>El <strong>bus L19</strong> tiene parada justo en la puerta de los hoteles y lleva al centro histórico y la playa en 10 minutos</li>
          <li>El <strong>Jardín del Turia</strong> es accesible a pie desde todos los hoteles: en bicicleta llegas al centro histórico en 20 minutos por un carril bici precioso</li>
          <li>Reserva con antelación en <strong>verano y Semana Santa</strong>: la zona se llena por el Oceanogràfic y los eventos del Palau de les Arts</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}