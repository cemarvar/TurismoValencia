import '../assets/css/Oceanografic.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var habitats = [
  {
    num: '01',
    nombre: 'Océanos · El túnel submarino',
    tipo: 'El acuario más grande del recinto',
    subtitulo: 'Túnel acrílico de 70 m · El más largo de Europa · Tiburones y rayas',
    desc: 'El edificio Océanos es el más grande del Oceanogràfic y uno de los mayores del mundo, con 7 millones de litros de agua. Representa las regiones templadas del Pacífico y el Atlántico, conectadas por el famoso túnel submarino de 70 metros de longitud: el más largo de Europa. Caminar por él es lo más parecido a bucear sin mojarse: tiburones toro, tiburones martillo, tiburones nodriza, rayas mosaico y cientos de peces pasan sobre tu cabeza mientras las luces azules te envuelven.',
    especies: ['Tiburón toro', 'Tiburón martillo', 'Tiburón nodriza', 'Raya mosaico', 'Pez guitarra', 'Tiburón raya'],
    dato: 'Túnel submarino de 70 m · El más largo de Europa · 7 millones de litros',
    imgClass: 'img-oceanos',
    tags: [{ label: 'Imprescindible' }, { label: 'Tiburones' }, { label: '70 m de túnel' }],
  },
  {
    num: '02',
    nombre: 'Ártico · Las belugas',
    tipo: 'La única familia de belugas de Europa',
    subtitulo: 'Gran iglú ártico · Belugas Plombir, Miranda y Kylu · Morsas',
    desc: 'Una gran cúpula a modo de iglú acoge la zona del Ártico: acantilados rocosos y bloques de hielo recrean el hábitat de morsas y belugas. Las belugas —conocidas como "canarios del mar" por su sofisticado lenguaje de silbidos y gemidos— son las estrellas indiscutibles del Oceanogràfic. Plombir, Miranda y su cría Kylu forman la única familia de belugas al completo en Europa. Es un espacio hipnótico: silencio, luz fría y el momento en que una beluga pasa frente al cristal y te mira.',
    especies: ['Beluga (Delphinapterus leucas)', 'Morsa', 'Foca común'],
    dato: 'Única familia de belugas de Europa · Incluye la cría Kylu · Espacio interior climatizado',
    imgClass: 'img-artico',
    tags: [{ label: 'Belugas exclusivas' }, { label: 'Ártico' }, { label: 'Familia completa' }],
  },
  {
    num: '03',
    nombre: 'Delfinario',
    tipo: 'El delfinario más grande de Europa · Incluido en la entrada',
    subtitulo: 'Exhibiciones bioeducativas diarias · Delfines mulares · 26 millones de litros',
    desc: 'El delfinario del Oceanogràfic es uno de los más grandes del mundo: una piscina de 26 millones de litros con gradas para más de 1.500 espectadores. Los delfines mulares protagonizan exhibiciones bioeducativas diarias que combinan acrobacias, saltos y juegos con sus cuidadores, con un enfoque de sensibilización medioambiental. Los espectáculos están incluidos en la entrada general. Se realizan varios pases al día: consulta los horarios al llegar o en recepción.',
    especies: ['Delfín mular (Tursiops truncatus)'],
    dato: 'Entrada incluida · 26 millones de litros · Varios pases diarios · Consultar horarios al llegar',
    imgClass: 'img-delfinario',
    tags: [{ label: 'Incluido en entrada' }, { label: 'Delfines mulares' }, { label: 'Varios pases/día' }],
  },
  {
    num: '04',
    nombre: 'Antártico · Pingüinos',
    tipo: 'Ecosistema polar · Colonia de pingüinos Juanito',
    subtitulo: 'Acantilado rocoso con áreas de puesta y cría',
    desc: 'El pabellón Antártico recrea un acantilado rocoso con áreas de puesta y cría donde vive una colonia de pingüinos Juanito. Las instalaciones reproducen fielmente las condiciones de temperatura y luz del entorno polar, permitiendo observar el comportamiento natural de estas aves en uno de los entornos más espectaculares del recinto. Conectado con el Ártico en el edificio polar, completa el recorrido por los ecosistemas de frío extremo.',
    especies: ['Pingüino juanito (Pygoscelis papua)', 'Foca de Weddell'],
    dato: 'Ecosistema polar recreado · Área de puesta y cría · Edificio polar junto al Ártico',
    imgClass: 'img-antartico',
    tags: [{ label: 'Pingüinos' }, { label: 'Polar' }, { label: 'Comportamiento natural' }],
  },
  {
    num: '05',
    nombre: 'Templados y Tropicales',
    tipo: 'Cúpula de cristal · Arrecifes de coral',
    subtitulo: 'Peces tropicales · Caballitos de mar · Pez payaso · Arrecifes de coral',
    desc: 'El edificio de Templados y Tropicales es una gran cúpula de cristal que representa los ecosistemas tropicales y subtropicales: arrecifes de coral, peces exóticos de colores, caballitos de mar y tiburones de arrecife. Los vivos colores de los peces payaso, peces ángel y peces loro crean un auténtico caleidoscopio submarino. El recorrido también invita a viajar desde las regiones templadas del Pacífico y el Atlántico hasta las cálidas aguas del Índico y el Caribe.',
    especies: ['Pez payaso', 'Pez cirujano azul', 'Pez ángel', 'Pez loro', 'Pez Napoleón', 'Caballito de mar'],
    dato: 'Cúpula de cristal · Arrecifes de coral recreados · Más de 50 especies tropicales',
    imgClass: 'img-tropicales',
    tags: [{ label: 'Coral' }, { label: 'Tropical' }, { label: 'Colorido' }],
  },
  {
    num: '06',
    nombre: 'Mediterráneo',
    tipo: '9 acuarios con ~7.400 ejemplares',
    subtitulo: 'La fauna y flora del mar de Valencia',
    desc: 'El edificio Mediterráneo muestra la riqueza biológica del mar que baña Valencia mediante nueve acuarios con distintos formatos y cerca de 7.400 ejemplares de peces e invertebrados. Un recorrido por la fauna local que incluye desde caballitos de mar y meros hasta pulpos de roca, langostas, medusas comestibles y los coloridos moradores del fondo marino mediterráneo. El agua del Oceanogràfic se bombea directamente desde la playa de la Malvarrosa.',
    especies: ['Mero', 'Pulpo de roca', 'Langosta', 'Medusa comestible', 'Caballito de mar', 'Lubina'],
    dato: '9 acuarios · ~7.400 ejemplares · Agua bombeada desde la playa de la Malvarrosa',
    imgClass: 'img-mediterraneo',
    tags: [{ label: 'Local' }, { label: '7.400 ejemplares' }, { label: '9 acuarios' }],
  },
  {
    num: '07',
    nombre: 'Islas · Leones marinos y aves marinas',
    tipo: 'Instalación al aire libre',
    subtitulo: 'Costas sudamericanas · Leones marinos de la Patagonia',
    desc: 'El hábitat Islas es un amplio espacio al aire libre que toma como referencia las islas situadas a lo largo de la costa sudamericana, caracterizadas por la presencia de grandes colonias de leones marinos de la Patagonia. Los lagos exteriores del recinto acogen además pelícanos, flamencos y cormoranes, creando un entorno natural vibrante visible desde las pasarelas peatonales que rodean el recinto. Es uno de los espacios más fotogénicos del Oceanogràfic en días soleados.',
    especies: ['León marino de la Patagonia', 'Pelícano', 'Flamenco', 'Cormorán'],
    dato: 'Al aire libre · Leones marinos de la Patagonia · Lagos exteriores con aves acuáticas',
    imgClass: 'img-islas',
    tags: [{ label: 'Al aire libre' }, { label: 'Leones marinos' }, { label: 'Aves acuáticas' }],
  },
  {
    num: '08',
    nombre: 'Humedales / Aviario · Medusas · Cocodrilario',
    tipo: 'Tres hábitats singulares',
    subtitulo: 'Manglares · Medusas luminiscentes · Cocodrilos del Nilo',
    desc: 'El Aviario recrea manglares y zonas húmedas con aves acuáticas exóticas en un espacio al aire libre. El hábitat de las Medusas muestra las especies más espectaculares del planeta: medusas luminiscentes, huevo frito, de puntos blancos y comestibles, junto a anémonas y otros invertebrados del fondo marino. El Cocodrilario es un amplio espacio exterior con zona de anidamiento de cocodrilos del Nilo. Nota: el Aviario suele cerrar un poco antes por mantenimiento.',
    especies: ['Cocodrilo del Nilo', 'Medusa luminiscente', 'Medusa huevo frito', 'Anémona', 'Cangrejo gigante'],
    dato: 'Tres hábitats en uno · Aviario cierra antes · Medusas únicas en Europa',
    imgClass: 'img-humedales',
    tags: [{ label: 'Medusas' }, { label: 'Cocodrilos' }, { label: 'Aviario' }],
  },
];

