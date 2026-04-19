import '../assets/css/Centro.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var hoteles = [
  {
    num: '01',
    nombre: 'Meliá Plaza Valencia',
    tipo: 'Hotel 4 estrellas · Plaza del Ayuntamiento, 4',
    subtitulo: 'Edificio clásico · Vistas a la Plaza del Ayuntamiento · Terraza solárium en azotea · Gimnasio y sauna',
    desc: 'El Meliá Plaza Valencia ocupa un grandioso edificio clásico en la mismísima Plaza del Ayuntamiento, el corazón de Valencia. Con 101 habitaciones distribuidas en 11 plantas, ofrece la combinación perfecta de historia y confort moderno: suelos de madera o cerámica, colchones fabricados a medida, minibar, caja fuerte y TV de pantalla plana. Algunas habitaciones disponen de terraza privada con vistas directas a la plaza, ideales para disfrutar del ambiente valenciano. La terraza solárium de la azotea, el gimnasio y la sauna completan una propuesta de alto nivel que lo convierte en uno de los alojamientos de referencia del centro histórico. El restaurante del hotel y el bar Barecito sirven tapas y pinchos caseros. La estación de tren Valencia-Norte queda a solo 5 minutos a pie, y la Catedral a 10.',
    datos: [
      { d: 'Categoría', v: '4 estrellas · Cadena Meliá Hotels International · Edificio clásico reformado' },
      { d: 'Habitaciones', v: '101 habitaciones · Suelo de madera o cerámica · Algunas con terraza y vistas a la plaza' },
      { d: 'Instalaciones', v: 'Terraza solárium en azotea · Gimnasio · Sauna · Restaurante · Bar Barecito · WiFi gratis' },
      { d: 'Ubicación', v: 'Plaza del Ayuntamiento, 4 · 5 min a pie de Valencia-Norte · 10 min a pie de la Catedral' },
    ],
    imgClass: 'img-meliacto',
    tags: [{ label: '4 Estrellas' }, { label: 'Vista Plaza' }, { label: 'Solárium' }],
  },
  {
    num: '02',
    nombre: 'The Valentia Cabillers',
    tipo: 'Hotel boutique 4 estrellas · Calle Cabillers',
    subtitulo: 'A 50 m de la Catedral · Diseño contemporáneo · Rooftop con piscina · Edificio emblemático reformado',
    desc: 'The Valentia Cabillers es el hotel boutique de lujo más singular del casco histórico. Ocupa un edificio emblemático completamente reformado en la calle Cabillers, a tan solo 50 metros de la Catedral de Valencia y el Miguelete, y a pocos pasos del Mercado Central y la Iglesia de Santa Catalina. Su interiorismo es sobrio y contemporáneo, con suites luminosas, habitaciones con cocina americana y terrazas o balcones. El rooftop cuenta con piscina al aire libre y vistas espectaculares al centro de Valencia, lo que lo convierte en una experiencia única en la ciudad. Pertenece a la colección The Valentia Hoteles, que define su filosofía como "convertir la Valencia más auténtica en refugios de diseño". Una opción ideal para quienes buscan una estancia inmersiva en la Valencia histórica sin renunciar al lujo boutique.',
    datos: [
      { d: 'Categoría', v: '4 estrellas · Hotel boutique · The Valentia Hoteles · Edificio histórico reformado' },
      { d: 'Ubicación', v: 'Calle Cabillers · 50 m de la Catedral y el Miguelete · Junto al Mercado Central' },
      { d: 'Instalaciones', v: 'Rooftop con piscina · Hamacas con vistas · Habitaciones con terraza o balcón · Cocina americana' },
      { d: 'Estilo', v: 'Interiorismo contemporáneo y sobrio · Suites luminosas · Experiencia local auténtica' },
    ],
    imgClass: 'img-cabillerscto',
    tags: [{ label: '4 Estrellas' }, { label: 'Boutique' }, { label: 'Rooftop' }],
  },
  {
    num: '03',
    nombre: 'Hostal Venecia Plaza Centro',
    tipo: 'Hostal 2 estrellas · Plaza del Ayuntamiento, 3',
    subtitulo: 'Relación calidad-precio · Vistas a la Plaza del Ayuntamiento · Habitaciones con balcón · Sin salir del centro',
    desc: 'El Hostal Venecia Plaza Centro es la opción más recomendada para viajeros que buscan la mejor ubicación con una relación calidad-precio excepcional. Situado en la misma Plaza del Ayuntamiento —número 3—, ocupa un precioso edificio clásico completamente reformado con 87 habitaciones dotadas de aire acondicionado, WiFi, TV de pantalla plana y caja fuerte. Algunas habitaciones tienen balcón con vistas directas a la plaza principal de Valencia. El buffet de desayuno diario y la sala de TV común completan la propuesta. Desde la puerta del hostal se puede caminar hasta la Catedral en menos de 10 minutos, a la Lonja de la Seda en 5, y a la estación de metro Xàtiva en 5 minutos, con conexión directa al aeropuerto. Una opción imbatible para conocer el centro histórico a pie.',
    datos: [
      { d: 'Categoría', v: '2 estrellas · Hostal clásico reformado · 87 habitaciones · Edificio histórico' },
      { d: 'Habitaciones', v: 'AC, WiFi, TV pantalla plana, caja fuerte · Algunas con balcón y vistas a la plaza' },
      { d: 'Servicios', v: 'Desayuno buffet · Sala TV común · Recepción 24h · Consigna de equipaje' },
      { d: 'Ubicación', v: 'Plaza del Ayuntamiento, 3 · 5 min a pie metro Xàtiva · 10 min a pie Catedral · 4 min tren' },
    ],
    imgClass: 'img-veneciacto',
    tags: [{ label: 'Calidad-precio' }, { label: 'Vista Plaza' }, { label: 'Centro total' }],
  },
  {
    num: '04',
    nombre: 'Hotel RH Sorolla Centro',
    tipo: 'Hotel 3 estrellas · Convento Santa Clara, 5',
    subtitulo: 'Zona peatonal · A 50 m de la Plaza del Ayuntamiento · WiFi y caja fuerte gratuitos · Botella de vino de bienvenida',
    desc: 'El Hotel RH Sorolla Centro es un moderno establecimiento de 3 estrellas situado en la zona peatonal más comercial del centro de Valencia, a tan solo 50 metros de la Plaza del Ayuntamiento. Sus 58 habitaciones contemporáneas están equipadas con aire acondicionado, TV LCD con canales internacionales, WiFi gratuito y caja fuerte. Las habitaciones con balcón o terraza privada ofrecen vistas a las animadas calles peatonales del centro. El desayuno buffet se sirve de 7:30 a 11:00 y la recepción está abierta las 24 horas. Un detalle diferencial: quienes reserven directamente en la web oficial reciben una botella de vino de bienvenida. La estación de metro Xàtiva —con conexión directa al aeropuerto— está a menos de 200 metros, y la estación de tren Valencia-Norte a 200 metros. Alquiler de bicicletas disponible en el hotel.',
    datos: [
      { d: 'Categoría', v: '3 estrellas · Cadena RH Hoteles · 58 habitaciones · 6 plantas · Moderno y céntrico' },
      { d: 'Habitaciones', v: 'AC, TV LCD, WiFi gratis, caja fuerte · Algunas con balcón o terraza a calle peatonal' },
      { d: 'Servicios', v: 'Desayuno buffet 7:30–11:00 · Recepción 24h · Alquiler bicicletas · Info turística · 2 salones' },
      { d: 'Ubicación', v: 'Convento Santa Clara, 5 · 50 m Plaza Ayuntamiento · 200 m metro Xàtiva · 200 m tren Norte' },
    ],
    imgClass: 'img-sorollacto',
    tags: [{ label: '3 Estrellas' }, { label: 'Zona peatonal' }, { label: 'Bienvenida con vino' }],
  },
];

