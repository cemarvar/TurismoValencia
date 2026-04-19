import '../../assets/cssTours/Bici.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var alquilerBicis = [
  {
    num: '01',
    nombre: 'Alquiler de bicis en Valencia',
    tipo: 'Alquiler libre · 24 horas · Todos los días · DoYouBike',
    subtitulo: 'Sin guía · A tu ritmo · ~200 km de carril bici · 10% dto. VTC · Puntuación 5/5',
    desc: 'La forma más libre de descubrir Valencia: alquila una bici durante 24 horas y explora la ciudad completamente a tu ritmo. Valencia es una de las ciudades más "bike-friendly" de España, con casi 200 kilómetros de carril bici que recorren el centro histórico, el Jardín del Turia, la Ciudad de las Artes y las Ciencias, el Paseo Marítimo y la playa. El clima suave de Valencia permite disfrutar de la bici prácticamente cualquier día del año. El operador DoYouBike gestiona el alquiler con bicicletas en buen estado y equipadas con lo necesario para la ciudad. Ideal para viajeros que prefieren explorar por su cuenta con total libertad de horarios y recorridos.',
    datos: [
      { d: 'Precio', v: 'Desde 10,00 € · Duración 24 horas · 10% de descuento con Valencia Tourist Card' },
      { d: 'Disponibilidad', v: 'Todos los días del año · Consultar punto de recogida en la reserva' },
      { d: 'Operador', v: 'DoYouBike · Bicicletas urbanas equipadas para recorrer la ciudad' },
      { d: 'Ideal para', v: 'Viajeros independientes · Exploración libre · Rutas por el Turia y la playa' },
    ],
    imgClass: 'img-bici-alquiler',
    tags: [{ label: 'Libre' }, { label: '24 horas' }, { label: '~200 km carril bici' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/alquiler-bicis-doyoubike',
  },
  {
    num: '02',
    nombre: 'Alquiler de bici con audioguía incluida',
    tipo: 'Alquiler + audioguía · 8–10 horas · Español · Inglés · Italiano · Flight Mode',
    subtitulo: 'Audioguía en 3 idiomas · Sin guía en persona · A tu ritmo · 10% dto. VTC',
    desc: 'La opción perfecta para quienes quieren la libertad de explorar sin guía pero con todo el contexto cultural e histórico de Valencia en el oído. El alquiler incluye la bici durante 8 a 10 horas y una audioguía descargable disponible en español, inglés e italiano, desarrollada por Flight Mode. La audioguía diseña una ruta autoguiada por los puntos más interesantes de la ciudad —el centro histórico, el Jardín del Turia, el barrio del Carmen, la Ciudad de las Artes y las Ciencias— con explicaciones precisas en cada parada. Sin horarios fijos, sin grupos, sin esperas. Tú marcas el ritmo.',
    datos: [
      { d: 'Precio', v: 'Desde 17,00 € · Bici + audioguía descargable · 10% de descuento con VTC' },
      { d: 'Duración', v: '8 a 10 horas · Sin horario fijo · Empieza cuando quieras' },
      { d: 'Audioguía', v: 'Español · Inglés · Italiano · Desarrollada por Flight Mode' },
      { d: 'Ideal para', v: 'Viajeros curiosos · Ritmo propio · Sin grupos · Ruta cultural autoguiada' },
    ],
    imgClass: 'img-bici-audioguia',
    tags: [{ label: 'Audioguía incluida' }, { label: '3 idiomas' }, { label: '8–10 horas' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/alquiler-bici-con-audioguia',
  },
  {
    num: '03',
    nombre: 'Alquiler de bici y paseo en barca por la Albufera',
    tipo: 'Bici + barca · 4 horas · 10:00 h · Todos los días · 10% dto. VTC · 4,8/5',
    subtitulo: 'Ciclorruta hasta la Albufera · Paseo en barca tradicional por el lago · Naturaleza y arrozales',
    desc: 'Una combinación única que fusiona el placer de pedalear con la experiencia más auténtica de la Albufera: el paseo en barca tradicional por el lago y los canales entre los arrozales. La ruta en bicicleta sale desde Valencia y recorre los caminos que conducen al Parque Natural de la Albufera, el lago más grande de España y la cuna de la paella valenciana. Al llegar al embarcadero, una barca tradicional recorre el lago y sus canales mientras el guía explica la historia y la naturaleza del parque. Una experiencia de 4 horas que combina naturaleza, cultura local y paisaje mediterráneo único. Disponible todos los días con salida a las 10:00 h.',
    datos: [
      { d: 'Precio', v: 'Desde 38,00 € · Bici + paseo en barca incluidos · 10% de descuento con VTC' },
      { d: 'Duración', v: '4 horas · Salida 10:00 h · Todos los días' },
      { d: 'Incluye', v: 'Alquiler de bici · Ciclorruta guiada hasta la Albufera · Paseo en barca tradicional' },
      { d: 'Distancia', v: 'Ruta ciclista hasta el Parque Natural de la Albufera · Terreno llano y accesible' },
    ],
    imgClass: 'img-bici-albufera-barca',
    tags: [{ label: 'Bici + Barca' }, { label: 'Albufera' }, { label: '4 horas' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/tour-easy-albufera-bike-and-boat',
  },
];

var toursGuiados = [
  {
    num: '04',
    nombre: 'Valencia Open Bike Tour',
    tipo: 'Tour guiado · 3 horas · Todos los días 10:00 h · Inglés y Neerlandés · 5/5 ',
    subtitulo: 'Guía en inglés y neerlandés · Todos los días · Bici incluida · 10% dto. VTC',
    desc: 'El tour en bicicleta más valorado de Valencia con una puntuación perfecta de 5/5. Un guía experto conduce el recorrido durante 3 horas por los rincones más emblemáticos y los barrios más auténticos de la ciudad. El Valencia Open Bike Tour recorre el centro histórico, el Jardín del Turia —el parque lineal más largo de España, trazado en el antiguo cauce del río—, el barrio de Ruzafa, la Ciudad de las Artes y las Ciencias y el Paseo Marítimo con vistas al Mediterráneo. El tour ofrece una perspectiva completa de Valencia: la ciudad medieval, la ciudad modernista, la ciudad vanguardista y la ciudad costera, todo en un mismo recorrido de tres horas que se adapta al ritmo del grupo.',
    datos: [
      { d: 'Precio', v: 'Desde 30,00 € · Bici incluida · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '3 horas · Salida diaria 10:00 h · Bici y casco incluidos' },
      { d: 'Idiomas', v: 'Inglés · Neerlandés · Guía experto local' },
      { d: 'Recorrido', v: 'Centro histórico · Jardín del Turia · Ruzafa · CAC · Paseo Marítimo' },
    ],
    imgClass: 'img-bici-open-tour',
    tags: [{ label: '5/5 ' }, { label: 'Todos los días' }, { label: 'Ciudad completa' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/open-bike-tour',
  },
  {
    num: '05',
    nombre: 'Visita guiada en bici por València con degustación de horchata y fartons',
    tipo: 'Tour guiado + degustación · 3 horas · L, V, S, D · Español e Inglés · 10% dto. VTC',
    subtitulo: 'Centro histórico · Jardín del Turia · Degustación de horchata y fartons incluida · Lunes, viernes, sábado y domingo',
    desc: 'Un tour en bicicleta por Valencia que combina los paisajes y monumentos más emblemáticos de la ciudad con una degustación auténtica de horchata de chufa y fartons, el tentempié valenciano por excelencia. El recorrido de 3 horas cruza el centro histórico y sus plazas medievales, pedalea por el Jardín del Turia y se detiene en una horchatería tradicional para disfrutar de la horchata más fresca de la ciudad. Disponible los lunes, viernes, sábados y domingos con guía en español e inglés. Una experiencia que fusiona cultura, arquitectura, naturaleza y gastronomía valenciana en un mismo paseo.',
    datos: [
      { d: 'Precio', v: 'Desde 35,00 € · Bici + degustación incluidos · 10% de descuento con VTC' },
      { d: 'Duración', v: '3 horas · Lunes, viernes, sábado y domingo' },
      { d: 'Incluye', v: 'Bici · Guía · Degustación de horchata de chufa y fartons en horchatería tradicional' },
      { d: 'Idiomas', v: 'Español · Inglés' },
    ],
    imgClass: 'img-bici-horchata',
    tags: [{ label: 'Horchata incluida' }, { label: 'Gastronomía' }, { label: 'L·V·S·D' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/visita-guiada-bici-con-degustacion-horchata',
  },
  {
    num: '06',
    nombre: 'Ruta guiada en bici a la Albufera con horchata y fartons',
    tipo: 'Ruta guiada · 4h 30 min · Martes y Jueves 09:30 h · Español e Inglés · 5/5 ',
    subtitulo: 'Ciclorruta hasta la Albufera · Horchata y fartons · Guía · 10% dto. VTC · Puntuación 5/5',
    desc: 'La ruta más completa en bicicleta desde Valencia: 4 horas y media que llevan al ciclista desde el corazón de la ciudad hasta el Parque Natural de la Albufera, con parada para degustar horchata de chufa y fartons en el camino. La ruta discurre por los carriles bici del Jardín del Turia y los caminos que rodean el lago, con vistas a los arrozales y la rica avifauna del parque natural. El guía explica a lo largo del recorrido la historia del lago, el cultivo del arroz y la relación entre la Albufera y la paella valenciana. Disponible los martes y jueves con salida a las 09:30 h. Terreno completamente llano y apto para todos los niveles.',
    datos: [
      { d: 'Precio', v: 'Desde 35,00 € · Bici + horchata y fartons + guía · 10% de descuento con VTC' },
      { d: 'Duración', v: '4 horas 30 minutos · Martes y Jueves · Salida 09:30 h' },
      { d: 'Incluye', v: 'Bici · Guía oficial · Degustación horchata y fartons · Ruta hasta la Albufera' },
      { d: 'Nivel', v: 'Terreno llano · Apto para todos los niveles · Sin desniveles significativos' },
    ],
    imgClass: 'img-bici-albufera-ruta',
    tags: [{ label: '5/5 ' }, { label: 'Albufera' }, { label: 'Horchata incluida' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/vive-la-albufera-en-bici',
  },
  {
    num: '07',
    nombre: 'Visita guiada en bicicleta',
    tipo: 'Tour guiado · 3 horas · Todos los días 11:00 h · Español y Neerlandés · 4,7/5',
    subtitulo: 'Ciudad completa · CAC · Jardín del Turia · Playa · Todos los días a las 11:00 h',
    desc: 'Un recorrido guiado en bicicleta por los puntos más icónicos de Valencia, con salida diaria a las 11:00 h. El tour de 3 horas cubre los grandes atractivos de la ciudad en un recorrido equilibrado entre historia, modernidad y costa: el centro histórico y sus plazas medievales, el Jardín del Turia, la Ciudad de las Artes y las Ciencias con sus espectaculares edificios de Calatrava y el Paseo Marítimo con vistas al Mediterráneo. Disponible en español y neerlandés con guía local. Adecuado para todos los niveles ya que Valencia es una ciudad completamente llana y dispone de una extensa red de carriles bici separados del tráfico.',
    datos: [
      { d: 'Precio', v: 'Desde 37,50 € · Bici incluida · Salida diaria a las 11:00 h' },
      { d: 'Duración', v: '3 horas · Todos los días · Salida 11:00 h' },
      { d: 'Idiomas', v: 'Español · Neerlandés · Guía local' },
      { d: 'Recorrido', v: 'Centro histórico · Jardín del Turia · Ciudad de las Artes y las Ciencias · Playa' },
    ],
    imgClass: 'img-bici-guiada',
    tags: [{ label: 'Todos los días' }, { label: '11:00 h' }, { label: 'Ciudad + playa' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/visitas-guiadas-sobre-ruedas/visitas-guiadas-en-bicicleta-valencia',
  },
];

var datosUtiles = [
  { label: 'Carril bici', val: 'Casi 200 km de carril bici · Ciudad completamente llana · Apta para todos los niveles' },
  { label: 'Jardín del Turia', val: 'El eje ciclista de Valencia · 9 km de parque lineal en el antiguo cauce del río Turia' },
  { label: 'Valenbisi', val: 'Sistema de bicicleta pública municipal · +270 estaciones · Disponible con tarjeta' },
  { label: 'Clima', val: 'Clima mediterráneo · Más de 300 días de sol al año · Ideal para la bici todo el año' },
  { label: 'VTC descuento', val: '10% dto. en la mayoría de alquileres y tours con la Valencia Tourist Card' },
  { label: 'Nivel requerido', val: 'Terreno completamente llano · Apto para cualquier persona que sepa montar en bici' },
  { label: 'Reserva', val: 'Online en visitvalencia.com · Se recomienda reservar con antelación en temporada alta' },
  { label: 'Equipamiento', val: 'Bici incluida en todos los tours · Casco disponible · Consultar en cada producto' },
];

export default function Bici() {
  return (
    <div className="bici-page">

      {/* Hero */}
      <div className="bici-hero">
        <div className="bici-hero-overlay" />
        <div className="bici-hero-content">
          <div className="bici-eyebrow">Tours en Bicicleta · Visitas guiadas sobre ruedas · Valencia Bike-Friendly</div>
          <h1>Valencia<br />en bicicleta</h1>
          <p>La ciudad más ciclista de España te espera: casi 200 km de carril bici, terreno completamente llano y el Jardín del Turia como autopista verde atravesando la ciudad de punta a punta.</p>
        </div>
        <div className="bici-hero-stats">
          <div className="bici-stat">
            <span className="bici-stat-num">~200 km</span>
            <span className="bici-stat-label">Carril bici</span>
          </div>
          <div className="bici-stat-sep" />
          <div className="bici-stat">
            <span className="bici-stat-num">7</span>
            <span className="bici-stat-label">Tours disponibles</span>
          </div>
          <div className="bici-stat-sep" />
          <div className="bici-stat">
            <span className="bici-stat-num">Desde 10€</span>
            <span className="bici-stat-label">Por persona</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="bici-intro-box">
        <div className="bici-intro-content">
          <div className="bici-intro-titulo">Valencia, capital española de la bicicleta</div>
          <p>Valencia es la ciudad <strong>más "bike-friendly"</strong> de España. Su terreno completamente plano, sus casi <strong>200 kilómetros de carril bici</strong> y el espectacular <strong>Jardín del Turia</strong> —9 km de parque lineal trazado en el antiguo cauce del río— hacen que la bicicleta sea el medio de transporte más cómodo, rápido y agradable para recorrerla. Desde el centro histórico medieval hasta la Ciudad de las Artes y las Ciencias de Calatrava, desde el barrio de Ruzafa hasta la playa del Mediterráneo: todo está conectado en bici en menos de 30 minutos. Visit València ofrece una amplia oferta de <strong>alquileres y tours guiados</strong> para todos los gustos y niveles, incluyendo rutas hasta la <strong>Albufera</strong> con paseo en barca y degustación de horchata.</p>
        </div>
      </div>

      {/* Section title alquiler */}
      <div className="bici-section-title">
        <h2>Alquiler de bicicletas</h2>
        <p>Explora Valencia a tu ritmo con bici propia durante 24 horas o con audioguía incluida.</p>
      </div>

      {/* Alquiler */}
      <div className="bici-routes">
        {alquilerBicis.map(tour => (
          <div className="bici-route-item" key={tour.num}>
            <div className="bici-route-num">{tour.num}</div>
            <div className="bici-route-text">
              <div className="bici-tipo">{tour.tipo}</div>
              <h2>{tour.nombre}</h2>
              <div className="bici-subtitulo">{tour.subtitulo}</div>
              <p className="bici-desc">{tour.desc}</p>
              <div className="bici-datos-titulo">Precio y datos clave</div>
              <ul className="bici-datos">
                {tour.datos.map(d => (
                  <li key={d.d}>
                    <span className="bici-dato-label">{d.d}:</span>
                    <span className="bici-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="bici-tags">
                {tour.tags.map(t => (
                  <span key={t.label} className="bici-tag">{t.label}</span>
                ))}
              </div>
              <a href={tour.url} target="_blank" rel="noopener noreferrer" className="bici-comprar-btn">
                Reservar en visitvalencia.com →
              </a>
            </div>
            <div className="bici-route-img">
              <div className={`bici-route-img-inner ${tour.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Section title tours guiados */}
      <div className="bici-section-title bici-section-title--guiados">
        <h2>Visitas guiadas en bicicleta</h2>
        <p>Tours con guía oficial por la ciudad, la Albufera y la costa mediterránea.</p>
      </div>

      {/* Tours guiados */}
      <div className="bici-routes">
        {toursGuiados.map(tour => (
          <div className="bici-route-item" key={tour.num}>
            <div className="bici-route-num">{tour.num}</div>
            <div className="bici-route-text">
              <div className="bici-tipo">{tour.tipo}</div>
              <h2>{tour.nombre}</h2>
              <div className="bici-subtitulo">{tour.subtitulo}</div>
              <p className="bici-desc">{tour.desc}</p>
              <div className="bici-datos-titulo">Precio y datos clave</div>
              <ul className="bici-datos">
                {tour.datos.map(d => (
                  <li key={d.d}>
                    <span className="bici-dato-label">{d.d}:</span>
                    <span className="bici-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="bici-tags">
                {tour.tags.map(t => (
                  <span key={t.label} className="bici-tag">{t.label}</span>
                ))}
              </div>
              <a href={tour.url} target="_blank" rel="noopener noreferrer" className="bici-comprar-btn">
                Reservar en visitvalencia.com →
              </a>
            </div>
            <div className="bici-route-img">
              <div className={`bici-route-img-inner ${tour.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos útiles */}
      <div className="bici-info-practica">
        <h3>Valencia en bicicleta · Información útil</h3>
        <div className="bici-tabla">
          {datosUtiles.map(d => (
            <div className="bici-tabla-fila" key={d.label}>
              <div className="bici-tabla-label">{d.label}</div>
              <div className="bici-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="bici-info-box">
        <h3>Consejos para recorrer Valencia en bicicleta</h3>
        <ul className="bici-info-list">
          <li>El <strong>Jardín del Turia</strong> es la ruta ciclista más bonita de Valencia: 9 km de parque lineal que conectan el centro histórico con la Ciudad de las Artes y las Ciencias sin ningún semáforo</li>
          <li>Si quieres ir a la <strong>playa en bici</strong>, el camino más cómodo es bajar por el Turia hasta el final y continuar por el Paseo Marítimo hasta Las Arenas o la Malvarrosa</li>
          <li>Para llegar a la <strong>Albufera</strong> desde el centro hay unos 12–15 km por caminos llanos entre arrozales; los tours guiados incluyen la bici y conocen las mejores rutas sin tráfico</li>
          <li>Con la <strong>Valencia Tourist Card</strong> tienes un 10% de descuento en la mayoría de alquileres y tours en bici de visitvalencia.com</li>
          <li>El <strong>sistema Valenbisi</strong> (bici pública municipal) tiene más de 270 estaciones: perfecto para trayectos cortos y está disponible con tarjeta de crédito sin suscripción anual</li>
          <li>Mejor hora para los tours: <strong>por la mañana temprano</strong> (9–11 h) para evitar el calor en verano y los grupos de turistas en el centro histórico</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}