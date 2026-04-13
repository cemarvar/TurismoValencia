import { useState } from 'react';
import '../../assets/cssSostenible/ComercioLocal.css';
import Footer from '../../FOOTER/Footer';

var mercados = [
  {
    num: '01',
    nombre: 'Mercado Central',
    subtitulo: 'El templo del producto fresco más grande de Europa',
    ubicacion: 'Plaza del Mercado · Centro histórico',
    barrio: 'Ciutat Vella',
    horario: 'Lun–Sáb 07:00–15:00 h',
    desc: 'El Mercado Central de Valencia es uno de los mercados de abastos más grandes y bellos de Europa. Su impresionante edificio modernista de hierro, cristal y cerámica, construido entre 1914 y 1928 y con casi 8.000 m², acoge más de 300 puestos con los mejores productos de la huerta valenciana, el Mediterráneo y la artesanía local. Es el templo del kilómetro 0 en Valencia: naranjas, alcachofas, pimientos, anguilas, mariscos, embutidos y especias directamente del productor.',
    especialidades: [
      { e: 'Verdura y fruta de la huerta', d: 'Directamente de los agricultores del área metropolitana' },
      { e: 'Pescado y mariscos', d: 'Gamba roja, sepia, morralla y todo el Mediterráneo' },
      { e: 'Carnes y embutidos', d: 'Longaniza, chistorra y los embutidos valencianos de elaboración propia' },
      { e: 'Especias y encurtidos', d: 'Aceitunas, pimientos en vinagre, ajos y hierbas aromáticas' },
    ],
    imgClass: 'img-central',
    tags: ['Arquitectura modernista', '300+ puestos', 'Km 0'],
  },
  {
    num: '02',
    nombre: 'Mercado de Colón',
    subtitulo: 'Icono modernista reconvertido en espacio gourmet',
    ubicacion: 'C/ de Jorge Juan, 19 · Eixample',
    barrio: 'Eixample',
    horario: 'Lun–Dom 07:30–21:00 h · Abierto todos los días',
    desc: 'El Mercado de Colón es uno de los edificios modernistas más elegantes de Valencia. Diseñado por Francisco Mora Berenguer e inaugurado en 1916, su estructura de hierro y cerámica decorativa fue declarada Bien de Interés Cultural. Hoy combina una planta baja con puestos de productos gourmet, floristerías y delicatessen con una amplia zona de hostelería en los laterales. Es el mercado más visitado por turistas por su valor arquitectónico y su oferta gastronómica de calidad.',
    especialidades: [
      { e: 'Productos gourmet', d: 'Quesos, embutidos ibéricos, vinos y delicatessen de alta calidad' },
      { e: 'Floristerías', d: 'Las más bellas de Valencia en un marco arquitectónico único' },
      { e: 'Hostelería', d: 'Cafeterías y restaurantes con terraza en los laterales del edificio histórico' },
      { e: 'Arquitectura BIC', d: 'Visita el edificio aunque no compres: es patrimonio de la ciudad' },
    ],
    imgClass: 'img-colon',
    tags: ['Modernismo', 'Gourmet', 'Bien de Interés Cultural'],
  },
  {
    num: '03',
    nombre: 'Mercado de Ruzafa',
    subtitulo: 'El mercado de barrio más animado y contemporáneo',
    ubicacion: 'C/ Sueca, 2 · Ruzafa',
    barrio: 'Ruzafa',
    horario: 'Lun–Sáb 07:30–14:00 h · Mercadillo lunes 08:00–14:00 h',
    desc: 'El Mercado de Ruzafa es el alma gastronómica del barrio más vibrante de Valencia. Su interior mezcla puestos tradicionales de fruta y verdura fresca con vendedores de productos orgánicos, gourmet e internacionales, reflejando la diversidad multicultural del barrio. Renovado recientemente, el mercado mantiene el espíritu de proximidad de siempre adaptado al consumidor contemporáneo. Los lunes, el mercadillo exterior llena las calles de Ruzafa de vida.',
    especialidades: [
      { e: 'Producto ecológico y de temporada', d: 'Puestos especializados en producto orgánico certificado' },
      { e: 'Producto internacional', d: 'Ingredientes de todo el mundo para la cocina multicultural del barrio' },
      { e: 'Mercadillo de los lunes', d: 'Ropa, bisutería, plantas y alimentación en las calles de Ruzafa' },
      { e: 'Cocina de temporada', d: 'Productos de la huerta valenciana siguiendo el calendario estacional' },
    ],
    imgClass: 'img-ruzafa',
    tags: ['Orgánico', 'Contemporáneo', 'Multicultural'],
  },
  {
    num: '04',
    nombre: 'Mercado del Cabanyal',
    subtitulo: 'El sabor marinero del barrio pescador de Valencia',
    ubicacion: 'C/ Escalante · Cabanyal',
    barrio: 'Poblats Marítims',
    horario: 'Lun–Sáb 07:00–14:00 h · Mercadillo jueves 09:00–14:00 h',
    desc: 'El Mercado del Cabanyal es el mercado del barrio marinero por excelencia, donde el pescado fresco traído directamente desde el puerto protagoniza los puestos cada mañana. El Cabanyal, antiguo pueblo de pescadores con arquitectura modernista única, tiene en su mercado el punto de encuentro diario entre los vecinos del barrio y el Mediterráneo. Los jueves, el mercadillo del Cabanyal es uno de los más grandes y populares de la ciudad.',
    especialidades: [
      { e: 'Pescado fresco del Mediterráneo', d: 'Traído directamente desde la Lonja del puerto de Valencia' },
      { e: 'Marisco y moluscos', d: 'Almejas, mejillones, gambas y todo el marisco de temporada' },
      { e: 'Mercadillo de los jueves', d: 'Vintage, ropa, ajos tiernos y productos de segunda mano' },
      { e: 'Ambiente marinero auténtico', d: 'El espíritu del antiguo pueblo de pescadores vivo en cada puesto' },
    ],
    imgClass: 'img-cabanyal',
    tags: ['Pescado fresco', 'Marinero', 'Mercadillo jueves'],
  },
  {
    num: '05',
    nombre: 'Mercado de Mossén Sorell',
    subtitulo: 'El mercado alternativo del Barrio del Carmen',
    ubicacion: 'Plaza de Mossén Sorell · Barrio del Carmen',
    barrio: 'Barrio del Carmen',
    horario: 'Lun–Sáb 07:30–14:00 h · Mercadillo sábados 09:00–14:00 h',
    desc: 'El Mercado de Mossén Sorell, ubicado en el corazón del Barrio del Carmen, es el más íntimo y alternativo de los mercados municipales de Valencia. Tras su restauración, ofrece una mezcla de puestos tradicionales con un ambiente más moderno y artesanal. Es ideal para quienes buscan un mercado tranquilo, sin aglomeraciones, con productos de calidad y el encanto del barrio bohemio que lo rodea. Los sábados, el mercadillo exterior convierte la plaza en un espacio de artesanía y segunda mano.',
    especialidades: [
      { e: 'Fruta y verdura de temporada', d: 'Puestos tradicionales con producto de la huerta próxima' },
      { e: 'Ambiente artesanal', d: 'Propuestas más alternativas y artesanales que los mercados grandes' },
      { e: 'Mercadillo de los sábados', d: 'Artesanía, productos alternativos y segunda mano en la plaza' },
      { e: 'Barrio del Carmen', d: 'En el epicentro bohemio de Valencia, junto al IVAM y el Centre del Carme' },
    ],
    imgClass: 'img-sorell',
    tags: ['Artesanal', 'Barrio del Carmen', 'Alternativo'],
  },
  {
    num: '06',
    nombre: 'Mercado del Grao',
    subtitulo: 'El mercado del antiguo barrio pesquero junto al puerto',
    ubicacion: 'C/ Barraca · El Grao',
    barrio: 'El Grao',
    horario: 'Lun–Sáb 07:00–14:00 h · Mercadillo miércoles 09:00–14:00 h',
    desc: 'El Mercado del Grao es el mercado del antiguo barrio portuario de Valencia, con un ambiente marinero auténtico y una oferta centrada en los productos del mar. Situado a unos pasos del puerto y de las playas urbanas, es el mejor lugar para comprar pescado y marisco fresco con la garantía de que viene directamente de las embarcaciones que operan en el Mediterráneo. Los miércoles, el mercadillo del Grao llena las calles del barrio de productos variados.',
    especialidades: [
      { e: 'Pescado y marisco del puerto', d: 'La conexión más directa con las embarcaciones que faenan en el Mediterráneo' },
      { e: 'Productos del mar en temporada', d: 'La oferta cambia según las vedas y la temporada de cada especie' },
      { e: 'Ambiente portuario', d: 'El barrio más marinero de Valencia, junto al Puerto y la Lonja de Pescadores' },
      { e: 'Mercadillo de los miércoles', d: 'Producto variado en las calles del Grao cada miércoles por la mañana' },
    ],
    imgClass: 'img-grao',
    tags: ['Puerto', 'Marinero', 'Pescado del día'],
  },
];

