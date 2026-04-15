import { useState } from 'react';
import '../../assets/cssSostenible/MueveteValencia.css';
import Footer from '../../FOOTER/Footer';

var medios = [
  {
    num: '01',
    nombre: 'EMT · Autobús urbano',
    tipo: 'Transporte público',
    tipoClass: 'publico',
    cobertura: 'Toda la ciudad · Más de 60 líneas',
    desc: 'La Empresa Municipal de Transportes de Valencia opera la red de autobús urbano más completa de la ciudad, con más de 60 líneas que cubren todos los barrios, las playas, la Albufera y los alrededores. El sistema funciona las 24 horas con líneas nocturnas (líneas N) y es el medio más accesible para llegar a cualquier punto de Valencia sin necesidad de trasbordo.',
    detalles: [
      { d: 'Precio por trayecto', v: '1,50 € · Gratis con Tourist Card' },
      { d: 'Bono 10 viajes', v: '8,50 € · Bono sin caducidad' },
      { d: 'Líneas nocturnas', v: 'Líneas N1 a N7 · Hasta las 02:00 h' },
      { d: 'Playas', v: 'Líneas directas a Malvarrosa en verano' },
      { d: 'Albufera', v: 'Líneas 24 y 25 · Gratis con Tourist Card' },
      { d: 'App oficial', v: 'EMT Valencia: tiempo real en cada parada' },
    ],
    consejo: 'La tarjeta Móbilis integra el autobús, el metro y Valenbisi en un único soporte. Evita pagar suelto.',
    imgClass: 'img-emtmue',
    tags: [{ label: 'Toda la ciudad' }, { label: 'Nocturno' }, { label: 'Accesible' }],
  },
  {
    num: '02',
    nombre: 'Metrovalencia · Metro y tranvía',
    tipo: 'Transporte público',
    tipoClass: 'publico',
    cobertura: '9 líneas · 156 estaciones · Área metropolitana',
    desc: 'La red de Metrovalencia combina metro, tranvía y tren de cercanías en un sistema integrado con 9 líneas y 156 estaciones. Conecta el centro con los barrios periféricos, el aeropuerto (línea 3 y 5), el puerto deportivo, la Comunitat Valenciana y los municipios del área metropolitana. La línea 3 y 5 conectan directamente el aeropuerto con el centro en unos 25 minutos.',
    detalles: [
      { d: 'Precio por trayecto', v: 'Desde 1,50 € según zonas · Gratis con Tourist Card' },
      { d: 'Bono 10 viajes', v: 'Desde 8,50 € según zonas' },
      { d: 'Aeropuerto', v: 'Líneas 3 y 5 · 25 min hasta el centro' },
      { d: 'Horario', v: '05:30 – 00:30 h · Viernes y sábados hasta las 02:00 h' },
      { d: 'BIOPARC', v: 'L3/L5 Parada Nou d\'Octubre o Av. del Cid' },
      { d: 'Playa Malvarrosa', v: 'Tranvía L4 · Parada La Marina o Las Arenas' },
    ],
    consejo: 'Las líneas L3 y L5 pasan por el aeropuerto. Es la forma más rápida y económica de llegar al centro desde el aeropuerto: 25 min por 1,50 €.',
    imgClass: 'img-metromue',
    tags: [{ label: 'Aeropuerto' }, { label: 'Área metropolitana' }, { label: '9 líneas' }],
  },
  {
    num: '03',
    nombre: 'Valenbisi · Bicicleta pública',
    tipo: 'Micromovilidad',
    tipoClass: 'bici',
    cobertura: '276 estaciones · 2.750 bicicletas · 24h / 365 días',
    desc: 'Valenbisi es el servicio municipal de bicicletas compartidas de Valencia, en funcionamiento desde 2010 y gestionado por JCDecaux. Con 2.750 bicicletas repartidas en 276 estaciones por toda la ciudad, es una de las redes de bici pública más densas de España. Los primeros 30 minutos de cada trayecto son gratuitos con cualquier abono, lo que lo convierte en el transporte urbano más económico para desplazamientos cortos.',
    detalles: [
      { d: 'Abono semanal (turista)', v: '13,30 € · Ilimitado 7 días · 30 min gratis/trayecto' },
      { d: 'Abono anual', v: '29,21 € · Ilimitado 12 meses · 30 min gratis/trayecto' },
      { d: 'Abono anual combinado', v: '26 € · Válido también en MIBISI (área metropolitana)' },
      { d: 'Abono +55 años', v: '24 € · Acceso ilimitado durante un año' },
      { d: 'Exceso de tiempo', v: 'De 30 a 60 min: 1,04 € · Cada 60 min extra: 3,12 €' },
      { d: 'App oficial', v: 'Valenbisi (iOS/Android) · Disponibilidad en tiempo real' },
    ],
    consejo: 'Si tu trayecto es de menos de 30 minutos, Valenbisi es completamente gratuito con cualquier abono. Devuelve la bici en una estación y vuelve a sacarla para trayectos más largos sin coste adicional.',
    imgClass: 'img-valenbisimue',
    tags: [{ label: 'Desde 13,30 €/semana' }, { label: '30 min gratis' }, { label: '276 estaciones' }],
  },
  {
    num: '04',
    nombre: 'Alquiler de bicicletas privado',
    tipo: 'Micromovilidad',
    tipoClass: 'bici',
    cobertura: 'Centro · Jardín del Turia · Playas',
    desc: 'Varias empresas ofrecen alquiler de bicicletas en Valencia sin las restricciones horarias de Valenbisi, con opciones de bicicletas urbanas, eléctricas, de montaña y tándems. Ottowheels es una de las empresas de referencia, con alquiler de bicicletas y patinetes eléctricos y tours guiados por la ciudad. La empresa Brompton Junction ofrece las populares bicicletas plegables para llevar en el transporte público.',
    detalles: [
      { d: 'Bici urbana', v: 'Desde 10 €/día · Sin restricciones de tiempo ni estaciones' },
      { d: 'Bici eléctrica', v: 'Desde 20 €/día · Ideal para recorridos más largos' },
      { d: 'Tándem', v: 'Desde 15 €/día · Ideal para parejas y familia' },
      { d: 'Bicicleta plegable', v: 'Brompton Junction · Para combinar con metro o bus' },
      { d: 'Ottowheels', v: 'Alquiler + tours guiados en bici y patinete eléctrico' },
      { d: 'Horario', v: 'Según empresa · Generalmente 09:00–20:00 h' },
    ],
    consejo: 'Si vas a pasar más de un día en Valencia y quieres libertad total, el alquiler privado es más cómodo que Valenbisi para itinerarios largos o con paradas sin estaciones cercanas.',
    imgClass: 'img-bicimue',
    tags: [{ label: 'Desde 10 €/día' }, { label: 'Sin estaciones' }, { label: 'Eléctrica disponible' }],
  },
  {
    num: '05',
    nombre: 'Bus Turístico · The Red Bus',
    tipo: 'Turístico',
    tipoClass: 'turistico',
    cobertura: '2 rutas · 17 paradas · Todo el centro y playas',
    desc: 'El Bus Turístico de Valencia, conocido como The Red Bus, recorre las principales atracciones de la ciudad en dos rutas con autobuses de dos pisos descapotables. El billete de 24 o 48 horas permite subir y bajar en las 17 paradas cuantas veces se quiera. Es el único medio de transporte con piso superior descubierto, ideal para hacer fotos y orientarse en la ciudad el primer día. Descuentos con la Valencia Tourist Card.',
    detalles: [
      { d: 'Billete 24 h adulto', v: '26 € · Descuento con Tourist Card' },
      { d: 'Billete 24 h niño (5–15)', v: '13 € · Menores de 4 años gratis' },
      { d: 'Paradas', v: '17 paradas · IVAM, Mestalla, CAC, Oceanogràfic, Bioparc y más' },
      { d: 'Horario', v: '10:00–18:00 h · Frecuencia 30 min' },
      { d: 'Audioguía', v: 'Incluida en el billete en varios idiomas' },
      { d: 'Billete 48 h', v: '30 € aprox · Acceso ilimitado durante dos días' },
    ],
    consejo: 'El primer día en Valencia, el Bus Turístico es la manera más eficiente de orientarse en la ciudad. Coge el billete de 24h y úsalo para decidir qué lugares quieres visitar con más calma al día siguiente.',
    imgClass: 'img-busturisticomue',
    tags: [{ label: 'Sube y baja' }, { label: 'Familia' }, { label: '24/48 h' }, { label: 'Audio-guía' }],
  },
  {
    num: '06',
    nombre: 'Segway · Tours guiados',
    tipo: 'Turístico',
    tipoClass: 'turistico',
    cobertura: 'Centro histórico · Jardín del Turia · Barrios',
    desc: 'Los tours en Segway son una forma divertida y diferente de recorrer Valencia. Segway Trip Valencia ofrece rutas guiadas por el centro histórico, el Jardín del Turia, las Torres de Serranos y otros puntos emblemáticos de la ciudad. Los tours incluyen formación previa de unos 15 minutos para aprender a manejar el vehículo y son aptos para personas sin experiencia previa.',
    detalles: [
      { d: 'Tour estándar', v: 'Desde 30 € por persona · Grupos reducidos' },
      { d: 'Duración', v: '1 h – 2 h según ruta elegida' },
      { d: 'Rutas disponibles', v: 'Centro histórico, Jardín del Turia, Costa y playas' },
      { d: 'Formación previa', v: '15 min de práctica incluida antes de la ruta' },
      { d: 'Edad mínima', v: '12 años con consentimiento de padres' },
      { d: 'Reserva', v: 'Imprescindible reserva previa online' },
    ],
    consejo: 'Los tours en Segway por el casco histórico y las Torres de Serranos son especialmente populares al atardecer. Reserva con al menos un día de antelación.',
    imgClass: 'img-segwaymue',
    tags: [{ label: 'Desde 30 €' }, { label: 'Guiado' }, { label: 'Sin experiencia' }],
  },
  {
    num: '07',
    nombre: 'Patinetes eléctricos · Ottowheels',
    tipo: 'Micromovilidad',
    tipoClass: 'electrico',
    cobertura: 'Centro · Turia · Barrios · Playas',
    desc: 'Ottowheels es el operador de referencia para el alquiler de patinetes eléctricos en Valencia, apostando por el turismo sostenible. Además del alquiler libre, ofrece visitas guiadas en patinete por los rincones más emblemáticos y menos conocidos de la ciudad. Los patinetes eléctricos están permitidos en carriles bici y ciclocalles, haciendo muy ágil moverse por el Jardín del Turia y el centro histórico.',
    detalles: [
      { d: 'Alquiler por horas', v: 'Desde 10 €/h · Sin límite de distancia' },
      { d: 'Alquiler por día', v: 'Desde 25 €/día · Casco incluido' },
      { d: 'Tour guiado', v: 'Desde 25 € por persona · 1,5 h de recorrido' },
      { d: 'Requisito', v: 'Carné de conducir o DNI · Mayores de 16 años' },
      { d: 'Normativa', v: 'Obligatorio casco · Solo carriles bici y ciclocalles' },
      { d: 'Motos eléctricas', v: 'Acciona, Yego y Cooltra: motosharing por minutos' },
    ],
    consejo: 'Los patinetes eléctricos están prohibidos en aceras y zonas peatonales. El Jardín del Turia tiene carril bici continuo de 9 km ideal para recorridos en patinete.',
    imgClass: 'img-patinetemue',
    tags: [{ label: 'Sostenible' }, { label: 'Desde 10 €/h' }, { label: 'Tour disponible' }],
  },
];

