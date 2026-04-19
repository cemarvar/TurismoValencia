import '../assets/css/GranFeria.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var actos = [
  {
    num: '01',
    nombre: 'Conciertos de Viveros',
    fecha: 'Del 1 al 25 de julio · Jardines del Real (Viveros)',
    subtitulo: 'La gran cita musical del verano · Pop, rock, flamenco, rap · Noche tras noche',
    desc: 'Los Conciertos de Viveros son el plato fuerte musical de la Gran Feria y uno de los festivales de verano al aire libre más populares de España. Durante casi todo el mes de julio, los Jardines del Real —conocidos popularmente como Viveros— se convierten en el escenario de artistas nacionales e internacionales de pop, rock, flamenco y rap. El aforo se llena noche tras noche con decenas de miles de personas bajo las estrellas, en uno de los entornos más bonitos de Valencia. Cada año el cartel sorprende con una mezcla de grandes referencias y nuevos talentos. El ambiente de los jardines iluminados, con los pinos centenarios de fondo y el calor del verano valenciano, hace de cada concierto una experiencia memorable.',
    dato: 'Jardines del Real (Viveros) · Del 1 al 25 de julio · Entrada de pago · Consultar cartel en granferiavalencia.com',
    imgClass: 'img-viverosgf',
    tags: [{ label: 'Música en directo' }, { label: 'Jardines del Real' }, { label: 'Todo julio' }],
  },
  {
    num: '02',
    nombre: 'Castillos de Fuegos Artificiales',
    fecha: 'Todos los sábados de julio · 23:59 h',
    subtitulo: 'Cada sábado una pirotecnia distinta · CAC, Puente de Monteolivete, Plaza del Ayuntamiento',
    desc: 'Todos los sábados del mes de julio, a las 23:59 h, el cielo de Valencia se ilumina con espectaculares castillos de fuegos artificiales disparados desde distintos puntos de la ciudad. Cada semana una pirotecnia diferente firma su espectáculo, creando una sana rivalidad que eleva la calidad de cada noche. Los mejores escenarios para verlos son el Jardín del Turia, el paseo de la Alameda y el puente de Monteolivete, con la Ciudad de las Artes y las Ciencias de fondo. El clímax llega con el castillo piromusical final —el "Mar d\'Estiu"— que clausura la Gran Feria con cientos de kilos de pólvora en un espectáculo de más de 20 minutos.',
    dato: 'Todos los sábados de julio · 23:59 h · Distintos puntos de la ciudad · Acceso libre',
    imgClass: 'img-fuegosgf',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Cada sábado' }, { label: '23:59 h' }],
  },
  {
    num: '03',
    nombre: 'Festival de Jazz de Valencia',
    fecha: 'Primera quincena de julio · Palau de la Música y escenarios urbanos',
    subtitulo: '+120 años de historia · Conciertos gratuitos · Jam sessions · Artistas internacionales',
    desc: 'El Festival de Jazz de Valencia abre cada año la Gran Feria con uno de los eventos más queridos por los valencianos. Con más de 120 años de historia, reúne a los mejores intérpretes del jazz nacional e internacional en el Palau de la Música y en escenarios al aire libre por toda la ciudad. El concierto de apertura en los Jardines del Palau es especialmente esperado y habitualmente gratuito. Las míticas jam sessions en los bares y plazas del centro, donde los músicos improvisan hasta altas horas de la noche, son el alma más auténtica del festival y un planazo para las noches de principios de julio.',
    dato: 'Primera quincena de julio · Palau de la Música + escenarios urbanos · Conciertos desde 5–20 € y gratuitos',
    imgClass: 'img-jazzgf',
    tags: [{ label: '+120 años' }, { label: 'Jazz' }, { label: 'Jam sessions' }],
  },
  {
    num: '04',
    nombre: 'Certamen Internacional de Bandas · «Ciudad de Valencia»',
    fecha: '15–19 de julio · Palau de la Música',
    subtitulo: 'Más de un siglo de competición · Bandas de toda España y Europa',
    desc: 'El Certamen Internacional de Bandas de Música "Ciudad de Valencia" es uno de los concursos de bandas más prestigiosos y longevos de España, con más de un siglo de historia. Durante varios días de mediados de julio, el Palau de la Música acoge las actuaciones de las bandas participantes, divididas en distintas secciones, que compiten ante un jurado especializado. Muchas de ellas son bandas valencianas, tradición profundamente arraigada en la cultura musical de la Comunitat Valenciana. Tanto los conciertos en concurso como las actuaciones de bandas invitadas tienen un nivel musical excepcional y una entrada muy asequible.',
    dato: '15–19 de julio · Palau de la Música · Consultar programa en granferiavalencia.com',
    imgClass: 'img-bandasgf',
    tags: [{ label: '+100 años de historia' }, { label: 'Palau de la Música' }, { label: 'Bandas valencianas' }],
  },
  {
    num: '05',
    nombre: 'Gran Nit de Juliol',
    fecha: 'Un sábado de julio · Toda la ciudad · Museos abiertos hasta la madrugada',
    subtitulo: '+30 escenarios · Museos abiertos gratis · Espectáculo piromusical · Paella y cultura',
    desc: 'La Gran Nit de Juliol es la noche más transversal de la Gran Feria: una jornada en la que toda la ciudad se convierte en un enorme escenario de cultura gratuita. Más de 30 puntos repartidos por plazas, jardines y barrios acogen simultáneamente conciertos, espectáculos de circo, teatro, magia, danza y cuentacuentos. Los museos de Valencia abren sus puertas de noche y de forma gratuita, permitiendo visitas nocturnas con actividades especiales. La noche culmina con un gran espectáculo piromusical en el Puente de Monteolivete a las 00:30 h. El Parque Central, la Plaza de la Virgen, la Plaza del Ayuntamiento y los Jardines del Palau son los escenarios más animados.',
    dato: 'Un sábado de julio · Toda la ciudad · Museos gratis · Piromusical 00:30 h en Monteolivete',
    imgClass: 'img-nitgf',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Museos nocturnos' }, { label: '+30 escenarios' }],
  },
  {
    num: '06',
    nombre: 'Batalla de Flores',
    fecha: 'Último domingo de julio · 20:00 h · Paseo de la Alameda',
    subtitulo: 'Desde 1891 · 1.200.000 claveles · 30+ carrozas · El gran broche final de la feria',
    desc: 'La Batalla de Flores es el colofón espectacular de la Gran Feria y una de las tradiciones más queridas de Valencia desde 1891. El último domingo de julio, más de 30 carrozas decoradas con flores recorren el Paseo de la Alameda mientras sus tripulantes lanzan al público más de 1.200.000 claveles. Durante cerca de una hora, centenares de miles de flores surcan el aire en todas direcciones, hasta que al final la Alameda queda cubierta por una impresionante alfombra multicolor de pétalos. El olor a flor mezclado con el calor del verano valenciano es inconfundible. La Batalla de Flores es un acto visual y sensorial que no tiene comparación en ninguna otra fiesta española.',
    dato: 'Último domingo de julio · Paseo de la Alameda · 20:00 h · Acceso libre · Desde 1891',
    imgClass: 'img-batallafloresgf',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Desde 1891' }, { label: '1,2M claveles' }],
  },
  {
    num: '07',
    nombre: 'Feria de Atracciones, Magia y Más',
    fecha: 'Todo julio · Jardines del Turia y espacios de la ciudad',
    subtitulo: 'Atracciones en el Turia · Espectáculos de magia · Moros y Cristianos · Visitas Albufera',
    desc: 'La Gran Feria llena todo julio con una programación paralela que va mucho más allá de los grandes eventos. La Feria de Atracciones se instala en el Jardín del Turia entre el Puente de las Flores y el de la Exposición, con noria, brazos giratorios y atracciones para todas las edades. Los espectáculos de magia familiar recorren mercados, plazas y calles. En el Cabanyal, la entrada de Moros y Cristianos recrea batallas históricas. De lunes a miércoles hay visitas guiadas gratuitas a la Albufera al atardecer. Y en los barrios y pedanías, cada jornada trae conciertos, cuentacuentos, circo y verbenas de barrio que son la Feria más auténtica.',
    dato: 'Jardines del Turia (entre Pte. Flores y Pte. Exposición) · Todo julio · Mayoría de actos gratuitos',
    imgClass: 'img-atraccionesgf',
    tags: [{ label: 'Familia' }, { label: 'Turia' }, { label: 'Albufera gratis' }],
  },
];

