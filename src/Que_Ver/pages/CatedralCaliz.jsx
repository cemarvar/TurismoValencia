import '../assets/css/CatedralCaliz.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var elementosCapilla = [
  {
    num: '01',
    nombre: 'El Santo Cáliz',
    subtitulo: 'Copa de ágata oriental del siglo I d.C.',
    desc: 'El tesoro más importante de la Catedral de Valencia y uno de los objetos más venerados del mundo cristiano. La tradición considera que es la misma copa que utilizó Jesucristo en la Última Cena. La taza es de piedra ágata oriental —de la variedad cornalina, color rojo oscuro— datada en el siglo I a.C. Mide aproximadamente diez centímetros de diámetro y siete de altura. El pie está formado por una navecilla de calcedonia muy translúcida ribeteada en oro, añadida en la Edad Media. Alfonso el Magnánimo lo donó a la Catedral en 1437; en 1916 fue trasladado a esta capilla. Hasta 1744 se usó con regularidad en la liturgia.',
    datos: [
      { label: 'Material', val: 'Taza de ágata oriental (cornalina) · Pie medieval de calcedonia y oro' },
      { label: 'Datación', val: 'Siglo I a.C. · Pie y asas medievales añadidos posteriormente' },
      { label: 'Dimensiones', val: 'Diámetro aprox. 10 cm · Altura 7 cm' },
      { label: 'Donación', val: 'Alfonso V el Magnánimo lo donó a la Catedral en 1437' },
      { label: 'En la capilla', val: 'Desde 1916 · Protegido en urna acristalada sobre el retablo' },
    ],
    imgClass: 'img-caliz',
  },
  {
    num: '02',
    nombre: 'La Capilla · Antigua Sala Capitular',
    subtitulo: 'Gótico florido · 1365–1369 · 13×13 m · 16 m de altura',
    desc: 'La capilla fue construida entre 1365 y 1369 por encargo del obispo Vidal de Blanes para servir de Sala Capitular y sepultura de obispos y canónigos. En ella se celebraron Cortes del Reino de Valencia y se impartieron clases de Teología. No fue consagrada al culto del Santo Cáliz hasta 1916. Es un espacio de planta cuadrada, con paredes lisas de piedra oscura labrada y tres ventanales con vidrieras polícromas. Construida inicialmente exenta de la Catedral, fue unida al edificio principal mediante un pasadizo en la última década del siglo XV, por los maestros canteros Pere Compte y Asensi Fos.',
    datos: [
      { label: 'Construcción', val: '1365–1369 · Encargo del obispo Vidal de Blanes' },
      { label: 'Estilo', val: 'Gótico florido del siglo XIV' },
      { label: 'Dimensiones', val: 'Planta cuadrada de 13×13 m · 16 m de altura' },
      { label: 'Uso histórico', val: 'Sala Capitular · Cortes del Reino · Clases de Teología' },
      { label: 'Consagración', val: 'Al culto del Santo Cáliz en 1916' },
    ],
    imgClass: 'img-capilla',
  },
  {
    num: '03',
    nombre: 'La Bóveda Estrellada',
    subtitulo: 'Ocho nervaduras · Los doce Apóstoles en las claves',
    desc: 'La bóveda gótica de la Capilla del Santo Cáliz es uno de los ejemplos más bellos y complejos del gótico valenciano. Ocho nervaduras y veinticuatro arcos terceletes forman una estrella de ocho puntas que descansa sobre ménsulas policromadas. En las claves de la bóveda, también policromadas, figuran los doce Apóstoles; en la clave central aparece la coronación de la Virgen en el cielo tras la Asunción. Alzar la vista en este espacio es uno de los momentos más impactantes de cualquier visita a la Catedral de Valencia.',
    datos: [
      { label: 'Tipología', val: 'Bóveda de crucería nervada · Estrella de ocho puntas' },
      { label: 'Nervaduras', val: '8 nervios principales + 24 arcos terceletes' },
      { label: 'Claves', val: 'Los doce Apóstoles en las claves · Policromadas' },
      { label: 'Clave central', val: 'Coronación de la Virgen tras la Asunción' },
      { label: 'Soporte', val: 'Ménsulas policromadas en los arranques de los nervios' },
    ],
    imgClass: 'img-boveda',
  },
  {
    num: '04',
    nombre: 'El Retablo de Alabastro',
    subtitulo: 'Antoni Dalmau y Julià lo Florentí · 1441–1446',
    desc: 'El gran retablo gótico de alabastro que enmarca el Santo Cáliz fue labrado entre 1441 y 1446 por los arquitectos Antoni Dalmau y Julià lo Florentí, con la participación de los escultores Joan de Sagrera, Joan de Sogorb y Arnau de Bruselas. Era originalmente la puerta central del trascoro de la Catedral, por la que procesionalmente entraban canónigos y obispos. En 1777 fue trasladado a esta capilla al ser sustituido el trascoro por uno neoclásico. Los doce relieves de la parte superior, obra de Julià lo Florentí, son una de las primeras manifestaciones del Renacimiento en España: las escenas inferiores representan el Antiguo Testamento y las superiores el Nuevo, en una lectura tipológica paralela.',
    datos: [
      { label: 'Artistas', val: 'Antoni Dalmau, Julià lo Florentí, Joan de Sagrera, Arnau de Bruselas' },
      { label: 'Fechas', val: '1441–1446 · Trasladado a la capilla en 1777' },
      { label: 'Material', val: 'Alabastro · Estilo gótico con detalles del primer Renacimiento' },
      { label: 'Relieves', val: '12 escenas · AT (inferior) y NT (superior) en lectura tipológica' },
      { label: 'Importancia', val: 'Una de las primeras obras del Renacimiento en la Península Ibérica' },
    ],
    imgClass: 'img-retablo',
  },
  {
    num: '05',
    nombre: 'Las Cadenas de Marsella y los Lienzos',
    subtitulo: 'Alfonso V el Magnánimo · 1423 · Vicente López · Nicolás Florentino',
    desc: 'A la izquierda de la capilla cuelgan unas enormes cadenas de 226 eslabones que cerraban el puerto de Marsella, traídas a Valencia por Alfonso V el Magnánimo en 1423 como trofeo de guerra. Sobre ellas se encuentra el lienzo "Expulsión de los moriscos", obra de Vicente López, pintor de cámara de Fernando VII. Al otro lado, el fresco de la Adoración de los Reyes, pintado por Nicolás Florentino, completa el programa pictórico de este singular espacio donde la historia política, militar y religiosa de Valencia se funden en un mismo rincón.',
    datos: [
      { label: 'Cadenas', val: '226 eslabones · Puerto de Marsella · Traídas en 1423 por Alfonso V' },
      { label: 'Lienzo Vicente López', val: '"Expulsión de los moriscos" · Pintor de cámara de Fernando VII' },
      { label: 'Fresco Nicolás Florentino', val: '"Adoración de los Reyes" · Pintura mural gótica' },
      { label: 'Fresco de la Adoración de los Pastores', val: 'Paolo de San Leocadio · 1472 · En el pasadizo de acceso' },
    ],
    imgClass: 'img-cadenas',
  },
];

