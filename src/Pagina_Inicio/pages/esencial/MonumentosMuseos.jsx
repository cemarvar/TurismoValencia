import { useState } from 'react';
import '../../assets/cssEsencial/MonumentosMuseos.css';
import Footer from '../../FOOTER/Footer';

var monumentos = [
  {
    num: '01',
    nombre: 'La Lonja de la Seda',
    ubicacion: 'Plaza del Mercado · Casco Histórico',
    tipo: 'Monumento · Patrimonio UNESCO',
    desc: 'Obra maestra del gótico civil valenciano del siglo XV. Sus columnas helicoidales, el Patio de los Naranjos y la Sala del Consulado del Mar hacen de ella uno de los edificios más impresionantes de Europa.',
    horario: 'Todos los días 9:30–19:00 h',
    precio: 'Gratuito con Tourist Card',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'UNESCO' }, { label: 'Siglo XV' }],
    imgClass: 'img-lonja',
  },
  {
    num: '02',
    nombre: 'Catedral de Valencia y Miguelete',
    ubicacion: 'Plaza de la Reina · Casco Histórico',
    tipo: 'Monumento · Museo de la Catedral',
    desc: 'Alberga el Santo Cáliz, la reliquia que la tradición identifica con el Grial. El campanario del Miguelete ofrece las mejores vistas del centro histórico desde sus 50 metros de altura.',
    horario: 'Lun–Sáb 10:00–18:30 h · Dom 14:00–18:30 h',
    precio: 'Desde 9 €',
    tags: [{ label: 'Santo Cáliz' }, { label: 'Vistas' }, { label: 'Gótico-Barroco' }],
    imgClass: 'img-catedral',
  },
  {
    num: '03',
    nombre: 'Iglesia de San Nicolás de Bari',
    ubicacion: 'C/ de los Caballeros · Casco Histórico',
    tipo: 'Monumento · Capilla Sixtina valenciana',
    desc: 'Templo gótico del siglo XIV cuyas bóvedas están cubiertas por casi 2.000 m² de frescos barrocos del XVII, obra de Antonio Palomino y Dionís Vidal. Uno de los interiores más espectaculares de España.',
    horario: 'Mar–Sáb 10:30–19:30 h · Dom 13:30–19:30 h',
    precio: '15 € · Reserva previa obligatoria',
    tags: [{ label: 'Reserva previa' }, { label: 'Barroco' }, { label: 'Arte' }],
    imgClass: 'img-sannicolas',
  },
  {
    num: '04',
    nombre: 'Torres de Serranos',
    ubicacion: 'Plaza de los Fueros · Barrio del Carmen',
    tipo: 'Monumento · Arquitectura militar s. XIV',
    desc: 'La antigua puerta norte de la ciudad amurallada. Construidas entre 1392 y 1398, son uno de los mejores ejemplos de arquitectura militar gótica de Europa. Desde sus terrazas, vistas panorámicas del Jardín del Turia.',
    horario: 'Mar–Sáb 10:00–19:00 h · Dom 10:00–14:00 h',
    precio: 'Gratuito',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Vistas' }, { label: 'Siglo XIV' }],
    imgClass: 'img-serranos',
  },
  {
    num: '05',
    nombre: 'Mercado Central',
    ubicacion: 'Plaza del Mercado · Casco Histórico',
    tipo: 'Monumento · Bien de Interés Cultural',
    desc: 'Uno de los mayores mercados de abastos de Europa, con más de 250 puestos bajo una magnífica cúpula modernista de principios del siglo XX. Centro neurálgico de la gastronomía valenciana.',
    horario: 'Lun–Sáb 7:30–15:00 h',
    precio: 'Gratuito',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Modernismo' }, { label: 'Gastronomía' }],
    imgClass: 'img-mercado',
  },
  {
    num: '06',
    nombre: 'Ciudad de las Artes y las Ciencias',
    ubicacion: 'Av. del Professor López Piñero · Turia',
    tipo: 'Complejo cultural · Santiago Calatrava',
    desc: 'El skyline más icónico de Valencia: el Oceanogràfic, el Museu de les Ciències, el Hemisfèric y el Palau de les Arts, distribuidos a lo largo del antiguo cauce del Turia en un conjunto arquitectónico sin igual.',
    horario: 'Abre todos los días del año',
    precio: 'Desde 10 € por espacio',
    tags: [{ label: 'Familia' }, { label: 'Arquitectura' }, { label: 'Ciencia' }],
    imgClass: 'img-mcac',
  },
];