var artesanias = [
  {
    nombre: 'Cerámica · Manises y Paterna',
    desc: 'Valencia tiene una tradición cerámica de más de 800 años. Los municipios de Manises y Paterna son los centros productores más importantes. Busca azulejos pintados a mano, vajillas de loza y figuras de cerámica decorativa con los motivos tradicionales valencianos.',
    icono: '🏺',
    donde: 'Tiendas del centro histórico · Manises (10 km)',
    imgClass: 'img-ceramica',
  },
  {
    nombre: 'Seda · Ensedarte y artesanos',
    desc: 'La seda valenciana tiene raíces árabes y fue durante siglos la industria más importante de la ciudad. La Lonja de la Seda es Patrimonio de la Humanidad. Hoy, artesanos como Ensedarte recuperan la tradición con complementos de seda pintados a mano.',
    icono: '🧣',
    donde: 'Barrio del Carmen · Plaza del Mercado',
    imgClass: 'img-seda',
  },
  {
    nombre: 'Abanicos · Vibenca y Carbonell',
    desc: 'El abanico valenciano es una artesanía única en el mundo con siglos de historia. Las casas Vibenca y Carbonell son las referencias de la artesanía artesana de abanico en Valencia: piezas pintadas a mano en seda o encaje sobre varillas de madera o nácar.',
    icono: '🪭',
    donde: 'Centro histórico · Tiendas especializadas',
    imgClass: 'img-abanicos',
  },
  {
    nombre: 'Porcelana · Lladró',
    desc: 'Lladró es la marca de porcelana artística más reconocida de España y una de las más internacionalmente conocidas del mundo. Fundada en Valencia en 1953, sus figuras son coleccionables y piezas de arte. La tienda flagship está en la Calle Poeta Querol.',
    icono: '🏛',
    donde: 'C/ Poeta Querol · Centro',
    imgClass: 'img-lladro',
  },
  {
    nombre: 'Orfebrería · Peris Roca',
    desc: 'La joyería y orfebrería valenciana tiene una larga tradición artesanal. Peris Roca es una de las casas joyeras más antiguas de Valencia, con piezas de alta artesanía inspiradas en los motivos ornamentales del patrimonio histórico valenciano.',
    icono: '💍',
    donde: 'Centro histórico · Joyerías especializadas',
    imgClass: 'img-joyeria',
  },
  {
    nombre: 'Productos de la huerta · Km 0',
    desc: 'Los mercados municipales son el mejor lugar para comprar turrones artesanos, naranjas de la huerta, aceite de oliva virgen extra, vinos de la Denominación de Origen Valencia y Utiel-Requena, y otros productos gastronómicos con denominación de origen.',
    icono: '🍊',
    donde: 'Mercados municipales · Tiendas delicatessen',
    imgClass: 'img-naranja',
  },
];