var datosBarrio = [
  { label: 'Zona', val: 'Centro histórico · Entorno de la Plaza del Ayuntamiento · Barrio del Carmen al norte' },
  { label: 'Monumentos', val: 'Catedral de Valencia (10 min) · Mercado Central (8 min) · Lonja de la Seda (5 min) · Miguelete · Plaza de la Virgen' },
  { label: 'Transporte', val: 'Metro: Xàtiva (L3/L5) y Colón · Tren: Valencia-Norte (5 min) · AVE: Joaquín Sorolla (600 m) · Bus: múltiples líneas desde Plaza Ayuntamiento' },
  { label: 'Aeropuerto', val: '15 min en metro desde Xàtiva · Línea directa sin transbordo · 9 km desde el centro' },
  { label: 'Gastronomía', val: 'Restaurante Navarro · Marisquería Civera · Mercado Central a 5 min · Horchaterías tradicionales en plaza Santa Catalina' },
  { label: 'Comercio', val: 'Zona peatonal Xàtiva y Convento Santa Clara · Grandes almacenes El Corte Inglés en Pintor Sorolla · Tiendas de diseño en Carmen' },
  { label: 'Parking', val: 'Parking San Agustín (referencia para Meliá) · Parking concertado Hostal Venecia · No disponible en Sorolla Centro (zona peatonal)' },
  { label: 'Precio medio', val: 'Hostal Venecia: ~60–90 €/noche · RH Sorolla: ~90–130 € · Meliá Plaza: ~130–220 € · The Valentia Cabillers: ~160–280 €' },
];

