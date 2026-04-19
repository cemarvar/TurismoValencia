import '../assets/css/Fallas.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var actos = [
  {
    num: '01',
    nombre: 'La Crida',
    fecha: 'Último domingo de febrero',
    subtitulo: 'El pregón oficial · Inicio de las Fallas · Torres de Serranos',
    desc: 'La fiesta arranca oficialmente el último domingo de febrero con la Crida —llamamiento en valenciano—, el acto en el que las Falleras Mayores de Valencia, desde lo alto de las Torres de Serranos, animan a toda la ciudad y al mundo a sumarse a las Fallas. Es el pistoletazo oficial que da paso a semanas de pólvora, arte y celebración en la calle. La Crida es uno de los actos más emotivos para los falleros y falleras, que escuchan desde las calles del centro histórico el mensaje de sus máximas representantes.',
    dato: 'Torres de Serranos · Último domingo de febrero · Acceso libre',
    imgClass: 'img-cridafll',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Centro histórico' }],
  },
  {
    num: '02',
    nombre: 'La Mascletà',
    fecha: '1–19 de marzo · 14:00 h · Plaza del Ayuntamiento',
    subtitulo: '19 mascletàs · 120 decibelios · El ritual diario del fuego',
    desc: 'La mascletà es el ritual que marca el pulso de cada día durante los 19 días de Fallas. A las 14:00 h en punto, la Fallera Mayor sale al balcón del Ayuntamiento y pronuncia las palabras mágicas: "Senyor pirotècnic, pot començar la mascletà". Y entonces el suelo y el aire vibran simultáneamente durante diez minutos con cientos de kilos de pólvora que alcanzan los 120 decibelios. No es un espectáculo visual: es una experiencia física, sensorial, que se siente en el pecho. Una pirotecnia distinta cada día firma su mascletà, y la rivalidad entre ellas es parte de la leyenda. Truco imprescindible: mantén la boca entreabierta para amortiguar la presión.',
    dato: 'Plaza del Ayuntamiento · 14:00 h del 1 al 19 de marzo · Acceso libre · Llega 30 min antes',
    imgClass: 'img-mascletafll',
    tags: [{ label: 'Gratuito', free: true }, { label: '14:00 h' }, { label: '120 dB' }],
  },
  {
    num: '03',
    nombre: "L'Albà i la Plantà",
    fecha: 'Noche del 15 al 16 de marzo',
    subtitulo: 'El montaje mágico · Más de 400 monumentos en una sola noche',
    desc: 'La noche del 15 al 16 de marzo es una de las más mágicas de las Fallas. A las 23:59 h del día 15, la Nit de l\'Albà inaugura la Semana Fallera con todas las pirotecnias de la ciudad disparando simultáneamente —tradición recuperada en 2016—. A partir de ese momento, las 397 comisiones falleras trabajan sin descanso para que al amanecer del día 16 todos los monumentos estén plantados. Las fallas pueden alcanzar entre 14 y 20 metros de altura —el equivalente a un edificio de cinco plantas—. Al alba, el jurado recorre la ciudad y premia las mejores. Ver la ciudad transformada de madrugada, con los falleros todavía montando sus obras, es una experiencia única.',
    dato: 'Noche del 15 al 16 · A partir del 16 a las 9:00 h ya se pueden visitar todos los monumentos',
    imgClass: 'img-plantafll',
    tags: [{ label: 'Noche del 15' }, { label: '+400 fallas' }, { label: 'Gratis' }],
  },
  {
    num: '04',
    nombre: 'El Ninot Indultat · Exposición del Ninot',
    fecha: 'Desde febrero · Veredicto el 15 de marzo',
    subtitulo: 'La única figura que se salva del fuego · Votación popular · Museo Fallero',
    desc: 'Cada comisión fallera aporta una figura —el ninot— a la Exposición del Ninot, celebrada en la Sala Arquerías del Museu de les Ciències (CAC). El público vota cuál merece salvarse de la cremà. El ganador, el ninot indultat, es la única figura de toda la fiesta que no arderá: pasa directamente al Museo Fallero, donde se conservan todos los indultats desde 1934. El veredicto popular del ninot infantil se lee el 14 de marzo y el de adultos el 15 de marzo. La exposición tiene entrada (3 €) y es una de las formas más accesibles de ver el nivel artístico de los monumentos falleros antes de que ardan.',
    dato: 'Exposición: CAC Museu de les Ciències · 3 € · Veredicto: 14–15 de marzo · Museo Fallero: gratuito lunes cerrado',
    imgClass: 'img-ninotfll',
    tags: [{ label: 'Votación popular' }, { label: 'Desde 1934' }, { label: 'Museo Fallero' }],
  },
  {
    num: '05',
    nombre: "L'Ofrenda de Flores",
    fecha: '17 y 18 de marzo · 15:30–01:00 h',
    subtitulo: 'Plaza de la Virgen · Tapiz de 15 metros · El acto más emotivo de las Fallas',
    desc: 'Durante dos días consecutivos, el 17 y el 18 de marzo, miles de falleros y falleras recorren la ciudad ataviados con la indumentaria valenciana tradicional, desde sus barrios hasta la Plaza de la Virgen, para depositar flores a los pies de la Virgen de los Desamparados. Las flores, dispuestas por las comisiones según el diseño de ese año, van formando progresivamente un manto que al terminar alcanza 15 metros de altura sobre la imagen. El olor de las flores, la música de las bandas, el colorido de los trajes y la emoción de los falleros hacen de la Ofrenda el acto más sentido y universalmente reconocido de las Fallas. Se puede visitar el tapiz hasta el 20 de marzo.',
    dato: 'Plaza de la Virgen · 17 y 18 de marzo · Acceso libre · Tapiz de 15 m visitable hasta el 20',
    imgClass: 'img-ofrendafll',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Tapiz floral 15 m' }, { label: 'Acto más emotivo' }],
  },
  {
    num: '06',
    nombre: "La Nit del Foc · Castillos de Fuegos",
    fecha: '16, 17 y 18 de marzo · 00:00 h · Jardín del Turia',
    subtitulo: 'Castillos de fuegos artificiales · Nit del Foc el 18 · +20 minutos de espectáculo',
    desc: 'Las noches de la Semana Fallera se iluminan con castillos de fuegos artificiales disparados desde el puente de Monteolivete, junto a la Ciudad de las Artes y las Ciencias. A las 23:59 h durante los días centrales, el cielo de Valencia se convierte en un lienzo de luz y color. El más esperado es la Nit del Foc —la noche del fuego— del 18 de marzo: más de 20 minutos de fuegos artificiales que atraen a cientos de miles de espectadores a lo largo del Jardín del Turia. Es el mayor espectáculo pirotécnico de toda la fiesta y uno de los más impresionantes de España.',
    dato: 'Jardín del Turia (Alameda) · 16–18 de marzo · 00:00 h · Nit del Foc: 18 de marzo · Acceso libre',
    imgClass: 'img-focfll',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Nit del Foc el 18' }, { label: '+20 min' }],
  },
  {
    num: '07',
    nombre: "La Cremà",
    fecha: '19 de marzo · A partir de las 20:00 h',
    subtitulo: 'El gran final · Todo arde · Fallas infantiles 20:00 h · Fallas grandes 22:00 h',
    desc: 'La noche del 19 de marzo, día de San José, llega la cremà: el momento en que cada falla arde frente a los bomberos y los propios falleros que la construyeron durante meses. Es el acto más emocionante y paradójico de la fiesta: arte efímero que se consume en minutos ante la mirada de quienes más lo han trabajado. A las 20:00 h empiezan a arder las fallas infantiles; a las 22:00 h las grandes; a las 22:30 h el primer premio de Sección Especial; y a las 23:00 h la falla de la Plaza del Ayuntamiento, la última en arder, con los bomberos mojando la fachada del Ayuntamiento. La estrategia ideal: hacer la ruta de la cremà saltando de barrio en barrio.',
    dato: 'Infantiles: 20:00 h · Grandes: 22:00 h · 1er Premio SE: 22:30 h · Ayuntamiento: 23:00 h',
    imgClass: 'img-cremafll',
    tags: [{ label: '19 de marzo' }, { label: 'La gran noche' }, { label: 'Arte efímero' }],
  },
];

