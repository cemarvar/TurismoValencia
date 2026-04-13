import '../assets/css/CorpusChristi.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var actos = [
  {
    num: '01',
    nombre: 'Traslado de las Rocas',
    fecha: 'Viernes · 20:00 h',
    subtitulo: '11 carros triunfales · Alameditas de Serranos → Plaza de la Virgen',
    desc: 'El viernes por la noche, los once carros triunfales conocidos como Rocas son trasladados solemnemente desde su custodia habitual en la Casa de las Rocas hasta la Plaza de la Virgen, donde permanecen expuestos hasta la procesión del domingo. Las Rocas son estructuras de madera con forma de barco antiguo que portan grupos escultóricos con episodios del Antiguo y Nuevo Testamento. Su origen se fecha entre 1373 y 1392, y las más antiguas de las actuales —"La Diablera"— datan del siglo XVI. Tiradas por caballos enjaezados especialmente para el acto, su desfile nocturno abre oficialmente los días grandes del Corpus. La más reciente es "El Santo Cáliz", que desfiló por primera vez en 2001 y fue bendecida por el Papa Juan Pablo II.',
    dato: 'Viernes · 20:00 h · Desde Alameditas de Serranos a Plaza de la Virgen · Acceso libre',
    imgClass: 'img-rocas',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Viernes noche' }, { label: 'Siglo XIV–XX' }],
  },
  {
    num: '02',
    nombre: 'La Nit d\'Albaes',
    fecha: 'Viernes · 23:30 h',
    subtitulo: 'Cantos tradicionales · Recorrido desde la Casa de las Rocas',
    desc: 'Tras el traslado de las Rocas, la noche del viernes se llena de música tradicional valenciana con la Nit d\'Albaes. Los cantores recorren el itinerario habitual partiendo desde la Casa de las Rocas, interpretando las albaes —cantos populares valencianos de carácter festivo y de madrugada. Es uno de los actos más íntimos y auténticos del Corpus, que permite vivir la fiesta con los sonidos más genuinos de la tradición musical valenciana.',
    dato: 'Viernes · 23:30 h · Desde la Casa de las Rocas · Recorrido por el centro histórico',
    imgClass: 'img-albaes',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Noche del viernes' }, { label: 'Música tradicional' }],
  },
  {
    num: '03',
    nombre: 'La Poalà · La Penja de Poals',
    fecha: 'Sábado · 12:00 h · Calles Cavallers y Avellanes',
    subtitulo: 'El momento más divertido del Corpus · Cubos de agua desde los balcones',
    desc: 'El sábado al mediodía, las calles de Cavallers y Avellanes se convierten en el escenario de uno de los momentos más populares y divertidos del Corpus: la Poalà. Los vecinos cuelgan pozales (cubos) en los balcones y, cuando pasan los "soldados del rey Herodes" de la Cabalgata del Convite, los reciben con cubos de agua. La broma tiene su réplica y los de abajo contraatacan. Es una tradición antigua de carácter festivo y de buen humor que combina la sátira popular con la celebración religiosa, y que cada año llena esas calles del barrio del Carmen de carcajadas, agua y espíritu de barrio.',
    dato: 'Sábado · 12:00 h · Calles Cavallers y Avellanes · Lleva ropa para mojarte',
    imgClass: 'img-poala',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Sábado mediodía' }, { label: 'Tradición popular' }],
  },
  {
    num: '04',
    nombre: 'Els Misteris · Representació dels Misteris',
    fecha: 'Sábado · 18:00 h · Plaza de la Virgen',
    subtitulo: 'Teatro medieval del siglo XV · Escenificado por niños · Pasajes bíblicos',
    desc: 'La tarde del sábado, la Plaza de la Virgen acoge la Representació dels Misteris: tres piezas de teatro breve que datan del siglo XV, escenificadas por niños, que narran pasajes bíblicos relacionados con los personajes que desfilarán al día siguiente en la Cabalgata del Convite y la Procesión. Es una de las tradiciones teatrales más antiguas de Valencia, superviviente del teatro religioso medieval que en el siglo XV llenaba las calles de la ciudad. Combinan el carácter didáctico con el espectáculo visual de los trajes históricos y la ambientación de la Plaza de la Virgen iluminada al atardecer.',
    dato: 'Sábado · 18:00 h · Plaza de la Virgen · Acceso libre · Representados por niños',
    imgClass: 'img-misteris',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Teatro medieval' }, { label: 'Siglo XV' }],
  },
  {
    num: '05',
    nombre: 'Cabalgata del Convite · La Moma i els Momos',
    fecha: 'Domingo · 12:00 h · Plaza de Manises',
    subtitulo: 'El Capellà de les Roques · La Moma · 7 pecados capitales · Danzas tradicionales',
    desc: 'La Cabalgata del Convite es el gran espectáculo popular del Corpus. Desde la Plaza de Manises, el Capellà de les Roques —montado en un caballo con gualdrapa negra bordada en plata— encabeza la comitiva invitando al pueblo a la Procesión del Corpus, tal como hacían los jurados de Valencia desde 1516. Tras él desfilan las danzas más emblemáticas: La Moma i els Momos —la danza más antigua y específica del Corpus valenciano, en la que la Virtud (La Moma, vestida de blanco, y representada siempre por un hombre) derrota a los Siete Pecados Capitales (Els Momos, con traje negro y amarillo y antifaz)— junto a Els Arquets, Els Pastorets, Els Llauradors y Els Gegants i Nanos. Todo amenizado con música de dolçaina i tabalet.',
    dato: 'Domingo · 12:00 h · Sale de Plaza de Manises · Recorre Cavallers, Plaça Virgen, Avellanes · Acceso libre',
    imgClass: 'img-moma',
    tags: [{ label: 'Gratuito', free: true }, { label: 'La Moma' }, { label: 'Danzas medievales' }],
  },
  {
    num: '06',
    nombre: 'Pas de les Roques · Paso de las Rocas',
    fecha: 'Domingo · 16:30 h · Calle Cavallers',
    subtitulo: '11 carros triunfales tirados por caballos · Recorrido por el centro histórico',
    desc: 'La tarde del domingo, las once Rocas vuelven a recorrer las calles del centro histórico, esta vez precediendo la Solemne Procesión. Tiradas por caballos enjaezados, desfilan por las calles de Cavallers, Plaza del Tossal, Mercat, María Cristina, San Vicent, Plaza de la Reina, del Mar, Avellanes y suben hasta el Palau Arzobispal. Es el momento en que el público puede admirar de cerca estas monumentales carrozas medievales —algunas de varios metros de altura— en movimiento por las estrechas calles del centro histórico, una imagen sin igual en ninguna otra fiesta española.',
    dato: 'Domingo · 16:30 h · Sale de Calle Cavallers · Recorre el centro histórico · Acceso libre',
    imgClass: 'img-pasrocas',
    tags: [{ label: 'Gratuito', free: true }, { label: 'Caballos y carrozas' }, { label: 'Domingo tarde' }],
  },
  {
    num: '07',
    nombre: 'La Solemne Procesión',
    fecha: 'Domingo · 19:00 h · Puerta de los Apóstoles de la Catedral',
    subtitulo: 'El acto central · La Custodia · La Senyera · Personajes bíblicos · Banda Municipal',
    desc: 'La Solemne Procesión es el acto central y más majestuoso del Corpus. Parte de la Puerta de los Apóstoles de la Catedral a las 19:00 h del domingo y recorre el distrito de Ciutat Vella. Abre La Senyera de la ciudad flanqueada por Les Banderoles, portada por los tres Reyes de Armas con pelucas y barbas blancas. Tras ellos desfilan personajes del Antiguo y Nuevo Testamento, el Gremio de Carpinteros, danzas, los Gegants i Nanos, los once Misteris con sus figuras bíblicas (el Rey Herodes, San Cristóbal, la Tarasca, el Dragón de Sant Jordi...). El colofón es la Custodia —elemento primordial del Corpus— precedida por el Arzobispo de Valencia. Toda la procesión se ameniza con la Banda Sinfónica Municipal.',
    dato: 'Domingo · 19:00 h · Sale de la Puerta de los Apóstoles de la Catedral · Acceso libre',
    imgClass: 'img-procesion',
    tags: [{ label: 'Gratuito', free: true }, { label: 'La Custodia' }, { label: 'Acto central' }],
  },
];

