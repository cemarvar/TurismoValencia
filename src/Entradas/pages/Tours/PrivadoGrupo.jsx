import '../../assets/cssTours/PrivadoGrupo.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var operadores = [
  {
    num: '01',
    nombre: 'Turiart',
    tipo: 'Tours privados · Grupos · Familias · Rutas temáticas · Guías oficiales',
    subtitulo: 'Castellano · Valenciano · Inglés · Italiano · Alemán · Francés · Máx. 10 personas tour privado',
    desc: 'Empresa especializada en turismo cultural y familiar en la Comunidad Valenciana. Ofrece visitas guiadas regulares y tours privados a medida, y gestiona programas turístico-culturales completos —incluyendo organización de guías, transporte, alojamiento, restaurantes y entradas a museos— para que el visitante disfrute de una experiencia completa. Sus tours privados son completamente personalizables: el cliente elige la fecha, la hora (entre las 8:00 y las 20:00 h), el punto de encuentro, el idioma y el número de horas. Entre sus rutas más populares destacan "Valencia Esencial y sus Patrimonios de la Humanidad", el "Valencia Family Tour" (con juegos y actividades para niños de 4 a 10 años), las "Leyendas y misterios a la luz de la luna valenciana" y la ruta histórica "Valencia, Capital de la República" que incluye visita a un refugio antiaéreo de la Guerra Civil.',
    datos: [
      { d: 'Tour privado 1–2 pers.', v: 'Desde 95 € (2h español/valenciano) · 110 € (2h inglés/francés/italiano)' },
      { d: 'Tour privado 3–4 pers.', v: 'Desde 120 € (2h español) · 140 € (2h inglés/francés/italiano)' },
      { d: 'Tour privado 5–10 pers.', v: 'Desde 140 € (2h español) · 165 € (2h inglés/francés/italiano)' },
      { d: 'Contacto', v: 'info@turiart.com · Tel. 96 352 07 72 / 657 047 739 · C/ Editor Cabrerizo, 3 · Valencia' },
    ],
    tags: [{ label: 'Familias' }, { label: 'Grupos' }, { label: '6 idiomas' }],
    imgClass: 'img-pg-turiart',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/turiart',
  },
  {
    num: '02',
    nombre: 'Guiding Architects Valencia',
    tipo: 'Tours de arquitectura y urbanismo · Privados y grupos profesionales · Desde 2009',
    subtitulo: 'Inglés · Alemán · Español · Francés · Arquitectos como guías · Miembros de la red internacional Guiding Architects',
    desc: 'Empresa fundada en 2009 por el arquitecto Boris Strzelczyk, miembro de Guiding Architects, la prestigiosa red internacional de guías de arquitectura presente en más de 45 ciudades del mundo. Todo el equipo está formado por arquitectos y expertos urbanos que viven y trabajan en la Comunidad Valenciana. Sus clientes son grupos y profesionales —universidades de arquitectura, estudios, empresas, políticos— que quieren explorar Valencia a través de la mirada experta de un arquitecto. Organiza rutas temáticas sobre arquitectura, urbanismo y paisaje completamente personalizadas, conferencias y encuentros profesionales. Cuentan con guías nativos alemanes y ofrecen tours en inglés, francés y español. También organizan transporte, entradas y reservas de restaurante para programas de varios días.',
    datos: [
      { d: 'Especialidad', v: 'Arquitectura · Urbanismo · Paisaje · Calatrava · Desarrollo urbano de Valencia' },
      { d: 'Idiomas', v: 'Inglés · Alemán (nativos) · Español · Francés' },
      { d: 'Clientes', v: 'Universidades · Estudios de arquitectura · Grupos profesionales · Particulares' },
      { d: 'Contacto', v: 'ga-valencia.es · C/ Bernat y Baldovi, 6 · 46010 Valencia · +34 617 421 136' },
    ],
    tags: [{ label: 'Arquitectura' }, { label: 'Profesionales' }, { label: 'Red internacional' }],
    imgClass: 'img-pg-guiding',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/guiding-architects',
  },
  {
    num: '03',
    nombre: 'Discovering Valencia',
    tipo: 'Tours privados · Excursiones · Alrededores · Transporte incluido · Guías oficiales',
    subtitulo: 'Español · Inglés · Tours 100% accesibles · Excursiones con transporte privado · MICE · Grupos organizados',
    desc: 'Empresa de guías oficiales de turismo especializada en tours privados por Valencia y excursiones privadas por los alrededores con transporte incluido. Para la ciudad, ofrece la visita a pie por el centro histórico desde 15 €, completamente accesible para personas con movilidad reducida. Para los alrededores, organiza excursiones de día completo (8 horas) a las Cuevas de San José, Sagunto, Xàtiva, Peñíscola, Guadalest, las bodegas de Utiel-Requena, Teruel y muchos otros destinos, todas con guía oficial y transporte privado. El transporte se adapta al grupo: coche, monovolumen, autobús, limusina o coche clásico. Para clientes MICE ofrece múltiples autobuses VIP con logotipo de empresa.',
    datos: [
      { d: 'Ciudad', v: 'Visita a pie centro histórico desde 15 € · 100% accesible · Todos los días' },
      { d: 'Alrededores', v: 'Excursiones con transporte privado · Día completo (8h+) · Sagunto · Xàtiva · Peñíscola · Bodegas' },
      { d: 'Transporte', v: 'Coche · Monovolumen · Autobús · Limusina · Coche clásico · VIP con logo empresa (MICE)' },
      { d: 'Contacto', v: 'discovering-valencia.com · info@discovering-valencia.com · 687 025 082 / 607 360 343' },
    ],
    tags: [{ label: 'Excursiones' }, { label: 'Transporte incluido' }, { label: 'MICE' }],
    imgClass: 'img-pg-discovering',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/discovering-valencia',
  },
  {
    num: '04',
    nombre: 'Valencia & Go',
    tipo: 'Tours privados exclusivos · Guía oficial en exclusiva · Itinerario a medida',
    subtitulo: 'Valenciano · Español · Inglés · Francés · Alemán · Italiano · Polaco · Rumano · Grupos reducidos',
    desc: 'Empresa de tours privados con guía oficial dedicado en exclusiva al cliente. A diferencia de los tours en grupo, su propuesta se adapta completamente a los intereses y el ritmo del visitante, con varios itinerarios posibles: el recorrido histórico por el centro partiendo de las Torres de Serranos, la ruta por los exteriores de la Ciudad de las Artes y las Ciencias, las rutas de barrio por Ruzafa, Cabanyal o Benimaclet, y tours temáticos con enfoque modernista, barroco o contemporáneo. Ofrecen también precios especiales para grupos. Uno de sus puntos fuertes es la amplísima oferta de idiomas: valenciano, español, inglés, francés, alemán, italiano, polaco y rumano entre otros.',
    datos: [
      { d: 'Modalidades', v: 'Centro histórico · CAC exteriores · Ruzafa · Cabanyal · Benimaclet · Tours temáticos' },
      { d: 'Idiomas', v: 'Valenciano · Español · Inglés · Francés · Alemán · Italiano · Polaco · Rumano y otros' },
      { d: 'Formato', v: 'Guía oficial en exclusiva · Grupos reducidos · Precios especiales para grupos' },
      { d: 'Contacto', v: 'valenciaandgo.com · Reserva online con itinerario personalizable' },
    ],
    tags: [{ label: 'Exclusivo' }, { label: '8+ idiomas' }, { label: 'Itinerario a medida' }],
    imgClass: 'img-pg-valenciaandgo',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/valencia-and-go',
  },
];

