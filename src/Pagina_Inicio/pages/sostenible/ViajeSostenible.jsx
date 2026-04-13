import '../../assets/cssSostenible/ViajeSostenible.css';
import Footer from '../../FOOTER/Footer';

var logros = [
  {
    titulo: 'Capital Verde Europea 2024',
    icono: '🌿',
    desc: 'El reconocimiento más importante de sostenibilidad urbana a nivel europeo. Valencia fue la primera ciudad española en obtener este galardón, que premia el compromiso con la movilidad sostenible, los espacios verdes, la calidad del aire y la participación ciudadana en la transición ecológica.',
    color: 'verde',
  },
  {
    titulo: 'Capital Europea del Turismo Inteligente 2022',
    icono: '🏆',
    desc: 'Un reconocimiento de la Comisión Europea al esfuerzo continuo por hacer la ciudad más accesible, tecnológica y sostenible. Valencia fue galardonada por su uso creativo de nuevas tecnologías para mejorar la experiencia de turistas y residentes.',
    color: 'azul',
  },
  {
    titulo: 'Primera ciudad del mundo en certificar su Huella de Carbono Turística',
    icono: '📊',
    desc: 'Valencia fue la primera ciudad del mundo en verificar y certificar la huella de carbono de su actividad turística, y también la primera en calcular la huella hídrica del turismo. Un compromiso con la transparencia y la medición rigurosa del impacto ambiental.',
    color: 'verde',
  },
  {
    titulo: 'Puerto de Valencia · Primero de Europa con hidrógeno',
    icono: '⚓',
    desc: 'El Puerto de Valencia es el primero de Europa en utilizar hidrógeno en su maquinaria para reducir el impacto medioambiental. Un proyecto pionero que convierte al puerto valenciano en referente de innovación energética en el sector marítimo europeo.',
    color: 'azul',
  },
];

var iniciativas = [
  {
    num: '01',
    nombre: 'Fuentes de agua filtrada PUSDAR',
    icono: '💧',
    categoria: 'Agua',
    desc: 'Más de 50 fuentes de agua del grifo filtrada y refrigerada repartidas por toda la ciudad. En lugar de comprar agua embotellada, puedes rellenar tu propia botella de forma gratuita en cualquiera de estos puntos. La red PUSDAR elimina miles de botellas de plástico al año y ofrece agua de la misma o mejor calidad que la embotellada.',
    dato: '+50 fuentes · Gratuito · Agua filtrada y refrigerada',
    imgClass: 'img-fuentes',
    tags: ['Sin plástico', 'Gratuito', 'Red urbana'],
  },
  {
    num: '02',
    nombre: 'WiFi público gratuito · WiFi4EU',
    icono: '📶',
    categoria: 'Tecnología',
    desc: 'Más de 400 puntos de conexión WiFi de acceso público, gratuito y de alta velocidad repartidos por toda la ciudad. La red está integrada en el programa WiFi4EU de la Unión Europea y ofrece 30 megas de velocidad en cada punto. Disponible en plazas, jardines, playas, museos y edificios municipales.',
    dato: '+400 puntos · 30 Mb de velocidad · Gratuito',
    imgClass: 'img-wifi',
    tags: ['Gratuito', 'WiFi4EU', '400 puntos'],
  },
  {
    num: '03',
    nombre: 'Autobuses híbridos y eléctricos · EMT',
    icono: '🚌',
    categoria: 'Movilidad',
    desc: 'La flota de autobuses urbanos de la EMT Valencia incorpora vehículos híbridos con los que se ha reducido la huella de carbono del transporte urbano en un 22%. La incorporación de nuevos vehículos 100% eléctricos, completamente sin emisiones de CO2, refuerza la apuesta de la ciudad por la movilidad urbana limpia.',
    dato: 'Reducción del 22% huella de carbono · Nuevos eléctricos',
    imgClass: 'img-bus',
    tags: ['Eléctrico', 'Híbrido', '−22% CO₂'],
  },
  {
    num: '04',
    nombre: 'Paradas de bus inteligentes · Navilens',
    icono: '🛑',
    categoria: 'Accesibilidad',
    desc: 'Las nuevas marquesinas de las paradas de autobús cuentan con tecnología Navilens para guiar a personas con discapacidad visual mediante una app en el smartphone. También incluyen placas en Braille, acceso a WiFi gratuito y puertos USB para cargar el móvil. Un sistema que hace el transporte público más accesible e inteligente.',
    dato: 'Tecnología Navilens · Braille · USB · WiFi',
    imgClass: 'img-paradas',
    tags: ['Accesible', 'Navilens', 'Braille'],
  },
  {
    num: '05',
    nombre: 'Tours en bici y barca · Easy Albufera Bike & Boat',
    icono: '🚲',
    categoria: 'Movilidad activa',
    desc: 'La oferta de tours en bicicleta por Valencia y sus alrededores crece cada año. El tour Easy Albufera Bike & Boat combina el desplazamiento en bicicleta hasta la Albufera con un paseo en barca por el lago: sin emisiones, con guía local y en contacto directo con los dos ecosistemas más emblemáticos del entorno de Valencia.',
    dato: 'Tour completo sin emisiones · Bici + barca · Guía local',
    imgClass: 'img-bikebarca',
    tags: ['Sin emisiones', 'Albufera', 'Bici + barca'],
  },
  {
    num: '06',
    nombre: 'Pasos de peatones inteligentes · Marina',
    icono: '🚶',
    categoria: 'Ciudad inteligente',
    desc: 'En la Marina de Valencia se han instalado los primeros pasos de peatones inteligentes de la ciudad, equipados con sensores y tecnología LED que se ilumina en cuanto se aproxima el peatón, para avisar con tiempo a los vehículos. Un sistema que mejora la seguridad vial y reduce los riesgos de atropello en las zonas de mayor afluencia peatonal.',
    dato: 'Sensores · LED inteligente · Mayor seguridad peatonal',
    imgClass: 'img-pasos',
    tags: ['Ciudad inteligente', 'Seguridad', 'LED'],
  },
  {
    num: '07',
    nombre: 'Mobiliario urbano sostenible · Marina y playas',
    icono: '🏖',
    categoria: 'Diseño sostenible',
    desc: 'Las nuevas estructuras del mobiliario urbano de la Marina y las playas están fabricadas con cáscara de arroz, materiales reciclados y hojas de posidonia oceánica llegadas con la marea. Un diseño resistente, sostenible e inspirado en los mosaicos de cerámica y las olas del mar. Arte, funcionalidad y respeto por el entorno en un solo objeto.',
    dato: 'Cáscara de arroz · Posidonia · Materiales reciclados',
    imgClass: 'img-mobiliario',
    tags: ['Reciclado', 'Posidonia', 'Diseño sostenible'],
  },
  {
    num: '08',
    nombre: 'Wave Energy Converter · Energía de las olas',
    icono: '🌊',
    categoria: 'Energía verde',
    desc: 'Las olas del Mediterráneo se aprovechan para generar energía verde en Valencia gracias al Wave Energy Converter, un dispositivo instalado en la salida del canal de la Marina. Un proyecto pionero en España que convierte la energía cinética del mar en electricidad limpia, reduciendo la dependencia de combustibles fósiles en la gestión del puerto deportivo.',
    dato: 'Canal de la Marina · Energía de las olas · Proyecto pionero',
    imgClass: 'img-wave',
    tags: ['Energía renovable', 'Mar', 'Pionero en España'],
  },
];