var datosUtiles = [
  { label: 'Fechas', val: 'Todo el mes de julio · Del 1 al último domingo · Semana de Viveros: 1–25 de julio' },
  { label: 'Historia', val: 'Desde el 21 de julio de 1871 · Inaugurada por el Ayuntamiento para animar la ciudad en verano' },
  { label: 'Batalla de Flores', val: 'Desde 1891 · Último domingo de julio · Paseo de la Alameda · 20:00 h · 1,2M claveles' },
  { label: 'Conciertos Viveros', val: 'Del 1 al 25 de julio · Jardines del Real · Entrada de pago · Cartel variado' },
  { label: 'Fuegos artificiales', val: 'Todos los sábados de julio · 23:59 h · Puntos distintos cada semana · Gratuitos' },
  { label: 'Festival de Jazz', val: 'Primera quincena de julio · Palau de la Música + plazas y bares del centro' },
  { label: 'Gran Nit de Juliol', val: 'Un sábado de julio · +30 escenarios · Museos gratis · Piromusical 00:30 h' },
  { label: 'Certamen Bandas', val: '15–19 de julio · Palau de la Música · Concurso internacional + bandas invitadas' },
  { label: 'Feria Atracciones', val: 'Jardines del Turia · Todo julio y hasta el 8 de agosto · Todas las edades' },
  { label: 'Acceso', val: 'La mayoría de actos de calle son gratuitos · Viveros y Jazz: entrada de pago' },
];

