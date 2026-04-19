import '../assets/css/JardinTuria.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var zonas = [
  {
    num: '01',
    nombre: 'Parque de Cabecera y Bioparc',
    tipo: 'Extremo oeste · Naturaleza y fauna africana',
    subtitulo: 'Lago artificial · Barcas cisne · Bioparc · Bosque de Ribera',
    desc: 'El arranque oeste del Jardín del Turia es el Parque de Cabecera, diseñado para recuperar el paisaje histórico del río. Tiene tres grandes áreas: la Colina Mirador —un hito visual desde donde contemplar la ciudad—, el Bosque de Ribera que une el medio terrestre y el acuático, y el lago artificial donde puedes alquilar barcas con forma de cisne. Adyacente al Parque de Cabecera se encuentra el Bioparc, uno de los mejores zoológicos de Europa, donde la sabana africana, los bosques de Madagascar y el África ecuatorial se recrean fielmente sin rejas visibles. El tramo fue reacondicionado en 2007.',
    datos: [
      { d: 'Parque de Cabecera', v: 'Colina Mirador, Bosque de Ribera y lago artificial con barcas' },
      { d: 'Bioparc Valencia', v: 'Uno de los mejores zoos de Europa · Sabana africana · Entrada de pago' },
      { d: 'Barcas del lago', v: 'Alquiler de barcas con forma de cisne · Actividad familiar' },
      { d: 'Acceso', v: 'Metro L1 parada Nou d\'Octubre · Av. Pío Baroja' },
    ],
    imgClass: 'img-cabecerajt',
    tags: [{ label: 'Naturaleza' }, { label: 'Familia' }, { label: 'Bioparc' }],
  },
  {
    num: '02',
    nombre: 'Tramo Central · Bosque Urbano y Deporte',
    tipo: 'Tramos 4–9 · Deporte y naturaleza urbana',
    subtitulo: 'Circuit 5K · Campos deportivos · Pinos mediterráneos · Zona de Serranos',
    desc: 'Los tramos centrales del jardín combinan el "Bosque Urbano" diseñado por la Consellería de Agricultura —con miles de pinos mediterráneos que crean un verdadero bosque dentro de la ciudad— con la zona deportiva más completa del parque. El Circuit 5K Jardí del Turia, una pista de running de color tierra especialmente diseñada para corredores, discurre por estos tramos. También hay campos de rugby, béisbol, atletismo, fútbol, pistas polideportivas, skateboarding, minigolf, rocódromo, pistas de petanca y zonas de gimnasia al aire libre. El paseo de la zona de Serranos conecta directamente con las Torres de Serranos y el Barrio del Carmen.',
    datos: [
      { d: 'Circuit 5K', v: 'Pista de running exclusiva para corredores · Color tierra · Sin cruces' },
      { d: 'Deportes', v: 'Atletismo, rugby, béisbol, fútbol, skate, minigolf, petanca, rocódromo' },
      { d: 'Bosque Urbano', v: 'Miles de pinos mediterráneos · Diseño de la Consellería de Agricultura' },
      { d: 'Torres de Serranos', v: 'Acceso directo desde la zona de Serranos · Plaza de los Fueros' },
    ],
    imgClass: 'img-deportesjt',
    tags: [{ label: 'Running' }, { label: 'Deporte' }, { label: 'Familia' }],
  },
  {
    num: '03',
    nombre: 'Palau de la Música y Zona de Viveros',
    tipo: 'Tramos 10–11 · Cultura y naranjos',
    subtitulo: 'Ricardo Bofill · Naranjos y palmeras · Zona cultural',
    desc: 'El tramo del jardín junto al Palau de la Música fue diseñado por el arquitecto Ricardo Bofill con una estética elegante de naranjos, palmeras y parterres. El Palau de la Música —construido en 1987 por José María García Paredes— tiene una bóveda de cristal que busca la integración total con el jardín. En la explanada exterior, patines, patinetes y juegos de niños llenan la plaza los fines de semana. Este tramo conecta también con los Jardines del Real (Viveros), el jardín histórico de Valencia con su colección botánica y los grandes ficus centenarios. El Puente de la Exposición de Calatrava —popularmente "la peineta"— luce en este tramo.',
    datos: [
      { d: 'Palau de la Música', v: '1987 · Arquitecto García Paredes · Bóveda de cristal · Programación anual' },
      { d: 'Tramo Bofill', v: 'Naranjos, palmeras y fuentes · Diseño de Ricardo Bofill · Elegante' },
      { d: 'Jardines del Real', v: 'Viveros históricos · Árboles centenarios · Colección botánica' },
      { d: 'Puente Calatrava', v: 'Puente de la Exposición "la peineta" · 1995 · Santiago Calatrava' },
    ],
    imgClass: 'img-musicajt',
    tags: [{ label: 'Cultura' }, { label: 'Bofill' }, { label: 'Naranjos' }],
  },
  {
    num: '04',
    nombre: 'Parque Gulliver',
    tipo: 'Parque infantil · Tramo 12 · Entrada gratuita',
    subtitulo: 'Figura gigante de 70 m · Toboganes · Escaleras · Cuerdas · Gratis',
    desc: 'El Parque Gulliver es uno de los rincones más queridos de Valencia. Situado en el tramo 12, diseñado por Rafael Rivera y Manolo Martín, recrea el momento en que Gulliver llega a Liliput y es atado por los liliputienses —que, en este caso, somos los visitantes—. La figura gigante de fibra de vidrio mide 70 metros de longitud y está llena de toboganes, escaleras, rampas y cuerdas por las que los niños trepan libremente. La entrada es completamente gratuita. El parque suele abrir de 10:00 a 20:00 h (en verano hasta más tarde) y es uno de los lugares más fotogénicos de Valencia.',
    datos: [
      { d: 'Figura Gulliver', v: '70 metros de longitud · Fibra de vidrio · Toboganes y escaleras integrados' },
      { d: 'Entrada', v: 'Completamente gratuita · Sin reserva previa' },
      { d: 'Horario', v: '10:00–20:00 h aprox. · Más tarde en verano · Cerrado por mantenimiento ocasionalmente' },
      { d: 'Diseño', v: 'Rafael Rivera y Manolo Martín · Inspirado en la novela de Jonathan Swift (1726)' },
    ],
    imgClass: 'img-gulliverjt',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Familia' }, { label: 'Niños' }],
  },
  {
    num: '05',
    nombre: 'Ciudad de las Artes y las Ciencias',
    tipo: 'Extremo este · Arquitectura vanguardista de Calatrava',
    subtitulo: 'Oceanogràfic · Museu de les Ciències · Hemisfèric · Palau de les Arts · Umbracle',
    desc: 'El extremo este del Jardín del Turia desemboca en el complejo arquitectónico más icónico de Valencia: la Ciudad de las Artes y las Ciencias, diseñada por Santiago Calatrava. El Jardín conecta fluidamente con los lagos del complejo, donde estudiantes de Berklee Valencia dan conciertos gratuitos al aire libre en el ciclo "Un lago de conciertos". El Umbracle, con sus esculturas de gran formato y su jardín mediterráneo, es el nexo verde entre el parque y los edificios. Es el punto de llegada perfecto del recorrido completo del jardín.',
    datos: [
      { d: 'Conexión', v: 'El Jardín del Turia desemboca directamente en los lagos de la CAC' },
      { d: 'Conciertos gratuitos', v: '"Un lago de conciertos" · Estudiantes de Berklee Valencia · Todo el año' },
      { d: 'Umbracle', v: 'Jardín mediterráneo con esculturas · Acceso libre · Nexo verde CAC–Jardín' },
      { d: 'Acceso', v: 'Metro L5, L6, L7, L8 · Bus 15, 19, 35, 95 · A pie por el jardín: ~35 min desde centro' },
    ],
    imgClass: 'img-cacjt',
    tags: [{ label: 'Calatrava' }, { label: 'Arquitectura' }, { label: 'Vanguardia' }],
  },
  {
    num: '06',
    nombre: '18 Puentes Históricos y Modernos',
    tipo: 'Patrimonio · Del siglo XV al XXI',
    subtitulo: 'Puente de la Trinidad (s. XV) · Calatrava · Puente de las Flores',
    desc: 'El Jardín del Turia está cruzado por 18 puentes que ofrecen un recorrido involuntario por la historia de la arquitectura de Valencia. El más antiguo es el Puente de la Trinidad, de estilo gótico del siglo XV. Los más fotogénicos son los tres de Santiago Calatrava: el Puente del 9 de Octubre (1989, el primero de Calatrava), el Puente de la Exposición o "la peineta" (1995) y el Puente de l\'Assut de l\'Or o "el jamonero" (2008). El Puente de las Flores, cubierto de macetas en flor todo el año, es el más romántico. El Puente de Serranos fue recientemente peatonalizado.',
    datos: [
      { d: 'Puente de la Trinidad', v: 'Siglo XV · Estilo gótico · El más antiguo del recorrido' },
      { d: 'Puentes Calatrava', v: '9 de Octubre (1989), Exposición (1995) y Assut de l\'Or (2008)' },
      { d: 'Puente de las Flores', v: 'Cubierto de macetas en flor · El más romántico y fotogénico' },
      { d: 'Puente de Serranos', v: 'Recientemente peatonalizado · Junto a las Torres de Serranos' },
    ],
    imgClass: 'img-puentesjt',
    tags: [{ label: '18 puentes' }, { label: 'Calatrava' }, { label: 'Patrimonio' }],
  },
];