var datosUtiles = [
  { label: 'Fechas', val: '1–19 de marzo · Semana Fallera: 15–19 de marzo' },
  { label: 'Patrimonio UNESCO', val: 'Declaradas Patrimonio Cultural Inmaterial de la Humanidad en noviembre de 2016' },
  { label: 'Comisiones falleras', val: '397 comisiones en Valencia · Cada una planta su falla en el barrio' },
  { label: 'Monumentos', val: '+400 fallas plantadas en calles y plazas · Alturas de 14–20 metros' },
  { label: 'Mascletàs', val: 'Del 1 al 19 de marzo · 14:00 h · Plaza del Ayuntamiento · 19 mascletàs' },
  { label: 'Ofrenda de flores', val: '17 y 18 de marzo · 15:30–01:00 h · Plaza de la Virgen · Tapiz de 15 m' },
  { label: 'La cremà', val: '19 de marzo · Infantiles 20:00 h · Grandes 22:00 h · Ayuntamiento 23:00 h' },
  { label: 'Nit del Foc', val: '18 de marzo · 00:00 h · Jardín del Turia · +20 min de fuegos artificiales' },
  { label: 'Acceso', val: 'La mayoría de actos son gratuitos · Solo la Exposición del Ninot tiene entrada (~3 €)' },
  { label: 'Alojamiento', val: 'Reserva con meses de antelación · Los precios en Semana Fallera se multiplican' },
];

