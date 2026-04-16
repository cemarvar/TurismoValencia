import '../assets/css/Ruzafa.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var lugares = [
  {
    num: '01',
    nombre: 'Mercat de Russafa',
    tipo: 'Mercado de barrio · Corazón de Ruzafa',
    subtitulo: 'Julio Bellot y Javier Goerlich · 1954 · +100 puestos · Fachada colorista',
    desc: 'El Mercat de Russafa es el corazón vertebrador del barrio. Inaugurado en 1954 y proyectado por los arquitectos Julio Bellot y Javier Goerlich, su fachada colorista se alza justo frente a la iglesia barroca de San Valero y San Vicente Mártir, creando uno de los conjuntos más fotogénicos de Valencia. El mercado alberga más de cien puestos con productos frescos de proximidad: frutas, verduras, pescados, carnes, embutidos y flores. Los lunes y jueves se monta en su entorno un mercadillo al aire libre con ropa vintage, segunda mano y plantas de temporada. Sus terrazas son el escenario perfecto para el esmorzaret valenciano.',
    datos: [
      { d: 'Inauguración', v: '1954 · Proyectado por Julio Bellot y Javier Goerlich' },
      { d: 'Puestos', v: 'Más de 100 puestos de productos frescos de proximidad' },
      { d: 'Mercadillo', v: 'Lunes y jueves: vintage, ropa de segunda mano y plantas al aire libre' },
      { d: 'Frente al mercado', v: 'Iglesia barroca de San Valero y San Vicente Mártir · s. XVII' },
    ],
    imgClass: 'img-mercadorz',
    tags: [{ label: 'Mercado' }, { label: 'Vintage los lunes' }, { label: 'Esmorzaret' }],
  },
  {
    num: '02',
    nombre: 'Gastronomía de Autor y Esmorzaret',
    tipo: 'Gastronomía · De Ricard Camarena a la cocina del mundo',
    subtitulo: 'Canalla Bistró · Mercat Bar · El Rus · Cocina internacional y tradicional',
    desc: 'Ruzafa es el barrio gastronómico más vibrante de Valencia. Los principales chefs valencianos han instalado aquí sus propuestas más atrevidas. El Canalla Bistró (Mestre Josep Serrano, 5) de Ricard Camarena propone un viaje culinario por el mundo con pastrami, causa limeña y nigiris de anguila en ambiente desenfadado. El Mercat Bar (Joaquín Costa, 27) de Quique Dacosta ofrece tapas valencianas en una escenografía inspirada en las plazas de mercado. Para el esmorzaret, El Rus es el templo del almuerzo de media mañana, con el bocadillo más valorado del barrio. La escena también incluye cocina japonesa, mexicana, asiática y cerveza artesana italiana.',
    datos: [
      { d: 'Canalla Bistró', v: 'Ricard Camarena · Mestre Josep Serrano, 5 · Cocina global desenfadada' },
      { d: 'Mercat Bar', v: 'Quique Dacosta · Joaquín Costa, 27 · Tapas valencianas de autor' },
      { d: 'El Rus', v: 'El mejor bocadillo del barrio · Templo del esmorzaret valenciano' },
      { d: 'Ruzanuvol', v: 'Cerveza artesana italiana de barril sin pasteurizar · Piadinas' },
    ],
    imgClass: 'img-gastronomiarz',
    tags: [{ label: 'Ricard Camarena' }, { label: 'Quique Dacosta' }, { label: 'Esmorzaret' }],
  },
  {
    num: '03',
    nombre: 'Arte Urbano y Galerías',
    tipo: 'Arte contemporáneo · Galerías · Espacios alternativos',
    subtitulo: 'Sporting Club Russafa · Espai Tactel · Sala Russafa · Color Elefante',
    desc: 'La revolución artística de Ruzafa es visible en cada esquina. El Sporting Club Russafa (Sevilla, 5) —antiguo club de boxeo— es hoy un centro de creatividad sin ánimo de lucro con exposiciones de arte actual, danza, fotografía y talleres de artistas y artesanos locales. La Sala Russafa es el teatro independiente de referencia del barrio: teatro, danza, cine clásico y congresos de novela negra. Las galerías Espai Tactel, Color Elefante, Trentatres Gallery, Maika Sánchez (Moratín, 15) e Imprevisual (Doctor Sumsi, 35) configuran una escena de arte contemporáneo de primer nivel. El arte urbano de street art impregna las calles, especialmente en los alrededores del mercado.',
    datos: [
      { d: 'Sporting Club Russafa', v: 'Sevilla, 5 · Centro de creatividad sin ánimo de lucro · Arte y danza' },
      { d: 'Sala Russafa', v: 'Teatro independiente · Teatro, danza, cine clásico y congresos' },
      { d: 'Galerías', v: 'Espai Tactel, Color Elefante, Trentatres, Maika Sánchez, Imprevisual' },
      { d: 'Street art', v: 'Arte urbano en las calles del barrio · Especialmente junto al mercado' },
    ],
    imgClass: 'img-arterz',
    tags: [{ label: 'Arte contemporáneo' }, { label: 'Teatro' }, { label: 'Street art' }],
  },
  {
    num: '04',
    nombre: 'Parque Central',
    tipo: 'Espacio verde · Primera fase inaugurada 2018',
    subtitulo: 'Kathryn Gustafson · Inspirado en Ausiàs March · Soterramiento vías ferrocarril',
    desc: 'El Parque Central es el proyecto urbano más ambicioso de Ruzafa y uno de los más importantes de Valencia en décadas. La primera fase se inauguró en 2018 sobre el espacio liberado por el soterramiento de las vías del ferrocarril. El diseño, elegido por unanimidad entre 36 propuestas de ocho países, es de la paisajista americana Kathryn Gustafson. El concepto se inspira en el poema "Aigüa plena de seny" de Ausiàs March, con el protagonismo del agua, la luz y el verde. El parque tiene amplias zonas verdes, espacios de juego —incluido un rocódromo vertical— y abre de 8:00 a 21:00 h. Cuando esté completo, tendrá más de 140.000 m².',
    datos: [
      { d: 'Diseño', v: 'Kathryn Gustafson (paisajista americana) · Elegida por unanimidad entre 36 proyectos' },
      { d: 'Inspiración', v: 'Poema "Aigüa plena de seny" de Ausiàs March · Agua, luz y verde' },
      { d: 'Primera fase', v: '2018 · ~40% de la superficie total · Sobre las vías soterradas de RENFE' },
      { d: 'Horario', v: 'Abierto de 8:00 a 21:00 h · Rocódromo vertical · Acceso gratuito' },
    ],
    imgClass: 'img-parquerz',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Paisajismo' }, { label: '2018' }],
  },
  {
    num: '05',
    nombre: 'Compras, Librerías y Tiendas de Diseño',
    tipo: 'Comercio alternativo · Diseño local y vintage',
    subtitulo: 'Gnomo · Bartleby Libros · Utopik chocolates · Tiendas de diseñadores locales',
    desc: 'El tejido comercial de Ruzafa es tan característico como su gastronomía. Gnomo es el pequeño comercio familiar que concentra objetos de diseño, desde estanterías a anillos y plantas para regalar. La librería Bartleby (Cádiz, 50) combina venta de libros con apuesta cultural activa. Utopik (Matías Perelló, 14) es la tienda de Paco Llopis y Juana Rojas, dos apasionados del chocolate artesano que trabajan el cacao sin aditivos —hasta tienen bombones con forma de petardos valencianos—. Las tiendas de jóvenes diseñadores como Siemprevivas y los locales de cómics como Gotham completan la propuesta alternativa.',
    datos: [
      { d: 'Gnomo', v: 'Objetos de diseño, estanterías, anillos y plantas · Comercio familiar' },
      { d: 'Bartleby Libros', v: 'Cádiz, 50 · Librería con programación cultural propia' },
      { d: 'Utopik', v: 'Matías Perelló, 14 · Chocolate artesano sin aditivos · Bombones únicos' },
      { d: 'Gotham', v: 'Tienda de cómics · Referente en el barrio · Ambiente alternativo' },
    ],
    imgClass: 'img-comprasrz',
    tags: [{ label: 'Diseño local' }, { label: 'Chocolate' }, { label: 'Librería' }],
  },
  {
    num: '06',
    nombre: 'Fallas en Ruzafa · Las calles Cuba y Literato Azorín',
    tipo: 'Fiestas · Iluminación artística premiada',
    subtitulo: 'Primeros premios de iluminación · Coreografías de luz · Ambiente fallero único',
    desc: 'Durante las Fallas de Valencia, Ruzafa se convierte en uno de los epicentros más espectaculares de la fiesta. El barrio es especialmente conocido por la calidad artística de su iluminación: las calles Cuba y Literato Azorín han recibido los primeros premios de iluminación en múltiples años consecutivos, con coreografías de luz sincronizadas que congregan a miles de personas. Los casales falleros del barrio mantienen con orgullo la identidad de "la terra del ganxo" —apodo histórico de Ruzafa por los trabajadores que recogían madera del Turia con ganchos—. Las fallas del barrio están entre las más valoradas por la calidad de sus monumentos.',
    datos: [
      { d: 'Calles Cuba y Literato Azorín', v: 'Primeros premios de iluminación en múltiples años' },
      { d: 'Coreografías', v: 'Iluminación sincronizada · De los espectáculos más concurridos de las Fallas' },
      { d: 'La terra del ganxo', v: 'Apodo histórico del barrio · Trabajadores de la madera del Turia' },
      { d: 'Casales falleros', v: 'Mantienen la identidad del barrio con orgullo y tradición' },
    ],
    imgClass: 'img-fallasrz',
    tags: [{ label: 'Fallas' }, { label: 'Premio iluminación' }, { label: 'Tradición' }],
  },
];