var personajes = [
  { nombre: 'La Moma', desc: 'La Virtud · Vestida de blanco · Representada por un hombre', icono: '⚪' },
  { nombre: 'Els Momos', desc: 'Los 7 Pecados Capitales · Traje negro y amarillo', icono: '👹' },
  { nombre: 'El Capellà de les Roques', desc: 'A caballo · Gualdrapa negra bordada · Invita al pueblo', icono: '🐎' },
  { nombre: 'La Tarasca', desc: 'Símbolo de Santa Marta · La monstrua apaciguada', icono: '🐉' },
  { nombre: 'El Dragón de Sant Jordi', desc: 'Figura medieval · Origen de las leyendas', icono: '🔴' },
  { nombre: 'Els Gegants i Nanos', desc: '8 gigantes · 6 cabezudos · Danza de 1588', icono: '👑' },
  { nombre: 'Les Àguiles', desc: 'Símbolo de San Juan Evangelista · 3 tamaños', icono: '🦅' },
  { nombre: 'La Degolla', desc: 'La guardia de Herodes · Caramelos y bastonazos', icono: '🎭' },
];

var datosUtiles = [
  { label: 'Fecha 2026', val: 'Domingo 60 días después de Pascua · Junio de 2026 · Consultar fecha exacta' },
  { label: 'Historia', val: 'Institución papal: 1263 · Primera procesión en Valencia: 1355 · Obispo Hugo de Fenollet' },
  { label: 'Categoría', val: 'Bien de Interés Cultural Inmaterial desde 2010 · "Festa Grossa" de Valencia' },
  { label: 'Las Rocas', val: '11 carros triunfales de madera · Origen: 1373–1392 · Custodiadas en la Casa de las Rocas' },
  { label: 'Cabalgata del Convite', val: 'Domingo · 12:00 h · Plaza de Manises · Primera celebración: 1516' },
  { label: 'La Moma i els Momos', val: 'Danza más antigua del Corpus · La Virtud vs. 7 Pecados Capitales · Hombres vestidos de mujer' },
  { label: 'Solemne Procesión', val: 'Domingo · 19:00 h · Puerta Apóstoles de la Catedral · Recorre Ciutat Vella' },
  { label: 'Casa de las Rocas', val: 'Museo del Corpus · Carrer de les Roques, 2 · Visitable todo el año' },
  { label: 'La Poalà', val: 'Sábado · 12:00 h · Calles Cavallers y Avellanes · La fiesta del agua del Corpus' },
  { label: 'Acceso', val: 'Todos los actos son gratuitos y de acceso libre en la calle' },
];