var datosVisita = [
  { label: 'Dirección', val: 'Plaza de la Reina · 46003 Valencia · Entrada por la Puerta de los Hierros' },
  { label: 'Horario visita', val: 'Lun–Vie 10:30–18:30 h · Sáb 10:30–17:30 h · Dom 14:00–17:30 h' },
  { label: 'Última entrada', val: 'Lun–Vie 17:30 h · Sáb y Dom 16:30 h' },
  { label: 'Precio', val: 'Incluida en la Visita Cultural de la Catedral · Consultar tarifa en taquilla' },
  { label: 'Tourist Card', val: 'La Tourist Card de 7 días incluye la Catedral, el Santo Cáliz y el Museo' },
  { label: 'Año Jubilar', val: '30 oct 2025 – 29 oct 2026 · Indulgencia plenaria · Tercer Año Jubilar' },
  { label: 'Acceso', val: 'Primera capilla a la derecha tras la Puerta de los Hierros · Pasadizo gótico' },
  { label: 'Tribunal de las Aguas', val: 'Todos los jueves a las 12:00 h en la Puerta de los Apóstoles' },
];

var cronologia = [
  { ano: '1365–1369', hecho: 'Construcción de la Sala Capitular (actual capilla) por encargo del obispo Vidal de Blanes' },
  { ano: 'S. I a.C.', hecho: 'Datación de la taza de ágata del Santo Cáliz según estudios arqueológicos' },
  { ano: '1423', hecho: 'Alfonso V el Magnánimo trae a Valencia las cadenas del puerto de Marsella' },
  { ano: '1437', hecho: 'Alfonso V dona el Santo Cáliz a la Catedral de Valencia' },
  { ano: '1441–1446', hecho: 'Labrado del retablo gótico de alabastro (originalmente trascoro)' },
  { ano: 'S. XV fin', hecho: 'Pere Compte y Asensi Fos construyen el pasadizo que une la capilla con la Catedral' },
  { ano: '1744', hecho: 'El cáliz se agrieta al caer al suelo; desde entonces solo objeto de culto' },
  { ano: '1777', hecho: 'Traslado del retablo de alabastro a la capilla desde el trascoro' },
  { ano: '1916', hecho: 'La capilla se consagra oficialmente al culto del Santo Cáliz' },
  { ano: '2025–2026', hecho: 'Tercer Año Jubilar del Santo Cáliz · Indulgencia plenaria para los peregrinos' },
];