var pilares = [
  { titulo: 'Movilidad verde', desc: 'Bici, patinete, transporte público limpio y cero coches en el centro histórico.', icono: '🚲' },
  { titulo: 'Tecnología accesible', desc: 'WiFi gratuito, apps de transporte y sistemas para personas con discapacidad visual.', icono: '📱' },
  { titulo: 'Naturaleza protegida', desc: 'Albufera, huerta, posidonia marina y más de 500 árboles monumentales catalogados.', icono: '🌱' },
  { titulo: 'Economía circular', desc: 'Compostaje, reciclaje de aceite, mercados de proximidad y kilómetro 0.', icono: '♻️' },
  { titulo: 'Energía renovable', desc: 'Placas solares en edificios municipales, hidrógeno en el puerto y energía de las olas.', icono: '☀️' },
  { titulo: 'Participación ciudadana', desc: 'Más de 150 empresas adheridas al Pacto Verde y programas de educación ambiental.', icono: '🤝' },
];

export default function ViajeSostenible() {
  return (
    <div className="vs-page">

      {/* Hero */}
      <div className="vs-hero">
        <div className="vs-hero-overlay" />
        <div className="vs-hero-content">
          <div className="vs-eyebrow">Valencia · Turismo inteligente · Ciudad sostenible</div>
          <h1>Haz tu viaje a<br />Valencia más Smart</h1>
          <p>Valencia no solo es sostenible: es inteligente. Capital Verde Europea 2024 y Capital del Turismo Inteligente 2022, la ciudad combina tecnología, naturaleza y cultura para ofrecer una experiencia viajera responsable, accesible y sin impacto innecesario.</p>
        </div>
        <div className="vs-hero-stats">
          <div className="vs-stat">
            <span className="vs-stat-num">+400</span>
            <span className="vs-stat-label">puntos WiFi gratis</span>
          </div>
          <div className="vs-stat-sep" />
          <div className="vs-stat">
            <span className="vs-stat-num">+50</span>
            <span className="vs-stat-label">fuentes agua filtrada</span>
          </div>
          <div className="vs-stat-sep" />
          <div className="vs-stat">
            <span className="vs-stat-num">−22%</span>
            <span className="vs-stat-label">huella carbono EMT</span>
          </div>
        </div>
      </div>

      {/* Logros y reconocimientos */}
      <div className="vs-logros-section">
        <div className="vs-logros-titulo">Reconocimientos internacionales</div>
        <div className="vs-logros-grid">
          {logros.map(l => (
            <div className={`vs-logro-card vs-logro-${l.color}`} key={l.titulo}>
              <span className="vs-logro-icono">{l.icono}</span>
              <div className="vs-logro-nombre">{l.titulo}</div>
              <p className="vs-logro-desc">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="vs-intro">
        <p>Valencia es mucho más que un destino bonito: es una ciudad que ha hecho de la sostenibilidad y la tecnología los ejes de su gestión urbana. Ser un turista inteligente en Valencia es fácil, porque la ciudad ya está diseñada para ello: puedes moverte sin coche, beber agua gratis del grifo filtrado en cualquier calle, conectarte a internet sin gastar datos y viajar a la Albufera sin dejar huella de carbono.</p>
        <p>Estas son las <strong>iniciativas smart y sostenibles</strong> que podrás experimentar durante tu visita sin ni siquiera buscarlo.</p>
      </div>

      {/* Pilares */}
      <div className="vs-pilares-section">
        <h2 className="vs-pilares-titulo">Los 6 pilares del Valencia sostenible</h2>
        <div className="vs-pilares-grid">
          {pilares.map(p => (
            <div className="vs-pilar" key={p.titulo}>
              <span className="vs-pilar-icono">{p.icono}</span>
              <div className="vs-pilar-titulo">{p.titulo}</div>
              <p className="vs-pilar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Iniciativas smart */}
      <div className="vs-section-header">
        <h2>Iniciativas smart que puedes experimentar</h2>
        <p>Proyectos inteligentes ya activos en Valencia que mejorarán tu experiencia como visitante.</p>
      </div>

      <div className="vs-routes">
        {iniciativas.map(ini => (
          <div className="vs-route-item" key={ini.num}>
            <div className="vs-route-num">{ini.num}</div>

            <div className="vs-route-text">
              <div className="vs-meta-row">
                <span className="vs-icono">{ini.icono}</span>
                <span className="vs-cat-badge">{ini.categoria}</span>
              </div>
              <h2>{ini.nombre}</h2>
              <p className="vs-desc">{ini.desc}</p>

              <div className="vs-dato">
                <span className="vs-dato-icon">→</span>
                <span>{ini.dato}</span>
              </div>

              <div className="vs-tags">
                {ini.tags.map(t => (
                  <span key={t} className="vs-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="vs-route-img">
              <div className={`vs-route-img-inner ${ini.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* CTA final */}
      <div className="vs-cta-section">
        <div className="vs-cta-content">
          <div className="vs-cta-titulo">¿Te apuntas a viajar de forma inteligente?</div>
          <p className="vs-cta-desc">Descarga los mapas de Visit Valencia, activa la app de la EMT, rellena tu botella en una fuente PUSDAR y comparte tus fotos con el hashtag <strong>#VisitValencia</strong>. Ser un turista smart en Valencia no requiere esfuerzo: la ciudad ya está preparada para ti.</p>
          <div className="vs-cta-pasos">
            <div className="vs-cta-paso">
              <span className="vs-cta-num">1</span>
              <span>Descarga la app EMT Valencia y Valenbisi antes de llegar</span>
            </div>
            <div className="vs-cta-paso">
              <span className="vs-cta-num">2</span>
              <span>Lleva una botella reutilizable y rellénala en las fuentes PUSDAR</span>
            </div>
            <div className="vs-cta-paso">
              <span className="vs-cta-num">3</span>
              <span>Usa el WiFi público gratuito en plazas, jardines y museos</span>
            </div>
            <div className="vs-cta-paso">
              <span className="vs-cta-num">4</span>
              <span>Muévete en bici, a pie o en transporte público sin coche</span>
            </div>
          </div>
        </div>
      </div>

      {/* Info box */}
      <div className="vs-info-box">
        <h3>Valencia Smart · Lo que debes saber antes de llegar</h3>
        <ul className="vs-info-list">
          <li>El agua del grifo en Valencia es potable: las fuentes PUSDAR la filtran y refrigeran <strong>gratis</strong></li>
          <li>Hay <strong>más de 400 puntos WiFi gratuitos</strong> en toda la ciudad: plazas, jardines, playas y museos</li>
          <li>Los autobuses de la EMT han reducido su huella de carbono un <strong>22%</strong> con flota híbrida</li>
          <li>El Puerto de Valencia es el <strong>primero de Europa</strong> en usar hidrógeno para reducir emisiones</li>
          <li>Las paradas de bus tienen tecnología <strong>Navilens</strong> para personas con discapacidad visual</li>
          <li>Valencia fue la <strong>primera ciudad del mundo</strong> en certificar su huella de carbono turística</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}