var categorias = [
  {
    id: 'arte',
    label: 'Arte y pintura',
    museos: [
      { nombre: 'Museo de Bellas Artes de Valencia', nota: 'Segunda pinacoteca de España', gratuito: true },
      { nombre: 'IVAM · Centro Julio González', nota: 'Arte moderno y contemporáneo', gratuito: false },
      { nombre: 'Centre del Carme Cultura Contemporánea', nota: 'Arte actual en convento gótico', gratuito: true },
      { nombre: 'Centro de Arte Hortensia Herrero', nota: 'Arte internacional en palacio histórico', gratuito: false },
      { nombre: 'Bombas Gens Centre d\'Arts Digitals', nota: 'Arte digital en fábrica industrial', gratuito: false },
      { nombre: 'Fundación Bancaja', nota: 'Exposiciones temporales de primer nivel', gratuito: false },
      { nombre: 'CaixaForum València', nota: 'Gran sala de exposiciones en la CAC', gratuito: false },
      { nombre: 'Centro Arte Contemporáneo · Fundación Chirivella Soriano', nota: 'Colección de arte valenciano', gratuito: true },
    ],
  },
  {
    id: 'historia',
    label: 'Historia y arqueología',
    museos: [
      { nombre: 'Museo de Historia de València', nota: 'La ciudad desde sus orígenes hasta hoy', gratuito: true },
      { nombre: 'L\'Almoina · Centro Arqueológico', nota: 'Restos romanos, visigodos y árabes', gratuito: true },
      { nombre: 'Museo Histórico Municipal', nota: 'Documentos y objetos del patrimonio municipal', gratuito: true },
      { nombre: 'Museo de Prehistoria de Valencia', nota: 'Colecciones arqueológicas provinciales', gratuito: true },
      { nombre: 'Museo Nacional de Cerámica · Palacio Marqués de Dos Aguas', nota: 'Colección cerámica única en edificio barroco', gratuito: false },
      { nombre: 'Cripta de la Cárcel de San Vicente', nota: 'Vestigios paleocristianos bajo el Ayuntamiento', gratuito: true },
      { nombre: 'Almudín', nota: 'Antiguo granero medieval con pinturas murales', gratuito: true },
      { nombre: 'Atarazanas', nota: 'Astilleros medievales de la Corona de Aragón', gratuito: true },
    ],
  },
  {
    id: 'ciencia',
    label: 'Ciencia y naturaleza',
    museos: [
      { nombre: 'Museu de les Ciències Príncipe Felipe', nota: 'Ciencia interactiva en la CAC', gratuito: false },
      { nombre: 'Oceanogràfic', nota: 'El acuario más grande de Europa', gratuito: false },
      { nombre: 'Hemisfèric', nota: 'Cine 3D con pantalla cóncava de 900 m²', gratuito: false },
      { nombre: 'Museo de Ciencias Naturales', nota: 'Mineralogía, botánica y zoología', gratuito: true },
      { nombre: 'Casa de la Ciencia · CSIC', nota: 'Divulgación científica con actividades', gratuito: true },
    ],
  },
  {
    id: 'tematicos',
    label: 'Museos temáticos',
    museos: [
      { nombre: 'Museo Fallero', nota: 'Ninots indultados de las Fallas desde 1934', gratuito: true },
      { nombre: 'Museo del Gremio de Artistas Falleros', nota: 'El arte efímero de los monumentos falleros', gratuito: false },
      { nombre: 'Museo Valenciano de Etnología', nota: 'Cultura popular y tradiciones de la Comunitat', gratuito: true },
      { nombre: 'MUVIM · Museo Valenciano de la Ilustración y la Modernidad', nota: 'Historia del pensamiento moderno', gratuito: true },
      { nombre: 'Casa Museo Benlliure', nota: 'Taller y obra del escultor Mariano Benlliure', gratuito: true },
      { nombre: 'Casa Museo Blasco Ibáñez', nota: 'Vida y obra del novelista valenciano', gratuito: true },
      { nombre: 'Museo del Colegio Arte Mayor de la Seda', nota: 'Historia de la industria sedera valenciana', gratuito: false },
      { nombre: 'L\'Iber · Museo de los Soldaditos de Plomo', nota: 'La mayor colección del mundo de figuras de plomo', gratuito: false },
      { nombre: 'Museo del Arroz', nota: 'Historia del cultivo y la gastronomía del arroz', gratuito: true },
      { nombre: 'Museo de Historia de la Medicina · Palacio de Cerveró', nota: 'Historia de la ciencia médica valenciana', gratuito: true },
      { nombre: 'Refugio Antiaéreo de Serranos', nota: 'Bunker de la Guerra Civil bajo el casco histórico', gratuito: false },
    ],
  },
];