var tarifasResumen = [
  { medio: 'EMT autobús', precio: '1,50 €', tipo: 'Por trayecto', tipoClass: 'publico' },
  { medio: 'Metro / Tranvía', precio: 'Desde 1,50 €', tipo: 'Por trayecto', tipoClass: 'publico' },
  { medio: 'Bono 10 viajes', precio: '8,50 €', tipo: 'Bus o Metro', tipoClass: 'publico' },
  { medio: 'Valenbisi semanal', precio: '13,30 €', tipo: '7 días · 30 min gratis', tipoClass: 'bici' },
  { medio: 'Valenbisi anual', precio: '29,21 €', tipo: '12 meses · 30 min gratis', tipoClass: 'bici' },
  { medio: 'Alquiler bici privada', precio: 'Desde 10 €', tipo: 'Por día', tipoClass: 'bici' },
  { medio: 'Bus Turístico 24 h', precio: '26 €', tipo: 'Adulto · Sube y baja', tipoClass: 'turistico' },
  { medio: 'Segway tour', precio: 'Desde 30 €', tipo: 'Por persona · 1-2 h', tipoClass: 'turistico' },
  { medio: 'Patinete eléctrico', precio: 'Desde 10 €', tipo: 'Por hora', tipoClass: 'electrico' },
  { medio: 'Tourist Card 24 h', precio: 'Desde 15,30 €', tipo: 'Transporte ilimitado + museos', tipoClass: 'especial' },
];

