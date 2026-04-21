import { useState, useEffect } from 'react';
import '../../assets/cssExperiencias/ActividadesGastronomicas.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var enLaCiudadEstaticas = [
  {
    num: '01',
    nombre: 'Cena con tablao flamenco en València',
    tipo: 'Gastronomía + espectáculo · 2h 30 min · Mi–Do · Valencia ciudad · 4,8/5',
    subtitulo: 'Cena + espectáculo flamenco en directo · Miércoles a domingo · Puntuación 4,8/5',
    desc: 'Una noche única en Valencia que fusiona la mejor gastronomía mediterránea con un espectáculo de tablao flamenco en directo. La experiencia de 2 horas y 30 minutos combina una cena con productos y recetas de la cocina valenciana y española con una actuación de flamenco profesional —baile, cante y guitarra— que llena de emoción y color la velada. Disponible de miércoles a domingo, es el plan perfecto para una noche especial en Valencia: una celebración, una cita romántica o simplemente una manera diferente de descubrir dos de las grandes pasiones de la cultura española reunidas en un mismo lugar.',
    datos: [
      { d: 'Precio', v: 'Desde 75,00 € por persona · Cena + espectáculo incluidos' },
      { d: 'Duración', v: '2 horas 30 minutos · Miércoles, jueves, viernes, sábado y domingo' },
      { d: 'Incluye', v: 'Cena completa + espectáculo de tablao flamenco en directo (baile, cante y guitarra)' },
      { d: 'Ideal para', v: 'Parejas · Celebraciones · Grupos · Noche especial en Valencia' },
    ],
    imgClass: 'img-ag-flamenco',
    tags: [{ label: '4,8/5 ' }, { label: 'Cena incluida' }, { label: 'Mi–Do' }],
    url: 'https://www.visitvalencia.com/shop/gastronomia/cena-con-espectaculo-flamenco-valencia',
  },
  {
    num: '02',
    nombre: 'Vive la Paella Experience: aprende a cocinar a nuestra manera',
    tipo: 'Taller de cocina · 2h 30 min · 11:00 h · Paella valenciana auténtica · 5/5',
    subtitulo: 'Cocina la paella tú mismo · Ingredientes locales · Degustación incluida · 10% dto. VTC · 5/5 ',
    desc: 'Aprende a preparar la paella valenciana auténtica de la mano de chefs locales en un taller interactivo y participativo de 2 horas y 30 minutos. La Paella Experience comienza a las 11:00 h con la selección de los ingredientes y la explicación de la historia y los secretos del plato más famoso de España: el arroz, la carne, las verduras, el azafrán y el sofrito que marcan la diferencia entre una paella mediocre y una extraordinaria. Cada participante cocina su propia paella y la degusta al finalizar el taller. Una experiencia que permite llevarse a casa no solo el sabor, sino también la técnica y el conocimiento para reproducirla.',
    datos: [
      { d: 'Precio', v: 'Desde 62,00 € · 10% de descuento con Valencia Tourist Card · Incluye degustación' },
      { d: 'Duración', v: '2 horas 30 minutos · Salida 11:00 h · Consultar días disponibles' },
      { d: 'Incluye', v: 'Ingredientes · Chef instructor · Cocina tu propia paella · Degustación del plato cocinado' },
      { d: 'Ideal para', v: 'Todos los niveles · Familias · Parejas · Grupos · Amantes de la gastronomía' },
    ],
    imgClass: 'img-ag-paella',
    tags: [{ label: '5/5 ' }, { label: 'Tú cocinas' }, { label: '10% dto. VTC' }],
    url: 'https://www.visitvalencia.com/shop/gastronomia/paella-experience',
  },
];

