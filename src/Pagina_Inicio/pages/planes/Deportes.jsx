import { useState } from 'react';
import '../../assets/cssPlanes/Deportes.css';
import Footer from '../../FOOTER/Footer';

var deportes = [
  {
    num: '01',
    nombre: 'Running · Ciudad del Running',
    categoria: 'tierra',
    nivel: 'Todos los niveles',
    ubicacion: 'Jardín del Turia · Playas · Ciudad',
    desc: 'Valencia es reconocida internacionalmente como la Ciudad del Running. El Jardín del Turia ofrece 9 kilómetros de carril continuo sin semáforos ni coches, ideal para correr a cualquier hora. La ciudad acoge más de 30 carreras al año, desde 5K populares hasta el Maratón de Valencia Trinidad Alfonso Zurich, la prueba de 42 km más rápida del mundo.',
    puntos: [
      { p: 'Jardín del Turia', d: '9 km de carril continuo, el circuito urbano más popular de la ciudad' },
      { p: 'Playas de la Malvarrosa', d: 'Ruta de 4 km por el paseo marítimo con vistas al Mediterráneo' },
      { p: 'Parque Natural del Turia', d: 'Senderos de tierra a 25 km del centro para correr en naturaleza' },
    ],
    precio: 'Gratuito · Inscripciones a carreras según prueba',
    mejor_epoca: 'Todo el año · Mejor de octubre a mayo',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Todos los niveles' }, { label: '30+ carreras/año' }],
    imgClass: 'img-runningdep',
  },
  {
    num: '02',
    nombre: 'Ciclismo y BTT',
    categoria: 'tierra',
    nivel: 'Todos los niveles',
    ubicacion: '160 km de carril bici · Jardín del Turia · Huerta · Sierra Calderona',
    desc: 'Con más de 160 kilómetros de carril bici y 40 ciclocalles, Valencia es una de las ciudades más ciclistas de España. El Jardín del Turia es el eje principal, pero la red se extiende por toda la ciudad y conecta con los caminos rurales de la Huerta y los senderos de montaña de la Sierra Calderona. El alquiler de bicicletas Valenbisi está disponible en más de 250 estaciones.',
    puntos: [
      { p: 'Carril bici del Turia', d: 'La ruta urbana más popular: 9 km del Bioparc a la CAC sin interrupciones' },
      { p: 'Anillo Verde Metropolitano', d: 'Más de 100 km de caminos rurales que rodean Valencia por la Huerta' },
      { p: 'Ruta MTB Sierra Calderona', d: 'Senderos de montaña con vistas panorámicas al Mediterráneo a 30 km' },
    ],
    precio: 'Valenbisi desde 3 €/día · Alquiler privado desde 10 €/día',
    mejor_epoca: 'Todo el año',
    tags: [{ label: 'Bici' }, { label: 'Ciudad' }, { label: 'Montaña' }, { label: '160 km carril' }],
    imgClass: 'img-ciclismodep',
  },
  {
    num: '03',
    nombre: 'Deportes náuticos y vela',
    categoria: 'agua',
    nivel: 'Todos los niveles',
    ubicacion: 'Marina de Valencia · Puerto deportivo · Playa de la Malvarrosa',
    desc: 'La Marina de Valencia y su infraestructura portuaria hacen de la ciudad uno de los grandes destinos náuticos del Mediterráneo. Vela, windsurf, kitesurf, paddleboard, kayak y motos de agua son solo algunas de las actividades disponibles. Cada año Valencia acoge eventos de primer nivel mundial como el Sail GP, el Trofeo SM La Reina y las 52 Super Series.',
    puntos: [
      { p: 'Vela y windsurf', d: 'Clubs náuticos con clases para principiantes y alquiler de embarcaciones' },
      { p: 'Paddleboard y kayak', d: 'Rutas por la Marina y las playas urbanas con alquiler desde 15 €/h' },
      { p: 'Kitesurf', d: 'La playa del Saler tiene las condiciones ideales de viento para este deporte' },
    ],
    precio: 'Clases desde 30 € · Alquiler desde 15 €/h',
    mejor_epoca: 'Abril a octubre',
    tags: [{ label: 'Agua' }, { label: 'Vela' }, { label: 'Paddle' }, { label: 'Marina' }],
    imgClass: 'img-nauticadep',
  },
  {
    num: '04',
    nombre: 'Surf y deportes de playa',
    categoria: 'agua',
    nivel: 'Principiante-Intermedio',
    ubicacion: 'Playa de la Malvarrosa · El Saler · Playa de Gandia',
    desc: 'Las playas valencianas permiten practicar surf, bodyboard, voley playa, pádel playa y fitness en la arena durante gran parte del año. Las olas en la Malvarrosa son ideales para principiantes, mientras que el Saler y las playas al sur de Valencia ofrecen condiciones más exigentes. Los torneos de vóley playa y los campeonatos de beachbol se celebran en verano en la propia playa.',
    puntos: [
      { p: 'Surf y bodyboard', d: 'Escuelas de surf en la Malvarrosa con material incluido desde 30 €' },
      { p: 'Vóley playa y beachbol', d: 'Pistas permanentes en la Malvarrosa, competiciones en verano' },
      { p: 'Fitness en la playa', d: 'Clases de yoga, crossfit y entrenamiento funcional al amanecer' },
    ],
    precio: 'Clases de surf desde 30 € · Playa gratuita',
    mejor_epoca: 'Mayo a octubre',
    tags: [{ label: 'Playa' }, { label: 'Surf' }, { label: 'Verano' }, { label: 'Vóley' }],
    imgClass: 'img-surfdep',
  },
  {
    num: '05',
    nombre: 'Fútbol · Valencia CF y Levante UD',
    categoria: 'espectador',
    nivel: 'Espectador',
    ubicacion: 'Estadio Mestalla (Valencia CF) · Estadio Ciutat de València (Levante UD)',
    desc: 'Valencia tiene dos equipos con historia y afición. El Valencia CF, con su legendario estadio de Mestalla, y el Levante UD, en el Estadio Ciutat de València. El Mestalla Forever Tour permite visitar las instalaciones del club en días sin partido. Ambos equipos compiten en las principales competiciones del fútbol español.',
    puntos: [
      { p: 'Mestalla (Valencia CF)', d: 'Capacidad para 49.430 espectadores · Mestalla Forever Tour disponible todos los días' },
      { p: 'Estadio Ciutat de València (Levante UD)', d: 'Capacidad para 25.354 espectadores en el norte de la ciudad' },
      { p: 'Mestalla Forever Tour', d: 'Visita guiada al vestuario, campo y museo del Valencia CF · Desde 16 €' },
    ],
    precio: 'Entradas desde 15 € · Tour desde 16 €',
    mejor_epoca: 'Agosto a mayo (temporada)',
    tags: [{ label: 'Fútbol' }, { label: 'Valencia CF' }, { label: 'Levante UD' }, { label: 'Tour' }],
    imgClass: 'img-futboldep',
  },
  {
    num: '06',
    nombre: 'Baloncesto · Valencia Basket',
    categoria: 'espectador',
    nivel: 'Espectador',
    ubicacion: 'Roig Arena · Pabellón Fuente de San Luis',
    desc: 'Valencia Basket es uno de los clubes de baloncesto más laureados de España, con múltiples títulos de Liga Endesa y participación habitual en la Euroliga. El Roig Arena es el nuevo pabellón del club, con capacidad para más de 9.000 espectadores y una de las mejores atmósferas del baloncesto europeo. La sección femenina es también una potencia continental.',
    puntos: [
      { p: 'Roig Arena', d: 'El nuevo pabellón con capacidad para más de 9.000 espectadores' },
      { p: 'Liga Endesa y Euroliga', d: 'Partidos internacionales de alto nivel durante toda la temporada' },
      { p: 'Sección femenina', d: 'Una de las mejores secciones de baloncesto femenino de Europa' },
    ],
    precio: 'Entradas desde 10 €',
    mejor_epoca: 'Septiembre a junio (temporada)',
    tags: [{ label: 'Baloncesto' }, { label: 'Euroliga' }, { label: 'Roig Arena' }],
    imgClass: 'img-basketdep',
  },
  {
    num: '07',
    nombre: 'Golf · Campos del Mediterráneo',
    categoria: 'tierra',
    nivel: 'Intermedio-Avanzado',
    ubicacion: 'Provincia de Valencia · 30 min del centro',
    desc: 'La provincia de Valencia tiene más de 15 campos de golf, muchos de ellos con vistas al Mediterráneo y excelentes condiciones climatológicas durante todo el año. El Club de Golf El Saler, en el Parque Natural de la Albufera, es considerado uno de los mejores campos públicos de Europa. El Golf La Sella, en Dénia, y el Club de Golf Escorpión son otras opciones de primer nivel.',
    puntos: [
      { p: 'Club de Golf El Saler', d: 'Campo público diseñado por Javier Arana junto al Parque Natural de la Albufera' },
      { p: 'Club de Golf Escorpión', d: 'Campo privado de 18 hoyos con instalaciones de primer nivel al norte de Valencia' },
      { p: 'Condiciones todo el año', d: 'El clima mediterráneo permite jugar los 365 días en condiciones óptimas' },
    ],
    precio: 'El Saler desde 60 € green fee',
    mejor_epoca: 'Todo el año · Mejor de octubre a mayo',
    tags: [{ label: 'Golf' }, { label: '15+ campos' }, { label: 'Todo el año' }],
    imgClass: 'img-golfdep',
  },
  {
    num: '08',
    nombre: 'Triatlón e IRONMAN',
    categoria: 'agua',
    nivel: 'Avanzado',
    ubicacion: 'Marina · Playa Malvarrosa · Ciudad',
    desc: 'Valencia es uno de los grandes destinos del triatlón en España. El IRONMAN 70.3 Valencia se celebra cada abril combinando natación en la Marina, ciclismo por la ciudad y running por el Jardín del Turia. En junio, el Triatlón MTRI Valencia ocupa la Playa de la Malvarrosa. El clima, la infraestructura y los recorridos hacen de Valencia una ciudad ideal para cualquier triatleta.',
    puntos: [
      { p: 'IRONMAN 70.3 Valencia', d: 'Abril: 1,9 km natación + 90 km ciclismo + 21 km running' },
      { p: 'Triatlón MTRI Valencia', d: 'Junio en la Malvarrosa, coincidiendo con los Gay Games 2026' },
      { p: 'Valencia Duatlón by MTRI', d: 'Febrero: prueba de running y ciclismo sin natación' },
    ],
    precio: 'Inscripciones desde 100 €',
    mejor_epoca: 'Febrero a junio',
    tags: [{ label: 'IRONMAN' }, { label: 'Triatlón' }, { label: 'Avanzado' }, { label: 'Natación' }],
    imgClass: 'img-triatlondep',
  },
];

