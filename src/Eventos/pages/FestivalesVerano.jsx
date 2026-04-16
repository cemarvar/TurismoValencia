import '../assets/css/FestivalesVerano.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var festivales = [
  {
    num: '01',
    nombre: 'SanSan Festival',
    fecha: '2–4 abr 2026',
    mes: 'Abril',
    lugar: 'Benicàssim, Castellón',
    genero: 'Indie · Pop · Rock nacional',
    desc: 'El único festival de la península que se celebra en Semana Santa. Tres días de música indie y pop nacional con invitados internacionales en el enclave costero de Benicàssim. Con el buen tiempo de la primavera mediterránea como telón de fondo, el SanSan es una de las apuestas más originales del calendario festivalero. En 2026 contará con Of Monsters and Men como cabezas de cartel internacionales, junto a nombres como Rigoberta Bandini, Love of Lesbian, Guitarricadelaguente y La M.O.D.A.',
    dato: 'Benicàssim · Semana Santa · Desde 82 € · sansan.es',
    imgClass: 'img-sansanfv',
    tags: [{ label: 'Semana Santa' }, { label: 'Indie' }, { label: 'Benicàssim' }],
  },
  {
    num: '02',
    nombre: 'Festival de les Arts',
    fecha: '5–6 jun 2026',
    mes: 'Junio',
    lugar: 'Ciutat de les Arts i les Ciències, Valencia',
    genero: 'Indie · Pop alternativo · Rock',
    desc: '"El festival" de Valencia por excelencia. En su undécima edición, los lagos vaciados de la Ciutat de les Arts acogen el gran escenario por el que desfilarán artistas como Siloé, Belén Aguilera, Carlos Sadness, Two Door Cinema Club, Julieta, La La Love You y Pignoise. Sold out tras sold out, el Festival de les Arts se ha consolidado como el festival urbano más relevante de Valencia, con un cartel que cada año supera al anterior y un escenario arquitectónico sin rival en Europa.',
    dato: 'CAC Valencia · 5–6 junio · Desde 90 € · festivaldelesarts.com',
    imgClass: 'img-lesartsfv',
    tags: [{ label: 'Icónico' }, { label: 'CAC Valencia' }, { label: 'Sold out' }],
  },
  {
    num: '03',
    nombre: 'BIGSOUND Valencia',
    fecha: '26–27 jun 2026',
    mes: 'Junio',
    lugar: 'Ciutat de les Arts i les Ciències, Valencia',
    genero: 'Música urbana · Pop · Latino',
    desc: 'El festival de música urbana que convierte Valencia en epicentro latino durante dos noches. En 2026 David Bisbal encabeza un cartel de primera con Lola Índigo, Rels B, Manuel Turizo, Nathy Peluso, Ana Mena, Rigoberta Bandini y Juan Magán. Con sedes también en Barakaldo, Torrevieja y Pontevedra, la edición valenciana en la CAC es la más espectacular por su escenario y por el ambiente que genera el público en uno de los espacios más fotografiados del mundo.',
    dato: 'CAC Valencia · 26–27 junio · Desde 80 € · bigsoundfestival.com',
    imgClass: 'img-bigsoundfv',
    tags: [{ label: 'Urbano' }, { label: 'Latino' }, { label: 'CAC Valencia' }],
  },
  {
    num: '04',
    nombre: 'FIB · Festival Internacional de Benicàssim',
    fecha: '16–18 jul 2026',
    mes: 'Julio',
    lugar: 'Benicàssim, Castellón',
    genero: 'Rock · Pop alternativo · Electrónica',
    desc: 'El festival más famoso internacionalmente de la Comunitat Valenciana. El FIB atrae cada edición a miles de turistas extranjeros —especialmente británicos— que llegan a Benicàssim atraídos por un cartel que siempre combina grandes nombres internacionales con el sol mediterráneo. En 2026, The Prodigy, Franz Ferdinand y Kaiser Chiefs encabezan un cartel que incluye La La Love You y Biffy Clyro. Asistir al FIB es también practicar inglés: el turismo internacional hace de este festival una experiencia cosmopolita única.',
    dato: 'Benicàssim · 16–18 julio · Desde 55 € · fiberfib.com',
    imgClass: 'img-fibfv',
    tags: [{ label: 'Internacional' }, { label: 'Rock' }, { label: 'The Prodigy' }],
  },
  {
    num: '05',
    nombre: 'Zevra Festival',
    fecha: '24–27 jul 2026',
    mes: 'Julio',
    lugar: 'Playa de Cullera, Valencia',
    genero: 'Reggaetón · Música urbana · R&B',
    desc: 'El festival de música urbana en la playa más grande del Mediterráneo español. En Cullera, con las olas como fondo y la posibilidad de darse un baño entre actuación y actuación, el Zevra reúne lo mejor del reggaetón y el sonido urbano internacional. En 2026 el cartel es de primer nivel: Nicky Jam, Ozuna, Anuel AA, JC Reyes y Saiko lideran una propuesta que cada año crece en ambición. La combinación de playa + música urbana + ambiente festivo lo convierte en una de las experiencias de festival más completas del verano.',
    dato: 'Playa de Cullera · 24–27 julio · Desde 102 € · zevrafestival.com',
    imgClass: 'img-zevrafv',
    tags: [{ label: 'Playa' }, { label: 'Reggaetón' }, { label: 'Nicky Jam · Ozuna' }],
  },
  {
    num: '06',
    nombre: 'Arenal Sound',
    fecha: '30 jul–2 ago 2026',
    mes: 'Julio–Agosto',
    lugar: 'Playa del Arenal, Burriana, Castellón',
    genero: 'Pop · Urbano · Electrónica · Latino',
    desc: 'Uno de los festivales más masivos y esperados del verano español, a orillas del Mediterráneo en la playa de Burriana. Mezcla de conciertos multitudinarios, ambiente de playa, chiringuitos y zona de descanso para quienes quieren vivir la experiencia completa. En 2026, Myke Towers y Dimitri Vegas encabezan un cartel amplísimo con María Becerra, Ana Mena, Nil Moliner, Omar Montes, Delaossa, JC Reyes, Juan Magán y decenas de artistas más. El "triángulo" clave: alojamiento, transporte y abono. Lo demás se da solo.',
    dato: 'Playa Arenal, Burriana · 30 jul–2 ago · Desde 69,99 € · arenalsound.com',
    imgClass: 'img-arenalfv',
    tags: [{ label: 'Festival de playa' }, { label: 'Masivo' }, { label: 'Myke Towers · Dimitri Vegas' }],
  },
  {
    num: '07',
    nombre: 'Medusa Sunbeach Festival',
    fecha: '13–17 ago 2026',
    mes: 'Agosto',
    lugar: 'Playa de Cullera, Valencia',
    genero: 'Electrónica · Techno · House · EDM',
    desc: 'El festival de música electrónica más importante de España y uno de los grandes de Europa. En la playa de Cullera, durante cinco días y noches de agosto, Medusa reúne a los DJs más grandes del mundo del techno, house, EDM y música electrónica. El cartel de 2025 —referencia para 2026— incluyó a Afrojack, Alesso, Charlotte de Witte, Nervo y Fatima Hajji. La experiencia va más allá de la música: el escenario principal iluminado frente al mar al amanecer es una de las imágenes más icónicas del verano mediterráneo.',
    dato: 'Playa de Cullera · 13–17 agosto · Desde 90 € · medusasunbeach.com',
    imgClass: 'img-medusafv',
    tags: [{ label: 'Electrónica' }, { label: 'Playa nocturna' }, { label: 'Top 5 Europa EDM' }],
  },
  {
    num: '08',
    nombre: 'Rototom Sunsplash',
    fecha: '17–22 ago 2026',
    mes: 'Agosto',
    lugar: 'Benicàssim, Castellón',
    genero: 'Reggae · Dancehall · World music',
    desc: 'El festival de reggae más importante de Europa lleva más de 30 años en Benicàssim. Una experiencia que va mucho más allá de la música: puestos de productos sostenibles, zona para familias, restaurantes de cocina internacional, talleres y actividades que hacen del Rototom una comunidad temporal más que un festival convencional. El buen rollo es el hilo conductor de todo. Con un cartel siempre de primer nivel en el género —top secret hasta su anuncio— el Rototom es una cita imprescindible para los amantes del reggae.',
    dato: 'Benicàssim · 17–22 agosto · Desde 190 € · rototom.com',
    imgClass: 'img-rototomfv',
    tags: [{ label: 'Reggae nº1 Europa' }, { label: 'Familias' }, { label: '30+ ediciones' }],
  },
  {
    num: '09',
    nombre: 'VisorFest',
    fecha: '25–26 sep 2026',
    mes: 'Septiembre',
    lugar: 'Marina Norte, Valencia',
    genero: 'Indie · Rock alternativo · Pop',
    desc: 'El festival más cercano e íntimo de Valencia, fiel a su identidad de "festival de conciertos" sin solapamientos ni front stage. El VisorFest apuesta por una experiencia de proximidad entre el público y los artistas, en el escenario de la Marina Norte con el puerto de Valencia de fondo. En 2026 Ride y The Wannadies son las primeras confirmaciones, marcando el regreso de la banda tras su paso por la edición inaugural de 2018. Una alternativa de calidad para alargar el verano festivalero hasta el otoño.',
    dato: 'Marina Norte, Valencia · 25–26 septiembre · Desde 49 € · visorfest.com',
    imgClass: 'img-visorfv',
    tags: [{ label: 'Íntimo' }, { label: 'Marina Norte' }, { label: 'Indie' }],
  },
];

