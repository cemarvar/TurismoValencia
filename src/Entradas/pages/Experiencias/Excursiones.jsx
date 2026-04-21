import { useState, useEffect } from 'react';
import '../../assets/cssExperiencias/Excursiones.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var excursionesEstaticas = [
  {
    num: '01',
    nombre: 'Excursión a las Cuevas de San José',
    tipo: 'Excursión con transporte · 4 horas · Todos los días · Salida 08:15 h',
    subtitulo: 'Transporte incluido · Guía · 10% dto. VTC · Puntuación 5/5 · La Vall d\'Uixó · Castellón',
    desc: 'Las Cuevas de San José, en La Vall d\'Uixó (Castellón), albergan el río subterráneo navegable más largo de Europa. Durante la excursión, un barco recorre los canales y galerías excavadas en la roca caliza a lo largo de varios centenares de metros, con formaciones de estalactitas y estalagmitas que crean un paisaje subterráneo único e irrepetible. La excursión incluye transporte de ida y vuelta desde Valencia con salida a las 08:15 h todos los días del año y dura unas 4 horas en total. Una de las salidas más valoradas con puntuación perfecta de 5/5.',
    datos: [
      { d: 'Precio', v: 'Desde 69,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '4 horas · Salida 08:15 h · Todos los días del año' },
      { d: 'Destino', v: 'Cuevas de San José · La Vall d\'Uixó · Castellón · ~60 km de Valencia' },
      { d: 'Incluye', v: 'Transporte ida y vuelta · Guía · Entrada a las cuevas · Paseo en barca subterránea' },
    ],
    imgClass: 'img-exc-cuevas',
    tags: [{ label: '5/5 ' }, { label: 'Todos los días' }, { label: 'Transporte incluido' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/excursion-cuevas-san-jose',
  },
  {
    num: '02',
    nombre: 'Montanejos: aguas termales y Salto de la Novia',
    tipo: 'Excursión con transporte · 8 horas · Lunes a viernes · Salida 09:00 h · Naturaleza',
    subtitulo: 'Aguas termales a 25 °C · Cascadas · Naturaleza · 10% dto. VTC · Castellón interior',
    desc: 'Montanejos es uno de los destinos de turismo natural más espectaculares de la Comunitat Valenciana. La Fuente de los Baños ofrece aguas termales que brotan a 25 °C todo el año, creando una piscina natural donde bañarse entre las rocas del río Mijares. El Salto de la Novia es una cascada de gran belleza a pocos minutos del pueblo. La excursión dura 8 horas completas con transporte de ida y vuelta desde Valencia, salida de lunes a viernes a las 09:00 h. Un día completo de naturaleza, agua y montaña a solo 90 km de Valencia.',
    datos: [
      { d: 'Precio', v: 'Desde 89,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '8 horas · Salida 09:00 h · Lunes a viernes' },
      { d: 'Destino', v: 'Montanejos · Castellón · ~90 km de Valencia · Fuente de los Baños + Salto de la Novia' },
      { d: 'Incluye', v: 'Transporte ida y vuelta · Guía · Tiempo libre en aguas termales y cascadas' },
    ],
    imgClass: 'img-exc-montanejos',
    tags: [{ label: 'Aguas termales' }, { label: '8 horas' }, { label: 'Lun–Vie' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/excursion-aguas-termales-y-cascadas-montanejos',
  },
  {
    num: '03',
    nombre: 'Sagunto: la ciudad del Imperio Romano',
    tipo: 'Excursión con transporte · 4 horas · Sábados · Salida 08:30 h · Historia y arqueología',
    subtitulo: 'Teatro Romano · Castillo árabe · Barrio judío medieval · 10% dto. VTC · A 28 km de Valencia',
    desc: 'Sagunto es una de las ciudades más cargadas de historia de toda España. Sus habitantes prefirieron la muerte antes que rendirse a Aníbal en el año 219 a.C. Hoy conserva un espectacular Teatro Romano, uno de los mejor conservados de la Península, y un castillo árabe que domina la llanura con vistas desde el mar hasta las montañas del interior. El barrio judío medieval y el casco histórico completan una visita que abarca más de 2.000 años de historia en apenas 4 horas. Salida los sábados a las 08:30 h con transporte incluido.',
    datos: [
      { d: 'Precio', v: 'Desde 45,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '4 horas · Salida 08:30 h · Sábados' },
      { d: 'Destino', v: 'Sagunto · ~28 km de Valencia · Teatro Romano · Castillo árabe · Barrio judío' },
      { d: 'Incluye', v: 'Transporte ida y vuelta · Guía oficial · Visita al Teatro Romano y al Castillo' },
    ],
    imgClass: 'img-exc-sagunto',
    tags: [{ label: 'Historia romana' }, { label: '4 horas' }, { label: 'Sábados' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/excursion-legado-romano-sagunto',
  },
  {
    num: '04',
    nombre: 'Peñíscola: Juego de Tronos e historias medievales',
    tipo: 'Excursión con transporte · 8–9 horas · Martes a sábado · Salida 09:00 h',
    subtitulo: 'Castillo del Papa Luna · Juego de Tronos · Ciudad amurallada · 10% dto. VTC · Costa Azahar',
    desc: 'Peñíscola es uno de los pueblos medievales más impresionantes de España y escenario del rodaje de Juego de Tronos. La ciudad amurallada se alza sobre una roca volcánica rodeada por el Mediterráneo, dominada por el Castillo del Papa Luna, donde vivió el Papa Benedicto XIII durante el Gran Cisma de Occidente. La excursión dura entre 8 y 9 horas e incluye transporte de ida y vuelta. Sale de martes a sábado a las 09:00 h. Una combinación única de historia medieval, paisaje costero espectacular y cultura popular.',
    datos: [
      { d: 'Precio', v: 'Desde 89,00 € · 10% de descuento con Valencia Tourist Card' },
      { d: 'Duración', v: '8–9 horas · Salida 09:00 h · Martes a sábado' },
      { d: 'Destino', v: 'Peñíscola · Castellón · ~140 km de Valencia · Castillo Papa Luna · Ciudad amurallada' },
      { d: 'Incluye', v: 'Transporte ida y vuelta · Guía · Entrada al Castillo del Papa Luna' },
    ],
    imgClass: 'img-exc-peniscola',
    tags: [{ label: 'Juego de Tronos' }, { label: 'Medieval' }, { label: '8–9 horas' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/excursion-peniscola-juego-tronos-e-historias-medievales',
  },
  {
    num: '05',
    nombre: 'Utiel-Requena: cata en bodega, visita cultural y comida',
    tipo: 'Excursión con transporte · 7 horas · Todos los días · Español e Inglés · Enoturismo',
    subtitulo: 'Cata de vinos D.O. Utiel-Requena · Ciudad medieval · Comida incluida · Bodega histórica',
    desc: 'La comarca de Utiel-Requena es la principal zona vitivinícola de la Comunitat Valenciana, con la D.O. Utiel-Requena reconocida internacionalmente por sus vinos de Bobal. La excursión de 7 horas incluye transporte de ida y vuelta desde Valencia, visita guiada a la ciudad de Requena con su casco histórico medieval y sus bodegas subterráneas, cata de vinos en bodega y comida incluida. Disponible todos los días con guía en español e inglés. La experiencia de enoturismo más completa desde Valencia.',
    datos: [
      { d: 'Precio', v: 'Desde 195,00 € · Comida y cata de vinos incluidas · Transporte ida y vuelta' },
      { d: 'Duración', v: '7 horas · Todos los días · Español e Inglés' },
      { d: 'Destino', v: 'Requena · ~70 km de Valencia · D.O. Utiel-Requena · Bodegas · Ciudad medieval' },
      { d: 'Incluye', v: 'Transporte · Guía · Visita Requena · Cata en bodega · Comida con maridaje incluida' },
    ],
    imgClass: 'img-exc-requena',
    tags: [{ label: 'Comida incluida' }, { label: 'Enoturismo' }, { label: 'Todos los días' }],
    url: 'https://www.visitvalencia.com/shop/visitas-guiadas/excursiones-fuera-de-valencia/utiel-requena-cata-bodega-visita-cultural',
  },
];

var datosUtiles = [
  { label: 'Transporte', val: 'Todas las excursiones incluyen transporte de ida y vuelta desde Valencia · Autobús o minibús según el grupo' },
  { label: 'Salida', val: 'Punto de salida en Valencia · Consultar punto exacto en cada excursión al finalizar la reserva' },
  { label: 'Compra', val: 'Online en visitvalencia.com · Bono imprimible o descargable en el móvil · Reservar con antelación' },
  { label: 'VTC descuento', val: '10% de descuento en la mayoría de excursiones con la Valencia Tourist Card · Individual e intransferible' },
  { label: 'Cancelaciones', val: 'No se permite anulación o reembolso · Cambio de fecha posible con 48 h de antelación · vlcshop@visitvalencia.com' },
  { label: 'Idiomas', val: 'Español en todas · Utiel-Requena también en inglés · Consultar disponibilidad de otros idiomas' },
];

export default function Excursiones() {
  const [excursionesDB, setExcursionesDB] = useState([]);

  useEffect(() => {
    fetch('/api/Conexion.php?action=getActividadesByCategoria&categoria=Naturaleza')
      .then(res => res.json())
      .then(data => Array.isArray(data) && setExcursionesDB(data))
      .catch(() => {});
  }, []);

  const excursiones = excursionesDB.length > 0
    ? excursionesDB.map((a, i) => ({
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
      }))
    : excursionesEstaticas;

  return (
    <div className="exc-page">

      {/* Hero */}
      <div className="exc-hero">
        <div className="exc-hero-overlay" />
        <div className="exc-hero-content">
          <div className="exc-eyebrow">Experiencias · Excursiones desde Valencia · Provincia y alrededores</div>
          <h1>Excursiones<br />desde Valencia</h1>
          <p>Sal de la ciudad y descubre los paisajes, la historia y la naturaleza que rodean Valencia: cuevas subterráneas, aguas termales, ciudades romanas y medievales, y bodegas entre viñedos.</p>
        </div>
        <div className="exc-hero-stats">
          <div className="exc-stat">
            <span className="exc-stat-num">5</span>
            <span className="exc-stat-label">Destinos</span>
          </div>
          <div className="exc-stat-sep" />
          <div className="exc-stat">
            <span className="exc-stat-num">Desde 45€</span>
            <span className="exc-stat-label">Por persona</span>
          </div>
          <div className="exc-stat-sep" />
          <div className="exc-stat">
            <span className="exc-stat-num">100%</span>
            <span className="exc-stat-label">Transporte incluido</span>
          </div>
        </div>
      </div>

      {/* Section title */}
      <div className="exc-section-title">
        <h2>Todas las excursiones desde Valencia</h2>
        <p>Con transporte incluido, guía oficial y reserva online en visitvalencia.com.</p>
      </div>

      {/* Excursiones */}
      <div className="exc-routes">
        {excursiones.map(exc => (
          <div className="exc-route-item" key={exc.num}>
            <div className="exc-route-num">{exc.num}</div>
            <div className="exc-route-text">
              <div className="exc-tipo">{exc.tipo}</div>
              <h2>{exc.nombre}</h2>
              <div className="exc-subtitulo">{exc.subtitulo}</div>
              <p className="exc-desc">{exc.desc}</p>

              <div className="exc-datos-titulo">Precio y datos clave</div>
              <ul className="exc-datos">
                {exc.datos.map(d => (
                  <li key={d.d}>
                    <span className="exc-dato-label">{d.d}:</span>
                    <span className="exc-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="exc-tags">
                {exc.tags.map(t => (
                  <span key={t.label} className="exc-tag">{t.label}</span>
                ))}
              </div>

              {exc.url && (
                <a
                  href={exc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="exc-comprar-btn"
                >
                  Reservar en visitvalencia.com →
                </a>
              )}
            </div>

            <div className="exc-route-img">
              <div className={`exc-route-img-inner ${exc.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla info útil */}
      <div className="exc-info-practica">
        <h3>Información útil · Excursiones desde Valencia</h3>
        <div className="exc-tabla">
          {datosUtiles.map(d => (
            <div className="exc-tabla-fila" key={d.label}>
              <div className="exc-tabla-label">{d.label}</div>
              <div className="exc-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="exc-info-box">
        <h3>Consejos para elegir tu excursión desde Valencia</h3>
        <ul className="exc-info-list">
          <li>Si solo tienes <strong>medio día libre</strong>, las excursiones a las Cuevas de San José (4h) o a Sagunto (4h) son la mejor opción, con salidas muy temprano para aprovechar el resto del día en Valencia</li>
          <li>Para un <strong>día completo de naturaleza</strong>, Montanejos es la excursión más valorada: las aguas termales del río Mijares a 25 °C todo el año son una experiencia única a solo 90 km de Valencia</li>
          <li><strong>Peñíscola</strong> es la excursión más espectacular visualmente: la ciudad amurallada sobre el mar merece fotografiarse desde todos los ángulos, especialmente al amanecer antes de que lleguen los grupos</li>
          <li>La excursión a <strong>Utiel-Requena</strong> incluye comida y cata de vinos: es la más cara pero también la más completa, perfecta para quienes buscan una experiencia gastronómica y cultural en un solo día</li>
          <li>Con la <strong>Valencia Tourist Card</strong> tienes un 10% de descuento en la mayoría de excursiones: compra siempre online en visitvalencia.com para obtener el precio más económico</li>
          <li>Reserva con al menos <strong>24–48 horas de antelación</strong> en temporada alta: algunas excursiones tienen plazas limitadas y se agotan, especialmente las de Cuevas de San José y Peñíscola en verano</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}