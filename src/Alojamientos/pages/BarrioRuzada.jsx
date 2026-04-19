import '../assets/css/BarrioRuzada.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var hoteles = [
  {
    num: '01',
    nombre: 'Petit Palace Ruzafa',
    tipo: 'Hotel boutique 3 estrellas · Carrer de Sueca, 14',
    subtitulo: 'El único hotel en Ruzafa · Pet friendly · Bicicletas gratis · Fachada del siglo XIX · A 10 min de la estación AVE',
    desc: 'El Petit Palace Ruzafa es el único hotel propiamente dicho en el barrio de Ruzafa, y uno de los alojamientos boutique más queridos de Valencia. Ocupa un precioso edificio con fachada del siglo XIX en el Carrer de Sueca, en pleno corazón del barrio más creativo de la ciudad. Sus 41 habitaciones —dobles, triples, cuádruples y con terraza— están diseñadas con un estilo moderno y funcional, con WiFi, TV LCD vía satélite, caja fuerte y minibar. El hotel presta bicicletas de forma completamente gratuita para explorar Ruzafa y el Jardín del Turia. El desayuno buffet es uno de los más valorados del barrio. La recepción funciona las 24 horas, y el check-out de domingos y lunes se amplía hasta las 15:00 horas sin coste adicional. Es pet friendly sin cargo extra al reservar en la web oficial. La estación AVE Joaquín Sorolla queda a solo 10 minutos a pie.',
    datos: [
      { d: 'Categoría', v: '3 estrellas · Boutique · Petit Palace Hotels · 41 habitaciones · Fachada s. XIX reformada' },
      { d: 'Habitaciones', v: 'Doble, triple, cuádruple y con terraza · WiFi · TV LCD · Minibar · Caja fuerte · Luz natural' },
      { d: 'Servicios', v: 'Bicicletas gratis · Desayuno buffet · Recepción 24h · Check-out tardío dom/lun · Pet friendly gratis' },
      { d: 'Ubicación', v: 'Carrer de Sueca, 14 · 10 min a pie AVE Joaquín Sorolla · Junto al Mercat de Russafa' },
    ],
    imgClass: 'img-petitpalacealoj',
    tags: [{ label: 'Solo hotel en Ruzafa' }, { label: 'Bicis gratis' }, { label: 'Pet friendly' }],
  },
  {
    num: '02',
    nombre: 'City Garden Bed & Breakfast',
    tipo: 'B&B · Calle General Prim, 1',
    subtitulo: '6 habitaciones íntimas · Terraza privada · Desayuno incluido · Ambiente local auténtico · Desde 2017',
    desc: 'El City Garden Bed & Breakfast es el alojamiento más singular de Ruzafa: un pequeño y cuidado B&B de solo 6 habitaciones ubicado en una tranquila calle peatonal del barrio, abierto desde 2017. Cada habitación tiene baño privado, aire acondicionado, Smart TV y WiFi, con una decoración sencilla y acogedora llena de pequeños detalles. La joya del establecimiento es su amplia terraza exterior —sombreada por una pérgola— donde se sirve el desayuno por las mañanas y donde los huéspedes pueden relajarse a cualquier hora. Hay café y té disponibles las 24 horas en la zona común. Entre las habitaciones destaca la Ruzafa Suite (para 4 personas), la habitación con vistas a la plaza tradicional con fuente de azulejos, y la luminosa Sunny Room con gran ventanal al jardín. Es el lugar ideal para viajeros tranquilos que quieren vivir Ruzafa como un local. A 10 minutos a pie de la Plaza del Ayuntamiento.',
    datos: [
      { d: 'Categoría', v: 'B&B · 6 habitaciones · Todas con baño privado · Abierto desde 2017 · Registro turístico HV1380' },
      { d: 'Habitaciones', v: 'AC · Smart TV · WiFi · Baño privado ensuita · Suites hasta 4 personas disponibles' },
      { d: 'Servicios', v: 'Desayuno incluido en terraza (9–11h) · Café y té 24h · Zona común · Bicicletas disponibles en el barrio' },
      { d: 'Ubicación', v: 'Calle General Prim, 1 · Calle peatonal tranquila · 10 min a pie Plaza Ayuntamiento · Metro Bailén' },
    ],
    imgClass: 'img-citygardenaloj',
    tags: [{ label: 'B&B íntimo' }, { label: 'Terraza' }, { label: 'Desayuno incluido' }],
  },
  {
    num: '03',
    nombre: 'SingularStays Parque Central',
    tipo: 'Apartamentos turísticos · Barrio de Ruzafa',
    subtitulo: 'Lofts y estudios de 38 m² · Hasta 4 huéspedes · Cocina equipada · Patio interior · Parking de bicis gratis',
    desc: 'SingularStays Parque Central es una colección de apartamentos turísticos modernos y totalmente equipados en pleno Ruzafa, en el edificio estrella de la empresa junto al Parque Central de Valencia. Los lofts —de unos 38 m²— tienen cama de matrimonio y sofá cama doble para hasta 4 huéspedes, cocina americana completa (vitrocerámica, nevera, microondas, cafetera, hervidor, vajilla), baño privado con ducha, aire acondicionado centralizado y Smart TV con WiFi. La fachada del edificio, de estilo histórico y con iluminación nocturna, contrasta con un interior totalmente moderno que incluye un patio interior con vegetación y zonas de descanso. La recepción funciona de lunes a viernes de 10:00 a 18:00 h; fuera de ese horario hay auto check-in. Parking gratuito para bicicletas con zona de taller incluida. A 5 minutos a pie de la Estación del Nord y del Mercat de Russafa.',
    datos: [
      { d: 'Tipo', v: 'Apartamentos turísticos · Lofts de 38 m² · Hasta 4 personas · Licencias VT registradas' },
      { d: 'Equipamiento', v: 'Cocina completa · AC · Smart TV · WiFi · Baño privado · Lavadora en zona común' },
      { d: 'Servicios', v: 'Recepción lun–vie 10–18h · Auto check-in fuera de horario · Parking bicis + taller gratis' },
      { d: 'Ubicación', v: 'Barrio Ruzafa · 5 min a pie Estación del Nord · Metro Bailén · 15 min a pie Plaza Ayuntamiento' },
    ],
    imgClass: 'img-singularstaysaloj',
    tags: [{ label: 'Apartamento' }, { label: 'Hasta 4 personas' }, { label: 'Cocina equipada' }],
  },
];

