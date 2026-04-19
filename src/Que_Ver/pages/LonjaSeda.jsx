import '../assets/css/LonjaSeda.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var espacios = [
  {
    num: '01',
    nombre: 'Salón Columnario',
    subtitulo: 'También llamado Sala de Contratación',
    desc: 'El corazón de la Lonja: un espacio monumental dividido en varias naves con ocho espectaculares columnas helicoidales de piedra que ascienden hasta el techo sin interrupción. Aquí se negociaban los contratos mercantiles y se instaló la histórica Taula de Canvis, el banco municipal de Valencia. Las columnas en espiral, sin precedente directo en la arquitectura gótica valenciana, giran alternativamente a la izquierda y a la derecha. Una inscripción latina en el friso advierte a los comerciantes de actuar con honradez.',
    datos: [
      { label: 'Estilo', val: 'Gótico civil · Siglo XV' },
      { label: 'Columnas', val: '8 helicoidales de piedra · 17 m de altura' },
      { label: 'Taula de Canvis', val: 'Primer banco municipal de España · Hoy en el Palacio de Cervelló' },
      { label: 'Inscripción', val: 'Texto latino en el friso que exige honradez a los mercaderes' },
    ],
    imgClass: 'img-salonls',
  },
  {
    num: '02',
    nombre: 'La Capilla',
    subtitulo: 'Bóveda de crucería estrellada con escudos y ángeles músicos',
    desc: 'La capilla de la Lonja conserva su espectacular bóveda de crucería estrellada, decorada con escudos heráldicos, ángeles músicos y los símbolos de los cuatro evangelistas. En la clave central aparece la Virgen de la Misericordia protegiendo a los jurados de la ciudad. Sus ventanas góticas muestran dragones y figuras fantásticas, y la puerta de entrada está ricamente labrada con filigranas góticas y la imagen de Cristo Rey.',
    datos: [
      { label: 'Bóveda', val: 'Crucería estrellada · Decorada con escudos y ángeles músicos' },
      { label: 'Clave central', val: 'Virgen de la Misericordia protegiendo a los jurados de Valencia' },
      { label: 'Ventanas', val: 'Tracería gótica con dragones y figuras fantásticas' },
      { label: 'Puerta', val: 'Labrada con filigranas góticas y la imagen de Cristo Rey' },
    ],
    imgClass: 'img-capillals',
  },
  {
    num: '03',
    nombre: 'El Torreón',
    subtitulo: 'La escalera de caracol sin eje de Pere Compte',
    desc: 'El torreón se reconoce desde la fachada por su imponente altura. Su interior alberga la famosa escalera de caracol diseñada por el maestro cantero Pere Compte, considerada una obra maestra de la ingeniería gótica: asciende hasta la terraza sin eje central, sostenida únicamente por la trabazón de sus propios peldaños. Solo se abre a visitas en ocasiones especiales.',
    datos: [
      { label: 'Arquitecto', val: 'Pere Compte · Maestro cantero y arquitecto del siglo XV' },
      { label: 'Escalera', val: 'De caracol sin eje central · Obra de ingeniería gótica única' },
      { label: 'Altura', val: 'Visible desde la fachada exterior del conjunto' },
      { label: 'Acceso', val: 'Solo en visitas especiales · Consultar calendario' },
    ],
    imgClass: 'img-torreonls',
  },
  {
    num: '04',
    nombre: 'Pabellón del Consulado del Mar',
    subtitulo: 'La Cámara Dorada · Consolat del Mar',
    desc: 'Este edificio anexo fue sede del primer tribunal de comercio marítimo de España. Su fachada combina elementos góticos y renacentistas, adornada con medallones de emperadores, reyes y personajes ilustres. En el interior destaca el Salón del Consulado, también llamado Cámara Dorada, donde el magnífico artesonado dorado y policromado del siglo XV es la gran joya del espacio: cada pieza del techo es diferente, con escenas heráldicas, fantásticas y musicales procedentes de la antigua Casa de la Ciudad.',
    datos: [
      { label: 'Función histórica', val: 'Primer tribunal de comercio marítimo de España' },
      { label: 'Fachada', val: 'Mezcla de gótico y renacentista · Medallones de emperadores' },
      { label: 'Artesonado', val: 'Dorado y policromado del siglo XV · Cada pieza es única' },
      { label: 'Procedencia', val: 'Antigua Casa de la Ciudad de Valencia' },
    ],
    imgClass: 'img-consuladols',
  },
  {
    num: '05',
    nombre: 'Patio de los Naranjos',
    subtitulo: 'Un remanso de calma en el centro histórico',
    desc: 'Un jardín íntimo y tranquilo entre las diferentes partes del monumento, con naranjos perfectamente alineados que ofrecen sombra y frescor. El Patio de los Naranjos es el espacio más sereno de la Lonja: perfecto para descansar un momento antes de continuar la visita y para contemplar el exterior de las distintas alas del monumento desde una perspectiva diferente.',
    datos: [
      { label: 'Tipo', val: 'Patio interior ajardinado con naranjos' },
      { label: 'Función', val: 'Espacio de transición entre el Salón Columnario y el Consulado' },
      { label: 'Ambiente', val: 'El más tranquilo y fresco del monumento' },
      { label: 'Recomendación', val: 'Ideal para fotografiar la arquitectura exterior de las alas' },
    ],
    imgClass: 'img-patiols',
  },
];