var datosUtiles = [
  { label: 'Temporada', val: 'Abril – Septiembre · Concentración en julio y agosto en la costa mediterránea' },
  { label: 'SanSan Festival', val: '2–4 abril · Benicàssim · Indie/Pop · Desde 82 € · sansan.es' },
  { label: 'Festival de les Arts', val: '5–6 junio · CAC Valencia · Indie/Pop · Desde 90 € · festivaldelesarts.com' },
  { label: 'BIGSOUND Valencia', val: '26–27 junio · CAC Valencia · Urbano/Latino · Desde 80 € · bigsoundfestival.com' },
  { label: 'FIB Benicàssim', val: '16–18 julio · Benicàssim · Rock internacional · Desde 55 € · fiberfib.com' },
  { label: 'Zevra Festival', val: '24–27 julio · Playa Cullera · Reggaetón/Urbano · Desde 102 € · zevrafestival.com' },
  { label: 'Arenal Sound', val: '30 jul–2 ago · Playa Burriana · Pop/Urbano/Electrónica · Desde 69,99 € · arenalsound.com' },
  { label: 'Medusa Sunbeach', val: '13–17 agosto · Playa Cullera · Electrónica/Techno · Desde 90 € · medusasunbeach.com' },
  { label: 'Rototom Sunsplash', val: '17–22 agosto · Benicàssim · Reggae · Desde 190 € · rototom.com' },
  { label: 'VisorFest', val: '25–26 septiembre · Marina Norte Valencia · Indie/Rock · Desde 49 € · visorfest.com' },
];

