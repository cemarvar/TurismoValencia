import '../assets/css/BarrioGranVia.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var hoteles = [
  {
    num: '01',
    nombre: 'ABCyou Bed & Breakfast',
    tipo: 'B&B boutique · Calle del Taquígrafo Martí, 10',
    subtitulo: 'Edificio valenciano de 1920 · Mosaicos de cerámica · Jardín interior · 12 habitaciones · Bicicletas de alquiler',
    desc: 'El ABCyou Bed & Breakfast es uno de los alojamientos más auténticos y queridos del barrio. Ocupa un precioso edificio valenciano de 1920 en la calle del Taquígrafo Martí, a escasos pasos de la Gran Vía, y combina los mosaicos de cerámica tradicional valenciana con pequeños toques de diseño contemporáneo. Sus 12 habitaciones son todas diferentes: las que dan a la calle tienen balcón con vistas al barrio, las que dan al interior disponen de sala de estar propia, y algunas tienen bañera. Todas cuentan con baño privado, aire acondicionado, WiFi gratuito y pequeña nevera. El desayuno continental (zumo de naranja, café o té, tostadas o croissant) está incluido al reservar directamente. El jardín interior —un remanso de paz en el corazón de la ciudad— es uno de los espacios más valorados del alojamiento. Se puede alquilar bicicleta o patinete eléctrico en recepción. A 5 minutos a pie de la Plaza de Toros y de la Estación del Nord.',
    datos: [
      { d: 'Tipo', v: 'B&B boutique · 12 habitaciones individuales · Edificio de 1920 · Mosaicos de cerámica valenciana' },
      { d: 'Habitaciones', v: 'Baño privado · AC · WiFi · Nevera · Balcón o sala de estar · Algunas con bañera · Luz natural' },
      { d: 'Servicios', v: 'Desayuno incluido (reserva directa) · Jardín interior · Bicicletas y patinetes · Info turística' },
      { d: 'Ubicación', v: 'C/ Taquígrafo Martí, 10 · 5 min a pie Estación del Nord · 10 min Plaza Ayuntamiento · Metro Colón' },
    ],
    imgClass: 'img-abcyou',
    tags: [{ label: 'Edificio 1920' }, { label: 'Jardín interior' }, { label: 'Desayuno incluido' }],
  },
  {
    num: '02',
    nombre: 'Hotel Dimar',
    tipo: 'Hotel 4 estrellas · Gran Vía Marqués del Turia, 80',
    subtitulo: '50 años en el barrio · Junto al Jardín del Turia · 96 habitaciones · Junior Suites con terraza a la Gran Vía · Spa y gimnasio',
    desc: 'El Hotel Dimar es un símbolo del barrio de la Gran Vía: abierto en 1975 por la familia Martínez-Dicenta, fue uno de los primeros hoteles de Valencia y lleva 50 años siendo el corazón hotelero del Eixample. Situado en el número 80 de la Gran Vía Marqués del Turia, a pocos pasos de la Plaza de Cánovas, el Jardín del Turia y el Palau de la Música, ofrece una ubicación privilegiada en el mejor eje de ocio y comercio de la ciudad. Sus 96 habitaciones de diseño moderno cuentan con suelo de madera, minibar, cafetera, WiFi gratuito, aire acondicionado personalizado y baño privado completo. Las 7 Junior Suites incluyen zona de estar independiente, vestidor y terraza privada con vistas a la Gran Vía. El restaurante Salon Turia sirve un desayuno buffet con productos locales (7:00–10:30 h), y el hotel dispone de bar, spa con zona de masajes, gimnasio y servicio de habitaciones hasta las 23:00 h. La estación de metro Colón queda a 600 metros.',
    datos: [
      { d: 'Categoría', v: '4 estrellas · Atiram Hotels · 96 habitaciones · 7 Junior Suites · Abierto desde 1975 · Reformado' },
      { d: 'Habitaciones', v: 'Suelo de madera · Minibar · Cafetera · WiFi · AC personalizado · Baño privado · Servicio hasta 23h' },
      { d: 'Instalaciones', v: 'Rest. Salon Turia (desayuno buffet 7–10:30h) · Bar · Spa + masajes · Gimnasio · Sala eventos' },
      { d: 'Ubicación', v: 'Gran Vía Marqués del Turia, 80 · Junto al Jardín del Turia · 600 m metro Colón · 1,5 km CAC' },
    ],
    imgClass: 'img-dimar',
    tags: [{ label: '4 Estrellas' }, { label: '50 años en la Gran Vía' }, { label: 'Terraza a la Gran Vía' }],
  },
];

