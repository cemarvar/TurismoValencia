import '../assets/css/LaMarina.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var espacios = [
  {
    num: '01',
    nombre: 'Veles e Vents',
    tipo: 'Icono arquitectónico · Gastronomía y cultura',
    subtitulo: 'David Chipperfield y Fermín Vázquez · Copa América 2007 · 10.000 m²',
    desc: 'El edificio más emblemático de la Marina de Valencia y uno de los iconos contemporáneos de la ciudad. Diseñado por los arquitectos David Chipperfield —Premio Pritzker de Arquitectura— y Fermín Vázquez para la 32ª Copa América de 2007, su estructura minimalista de acero blanco y cristal forma plataformas horizontales escalonadas que se proyectan sobre el mar. El diseño fue concebido para que las terrazas se dieran sombra unas a otras, permitiendo disfrutar del Mediterráneo sin entornar los ojos. Su nombre viene del poema de Ausiàs March del siglo XV que narra un viaje desde Italia a Valencia por amor.',
    datos: [
      { d: 'Arquitectos', v: 'David Chipperfield (Premio Pritzker) y Fermín Vázquez' },
      { d: 'Construcción', v: '2007 · Para la 32ª Copa América de vela · 10.000 m²' },
      { d: 'Nombre', v: 'Poema de Ausiàs March (s. XV) · "Velas y Vientos"' },
      { d: 'Usos', v: 'Restaurante La Sucursal · La Marítima · Bar Malabar · Sala Amstel Art · Eventos' },
    ],
    imgClass: 'img-velesevents',
    tags: [{ label: 'Arquitectura' }, { label: 'Gastronomía' }, { label: 'Pritzker' }],
  },
  {
    num: '02',
    nombre: 'La Base y Los Tinglados',
    tipo: 'Patrimonio portuario · Innovación y cultura',
    subtitulo: 'Almacenes del siglo XX rehabilitados · Emprendimiento y creatividad',
    desc: 'Los Tinglados son las estructuras históricas que durante el siglo XX albergaron la actividad comercial del puerto de Valencia. Su fachada está decorada con pinturas de frutas como naranjas y uvas, símbolo de la exportación agrícola valenciana. Rehabilitados como espacios culturales, hoy acogen festivales, conciertos, ferias y exposiciones. La Base, antigua sede del equipo Alinghi ganador de la Copa América, es actualmente un hub de innovación y emprendimiento que concentra startups, centros de formación y el Centro Mundial de Valencia para la Alimentación Urbana Sostenible.',
    datos: [
      { d: 'Tinglados', v: 'Almacenes portuarios del s. XX · Fachada con frutas de exportación valenciana' },
      { d: 'La Base', v: 'Antigua base del equipo Alinghi · Hub de innovación y startups' },
      { d: 'Usos actuales', v: 'Festivales, conciertos, exposiciones, ferias y eventos culturales' },
      { d: 'Centro Mundial', v: 'Sede del Centro Mundial de Valencia para la Alimentación Urbana Sostenible' },
    ],
    imgClass: 'img-tinglados',
    tags: [{ label: 'Patrimonio' }, { label: 'Innovación' }, { label: 'Eventos' }],
  },
  {
    num: '03',
    nombre: 'Edificio del Reloj y las Reales Atarazanas',
    tipo: 'Patrimonio histórico · Arquitectura modernista',
    subtitulo: 'Faro modernista del puerto · Testigo de la historia marítima valenciana',
    desc: 'El Edificio del Reloj es uno de los referentes del patrimonio arquitectónico de la Marina, un testigo silencioso del paso del tiempo y de la evolución del puerto. Su torre reloj modernista es uno de los elementos más fotografiados de la zona. Las Reales Atarazanas del Grao, de estilo gótico civil, son uno de los edificios históricos mejor conservados del frente marítimo de Valencia, testimonio de la importancia que tuvo la ciudad como potencia naval mediterránea en la Edad Media. Un paseo por la Marina es un recorrido por la arquitectura de tres siglos.',
    datos: [
      { d: 'Edificio del Reloj', v: 'Arquitectura modernista · Actualmente en uso por la Autoridad Portuaria' },
      { d: 'Reales Atarazanas', v: 'Gótico civil · Astilleros medievales de la Corona de Aragón' },
      { d: 'Recorrido', v: 'Del gótico medieval al modernismo del s. XX y la vanguardia del XXI' },
      { d: 'Fotografía', v: 'La Torre del Reloj es uno de los puntos más fotogénicos de la Marina' },
    ],
    imgClass: 'img-reloj',
    tags: [{ label: 'Modernista' }, { label: 'Gótico civil' }, { label: 'Historia' }],
  },
  {
    num: '04',
    nombre: 'Actividades Náuticas · La Escuela Municipal de Vela',
    tipo: 'Deporte y ocio · Más de 40 empresas',
    subtitulo: 'Vela · Kayak · Paddle surf · Buceo · Paseos en barco · SUP Yoga',
    desc: 'La Marina de Valencia es el epicentro del deporte náutico de la ciudad. La Escuela Municipal de Vela ofrece cursos para todas las edades y niveles durante todo el año. Cerca de 40 empresas especializadas ofrecen una oferta completísima de actividades en el mar: vela, kayak, paddle surf, kite surf, buceo, remo, motos acuáticas, banana boat, Ocean Pilates, SUP Yoga y piragüismo. Para los que prefieren navegar sin practicar deporte, hay también paseos en barco con comidas a bordo, excursiones para ver la puesta de sol o salidas nocturnas. El buque escuela Juan Sebastián de Elcano, amarrado en la dársena norte, organiza visitas y cursos de navegación de altura.',
    datos: [
      { d: 'Escuela Municipal de Vela', v: 'Cursos para todas las edades · Todo el año' },
      { d: 'Actividades acuáticas', v: 'Vela, kayak, paddle surf, buceo, kite surf, remo, SUP Yoga' },
      { d: 'Paseos en barco', v: 'Excursiones con comida, puesta de sol o fiesta a bordo' },
      { d: 'Buque escuela', v: 'Juan Sebastián de Elcano · Visitas y cursos de navegación de altura' },
    ],
    imgClass: 'img-nautica',
    tags: [{ label: 'Náutica' }, { label: 'Vela' }, { label: 'Todas las edades' }],
  },
  {
    num: '05',
    nombre: 'Gastronomía y Tardeo al Mediterráneo',
    tipo: 'Restaurantes · Terrazas · Vida nocturna',
    subtitulo: 'Más de 15 restaurantes · Tardeo · Arroces mediterráneos · Cócteles al atardecer',
    desc: 'La Marina de Valencia concentra más de 15 restaurantes con vistas al Mediterráneo, desde la alta cocina del Restaurante La Sucursal en el Veles e Vents —con dos Soles Repsol— hasta chiringuitos y arrocerías en la línea de playa. La moda del "tardeo" —una tarde con copa, picoteo y música en directo frente al mar— es especialmente popular aquí: la Marina Beach Club es uno de los locales de referencia, con restaurante, coctelería y pista al aire libre. Las terrazas del Veles e Vents y el bar Malabar son perfectas para el aperitivo. El atardecer sobre el Mediterráneo desde cualquiera de estas terrazas es uno de los mejores planos de Valencia.',
    datos: [
      { d: 'La Sucursal', v: 'Alta cocina · Dos Soles Repsol · Vistas al mar desde el Veles e Vents' },
      { d: 'Marina Beach Club', v: 'Restaurante + coctelería + discoteca · Todo el día · Frente al mar' },
      { d: 'Tardeo', v: 'Copa + picoteo + música en directo · Especialmente popular en verano' },
      { d: 'Arroces', v: 'Varios restaurantes con arroces tradicionales valencianos y pescado de lonja' },
    ],
    imgClass: 'img-gastronomia',
    tags: [{ label: 'Gastronomía' }, { label: 'Tardeo' }, { label: 'Atardecer' }],
  },
  {
    num: '06',
    nombre: 'Casa de la Copa · Historia de la Copa América',
    tipo: 'Historia náutica · Exposición permanente',
    subtitulo: '32ª y 33ª Copa América (2007 y 2010) · Primer Gran Premio de Fórmula 1 urbano',
    desc: 'Valencia fue sede de las ediciones 32ª (2007) y 33ª (2010) de la Copa América, la competición náutica más antigua del mundo. Fue la primera vez que esta regata legendaria —celebrada ininterrumpidamente desde 1851— se disputó en Europa y en un país diferente al del defensor. La Marina Real Juan Carlos I acogió al mayor número de equipos en toda la historia de la competición, con equipos de los cinco continentes. La Casa de la Copa conserva la historia de esta etapa dorada de Valencia en el Mediterráneo. El circuito urbano de Fórmula 1 que discurría por las calles del puerto entre 2008 y 2012 es otro capítulo singular de esta época.',
    datos: [
      { d: '32ª Copa América', v: '2007 · Primera edición europea · Alinghi (Suiza) vs. Team New Zealand' },
      { d: '33ª Copa América', v: '2010 · Segunda edición en Valencia · BMW Oracle Racing vence al Alinghi' },
      { d: 'Fórmula 1', v: 'Gran Premio de Europa en circuito urbano · 2008–2012' },
      { d: 'Casa de la Copa', v: 'Exposición permanente sobre la historia de la Copa América en Valencia' },
    ],
    imgClass: 'img-copamerica',
    tags: [{ label: 'Copa América' }, { label: '2007' }, { label: 'Historia' }],
  },
];

