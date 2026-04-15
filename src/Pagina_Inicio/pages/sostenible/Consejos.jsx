import { useState } from 'react';
import '../../assets/cssSostenible/Consejos.css';
import Footer from '../../FOOTER/Footer';

var categoriasFiltro = [
  { id: 'todos', label: 'Todos los consejos' },
  { id: 'planificacion', label: 'Planificación' },
  { id: 'movilidad', label: 'Movilidad' },
  { id: 'alojamiento', label: 'Alojamiento' },
  { id: 'gastronomia', label: 'Gastronomía' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'compras', label: 'Compras' },
];

var consejos = [
  {
    num: '01',
    categoria: 'planificacion',
    titulo: 'Organiza tu visita por barrios, no por atracciones',
    desc: 'Valencia es una ciudad compacta y completamente llana: sus barrios más interesantes están a distancias caminables entre sí. Estructura tu itinerario por zonas geográficas —casco histórico, Jardín del Turia, Ciudad de las Artes, Ruzafa, Cabanyal— en lugar de saltar de atracción en atracción por toda la ciudad. Ahorrarás tiempo, dinero en transporte y reducirás emisiones.',
    detalles: [
      { d: 'Día 1', v: 'Casco histórico: Catedral, Lonja, Mercado Central y barrio del Carmen' },
      { d: 'Día 2', v: 'Jardín del Turia y Ciudad de las Artes y las Ciencias' },
      { d: 'Día 3', v: 'Cabanyal, playas y Ruzafa por la tarde' },
    ],
    consejo_clave: 'Alojarte en el centro histórico te permitirá recorrer la mayor parte de los atractivos a pie, sin necesidad de transporte.',
    tags: ['Planificación', 'Ahorro tiempo', 'Sostenible'],
  },
  {
    num: '02',
    categoria: 'planificacion',
    titulo: 'Elige la mejor época para visitar Valencia',
    desc: 'Valencia tiene un clima mediterráneo suave todo el año, pero hay épocas más recomendables que otras según lo que busques. La primavera (marzo-mayo) y el otoño (septiembre-noviembre) son las temporadas ideales: temperaturas agradables, menos turistas y precios más ajustados. El verano es ideal para la playa pero puede ser muy caluroso para pasear. Si vienes en marzo, vive las Fallas, pero reserva con meses de antelación.',
    detalles: [
      { d: 'Primavera (mar–may)', v: 'Mejor época: 18–24 °C, Fallas en marzo, jardines en flor' },
      { d: 'Verano (jun–sep)', v: 'Playa y playas: 28–34 °C, ambiente al máximo, más turistas' },
      { d: 'Otoño (sep–nov)', v: 'Muy recomendable: 20–26 °C, tranquilidad y precios bajos' },
      { d: 'Invierno (dic–feb)', v: 'Mínimo turismo: 10–16 °C, mercados navideños y museos sin colas' },
    ],
    consejo_clave: 'Evita agosto si eres sensible al calor: las temperaturas pueden superar los 35 °C y la ciudad está muy concurrida.',
    tags: ['Mejor época', 'Clima', 'Temporada baja'],
  },
  {
    num: '03',
    categoria: 'planificacion',
    titulo: 'Descarga las apps esenciales antes de llegar',
    desc: 'Con cuatro aplicaciones en el móvil podrás moverte por Valencia de forma totalmente autónoma, sin papel y sin imprimir nada. La app de la EMT Valencia calcula rutas de autobús en tiempo real. Valenbisi muestra la disponibilidad de bicicletas en cada estación. Metrovalencia informa de horarios y líneas. Y la app de Visit Valencia tiene guías descargables, mapas y agenda cultural actualizada.',
    detalles: [
      { d: 'EMT Valencia', v: 'Rutas, horarios y paradas de autobús en tiempo real' },
      { d: 'Valenbisi', v: 'Disponibilidad de bicis en las 276 estaciones de la ciudad' },
      { d: 'Visit Valencia', v: 'Guías, mapas y agenda cultural gratuitos y descargables' },
      { d: 'Telpark', v: 'Si vienes en coche: pago del aparcamiento desde el móvil' },
    ],
    consejo_clave: 'Descarga los mapas de Visit Valencia sin conexión antes de llegar: no necesitarás datos para orientarte.',
    tags: ['Apps útiles', 'Sin papel', 'Digital'],
  },
  {
    num: '04',
    categoria: 'movilidad',
    titulo: 'Usa el transporte público integrado · Tarjeta Móbilis',
    desc: 'El sistema de transporte público de Valencia integra autobús EMT, metro Metrovalencia, tranvía y tren de cercanías en un único soporte: la Tarjeta Móbilis. Con un bono de 10 viajes (8,50 €) puedes combinar bus y metro en la zona A sin límite de transbordos. La Valencia Tourist Card incluye transporte ilimitado desde 15,30 € y es muy rentable para estancias de 2-3 días.',
    detalles: [
      { d: 'Bono 10 viajes', v: '8,50 € · Bus + Metro en zona A · Sin caducidad' },
      { d: 'Tarjeta Móbilis', v: '1–2 € · Soporte reutilizable para todos los transportes' },
      { d: 'Tourist Card 24h', v: 'Desde 15,30 € · Transporte ilimitado + museos municipales' },
      { d: 'Desde el aeropuerto', v: 'Metro L3 o L5 · 25 min · Desde 1,50 €' },
    ],
    consejo_clave: 'Olvídate del coche en la ciudad. El aparcamiento es escaso y caro. El transporte público llega a todos los puntos de interés.',
    tags: ['Transporte público', 'Económico', 'Sin coche'],
  },
  {
    num: '05',
    categoria: 'movilidad',
    titulo: 'Muévete en bicicleta por el Jardín del Turia',
    desc: 'Valencia tiene más de 160 km de carril bici y una ciudad completamente llana que hace del ciclismo urbano una opción ideal para cualquier edad y condición física. El Jardín del Turia ofrece 9 km continuos de carril bici sin coches ni semáforos que conectan el Bioparc con la Ciudad de las Artes. Valenbisi tiene 276 estaciones: los primeros 30 minutos de cada trayecto son gratuitos con cualquier abono.',
    detalles: [
      { d: 'Valenbisi semanal', v: '13,30 € · Ilimitado 7 días · 30 min gratis por trayecto' },
      { d: 'Alquiler privado', v: 'Desde 10 €/día · Sin restricciones de tiempo ni estaciones' },
      { d: 'Ruta del Turia', v: '9 km continuos sin semáforos del Bioparc a la CAC' },
      { d: 'Carril bici total', v: '160 km de red por toda la ciudad y la huerta' },
    ],
    consejo_clave: 'Si vas a pasar varios días, el abono anual de Valenbisi (29,21 €) o el semanal (13,30 €) amortizan perfectamente el coste.',
    tags: ['Bici', 'Turia', 'Gratis primeros 30 min'],
  },
  {
    num: '06',
    categoria: 'alojamiento',
    titulo: 'Alójate en el centro histórico o en tu barrio de interés',
    desc: 'La elección del alojamiento define cuánto transporte necesitarás durante tu estancia. El centro histórico (Ciutat Vella y barrio del Carmen) permite recorrer la mayoría de atractivos culturales a pie. Ruzafa es la opción para quien busca ambiente nocturno y restaurantes de barrio. El Cabanyal, junto a las playas, para quien prioriza el mar. Busca hoteles pequeños y locales: el impacto económico en la ciudad es mucho mayor que en las grandes cadenas.',
    detalles: [
      { d: 'Centro histórico', v: 'Todo a pie: Catedral, Lonja, Carmen, Mercado Central' },
      { d: 'Ruzafa', v: 'Barrio más animado: restaurantes, bares y vida nocturna' },
      { d: 'Cabanyal-Playa', v: 'Para quien prioriza el mar: playas y barrio marinero' },
      { d: 'Cerca de la CAC', v: 'Si vienes con niños y el plan gira en torno a la CAC' },
    ],
    consejo_clave: 'Consulta si el hotel tiene certificado de sostenibilidad o se ha adherido al Pacto Verde Valencia Turismo: más de 150 empresas participan.',
    tags: ['Alojamiento local', 'Centro histórico', 'Ruzafa', 'Cabanyal'],
  },
  {
    num: '07',
    categoria: 'gastronomia',
    titulo: 'Come de temporada y de proximidad · Producto Km 0',
    desc: 'La gastronomía valenciana tiene a la huerta y el Mediterráneo como despensa directa. Comer de temporada y de proximidad no es solo más sostenible: también es más sabroso y económico. Los mercados municipales son el mejor lugar para comprar producto fresco. En los restaurantes, busca los que trabajan con producto de la huerta y las DO Valencia y Utiel-Requena en vinos. La paella de domingo en El Palmar, dentro de la Albufera, es la experiencia más auténtica y de mayor kilómetro 0 posible.',
    detalles: [
      { d: 'Mercados municipales', v: 'Producto fresco de la huerta directamente del productor' },
      { d: 'Paella valenciana', v: 'En El Palmar o en restaurantes que usen arroz DO Valencia' },
      { d: 'Vinos locales', v: 'DO Valencia y DO Utiel-Requena: grandes vinos a precios locales' },
      { d: 'Horchata y fartons', v: 'La bebida más valenciana: en horchatería tradicional de Alboraya' },
    ],
    consejo_clave: 'Evita los restaurantes con fotos en el menú y carta en varios idiomas junto a monumentos: suelen ser trampas para turistas con producto de baja calidad.',
    tags: ['Km 0', 'Gastronomía local', 'Temporada', 'DO Valencia'],
  },
  {
    num: '08',
    categoria: 'gastronomia',
    titulo: 'Horarios de comidas valencianos · Aprende la cultura local',
    desc: 'Los horarios de comida en Valencia son más tardíos que en el resto de Europa. El desayuno es ligero (café con leche y tostada). La comida principal es entre las 14:00 y las 16:00 h: es el momento donde la mayoría de restaurantes tienen menú del día entre 10–15 € con primero, segundo y postre. La cena empieza a las 21:00 h y los restaurantes no abren antes de las 20:30 h. Adaptarse a estos horarios te ahorrará comer en restaurantes turísticos.',
    detalles: [
      { d: 'Desayuno', v: '08:00–10:00 h · Café con leche, tostada con aceite o churros' },
      { d: 'Menú del día', v: '14:00–16:00 h · 10–15 € con todo incluido' },
      { d: 'Aperitivo', v: '12:00–14:00 h · La cultura del vermut el fin de semana' },
      { d: 'Cena', v: '21:00–23:00 h · Los restaurantes abren a las 20:30 h' },
    ],
    consejo_clave: 'El menú del día es la mejor relación calidad-precio de Valencia: primer plato, segundo, postre, pan y bebida por 10–15 €. Busca los restaurantes donde coman los locales.',
    tags: ['Horarios', 'Menú del día', 'Cultura local', 'Economico'],
  },
  {
    num: '09',
    categoria: 'naturaleza',
    titulo: 'Respeta los espacios naturales protegidos',
    desc: 'El Parque Natural de la Albufera, las playas del Saler y la Devesa, y los parques naturales del interior tienen normas de acceso que hay que respetar. No acceder a zonas restringidas de la Albufera, mantenerse en los senderos señalizados, no abandonar residuos en las playas naturales y no molestar a la fauna son los pilares del ecoturismo responsable. El Racó de l\'Olla tiene periodos de acceso restringido para proteger a las aves nidificantes.',
    detalles: [
      { d: 'Zonas restringidas', v: 'Respetar los límites señalizados en el Racó de l\'Olla y la Devesa' },
      { d: 'Senderos señalizados', v: 'No abandonar los caminos marcados en parques naturales' },
      { d: 'Sin residuos', v: 'Las playas naturales no tienen servicio de limpieza diario' },
      { d: 'Fauna tranquila', v: 'Observar aves desde los observatorios sin ruido ni acercamiento' },
    ],
    consejo_clave: 'Para llegar a El Saler o la Albufera, usa el autobús público o la bicicleta. El coche en verano genera atascos y contamina uno de los espacios más frágiles de Valencia.',
    tags: ['Naturaleza', 'Espacios protegidos', 'Sin residuos', 'Fauna'],
  },
  {
    num: '10',
    categoria: 'compras',
    titulo: 'Compra artesanía local y recuerdos auténticos',
    desc: 'Los recuerdos más sostenibles y con más historia son los hechos en Valencia: cerámica de Manises, abanicos artesanos de Vibenca o Carbonell, complementos de seda de Ensedarte, porcelana Lladró o piezas de joyería artesanal. Evita los recuerdos de producción industrial o masiva fabricados fuera de España. Comprar artesanía local apoya a los artesanos valencianos, mantiene vivas las tradiciones y deja un impacto económico real en la ciudad.',
    detalles: [
      { d: 'Cerámica', v: 'Manises y Paterna: centros productores a 10 km del centro' },
      { d: 'Abanicos artesanos', v: 'Vibenca o Carbonell: piezas pintadas a mano en seda o encaje' },
      { d: 'Seda valenciana', v: 'Ensedarte: complementos de seda pintados a mano en Valencia' },
      { d: 'Porcelana Lladró', v: 'Fundada en Valencia en 1953: la marca española más internacional' },
    ],
    consejo_clave: 'El Mercado Central, la Plaza Redonda y el Barrio del Carmen son los mejores lugares para encontrar artesanía auténtica sin intermediarios turísticos.',
    tags: ['Artesanía', 'Made in Valencia', 'Cerámica', 'Abanicos'],
  },
  {
    num: '11',
    categoria: 'naturaleza',
    titulo: 'Usa el agua y la energía de forma responsable',
    desc: 'Valencia es una ciudad mediterránea que sufre periódicamente de estrés hídrico. En tu alojamiento, no cambies las toallas cada día si no es necesario, evita baños de larga duración y apaga el aire acondicionado cuando salgas de la habitación. En los espacios naturales, el agua de la Albufera y de los ríos de la provincia es un recurso especialmente frágil que sostiene ecosistemas únicos.',
    detalles: [
      { d: 'Toallas en hotel', v: 'Reutiliza las toallas varios días: ahorra hasta 40 litros por lavado' },
      { d: 'Aire acondicionado', v: 'Apaga al salir: el consumo energético en verano es crítico' },
      { d: 'Agua embotellada', v: 'El agua del grifo de Valencia es potable y de buena calidad' },
      { d: 'Bolsa reutilizable', v: 'Lleva tu propia bolsa para compras en mercados y tiendas' },
    ],
    consejo_clave: 'El agua del grifo en Valencia es completamente potable. Una botella reutilizable elimina decenas de plásticos durante tu estancia.',
    tags: ['Agua', 'Energía', 'Grifo potable', 'Sin plástico'],
  },
  {
    num: '12',
    categoria: 'compras',
    titulo: 'Compra en los mercados municipales, no en los supermercados',
    desc: 'Si te alojas en un apartamento o quieres picar algo fresco, los mercados municipales son infinitamente más sostenibles que los supermercados: el producto viene directo del productor o de la Lonja, sin packaging industrial, y el impacto económico queda completamente en la economía local. El Mercado Central, el de Ruzafa o el del Cabanyal están abiertos de lunes a sábado de 7:30 a 14:00 h.',
    detalles: [
      { d: 'Sin packaging industrial', v: 'Lleva bolsas reutilizables: los mercados venden sin plástico' },
      { d: 'Precio más justo', v: 'Comparable o mejor que el supermercado, con mayor calidad' },
      { d: 'Trazabilidad directa', v: 'Puedes preguntar al vendedor el origen exacto del producto' },
      { d: 'Horario matutino', v: 'Lun–Sáb de 07:00–14:00 h · Mejor ir antes de las 11:00 h' },
    ],
    consejo_clave: 'Lleva siempre bolsas de tela a los mercados. En Valencia muchos puestos ya no ofrecen bolsas de plástico y los que sí las dan, cobran.',
    tags: ['Mercados', 'Sin plástico', 'Economía local', 'Producto fresco'],
  },
];


