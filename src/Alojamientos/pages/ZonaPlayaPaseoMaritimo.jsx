import '../assets/css/ZonaPlayaPaseoMaritimo.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var hoteles = [
  {
    num: '01',
    nombre: 'Hotel Boutique Balandret',
    tipo: 'Hotel boutique 3 estrellas · Paseo Neptuno, 20–22',
    subtitulo: 'Frente a la Playa de las Arenas · 21 habitaciones · Restaurante mediterráneo · Vistas al mar · Luz de Sorolla',
    desc: 'El Hotel Boutique Balandret es el alojamiento con más personalidad del Paseo Neptuno. Situado directamente frente a la Playa de las Arenas, su propuesta se inspira en la luz mediterránea que Sorolla inmortalizó en sus cuadros: el interiorista Carlos Serra plasmó esa luminosidad en el restaurante y en cada una de sus 21 habitaciones, decoradas en tonos crema o gris con grandes ventanales de luz natural. Las habitaciones más valoradas son las de vistas al mar, algunas con terraza privada y bañera de hidromasaje. La oferta gastronómica es uno de sus puntos fuertes: el restaurante del Balandret sirve cocina mediterránea con terraza frente al mar, ideal para almuerzos y eventos. El hotel pone bicicletas a disposición de sus huéspedes para explorar el paseo marítimo. Una zona infantil equipada con juguetes y materiales de pintura lo hace especialmente familiar.',
    datos: [
      { d: 'Categoría', v: '3 estrellas · Boutique · 21 habitaciones · Frente a la Playa de las Arenas · Paseo Neptuno 20–22' },
      { d: 'Habitaciones', v: 'Tonos crema o gris · Baño privado · WiFi · TV satélite · Caja fuerte · Algunas con vista al mar' },
      { d: 'Instalaciones', v: 'Restaurante mediterráneo con terraza · Bar · Bicicletas · Zona infantil · Sala eventos · Recep. 24h' },
      { d: 'Ubicación', v: 'Paseo Neptuno, 20–22 · Frente a la Playa de las Arenas · 500 m La Marina de València · Baños' },
    ],
    imgClass: 'img-balandretaloj',
    tags: [{ label: 'Frente al mar' }, { label: 'Rest. mediterráneo' }, { label: 'Boutique' }],
  },
  {
    num: '02',
    nombre: 'Las Arenas Balneario Resort',
    tipo: 'Hotel 5 estrellas Gran Lujo · Playa de las Arenas',
    subtitulo: 'El gran lujo de Valencia · Balneario desde 1898 · 253 habitaciones · Spa histórico · 2 piscinas · Brasserie Sorolla',
    desc: 'Las Arenas Balneario Resort es el hotel de lujo más emblemático de la costa valenciana. El balneario original fue fundado en 1898 junto a la Playa de las Arenas, y el resort actual mantiene su elegancia histórica con instalaciones completamente renovadas de 5 estrellas Gran Lujo. Sus 253 habitaciones ofrecen decoración mediterránea en tonos neutros, vistas al mar o a los jardines, WiFi, TV LED, minibar, albornoz, zapatillas, caja fuerte y baño completo con bañera y ducha independiente. El spa de lujo —con piscina cubierta climatizada, sauna, masajes y tratamientos—, las 2 piscinas exteriores con bar, los jardines para celebraciones y el restaurante Brasserie Sorolla (cocina mediterránea con producto local y sostenible) hacen de este resort un destino en sí mismo. El hotel dispone de 2.500 m² de espacios para congresos y eventos. Pista de pádel, club infantil y servicio de transfer desde el aeropuerto.',
    datos: [
      { d: 'Categoría', v: '5 estrellas Gran Lujo · Balneario desde 1898 · 253 habitaciones · Resort frente al mar' },
      { d: 'Habitaciones', v: 'Vistas al mar o jardines · Minibar · Albornoz · Zapatillas · WiFi · TV LED · Bañera + ducha' },
      { d: 'Instalaciones', v: 'Spa · 2 piscinas ext. · Piscina cubierta · Rest. Brasserie Sorolla · Pádel · Club niños · 2.500 m² eventos' },
      { d: 'Ubicación', v: 'Playa de las Arenas · 3 min a pie Playa Malvarrosa · Metro + bus en puerta · CAC a 5 min en coche' },
    ],
    imgClass: 'img-lasarenasaloj',
    tags: [{ label: '5 Estrellas Gran Lujo' }, { label: 'Balneario 1898' }, { label: 'Spa histórico' }],
  },
  {
    num: '03',
    nombre: 'Hotel Sol Playa',
    tipo: 'Hotel 2 estrellas · Paseo de Neptuno, 56',
    subtitulo: 'Primera línea de playa · Relación calidad-precio · 35 habitaciones · Historia desde 1916 · A 2 min del tranvía',
    desc: 'El Hotel Sol Playa es la opción más auténtica y económica del Paseo Marítimo, con una historia que arranca en 1916 cuando la familia Sansó regentaba "La Unión", uno de los primeros merenderos de la Playa de las Arenas. Sus 35 habitaciones están en primera línea de playa: las mejores tienen vistas directas al Mediterráneo con terraza sobre el mar. Todas cuentan con aire acondicionado, TV vía satélite, baño privado y WiFi gratuito. El hotel dispone de restaurante-cafetería, desayuno buffet, alquiler de bicicletas, información turística y recepción 24 horas. El tranvía —con conexión directa al metro— tiene parada a 2 minutos a pie. Para llegar en metro desde el aeropuerto, basta tomar la Línea 5 hasta Marítim-Serrería y hacer transbordo al tranvía Línia 5 dirección Neptú, parada junto al hotel. A 100 metros del Puerto Copa América y a 30 minutos a pie de la Ciudad de las Artes y las Ciencias por el paseo.',
    datos: [
      { d: 'Categoría', v: '2 estrellas · 35 habitaciones · Historia desde 1916 · Primera línea de playa · Paseo Neptuno, 56' },
      { d: 'Habitaciones', v: 'AC · TV satélite · Baño privado · WiFi · Algunas con vistas al mar y terraza sobre el mar' },
      { d: 'Servicios', v: 'Restaurante-cafetería · Desayuno buffet · Bicicletas · Info turística · Recepción 24h · Consigna' },
      { d: 'Ubicación', v: 'Paseo Neptuno, 56 · 2 min tranvía (metro) · 100 m Puerto Copa América · 30 min a pie CAC' },
    ],
    imgClass: 'img-solplayaaloj',
    tags: [{ label: 'Primera línea' }, { label: 'Calidad-precio' }, { label: 'Historia 1916' }],
  },
];