var categorias = [
  { id: 'todos', label: 'Todos los medios' },
  { id: 'publico', label: 'Transporte público' },
  { id: 'bici', label: 'Bicicleta' },
  { id: 'turistico', label: 'Turístico' },
  { id: 'electrico', label: 'Eléctrico' },
];

export default function MueveteValencia() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const mediosFiltrados = filtroActivo === 'todos'
    ? medios
    : medios.filter(m => m.tipoClass === filtroActivo);

  return (
    <div className="mv-page">

      {/* Hero */}
      <div className="mv-hero">
        <div className="mv-hero-overlay" />
        <div className="mv-hero-content">
          <div className="mv-eyebrow">Valencia · Movilidad · Transporte y desplazamientos</div>
          <h1>Muévete<br />por Valencia</h1>
          <p>Valencia es una ciudad plana, con más de 160 km de carril bici, una red de transporte público integrada y varias opciones para descubrir la ciudad de forma cómoda, sostenible y económica.</p>
        </div>
        <div className="mv-hero-stats">
          <div className="mv-stat">
            <span className="mv-stat-num">276</span>
            <span className="mv-stat-label">estaciones bici</span>
          </div>
          <div className="mv-stat-sep" />
          <div className="mv-stat">
            <span className="mv-stat-num">160 km</span>
            <span className="mv-stat-label">carril bici</span>
          </div>
          <div className="mv-stat-sep" />
          <div className="mv-stat">
            <span className="mv-stat-num">9</span>
            <span className="mv-stat-label">líneas metro</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mv-intro">
        <p>Valencia es una de las ciudades más cómodas de España para moverse sin coche. Su orografía completamente plana, una red de carril bici de más de 160 kilómetros, el servicio de bicicletas públicas Valenbisi y un transporte público integrado entre autobús, metro y tranvía hacen que cualquier punto de la ciudad sea accesible en pocos minutos.</p>
        <p>La <strong>Valencia Tourist Card</strong> incluye transporte ilimitado en autobús, metro, tranvía y tren de cercanías, además de acceso gratuito a los museos municipales y descuentos en las principales atracciones.</p>
      </div>

      {/* Tabla resumen de tarifas */}
      <div className="mv-tarifas-section">
        <h2 className="mv-tarifas-titulo">Resumen de tarifas</h2>
        <div className="mv-tarifas-grid">
          {tarifasResumen.map(t => (
            <div className={`mv-tarifa-item mv-tarifa-${t.tipoClass}`} key={t.medio}>
              <div className="mv-tarifa-medio">{t.medio}</div>
              <div className="mv-tarifa-precio">{t.precio}</div>
              <div className="mv-tarifa-tipo">{t.tipo}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filtros */}
      <div className="mv-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`mv-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Medios de transporte */}
      <div className="mv-routes">
        {mediosFiltrados.map(medio => (
          <div className="mv-route-item" key={medio.num}>
            <div className="mv-route-num">{medio.num}</div>

            <div className="mv-route-text">
              <div className="mv-meta-row">
                <span className="mv-icono">{medio.icono}</span>
                <span className={`mv-tipo-badge ${medio.tipoClass}`}>{medio.tipo}</span>
                <span className="mv-cobertura"> {medio.cobertura}</span>
              </div>
              <h2>{medio.nombre}</h2>
              <p className="mv-desc">{medio.desc}</p>

              <div className="mv-detalles-titulo">Precios y datos prácticos</div>
              <div className="mv-detalles-grid">
                {medio.detalles.map(det => (
                  <div className="mv-detalle-fila" key={det.d}>
                    <span className="mv-detalle-label">{det.d}</span>
                    <span className="mv-detalle-valor">{det.v}</span>
                  </div>
                ))}
              </div>

              <div className="mv-consejo">
                <span>{medio.consejo}</span>
              </div>

              <div className="mv-tags">
                {medio.tags.map(t => (
                  <span key={t.label} className="mv-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="mv-route-img">
              <div className={`mv-route-img-inner ${medio.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="mv-info-box">
        <h3>Consejos para moverte por Valencia</h3>
        <ul className="mv-info-list">
          <li>La <strong>Tourist Card</strong> incluye transporte ilimitado desde 15,30 €: rentable desde el primer día</li>
          <li><strong>Valenbisi</strong> tiene 276 estaciones: los primeros 30 min de cada trayecto son gratis con cualquier abono</li>
          <li>El <strong>metro</strong> llega al aeropuerto en 25 min por 1,50 € — la opción más barata desde el aeropuerto</li>
          <li>El <strong>Jardín del Turia</strong> tiene 9 km de carril bici continuo sin semáforos ni cruces con coches</li>
          <li>Las líneas de autobús <strong>24 y 25</strong> llegan a la Albufera y son gratuitas con Tourist Card</li>
          <li>El tranvía <strong>L4</strong> conecta el centro con las playas de la Malvarrosa directamente</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}