export default function Fallas() {
  return (
    <div className="fal-page">

      {/* Hero */}
      <div className="fal-hero">
        <div className="fal-hero-overlay" />
        <div className="fal-hero-content">
          <div className="fal-eyebrow">Eventos · Patrimonio Cultural Inmaterial UNESCO 2016 · 1–19 de marzo</div>
          <h1>Les Falles<br />de Valencia</h1>
          <p>19 días de pólvora, arte efímero, flores y fuego. La fiesta más grande de Valencia combina sátira crítica, tradición centenaria y el espectáculo pirotécnico más impresionante de Europa.</p>
        </div>
        <div className="fal-hero-stats">
          <div className="fal-stat">
            <span className="fal-stat-num">+400</span>
            <span className="fal-stat-label">monumentos falleros</span>
          </div>
          <div className="fal-stat-sep" />
          <div className="fal-stat">
            <span className="fal-stat-num">19</span>
            <span className="fal-stat-label">días de fiesta</span>
          </div>
          <div className="fal-stat-sep" />
          <div className="fal-stat">
            <span className="fal-stat-num">+1M</span>
            <span className="fal-stat-label">visitantes cada año</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="fal-intro">
        <p>Las Fallas son, ante todo, una fiesta de barrio que escala hasta convertirse en un espectáculo global. Cada comisión fallera —una asociación de vecinos de toda la vida— trabaja durante todo el año para plantar su monumento en la calle, organizar actos en su local y representar su barrio en la fiesta. Esa estructura popular, de base ciudadana, es lo que hace de las Fallas algo genuinamente distinto a cualquier otra celebración del mundo.</p>
        <p>Para el visitante, las Fallas son una superposición de experiencias: el suelo que vibra con la mascletà, el olor a pólvora mezclado con el de los buñuelos, el paseo nocturno entre fallas iluminadas, la emoción de ver arder en minutos lo que tardaron meses en construir. <strong>No hay festival en el mundo que combine arte, pirotecnia, tradición y comunidad de esta manera.</strong></p>
      </div>

      {/* Actos principales */}
      <div className="fal-section-title">
        <h2>Los actos imprescindibles de las Fallas</h2>
        <p>Del pregón de la Crida a la última llama de la cremà: los siete momentos que no puedes perderte.</p>
      </div>

      <div className="fal-routes">
        {actos.map(acto => (
          <div className="fal-route-item" key={acto.num}>
            <div className="fal-route-num">{acto.num}</div>

            <div className="fal-route-text">
              <div className="fal-fecha-badge">{acto.fecha}</div>
              <h2>{acto.nombre}</h2>
              <div className="fal-subtitulo">{acto.subtitulo}</div>
              <p className="fal-desc">{acto.desc}</p>

              <div className="fal-dato-box">
                <span>{acto.dato}</span>
              </div>

              <div className="fal-tags">
                {acto.tags.map(t => (
                  <span key={t.label} className={`fal-tag ${t.free ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="fal-route-img">
              <div className={`fal-route-img-inner ${acto.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos útiles */}
      <div className="fal-info-practica">
        <h3>Datos útiles · Fallas de Valencia</h3>
        <div className="fal-tabla">
          {datosUtiles.map(d => (
            <div className="fal-tabla-fila" key={d.label}>
              <div className="fal-tabla-label">{d.label}</div>
              <div className="fal-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box consejos */}
      <div className="fal-info-box">
        <h3>Consejos para vivir las Fallas como un valenciano</h3>
        <ul className="fal-info-list">
          <li>Para la <strong>mascletà</strong>, llega a la Plaza del Ayuntamiento 30 min antes y mantén la boca entreabierta para amortiguar los 120 decibelios</li>
          <li>La <strong>Nit de l'Albà</strong> del 15 de marzo y la <strong>Nit del Foc</strong> del 18 son los castillos de fuegos más impresionantes — elige tu posición con antelación en el Jardín del Turia</li>
          <li>La <strong>ruta de la cremà</strong> del 19 de marzo: salta de barrio en barrio — las fallas más pequeñas arden antes y tienen un ambiente más íntimo y emotivo</li>
          <li>Visita las fallas <strong>de noche</strong>: la iluminación las transforma completamente y el ambiente en los barrios es incomparable</li>
          <li>Los <strong>buñuelos de calabaza con chocolate</strong> son el desayuno y merienda falleros por excelencia — búscalos en cualquier puesto de la calle</li>
          <li>Reserva <strong>alojamiento con meses de antelación</strong>: durante la Semana Fallera (15–19 de marzo) los precios se multiplican y todo se agota</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}