var experiencias = [
  {
    nombre: 'Backstage Tour',
    precio: '12 € · 75 min · Desde 6 años',
    desc: 'Accede a zonas técnicas: área de cuarentena, cocina de peces, sistema de filtrado. Podrás incluso caminar sobre el túnel de tiburones desde arriba.',
    icono: '🎬',
  },
  {
    nombre: 'El Mar en tus Manos',
    precio: '7 € · 40 min · Desde 4 años',
    desc: 'Actividad sensorial con contacto directo con especies mediterráneas: erizos, estrellas de mar y visita al ARCA del Mar.',
    icono: '🤿',
  },
  {
    nombre: 'Lago Vivo',
    precio: '7 € · 60 min · Todas las edades',
    desc: 'Paseo por el ecosistema de la Albufera, observando aves acuáticas y peces endémicos de los humedales valencianos.',
    icono: '🦢',
  },
  {
    nombre: 'Visita guiada clásica',
    precio: '+10 € · 90 min · Todas las edades',
    desc: 'Recorrido de 90 minutos por los espacios más icónicos: Océanos, Ártico, Antártico y el Delfinario. Apta y accesible para todas las edades.',
    icono: '🎧',
  },
  {
    nombre: 'ARCA del Mar',
    precio: '5 € · 30 min · Desde 4 años',
    desc: 'Recorrido guiado por el Área de Recuperación y Conservación de Animales del Mar: aprende cómo se cuidan y rehabilitan las tortugas marinas.',
    icono: '🐢',
  },
  {
    nombre: 'Restaurante Submarino',
    precio: 'Menú desde ~60 € · Reserva obligatoria',
    desc: 'Cena o almuerzo con vistas directas al gran acuario central. Una de las experiencias gastronómicas más singulares de Valencia.',
    icono: '🍽',
  },
];