var datosBarrio = [
  { label: 'Zona', val: 'Ruzafa (Russafa en valenciano) · Distrito del Ensanche · Entre el centro histórico y la Ciudad de las Artes' },
  { label: 'Ambiente', val: 'El "SoHo" de Valencia · Barrio creativo y cosmopolita · Galerías de arte · Bares de diseño · Mercado de Russafa · Vida nocturna intensa' },
  { label: 'Gastronomía', val: 'Mercado de Russafa (productos locales y exóticos) · Decenas de restaurantes de cocina del mundo · Cafeterías de especialidad · Terrazas nocturnas' },
  { label: 'Transporte', val: 'Metro: Bailén (L1) · Tren: Estación del Nord (10–15 min a pie) · AVE: Joaquín Sorolla (10 min) · Bus: múltiples líneas' },
  { label: 'A pie', val: 'Plaza Ayuntamiento: 10–15 min · Mercado Central: 15 min · Jardín del Turia: 15 min · CAC: 20 min en bici' },
  { label: 'Arte y cultura', val: 'Galería Color Elefante · Twin Gallery · Murales callejeros por todo el barrio · Salas de conciertos íntimas · Librerías con café' },
  { label: 'Ruido', val: 'El barrio es vibrante: los fines de semana hay mucha actividad nocturna. Los hoteles son en general bien insonorizados. Recomendado para viajeros activos' },
  { label: 'Precio medio', val: 'City Garden B&B: ~60–90 €/noche · Petit Palace Ruzafa: ~80–130 € · SingularStays Parque Central: ~70–110 €/noche (apartamento completo)' },
];

