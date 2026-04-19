import '../assets/css/BaratoExclusivo.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

/* ─── Excluisivos ─── */
var exclusivos = [
  {
    num: '01',
    nombre: 'Las Arenas Balneario Resort',
    tipo: 'Hotel 5 estrellas Gran Lujo · El más lujoso de Valencia',
    subtitulo: 'Balneario histórico desde 1898 · 253 habitaciones · Spa · 2 piscinas · Brasserie Sorolla · Primera línea de playa',
    desc: 'Las Arenas Balneario Resort es el hotel más lujoso de Valencia. El balneario original fue fundado en 1898 junto a la Playa de las Arenas, y hoy el resort mantiene su elegancia histórica con instalaciones completamente renovadas de 5 estrellas Gran Lujo. Sus 253 habitaciones ofrecen decoración mediterránea en tonos neutros, algunas con vistas directas al mar, WiFi, TV LED, minibar, albornoz, zapatillas y baño completo. El spa de lujo —con piscina cubierta climatizada, sauna, masajes y tratamientos—, las 2 piscinas exteriores con bar, los jardines para celebraciones y el restaurante Brasserie Sorolla (cocina mediterránea con producto local) hacen de este resort un destino en sí mismo. Dispone de 2.500 m² para congresos, pista de pádel y club infantil.',
    datos: [
      { d: 'Categoría', v: '5 estrellas Gran Lujo · Balneario desde 1898 · 253 hab. · Primera línea Playa de las Arenas' },
      { d: 'Habitaciones', v: 'Vistas al mar o jardines · Minibar · Albornoz · Zapatillas · WiFi · TV LED · Bañera + ducha' },
      { d: 'Instalaciones', v: 'Spa · 2 piscinas ext. · Piscina cubierta · Rest. Brasserie Sorolla · Pádel · Club niños' },
      { d: 'Precio orientativo', v: '~200–380 €/noche · Playa de las Arenas · Metro + bus en puerta · CAC a 5 min en coche' },
    ],
    imgClass: 'img-ex-lasarenasbealoj',
    tags: [{ label: '5 Estrellas Gran Lujo' }, { label: 'El más lujoso' }, { label: 'Balneario 1898' }],
  },
  {
    num: '02',
    nombre: 'The Westin Valencia',
    tipo: 'Hotel 5 estrellas · Amadeo de Saboya, 16',
    subtitulo: 'Edificio modernista · 135 habitaciones Art Déco · Westin Heavenly Bed® · Spa 850 m² · Jardín tropical interior',
    desc: 'The Westin Valencia es uno de los hoteles más exclusivos de la ciudad, situado en uno de los edificios modernistas más impresionantes de Valencia en el prestigioso barrio de El Pla del Real. Sus 135 habitaciones y suites combinan arquitectura clásica Art Déco con diseño contemporáneo, equipadas con la famosa Westin Heavenly Bed® para un descanso inigualable, minibar, cafetera, WiFi, TV satélite, servicio de mayordomo y baño de lujo con jacuzzi en las suites. El spa de 850 m² es uno de los más completos de la ciudad: piscina cubierta climatizada, sauna finlandesa, baño turco, centro de fitness con entrenador personal y amplia gama de masajes. El hotel alberga el restaurante Rosmarino (cocina mediterránea refinada), un lobby bar y un maravilloso jardín tropical interior. A 5 minutos a pie del metro Aragón y junto al Jardín del Turia.',
    datos: [
      { d: 'Categoría', v: '5 estrellas Gran Lujo · Marriott Bonvoy · 135 hab. y suites · Edificio modernista · Barrio El Pla del Real' },
      { d: 'Habitaciones', v: 'Westin Heavenly Bed® · Minibar · Cafetera · WiFi · Servicio mayordomo · Suites con jacuzzi y terraza' },
      { d: 'Instalaciones', v: 'Spa 850 m² · Piscina cubierta · Sauna · Hammam · Gym · Rest. Rosmarino · Jardín tropical · Parking' },
      { d: 'Precio orientativo', v: '~200–400 €/noche · Amadeo de Saboya, 16 · 5 min metro Aragón · Junto al Jardín del Turia' },
    ],
    imgClass: 'img-ex-westinbealoj',
    tags: [{ label: '5 Estrellas Marriott Bonvoy' }, { label: 'Heavenly Bed®' }, { label: 'Edificio modernista' }],
  },
];

