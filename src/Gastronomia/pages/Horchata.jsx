import '../assets/css/Horchata.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'Orxata de Xufa · El Oro Blanco de Valencia',
    subtitulo: 'Chufa · Agua · Azúcar · La bebida veraniega por antonomasia',
    desc: 'La horchata de chufa —orxata de xufa en valenciano— es la bebida más valenciana que existe. Refrescante, cremosa, ligeramente dulce y de un blanco lechoso inconfundible, es la antítesis del refresco industrial: sin lactosa, sin gluten, sin aditivos. Solo chufas, agua y azúcar, con un toque opcional de canela o cáscara de limón. Se toma fría, en verano especialmente, aunque los valencianos la disfrutan durante todo el año. En los años 80, la Avenida de la Horchata —la carretera que une Valencia con Alboraya— llegó a tener más de una docena de horchaterías y se convirtió en el destino de merienda favorito de toda la comarca. Hoy, el domingo por la tarde con horchata y fartons en una terraza de Alboraya sigue siendo una de las experiencias más genuinamente valencianas que se pueden vivir.',
    dato: 'Ingredientes básicos: chufas DO Valencia + agua + azúcar · Sin lactosa · Sin gluten · Sin alergias conocidas',
    imgClass: 'img-hor-vaso',
    tags: [{ label: 'Orxata de xufa' }, { label: 'Sin lactosa' }, { label: 'Alboraya' }],
  },
  {
    num: '02',
    nombre: 'La Leyenda del Rey Jaume I · "Açò és or, xata!"',
    subtitulo: 'S. XIII · La campesina y el rey · El origen del nombre · Los árabes y la chufa',
    desc: 'El nombre "horchata" tiene su propia leyenda valenciana. Cuenta la tradición que el rey Jaume I, durante la Reconquista, encontró a una campesina junto al camino que le ofreció una bebida blanca y dulce hecha con chufa. Al probarla, el rey exclamó en valenciano: "Açò no és llet, açò és or, xata!" —"¡Esto no es leche, esto es oro, chata!"—. De la unión de "or" (oro) y "xata" (forma afectuosa de dirigirse a una joven) nacería el nombre "orxata". La historia carece de evidencia documental, pero captura el carácter valenciano perfectamente. Lo que sí es histórico es que fueron los árabes quienes trajeron la chufa a la Península Ibérica en el año 711, cultivándola en las tierras fértiles de Alboraya y Moncada. La primera receta escrita de horchata data de 1748, aunque entonces era de almendras; la versión con chufa se popularizó a partir de 1824.',
    dato: 'Origen árabe de la chufa: s. VIII · Leyenda del rey Jaume I: s. XIII · Primera receta escrita: 1748 · Con chufa: desde 1824',
    imgClass: 'img-hor-historia',
    tags: [{ label: '"Açò és or, xata!"' }, { label: 'Origen árabe' }, { label: 'S. XIII' }],
  },
  {
    num: '03',
    nombre: 'La Chufa de Alboraya · DO desde 2010',
    subtitulo: 'Tubérculo único · 16 municipios de L\'Horta Nord · 5,3 millones de kilos al año · DOP',
    desc: 'La chufa —xufa en valenciano— es un pequeño tubérculo arrugado y dulce que crece en las raíces de la juncia avellanada (Cyperus esculentus). Su cultivo se remonta al antiguo Egipto —se han encontrado vasos con chufas en sarcófagos de los faraones— pero en la Comunitat Valenciana es un cultivo exclusivo de 16 municipios de L\'Horta Nord, siendo Alboraya el más famoso. La chufa necesita suelos arenosos, clima cálido sin heladas y alta humedad, condiciones que la huerta de Alboraya cumple a la perfección. Se siembra entre abril y mayo, se cosecha en octubre y noviembre, y se almacena en secaderos donde se remueve cada día durante seis meses para que se seque por igual. El resultado: el tubérculo más dulce, grande y pálido del mundo. Desde 2010, la Denominación de Origen Protegida Chufa de Valencia certifica el 90% de la producción, unos 5,3 millones de kilos al año.',
    dato: 'DO Chufa de Valencia desde 2010 · 16 municipios de L\'Horta Nord · Siembra: abril-mayo · Cosecha: octubre-noviembre',
    imgClass: 'img-hor-chufa',
    tags: [{ label: 'DO desde 2010' }, { label: '16 municipios' }, { label: 'Alboraya' }],
  },
  {
    num: '04',
    nombre: 'Los Fartons · El Compañero Inseparable',
    subtitulo: 'Bollo alargado esponjoso · Familia Polo · Años 60 · Para mojar en la horchata',
    desc: 'La horchata sin fartons no es horchata. El fartó —plural fartons— es un bollo dulce de forma alargada, textura esponjosa y corteza brillante que se creó específicamente para acompañar la horchata. Su origen es reciente: en los años 60, la familia Polo se trasladó a Alboraya —tierra de la chufa— y vieron que la costumbre era mojar la horchata con rosquilletas y pan cortado. Tuvieron la idea de crear un bollo específico para esa función y, tras muchas pruebas, nació el fartó. Su forma alargada es perfecta para sumergirlo en el vaso: absorbe la horchata sin deshacerse, y al morderlo combina la suavidad del bollo con el frescor cremoso de la bebida. Hoy, cada horchatería artesana elabora sus propios fartons con receta propia. Además de los fartons, la horchata se puede acompañar con rosquilletas, coca y buñuelos.',
    dato: 'Inventados por la familia Polo en los años 60 · Para mojar en la horchata · Cada horchatería tiene su propia receta',
    imgClass: 'img-hor-fartons',
    tags: [{ label: 'Familia Polo' }, { label: 'Años 60' }, { label: 'Para mojar' }],
  },
  {
    num: '05',
    nombre: 'Formas de Tomarla · Líquida, Granizada o Mixta',
    subtitulo: 'Natural fría · Granizada · Mixta · Con canela · Con limón · Propiedades nutricionales',
    desc: 'La horchata se sirve de tres maneras: líquida (natural bien fría, la más pura), granizada (semihelada, más espesa y consistente, perfecta para el calor más intenso) y mixta (entre la líquida y la granizada, la preferida por muchos). La versión líquida tiene un sabor más limpio y permite apreciar mejor los matices de la chufa. La granizada, más cremosa, es la que más éxito tiene entre los visitantes. Ambas pueden llevar un toque de canela molida por encima o corteza de limón. Nutritivamente, la horchata es un superalimento: vitaminas C y E, minerales como fósforo, magnesio, potasio, calcio y hierro, almidón, grasas insaturadas, proteínas y enzimas digestivas. Tiene más hierro, magnesio e hidratos de carbono que la leche. Sin lactosa, sin colesterol y sin gluten. El Papa Benedicto XVI, en su visita a Valencia en 2007, la probó y repitió, siendo nombrado "Horchatero de Honor" de la DO Chufa de Valencia.',
    dato: 'Tres formatos: líquida · granizada · mixta · Sin lactosa · Sin gluten · Rica en vitaminas C y E y minerales',
    imgClass: 'img-hor-granizada',
    tags: [{ label: 'Granizada' }, { label: 'Mixta' }, { label: 'Superalimento' }],
  },
];