var mercadillosSemana = [
  { dia: 'Lun', mercados: 'Ruzafa · Algirós · Mercadillo del Central' },
  { dia: 'Mar', mercados: 'Roqueta · Nazaret · San Pedro Nolasco' },
  { dia: 'Mié', mercados: 'Grao · Benimàmet · Av. del Cid' },
  { dia: 'Jue', mercados: 'Cabanyal · Torrefiel' },
  { dia: 'Vie', mercados: 'Benimaclet · Monteolivete · Malvarrosa' },
  { dia: 'Sáb', mercados: 'Mossén Sorell · Benicalap · Jesús' },
  { dia: 'Dom', mercados: 'Rastro de Tarongers · Plaza Redonda' },
];

var categorias = [
  { id: 'todos', label: 'Todos los mercados' },
  { id: 'centro', label: 'Centro histórico' },
  { id: 'barrios', label: 'Barrios' },
  { id: 'mar', label: 'Junto al mar' },
];

var mercadosCat = {
  '01': 'centro', '02': 'centro', '03': 'barrios',
  '04': 'mar', '05': 'centro', '06': 'mar',
};

export default function ComercioLocal() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const mercadosFiltrados = filtroActivo === 'todos'
    ? mercados
    : mercados.filter(m => mercadosCat[m.num] === filtroActivo);

  return (
    <div className="cl-page">

      {/* Hero */}
      <div className="cl-hero">
        <div className="cl-hero-overlay" />
        <div className="cl-hero-content">
          <div className="cl-eyebrow">Valencia · Compra sostenible · Comercio de proximidad</div>
          <h1>Compra en<br />comercio local</h1>
          <p>Mercados municipales, artesanía hecha en Valencia y tiendas de proximidad. Comprar de forma sostenible en Valencia es apoyar a los productores locales, a los comerciantes del barrio y a una economía circular que cuida el entorno.</p>
        </div>
        <div className="cl-hero-stats">
          <div className="cl-stat">
            <span className="cl-stat-num">16+</span>
            <span className="cl-stat-label">mercados municipales</span>
          </div>
          <div className="cl-stat-sep" />
          <div className="cl-stat">
            <span className="cl-stat-num">7</span>
            <span className="cl-stat-label">mercadillos semanales</span>
          </div>
          <div className="cl-stat-sep" />
          <div className="cl-stat">
            <span className="cl-stat-num">800+</span>
            <span className="cl-stat-label">años de artesanía cerámica</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="cl-intro">
        <p>Consumir en pequeño comercio y tiendas de proximidad que apuestan por productos sanos y respetuosos con el medio ambiente es un gran apoyo tanto para los productores como para los comerciantes locales. En Valencia hay una densa red de mercados municipales que son auténticos templos del kilómetro 0, con la huerta y el Mediterráneo como proveedores directos.</p>
        <p>Con los mercados municipales como protagonistas, cada barrio de Valencia tiene su propio espacio de encuentro cotidiano donde el producto fresco, de temporada y de proximidad es el absoluto protagonista.</p>
      </div>

      {/* Mercadillos por días — calendario semanal */}
      <div className="cl-calendario-section">
        <h2 className="cl-calendario-titulo">Mercadillos ambulantes · Calendario semanal</h2>
        <div className="cl-calendario-grid">
          {mercadillosSemana.map(m => (
            <div className="cl-cal-item" key={m.dia}>
              <div className="cl-cal-dia">{m.dia}</div>
              <div className="cl-cal-mercados">{m.mercados}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtros */}
      <div className="cl-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`cl-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Mercados */}
      <div className="cl-routes">
        {mercadosFiltrados.map(merc => (
          <div className="cl-route-item" key={merc.num}>
            <div className="cl-route-num">{merc.num}</div>

            <div className="cl-route-text">
              <div className="cl-meta-row">
                <span className="cl-barrio-badge">{merc.barrio}</span>
                <span className="cl-ubicacion">📍 {merc.ubicacion}</span>
              </div>
              <h2>{merc.nombre}</h2>
              <div className="cl-subtitulo">{merc.subtitulo}</div>
              <p className="cl-desc">{merc.desc}</p>

              <div className="cl-especialidades-titulo">Qué encontrarás</div>
              <ul className="cl-especialidades">
                {merc.especialidades.map(esp => (
                  <li key={esp.e}>
                    <span className="cl-esp-nombre">{esp.e}:</span>
                    <span className="cl-esp-desc"> {esp.d}</span>
                  </li>
                ))}
              </ul>

              <div className="cl-horario-row">
                <span className="cl-horario-icon">🕐</span>
                <span className="cl-horario">{merc.horario}</span>
              </div>

              <div className="cl-tags">
                {merc.tags.map(t => (
                  <span key={t} className="cl-tag">{t}</span>
                ))}
              </div>

            </div>

            <div className="cl-route-img">
              <div className={`cl-route-img-inner ${merc.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Artesanía local */}
      <div className="cl-artesania-section">
        <div className="cl-section-title">
          <h2>Made in Valencia · Artesanía y productos locales</h2>
          <p>Los mejores recuerdos y regalos de Valencia son los que están hechos aquí, con materiales locales y por artesanos valencianos.</p>
        </div>
        <div className="cl-artesania-grid">
          {artesanias.map(art => (
            <div className="cl-artesania-card" key={art.nombre}>
              <div className={`cl-artesania-img ${art.imgClass}`} />
              <div className="cl-artesania-body">
                <div className="cl-artesania-icono">{art.icono}</div>
                <div className="cl-artesania-nombre">{art.nombre}</div>
                <p className="cl-artesania-desc">{art.desc}</p>
                <div className="cl-artesania-donde">
                  <span className="cl-donde-label">Dónde encontrarlo</span>
                  <span className="cl-donde-val">{art.donde}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="cl-info-box">
        <h3>Consejos para una compra sostenible en Valencia</h3>
        <ul className="cl-info-list">
          <li>Los mercados municipales abren de <strong>lunes a sábado por las mañanas</strong>: planifica la visita antes de las 14 h</li>
          <li>El <strong>Mercado Central</strong> es el más fotogénico pero también el más concurrido: ve a primera hora para evitar aglomeraciones</li>
          <li>El <strong>Mercado de Colón</strong> abre todos los días e incluye fines de semana: el único con horario continuo hasta las 21 h</li>
          <li>Compra artesanía local en lugar de recuerdos de producción industrial: el impacto económico es completamente diferente</li>
          <li>Los productos de la <strong>huerta valenciana</strong> en los mercados son más frescos y baratos que en los supermercados</li>
          <li>El <strong>Rastro de Tarongers</strong> (domingos) es el mejor mercadillo de segunda mano para encontrar piezas únicas a buen precio</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}