var actividades = [
  { nombre: 'Vela', icono: '⛵' },
  { nombre: 'Kayak', icono: '🚣' },
  { nombre: 'Paddle surf', icono: '🏄' },
  { nombre: 'Buceo', icono: '🤿' },
  { nombre: 'Kite surf', icono: '🪁' },
  { nombre: 'Remo', icono: '🛶' },
  { nombre: 'SUP Yoga', icono: '🧘' },
  { nombre: 'Moto acuática', icono: '💨' },
  { nombre: 'Banana boat', icono: '🍌' },
  { nombre: 'Paseo en barco', icono: '🚢' },
  { nombre: 'Puesta de sol', icono: '🌅' },
  { nombre: 'Pesca de altura', icono: '🎣' },
];

var datosVisita = [
  { label: 'Ubicación', val: 'Marina Real Juan Carlos I · Junto a la Playa de las Arenas · Poblados Marítimos' },
  { label: 'Acceso', val: 'Metro L5, L6, L7, L8 parada Marina Reial Joan Carles I · Bus 4, 19, 92, 93' },
  { label: 'A pie o en bici', val: '5 km del centro · 1 hora a pie por terreno plano · Carril bici desde el Jardín del Turia' },
  { label: 'Entrada', val: 'Acceso libre y gratuito · Los espacios interiores tienen su propia tarifa' },
  { label: 'Veles e Vents', val: 'Abierto al público · Consultar horarios de restaurantes y sala cultural' },
  { label: 'Mejor momento', val: 'Tardes de fines de semana para el tardeo · Noches de verano · Amaneceres entre semana' },
  { label: 'Parking', val: 'Interior del Veles e Vents · Marina Norte (frente a Restaurante Panorama) · Tinglados 4 y 5' },
  { label: 'Eventos', val: 'Consultar agenda en lamarinadevalencia.com · Festivales, conciertos y regatas todo el año' },
];