export default function CorpusChristi() {
  return (
    <div className="cc-page">

      {/* Hero */}
      <div className="cc-hero">
        <div className="cc-hero-overlay" />
        <div className="cc-hero-content">
          <div className="cc-eyebrow">Eventos · La Festa Grossa · 60 días después de Pascua</div>
          <h1>Corpus Christi<br />de Valencia</h1>
          <p>La Fiesta Grande de Valencia desde el siglo XIV. Procesión histórica, danzas medievales, las once Rocas tiradas por caballos y la lucha entre la Virtud y los Siete Pecados Capitales en las calles del centro histórico.</p>
        </div>
        <div className="cc-hero-stats">
          <div className="cc-stat">
            <span className="cc-stat-num">1355</span>
            <span className="cc-stat-label">primera procesión</span>
          </div>
          <div className="cc-stat-sep" />
          <div className="cc-stat">
            <span className="cc-stat-num">11</span>
            <span className="cc-stat-label">carros Rocas</span>
          </div>
          <div className="cc-stat-sep" />
          <div className="cc-stat">
            <span className="cc-stat-num">+670</span>
            <span className="cc-stat-label">años de tradición</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="cc-historia-box">
        <div className="cc-historia-icono">✝</div>
        <div className="cc-historia-content">
          <div className="cc-historia-titulo">La Festa Grossa · La fiesta más antigua y solemne de Valencia</div>
          <p>La festividad del Corpus Christi fue instituida en <strong>1263</strong> por el Papa Urbano IV mediante la bula <em>Transiturus Hoc Mundo</em>, inspirada en un hecho milagroso ocurrido en Bolsena (Italia) y otro en Luchente (Valencia), donde la Hostia Sagrada habría manado sangre. La primera procesión en Valencia se organizó en <strong>1355</strong> a instancias del obispo <strong>Hugo de Fenollet</strong> —el mismo que bautizó a San Vicente Ferrer—, y desde <strong>1372</strong> se ha celebrado ininterrumpidamente. Declarada <strong>Bien de Interés Cultural Inmaterial</strong> por la Generalitat Valenciana en 2010, el Corpus es considerado históricamente la <em>"Festa Grossa"</em> —la Fiesta Grande— de la ciudad, y una de las procesiones más antiguas de España.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="cc-intro">
        <p>El Corpus de Valencia no es solo una procesión religiosa: es un espectáculo cultural total que combina teatro medieval, danzas ancestrales, carrozas históricas y una buena dosis de humor popular. Más allá del sentido católico de la fiesta, el Corpus es una muestra viva de la convivencia entre el espíritu festivo, simbólico, metafórico y religioso de la sociedad valenciana.</p>
        <p>Todos sus actos tienen lugar en el <strong>centro histórico de Valencia</strong> —Catedral, Plaza de la Virgen, Plaza de Manises, calles Cavallers y Avellanes— y son de <strong>acceso libre y gratuito</strong>. La Asociación Amics del Corpus de la Ciudad de València ha sido fundamental en la recuperación y mantenimiento de esta tradición centenaria.</p>
      </div>

      {/* Personajes */}
      <div className="cc-personajes-wrap">
        <div className="cc-personajes-titulo">Personajes del Corpus Christi de Valencia</div>
        <div className="cc-personajes-grid">
          {personajes.map(p => (
            <div className="cc-personaje-card" key={p.nombre}>
              <span className="cc-personaje-icono">{p.icono}</span>
              <div className="cc-personaje-nombre">{p.nombre}</div>
              <div className="cc-personaje-desc">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section title */}
      <div className="cc-section-title">
        <h2>El programa del Corpus · Acto a acto</h2>
        <p>Tres días de celebración en el centro histórico. Todos los actos son gratuitos y de acceso libre.</p>
      </div>

      {/* Actos */}
      <div className="cc-routes">
        {actos.map(acto => (
          <div className="cc-route-item" key={acto.num}>
            <div className="cc-route-num">{acto.num}</div>

            <div className="cc-route-text">
              <div className="cc-fecha-badge">{acto.fecha}</div>
              <h2>{acto.nombre}</h2>
              <div className="cc-subtitulo">{acto.subtitulo}</div>
              <p className="cc-desc">{acto.desc}</p>

              <div className="cc-dato-box">
                <span className="cc-dato-icon">📍</span>
                <span>{acto.dato}</span>
              </div>

              <div className="cc-tags">
                {acto.tags.map(t => (
                  <span key={t.label} className={`cc-tag ${t.free ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>
            </div>

            <div className="cc-route-img">
              <div className={`cc-route-img-inner ${acto.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="cc-info-practica">
        <h3>Datos útiles · Corpus Christi de Valencia</h3>
        <div className="cc-tabla">
          {datosUtiles.map(d => (
            <div className="cc-tabla-fila" key={d.label}>
              <div className="cc-tabla-label">{d.label}</div>
              <div className="cc-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="cc-info-box">
        <h3>Consejos para vivir el Corpus de Valencia</h3>
        <ul className="cc-info-list">
          <li>Para la <strong>Poalà del sábado</strong> en Cavallers y Avellanes, lleva ropa que puedas mojar — los cubos de agua son abundantes y precisos</li>
          <li>La <strong>Cabalgata del Convite</strong> del domingo es el acto más vistoso — llega a las 11:30 h a la Plaza de Manises para tener buen sitio</li>
          <li>Para ver las <strong>Rocas de cerca</strong>, el traslado del viernes por la noche es el mejor momento — de día se ve la procesión pero de lejos</li>
          <li>La <strong>Solemne Procesión</strong> del domingo a las 19:00 h es muy larga — elige un punto fijo en la calle Cavallers o en la Plaza de la Virgen</li>
          <li>La <strong>Casa de las Rocas</strong> (Carrer de les Roques, 2) puede visitarse todo el año para ver las carrozas medievales de cerca</li>
          <li>El Corpus se celebra en el <strong>centro histórico medieval</strong> — es el paseo perfecto para conocer la Valencia del siglo XIV al mismo tiempo</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}