var datosVisita = [
  { label: 'Dirección', val: 'C/ de la Lonja, 2 · 46001 Valencia · Zona: Centro histórico' },
  { label: 'Horario', val: 'Lun–Sáb 10:00–19:00 h · Dom y Festivos 10:00–14:00 h' },
  { label: 'Precio general', val: '2 € · 1 € grupos, estudiantes, pensionistas y familias numerosas' },
  { label: 'Gratuito', val: 'Domingos, festivos nacionales y con la València Tourist Card' },
  { label: 'Audioguía', val: '2,25 € · 11 idiomas · 23 pistas (60 min) o 9 pistas (versión breve)' },
  { label: 'Signoguía', val: 'Gratuita para personas con discapacidad auditiva · Solicitar en taquilla' },
  { label: 'Duración', val: '1 h – 1 h 30 min · Accesible para personas con movilidad reducida' },
  { label: 'Autobús', val: 'Líneas 4, 7, 27, 73, 81 y C1' },
];

export default function LonjaSeda() {
  return (
    <div className="ls-page">

      {/* Hero */}
      <div className="ls-hero">
        <div className="ls-hero-overlay" />
        <div className="ls-hero-content">
          <div className="ls-eyebrow">Centro histórico · Patrimonio UNESCO · Siglo XV</div>
          <h1>La Lonja<br />de la Seda</h1>
          <p>Una de las obras más bellas del gótico civil europeo. Declarada Patrimonio de la Humanidad en 1996, la Lonja fue el escenario de las transacciones que convirtieron a Valencia en el mayor puerto comercial del Mediterráneo occidental.</p>
        </div>
        <div className="ls-hero-stats">
          <div className="ls-stat">
            <span className="ls-stat-num">1996</span>
            <span className="ls-stat-label">UNESCO</span>
          </div>
          <div className="ls-stat-sep" />
          <div className="ls-stat">
            <span className="ls-stat-num">S. XV</span>
            <span className="ls-stat-label">Gótico civil</span>
          </div>
          <div className="ls-stat-sep" />
          <div className="ls-stat">
            <span className="ls-stat-num">2 €</span>
            <span className="ls-stat-label">Entrada</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="ls-intro">
        <p>Construida entre los siglos XV y XVI, la Lonja de la Seda fue el escenario de las transacciones, acuerdos y encuentros que marcaron el destino económico de Valencia y del Mediterráneo. En pleno corazón de la ciudad, frente al Mercado Central, sigue deslumbrando con su monumentalidad, desde el Salón Columnario hasta el Patio de los Naranjos.</p>
        <p>Su decoración escultórica exterior es uno de los programas iconográficos más ricos del gótico europeo: <strong>gárgolas, demonios, animales fantásticos y figuras humanas</strong> en posturas curiosas y provocadoras recorren toda la fachada.</p>
      </div>

      {/* Espacios */}
      <div className="ls-section-title">
        <h2>Qué ver en la Lonja de la Seda</h2>
        <p>Cinco espacios únicos que conforman uno de los conjuntos góticos más completos de Europa.</p>
      </div>

      <div className="ls-routes">
        {espacios.map(esp => (
          <div className="ls-route-item" key={esp.num}>
            <div className="ls-route-num">{esp.num}</div>

            <div className="ls-route-text">
              <h2>{esp.nombre}</h2>
              <div className="ls-subtitulo">{esp.subtitulo}</div>
              <p className="ls-desc">{esp.desc}</p>

              <div className="ls-datos-titulo">Datos clave</div>
              <ul className="ls-datos">
                {esp.datos.map(d => (
                  <li key={d.label}>
                    <span className="ls-dato-label">{d.label}:</span>
                    <span className="ls-dato-val"> {d.val}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ls-route-img">
              <div className={`ls-route-img-inner ${esp.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla de información práctica */}
      <div className="ls-info-practica">
        <h3>Información práctica · La Lonja de la Seda</h3>
        <div className="ls-tabla">
          {datosVisita.map(d => (
            <div className="ls-tabla-fila" key={d.label}>
              <div className="ls-tabla-label">{d.label}</div>
              <div className="ls-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Audioguía */}
      <div className="ls-audioguia-box">
        <div className="ls-audioguia-icono"></div>
        <div className="ls-audioguia-content">
          <div className="ls-audioguia-titulo">Audioguía y signoguía</div>
          <p>Puedes alquilar la audioguía en la taquilla por 2,25 € o descargarla en tu móvil. Disponible en <strong>11 idiomas</strong>: español, valenciano, inglés, alemán, francés, italiano, portugués, holandés, chino, japonés y ruso. La versión completa tiene 23 pistas y dura 60 minutos; la versión corta tiene 9 pistas con los puntos más destacados. La signoguía para personas con discapacidad auditiva es completamente gratuita, solicítala en taquilla.</p>
        </div>
      </div>

      {/* Info box */}
      <div className="ls-info-box">
        <h3>Consejos para la visita</h3>
        <ul className="ls-info-list">
          <li>Los <strong>domingos y festivos nacionales la entrada es gratuita</strong> — llega pronto para evitar colas</li>
          <li>La <strong>València Tourist Card</strong> incluye acceso gratuito a la Lonja todo el año</li>
          <li>El <strong>Torreón</strong> solo se abre en ocasiones especiales: consulta el calendario en la web del Ayuntamiento</li>
          <li>La <strong>primera letra de cambio</strong> conocida en España, junto con la Taula de Canvis, se conserva en el Palacio de Cervelló</li>
          <li>El <strong>Mercado Central</strong> está frente a la Lonja: combina la visita y llegas a los dos en el mismo desplazamiento</li>
          <li>La visita en <strong>audioguía completa</strong> dura 60 minutos; con la versión breve, menos de 30</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}