export default function BarrioRuzada() {
  return (
    <div className="ruzloj-page">

      {/* Hero */}
      <div className="ruzloj-hero">
        <div className="ruzloj-hero-overlay" />
        <div className="ruzloj-hero-content">
          <div className="ruzloj-eyebrow">Alojamientos · Barrio de Ruzafa · El SoHo de Valencia</div>
          <h1>Dormir en<br />Ruzafa</h1>
          <p>El barrio más creativo y cosmopolita de Valencia: galerías de arte, bares de diseño, cocina del mundo y la energía de un vecindario que no para. A 10 minutos a pie de todo.</p>
        </div>
        <div className="ruzloj-hero-stats">
          <div className="ruzloj-stat">
            <span className="ruz-stat-num">3</span>
            <span className="ruz-stat-label">Alojamientos</span>
          </div>
          <div className="ruzloj-stat-sep" />
          <div className="ruzloj-stat">
            <span className="ruzloj-stat-num">10 min</span>
            <span className="ruzloj-stat-label">Al AVE y al centro</span>
          </div>
          <div className="ruzloj-stat-sep" />
          <div className="ruzloj-stat">
            <span className="ruzloj-stat-num">SoHo VLC</span>
            <span className="ruzloj-stat-label">Barrio creativo</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="ruzloj-intro-box">
        <div className="ruzloj-intro-content">
          <div className="ruzloj-intro-titulo">De barrio obrero a capital creativa · El Ruzafa de hoy</div>
          <p>Ruzafa ha protagonizado una de las transformaciones urbanas más llamativas de España. Lo que fue un barrio popular y marginal se ha convertido en el epicentro del Valencia más contemporáneo: el lugar donde conviven el vecino de toda la vida con el artista, el turista con el local, la tienda de ultramarinos con la galería de arte. Sus <strong>fachadas modernistas y azulejos tradicionales</strong> contrastan con murales callejeros y locales de diseño. El <strong>Mercat de Russafa</strong> —con productos locales y exóticos— es el alma del barrio. Por la noche, las terrazas de las calles Cádiz, Dénia y Sueca se convierten en uno de los escenarios más animados de Valencia. Todo esto a 10–15 minutos a pie del centro histórico y a 10 minutos del AVE.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="ruzloj-intro">
        <p>La oferta de alojamiento en Ruzafa refleja perfectamente la personalidad del barrio: no hay grandes cadenas hoteleras. En su lugar, encontrarás el <strong>único hotel boutique del barrio</strong> en un edificio del siglo XIX, un <strong>B&B íntimo de 6 habitaciones</strong> con terraza y desayuno casero, y una colección de <strong>apartamentos con cocina</strong> en el edificio más emblemático de SingularStays.</p>
        <p>Ruzafa es la elección ideal para viajeros que buscan <strong>vivir Valencia desde dentro</strong>: desayunar en la terraza de un B&B, ir al mercado a por fruta, descubrir una galería de arte al doblar la esquina y cenar en uno de los restaurantes más interesantes de la ciudad sin necesidad de coger el metro.</p>
      </div>

      {/* Section title */}
      <div className="ruzloj-section-title">
        <h2>Los alojamientos de Ruzafa</h2>
        <p>Tres opciones seleccionadas para distintos estilos de viaje en el barrio más vibrante de Valencia.</p>
      </div>

      {/* Hoteles */}
      <div className="ruzloj-routes">
        {hoteles.map(hotel => (
          <div className="ruzloj-route-item" key={hotel.num}>
            <div className="ruzloj-route-num">{hotel.num}</div>

            <div className="ruzloj-route-text">
              <div className="ruzloj-tipo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="ruzloj-subtitulo">{hotel.subtitulo}</div>
              <p className="ruzloj-desc">{hotel.desc}</p>

              <div className="ruzloj-datos-titulo">Datos clave</div>
              <ul className="ruzloj-datos">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="ruzloj-dato-label">{d.d}:</span>
                    <span className="ruzloj-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="ruzloj-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="ruzloj-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="ruzloj-route-img">
              <div className={`ruzloj-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos del barrio */}
      <div className="ruzloj-info-practica">
        <h3>Información práctica · Alojarse en Ruzafa</h3>
        <div className="ruzloj-tabla">
          {datosBarrio.map(d => (
            <div className="ruzloj-tabla-fila" key={d.label}>
              <div className="ruzloj-tabla-label">{d.label}</div>
              <div className="ruzloj-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="ruzloj-info-box">
        <h3>Consejos para alojarse en Ruzafa</h3>
        <ul className="ruzloj-info-list">
          <li>El <strong>Petit Palace Ruzafa</strong> presta bicicletas gratis — la mejor forma de recorrer el Jardín del Turia y llegar a la Ciudad de las Artes en 20 minutos</li>
          <li>El <strong>City Garden B&B</strong> es perfecto para viajeros tranquilos que buscan ambiente íntimo: solo 6 habitaciones y desayuno en terraza. Reserva con antelación, se llena rápido</li>
          <li>Los <strong>SingularStays</strong> son ideales para grupos o familias que quieren cocinar y vivir como un local: tienes el Mercat de Russafa a 5 minutos</li>
          <li>El barrio tiene mucha <strong>vida nocturna</strong>: los viernes y sábados puede haber ruido hasta tarde. Todos los alojamientos son bien insonorizados, pero se recomienda habitación interior si eres sensible al ruido</li>
          <li>El <strong>Mercat de Russafa</strong> (en la propia calle del Petit Palace) es una visita imprescindible — frutas, especias, productos artesanos y el mejor ambiente de mercado del barrio</li>
          <li>Desde Ruzafa llegas al <strong>centro histórico a pie en 10–15 minutos</strong> por la calle Xàtiva o por el Paseo de la Alameda — no necesitas transporte para nada</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}