var horchaterias = [
  {
    nombre: 'Horchatería Daniel · Alboraya',
    fundacion: 'Desde 1949',
    desc: 'La Meca de la horchata. Fundada por Daniel Tortajada, uno de los principales impulsores de la DO Chufa de Valencia. Salvador Dalí, Rafael Alberti, Viggo Mortensen y el Papa Benedicto XVI han degustado su horchata. Tres Sellos de Artesanía: horchateros, pasteleros y heladeros.',
    dir: 'Avinguda de la Horchata · Alboraya',
  },
  {
    nombre: 'Horchatería Santa Catalina',
    fundacion: 'Desde 1900',
    desc: 'De las más antiguas de Valencia. Maravillosa decoración histórica que se mantiene intacta. En la emblemática Plaza de Santa Catalina del centro histórico. El lugar más bonito para tomar horchata en el casco antiguo.',
    dir: 'Plaza de Santa Catalina, 6 · Centro histórico',
  },
  {
    nombre: 'L\'Obrador de Bou · Alboraya',
    fundacion: 'Familia Bou desde 1946',
    desc: 'La catedral de la horchata artesana y ecológica. Cultivo propio de chufa ecológica en la huerta próxima a la playa. Obrador acristalado donde se puede ver todo el proceso de elaboración. El origen más puro posible.',
    dir: 'Avinguda Mare Nostrum, 7 · Alboraya',
  },
  {
    nombre: 'Subies · Horchata 100% Natural',
    fundacion: 'Desde 1959',
    desc: 'Sentando cátedra desde 1959. Receta de horchata 100% natural con chufa DO Valencia. Favorita del público por su consistencia perfecta. Fartons y coca de temporada. Con locales en Almàssera, Massamagrell y Valencia.',
    dir: 'Locales en Almàssera · Massamagrell · Valencia',
  },
  {
    nombre: 'Horchatería Vida · Alquería s. XIX',
    fundacion: 'Alquería del siglo XIX',
    desc: 'En plena huerta de Alboraya, en una alquería del siglo XIX con huerta propia. La experiencia más completa para combinar horchata con historia y naturaleza. Animales de granja, terraza en la huerta y ambiente familiar único.',
    dir: 'Partida de Saboya, 6 · Alboraya',
  },
  {
    nombre: 'Els Sariers · Benimaclet',
    fundacion: 'Referente del barrio',
    desc: 'Una de las horchaterías más conocidas de Valencia. En el barrio de Benimaclet, junto a la Ronda Norte. Receta propia de horchata con fartons de horno. Agradable terraza para disfrutar de la brisa en verano.',
    dir: 'Carrer del Sarcet, 6 · Benimaclet',
  },
];