var masOperadores = [
  {
    nombre: 'Visitalbufera',
    especialidad: 'Parque Natural de la Albufera · Tours privados al lago y los arrozales · Atardeceres',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/visita-la-albufera',
  },
  {
    nombre: 'Descubre L\'Horta',
    especialidad: 'Rutas por la huerta valenciana · Patrimonio agrícola · Cultura rural · Grupos',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/descubre-l-horta',
  },
  {
    nombre: 'Valencia Guías',
    especialidad: 'Guías oficiales · Tours privados y para grupos · Centro histórico · Patrimonio UNESCO',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/valencia-guias',
  },
  {
    nombre: 'Asociación de Guías Oficiales CV',
    especialidad: 'Red oficial de guías de la Comunitat Valenciana · Garantía de calidad y profesionalidad',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/asociacion-guias-oficiales-comunidad-valenciana',
  },
  {
    nombre: 'Gids Valencia',
    especialidad: 'Tours en neerlandés · Ruta de la Seda · Especialistas en turistas del Benelux',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/gids-valencia',
  },
  {
    nombre: 'DescubreValencia',
    especialidad: 'Visitas guiadas privadas · Centro histórico · Grupos · Guías oficiales certificados',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/descubre-valencia',
  },
  {
    nombre: 'DTA Gestión de Ocio y Turismo',
    especialidad: 'Programas culturales completos · Grupos · Ocio y turismo activo · MICE',
    url: 'https://www.visitvalencia.com/que-hacer-valencia/ocio/actividades-de-ocio/dta-gestion',
  },
  {
    nombre: 'MHR Visitas Guiadas y Culturales',
    especialidad: 'Visitas culturales · Patrimonio · Grupos · Estación del Norte · Centro histórico',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/mhr-visitas-guiadas-culturales',
  },
  {
    nombre: 'CBM Visitas Culturales',
    especialidad: 'Visitas culturales privadas · Patrimonio artístico · Grupos reducidos',
    url: 'https://www.visitvalencia.com/planifica-tu-viaje-a-valencia/guias-turisticas-valencia/cbm-visitas-culturales',
  },
  {
    nombre: 'Bikes4Tours',
    especialidad: 'Tours en bicicleta · Rutas por el Turia · Albufera en bici · Grupos y privados',
    url: 'https://www.visitvalencia.com/que-hacer-valencia/naturaleza-en-valencia/empresas-naturaleza/bike4tour',
  },
];