var datosVisita = [
  { label: 'Dirección', val: 'Av. del Professor López Piñero, 7 · 46013 Valencia · Ciudad de las Artes y las Ciencias' },
  { label: 'Apertura', val: 'Abre todos los días a las 10:00 h' },
  { label: 'Cierre', val: 'Temporada baja: 18:00 h · Temporada alta: 20:00 h · Verano: hasta medianoche (Noches del Oceanogràfic)' },
  { label: 'Precio adulto', val: 'Desde 36–44 € · Varía por temporada · Compra online con descuento' },
  { label: 'Precio reducida', val: 'Desde 26–32 € · Niños menores de 4 años: gratis' },
  { label: 'Tarifas especiales', val: 'Familias numerosas, estudiantes, desempleados y grupos (+20 personas con reserva)' },
  { label: 'Duración recomendada', val: '4–6 horas para ver todo sin prisas · 2–3 h versión reducida · Todo el día si incluyes espectáculos' },
  { label: 'Entrada combinada', val: 'Pack Oceanogràfic + Museu de les Ciències + Hemisfèric · Válido 1 o 2 días consecutivos' },
  { label: 'Parking', val: '7 € todo el día con entrada al recinto · Parking subterráneo con acceso directo' },
  { label: 'Cómo llegar', val: 'Bus líneas 15, 24, 35 y 95 · A pie o en bici por el Jardín del Turia (35 min desde el centro)' },
];