var datosBarrio = [
  { label: 'Zona', val: 'L\'Eixample · Gran Vía Marqués del Turia · Barrio Cánovas · Entre Ruzafa y el Jardín del Turia' },
  { label: 'Carácter', val: 'Elegante y burgués · Amplias avenidas con edificios modernistas · Tiendas de diseño · Restaurantes de moda · Vida tranquila de barrio' },
  { label: 'Monumentos', val: 'Jardín del Turia (a pie) · Palau de la Música · Mercado de Colón (8 min) · Plaza de Cánovas · Torres de Serranos (20 min a pie)' },
  { label: 'Transporte', val: 'Metro: Colón (L3/L5) y Alameda · Bus: múltiples líneas en Gran Vía · Tren: Estación del Nord (10 min a pie) · AVE: Joaquín Sorolla (15 min a pie)' },
  { label: 'Gastronomía', val: 'Zona Cánovas: decenas de restaurantes de cocina del mundo · Terraza del Palau de la Música · Mercado de Colón (tapas y cócteles) · Bares de moda en Ruzafa a 5 min' },
  { label: 'Jardín del Turia', val: '9 km de parque urbano lineal a la puerta del hotel Dimar · Accesible a pie o en bici · Conecta el centro histórico con la Ciudad de las Artes' },
  { label: 'Bicicleta', val: 'Valenbisi disponible en la zona · Alquiler en ABCyou (bicis y patinetes) · Carril bici del Jardín del Turia a pie del Hotel Dimar' },
  { label: 'Precio medio', val: 'ABCyou B&B: ~60–95 €/noche · Hotel Dimar: ~110–180 €/noche · Junior Suite Dimar: ~160–240 €' },
];

