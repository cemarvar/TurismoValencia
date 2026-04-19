import '../../assets/cssEntradas/BusTuristico.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var modalidades = [
  {
    num: '01',
    nombre: 'The Red Bus · 24 horas',
    tipo: 'Hop-on Hop-off · Acceso ilimitado 24 h · Más popular',
    subtitulo: '17 paradas · Autobús 100% eléctrico · Audioguía multilingüe · Sube y baja cuando quieras',
    desc: 'La modalidad más popular del València Bus Turístico. Durante 24 horas continuadas desde el primer uso puedes subir y bajar en cualquiera de las 17 paradas distribuidas por toda la ciudad, tantas veces como quieras. El autobús rojo de dos pisos totalmente eléctrico recorre los principales monumentos, barrios y atracciones de Valencia: desde el centro histórico y el Mercado de Colón hasta la Ciudad de las Artes y las Ciencias, el Oceanogràfic, la Marina de València, la playa de Las Arenas, el Bioparc y el IVAM. Ideal para visitantes primerizos que quieren hacerse una primera idea de la ciudad o para organizar el día a su ritmo. La frecuencia varía entre 15 y 30 minutos en temporada alta, y entre 30 y 45 minutos en temporada baja.',
    datos: [
      { d: 'Precio adulto', v: '26,00 € · A partir de 13 años · Descuento 15% con Valencia Tourist Card' },
      { d: 'Precio joven', v: '14,00 € · De 5 a 12 años · Menores de 4 años: gratis' },
      { d: 'Validez', v: '24 horas desde el primer uso · Todos los días del año' },
      { d: 'Parada principal', v: 'Calle Pintor Sorolla, 2 · 46002 Valencia · Primera salida diaria desde aquí' },
    ],
    imgClass: 'img-bt-24hbt',
    tags: [{ label: 'Más popular' }, { label: '24 horas' }, { label: 'Hop-on Hop-off' }],
    url: 'https://www.visitvalencia.com/shop/valencia-autobus-turistico/bus-turistico-valencia',
  },
  {
    num: '02',
    nombre: 'The Red Bus · 48 horas',
    tipo: 'Hop-on Hop-off · Acceso ilimitado 48 h · Más tiempo, más Valencia',
    subtitulo: '17 paradas · 48 h sin límite · La opción más recomendada para verlo todo sin prisas',
    desc: 'La opción más recomendada si quieres ver Valencia sin prisas. Con 48 horas de acceso ilimitado puedes repartir la visita en dos días: el primero para la zona de la Ciudad de las Artes y las Ciencias, el Oceanogràfic y la playa, y el segundo para el centro histórico, el Bioparc y los museos. El billete de 48 horas solo cuesta 2 euros más que el de 24 horas, por lo que la relación calidad-precio es muy superior. Las mismas 17 paradas, el mismo autobús 100% eléctrico de dos pisos y la misma audioguía multilingüe en 10 idiomas. También disponible la modalidad 48 horas + entrada a la Iglesia de San Nicolás ("La Capilla Sixtina Valenciana").',
    datos: [
      { d: 'Precio adulto', v: '28,00 € · A partir de 13 años · Solo 2 € más que la de 24h' },
      { d: 'Precio joven', v: '16,00 € · De 5 a 12 años · Menores de 4 años: gratis' },
      { d: 'Validez', v: '48 horas desde el primer uso · Todos los días del año' },
      { d: 'Consejo', v: 'Día 1: CAC + Oceanogràfic + playa · Día 2: Centro histórico + Bioparc + IVAM' },
    ],
    imgClass: 'img-bt-48hbt',
    tags: [{ label: '48 horas' }, { label: 'Mejor relación calidad/precio' }, { label: 'Sin prisas' }],
    url: 'https://www.visitvalencia.com/shop/valencia-autobus-turistico/bus-turistico-valencia',
  },
  {
    num: '03',
    nombre: 'Albufera Bus Turístic',
    tipo: 'Excursión guiada · Parque Natural de la Albufera · Paseo en barca incluido',
    subtitulo: 'Transporte ida y vuelta · Paseo en barca tradicional · Arrozales · Atardecer · 2 horas · Desde 22 €',
    desc: 'Una excursión diferente que lleva a los viajeros al Parque Natural de la Albufera, el lago más grande de España y la cuna de la paella valenciana. El tour incluye transporte de ida y vuelta desde Valencia, paseo en barca tradicional por el lago y los canales entre los arrozales, y vistas al atardecer sobre el agua. Es una experiencia guiada que combina naturaleza, cultura local y paisajes mediterráneos únicos en un solo viaje de unas 2 horas de duración. The Red Bus realiza esta excursión desde 1999 como parte de su oferta de turismo sostenible en Valencia.',
    datos: [
      { d: 'Precio', v: 'Desde 22,00 € · Todas las edades' },
      { d: 'Duración', v: 'Aprox. 2 horas · Incluye transporte ida y vuelta desde Valencia' },
      { d: 'Incluye', v: 'Transporte · Paseo en barca tradicional · Guía · Vistas al atardecer sobre el lago' },
      { d: 'Reserva', v: 'Online en theredbusvalencia.com · Seleccionar fecha y hora en el momento de la compra' },
    ],
    imgClass: 'img-bt-albuferabt',
    tags: [{ label: 'Albufera' }, { label: 'Paseo en barca' }, { label: 'Atardecer' }],
    url: 'https://theredbusvalencia.com/excursiones/albufera-bus-turistic/',
  },
];