/* ─── Economicos ─── */
var baratos = [
  {
    num: '01',
    nombre: 'Travelodge Valencia Aeropuerto',
    tipo: 'Hotel 1 estrella · Carrer de les Roses, 31 · Manises',
    subtitulo: 'A 800 m del aeropuerto · Metro Rosas en la puerta · 116 habitaciones · Bar 24h · Desde ~30 €/noche',
    desc: 'El Travelodge Valencia Aeropuerto es la opción más práctica y económica para viajeros con vuelo temprano o tardío. Situado en Manises a solo 800 metros del aeropuerto, tiene la estación de metro Rosas literalmente enfrente del hotel, con conexión directa al centro de Valencia en 20 minutos. Sus 116 habitaciones contemporáneas incluyen AC, TV pantalla plana, WiFi en zonas comunes y baño privado. El bar-cafetería abre las 24 horas y sirve desayuno buffet, almuerzos y cenas ligeras. Dispone de aparcamiento privado de pago y es accesible y pet friendly. Ideal también para combinar el aeropuerto con la visita a la Feria de Valencia.',
    datos: [
      { d: 'Categoría', v: '1 estrella · Travelodge · 116 hab. · Manises · 800 m aeropuerto · Pet friendly' },
      { d: 'Habitaciones', v: 'AC · TV pantalla plana · Baño privado · Escritorio · WiFi en zonas comunes' },
      { d: 'Servicios', v: 'Bar-cafetería 24h · Desayuno buffet · Parking de pago · Recepción 24h · Accesible' },
      { d: 'Precio orientativo', v: '~30–55 €/noche · Metro Rosas enfrente · 20 min al centro · Aeropuerto a pie' },
    ],
    imgClass: 'img-bar-travelodgebealoj',
    tags: [{ label: 'Aeropuerto' }, { label: 'Más barato' }, { label: 'Metro en puerta' }],
  },
  {
    num: '02',
    nombre: 'Ad Hoc Carmen',
    tipo: 'Hotel · Calle Samaniego, 20 · Barrio del Carmen',
    subtitulo: 'Edificio del siglo XV · Junto a la Catedral · Techos de 5 m · Dúplex familiares · Bicicletas gratis',
    desc: 'El Hotel Ad Hoc Carmen es una joya escondida en el corazón del casco histórico de Valencia. Ocupa un edificio construido a finales del siglo XV en la calle Samaniego, junto a la Catedral, las Torres de Serranos, el Palacio del Temple y la Plaza de la Virgen, en una calle peatonal tranquila y silenciosa. Sus techos de aproximadamente 5 metros de altura permiten habitaciones de dimensiones generosas: desde individuales hasta dúplex con 2 baños y terraza/solarium privada, y habitaciones familiares para hasta 6 personas. Todas tienen AC, WiFi, TV, baño privado y mobiliario moderno. El hotel tiene un acuerdo con una cafetería junto a la Plaza de la Virgen para desayunos a precio especial. Alquiler de bicicletas disponible.',
    datos: [
      { d: 'Tipo', v: 'Hotel boutique · Edificio s. XV (reformado s. XVII y XIX) · Calle peatonal · Barrio del Carmen' },
      { d: 'Habitaciones', v: 'Techos de ~5 m · Individuales, dúplex (2 baños + terraza), familiares hasta 6 personas' },
      { d: 'Servicios', v: 'WiFi · Bicicletas · Desayuno con descuento en cafetería vecina · Recepción 24h · Pet friendly' },
      { d: 'Precio orientativo', v: '~60–110 €/noche · C/ Samaniego, 20 · 5 min a pie Catedral · Junto al Jardín del Turia' },
    ],
    imgClass: 'img-bar-adhocbealoj',
    tags: [{ label: 'Edificio s. XV' }, { label: 'Casco histórico' }, { label: 'Dúplex familiares' }],
  },
  {
    num: '03',
    nombre: 'Hotel VillaCarlos',
    tipo: 'Hotel · Zona Ciudad de las Artes y las Ciencias',
    subtitulo: 'Junto a la CAC · Buen precio · Comunicado · Ambiente tranquilo',
    desc: 'El Hotel VillaCarlos es una opción sencilla y bien ubicada en la zona de la Ciudad de las Artes y las Ciencias, perfecta para viajeros que quieren estar cerca del complejo de Calatrava sin pagar los precios de los grandes hoteles del paseo. Un hotel práctico con habitaciones funcionales, bien comunicado con el centro de Valencia y con las playas. Ideal para familias y viajeros independientes que buscan buena relación calidad-precio en una de las zonas más modernas y visitadas de la ciudad.',
    datos: [
      { d: 'Tipo', v: 'Hotel · Zona Ciudad de las Artes y las Ciencias · Ambiente tranquilo · Familiar' },
      { d: 'Habitaciones', v: 'Funcionales y limpias · AC · WiFi · TV · Baño privado' },
      { d: 'Servicios', v: 'Recepción · Desayuno disponible · Fácil acceso a transporte público · Zona de ocio cercana' },
      { d: 'Precio orientativo', v: '~60–100 €/noche · Bus y metro cercanos · CAC a pocos minutos · Playa a 20 min' },
    ],
    imgClass: 'img-bar-villacarlosbealoj',
    tags: [{ label: 'Zona CAC' }, { label: 'Familiar' }, { label: 'Calidad-precio' }],
  },
  {
    num: '04',
    nombre: 'Hostal Venecia Plaza Centro',
    tipo: 'Hostal 2 estrellas · Plaza del Ayuntamiento, 3',
    subtitulo: 'En la plaza principal · 87 habitaciones · Balcones a la plaza · Desayuno buffet · El más céntrico de todos',
    desc: 'El Hostal Venecia Plaza Centro combina la mejor ubicación posible —la mismísima Plaza del Ayuntamiento, número 3— con una relación calidad-precio muy difícil de igualar. Ocupa un precioso edificio clásico completamente reformado con 87 habitaciones dotadas de AC, WiFi, TV pantalla plana y caja fuerte. Las más valoradas son las que tienen balcón con vistas directas a la plaza principal de Valencia. Desayuno buffet diario, sala TV común, recepción 24 horas y consigna de equipaje. A 5 minutos a pie de la estación de metro Xàtiva (con conexión directa al aeropuerto) y a 4 minutos de la Estación del Nord. Una opción imbatible para explorar el centro histórico a pie.',
    datos: [
      { d: 'Categoría', v: '2 estrellas · Hostal clásico reformado · 87 hab. · Edificio histórico · Plaza Ayuntamiento, 3' },
      { d: 'Habitaciones', v: 'AC · WiFi · TV pantalla plana · Caja fuerte · Algunas con balcón y vistas a la plaza' },
      { d: 'Servicios', v: 'Desayuno buffet · Sala TV · Recepción 24h · Consigna · 5 min metro Xàtiva' },
      { d: 'Precio orientativo', v: '~55–90 €/noche · Plaza del Ayuntamiento, 3 · 10 min a pie Catedral · 4 min tren' },
    ],
    imgClass: 'img-bar-veneciabealoj',
    tags: [{ label: 'Más céntrico' }, { label: 'Vista Plaza' }, { label: 'Calidad-precio' }],
  },
];