export default function FestivalesVerano() {
  return (
    <div className="fv-page">

      {/* Hero */}
      <div className="fv-hero">
        <div className="fv-hero-overlay" />
        <div className="fv-hero-content">
          <div className="fv-eyebrow">Eventos · Temporada Festivalera · Abril–Septiembre 2026</div>
          <h1>Festivales de<br />Música en Valencia</h1>
          <p>Nueve festivales que convierten la Comunitat Valenciana en el epicentro musical del Mediterráneo cada verano. Del indie urbano al reggae, de la playa al CAC, del techno al rock internacional.</p>
        </div>
        <div className="fv-hero-stats">
          <div className="fv-stat">
            <span className="fv-stat-num">9</span>
            <span className="fv-stat-label">festivales 2026</span>
          </div>
          <div className="fv-stat-sep" />
          <div className="fv-stat">
            <span className="fv-stat-num">6</span>
            <span className="fv-stat-label">meses de temporada</span>
          </div>
          <div className="fv-stat-sep" />
          <div className="fv-stat">
            <span className="fv-stat-num">+1M</span>
            <span className="fv-stat-label">asistentes en verano</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="fv-intro">
        <p>La Comunitat Valenciana es, de abril a septiembre, uno de los destinos de referencia mundial para los amantes de la música en directo. La combinación de clima mediterráneo, playas, espacios únicos como la Ciudad de las Artes y las Ciencias y una tradición festiva profundamente arraigada ha convertido a la región en sede de algunos de los festivales más importantes de Europa.</p>
        <p>El calendario arranca en Semana Santa con el SanSan en Benicàssim y no para hasta septiembre con el VisorFest en la Marina Norte de Valencia. En verano, la costa se llena de festivales de playa —Zevra, Arenal Sound y Medusa en Cullera y Burriana— mientras la ciudad de Valencia acoge los grandes eventos urbanos en el CAC y los conciertos de Viveros de la Gran Feria de Julio.</p>
      </div>

      {/* Section title */}
      <div className="fv-section-title">
        <h2>Los festivales de la temporada 2026</h2>
        <p>Ordenados por fecha, de abril a septiembre. Compra las entradas con antelación: los grandes festivales se agotan meses antes.</p>
      </div>

      {/* Festivales */}
      <div className="fv-routes">
        {festivales.map(f => (
          <div className="fv-route-item" key={f.num}>
            <div className="fv-route-num">{f.num}</div>

            <div className="fv-route-text">
              <div className="fv-mes-genero">
                <span className="fv-fecha-badge">{f.fecha}</span>
                <span className="fv-genero-tag">{f.genero}</span>
              </div>
              <h2>{f.nombre}</h2>
              <div className="fv-lugar"> {f.lugar}</div>
              <p className="fv-desc">{f.desc}</p>

              <div className="fv-dato-box">
                <span className="fv-dato-icon"></span>
                <span>{f.dato}</span>
              </div>

              <div className="fv-tags">
                {f.tags.map(t => (
                  <span key={t.label} className="fv-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="fv-route-img">
              <div className={`fv-route-img-inner ${f.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla resumen */}
      <div className="fv-info-practica">
        <h3>Resumen · Festivales de la Comunitat Valenciana 2026</h3>
        <div className="fv-tabla">
          {datosUtiles.map(d => (
            <div className="fv-tabla-fila" key={d.label}>
              <div className="fv-tabla-label">{d.label}</div>
              <div className="fv-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="fv-info-box">
        <h3>Consejos para la temporada festivalera valenciana</h3>
        <ul className="fv-info-list">
          <li><strong>Compra con mucha antelación:</strong> el Festival de les Arts se agota en días; Arenal Sound y Medusa en semanas</li>
          <li>Para festivales de <strong>playa en Cullera y Burriana</strong>, reserva alojamiento en la zona — los hoteles cercanos se llenan meses antes</li>
          <li>El <strong>FIB y el Rototom</strong> atraen turismo internacional masivo — si vas con grupos grandes, organiza transporte y camping previamente</li>
          <li>El <strong>Festival de les Arts y el BIGSOUND</strong> en la CAC son los más "urbanos" — se accede en metro (L3, parada Alameda)</li>
          <li>El <strong>SanSan en Semana Santa</strong> es el mejor plan si quieres un festival sin las aglomeraciones del verano</li>
          <li>El <strong>VisorFest en septiembre</strong> es ideal para cerrar la temporada con un festival íntimo y sin agobios estivales</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}