var eventosAno = [
  { mes: 'Ene', nombre: '10K Valencia Ibercaja', tipo: 'running' },
  { mes: 'Feb', nombre: 'Valencia Duatlón MTRI', tipo: 'triatlon' },
  { mes: 'Mar', nombre: '10K Fem · Carrera de Empresas', tipo: 'running' },
  { mes: 'Abr', nombre: 'IRONMAN 70.3 Valencia', tipo: 'triatlon' },
  { mes: 'May', nombre: 'Gran Fondo Ciclista · Volta a Peu', tipo: 'ciclismo' },
  { mes: 'Jun', nombre: 'Carrera de la Mujer · Gay Games Triatlón', tipo: 'running' },
  { mes: 'Jul', nombre: 'Torneos Beachbol · Trofeo SM La Reina', tipo: 'nautica' },
  { mes: 'Ago', nombre: 'EuroHockey 2026', tipo: 'motor' },
  { mes: 'Sep', nombre: '15K Nocturna · Sail GP Valencia', tipo: 'nautica' },
  { mes: 'Oct', nombre: 'Medio Maratón Valencia (25.000 corredores)', tipo: 'running' },
  { mes: 'Nov', nombre: '52 Super Series · Circuit Ricardo Tormo', tipo: 'motor' },
  { mes: 'Dic', nombre: 'Maratón Valencia Trinidad Alfonso Zurich', tipo: 'running' },
];