var fueraCiudadEstaticas = [
  {
    num: '03',
    nombre: 'Paseo en barca y paella en l\'Albufera',
    tipo: 'Gastronomía + naturaleza · 3–4 horas · Todos los días · Salida 12:45 h · 4,9/5',
    subtitulo: 'Paseo en barca tradicional · Paella en restaurante junto al lago · Español · 4,9/5 · 168 opiniones',
    desc: 'La experiencia gastronómica más popular de Valencia y una de las más valoradas con 4,9 sobre 5 y 168 opiniones. El plan combina un paseo en barca tradicional por el Parque Natural de la Albufera —el lago más grande de España y la cuna histórica de la paella valenciana— con una paella auténtica en un restaurante frente al lago. La excursión dura entre 3 y 4 horas, sale a las 12:45 h todos los días del año y está guiada en español. La barca recorre los canales entre los arrozales mientras el guía explica la historia y la ecología del parque, y a continuación se disfruta de la paella más cercana a su origen posible: en el mismo entorno donde nació este plato hace siglos.',
    datos: [
      { d: 'Precio', v: 'Desde 26,00 € · Paseo en barca + paella incluidos · Sin VTC descuento' },
      { d: 'Duración', v: '3–4 horas · Salida 12:45 h · Todos los días del año' },
      { d: 'Incluye', v: 'Paseo en barca tradicional por la Albufera · Paella valenciana en restaurante junto al lago' },
      { d: 'Guía', v: 'En español · Información sobre el Parque Natural y los arrozales durante el paseo' },
    ],
    imgClass: 'img-ag-albufera',
    tags: [{ label: '4,9/5 ' }, { label: 'Todos los días' }, { label: 'La más vendida' }],
    url: 'https://www.visitvalencia.com/shop/gastronomia/paella-valenciana/paseo-en-barca-albufera',
  },
  {
    num: '04',
    nombre: 'Albufera Bus Turístico con paseo en barca y menú paella',
    tipo: 'Bus turístico + barca + paella · 4–6 horas · Lunes a sábado · Transporte + audioguía multilingüe',
    subtitulo: 'Transporte desde Valencia · Barca + paella incluidos · Lunes a sábado · Audioguía multilingüe · 4,7/5',
    desc: 'La versión más completa de la excursión a la Albufera: el bus turístico de Valencia recoge a los visitantes en la ciudad, los lleva al Parque Natural de la Albufera y combina el paseo en barca tradicional por el lago con un menú de paella en restaurante local. La excursión dura entre 4 y 6 horas y está disponible de lunes a sábado. El bus incluye audioguía multilingüe durante el trayecto. Una opción perfecta para quienes no disponen de vehículo propio o prefieren la comodidad de un servicio todo incluido que une transporte, naturaleza y gastronomía valenciana en un único plan sin complicaciones.',
    datos: [
      { d: 'Precio', v: 'Desde 39,00 € · Transporte + barca + menú paella incluidos' },
      { d: 'Duración', v: '4–6 horas · Lunes a sábado · Audioguía multilingüe durante el recorrido' },
      { d: 'Incluye', v: 'Bus desde Valencia · Paseo en barca · Menú paella valenciana en restaurante local' },
      { d: 'Transporte', v: 'Bus turístico con recogida en Valencia · Audioguía en varios idiomas incluida' },
    ],
    imgClass: 'img-ag-bus-albufera',
    tags: [{ label: '4,7/5 ' }, { label: 'Todo incluido' }, { label: 'Lun–Sáb' }],
    url: 'https://www.visitvalencia.com/shop/valencia-autobus-turistico/autobus-a-la-albufera-paseo-en-barca-y-paella',
  },
  {
    num: '05',
    nombre: 'Utiel-Requena: cata en bodega, visita cultural y comida',
    tipo: 'Enoturismo · 7 horas · Todos los días · Transporte incluido · Español e Inglés',
    subtitulo: 'Cata D.O. Utiel-Requena · Bodega histórica · Visita cultural Requena · Comida incluida · Todos los días',
    desc: 'La experiencia gastronómica más completa desde Valencia: un día entero de enoturismo en la comarca de Utiel-Requena, la principal zona vitivinícola de la Comunitat Valenciana. La excursión de 7 horas incluye transporte de ida y vuelta, visita guiada a la ciudad medieval de Requena con sus bodegas subterráneas y su casco histórico declarado Conjunto Histórico-Artístico, cata de vinos con Denominación de Origen Utiel-Requena —conocidos internacionalmente por la uva Bobal— y comida incluida con maridaje. Disponible todos los días en español e inglés. La combinación perfecta de cultura, historia y gastronomía a solo 70 km de Valencia.',
    datos: [
      { d: 'Precio', v: 'Desde 195,00 € · Transporte + cata en bodega + comida incluidos' },
      { d: 'Duración', v: '7 horas · Todos los días · Español e Inglés' },
      { d: 'Incluye', v: 'Transporte ida y vuelta · Visita Requena · Cata en bodega D.O. · Comida con maridaje' },
      { d: 'Destino', v: 'Requena · ~70 km de Valencia · D.O. Utiel-Requena · Uva Bobal' },
    ],
    imgClass: 'img-ag-requena',
    tags: [{ label: 'Comida incluida' }, { label: 'Enoturismo' }, { label: 'Todos los días' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/utiel-requena-cata-bodega-visita-cultural',
  },
];

var datosUtiles = [
  { label: 'Reserva', val: 'Online en visitvalencia.com · Bono imprimible o en el móvil · Reservar con antelación en fines de semana' },
  { label: 'VTC descuento', val: '10% dto. en la Paella Experience con Valencia Tourist Card · Individual e intransferible' },
  { label: 'Idiomas', val: 'Español en todas · Paella Experience y Utiel-Requena también en inglés · Consultar disponibilidad' },
  { label: 'Cancelaciones', val: 'Cambio de fecha con 48 h de antelación · vlcshop@visitvalencia.com · No reembolso' },
  { label: 'Grupos', val: 'Disponibles para grupos · Contactar directamente para tarifas especiales y organización privada' },
  { label: 'Temporada', val: 'Todas las actividades disponibles todo el año · Mayor demanda de marzo a octubre y fines de semana' },
];

export default function ActividadesGastronomicas() {
  const [actividadesDB, setActividadesDB] = useState([]);

  useEffect(() => {
    fetch('/api/Conexion.php?action=getActividadesByCategoria&categoria=Gastronomia')
      .then(res => res.json())
      .then(data => Array.isArray(data) && setActividadesDB(data))
      .catch(() => {});
  }, []);

  const mapearActividad = (a, i) => ({
    num: String(i + 1).padStart(2, '0'),
    nombre: a.Titulo,
    tipo: a.Duracion,
    subtitulo: [a.Ubicacion, a.Ciudad].filter(Boolean).join(' · '),
    desc: a.Descripcion,
    datos: [
      { d: 'Precio',   v: `${a.Precio} €` },
      { d: 'Duración', v: a.Duracion },
      { d: 'Destino',  v: [a.Ubicacion, a.Ciudad].filter(Boolean).join(' · ') },
      { d: 'Plazas',   v: `${a.Plazas_disponibles} disponibles` },
    ],
    imgClass: '',
    tags: [{ label: `${a.Precio} €` }, { label: a.Duracion }],
    url: null,
  });

  const enLaCiudad = actividadesDB.length > 0 ? actividadesDB.map(mapearActividad) : enLaCiudadEstaticas;
  const fueraCiudad = actividadesDB.length > 0 ? [] : fueraCiudadEstaticas;

  return (
    <div className="ag-page">

      {/* Hero */}
      <div className="ag-hero">
        <div className="ag-hero-overlay" />
        <div className="ag-hero-content">
          <div className="ag-eyebrow">Experiencias gastronómicas · Visit València · Sabores mediterráneos</div>
          <h1>Gastronomía<br />y experiencias<br />en Valencia</h1>
          <p>Cocina tu propia paella, cena con flamenco en directo, pasea en barca por la Albufera o descubre los vinos de Utiel-Requena. Los mejores sabores valencianos convertidos en experiencias únicas.</p>
        </div>
        <div className="ag-hero-stats">
          <div className="ag-stat">
            <span className="ag-stat-num">5</span>
            <span className="ag-stat-label">Experiencias</span>
          </div>
          <div className="ag-stat-sep" />
          <div className="ag-stat">
            <span className="ag-stat-num">Desde 26€</span>
            <span className="ag-stat-label">Por persona</span>
          </div>
          <div className="ag-stat-sep" />
          <div className="ag-stat">
            <span className="ag-stat-num">4,9/5</span>
            <span className="ag-stat-label">Valoración media</span>
          </div>
        </div>
      </div>

      {/* Section title ciudad */}
      <div className="ag-section-title">
        <h2>En Valencia ciudad</h2>
        <p>Taller de paella y cena con espectáculo flamenco: las experiencias gastronómicas más populares dentro de la ciudad.</p>
      </div>

      {/* En la ciudad */}
      <div className="ag-routes">
        {enLaCiudad.map(act => (
          <div className="ag-route-item" key={act.num}>
            <div className="ag-route-num">{act.num}</div>
            <div className="ag-route-text">
              <div className="ag-tipo">{act.tipo}</div>
              <h2>{act.nombre}</h2>
              <div className="ag-subtitulo">{act.subtitulo}</div>
              <p className="ag-desc">{act.desc}</p>
              <div className="ag-datos-titulo">Precio y datos clave</div>
              <ul className="ag-datos">
                {act.datos.map(d => (
                  <li key={d.d}>
                    <span className="ag-dato-label">{d.d}:</span>
                    <span className="ag-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="ag-tags">
                {act.tags.map(t => (
                  <span key={t.label} className="ag-tag">{t.label}</span>
                ))}
              </div>
              {act.url && (
                <a href={act.url} target="_blank" rel="noopener noreferrer" className="ag-comprar-btn">
                  Reservar en visitvalencia.com →
                </a>
              )}
            </div>
            <div className="ag-route-img">
              <div className={`ag-route-img-inner ${act.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Section title fuera ciudad */}
      <div className="ag-section-title ag-section-title--fuera">
        <h2>Fuera de la ciudad</h2>
        <p>La Albufera y Utiel-Requena: gastronomía valenciana en su entorno natural y origen.</p>
      </div>

      {/* Fuera de la ciudad */}
      <div className="ag-routes">
        {fueraCiudad.map(act => (
          <div className="ag-route-item" key={act.num}>
            <div className="ag-route-num">{act.num}</div>
            <div className="ag-route-text">
              <div className="ag-tipo">{act.tipo}</div>
              <h2>{act.nombre}</h2>
              <div className="ag-subtitulo">{act.subtitulo}</div>
              <p className="ag-desc">{act.desc}</p>
              <div className="ag-datos-titulo">Precio y datos clave</div>
              <ul className="ag-datos">
                {act.datos.map(d => (
                  <li key={d.d}>
                    <span className="ag-dato-label">{d.d}:</span>
                    <span className="ag-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
              <div className="ag-tags">
                {act.tags.map(t => (
                  <span key={t.label} className="ag-tag">{t.label}</span>
                ))}
              </div>
              {act.url && (
                <a href={act.url} target="_blank" rel="noopener noreferrer" className="ag-comprar-btn">
                  Reservar en visitvalencia.com →
                </a>
              )}
            </div>
            <div className="ag-route-img">
              <div className={`ag-route-img-inner ${act.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla info útil */}
      <div className="ag-info-practica">
        <h3>Información útil · Actividades gastronómicas en Valencia</h3>
        <div className="ag-tabla">
          {datosUtiles.map(d => (
            <div className="ag-tabla-fila" key={d.label}>
              <div className="ag-tabla-label">{d.label}</div>
              <div className="ag-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ag-info-box">
        <h3>Consejos para elegir tu experiencia gastronómica en Valencia</h3>
        <ul className="ag-info-list">
          <li>La experiencia <strong>Paseo en barca y paella en la Albufera</strong> (26 €) es la mejor relación calidad-precio de toda la oferta: combina naturaleza, cultura y gastronomía auténtica en solo 3–4 horas</li>
          <li>La <strong>Paella Experience</strong> (62 €) es la opción más activa: si quieres entender de verdad la paella valenciana, nada mejor que cocinarla tú mismo bajo la supervisión de un chef local</li>
          <li>La <strong>Cena con tablao flamenco</strong> (75 €) es perfecta para una noche especial: reserva siempre el viernes o sábado para disfrutar del ambiente más festivo del espectáculo</li>
          <li>La versión con <strong>Bus Turístico a la Albufera</strong> (39 €) es ideal si no tienes coche: todo incluido sin necesidad de organizar el transporte por tu cuenta</li>
          <li>La excursión a <strong>Utiel-Requena</strong> (195 €) es la más cara pero también la más completa: enoturismo, historia medieval y comida con maridaje en un solo día, perfecta para grupos de amigos o parejas</li>
          <li>Reserva siempre con <strong>antelación los fines de semana</strong>: la Paella Experience y la cena con flamenco suelen llenarse los viernes y sábados, especialmente de mayo a septiembre</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}