export default function CatedralCaliz() {
  return (
    <div className="cc-page">

      {/* Hero */}
      <div className="cc-hero">
        <div className="cc-hero-overlay" />
        <div className="cc-hero-content">
          <div className="cc-eyebrow">Catedral de Valencia · Centro histórico · Año Jubilar 2025–2026</div>
          <h1>La Capilla del<br />Santo Cáliz</h1>
          <p>Primera capilla a la derecha de la Puerta de los Hierros. Sencilla y silenciosa, alberga una de las reliquias más valiosas del mundo cristiano: la copa que, según la tradición, utilizó Jesucristo en la Última Cena.</p>
        </div>
        <div className="cc-hero-stats">
          <div className="cc-stat">
            <span className="cc-stat-num">S. XIV</span>
            <span className="cc-stat-label">Gótico florido</span>
          </div>
          <div className="cc-stat-sep" />
          <div className="cc-stat">
            <span className="cc-stat-num">S. I a.C.</span>
            <span className="cc-stat-label">El Santo Cáliz</span>
          </div>
          <div className="cc-stat-sep" />
          <div className="cc-stat">
            <span className="cc-stat-num">2026</span>
            <span className="cc-stat-label">Año Jubilar</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="cc-intro">
        <p>La Capilla del Santo Cáliz de la Catedral de Valencia fue construida como Sala Capitular en 1365, sirvió para celebrar las Cortes del Reino y fue escenario de clases de Teología. No fue consagrada al culto del Santo Cáliz hasta 1916. Hoy es uno de los espacios más visitados de la ciudad: un interior gótico de planta cuadrada, bóveda estrellada con los doce Apóstoles y un retablo de alabastro del siglo XV que es una de las primeras obras del Renacimiento en España.</p>
        <p>Desde el <strong>30 de octubre de 2025</strong> hasta el 29 de octubre de 2026, la Catedral de Valencia celebra el <strong>Tercer Año Jubilar del Santo Cáliz</strong>, con la posibilidad de obtener indulgencia plenaria para los peregrinos que cumplan las condiciones establecidas.</p>
      </div>

      {/* Cómo acceder — destacado */}
      <div className="cc-acceso-box">
        <div className="cc-acceso-icono">🚪</div>
        <div className="cc-acceso-content">
          <div className="cc-acceso-titulo">Cómo llegar a la Capilla del Santo Cáliz</div>
          <p>Entra por la <strong>Puerta de los Hierros</strong> (la fachada barroca que da a la Plaza de la Reina), compra tu entrada en la taquilla y dirígete a la <strong>primera capilla a la derecha</strong>. Un pasadizo gótico con sepulcros medievales y el fresco de la Adoración de los Pastores (1472, Paolo de San Leocadio) te conduce hasta la portalada gótica de piedra que da acceso a la capilla.</p>
        </div>
      </div>

      {/* Elementos de la capilla */}
      <div className="cc-section-title">
        <h2>Qué ver en la Capilla del Santo Cáliz</h2>
        <p>Cinco elementos artísticos e históricos únicos en un mismo espacio de 13×13 metros.</p>
      </div>

      <div className="cc-routes">
        {elementosCapilla.map(el => (
          <div className="cc-route-item" key={el.num}>
            <div className="cc-route-num">{el.num}</div>

            <div className="cc-route-text">
              <h2>{el.nombre}</h2>
              <div className="cc-subtitulo">{el.subtitulo}</div>
              <p className="cc-desc">{el.desc}</p>

              <div className="cc-datos-titulo">Datos clave</div>
              <ul className="cc-datos">
                {el.datos.map(d => (
                  <li key={d.label}>
                    <span className="cc-dato-label">{d.label}:</span>
                    <span className="cc-dato-val"> {d.val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cc-route-img">
              <div className={`cc-route-img-inner ${el.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Cronología */}
      <div className="cc-cronologia-section">
        <h3>Cronología · La Capilla y el Santo Cáliz</h3>
        <div className="cc-cronologia">
          {cronologia.map(c => (
            <div className="cc-crono-item" key={c.ano}>
              <div className="cc-crono-ano">{c.ano}</div>
              <div className="cc-crono-linea">
                <div className="cc-crono-punto" />
              </div>
              <div className="cc-crono-hecho">{c.hecho}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tabla información práctica */}
      <div className="cc-info-practica">
        <h3>Información práctica · Catedral de Valencia</h3>
        <div className="cc-tabla">
          {datosVisita.map(d => (
            <div className="cc-tabla-fila" key={d.label}>
              <div className="cc-tabla-label">{d.label}</div>
              <div className="cc-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="cc-info-box">
        <h3>Consejos para la visita</h3>
        <ul className="cc-info-list">
          <li>Entra por la <strong>Puerta de los Hierros</strong> (Plaza de la Reina): es la entrada principal a la visita cultural</li>
          <li>La capilla está incluida en la visita cultural general · No necesitas entrada aparte para verla</li>
          <li>La <strong>Tourist Card de 7 días</strong> incluye Catedral, Santo Cáliz y Museo Catedralicio</li>
          <li>El <strong>Miguelete</strong> (207 escalones) requiere entrada aparte · Vistas panorámicas de toda Valencia</li>
          <li>El <strong>Tribunal de las Aguas</strong> sesiona todos los jueves a las 12:00 h en la Puerta de los Apóstoles · Acceso gratuito</li>
          <li>Durante el <strong>Año Jubilar 2025–2026</strong> hay actos especiales y posibilidad de indulgencia plenaria</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}