var datosVisita = [
  { label: 'Ubicación', val: 'Distrito del Ensanche · Al sur del centro histórico · Entre la Av. Reino de Valencia y el Parque Central' },
  { label: 'Historia', val: 'Del árabe Ruṣāfa = "jardín" · Jardín de recreo del príncipe Abd Allah al-Balansi (s. IX) · Municipio independiente hasta 1877' },
  { label: 'Acceso', val: 'Metro L3, L5, L7 parada Xàtiva o Colón · A 10 min a pie del centro histórico · Bus 7, 8, 10, 60, 70' },
  { label: 'Mercado', val: 'Lun–Sáb 8:00–14:00 h · Mercadillo vintage lunes y jueves · Fachada colorista frente a la iglesia de San Valero' },
  { label: 'Parque Central', val: 'Abierto 8:00–21:00 h · Acceso gratuito · Kathryn Gustafson · Primera fase desde 2018' },
  { label: 'Mejor momento', val: 'Mañanas entre semana para el esmorzaret · Tardes y noches de fin de semana para el ambiente' },
  { label: 'Fallas', val: 'Calles Cuba y Literato Azorín: mejores premios de iluminación de la ciudad · Ambiente único' },
  { label: 'Galerías', val: 'Espai Tactel, Color Elefante, Trentatres, Sporting Club Russafa · Muchas de visita libre' },
];