var filtros = ['Todos', 'Arte y pintura', 'Historia y arqueología', 'Ciencia y naturaleza', 'Museos temáticos'];

export default function MonumentosMuseos() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');

  const categoriasFiltradas = filtroActivo === 'Todos'
    ? categorias
    : categorias.filter(c => c.label === filtroActivo);

  return (
    <div className="mm-page">

      {/* Hero */}
      <div className="mm-hero">
        <div className="mm-hero-overlay" />
        <div className="mm-hero-content">
          <div className="mm-eyebrow">Valencia · Cultura · Más de 60 espacios</div>
          <h1>Monumentos<br />y museos</h1>
          <p>Desde joyería del gótico civil hasta arte contemporáneo, pasando por ciencia interactiva y tradición fallera. La cultura de Valencia se despliega en más de 60 contenedores culturales.</p>
        </div>
        <div className="mm-hero-stats">
          <div className="mm-stat">
            <span className="mm-stat-num">12</span>
            <span className="mm-stat-label">Monumentos</span>
          </div>
          <div className="mm-stat-sep" />
          <div className="mm-stat">
            <span className="mm-stat-num">34+</span>
            <span className="mm-stat-label">Museos</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mm-intro">
        <p>Valencia concentra en su casco histórico algunos de los monumentos más singulares de la Península: un Patrimonio Mundial de la UNESCO, la Capilla Sixtina valenciana, la muralla medieval mejor conservada del Mediterráneo y el mercado modernista más grande de Europa. Todo ello a menos de diez minutos a pie.</p>
        <p>A eso se suma una red museística de más de <strong>34 museos</strong>, que van desde la segunda mayor pinacoteca de España hasta colecciones únicas en el mundo dedicadas a los ninots falleros, los soldaditos de plomo o la industria de la seda.</p>
      </div>

      {/* Sección monumentos */}
      <div className="mm-section-title">
        <h2>Monumentos que no puedes perderte</h2>
      </div>

      <div className="mm-routes">
        {monumentos.map(m => (
          <div className="mm-route-item" key={m.num}>
            <div className="mm-route-num">{m.num}</div>
            <div className="mm-route-text">
              <div className="mm-tipo">{m.tipo}</div>
              <h3>{m.nombre}</h3>
              <div className="mm-ubicacion">{m.ubicacion}</div>
              <p>{m.desc}</p>
              <div className="mm-horario-row">
                <span className="mm-horario-icon">🕐</span>
                <span className="mm-horario">{m.horario}</span>
                <span className="mm-precio-sep">·</span>
                <span className="mm-precio">{m.precio}</span>
              </div>
              <div className="mm-tags">
                {m.tags.map(t => (
                  <span key={t.label} className={`mm-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
              <a className="mm-link" href="#">Ver detalles →</a>
            </div>
            <div className="mm-route-img">
              <div className={`mm-route-img-inner ${m.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Sección museos */}
      <div className="mm-museos-section">
        <div className="mm-section-title">
          <h2>Los mejores museos de Valencia</h2>
          <p>Más de 34 museos con colecciones para todos los gustos, muchos de ellos gratuitos.</p>
        </div>

        {/* Filtros de categoría */}
        <div className="mm-filter-bar">
          {filtros.map(f => (
            <button
              key={f}
              className={`mm-pill ${filtroActivo === f ? 'active' : ''}`}
              onClick={() => setFiltroActivo(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid de museos por categoría */}
        {categoriasFiltradas.map(cat => (
          <div className="mm-categoria" key={cat.id}>
            <div className="mm-categoria-titulo">{cat.label}</div>
            <div className="mm-museo-grid">
              {cat.museos.map(museo => (
                <div className="mm-museo-card" key={museo.nombre}>
                  <div className="mm-museo-nombre">{museo.nombre}</div>
                  <div className="mm-museo-nota">{museo.nota}</div>
                  {museo.gratuito && <span className="mm-museo-free">Gratuito</span>}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="mm-info-box">
        <h3>Consejos para visitar museos y monumentos</h3>
        <ul className="mm-info-list">
          <li>La <strong>València Tourist Card</strong> incluye entrada gratuita a museos y monumentos municipales</li>
          <li>La mayoría de museos municipales son gratuitos todo el año</li>
          <li>San Nicolás requiere reserva previa — se agota rápido los fines de semana</li>
          <li>La CAC conviene comprar entradas online para evitar colas</li>
          <li>El Museo de Bellas Artes es gratuito y abre de martes a domingo</li>
          <li>Los lunes cierran la mayoría de museos de la ciudad</li>
        </ul>
      </div>

      <Footer />

    </div>
  );
}