var paradas = [
  { num: '1', nombre: 'Pintor Sorolla', detalle: 'Parada principal · Primera salida del día' },
  { num: '2', nombre: 'Plaza de Toros', detalle: 'Junto a la Plaza de Toros y Estación del Nord' },
  { num: '3', nombre: 'Museo Fallero', detalle: 'Museo Fallero · Parque de Gulliver' },
  { num: '4', nombre: 'Ciudad de las Artes y las Ciencias', detalle: 'Museu de les Ciències · Hemisfèric · Palau de les Arts' },
  { num: '5', nombre: 'Oceanogràfic', detalle: 'El acuario más grande de Europa' },
  { num: '6', nombre: 'CC Aqua', detalle: 'Centro Comercial Aqua Multiespacio · Hotels ILUNION' },
  { num: '7', nombre: 'Veles i Vents · Marina de València', detalle: 'Puerto deportivo · Restaurante Veles i Vents' },
  { num: '8', nombre: 'Las Arenas (Playa)', detalle: 'Playa de las Arenas · Paseo Marítimo' },
  { num: '9', nombre: 'Puerto', detalle: 'Puerto de Valencia · Marina' },
  { num: '10', nombre: 'Baleares · Palau de la Música', detalle: 'Palau de la Música · Jardín del Turia' },
  { num: '11', nombre: 'Mestalla · Museo Militar', detalle: 'Estadio de Mestalla · Museo Militar' },
  { num: '12', nombre: 'San Pio V', detalle: 'Museo de Bellas Artes · Jardines del Real' },
  { num: '13', nombre: 'Nuevo Centro', detalle: 'Centro Comercial Nuevo Centro · Bioparc cercano' },
  { num: '14', nombre: 'Dama Ibérica', detalle: 'Zona norte de la ciudad' },
  { num: '15', nombre: 'Bioparc', detalle: 'Bioparc Valencia · Zoo de inmersión' },
  { num: '16', nombre: 'Museo de Historia de València', detalle: 'MHV · Parque de Marxalenes' },
  { num: '17', nombre: 'IVAM', detalle: 'Institut Valencià d\'Art Modern · Barrio del Carmen' },
];

var datosVisita = [
  { label: 'Parada principal', val: 'Calle Pintor Sorolla, 2 · 46002 Valencia · Primera salida diaria del recorrido' },
  { label: 'Frecuencia', val: 'Temporada alta: cada 15–30 min · Temporada baja: cada 30–45 min · Todos los días del año' },
  { label: 'Duración recorrido', val: '~2 horas para completar el circuito completo sin bajarse · Con paradas el recorrido es libre' },
  { label: 'Audioguía', val: '10 idiomas: español, inglés, francés, alemán, italiano, chino, portugués, japonés, valenciano y ruso' },
  { label: 'Compra', val: 'Online en visitvalencia.com o theredbusvalencia.com · Imprime o descarga el bono en el móvil' },
  { label: 'VTC descuento', val: '15% dto. adulto 24h al comprar junto con la Valencia Tourist Card · Individual e intransferible' },
  { label: 'Accesibilidad', val: '100% de autobuses adaptados · Capacidad para 2 personas en silla de ruedas por bus' },
  { label: 'Atención cliente', val: '+34 699 982 514 · hello@theredbusvalencia.com · Cambio de fecha con 48h de antelación' },
];