var categorias = [
  { id: 'todos', label: 'Todos' },
  { id: 'tierra', label: 'Tierra y ciudad' },
  { id: 'agua', label: 'Agua y mar' },
  { id: 'espectador', label: 'Como espectador' },
];

export default function Deportes() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const deportesFiltrados = filtroActivo === 'todos'
    ? deportes
    : deportes.filter(d => d.categoria === filtroActivo);

  return (
    <div className="dep-page">

      {/* Hero */}
      <div className="dep-hero">
        <div className="dep-hero-overlay" />
        <div className="dep-hero-content">
          <div className="dep-eyebrow">Valencia · Deporte · 365 días sin excusas</div>
          <h1>Deporte<br />en Valencia</h1>
          <p>El clima mediterráneo, 9 kilómetros de parque lineal, 20 km de playa y 160 km de carril bici hacen de Valencia el destino ideal para practicar deporte durante todo el año.</p>
        </div>
        <div className="dep-hero-stats">
          <div className="dep-stat">
            <span className="dep-stat-num">30+</span>
            <span className="dep-stat-label">carreras/año</span>
          </div>
          <div className="dep-stat-sep" />
          <div className="dep-stat">
            <span className="dep-stat-num">160 km</span>
            <span className="dep-stat-label">carril bici</span>
          </div>
          <div className="dep-stat-sep" />
          <div className="dep-stat">
            <span className="dep-stat-num">20 km</span>
            <span className="dep-stat-label">de playa</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="dep-intro">
        <p>Valencia es mucho más que una ciudad para ver deporte. Su orografía plana, su red de carriles bici, el Jardín del Turia como circuito natural y el Mediterráneo a pie de calle la convierten en un destino activo de primer orden. El Maratón de Valencia, etiquetado como Platinum por World Athletics, es la carrera de maratón con mayor cobertura televisiva del mundo.</p>
        <p>Tanto si quieres practicar deporte durante tu visita como si vienes a ver un gran evento, Valencia tiene una <strong>agenda deportiva que no para en todo el año</strong>.</p>
      </div>

      {/* Filtros */}
      <div className="dep-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`dep-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Deportes */}
      <div className="dep-routes">
        {deportesFiltrados.map(dep => (
          <div className="dep-route-item" key={dep.num}>
            <div className="dep-route-num">{dep.num}</div>

            <div className="dep-route-text">
              <div className="dep-meta-row">
                <span className={`dep-cat-badge ${dep.categoria}`}>{dep.nivel}</span>
                <span className="dep-ubicacion">📍 {dep.ubicacion}</span>
              </div>
              <h2>{dep.nombre}</h2>
              <p className="dep-desc">{dep.desc}</p>

              <div className="dep-puntos-titulo">Dónde y cómo</div>
              <ul className="dep-puntos">
                {dep.puntos.map(pt => (
                  <li key={pt.p}>
                    <span className="dep-punto-nombre">{pt.p}:</span>
                    <span className="dep-punto-desc"> {pt.d}</span>
                  </li>
                ))}
              </ul>

              <div className="dep-info-row">
                <div className="dep-info-dato">
                  <span className="dep-info-label">Precio orientativo</span>
                  <span className="dep-info-val">{dep.precio}</span>
                </div>
                <div className="dep-info-dato">
                  <span className="dep-info-label">Mejor época</span>
                  <span className="dep-info-val">{dep.mejor_epoca}</span>
                </div>
              </div>

              <div className="dep-tags">
                {dep.tags.map(t => (
                  <span key={t.label} className={`dep-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

            </div>

            <div className="dep-route-img">
              <div className={`dep-route-img-inner ${dep.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Calendario de eventos */}
      <div className="dep-calendario-section">
        <div className="dep-section-title">
          <h2>Grandes eventos deportivos en Valencia 2026</h2>
          <p>Un año repleto de competiciones internacionales para ver o participar.</p>
        </div>
        <div className="dep-calendario-grid">
          {eventosAno.map(ev => (
            <div className={`dep-cal-item dep-cal-${ev.tipo}`} key={ev.mes}>
              <div className="dep-cal-mes">{ev.mes}</div>
              <div className="dep-cal-nombre">{ev.nombre}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="dep-info-box">
        <h3>Consejos para hacer deporte en Valencia</h3>
        <ul className="dep-info-list">
          <li>El <strong>Jardín del Turia</strong> es el mejor circuito urbano para correr o ir en bici, gratuito y sin coches</li>
          <li>El <strong>Maratón de Valencia</strong> (6 dic) requiere inscripción con mucha antelación: se agota en horas</li>
          <li><strong>Valenbisi</strong> tiene 250+ estaciones: el sistema más cómodo para moverse en bici por la ciudad</li>
          <li>Las playas de Valencia son ideales para el surf y el paddleboard de <strong>mayo a octubre</strong></li>
          <li>El Club de Golf El Saler es campo público: no se necesita ser socio para jugar</li>
          <li>Las entradas de <strong>Valencia Basket</strong> en el Roig Arena se agotan para los partidos de Euroliga</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}