import { useState } from 'react';
import '../../assets/cssSostenible/Ecoturismo.css';
import Footer from '../../FOOTER/Footer';

var actividades = [
  {
    num: '01',
    nombre: 'Paseo en barca por la Albufera',
    categoria: 'agua',
    icono: '🚣',
    ubicacion: 'Parque Natural de l\'Albufera · 10 km del centro',
    desc: 'La experiencia de ecoturismo más auténtica de Valencia: recorrer el lago de la Albufera en una barca albuferenca tradicional acompañado de guías nativos del parque. El Parque Natural de la Albufera es el humedal más grande de España, con más de 21.000 hectáreas de arrozales, dunas, pinares y el lago de agua dulce más extenso de la Península. Las empresas Albufera Nature y Albufera Parc ofrecen experiencias de ecoturismo responsable gestionadas por gente nativa del parque.',
    puntos: [
      { p: 'Barca albuferenca tradicional', d: 'Embarcación de madera sin motor, típica de los pescadores del lago' },
      { p: 'Observación de aves', d: 'Más de 300 especies, especialmente en el Racó de l\'Olla y la Devesa' },
      { p: 'Atardecer sobre el lago', d: 'Uno de los espectáculos naturales más fotografiados de la Comunitat' },
      { p: 'Visita a El Palmar', d: 'El pueblo pesquero dentro del parque con edificios del siglo XVIII' },
    ],
    precio: 'Desde 8 € por persona · Pack barca + paella desde 26 €',
    impacto: 'Bajo impacto · Empresas de ecoturismo responsable gestionadas por nativos del parque',
    tags: [{ label: 'Agua' }, { label: 'Aves' }, { label: 'Tradicional' }, { label: 'Atardecer' }],
    imgClass: 'img-albufera',
  },
  {
    num: '02',
    nombre: 'Observación de aves en el Racó de l\'Olla',
    categoria: 'fauna',
    icono: '🦢',
    ubicacion: 'Reserva Natural del Racó de l\'Olla · Entre la Devesa y la Albufera',
    desc: 'El Racó de l\'Olla es la reserva natural más importante del Parque Natural de la Albufera: 50 hectáreas de laguna interior y vegetación palustre donde se concentran las mayores poblaciones de aves acuáticas. Flamencos, garzas reales, patos colorados, cormoranes y hasta 300 especies distintas habitan o transitan este espacio a lo largo del año. El centro de interpretación, el observatorio y la torre-mirador permiten observar las aves sin perturbarlas.',
    puntos: [
      { p: 'Torre-mirador', d: 'Vistas panorámicas sobre la laguna y la Albufera desde la torre de observación' },
      { p: 'Centro de interpretación', d: 'Información sobre las aves y ecosistemas del parque · Acceso gratuito' },
      { p: 'Observatorio de aves', d: 'Infraestructura de ocultación para observar sin molestar a las especies' },
      { p: 'Mejor época', d: 'Otoño e invierno para aves migratorias · Primavera para nidificantes' },
    ],
    precio: 'Gratuito · Acceso libre al centro de interpretación',
    impacto: 'Sin impacto · Observación pasiva sin interferencia con la fauna',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Aves' }, { label: '+300 especies' }, { label: 'Reserva natural' }],
    imgClass: 'img-aves',
  },
  {
    num: '03',
    nombre: 'Rutas en bici por la Huerta valenciana',
    categoria: 'tierra',
    icono: '🚲',
    ubicacion: 'Anillo Verde Metropolitano · Huerta Norte y Sur',
    desc: 'La Huerta valenciana es el paisaje más antiguo y auténtico de Valencia: campos de naranjos, huertos, barracas tradicionales y acequias árabes que rodean la ciudad desde hace más de mil años. El Anillo Verde Metropolitano tiene más de 100 km de rutas ciclistas y peatonales señalizadas que permiten descubrir este territorio a cero emisiones. La ruta de la Huerta Norte lleva por campos de cultivo, barracas y alquerías históricas. La ruta de la Huerta Sur muestra el contraste entre el campo y el Parque Natural de la Albufera.',
    puntos: [
      { p: 'Huerta Norte', d: 'Barracas, alquerías y campos de naranjos por caminos rurales históricos' },
      { p: 'Huerta Sur', d: 'De la huerta al lago: conexión a pie o en bici con el Parque Natural de la Albufera' },
      { p: 'Anillo Verde Metropolitano', d: 'Más de 100 km de caminos rurales señalizados que rodean toda Valencia' },
      { p: 'Gastronomía kilómetro 0', d: 'Mercados locales y restaurantes con producto de la huerta directa' },
    ],
    precio: 'Gratuito · Alquiler de bici desde 10 €/día',
    impacto: 'Sin emisiones · Apoya la economía local y el mantenimiento del paisaje agrícola',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Bici' }, { label: 'Huerta' }, { label: 'Km 0' }],
    imgClass: 'img-huerta',
  },
  {
    num: '04',
    nombre: 'Tours a pie por el centro histórico',
    categoria: 'ciudad',
    icono: '🚶',
    ubicacion: 'Casco histórico · Barrio del Carmen · La Seda',
    desc: 'Valencia es perfecta para el turismo sin emisiones: su centro histórico es compacto, accesible y está lleno de patrimonio a distancias caminables. Los tours a pie cubren rutas únicas como el legado de la Seda (declarada Patrimonio Cultural Inmaterial por la UNESCO), los misterios del Santo Cáliz, el street art del Barrio del Carmen, las Torres de Serranos y Quart y los Patrimonios de la Humanidad. Empresas de guías locales certificados ofrecen tours en grupos reducidos con enfoque histórico y cultural.',
    puntos: [
      { p: 'Ruta de la Seda', d: 'El legado textil medieval de Valencia · La Lonja es Patrimonio de la Humanidad' },
      { p: 'Misterios del Santo Cáliz', d: 'Recorrido por la Catedral y los vestigios del Santo Grial en Valencia' },
      { p: 'Street art del Carmen', d: 'El barrio más creativo de Valencia: murales, arte urbano y arquitectura histórica' },
      { p: 'Tour Indiana Jones', d: 'Historia, leyendas y juegos por el casco histórico con guía temático' },
    ],
    precio: 'Free tours desde donativo · Tours premium desde 12 €',
    impacto: 'Cero emisiones · Apoya a guías locales y el tejido cultural del centro histórico',
    tags: [{ label: 'Sin emisiones' }, { label: 'Guía local' }, { label: 'Patrimonio UNESCO' }],
    imgClass: 'img-centro',
  },
  {
    num: '05',
    nombre: 'Travesía marina en goleta · Cervantes Saavedra',
    categoria: 'agua',
    icono: '⛵',
    ubicacion: 'Puerto de Valencia · Travesías al Mediterráneo',
    desc: 'El barco escuela Cervantes Saavedra, en colaboración con el Oceanogràfic de Valencia, organiza travesías marinas con contenido educativo y de concienciación medioambiental. La Travesía Planeta Azul lleva a los participantes por el Mediterráneo hacia Formentera y Cabrera aprendiendo sobre biología marina, historia y conservación de los océanos. Los fines de semana «Albufera y Oceanogràfic» combinan la visita al humedal con la experiencia de navegación a vela.',
    puntos: [
      { p: 'Travesía Planeta Azul', d: 'Formentera y Cabrera: historia, biología marina y conservación del Mediterráneo' },
      { p: 'Fines de semana Albufera', d: 'Combinación de navegación a vela con visita al Parque Natural de la Albufera' },
      { p: 'Contenido educativo', d: 'Biología marina, historia y concienciación sobre la conservación del océano' },
      { p: 'En goleta histórica', d: 'Navegación a vela en un barco escuela con tripulación profesional' },
    ],
    precio: 'Consultar tarifas en goletacervantes.es · Reserva obligatoria',
    impacto: 'Navegación a vela · Concienciación sobre conservación marina y biología oceánica',
    tags: [{ label: 'Vela' }, { label: 'Educativo' }, { label: 'Océano' }, { label: 'Oceanogràfic' }],
    imgClass: 'img-goleta',
  },
  {
    num: '06',
    nombre: 'Ruta de los Árboles Monumentales',
    categoria: 'ciudad',
    icono: '🌳',
    ubicacion: '5 rutas por la ciudad y alrededores',
    desc: 'Valencia cuenta con más de 500 árboles monumentales catalogados. Cinco rutas oficiales permiten conocer los ejemplares más singulares: árboles con 400 años de vida, encinas centenarias, eucaliptos gigantes, palmeras, moreras, higueras y especies exóticas como el laurel de la India, el ginkgo o el fósil viviente de China. Las rutas son autoguiadas, gratuitas y combinan el patrimonio natural con el patrimonio histórico de la ciudad.',
    puntos: [
      { p: 'Ruta de ejemplares mediterráneos', d: 'Olivos, algarrobos y encinas centenarias por los barrios históricos' },
      { p: 'Ruta de árboles exóticos', d: 'Especies de cinco continentes: laurel de la India, ginkgo y cóculos asiáticos' },
      { p: 'Jardín Botánico', d: '+3.000 especies vegetales en el jardín universitario más antiguo de España' },
      { p: 'Jardines de Monforte', d: 'El jardín romántico más elegante de Valencia, con magnolias y fuentes históricas' },
    ],
    precio: 'Gratuito · Rutas autoguiadas disponibles en la web de Visit Valencia',
    impacto: 'Cero impacto · Educación ambiental sobre biodiversidad urbana',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: '+500 árboles' }, { label: 'Autoguiado' }],
    imgClass: 'img-arboles',
  },
  {
    num: '07',
    nombre: 'Senderismo en parques naturales cercanos',
    categoria: 'tierra',
    icono: '🥾',
    ubicacion: 'Sierra Calderona · Parque Natural del Turia · Hoces del Cabriel',
    desc: 'La provincia de Valencia tiene cuatro parques naturales a menos de una hora del centro, todos accesibles en transporte público o en coche. El Parque Natural del Turia (5.000 hectáreas de bosque mediterráneo y río) tiene rutas de senderismo junto al cauce con pozas de agua cristalina. La Sierra Calderona ofrece rutas con vistas al Mediterráneo. Las Hoces del Cabriel, con el río más limpio de España, son el secreto mejor guardado de la provincia.',
    puntos: [
      { p: 'Parque Natural del Turia', d: '5.000 ha de bosque ripícola a 25 km · Puente colgante de Chulilla y barranquismo' },
      { p: 'Sierra Calderona', d: 'Subida al Garbí (598 m) con panorámica de Valencia y el Mediterráneo' },
      { p: 'Hoces del Cabriel', d: 'El río con mejor calidad de agua de España · Pozas turquesas y kayak' },
      { p: 'Chera y Sot de Chera', d: 'Desfiladeros y castillos medievales en un parque natural casi desconocido' },
    ],
    precio: 'Gratuito · Barranquismo y kayak con empresa desde 25 €',
    impacto: 'Bajo impacto · Respetar los senderos señalizados y no abandonar residuos',
    tags: [{ label: 'Senderismo' }, { label: 'Gratuito', type: 'free' }, { label: 'Naturaleza' }, { label: 'Agua' }],
    imgClass: 'img-senderismo',
  },
  {
    num: '08',
    nombre: 'Playas naturales del Parque de la Albufera',
    categoria: 'agua',
    icono: '🏖',
    ubicacion: 'El Saler · El Perellonet · Playa de la Devesa',
    desc: 'Al sur de la ciudad de Valencia, el Parque Natural de la Albufera protege kilómetros de playa virgen de dunas con acceso libre. La playa del Saler, a 10 km del centro, mantiene el sistema dunar original con vegetación mediterránea autóctona. La playa de la Devesa, dentro del parque, es una de las playas más largas y naturales del litoral mediterráneo. A diferencia de las playas urbanas, estas playas protegidas no tienen servicios permanentes para preservar el ecosistema.',
    puntos: [
      { p: 'Playa del Saler', d: 'Dunas naturales y pinos a 10 km del centro · Bus desde Valencia en verano' },
      { p: 'Playa de la Devesa', d: 'La más larga y salvaje del parque · Reserva natural de flora dunar' },
      { p: 'Playa del Perellonet', d: 'Playa familiar con servicios básicos en el extremo sur del parque' },
      { p: 'Acceso sostenible', d: 'Bus público o bicicleta desde Valencia · No se recomienda el coche en verano' },
    ],
    precio: 'Gratuito · Bus desde Valencia en verano',
    impacto: 'Respetar dunas y vegetación · No acceder a zonas restringidas del parque',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Playa virgen' }, { label: 'Dunas' }, { label: 'Parque natural' }],
    imgClass: 'img-playas',
  },
];