export default function BarrioGranVia() {
  return (
    <div className="grv-page">

      {/* Hero */}
      <div className="grv-hero">
        <div className="grv-hero-overlay" />
        <div className="grv-hero-content">
          <div className="grv-eyebrow">Alojamientos · Barrio Gran Vía · L'Eixample valenciano</div>
          <h1>Dormir en<br />la Gran Vía</h1>
          <p>El Eixample elegante de Valencia: grandes avenidas con edificios modernistas, el Jardín del Turia a la puerta y la mejor zona gastronómica de la ciudad a un paso.</p>
        </div>
        <div className="grv-hero-stats">
          <div className="grv-stat">
            <span className="grv-stat-num">2</span>
            <span className="grv-stat-label">Alojamientos</span>
          </div>
          <div className="grv-stat-sep" />
          <div className="grv-stat">
            <span className="grv-stat-num">Turia</span>
            <span className="grv-stat-label">Jardín a la puerta</span>
          </div>
          <div className="grv-stat-sep" />
          <div className="grv-stat">
            <span className="grv-stat-num">10 min</span>
            <span className="grv-stat-label">Al centro histórico</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="grv-intro-box">
        <div className="grv-intro-icono">🌳</div>
        <div className="grv-intro-content">
          <div className="grv-intro-titulo">L'Eixample · El barrio de las grandes avenidas</div>
          <p>El barrio de la Gran Vía —conocido como L'Eixample o Ensanche— es la Valencia elegante y burguesa del siglo XX. Sus <strong>amplias avenidas flanqueadas por edificios modernistas y eclécticos</strong> contrastan con la ciudad histórica y ofrecen una experiencia de barrio tranquilo y señorial. La <strong>Gran Vía Marqués del Turia</strong> es el eje principal: un paseo bordeado de tiendas de diseño, restaurantes de nivel y terrazas que une la Plaza de Cánovas con el Jardín del Turia. Este barrio es también el punto de conexión perfecto entre el <strong>centro histórico</strong> (a 10–15 min a pie), el <strong>barrio de Ruzafa</strong> (a 5 min) y la <strong>Ciudad de las Artes y las Ciencias</strong> (a 1,5 km en bici por el Jardín del Turia).</p>
        </div>
      </div>

      {/* Intro */}
      <div className="grv-intro">
        <p>Los alojamientos de la Gran Vía reflejan la diversidad del barrio: un <strong>B&B boutique en un edificio centenario</strong> con mosaicos de cerámica valenciana y jardín interior, y un <strong>hotel de 4 estrellas con 50 años de historia</strong> en la propia Gran Vía Marqués del Turia, con vistas directas al paseo arbolado.</p>
        <p>Alojarse aquí significa tener el <strong>Jardín del Turia a pie de calle</strong> —ideal para salir a correr, ir en bici hasta el mar o simplemente pasear 9 km de parque urbano—, el <strong>Mercado de Colón a 8 minutos</strong> y el Palau de la Música como vecino de barrio.</p>
      </div>

      {/* Section title */}
      <div className="grv-section-title">
        <h2>Los alojamientos del barrio Gran Vía</h2>
        <p>Dos propuestas seleccionadas para distintos perfiles de viajero en el Eixample valenciano.</p>
      </div>

      {/* Hoteles */}
      <div className="grv-routes">
        {hoteles.map(hotel => (
          <div className="grv-route-item" key={hotel.num}>
            <div className="grv-route-num">{hotel.num}</div>

            <div className="grv-route-text">
              <div className="grv-tipo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="grv-subtitulo">{hotel.subtitulo}</div>
              <p className="grv-desc">{hotel.desc}</p>

              <div className="grv-datos-titulo">Datos clave</div>
              <ul className="grv-datos">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="grv-dato-label">{d.d}:</span>
                    <span className="grv-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="grv-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="grv-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="grv-route-img">
              <div className={`grv-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos del barrio */}
      <div className="grv-info-practica">
        <h3>Información práctica · Alojarse en el barrio Gran Vía</h3>
        <div className="grv-tabla">
          {datosBarrio.map(d => (
            <div className="grv-tabla-fila" key={d.label}>
              <div className="grv-tabla-label">{d.label}</div>
              <div className="grv-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="grv-info-box">
        <h3>Consejos para alojarse en la Gran Vía</h3>
        <ul className="grv-info-list">
          <li>El <strong>Hotel Dimar</strong> lleva 50 años en el barrio — pide una habitación o suite con terraza a la Gran Vía para una de las vistas más elegantes de Valencia</li>
          <li>El <strong>ABCyou B&B</strong> incluye desayuno continental al reservar directamente en su web — zumo de naranja valenciana recién exprimido incluido</li>
          <li>Desde el Hotel Dimar, el <strong>Jardín del Turia</strong> está literalmente a la vuelta de la esquina: alquila una bicicleta y llega pedaleando hasta la Ciudad de las Artes en 15 minutos</li>
          <li>El <strong>Mercado de Colón</strong> (a 8 min a pie del ABCyou) es el mejor lugar del barrio para tomar algo por la tarde: tapas, cócteles y ambiente selecto en un mercado modernista</li>
          <li>La zona Cánovas —entre el Dimar y Ruzafa— concentra algunos de los mejores restaurantes de la ciudad: reserva mesa para cenar, sobre todo los fines de semana</li>
          <li>El <strong>metro Colón</strong> (a 600 m del Dimar) conecta directamente con el aeropuerto, la playa y el centro histórico: el transporte más cómodo de Valencia</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}