export default function BusTuristico() {
  return (
    <div className="bt-page">

      {/* Hero */}
      <div className="bt-hero">
        <div className="bt-hero-overlay" />
        <div className="bt-hero-content">
          <div className="bt-eyebrow">Entradas · The Red Bus · València Bus Turístic · Desde 1999</div>
          <h1>El autobús<br />rojo de<br />Valencia</h1>
          <p>El autobús turístico de dos pisos 100% eléctrico que recorre los 17 puntos clave de Valencia. Sube y baja cuando quieras durante 24 o 48 horas.</p>
        </div>
        <div className="bt-hero-stats">
          <div className="bt-stat">
            <span className="bt-stat-num">17</span>
            <span className="bt-stat-label">Paradas</span>
          </div>
          <div className="bt-stat-sep" />
          <div className="bt-stat">
            <span className="bt-stat-num">10</span>
            <span className="bt-stat-label">Idiomas</span>
          </div>
          <div className="bt-stat-sep" />
          <div className="bt-stat">
            <span className="bt-stat-num">100%</span>
            <span className="bt-stat-label">Eléctrico</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="bt-intro-box">
        <div className="bt-intro-content">
          <div className="bt-intro-titulo">The Red Bus · Pioneros en turismo sostenible desde 1999</div>
          <p>El <strong>València Bus Turístic</strong> —conocido como <strong>The Red Bus</strong>— es el autobús turístico oficial de Valencia, operado por Viajes Transvia Tours desde noviembre de 1999. Es el único autobús turístico de dos pisos <strong>100% eléctrico</strong> de la ciudad, con una flota nueva y renovada gracias al programa NextGenerationEU. Su sistema de audio propio permite ofrecer <strong>10 idiomas simultáneos</strong>. Con <strong>17 paradas</strong> estratégicas distribuidas por toda la ciudad —desde el centro histórico hasta la playa, pasando por la Ciudad de las Artes y las Ciencias, el Bioparc y el IVAM—, es la forma más cómoda y sostenible de descubrir Valencia por primera vez. Ten en cuenta que <strong>hay dos servicios de autobús turístico en Valencia</strong> (rojo y verde); tu billete solo es válido en el bus rojo.</p>
        </div>
      </div>

      {/* Section title modalidades */}
      <div className="bt-section-title">
        <h2>Modalidades del Bus Turístico</h2>
        <p>Elige entre 24h, 48h o la excursión guiada a la Albufera con paseo en barca incluido.</p>
      </div>

      {/* Modalidades */}
      <div className="bt-routes">
        {modalidades.map(mod => (
          <div className="bt-route-item" key={mod.num}>
            <div className="bt-route-num">{mod.num}</div>
            <div className="bt-route-text">
              <div className="bt-tipo">{mod.tipo}</div>
              <h2>{mod.nombre}</h2>
              <div className="bt-subtitulo">{mod.subtitulo}</div>
              <p className="bt-desc">{mod.desc}</p>

              <div className="bt-datos-titulo">Precios y datos clave</div>
              <ul className="bt-datos">
                {mod.datos.map(d => (
                  <li key={d.d}>
                    <span className="bt-dato-label">{d.d}:</span>
                    <span className="bt-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="bt-tags">
                {mod.tags.map(t => (
                  <span key={t.label} className="bt-tag">{t.label}</span>
                ))}
              </div>

              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bt-comprar-btn"
              >
                Comprar entradas →
              </a>
            </div>
            <div className="bt-route-img">
              <div className={`bt-route-img-inner ${mod.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Mapa de paradas */}
      <div className="bt-paradas-section">
        <h3>Las 17 paradas del recorrido</h3>
        <p className="bt-paradas-desc">El recorrido se hace en una sola dirección. Consulta el horario actualizado en el PDF oficial de Visit València o en theredbusvalencia.com.</p>
        <div className="bt-paradas-grid">
          {paradas.map(p => (
            <div className="bt-parada-card" key={p.num}>
              <div className="bt-parada-num">{p.num}</div>
              <div className="bt-parada-info">
                <div className="bt-parada-nombre">{p.nombre}</div>
                <div className="bt-parada-detalle">{p.detalle}</div>
              </div>
            </div>
          ))}
        </div>
        <a
          href="https://www.google.com/maps/d/viewer?mid=1vWxlJu3cuCnMM3CDVrhsZNxbMXlUf2V5"
          target="_blank"
          rel="noopener noreferrer"
          className="bt-mapa-link"
        >
          Ver mapa de paradas en Google Maps →
        </a>
      </div>

      {/* Tabla datos */}
      <div className="bt-info-practica">
        <h3>Información práctica · The Red Bus Valencia</h3>
        <div className="bt-tabla">
          {datosVisita.map(d => (
            <div className="bt-tabla-fila" key={d.label}>
              <div className="bt-tabla-label">{d.label}</div>
              <div className="bt-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="bt-info-box">
        <h3>Consejos para sacar el máximo al Bus Turístico</h3>
        <ul className="bt-info-list">
          <li>Compra el billete de <strong>48 horas</strong>: solo cuesta 2 € más que el de 24h y te permite ver Valencia sin prisas repartiendo en dos días</li>
          <li>Empieza el recorrido <strong>a primera hora de la mañana</strong> desde la parada nº1 (Pintor Sorolla) para aprovechar al máximo el día sin colas</li>
          <li>Con la <strong>Valencia Tourist Card</strong> tienes un 15% de descuento en el billete adulto de 24h — la combinación perfecta para explorar la ciudad</li>
          <li>Sube siempre al <strong>piso de arriba descubierto</strong>: las vistas de Valencia desde ahí son espectaculares, especialmente al pasar por el Jardín del Turia</li>
          <li>El <strong>Oceanogràfic</strong> merece al menos 4 horas; bájate en la parada 5 a primera hora y vuelve a subir al bus por la tarde para el resto del recorrido</li>
          <li>Ten en cuenta que hay <strong>dos empresas de bus turístico en Valencia</strong> (rojo y verde): tu billete solo es válido en el bus rojo de The Red Bus</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}