var datosVisita = [
  { label: 'Extensión', val: 'Más de 9 km de longitud · 110–123 hectáreas · El parque urbano más grande de España' },
  { label: 'Recorrido', val: 'De oeste a este: Parque de Cabecera (Bioparc) → Ciudad de las Artes y las Ciencias' },
  { label: 'Puentes', val: '18 puentes de diferentes épocas y estilos · Del gótico del s. XV a Calatrava' },
  { label: 'Entrada', val: 'Completamente gratuito · Abierto las 24 horas · Parque Gulliver gratis' },
  { label: 'En bicicleta', val: '35 min de punta a punta · Carril bici continuo sin cruzar carreteras · Valenbisi disponible' },
  { label: 'A pie', val: '2–3 horas el recorrido completo sin paradas largas · Toda la jornada con visitas' },
  { label: 'Acceso metro', val: 'L1 parada Nou d\'Octubre (Parque de Cabecera) · L5–L8 parada Alameda (zona central) · L5–L8 (CAC)' },
  { label: 'Capital Verde', val: 'El Jardín del Turia fue clave para que Valencia fuera nombrada Capital Verde Europea 2024' },
];

export default function JardinTuria() {
  return (
    <div className="jt-page">

      {/* Hero */}
      <div className="jt-hero">
        <div className="jt-hero-overlay" />
        <div className="jt-hero-content">
          <div className="jt-eyebrow">Valencia · Capital Verde Europea 2024 · El parque urbano más grande de España</div>
          <h1>Jardín<br />del Turia</h1>
          <p>9 kilómetros de parque verde que atraviesan Valencia de oeste a este por el antiguo cauce de su río. Una obra maestra del urbanismo nacida de una tragedia que se convirtió en el mayor tesoro verde de la ciudad.</p>
        </div>
        <div className="jt-hero-stats">
          <div className="jt-stat">
            <span className="jt-stat-num">9 km</span>
            <span className="jt-stat-label">de parque lineal</span>
          </div>
          <div className="jt-stat-sep" />
          <div className="jt-stat">
            <span className="jt-stat-num">18</span>
            <span className="jt-stat-label">puentes históricos</span>
          </div>
          <div className="jt-stat-sep" />
          <div className="jt-stat">
            <span className="jt-stat-num">3M+</span>
            <span className="jt-stat-label">visitas al año</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="jt-intro">
        <p>El Jardín del Turia discurre por el antiguo cauce del río durante más de nueve kilómetros libre de coches, conectando el Parque de Cabecera y el Bioparc en el oeste con la Ciudad de las Artes y las Ciencias en el este. Diseñado en 18 tramos por diferentes urbanistas y paisajistas, cada sección tiene su propio carácter: bosques de pinos, campos deportivos, jardines de naranjos y palmeras, zonas infantiles y el skyline más icónico de Valencia de fondo.</p>
        <p>El acceso es <strong>completamente gratuito</strong> y el jardín nunca cierra. Es el gimnasio al aire libre, el lugar de encuentro y el pulmón verde de toda la ciudad. Una de las razones por las que Valencia fue nombrada <strong>Capital Verde Europea 2024</strong>.</p>
      </div>

      {/* Zonas */}
      <div className="jt-section-title">
        <h2>El recorrido de oeste a este</h2>
        <p>Seis zonas del Jardín del Turia con personalidad propia, unidas por 9 km de carril verde.</p>
      </div>

      <div className="jt-routes">
        {zonas.map(zona => (
          <div className="jt-route-item" key={zona.num}>
            <div className="jt-route-num">{zona.num}</div>

            <div className="jt-route-text">
              <div className="jt-tipo">{zona.tipo}</div>
              <h2>{zona.nombre}</h2>
              <div className="jt-subtitulo">{zona.subtitulo}</div>
              <p className="jt-desc">{zona.desc}</p>

              <div className="jt-datos-titulo">Datos clave</div>
              <ul className="jt-datos">
                {zona.datos.map(d => (
                  <li key={d.d}>
                    <span className="jt-dato-label">{d.d}:</span>
                    <span className="jt-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="jt-tags">
                {zona.tags.map(t => (
                  <span key={t.label} className={`jt-tag ${t.free ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="jt-route-img">
              <div className={`jt-route-img-inner ${zona.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="jt-info-practica">
        <h3>Información práctica · Jardín del Turia</h3>
        <div className="jt-tabla">
          {datosVisita.map(d => (
            <div className="jt-tabla-fila" key={d.label}>
              <div className="jt-tabla-label">{d.label}</div>
              <div className="jt-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="jt-info-box">
        <h3>Consejos para recorrer el Jardín del Turia</h3>
        <ul className="jt-info-list">
          <li>La <strong>bicicleta</strong> es la mejor forma de recorrer los 9 km: Valenbisi tiene estaciones en todo el trayecto</li>
          <li>El <strong>Parque Gulliver</strong> es gratuito: llega a primera hora de la mañana entre semana para disfrutarlo sin colas</li>
          <li>Los <strong>conciertos gratuitos de Berklee</strong> en el lago de la CAC son especialmente emocionantes al atardecer</li>
          <li>Para <strong>running</strong>, el Circuit 5K tiene pista exclusiva señalizada de color tierra: sin bicicletas ni peatones</li>
          <li>El <strong>Puente de las Flores</strong> es el más romántico: especialmente bonito en primavera cuando los geranios están en flor</li>
          <li>La <strong>Gran Feria de Valencia</strong> en julio llena el jardín de atracciones, conciertos y fuegos artificiales</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}