var ventajas = [
  { icono: '🧭', titulo: 'Itinerario a medida', desc: 'Tú decides la temática, el ritmo, los puntos de interés y la duración. El guía se adapta completamente a tus necesidades.' },
  { icono: '🔑', titulo: 'Acceso exclusivo', desc: 'Los tours privados permiten acceder a lugares y horarios que los tours grupales no pueden ofrecer, como aperturas especiales o zonas restringidas.' },
  { icono: '🌐', titulo: 'Tu idioma', desc: 'Los operadores de la red de Visit València ofrecen guías en más de 10 idiomas: español, inglés, francés, alemán, italiano, neerlandés, valenciano y más.' },
  { icono: '👨‍👩‍👧', titulo: 'Ideal para grupos', desc: 'Familias, grupos de amigos, viajes de empresa, despedidas, congresos o excursiones escolares: el tour privado funciona para cualquier tipo de grupo.' },
  { icono: '⭐', titulo: 'Guías oficiales', desc: 'Todos los operadores de la selección de Visit València son guías oficiales de turismo de la Comunidad Valenciana con titulación acreditada.' },
  { icono: '🚌', titulo: 'Transporte incluido', desc: 'Varios operadores incluyen transporte privado para excursiones por los alrededores, con opciones desde monovolumen hasta autobús VIP con logo de empresa.' },
];

