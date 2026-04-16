import '../assets/css/Albufera.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var experiencias = [
  {
    num: '01',
    nombre: 'Paseo en Barca por el Lago',
    tipo: 'Experiencia esencial · Embarcaderos de El Saler y El Palmar',
    subtitulo: 'Barcas eléctricas silenciosas · 60 min · Gola del Pujol · Canales del parque',
    desc: 'El paseo en barca es la experiencia más completa y recomendada para conocer la Albufera. Desde los embarcaderos de El Saler y El Palmar —los más populares entre los seis embarcaderos municipales del parque— los patrones locales guían por los canales, la Gola del Pujol y las zonas abiertas del lago. Los guías interpretan el paisaje: manejo del agua, ciclo del arroz, pesca tradicional, avifauna y la historia de un ecosistema que lleva más de 1.200 años transformándose. Las barcas eléctricas son silenciosas y sin emisiones, lo que permite acercarse a las aves sin asustarlas. Las embarcaciones municipales son también una opción económica (4–5 € sin reserva previa).',
    datos: [
      { d: 'Embarcaderos', v: 'El Saler y El Palmar · 6 embarcaderos municipales en total por el parque' },
      { d: 'Duración', v: '40–60 min paseo municipal · 75–90 min excursión puesta de sol con guía' },
      { d: 'Precio municipal', v: '4–5 € · Sin reserva previa · Guiado por patrones locales' },
      { d: 'Excursión guiada', v: 'Barcas eléctricas · Guías bilingües · Desde visitalbufera.com' },
    ],
    imgClass: 'img-barcaaf',
    tags: [{ label: 'Imprescindible' }, { label: 'Barca eléctrica' }, { label: 'Guía local' }],
  },
  {
    num: '02',
    nombre: 'La Puesta de Sol sobre el Lago',
    tipo: 'El espectáculo más famoso de Valencia',
    subtitulo: 'El único lugar donde el sol se pone sobre el agua en la Comunitat · Otoño: el mejor momento',
    desc: 'La Albufera es el único lugar de la Comunitat Valenciana donde el sol se pone sobre el agua, creando uno de los atardeceres más espectaculares del Mediterráneo. Los árabes llamaban poéticamente al lago "el espejo del sol". La puesta de sol desde una barca en el centro del lago —cuando el motor se detiene y reina el silencio, y el cielo se tiñe de naranjas y violetas sobre el agua calmada— es uno de los momentos más memorables de una visita a Valencia. El otoño es la mejor época: los arrozales maduros crean una paleta de dorados, la avifauna es máxima y los atardeceres especialmente espectaculares. Las plazas para el paseo de puesta de sol se agotan con frecuencia en fin de semana: reserva con antelación.',
    datos: [
      { d: 'Mejor época', v: 'Otoño (sept–nov) · Arrozales dorados + máxima avifauna + cielos espectaculares' },
      { d: 'Duración excursión', v: '75–90 min desde el embarcadero · Motor parado en el centro del lago' },
      { d: 'Reserva', v: 'Imprescindible reservar con antelación, especialmente los fines de semana' },
      { d: 'Dato', v: 'El único lugar de la Comunitat donde el sol se pone sobre el agua' },
    ],
    imgClass: 'img-puestadesolaf',
    tags: [{ label: 'El espejo del sol' }, { label: 'Otoño' }, { label: 'Reserva previa' }],
  },
  {
    num: '03',
    nombre: 'El Palmar · Gastronomía y Barracas',
    tipo: 'Pueblo lacustre · Cuna de la paella valenciana',
    subtitulo: 'Paella valenciana · All i pebre de anguila · Barracas tradicionales s. XVIII',
    desc: 'El Palmar es el corazón de la Albufera: una pequeña isla rodeada de arrozales y canales donde la economía tradicional basada en la pesca y el cultivo del arroz sigue viva. El pueblo es famoso por ser la cuna de la paella valenciana: fue en estos arrozales donde los campesinos crearon la receta original con pollo, conejo, verdura y caracoles. Los restaurantes del Palmar son una parada obligatoria: el all i pebre de anguilas del lago (con técnicas de pesca de 600 años de tradición), el arroz a banda y el arroz al senyoret son platos únicos. Las barracas tradicionales del siglo XVIII —construcciones con techo de cañas— son otro símbolo del pueblo que Blasco Ibáñez inmortalizó en su novela "Cañas y Barro" (1902).',
    datos: [
      { d: 'Gastronomía', v: 'Paella valenciana auténtica · All i pebre de anguila · Arroz a banda · Arroz al senyoret' },
      { d: 'Restaurantes recomendados', v: 'Bon Aire (referente de paella) · Nou Racó (vistas al lago) · Ca Teresa (El Saler)' },
      { d: 'Barracas', v: 'Casas tradicionales de techo de cañas · Algunas visitable · Patrimonio etnológico' },
      { d: 'Blasco Ibáñez', v: '"Cañas y Barro" (1902) · La novela valenciana más importante ambientada en la Albufera' },
    ],
    imgClass: 'img-palmaraf',
    tags: [{ label: 'Paella' }, { label: 'All i pebre' }, { label: 'Barracas' }],
  },
  {
    num: '04',
    nombre: 'Avistamiento de Aves',
    tipo: 'Zona Ramsar · ZEPA · +300 especies registradas',
    subtitulo: 'Flamencos · Garzas · Ánades · Aguilucho lagunero · Observatorio Racó de l\'Olla',
    desc: 'La Albufera es uno de los humedales más importantes de la península ibérica para la avifauna. Zona Ramsar y Zona de Especial Protección para las Aves (ZEPA) integrada en la red Natura 2000, es hogar permanente o de paso de más de 300 especies. Entre octubre y marzo la avifauna es máxima: pueden concentrarse hasta 30.000 aves en los humedales. En mayo, miles de flamencos descansan durante su migración. El Observatorio de Racó de l\'Olla (acceso libre, torres de observación, personal especializado) es el mejor punto para el birdwatching. Las primeras horas del día y el atardecer son los mejores momentos.',
    datos: [
      { d: 'Especies', v: 'Flamenco, garza real, garceta, cormorán, aguilucho lagunero, charrán, ánade' },
      { d: 'Mejor época', v: 'Oct–mar: máxima concentración · Mayo: miles de flamencos migratorios' },
      { d: 'Observatorio', v: 'Racó de l\'Olla · Acceso libre · Torres de observación · Personal especializado' },
      { d: 'Protección', v: 'Zona Ramsar + ZEPA + Red Natura 2000 · Parque Natural desde 1986' },
    ],
    imgClass: 'img-avesaf',
    tags: [{ label: '+300 especies' }, { label: 'Zona Ramsar' }, { label: 'Racó de l\'Olla' }],
  },
  {
    num: '05',
    nombre: 'Los Arrozales · El Marjal y el Ciclo del Arroz',
    tipo: 'Paisaje en transformación · 14.000 hectáreas de cultivo',
    subtitulo: 'Verde en verano · Dorado en otoño · Azul inundado en invierno',
    desc: 'Los arrozales ocupan el 70% de la superficie del Parque Natural —unas 14.000 hectáreas— y son el verdadero motor vital del ecosistema. El marjal es un paisaje en constante transformación cuyo color cambia con las estaciones: verde brillante en verano cuando el arroz crece, dorado en otoño durante la cosecha (septiembre-octubre), azul durante el invierno cuando los campos se inundan para servir de refugio a las aves migratorias, y marrón al final del invierno cuando los tractores preparan la tierra. Los "tancats" —zonas húmedas artificiales como el de La Pipa (40 ha) o L\'Illa— pueden visitarse con reserva previa y son hábitats de gran biodiversidad.',
    datos: [
      { d: 'Extensión', v: '14.000 ha de arrozales · 70% de la superficie total del parque' },
      { d: 'Ciclo', v: 'Verano: verde · Otoño: dorado (cosecha sept–oct) · Invierno: azul inundado' },
      { d: 'Tancats', v: 'La Pipa (40 ha) · L\'Illa · Visitable con reserva previa · Alta biodiversidad' },
      { d: 'Variedades', v: 'Arroz DO Valencia: Senia, Bomba y Albufera · Denominación de Origen protegida' },
    ],
    imgClass: 'img-arrozalesaf',
    tags: [{ label: 'DO Valencia' }, { label: 'Paisaje estacional' }, { label: 'Ecosistema único' }],
  },
  {
    num: '06',
    nombre: 'La Devesa del Saler y las Dunas',
    tipo: 'Bosque mediterráneo · La barrera entre el lago y el mar',
    subtitulo: 'Pinares · Dunas naturales · Ruta ciclista · Carril bici entre arrozales',
    desc: 'La Devesa del Saler es la lengua de tierra —la "restringa"— que separa el lago de la Albufera del Mediterráneo. Con pinares mediterráneos, palmitos, lentiscos, coscojas y un sistema dunar de gran valor ecológico, es el espacio natural más impresionante del parque para los amantes de la bicicleta y el senderismo. El carril bici que atraviesa la Devesa conecta El Saler con el lago, las playas y el Palmar. Desde visitalbufera.com es posible alquilar bicicletas y e-bikes con rutas bien señalizadas. El "pack bici + barca" es la combinación más demandada: pedalea por bosque y playa por la mañana, navega por el lago al atardecer.',
    datos: [
      { d: 'Ecosistema', v: 'Pino carrasco, palmito, lentisco, romero, tomillo · Sistema dunar protegido' },
      { d: 'Carril bici', v: 'Desde El Saler hasta El Palmar por la Devesa · Señalizado y llano' },
      { d: 'Alquiler bicis', v: 'visitalbufera.com · Bicis y e-bikes · Pack Bici + Barca disponible' },
      { d: 'Dunas', v: 'Malladas y miradores con vistas al lago y al Mediterráneo simultáneamente' },
    ],
    imgClass: 'img-devesaaf',
    tags: [{ label: 'Bicicleta' }, { label: 'Devesa' }, { label: 'Dunas' }],
  },
];