var datosBarrio = [
  { label: 'Zona', val: 'Poblats Marítims · Playa de las Arenas · Playa de la Malvarrosa · Paseo Neptuno · Paseo Marítimo' },
  { label: 'Playas', val: 'Playa de las Arenas (frente a los 3 hoteles) · Playa de la Malvarrosa (a 1,5 km norte) · Playa del Cabanyal · Arena fina · 2–3 km de longitud total' },
  { label: 'Gastronomía', val: 'Paseo Neptuno: paellas y arroces frente al mar (Restaurante La Pepica, Veles e Vents) · Brasserie Sorolla (Las Arenas) · Rest. Balandret · Decenas de terrazas' },
  { label: 'Transporte', val: 'Tranvía: Neptú (a 2 min) con conexión a metro en Marítim-Serrería · Bus: múltiples líneas · Aeropuerto: 20 min en metro + tranvía · Bicicleta: carril bici junto al paseo' },
  { label: 'Actividades', val: 'Baño y deportes acuáticos · Carril bici hasta el puerto y la Ciudad de las Artes · Alquiler kayak y SUP · Vela en La Marina · Puerto Deportivo a 500 m' },
  { label: 'Distancias', val: 'Ciudad de las Artes y las Ciencias: 2,5 km · Centro histórico: 5 km · Puerto de Valencia: 500 m · Oceanogràfic: 2,5 km · Aeropuerto: 21 km' },
  { label: 'Temporada', val: 'Las playas están en su mejor momento de junio a septiembre · El paseo marítimo es agradable todo el año · Madrugadas de verano: ambiente muy animado en el paseo' },
  { label: 'Precio medio', val: 'Sol Playa: ~55–90 €/noche · Balandret: ~110–180 € · Las Arenas Balneario Resort: ~200–380 €' },
];