export default function Consejos() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const consejosFiltrados = filtroActivo === 'todos'
    ? consejos
    : consejos.filter(c => c.categoria === filtroActivo);

  return (
    <div className="con-page">

      {/* Hero */}
      <div className="con-hero">
        <div className="con-hero-overlay" />
        <div className="con-hero-content">
          <div className="con-eyebrow">Valencia · Viaje responsable · Guía práctica</div>
          <h1>Consejos para<br />visitar Valencia</h1>
          <p>Los mejores consejos prácticos para aprovechar al máximo tu estancia en Valencia de forma sostenible, respetando el entorno, apoyando la economía local y dejando una huella positiva en la ciudad.</p>
        </div>
        <div className="con-hero-stats">
          <div className="con-stat">
            <span className="con-stat-num">12</span>
            <span className="con-stat-label">consejos esenciales</span>
          </div>
          <div className="con-stat-sep" />
          <div className="con-stat">
            <span className="con-stat-num">Capital</span>
            <span className="con-stat-label">Verde Europea 2024</span>
          </div>
          <div className="con-stat-sep" />
          <div className="con-stat">
            <span className="con-stat-num">150+</span>
            <span className="con-stat-label">empresas Pacto Verde</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="con-intro">
        <p>Valencia fue nombrada Capital Verde Europea 2024, el reconocimiento más importante a nivel europeo en materia de sostenibilidad urbana. La ciudad ha calculado y verificado su huella de carbono turística y más de 150 empresas se han adherido al Pacto Verde Valencia Turismo. Visitar Valencia de forma responsable es fácil: la ciudad está diseñada para ello.</p>
        <p>En esta guía encontrarás los <strong>consejos más prácticos</strong>, organizados por categorías, para que tu estancia sea cómoda, auténtica y respetuosa con el entorno y las personas que viven aquí.</p>
      </div>


      {/* Filtros */}
      <div className="con-filter-bar">
        {categoriasFiltro.map(c => (
          <button
            key={c.id}
            className={`con-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Consejos */}
      <div className="con-consejos-lista">
        {consejosFiltrados.map(consejo => (
          <div className="con-consejo-item" key={consejo.num}>

            <div className="con-consejo-header">
              <div className="con-consejo-num">{consejo.num}</div>
              <span className="con-consejo-icono">{consejo.icono}</span>
              <h2 className="con-consejo-titulo">{consejo.titulo}</h2>
            </div>

            <div className="con-consejo-body">
              <p className="con-desc">{consejo.desc}</p>

              <div className="con-detalles-grid">
                {consejo.detalles.map(det => (
                  <div className="con-detalle" key={det.d}>
                    <span className="con-detalle-label">{det.d}</span>
                    <span className="con-detalle-val">{det.v}</span>
                  </div>
                ))}
              </div>

              <div className="con-clave">
                <span>{consejo.consejo_clave}</span>
              </div>

              <div className="con-tags">
                {consejo.tags.map(t => (
                  <span key={t} className="con-tag">{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="con-info-box">
        <h3>El código del viajero responsable en Valencia</h3>
        <ul className="con-info-list">
          <li>Moverse <strong>a pie, en bici o en transporte público</strong>: el centro histórico es todo peatonal</li>
          <li><strong>Consumir en el pequeño comercio</strong>, comprar artesanía local y comer en restaurantes de barrio</li>
          <li>Usar el agua del grifo —es potable— y llevar una <strong>botella reutilizable</strong></li>
          <li>No abandonar residuos en espacios naturales ni en las playas protegidas del Parque de la Albufera</li>
          <li>Respetar los horarios de los valencianos: comer a las 14 h y cenar a las 21 h</li>
          <li>Elegir <strong>guías locales</strong> para visitas guiadas: el impacto económico en la ciudad es directo</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}