export default function Oceanografic() {
  return (
    <div className="ocn-page">

      {/* Hero */}
      <div className="ocn-hero">
        <div className="ocn-hero-overlay" />
        <div className="ocn-hero-content">
          <div className="ocn-eyebrow">Ciudad de las Artes y las Ciencias · El acuario más grande de Europa</div>
          <h1>Oceanogràfic<br />de Valencia</h1>
          <p>110.000 m² y 42 millones de litros de agua salada. El mayor acuario de Europa reúne los ecosistemas marinos más importantes del mundo, el túnel submarino más largo del continente y la única familia de belugas de Europa.</p>
        </div>
        <div className="ocn-hero-stats">
          <div className="ocn-stat">
            <span className="ocn-stat-num">+500</span>
            <span className="ocn-stat-label">especies marinas</span>
          </div>
          <div className="ocn-stat-sep" />
          <div className="ocn-stat">
            <span className="ocn-stat-num">70 m</span>
            <span className="ocn-stat-label">túnel submarino</span>
          </div>
          <div className="ocn-stat-sep" />
          <div className="ocn-stat">
            <span className="ocn-stat-num">42 M</span>
            <span className="ocn-stat-label">litros de agua</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="ocn-intro">
        <p>El Oceanogràfic de Valencia fue inaugurado el 14 de febrero de 2003 y diseñado por el arquitecto Félix Candela junto a los ingenieros Alberto Domingo y Carlos Lázaro. Con 110.000 m² de superficie, es el acuario más grande de Europa. Alberga más de 45.000 animales de más de 500 especies y reproduce los principales ecosistemas marinos del planeta en dos niveles: el superior con exhibiciones al aire libre, y el inferior con los grandes acuarios y el mítico túnel submarino.</p>
        <p>El agua del recinto se bombea directamente desde la playa de la Malvarrosa, garantizando la calidad del hábitat marino. Para recorrer todos los pabellones sin prisas se recomienda <strong>dedicar un día completo</strong>: entre 4 y 6 horas de visita, más el espectáculo del delfinario, incluido en la entrada.</p>
      </div>

      {/* Hábitats */}
      <div className="ocn-section-title">
        <h2>Los hábitats del Oceanogràfic</h2>
        <p>Ocho ecosistemas marinos únicos, desde el Mediterráneo hasta el Ártico.</p>
      </div>

      <div className="ocn-routes">
        {habitats.map(hab => (
          <div className="ocn-route-item" key={hab.num}>
            <div className="ocn-route-num">{hab.num}</div>

            <div className="ocn-route-text">
              <div className="ocn-tipo">{hab.tipo}</div>
              <h2>{hab.nombre}</h2>
              <div className="ocn-subtitulo">{hab.subtitulo}</div>
              <p className="ocn-desc">{hab.desc}</p>

              <div className="ocn-especies-titulo">Especies destacadas</div>
              <div className="ocn-especies">
                {hab.especies.map(e => (
                  <span key={e} className="ocn-especie">{e}</span>
                ))}
              </div>

              <div className="ocn-dato-box">
                <span className="ocn-dato-icon">→</span>
                <span>{hab.dato}</span>
              </div>

              <div className="ocn-tags">
                {hab.tags.map(t => (
                  <span key={t.label} className="ocn-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="ocn-route-img">
              <div className={`ocn-route-img-inner ${hab.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Experiencias extra */}
      <div className="ocn-exp-section">
        <div className="ocn-section-title ocn-section-title--inner">
          <h2>Experiencias adicionales</h2>
          <p>Actividades de pago que enriquecen la visita · Reserva en taquilla o al comprar la entrada online</p>
        </div>
        <div className="ocn-exp-grid">
          {experiencias.map(exp => (
            <div className="ocn-exp-card" key={exp.nombre}>
              <span className="ocn-exp-icono">{exp.icono}</span>
              <div className="ocn-exp-nombre">{exp.nombre}</div>
              <div className="ocn-exp-precio">{exp.precio}</div>
              <p className="ocn-exp-desc">{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabla de datos de visita */}
      <div className="ocn-info-practica">
        <h3>Información práctica · Oceanogràfic de Valencia</h3>
        <div className="ocn-tabla">
          {datosVisita.map(d => (
            <div className="ocn-tabla-fila" key={d.label}>
              <div className="ocn-tabla-label">{d.label}</div>
              <div className="ocn-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ocn-info-box">
        <h3>Consejos para aprovechar al máximo la visita</h3>
        <ul className="ocn-info-list">
          <li><strong>Llega a las 10:00 h</strong> cuando abre: el túnel de tiburones y el Ártico sin aglomeraciones son impresionantes</li>
          <li>Empieza por los <strong>hábitats interiores</strong> (Océanos, Ártico, Mediterráneo) y deja los exteriores para la tarde</li>
          <li>El <strong>delfinario</strong> está incluido en la entrada: consulta los horarios de pase al llegar, no son fijos</li>
          <li>Compra la entrada <strong>online con antelación</strong>: evitas colas y hay descuentos sobre el precio de taquilla</li>
          <li>En verano el recinto abre hasta la medianoche, pero los <strong>acuarios interiores cierran a las 20:00 h</strong></li>
          <li>El <strong>Restaurante Submarino</strong> requiere reserva obligatoria con días de antelación · No está incluido en la entrada</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}