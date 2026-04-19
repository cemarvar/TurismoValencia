import '../../assets/cssExperiencias/Nauticas.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var deportesAcuaticos = [
  {
    num: '01',
    nombre: 'Bautismo de Paddle Surf',
    tipo: 'Deporte acuático · 1h 30 min · Viernes, sábado y domingo · Marina de València',
    subtitulo: 'Monitor certificado · Equipo incluido · 10% dto. VTC · Todas las edades · Nivel cero',
    desc: 'El paddle surf es el deporte de agua que más ha crecido en popularidad en la Costa Mediterránea durante los últimos años y Valencia es uno de los mejores lugares del mundo para practicarlo: aguas tranquilas, clima soleado y la impresionante silueta de la Ciudad de las Artes y las Ciencias como telón de fondo. El bautismo de paddle surf dura 1 hora y 30 minutos e incluye todo el equipo necesario —tabla, remo y chaleco— y un monitor certificado que enseña las técnicas básicas de equilibrio y palada desde cero. No se requiere ninguna experiencia previa. Disponible los viernes, sábados y domingos en la Marina de València.',
    datos: [
      { d: 'Precio', v: 'Desde 25,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '1 hora 30 minutos · Viernes, sábado y domingo' },
      { d: 'Incluye', v: 'Tabla · Remo · Chaleco salvavidas · Monitor certificado · Nivel cero bienvenido' },
      { d: 'Lugar', v: 'Marina de València · Zona portuaria junto a la playa del Cabanyal · Valencia' },
    ],
    imgClass: 'img-nau-paddle',
    tags: [{ label: 'Nivel cero' }, { label: 'V-S-D' }, { label: 'Equipo incluido' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/paddle-surf',
  },
  {
    num: '02',
    nombre: 'Clase de Windsurf',
    tipo: 'Deporte acuático · 2 horas · Viernes, sábado y domingo · Marina de València',
    subtitulo: 'Monitor certificado · Material incluido · 10% dto. VTC · Viento y mar Mediterráneo',
    desc: 'El windsurf combina el equilibrio sobre la tabla con el dominio del viento y es uno de los deportes más completos y adrenalíticos del Mediterráneo. La clase introductoria de 2 horas en la Marina de València está impartida por un monitor certificado e incluye todo el material necesario: tabla de windsurf, vela, arnés y traje de neopreno si la temperatura del agua lo requiere. Se aprenden los fundamentos del equilibrio sobre la tabla, cómo orientar la vela respecto al viento y las primeras maniobras de navegación. Disponible los viernes, sábados y domingos. No se requiere experiencia previa en deportes acuáticos.',
    datos: [
      { d: 'Precio', v: 'Desde 55,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '2 horas · Viernes, sábado y domingo' },
      { d: 'Incluye', v: 'Tabla de windsurf · Vela · Arnés · Monitor certificado · Material completo' },
      { d: 'Lugar', v: 'Marina de València · Condiciones de viento óptimas en el Mediterráneo valenciano' },
    ],
    imgClass: 'img-nau-windsurf',
    tags: [{ label: 'Adrenalina' }, { label: 'V-S-D' }, { label: 'Material incluido' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/clase-windsurf',
  },
  {
    num: '03',
    nombre: 'Banana Boat',
    tipo: 'Diversión acuática · 30 minutos · Todos los días · Apto para toda la familia',
    subtitulo: 'Para toda la familia · Apto para niños · 10% dto. VTC · Diversión garantizada · Todos los días',
    desc: 'El Banana Boat es la actividad más divertida y accesible de la Marina de València: una enorme moto acuática remolca a varios pasajeros a bordo de una barca hinchable con forma de plátano a gran velocidad sobre el mar Mediterráneo. Saltos, giros y salpicaduras aseguradas. La actividad dura 30 minutos y es apta para todas las edades, incluyendo niños. No se requiere ninguna habilidad especial. Es el plan perfecto para grupos, familias o parejas que buscan diversión pura frente al mar. Disponible todos los días del año en la Marina de València.',
    datos: [
      { d: 'Precio', v: 'Desde 30,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '30 minutos · Todos los días del año' },
      { d: 'Ideal para', v: 'Familias · Grupos · Niños · Sin experiencia previa · Diversión garantizada' },
      { d: 'Lugar', v: 'Marina de València · Frente a las playas del Cabanyal y Las Arenas' },
    ],
    imgClass: 'img-nau-banana',
    tags: [{ label: 'Todos los días' }, { label: 'Familias' }, { label: '30 minutos' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/banana-boat',
  },
];

var paseosCatamaran = [
  {
    num: '04',
    nombre: 'Excursión a Vela por la costa de València',
    tipo: 'Paseo en velero · 1 hora · Operador Mundomarino · 10% dto. VTC',
    subtitulo: 'Velero · 1 hora · Costa mediterránea · Vistas desde el mar · 10% dto. VTC',
    desc: 'Una hora navegando a vela por la costa de Valencia a bordo de un velero de Mundomarino: la forma más clásica y elegante de descubrir el frente marítimo de la ciudad desde el mar. El recorrido bordea la costa valenciana ofreciendo vistas únicas del Paseo Marítimo, la playa de las Arenas y La Malvarrosa, el puerto de Valencia y la Marina de València. Una experiencia corta pero muy satisfactoria que permite conocer la relación entre Valencia y el mar de una forma completamente diferente a como se percibe desde tierra.',
    datos: [
      { d: 'Precio', v: 'Desde 18,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '1 hora · Consultar horarios y disponibilidad al reservar' },
      { d: 'Operador', v: 'Mundomarino · Salida desde la Marina de València' },
      { d: 'Incluye', v: 'Paseo en velero · Guía a bordo · Vistas panorámicas de la costa' },
    ],
    imgClass: 'img-nau-vela',
    tags: [{ label: 'Velero' }, { label: '1 hora' }, { label: 'Costa VLC' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/excursion-vela-mundomarino',
  },
  {
    num: '05',
    nombre: 'Puesta de sol en Catamarán — Mundomarino',
    tipo: 'Paseo en catamarán · 1h 30 min · Todos los días · Salida 20:00 h · Español e Inglés',
    subtitulo: 'Atardecer mediterráneo · Todos los días 20:00 h · Español e Inglés · 4,4/5 · 10% dto. VTC',
    desc: 'Una de las experiencias más románticas y espectaculares de Valencia: contemplar la puesta de sol sobre el Mediterráneo desde la cubierta de un catamarán. El paseo de 1 hora y 30 minutos zarpa a las 20:00 h todos los días del año desde la Marina de València y navega mientras el sol tiñe el horizonte de tonos dorados, naranja y rojo sobre el mar. El catamarán de Mundomarino ofrece espacio y comodidad a bordo, con guía disponible en español e inglés. Una experiencia memorable tanto para parejas como para grupos de amigos o familias.',
    datos: [
      { d: 'Precio', v: 'Desde 25,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '1 hora 30 minutos · Todos los días · Salida fija a las 20:00 h' },
      { d: 'Operador', v: 'Mundomarino · Salida desde la Marina de València · Español e Inglés' },
      { d: 'Incluye', v: 'Paseo en catamarán · Guía a bordo · Puesta de sol sobre el Mediterráneo' },
    ],
    imgClass: 'img-nau-sunset1',
    tags: [{ label: '4,4/5 ' }, { label: 'Todos los días' }, { label: '20:00 h' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/puesta-sol-mundomarino',
  },
  {
    num: '06',
    nombre: 'Puesta de Sol en Catamarán — Boramar',
    tipo: 'Paseo en catamarán · 1h 30 min · Todos los días · Salida 20:00 h · Operador Boramar',
    subtitulo: 'Atardecer mediterráneo · Todos los días 20:00 h · 10% dto. VTC · Operador Boramar',
    desc: 'La misma experiencia mágica del atardecer sobre el Mediterráneo a bordo de un catamarán, esta vez con el operador Boramar. El paseo de 1 hora y 30 minutos zarpa también a las 20:00 h todos los días desde la Marina de València, ofreciendo unas vistas del skyline de Valencia desde el mar y el espectáculo del sol hundiéndose en el horizonte que resultan difíciles de olvidar. Una segunda opción para quienes no encuentran disponibilidad en el catamarán de Mundomarino o prefieren el servicio de Boramar.',
    datos: [
      { d: 'Precio', v: 'Desde 26,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '1 hora 30 minutos · Todos los días · Salida fija a las 20:00 h' },
      { d: 'Operador', v: 'Boramar · Salida desde la Marina de València' },
      { d: 'Incluye', v: 'Paseo en catamarán · Puesta de sol sobre el Mediterráneo · Vistas panorámicas' },
    ],
    imgClass: 'img-nau-sunset2',
    tags: [{ label: 'Todos los días' }, { label: '20:00 h' }, { label: 'Boramar' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/puesta-sol-catamaran-boramar',
  },
  {
    num: '07',
    nombre: 'Crucero con Comida',
    tipo: 'Crucero gastronómico · Operador Boramar · Comida a bordo · 10% dto. VTC',
    subtitulo: 'Comida incluida · Vistas al Mediterráneo · Marina de València · 10% dto. VTC · Operador Boramar',
    desc: 'La experiencia náutica más completa de la Marina de València: un crucero a bordo de un barco de Boramar que incluye una comida con vistas al mar Mediterráneo. La combinación de la navegación frente a la costa valenciana con la gastronomía a bordo convierte este plan en una de las experiencias más especiales que se pueden vivir en Valencia. Ideal para celebraciones, aniversarios, cumpleaños o simplemente para disfrutar de un almuerzo diferente con el mar como protagonista. Consultar disponibilidad y horarios en el momento de la reserva.',
    datos: [
      { d: 'Precio', v: 'Desde 40,00 € · Comida incluida a bordo · 10% de descuento con Valencia Tourist Card' },
      { d: 'Operador', v: 'Boramar · Salida desde la Marina de València · Consultar horarios disponibles' },
      { d: 'Incluye', v: 'Crucero en barco + comida a bordo · Vistas al Mediterráneo desde el mar' },
      { d: 'Ideal para', v: 'Celebraciones · Aniversarios · Cumpleaños · Grupos · Experiencias especiales' },
    ],
    imgClass: 'img-nau-crucero',
    tags: [{ label: 'Comida incluida' }, { label: 'Boramar' }, { label: 'Celebraciones' }],
    url: 'https://www.visitvalencia.com/shop/actividades-nauticas/crucero-comida-boramar',
  },
];

var datosUtiles = [
  { label: 'Lugar', val: 'Marina de València · Puerto deportivo · Junto a la playa del Cabanyal y Las Arenas' },
  { label: 'Temporada', val: 'Actividades disponibles todo el año · Mayor oferta de abril a octubre · Algunos servicios solo fines de semana' },
  { label: 'Compra', val: 'Online en visitvalencia.com · Bono imprimible o en el móvil · Reservar con antelación en verano' },
  { label: 'VTC descuento', val: '10% de descuento en todas las actividades con la Valencia Tourist Card · Individual e intransferible' },
  { label: 'Cómo llegar', val: 'Metro L6, L7, L8 parada Marina Real · Bus 19, 31, 32 · Carril bici desde el Jardín del Turia' },
  { label: 'Cancelaciones', val: 'Cambio de fecha posible con 48 h de antelación · vlcshop@visitvalencia.com · No reembolso' },
];

export default function Nauticas() {
  return (
    <div className="nau-page">

      {/* Hero */}
      <div className="nau-hero">
        <div className="nau-hero-overlay" />
        <div className="nau-hero-content">
          <div className="nau-eyebrow">Experiencias náuticas · Marina de València · Mediterráneo</div>
          <h1>Actividades<br />náuticas en<br />Valencia</h1>
          <p>Un crucero a vela, una tarde de paddle surf, una ruta en moto de agua o la puesta de sol sobre el Mediterráneo desde un catamarán. El mar de Valencia te espera.</p>
        </div>
        <div className="nau-hero-stats">
          <div className="nau-stat">
            <span className="nau-stat-num">7</span>
            <span className="nau-stat-label">Actividades</span>
          </div>
          <div className="nau-stat-sep" />
          <div className="nau-stat">
            <span className="nau-stat-num">Desde 18€</span>
            <span className="nau-stat-label">Por persona</span>
          </div>
          <div className="nau-stat-sep" />
          <div className="nau-stat">
            <span className="nau-stat-num">365</span>
            <span className="nau-stat-label">Días al año</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="nau-intro-box">
        <div className="nau-intro-content">
          <div className="nau-intro-titulo">La Marina de València · El mar a un paso del centro</div>
          <p>La <strong>Marina de València</strong> es el punto de partida de todas las actividades náuticas de la ciudad. Situada junto a las playas del Cabanyal y Las Arenas, a apenas 20 minutos en metro desde el centro histórico, es uno de los puertos deportivos más activos del Mediterráneo occidental. Desde aquí parten excursiones en velero, paseos en catamarán al atardecer, clases de paddle surf y windsurf, y todo tipo de deportes acuáticos con el <strong>Mediterráneo valenciano</strong> como escenario. Visit València ofrece una selección de las mejores actividades náuticas, todas con <strong>10% de descuento</strong> para los titulares de la Valencia Tourist Card.</p>
        </div>
      </div>

      {/* Section title deportes */}
      <div className="nau-section-title">
        <h2>Deportes acuáticos</h2>
        <p>Paddle surf, windsurf y banana boat para los que buscan adrenalina y diversión en el agua.</p>
      </div>

      {/* Deportes acuáticos */}
      <div className="nau-routes">
        {deportesAcuaticos.map(act => (
          <div className="nau-route-item" key={act.num}>
            <div className="nau-route-num">{act.num}</div>
            <div className="nau-route-text">
              <div className="nau-tipo">{act.tipo}</div>
              <h2>{act.nombre}</h2>
              <div className="nau-subtitulo">{act.subtitulo}</div>
              <p className="nau-desc">{act.desc}</p>
              <div className="nau-datos-titulo">Precio y datos clave</div>
              <ul className="nau-datos">
                {act.datos.map(d => (
                  <li key={d.d}>
                    <span className="nau-dato-label">{d.d}:</span>
                    <span className="nau-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="nau-tags">
                {act.tags.map(t => (
                  <span key={t.label} className="nau-tag">{t.label}</span>
                ))}
              </div>
              <a href={act.url} target="_blank" rel="noopener noreferrer" className="nau-comprar-btn">
                Reservar en visitvalencia.com →
              </a>
            </div>
            <div className="nau-route-img">
              <div className={`nau-route-img-inner ${act.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Section title paseos */}
      <div className="nau-section-title nau-section-title--paseos">
        <h2>Paseos en catamarán y velero</h2>
        <p>Excursiones a vela, atardeceres sobre el Mediterráneo y cruceros con comida desde la Marina de València.</p>
      </div>

      {/* Paseos en catamarán */}
      <div className="nau-routes">
        {paseosCatamaran.map(act => (
          <div className="nau-route-item" key={act.num}>
            <div className="nau-route-num">{act.num}</div>
            <div className="nau-route-text">
              <div className="nau-tipo">{act.tipo}</div>
              <h2>{act.nombre}</h2>
              <div className="nau-subtitulo">{act.subtitulo}</div>
              <p className="nau-desc">{act.desc}</p>
              <div className="nau-datos-titulo">Precio y datos clave</div>
              <ul className="nau-datos">
                {act.datos.map(d => (
                  <li key={d.d}>
                    <span className="nau-dato-label">{d.d}:</span>
                    <span className="nau-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="nau-tags">
                {act.tags.map(t => (
                  <span key={t.label} className="nau-tag">{t.label}</span>
                ))}
              </div>
              <a href={act.url} target="_blank" rel="noopener noreferrer" className="nau-comprar-btn">
                Reservar en visitvalencia.com →
              </a>
            </div>
            <div className="nau-route-img">
              <div className={`nau-route-img-inner ${act.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla info útil */}
      <div className="nau-info-practica">
        <h3>Información útil · Actividades náuticas en Valencia</h3>
        <div className="nau-tabla">
          {datosUtiles.map(d => (
            <div className="nau-tabla-fila" key={d.label}>
              <div className="nau-tabla-label">{d.label}</div>
              <div className="nau-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="nau-info-box">
        <h3>Consejos para las actividades náuticas en Valencia</h3>
        <ul className="nau-info-list">
          <li>La <strong>puesta de sol en catamarán a las 20:00 h</strong> es la actividad más romántica y espectacular: reserva con varios días de antelación en verano porque las plazas se agotan rápido</li>
          <li>El <strong>bautismo de paddle surf</strong> es la actividad perfecta para iniciarse: 1h30 con monitor certificado y todo el equipo incluido por solo 25 €, ideal para hacerlo en familia</li>
          <li>Si quieres la experiencia náutica más completa, el <strong>crucero con comida de Boramar</strong> combina navegación y gastronomía mediterránea en un mismo plan perfecto para celebraciones</li>
          <li>El <strong>windsurf</strong> requiere algo más de concentración que el paddle surf: es la actividad más técnica de las tres pero también la más gratificante cuando coges el ritmo del viento</li>
          <li>La <strong>Marina de València</strong> está a 20 minutos en metro desde el centro (L6, L7, L8 parada Marina Real): es mucho más cómodo que ir en coche en temporada alta</li>
          <li>Con la <strong>Valencia Tourist Card</strong> tienes un 10% de descuento en todas las actividades náuticas: compra siempre online en visitvalencia.com para el mejor precio</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}