export default function ZonaPlayaPaseoMaritimo() {
  return (
    <div className="plm-page">

      {/* Hero */}
      <div className="plm-hero">
        <div className="plm-hero-overlay" />
        <div className="plm-hero-content">
          <div className="plm-eyebrow">Alojamientos · Zona Playa · Paseo Marítimo · Playa de las Arenas</div>
          <h1>Dormir frente<br />al Mediterráneo</h1>
          <p>Tres hoteles en primera línea de playa: desde el gran resort de lujo histórico hasta el boutique con la luz de Sorolla y el clásico familiar con historia desde 1916.</p>
        </div>
        <div className="plm-hero-stats">
          <div className="plm-stat">
            <span className="plm-stat-num">3</span>
            <span className="plm-stat-label">Alojamientos</span>
          </div>
          <div className="plm-stat-sep" />
          <div className="plm-stat">
            <span className="plm-stat-num">2 – 5 GL</span>
            <span className="plm-stat-label">Todas las categorías</span>
          </div>
          <div className="plm-stat-sep" />
          <div className="plm-stat">
            <span className="plm-stat-num">0 m</span>
            <span className="plm-stat-label">A la arena</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="plm-intro-box">
        <div className="plm-intro-content">
          <div className="plm-intro-titulo">La Playa de las Arenas · La Malvarrosa · El Paseo Marítimo</div>
          <p>Valencia tiene playa, y su paseo marítimo es uno de los más animados del Mediterráneo. La <strong>Playa de las Arenas</strong> —junto al histórico Puerto de la Copa América— y la <strong>Playa de la Malvarrosa</strong> forman una franja de arena fina de más de 3 km que en verano se convierte en el segundo salón de Valencia. El <strong>Paseo Neptuno y el Paseo Marítimo</strong> están flanqueados por los mejores restaurantes de paella y arroces de la ciudad, terrazas y locales de ocio nocturno. Esta zona fue el escenario favorito del pintor <strong>Joaquín Sorolla</strong>, que inmortalizó su luz y sus bañistas en decenas de cuadros. Hoy es también el punto de partida del carril bici costero que llega hasta la Ciudad de las Artes y las Ciencias.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="plm-intro">
        <p>Los alojamientos del Paseo Marítimo cubren un rango extraordinariamente amplio: el <strong>gran resort 5 estrellas Gran Lujo</strong> con balneario centenario y spa histórico, el <strong>hotel boutique con el alma del Mediterráneo</strong> inspirado en Sorolla, y el <strong>clásico familiar en primera línea</strong> con más de cien años de historia en la Playa de las Arenas.</p>
        <p>Alojarse aquí significa despertar con el sonido del mar, desayunar con vistas al Mediterráneo y tener la arena a 30 segundos. El <strong>tranvía del paseo marítimo</strong> conecta en pocos minutos con el metro y el centro de la ciudad.</p>
      </div>

      {/* Section title */}
      <div className="plm-section-title">
        <h2>Los alojamientos de la Zona Playa y Paseo Marítimo</h2>
        <p>Tres opciones en primera línea del Mediterráneo, para todos los presupuestos.</p>
      </div>

      {/* Hoteles */}
      <div className="plm-routes">
        {hoteles.map(hotel => (
          <div className="plm-route-item" key={hotel.num}>
            <div className="plm-route-num">{hotel.num}</div>

            <div className="plm-route-text">
              <div className="plm-tipo">{hotel.tipo}</div>
              <h2>{hotel.nombre}</h2>
              <div className="plm-subtitulo">{hotel.subtitulo}</div>
              <p className="plm-desc">{hotel.desc}</p>

              <div className="plm-datos-titulo">Datos clave</div>
              <ul className="plm-datos">
                {hotel.datos.map(d => (
                  <li key={d.d}>
                    <span className="plm-dato-label">{d.d}:</span>
                    <span className="plm-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="plm-tags">
                {hotel.tags.map(t => (
                  <span key={t.label} className="plm-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="plm-route-img">
              <div className={`plm-route-img-inner ${hotel.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="plm-info-practica">
        <h3>Información práctica · Alojarse en la Zona Playa y Paseo Marítimo</h3>
        <div className="plm-tabla">
          {datosBarrio.map(d => (
            <div className="plm-tabla-fila" key={d.label}>
              <div className="plm-tabla-label">{d.label}</div>
              <div className="plm-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="plm-info-box">
        <h3>Consejos para alojarse en el Paseo Marítimo</h3>
        <ul className="plm-info-list">
          <li>En <strong>Las Arenas Balneario Resort</strong>, pide habitación con vistas al mar — el suplemento vale cada céntimo al despertar con el Mediterráneo frente a ti</li>
          <li>El <strong>Balandret</strong> tiene el mejor restaurante con terraza frente a la playa del paseo — reserva mesa para el almuerzo del sábado, que se llena</li>
          <li>Desde cualquiera de los 3 hoteles, el <strong>tranvía Neptú</strong> (2 min a pie) te lleva al metro en 5 minutos: al centro histórico en 20 min total</li>
          <li>En verano, el <strong>paseo marítimo</strong> es muy animado de noche — los hoteles son bien insonorizados, pero si eres sensible al ruido pide habitación interior</li>
          <li>El <strong>carril bici del paseo</strong> llega hasta la Ciudad de las Artes y las Ciencias en 20 minutos — todos los hoteles tienen bicicletas de alquiler</li>
          <li>La <strong>paella junto al mar</strong> en el Paseo Neptuno es una experiencia imprescindible: La Pepica (con historia desde 1898) o el Restaurante Navarro son las referencias clásicas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}