export default function BaratoExclusivo() {
  return (
    <div className="bex-page">
      {/* Hero */}
      <div className="bex-hero bex-hero--main">
        <div className="bex-hero-overlay bex-hero-overlay--main" />
        <div className="bex-hero-content">
          <div className="bex-eyebrow bex-eyebrow--main">Alojamientos · Valencia</div>
          <h1>Dónde dormir<br />en Valencia</h1>
          <p>Desde el lujo histórico frente al mar hasta las mejores opciones con precio ajustado. Hoteles exclusivos y económicos, todos bien ubicados.</p>
        </div>
        <div className="bex-hero-stats">
          <div className="bex-stat">
            <span className="bex-stat-num bex-stat-num--main">6</span>
            <span className="bex-stat-label">Hoteles seleccionados</span>
          </div>
          <div className="bex-stat-sep" />
          <div className="bex-stat">
            <span className="bex-stat-num bex-stat-num--main">Desde 30€</span>
            <span className="bex-stat-label">Por noche</span>
          </div>
          <div className="bex-stat-sep" />
          <div className="bex-stat">
            <span className="bex-stat-num bex-stat-num--main">5 Estrellas GL</span>
            <span className="bex-stat-label">Categoría máxima</span>
          </div>
        </div>
      </div>

      {/* Exclusivos */}

      <div className="bex-section-label bex-section-label--exclusivo">
        <span>Alojamientos exclusivos</span>
      </div>

      <div className="bex-routes">
        {exclusivos.map(hotel => (
          <div className="bex-route-item" key={hotel.num}>
            <div className="bex-route-num">{hotel.num}</div>
            <div className="bex-route-text">
              <div className="bex-tipo bex-tipo--exclusivo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="bex-subtitulo">{hotel.subtitulo}</div>
              <p className="bex-desc">{hotel.desc}</p>
              <div className="bex-datos-titulo">Datos clave</div>
              <ul className="bex-datos bex-datos--exclusivo">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="bex-dato-label">{d.d}:</span>
                    <span className="bex-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="bex-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="bex-tag bex-tag--exclusivo">{t.label}</span>
                ))}
              </div>
            </div>
            <div className="bex-route-img">
              <div className={`bex-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>


      {/* Economicos */}


      <div className="bex-section-label bex-section-label--barato">
        <span>Alojamiento económico</span>
      </div>

      <div className="bex-routes">
        {baratos.map(hotel => (
          <div className="bex-route-item" key={`bar-${hotel.num}`}>
            <div className="bex-route-num">{hotel.num}</div>
            <div className="bex-route-text">
              <div className="bex-tipo bex-tipo--barato">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="bex-subtitulo">{hotel.subtitulo}</div>
              <p className="bex-desc">{hotel.desc}</p>
              <div className="bex-datos-titulo">Datos clave</div>
              <ul className="bex-datos bex-datos--barato">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="bex-dato-label">{d.d}:</span>
                    <span className="bex-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="bex-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="bex-tag bex-tag--barato">{t.label}</span>
                ))}
              </div>
            </div>
            <div className="bex-route-img">
              <div className={`bex-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}