export default function GranFeria() {
  return (
    <div className="gf-page">

      {/* Hero */}
      <div className="gf-hero">
        <div className="gf-hero-overlay" />
        <div className="gf-hero-content">
          <div className="gf-eyebrow">Eventos · Desde 1871 · Todo el mes de julio</div>
          <h1>Gran Feria<br />de Valencia</h1>
          <p>Un mes entero de fiesta en pleno verano. Conciertos bajo las estrellas en Viveros, fuegos artificiales cada sábado, el Festival de Jazz, el Certamen de Bandas y la Batalla de Flores como espectacular broche final.</p>
        </div>
        <div className="gf-hero-stats">
          <div className="gf-stat">
            <span className="gf-stat-num">1871</span>
            <span className="gf-stat-label">primera edición</span>
          </div>
          <div className="gf-stat-sep" />
          <div className="gf-stat">
            <span className="gf-stat-num">31</span>
            <span className="gf-stat-label">días de fiesta</span>
          </div>
          <div className="gf-stat-sep" />
          <div className="gf-stat">
            <span className="gf-stat-num">1,2M</span>
            <span className="gf-stat-label">claveles en la Batalla</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="gf-intro">
        <p>La Gran Feria de Julio es la fiesta del verano valenciano: un mes entero de actividades que llenan plazas, jardines, teatros y playas con conciertos, espectáculos, fuegos artificiales y tradiciones. A diferencia de las Fallas —concentradas en 19 días de marzo— la Gran Feria se despliega con un ritmo más sostenido, con grandes noches que se alternan con programación de barrio en barrio.</p>
        <p>La mayoría de los actos callejeros son <strong>completamente gratuitos</strong>. Solo los grandes conciertos de Viveros y algunas actuaciones del Festival de Jazz tienen entrada de pago. El resto —fuegos artificiales, Batalla de Flores, Gran Nit de Juliol, Certamen de Bandas, magia, circo y verbenas— son para todo el mundo.</p>
      </div>

      {/* Actos */}
      <div className="gf-section-title">
        <h2>Los actos de la Gran Feria de Julio</h2>
        <p>Siete citas imprescindibles del verano más festivo de Valencia.</p>
      </div>

      <div className="gf-routes">
        {actos.map(acto => (
          <div className="gf-route-item" key={acto.num}>
            <div className="gf-route-num">{acto.num}</div>

            <div className="gf-route-text">
              <div className="gf-fecha-badge">{acto.fecha}</div>
              <h2>{acto.nombre}</h2>
              <div className="gf-subtitulo">{acto.subtitulo}</div>
              <p className="gf-desc">{acto.desc}</p>

              <div className="gf-dato-box">
                <span>{acto.dato}</span>
              </div>

              <div className="gf-tags">
                {acto.tags.map(t => (
                  <span key={t.label} className={`gf-tag ${t.free ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="gf-route-img">
              <div className={`gf-route-img-inner ${acto.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="gf-info-practica">
        <h3>Datos útiles · Gran Feria de Valencia</h3>
        <div className="gf-tabla">
          {datosUtiles.map(d => (
            <div className="gf-tabla-fila" key={d.label}>
              <div className="gf-tabla-label">{d.label}</div>
              <div className="gf-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="gf-info-box">
        <h3>Consejos para disfrutar la Gran Feria</h3>
        <ul className="gf-info-list">
          <li>Para la <strong>Batalla de Flores</strong> llega 1 hora antes al Paseo de la Alameda y ponte en primera fila — los claveles te los lanzan directamente</li>
          <li>Los <strong>Conciertos de Viveros</strong> se agotan: compra las entradas con antelación en granferiavalencia.com en cuanto salga el cartel</li>
          <li>La <strong>Gran Nit de Juliol</strong> es gratuita — apunta los museos que quieres visitar de noche porque se llenan rápido</li>
          <li>Los <strong>fuegos artificiales del sábado</strong> se ven perfectamente desde el Jardín del Turia y desde el Paseo de la Alameda — sin pelear por sitio</li>
          <li>El <strong>Festival de Jazz</strong> de apertura en los Jardines del Palau suele ser gratuito — es el plan más elegante de toda la feria</li>
          <li>La <strong>Feria de Atracciones del Turia</strong> está abierta hasta agosto — perfecta para las tardes de calor con niños en el río</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}