export default function Centro() {
  return (
    <div className="cen-page">

      {/* Hero */}
      <div className="cen-hero">
        <div className="cen-hero-overlay" />
        <div className="cen-hero-content">
          <div className="cen-eyebrow">Alojamientos · Centro histórico · Plaza del Ayuntamiento</div>
          <h1>Dormir en<br />el Centro<br />de Valencia</h1>
          <p>Cuatro opciones para todos los presupuestos en el corazón de la ciudad, a pocos pasos de la Catedral, el Mercado Central y la Lonja de la Seda.</p>
        </div>
        <div className="cen-hero-stats">
          <div className="cen-stat">
            <span className="cen-stat-num">4</span>
            <span className="cen-stat-label">Alojamientos</span>
          </div>
          <div className="cen-stat-sep" />
          <div className="cen-stat">
            <span className="cen-stat-num">2 – 4 </span>
            <span className="cen-stat-label">Todas las categorías</span>
          </div>
          <div className="cen-stat-sep" />
          <div className="cen-stat">
            <span className="cen-stat-num">&lt;10 min</span>
            <span className="cen-stat-label">A pie a la Catedral</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="cen-intro-box">
        <div className="cen-intro-content">
          <div className="cen-intro-titulo">El centro neurálgico · A pie de todo</div>
          <p>La Plaza del Ayuntamiento es el corazón de Valencia: el punto de encuentro histórico, comercial y festivo de la ciudad. Alojarse aquí significa tener el <strong>Mercado Central</strong>, la <strong>Lonja de la Seda</strong> (Patrimonio de la Humanidad), la <strong>Catedral</strong> y las mejores calles de tapas a menos de 10 minutos a pie. El transporte público —metro Xàtiva, tren Valencia-Norte y múltiples autobuses— permite llegar fácilmente a la Ciudad de las Artes y las Ciencias o a las playas. Durante las <strong>Fallas de marzo</strong>, este barrio es el epicentro de la celebración: la mascletà diaria se dispara en la misma plaza y las fallas más grandes del centro se plantan a un paso.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="cen-intro">
        <p>La oferta de alojamiento en el Centro cubre todos los perfiles: desde el <strong>hotel boutique de lujo</strong> con rooftop junto a la Catedral hasta el <strong>hostal clásico reformado</strong> en la misma plaza principal, pasando por un hotel de cadena internacional con vistas históricas y un moderno tres estrellas en zona peatonal. Los cuatro comparten la ventaja más valiosa de Valencia: estar <strong>a pie de todo</strong>.</p>
        <p>La zona peatonal que rodea la Plaza del Ayuntamiento —las calles Convento Santa Clara, San Vicente y el entorno de Xàtiva— ofrece una experiencia de ciudad a escala humana, sin necesidad de coche para ninguna visita cultural o gastronómica del centro histórico.</p>
      </div>

      {/* Section title */}
      <div className="cen-section-title">
        <h2>Los alojamientos del Centro</h2>
        <p>Cuatro opciones seleccionadas para distintos presupuestos y estilos de viaje.</p>
      </div>

      {/* Hoteles */}
      <div className="cen-routes">
        {hoteles.map(hotel => (
          <div className="cen-route-item" key={hotel.num}>
            <div className="cen-route-num">{hotel.num}</div>

            <div className="cen-route-text">
              <div className="cen-tipo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="cen-subtitulo">{hotel.subtitulo}</div>
              <p className="cen-desc">{hotel.desc}</p>

              <div className="cen-datos-titulo">Datos clave</div>
              <ul className="cen-datos">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="cen-dato-label">{d.d}:</span>
                    <span className="cen-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="cen-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="cen-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="cen-route-img">
              <div className={`cen-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos del barrio */}
      <div className="cen-info-practica">
        <h3>Información práctica · Alojarse en el Centro de Valencia</h3>
        <div className="cen-tabla">
          {datosBarrio.map(d => (
            <div className="cen-tabla-fila" key={d.label}>
              <div className="cen-tabla-label">{d.label}</div>
              <div className="cen-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="cen-info-box">
        <h3>Consejos para alojarse en el Centro</h3>
        <ul className="cen-info-list">
          <li>Para <strong>vistas a la plaza</strong>: solicita habitación con balcón en el Hostal Venecia o suite exterior en el Meliá — el suplemento merece la pena</li>
          <li>El <strong>The Valentia Cabillers</strong> tiene el mejor rooftop del centro: reserva con antelación si quieres disfrutar de la piscina en verano</li>
          <li>El <strong>RH Sorolla Centro</strong> regala una botella de vino al reservar en su web oficial — siempre mejor que por Booking</li>
          <li>Durante las <strong>Fallas de marzo</strong>, reserva con 3–6 meses de antelación: el centro se llena por completo y los precios se multiplican</li>
          <li>El <strong>metro Xàtiva</strong> (a 200 m del Sorolla y 5 min del resto) te lleva al aeropuerto sin transbordo en 20 minutos</li>
          <li>Todos los hoteles están en zona de <strong>tráfico restringido</strong>: gestiona el parking con el hotel antes de llegar con coche</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}