export default function PrivadoGrupo() {
  return (
    <div className="pg-page">

      {/* Hero */}
      <div className="pg-hero">
        <div className="pg-hero-overlay" />
        <div className="pg-hero-content">
          <div className="pg-eyebrow">Tours Privados y Grupos · Guías Oficiales · Visit València</div>
          <h1>Tu Valencia<br />a medida</h1>
          <p>Una selección de las mejores empresas de visitas guiadas con guías oficiales de la Comunitat Valenciana. Itinerario, idioma, horario y ritmo: tú decides todo.</p>
        </div>
        <div className="pg-hero-stats">
          <div className="pg-stat">
            <span className="pg-stat-num">14</span>
            <span className="pg-stat-label">Operadores oficiales</span>
          </div>
          <div className="pg-stat-sep" />
          <div className="pg-stat">
            <span className="pg-stat-num">+10</span>
            <span className="pg-stat-label">Idiomas disponibles</span>
          </div>
          <div className="pg-stat-sep" />
          <div className="pg-stat">
            <span className="pg-stat-num">100%</span>
            <span className="pg-stat-label">A tu medida</span>
          </div>
        </div>
      </div>

      {/* Intro box */}
      <div className="pg-intro-box">
        <div className="pg-intro-icono">🏅</div>
        <div className="pg-intro-content">
          <div className="pg-intro-titulo">Guías oficiales de turismo · Calidad y profesionalidad garantizadas</div>
          <p>¿Buscas una experiencia personalizada para tu grupo? Tanto si sois numerosos como si queréis un recorrido completamente a medida, Visit València ofrece una selección de <strong>las mejores empresas de visitas guiadas con guías oficiales</strong> de la Comunitat Valenciana. Todos los operadores están <strong>certificados y titulados</strong> como guías oficiales de turismo, lo que garantiza calidad, profesionalidad y un conocimiento profundo de la ciudad. Puedes adaptar el tour a vuestras necesidades en cuanto a <strong>temática, itinerario, horario, idioma y número de personas</strong>. Desde tours de arquitectura con arquitectos como guías hasta excursiones con transporte privado por los alrededores de Valencia.</p>
        </div>
      </div>

      {/* Ventajas chips */}
      <div className="pg-ventajas-wrap">
        <div className="pg-ventajas-titulo">Por qué elegir un tour privado con guía oficial</div>
        <div className="pg-ventajas-grid">
          {ventajas.map(v => (
            <div className="pg-ventaja-chip" key={v.titulo}>
              <span className="pg-ventaja-icono">{v.icono}</span>
              <div>
                <span className="pg-ventaja-titulo">{v.titulo}</span>
                <span className="pg-ventaja-desc">{v.desc}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section title operadores destacados */}
      <div className="pg-section-title">
        <h2>Operadores destacados</h2>
        <p>Cuatro empresas de referencia con especialidades y propuestas diferenciadas para grupos y tours privados.</p>
      </div>

      {/* Operadores principales */}
      <div className="pg-routes">
        {operadores.map(op => (
          <div className="pg-route-item" key={op.num}>
            <div className="pg-route-num">{op.num}</div>
            <div className="pg-route-text">
              <div className="pg-tipo">{op.tipo}</div>
              <h2>{op.nombre}</h2>
              <div className="pg-subtitulo">{op.subtitulo}</div>
              <p className="pg-desc">{op.desc}</p>
              <div className="pg-datos-titulo">Precios y datos clave</div>
              <ul className="pg-datos">
                {op.datos.map(d => (
                  <li key={d.d}>
                    <span className="pg-dato-label">{d.d}:</span>
                    <span className="pg-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="pg-tags">
                {op.tags.map(t => (
                  <span key={t.label} className="pg-tag">{t.label}</span>
                ))}
              </div>
              <a href={op.url} target="_blank" rel="noopener noreferrer" className="pg-comprar-btn">
                Ver en visitvalencia.com →
              </a>
            </div>
            <div className="pg-route-img">
              <div className={`pg-route-img-inner ${op.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Todos los operadores */}
      <div className="pg-todos-section">
        <h3>Todos los operadores · Tours privados y grupos en Valencia</h3>
        <p className="pg-todos-desc">La selección completa de empresas de guías oficiales disponibles en Visit València para tours privados y de grupo.</p>
        <div className="pg-todos-grid">
          {masOperadores.map(op => (
            <a
              key={op.nombre}
              href={op.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pg-operador-card"
            >
              <div className="pg-operador-nombre">{op.nombre}</div>
              <div className="pg-operador-especialidad">{op.especialidad}</div>
              <span className="pg-operador-link">Ver más →</span>
            </a>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="pg-info-box">
        <h3>Consejos para contratar un tour privado en Valencia</h3>
        <ul className="pg-info-list">
          <li>Reserva con al menos <strong>48–72 horas de antelación</strong> en temporada alta (marzo–octubre): los guías oficiales tienen agenda y los mejores se llenan rápido</li>
          <li>Para grupos de más de 10 personas, muchos operadores tienen <strong>tarifas especiales por grupo</strong> que resultan más económicas que los tours regulares por persona</li>
          <li>Si necesitas un tour en un <strong>idioma poco común</strong> (neerlandés, polaco, rumano, japonés...), contáctalo con tiempo: la disponibilidad de guías en ciertos idiomas es limitada</li>
          <li>Los tours privados son ideales para <strong>ocasiones especiales</strong>: cumpleaños, propuestas de matrimonio, despedidas, aniversarios o celebraciones de empresa</li>
          <li>Para <strong>excursiones por los alrededores</strong> (Albufera, Sagunto, Xàtiva, bodegas), contrata siempre con transporte privado incluido: es más cómodo y el precio por persona es razonable en grupo</li>
          <li>Con la <strong>Asociación de Guías Oficiales de la CV</strong> puedes encontrar un guía certificado en cualquier idioma y para cualquier temática si los operadores individuales no tienen disponibilidad</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}