var datosVisita = [
  { label: 'Extensión', val: '+21.000 ha · Lago: ~2.800 ha · Arrozales: 14.000 ha · Parque Natural desde 1986' },
  { label: 'El lago', val: 'Lago de agua dulce más grande de España · Profundidad máx. 1,5 m · Al-buhayra en árabe = "pequeño mar"' },
  { label: 'Distancia', val: '10–12 km al sur de Valencia · 15 min en coche · 40 min en bus' },
  { label: 'Acceso bus', val: 'Líneas EMT 24 y 25 · L24: Valencia → El Palmar · L25: Valencia → El Perellonet · Gratuitas con Tourist Card' },
  { label: 'En bici', val: 'Carril bici desde Valencia hasta El Saler · Alquiler en visitalbufera.com (e-bikes disponibles)' },
  { label: 'Paseo en barca', val: 'Municipal: 4–5 € · 40 min · Sin reserva previa · Embarcaderos El Saler y El Palmar' },
  { label: 'Puesta de sol', val: 'Reserva obligatoria en fin de semana · Desde visitalbufera.com · Desde ~10–15 € con guía' },
  { label: 'Mejor época', val: 'Otoño (sep–nov): cosecha del arroz dorada + máxima avifauna + atardeceres espectaculares' },
];

export default function Albufera() {
  return (
    <div className="alb-page">

      {/* Hero */}
      <div className="alb-hero">
        <div className="alb-hero-overlay" />
        <div className="alb-hero-content">
          <div className="alb-eyebrow">Parque Natural · Zona Ramsar · 10 km al sur de Valencia</div>
          <h1>L'Albufera<br />de Valencia</h1>
          <p>El lago más grande de España, la cuna de la paella y el atardecer más espectacular del Mediterráneo. A solo 15 minutos de Valencia, la naturaleza en estado puro.</p>
        </div>
        <div className="alb-hero-stats">
          <div className="alb-stat">
            <span className="alb-stat-num">21.000 ha</span>
            <span className="alb-stat-label">Parque Natural</span>
          </div>
          <div className="alb-stat-sep" />
          <div className="alb-stat">
            <span className="alb-stat-num">+300</span>
            <span className="alb-stat-label">especies de aves</span>
          </div>
          <div className="alb-stat-sep" />
          <div className="alb-stat">
            <span className="alb-stat-num">1986</span>
            <span className="alb-stat-label">Parque Natural</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="alb-historia-box">
        <div className="alb-historia-icono"></div>
        <div className="alb-historia-content">
          <div className="alb-historia-titulo">El espejo del sol · La cuna de la paella</div>
          <p>La Albufera —del árabe <strong>al-buhayra</strong>, "pequeño mar"— tiene su origen hace unos 5.000 años, cuando una antigua bahía empezó a cerrarse por la acumulación de arena. En época romana ya era un lago reconocible; durante la dominación árabe se desarrolló el cultivo del arroz, y fue en estos arrozales donde los campesinos valencianos crearon la receta de la <strong>paella</strong>. El parque es propiedad de la ciudad de Valencia desde 1911 y fue declarado Parque Natural en 1986. Los árabes llamaban al lago <strong>"el espejo del sol"</strong> por sus legendarios atardeceres. El escritor Blasco Ibáñez lo inmortalizó en "Cañas y Barro" (1902), la novela valenciana más importante ambientada en este paisaje.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="alb-intro">
        <p>La Albufera no es solo un lago: es el resultado de siglos de convivencia entre el ser humano y la naturaleza, donde el agua y el arroz se convierten en los grandes protagonistas del paisaje y de la cultura valenciana. Pescadores, agricultores y aves migratorias comparten este espacio único que cambia de color con las estaciones: verde en verano, dorado en otoño durante la cosecha, azul inundado en invierno cuando sirve de refugio a las aves.</p>
        <p>Es un destino para <strong>todo el año</strong>, aunque el otoño —con los arrozales maduros y la máxima concentración de avifauna— es el momento más especial. El acceso al parque es <strong>gratuito</strong>.</p>
      </div>

      {/* Experiencias */}
      <div className="alb-section-title">
        <h2>Qué hacer en la Albufera</h2>
        <p>Seis experiencias para conocer el Parque Natural más cercano a Valencia.</p>
      </div>

      <div className="alb-routes">
        {experiencias.map(exp => (
          <div className="alb-route-item" key={exp.num}>
            <div className="alb-route-num">{exp.num}</div>

            <div className="alb-route-text">
              <div className="alb-tipo">{exp.tipo}</div>
              <h2>{exp.nombre}</h2>
              <div className="alb-subtitulo">{exp.subtitulo}</div>
              <p className="alb-desc">{exp.desc}</p>

              <div className="alb-datos-titulo">Datos clave</div>
              <ul className="alb-datos">
                {exp.datos.map(d => (
                  <li key={d.d}>
                    <span className="alb-dato-label">{d.d}:</span>
                    <span className="alb-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>

              <div className="alb-tags">
                {exp.tags.map(t => (
                  <span key={t.label} className="alb-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="alb-route-img">
              <div className={`alb-route-img-inner ${exp.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla datos */}
      <div className="alb-info-practica">
        <h3>Información práctica · Parque Natural de l'Albufera</h3>
        <div className="alb-tabla">
          {datosVisita.map(d => (
            <div className="alb-tabla-fila" key={d.label}>
              <div className="alb-tabla-label">{d.label}</div>
              <div className="alb-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="alb-info-box">
        <h3>Consejos para visitar la Albufera</h3>
        <ul className="alb-info-list">
          <li>El <strong>paseo en barca con puesta de sol</strong> es la experiencia más memorable — reserva siempre con antelación los fines de semana</li>
          <li>La <strong>paella en El Palmar</strong> los domingos es una tradición valenciana: reserva mesa el sábado para no quedarte sin sitio</li>
          <li>El <strong>otoño</strong> es la mejor época: arrozales dorados + flamencos + atardeceres de película</li>
          <li>Lleva <strong>prismáticos</strong>: el Observatorio Racó de l'Olla tiene acceso libre y es el mejor punto de birdwatching</li>
          <li>El <strong>pack bici + barca</strong> de visitalbufera.com es la combinación perfecta para el día entero: mañana en bici por la Devesa, tarde en barca</li>
          <li>Los buses EMT 24 y 25 son <strong>gratuitos con la Valencia Tourist Card</strong> y llegan directamente a El Palmar</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}