export default function Ruzafa() {
  return (
    <div className="ruz-page">

      {/* Hero */}
      <div className="ruzrz-hero">
        <div className="ruz-hero-overlay" />
        <div className="ruz-hero-content">
          <div className="ruz-eyebrow">Distrito del Ensanche · Del árabe Ruṣāfa, "jardín" · Barrio del Ensanche</div>
          <h1>Ruzafa</h1>
          <p>El barrio más vibrante de Valencia. Del jardín árabe del siglo IX al epicentro de la gastronomía de autor, el arte contemporáneo y la vida nocturna más creativa de la ciudad.</p>
        </div>
        <div className="ruz-hero-stats">
          <div className="ruz-stat">
            <span className="ruz-stat-num">S. IX</span>
            <span className="ruz-stat-label">origen árabe</span>
          </div>
          <div className="ruz-stat-sep" />
          <div className="ruz-stat">
            <span className="ruz-stat-num">+15</span>
            <span className="ruz-stat-label">galerías de arte</span>
          </div>
          <div className="ruz-stat-sep" />
          <div className="ruz-stat">
            <span className="ruz-stat-num">24.000</span>
            <span className="ruz-stat-label">vecinos</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="ruz-historia-box">
        <div className="ruz-historia-icono"></div>
        <div className="ruz-historia-content">
          <div className="ruz-historia-titulo">Del jardín árabe al barrio de Valencia</div>
          <p>En el siglo IX, el príncipe Abd Allah al-Balansi —"el valenciano"— mandó plantar un jardín de recreo a dos kilómetros de Valencia, imitando la residencia de su padre Abderramán I junto a Córdoba. Lo llamó al-Russafa: <strong>"jardín"</strong> en árabe. Durante siglos fue municipio independiente, conocido como <strong>"la terra del ganxo"</strong> por los trabajadores que recogían madera del Turia con ganchos. Integrado en Valencia en 1877, el barrio vivió décadas de marginalidad hasta que artistas, diseñadores y cocineros lo transformaron en el epicentro cultural más auténtico de la ciudad.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="ruz-intro">
        <p>Ruzafa es hoy un barrio multicultural y creativo donde los vecinos de siempre conviven con una nueva generación de artistas, diseñadores y chefs. Los bares de toda la vida compiten con restaurantes de cocineros con estrella Michelin. Las galerías de arte contemporáneo se mezclan con tiendas de cómics y librerías-café. Y su Mercat de Russafa, con más de cien puestos de producto fresco, sigue siendo el corazón que late en el centro de todo.</p>
        <p>Es un barrio para perderse. <strong>No tiene horarios de visita</strong> — funciona a cualquier hora, desde el esmorzaret de las 10:00 h hasta la última copa de madrugada.</p>
      </div>

      {/* Section title */}
      <div className="ruz-section-title">
        <h2>Qué ver y hacer en Ruzafa</h2>
        <p>Seis razones para pasarse el día —y la noche— en el barrio más vibrante de Valencia.</p>
      </div>

      {/* Lugares */}
      <div className="ruz-routes">
        {lugares.map(lugar => (
          <div className="ruz-route-item" key={lugar.num}>
            <div className="ruz-route-num">{lugar.num}</div>

            <div className="ruz-route-text">
              <div className="ruz-tipo">{lugar.tipo}</div>
              <h2>{lugar.nombre}</h2>
              <div className="ruz-subtitulo">{lugar.subtitulo}</div>
              <p className="ruz-desc">{lugar.desc}</p>

              <div className="ruz-datos-titulo">Datos clave</div>
              <ul className="ruz-datos">
                {lugar.datos.map(d => (
                  <li key={d.d}>
                    <span className="ruz-dato-label">{d.d}:</span>
                    <span className="ruz-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="ruz-tags">
                {lugar.tags.map(t => (
                  <span key={t.label} className={`ruz-tag${t.free ? ' free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="ruz-route-img">
              <div className={`ruz-route-img-inner ${lugar.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="ruz-info-practicarz">
        <h3>Información práctica · Barrio de Ruzafa</h3>
        <div className="ruz-tabla">
          {datosVisita.map(d => (
            <div className="ruz-tabla-fila" key={d.label}>
              <div className="ruz-tabla-label">{d.label}</div>
              <div className="ruz-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ruz-info-box">
        <h3>Consejos para visitar Ruzafa</h3>
        <ul className="ruz-info-list">
          <li>El <strong>esmorzaret</strong> en El Rus o en las terrazas del Mercat de Russafa es la mejor manera de empezar el día en el barrio</li>
          <li>El <strong>mercadillo vintage</strong> de los lunes y jueves es un clásico: llega antes de las 10:00 h para los mejores hallazgos</li>
          <li>El <strong>Canalla Bistró</strong> y el Mercat Bar se llenan: reserva con antelación si quieres comer allí sin esperar</li>
          <li>Las <strong>Fallas</strong> son el mejor momento para visitar Ruzafa: Cuba y Literato Azorín ofrecen iluminación de primer premio</li>
          <li>El <strong>Parque Central</strong> es perfecto para un descanso entre calle y calle: abre hasta las 21:00 h y tiene rocódromo</li>
          <li>Ruzafa funciona mejor <strong>sin mapa ni plan fijo</strong>: déjate llevar por las calles y entra en lo que te llame la atención</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}