var propiedades = [
  { prop: 'Sin lactosa', desc: 'Perfecta para intolerantes a la lactosa — origen 100% vegetal' },
  { prop: 'Sin gluten', desc: 'Apta para celíacos — no contiene trigo ni cereales con gluten' },
  { prop: 'Vitaminas C y E', desc: 'Potentes antioxidantes que protegen el organismo' },
  { prop: 'Rica en minerales', desc: 'Fósforo, magnesio, potasio, calcio y hierro — más que la leche' },
  { prop: 'Enzimas digestivas', desc: 'Favorece la salud digestiva y la absorción de nutrientes' },
  { prop: 'Grasas insaturadas', desc: 'Ácido oleico — mejora el perfil lipídico y salud cardiovascular' },
];

export default function Horchata() {
  return (
    <div className="hor-page">

      {/* Hero */}
      <div className="hor-hero">
        <div className="hor-hero-overlay" />
        <div className="hor-hero-content">
          <div className="hor-eyebrow">Gastronomía · Orxata de Xufa · La bebida más valenciana del mundo</div>
          <h1>La Horchata<br />de Valencia</h1>
          <p>Blanca, fría, cremosa y dulce. La horchata de chufa de Alboraya es el oro líquido de Valencia: sin lactosa, sin gluten, con Denominación de Origen y una leyenda que empieza con el rey Jaume I.</p>
        </div>
        <div className="hor-hero-stats">
          <div className="hor-stat">
            <span className="hor-stat-num">DO 2010</span>
            <span className="hor-stat-label">Chufa de Valencia</span>
          </div>
          <div className="hor-stat-sep" />
          <div className="hor-stat">
            <span className="hor-stat-num">16</span>
            <span className="hor-stat-label">municipios productores</span>
          </div>
          <div className="hor-stat-sep" />
          <div className="hor-stat">
            <span className="hor-stat-num">Alboraya</span>
            <span className="hor-stat-label">cuna de la chufa</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="hor-historia-box">
        <div className="hor-historia-icono">👑</div>
        <div className="hor-historia-content">
          <div className="hor-historia-titulo">La leyenda del rey · "Açò no és llet, açò és or, xata!"</div>
          <p>Cuenta la leyenda que el rey <strong>Jaume I</strong>, durante la Reconquista, encontró a una campesina junto al camino que le ofreció una bebida blanca hecha con chufa. Al probarla, exclamó: <em>"Açò no és llet, açò és or, xata!"</em> —"¡Esto no es leche, esto es oro, chata!"—. De <em>or</em> (oro) y <em>xata</em> (chata) nacería <strong>orxata</strong>. La historia es leyenda, pero lo real es que fueron los <strong>árabes</strong> quienes trajeron la chufa a la Península en el año 711 y la cultivaron en las tierras de Alboraya. La primera referencia escrita de la horchata valenciana es del botánico Antonio Cavanilles en 1795, y la primera receta con chufa data de 1824. El Papa Benedicto XVI la probó en su visita a Valencia en 2007 y quedó tan impresionado que le fue otorgado el título de <strong>"Horchatero de Honor"</strong> de la DO Chufa de Valencia.</p>
        </div>
      </div>

      {/* Propiedades */}
      <div className="hor-props-wrap">
        <div className="hor-props-titulo">Propiedades de la horchata de chufa</div>
        <div className="hor-props-grid">
          {propiedades.map(p => (
            <div className="hor-prop-card" key={p.prop}>
              <div className="hor-prop-nombre">✓ {p.prop}</div>
              <div className="hor-prop-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="hor-intro">
        <p>Valencia tiene una relación con la horchata que va mucho más allá de la gastronomía: es identidad. Cada valenciano tiene su horchatería favorita, cada horchatería tiene su receta propia de fartons, y el ritual del domingo por la tarde con un vaso de horchata granizada y la bandeja de fartons en el centro de la mesa es tan valenciano como la paella o las Fallas.</p>
        <p>La única condición para que una horchata sea auténtica es que esté elaborada con <strong>chufa Denominación de Origen de Valencia</strong>, cultivada en los campos de L'Horta Nord. Si no viene de esas 16 localidades, puede ser una bebida de chufa, pero no la horchata de Valencia.</p>
      </div>

      {/* Section title */}
      <div className="hor-section-title">
        <h2>Todo sobre la orxata de xufa</h2>
        <p>Historia, la chufa de Alboraya, los fartons, formas de tomarla y propiedades de la bebida más valenciana.</p>
      </div>

      {/* Secciones */}
      <div className="hor-routes">
        {secciones.map(s => (
          <div className="hor-route-item" key={s.num}>
            <div className="hor-route-num">{s.num}</div>

            <div className="hor-route-text">
              <h2>{s.nombre}</h2>
              <div className="hor-subtitulo">{s.subtitulo}</div>
              <p className="hor-desc">{s.desc}</p>

              <div className="hor-dato-box">
                <span className="hor-dato-icon">🌾</span>
                <span>{s.dato}</span>
              </div>

              <div className="hor-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="hor-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="hor-route-img">
              <div className={`hor-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Horchaterías */}
      <div className="hor-rest-wrap">
        <h3>Las mejores horchaterías de Valencia</h3>
        <div className="hor-rest-grid">
          {horchaterias.map(h => (
            <div className="hor-rest-card" key={h.nombre}>
              <div className="hor-rest-nombre">{h.nombre}</div>
              <div className="hor-rest-fundacion">{h.fundacion}</div>
              <div className="hor-rest-dir">📍 {h.dir}</div>
              <p className="hor-rest-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="hor-info-box">
        <h3>Lo que debes saber de la horchata valenciana</h3>
        <ul className="hor-info-list">
          <li>La horchata auténtica lleva <strong>Chufa DO Valencia</strong> — si no lo especifica, puede ser cualquier bebida vegetal de chufa</li>
          <li>Se toma de tres formas: <strong>líquida</strong> (natural fría), <strong>granizada</strong> (semihelada) y <strong>mixta</strong> — pide la que más te apetezca</li>
          <li>Los <strong>fartons</strong> son obligatorios — se mojan en el vaso de horchata directamente, sin cortarlos</li>
          <li>El <strong>Día de la Horchata</strong> de Alboraya se celebra el primer miércoles de julio desde los años 60</li>
          <li>La <strong>Horchatería Daniel</strong> (Alboraya, desde 1949) es la más famosa — Salvador Dalí, Viggo Mortensen y el Papa Benedicto XVI han sido clientes</li>
          <li>La horchata granizada aguanta mejor el calor — la líquida tiene más sabor puro · Ambas están <strong>igual de buenas</strong></li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}