export default function LaMarina() {
  return (
    <div className="lmv-page">

      {/* Hero */}
      <div className="lmv-hero">
        <div className="lmv-hero-overlay" />
        <div className="lmv-hero-content">
          <div className="lmv-eyebrow">Poblados Marítimos · Frente al Mediterráneo · Marina Real Juan Carlos I</div>
          <h1>La Marina<br />de Valencia</h1>
          <p>El balcón marítimo de Valencia. Un antiguo puerto reinventado donde la arquitectura vanguardista, la náutica, la gastronomía y la cultura se encuentran frente al Mediterráneo.</p>
        </div>
        <div className="lmv-hero-stats">
          <div className="lmv-stat">
            <span className="lmv-stat-num">2007</span>
            <span className="lmv-stat-label">Copa América</span>
          </div>
          <div className="lmv-stat-sep" />
          <div className="lmv-stat">
            <span className="lmv-stat-num">+15</span>
            <span className="lmv-stat-label">restaurantes</span>
          </div>
          <div className="lmv-stat-sep" />
          <div className="lmv-stat">
            <span className="lmv-stat-num">+40</span>
            <span className="lmv-stat-label">empresas náuticas</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="lmv-intro">
        <p>La Marina de Valencia es el resultado de una transformación extraordinaria: un antiguo puerto comercial convertido en el mayor espacio de ocio, cultura y náutica frente al Mediterráneo en España. Todo comenzó cuando Valencia fue elegida sede de la 32ª Copa América de vela en 2007 —la primera vez que esta competición de más de 150 años se celebraba en Europa—, lo que impulsó una renovación total de la infraestructura portuaria.</p>
        <p>Hoy la Marina combina la arquitectura vanguardista del Veles e Vents con el patrimonio histórico de los Tinglados y el Edificio del Reloj, más de 15 restaurantes con vistas al mar, cerca de <strong>40 empresas de actividades náuticas</strong> y una agenda cultural que incluye festivales, conciertos y exposiciones durante todo el año. El acceso es completamente gratuito.</p>
      </div>

      {/* Actividades náuticas chips */}
      <div className="lmv-actividades-wrap">
        <div className="lmv-actividades-titulo">Actividades náuticas disponibles</div>
        <div className="lmv-actividades-grid">
          {actividades.map(a => (
            <div className="lmv-actividad-chip" key={a.nombre}>
              <span className="lmv-actividad-icono">{a.icono}</span>
              <span className="lmv-actividad-nombre">{a.nombre}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Espacios */}
      <div className="lmv-section-title">
        <h2>Qué ver en la Marina de Valencia</h2>
        <p>Seis espacios que combinan arquitectura, historia, náutica y gastronomía frente al Mediterráneo.</p>
      </div>

      <div className="lmv-routes">
        {espacios.map(esp => (
          <div className="lmv-route-item" key={esp.num}>
            <div className="lmv-route-num">{esp.num}</div>

            <div className="lmv-route-text">
              <div className="lmv-tipo">{esp.tipo}</div>
              <h2>{esp.nombre}</h2>
              <div className="lmv-subtitulo">{esp.subtitulo}</div>
              <p className="lmv-desc">{esp.desc}</p>

              <div className="lmv-datos-titulo">Datos clave</div>
              <ul className="lmv-datos">
                {esp.datos.map(d => (
                  <li key={d.d}>
                    <span className="lmv-dato-label">{d.d}:</span>
                    <span className="lmv-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="lmv-tags">
                {esp.tags.map(t => (
                  <span key={t.label} className="lmv-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="lmv-route-img">
              <div className={`lmv-route-img-inner ${esp.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="lmv-info-practica">
        <h3>Información práctica · La Marina de Valencia</h3>
        <div className="lmv-tabla">
          {datosVisita.map(d => (
            <div className="lmv-tabla-fila" key={d.label}>
              <div className="lmv-tabla-label">{d.label}</div>
              <div className="lmv-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="lmv-info-box">
        <h3>Consejos para visitar la Marina</h3>
        <ul className="lmv-info-list">
          <li>El <strong>tardeo</strong> (tarde + copa + música) es la forma más valenciana de disfrutar la Marina: de 17:00 a 21:00 h en verano</li>
          <li>Las <strong>terrazas del Veles e Vents</strong> son ideales para el aperitivo: llega antes de las 14:00 h los fines de semana</li>
          <li>Para las <strong>actividades náuticas</strong> reserva con antelación, sobre todo en verano: muchas empresas se agotan el fin de semana</li>
          <li>El <strong>atardecer desde la Marina</strong> con las embarcaciones amarradas es uno de los mejores planos de Valencia: llega 30 min antes</li>
          <li>Ve en <strong>metro o bicicleta</strong>: el parking puede ser complicado en verano. La línea L5-L6 te deja en la puerta</li>
          <li>La <strong>Escuela Municipal de Vela</strong> ofrece cursos desde niños hasta adultos: consulta la agenda en lamarinadevalencia.com</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}