var principios = [
  { titulo: 'Cero emisiones', desc: 'Priorizar los desplazamientos a pie, en bici, en transporte público o en embarcaciones de remo y vela.', icono: '🌿' },
  { titulo: 'Economía local', desc: 'Contratar empresas locales, comer en restaurantes con producto de proximidad y comprar en comercio de la zona.', icono: '🤝' },
  { titulo: 'Sin rastro', desc: 'No abandonar residuos en espacios naturales, mantenerse en los senderos señalizados y respetar la fauna.', icono: '♻️' },
  { titulo: 'Bajo aforo', desc: 'Elegir grupos reducidos, visitar en temporada baja y evitar los espacios naturales en horas pico de verano.', icono: '👥' },
];

var categorias = [
  { id: 'todos', label: 'Todas las actividades' },
  { id: 'agua', label: 'Agua y lago' },
  { id: 'tierra', label: 'Tierra y montaña' },
  { id: 'fauna', label: 'Fauna y aves' },
  { id: 'ciudad', label: 'Ciudad sostenible' },
];

export default function Ecoturismo() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const actividadesFiltradas = filtroActivo === 'todos'
    ? actividades
    : actividades.filter(a => a.categoria === filtroActivo);

  return (
    <div className="eco-page">

      {/* Hero */}
      <div className="eco-hero">
        <div className="eco-hero-overlay" />
        <div className="eco-hero-content">
          <div className="eco-eyebrow">Valencia · Ecoturismo · Turismo responsable</div>
          <h1>Ecoturismo<br />en Valencia</h1>
          <p>Viajeros comprometidos con la preservación de los recursos naturales y culturales encontrarán en Valencia una ciudad verde, con ecosistemas únicos y formas de descubrirla sin generar emisiones.</p>
        </div>
        <div className="eco-hero-stats">
          <div className="eco-stat">
            <span className="eco-stat-num">21.000</span>
            <span className="eco-stat-label">hectáreas Albufera</span>
          </div>
          <div className="eco-stat-sep" />
          <div className="eco-stat">
            <span className="eco-stat-num">300+</span>
            <span className="eco-stat-label">especies de aves</span>
          </div>
          <div className="eco-stat-sep" />
          <div className="eco-stat">
            <span className="eco-stat-num">4</span>
            <span className="eco-stat-label">parques naturales</span>
          </div>
        </div>
      </div>

      {/* Principios */}
      <div className="eco-principios">
        {principios.map(p => (
          <div className="eco-principio" key={p.titulo}>
            <span className="eco-principio-icono">{p.icono}</span>
            <div className="eco-principio-titulo">{p.titulo}</div>
            <p className="eco-principio-desc">{p.desc}</p>
          </div>
        ))}
      </div>

      {/* Intro */}
      <div className="eco-intro">
        <p>Valencia fue nombrada Capital Verde Europea 2024, reconocimiento a su compromiso con la sostenibilidad urbana, la movilidad verde y la conservación de sus ecosistemas naturales. El Parque Natural de la Albufera, el mayor humedal de España, está a solo diez kilómetros del centro y acoge más de 300 especies de aves. La Huerta valenciana, protegida por el Ayuntamiento desde 2018, es uno de los paisajes agrícolas periurbanos más ricos de Europa.</p>
        <p>Las actividades que encontrarás aquí están organizadas por empresas de <strong>ecoturismo responsable</strong>, muchas gestionadas por nativos de los propios espacios naturales, que combinan la experiencia viajera con la conservación del entorno y el apoyo a las comunidades locales.</p>
      </div>

      {/* Filtros */}
      <div className="eco-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`eco-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Actividades */}
      <div className="eco-routes">
        {actividadesFiltradas.map(act => (
          <div className="eco-route-item" key={act.num}>
            <div className="eco-route-num">{act.num}</div>

            <div className="eco-route-text">
              <div className="eco-meta-row">
                <span className="eco-icono">{act.icono}</span>
                <span className={`eco-cat-badge ${act.categoria}`}>{act.categoria}</span>
                <span className="eco-ubicacion">📍 {act.ubicacion}</span>
              </div>
              <h2>{act.nombre}</h2>
              <p className="eco-desc">{act.desc}</p>

              <div className="eco-puntos-titulo">Qué verás y harás</div>
              <ul className="eco-puntos">
                {act.puntos.map(pt => (
                  <li key={pt.p}>
                    <span className="eco-punto-nombre">{pt.p}:</span>
                    <span className="eco-punto-desc"> {pt.d}</span>
                  </li>
                ))}
              </ul>

              <div className="eco-impacto">
                <span className="eco-impacto-icon">🌱</span>
                <span>{act.impacto}</span>
              </div>

              <div className="eco-precio-row">
                <span className="eco-precio-label">Precio orientativo</span>
                <span className="eco-precio-val">{act.precio}</span>
              </div>

              <div className="eco-tags">
                {act.tags.map(t => (
                  <span key={t.label} className={`eco-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

              <a className="eco-link" href="#">Ver más →</a>
            </div>

            <div className="eco-route-img">
              <div className={`eco-route-img-inner ${act.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="eco-info-box">
        <h3>Código del viajero responsable en Valencia</h3>
        <ul className="eco-info-list">
          <li>Usa el <strong>transporte público o la bicicleta</strong> para llegar a los espacios naturales: el coche en el Saler y la Albufera genera congestión</li>
          <li>En la Albufera, <strong>contrata empresas de guías nativos</strong>: una parte de sus ingresos va a la conservación del parque</li>
          <li>No abandones residuos en playas naturales ni dunas: el ecosistema dunar es muy frágil y difícil de recuperar</li>
          <li>Respeta los senderos señalizados y los observatorios de aves: acercarse demasiado ahuyenta a las especies</li>
          <li>Elige restaurantes con producto de <strong>kilómetro 0</strong>: la paella en El Palmar utiliza arroz del propio parque</li>
          <li>El <strong>Racó de l\'Olla</strong> tiene el acceso restringido en ciertos períodos: consulta horarios antes de ir</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}