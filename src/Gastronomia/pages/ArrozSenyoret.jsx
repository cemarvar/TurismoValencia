import '../assets/css/ArrozSenyoret.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'Arròs del Senyoret · El Arroz del Señorito',
    subtitulo: 'Todo el marisco pelado · Sin mancharse las manos · El lujo de comer con comodidad',
    desc: 'El arroz del senyoret —literalmente "del señorito"— es uno de los arroces más elegantes y cómodos de la cocina valenciana. Su seña de identidad es tan sencilla como irresistible: todo el marisco y el pescado llega al plato ya pelado, limpio y a punto, sin cáscaras, sin espinas, sin trabajo. Gambas peladas, calamares troceados, sepia limpia, rape sin espina, mejillones sin concha. El comensal solo necesita la cuchara. Es un arroz seco tipo paella, cocinado en la misma sartén y con la misma técnica, pero donde la comodidad es el lujo. El fumet de marisco —elaborado con las cabezas y cáscaras del propio marisco— concentra todo el sabor del Mediterráneo, y la salmorreta alicantina —ajo, ñora, tomate y perejil— añade el toque de profundidad aromática que distingue este arroz de cualquier otro plato de marisco.',
    dato: 'Arroz seco tipo paella · Todo pelado y limpio · Fumet de marisco casero · Salmorreta alicantina opcional',
    imgClass: 'img-sen-platoasy',
    tags: [{ label: 'Arròs del senyoret' }, { label: 'Sin mancharse' }, { label: 'Costa valenciana' }],
  },
  {
    num: '02',
    nombre: 'El Origen · El Señorito de la Malvarrosa',
    subtitulo: 'Hacia 1950 · Playa de la Malvarrosa · Joaquín Sorolla · Las casas pudientes de Alicante',
    desc: 'El origen del arroz del senyoret tiene dos versiones igualmente posibles. La más popular cuenta que, hacia 1950, un joven de buena familia conocido como "el Senyoret" frecuentaba un restaurante de la playa de la Malvarrosa en Valencia y siempre pedía el arroz con marisco sin piel ni espinas. Los cocineros adaptaron la receta a su gusto y la llamaron con su apodo. La segunda versión apunta al pintor valenciano Joaquín Sorolla, muy vinculado a Jávea: según esta historia, Sorolla pidió un día en una arrocería que le pelaran las cigalas y se las pusieran encima del arroz. Los cocineros dieron un paso más y pelaron todo el marisco directamente. Hay también una tercera versión más antigua: el plato se elaboraba en las casas adineradas de Alicante y la servidumbre presentaba el arroz con todos los ingredientes pelados para que el señorito de la casa no tuviera que ensuciarse las manos ni abandonar la cuchara en ningún momento.',
    dato: 'Versión 1: El Senyoret de la Malvarrosa, c.1950 · Versión 2: Joaquín Sorolla en Jávea · Versión 3: casas pudientes de Alicante',
    imgClass: 'img-sen-historiaasy',
    tags: [{ label: 'Malvarrosa 1950' }, { label: 'Joaquín Sorolla' }, { label: 'Origen alicantino' }],
  },
  {
    num: '03',
    nombre: 'La Salmorreta · El Secreto Alicantino',
    subtitulo: 'Ñora seca · Ajo · Tomate · Perejil · La base aromática de los arroces alicantinos',
    desc: 'El ingrediente diferencial del arroz del senyoret respecto a otras paellas de marisco es la salmorreta: una pasta espesa de color oscuro que se prepara friendo ñoras secas —un tipo de pimiento pequeño y redondo, seco— con ajo, tomate rallado y perejil, y luego triturando todo hasta obtener un paté concentrado. Esta salsa es la base aromática de los grandes arroces alicantinos —el arroz a banda, el arroz del senyoret, el arroz con gambas y salmorreta— y le da al caldo una profundidad y un color únicos. La ñora, en particular, aporta un sabor levemente dulce y ahumado que no tiene sustituto. La salmorreta se añade a la paella junto con la sepia y el calamar antes de incorporar el fumet, y en ese momento impregna todo el aceite y los ingredientes con su aroma característico.',
    dato: 'Salmorreta: ñora seca + ajo + tomate rallado + perejil · Freír en aceite · Triturar en mortero · Típica de los arroces alicantinos',
    imgClass: 'img-sen-salmorretaasy',
    tags: [{ label: 'Salmorreta' }, { label: 'Ñora seca' }, { label: 'Arroces alicantinos' }],
  },
  {
    num: '04',
    nombre: 'Senyoret vs Arroz a Banda · Las Diferencias',
    subtitulo: 'Confundidos a menudo · El arroz a banda no tiene tropezones · El senyoret sí los tiene · Dos platos distintos',
    desc: 'El arroz del senyoret y el arroz a banda se confunden frecuentemente, pero son platos distintos aunque emparentados. El arroz a banda es en su origen un plato marinero de las barcas pesqueras: se servía en dos tiempos —primero el pescado y la verdura cocidos con el caldo, y luego el arroz cocido en ese caldo "a banda" (aparte, en valenciano)—, sin tropezones. Solo arroz, fumet concentrado de morralla y alioli. El senyoret, en cambio, es un arroz con tropezones: gambas, calamares, sepia y pescado pelados y limpios que se integran en el arroz durante la cocción. La clave del senyoret está en que esos tropezones no llevan cáscara ni espina. Hoy en día, muchos restaurantes dan el mismo nombre a ambos platos, lo que ha creado cierta confusión. La diferencia real: si tiene tropezones pelados, es senyoret; si es solo arroz con caldo sin nada, es a banda.',
    dato: 'Arroz a banda: sin tropezones, solo arroz y fumet · Senyoret: con marisco y pescado pelado integrado en el arroz',
    imgClass: 'img-sen-diferenciaasy',
    tags: [{ label: 'Vs Arroz a banda' }, { label: 'Con tropezones' }, { label: 'Misma técnica' }],
  },
  {
    num: '05',
    nombre: 'El Fumet · La Clave del Arroz',
    subtitulo: 'Caldo de morralla y cabezas de marisco · El lienzo de sabor · Siempre caliente',
    desc: 'Como en todos los grandes arroces de marisco valencianos, la clave del senyoret está en el fumet. El fumet del senyoret se elabora con las cabezas y cáscaras de las gambas, espinas de rape u otros pescados blancos, galeras, cangrejos y morralla (peces de roca pequeños). Todo se sofríe primero en aceite, se añade un poco de tomate, cebolla y puerro, se moja con agua y se deja cocer a fuego suave entre 20 y 30 minutos. El resultado es un caldo oscuro, yodado, concentrado y lleno de sabor marino. La clave: el fumet debe estar caliente cuando se añade al arroz —el caldo frío rompe la cocción. La proporción habitual es 2,5 partes de fumet por 1 de arroz. Al añadirlo se incorporan también el azafrán y el azafrán tostado. El fumet que sobra de pelar el marisco para el senyoret es exactamente el mejor fumet posible: nada se desperdicia.',
    dato: 'Fumet: cabezas de gamba + morralla + galeras · Cocción 20–30 min · Siempre caliente · Proporción: 2,5 partes fumet : 1 arroz',
    imgClass: 'img-sen-fumetasy',
    tags: [{ label: 'Fumet casero' }, { label: 'Morralla' }, { label: 'Cabezas de gamba' }],
  },
];

var claves = [
  { clave: 'Las cabezas son el caldo', desc: 'Nunca tirar las cabezas de gamba — son la base del fumet más sabroso posible' },
  { clave: 'Salmorreta antes del fumet', desc: 'Incorporar la salmorreta con la sepia y el calamar — que se impregne bien antes del caldo' },
  { clave: 'Fumet siempre caliente', desc: 'El caldo frío rompe la cocción del arroz — mantenerlo hirviendo antes de añadir' },
  { clave: 'Las gambas al final', desc: 'Añadir las gambas peladas los últimos 5 minutos — si se cuecen demasiado quedan gomosas' },
  { clave: 'Sin remover el arroz', desc: 'Como en cualquier paella, una vez añadido el fumet no se remueve el arroz' },
  { clave: 'Reposo con paño', desc: '5 min tapado con un paño tras apagar el fuego — el arroz termina de absorber el caldo' },
];

var restaurantes = [
  {
    zona: 'Playa de la Malvarrosa',
    desc: 'La cuna del mito. Los restaurantes del paseo marítimo de la Malvarrosa y el Cabanyal sirven el arroz del senyoret en su contexto original: frente al mar, con brisa mediterránea.',
  },
  {
    zona: 'Centro de Valencia',
    desc: 'Múltiples arrocerías del centro histórico y el Eixample elaboran versiones de autor del senyoret con gamba roja, cigala pelada o bogavante. El Mercado Central y sus alrededores son el epicentro.',
  },
  {
    zona: 'Costa alicantina · Jávea · Altea',
    desc: 'El territorio más ligado al senyoret. Los restaurantes de la costa norte de Alicante lo tienen como plato estrella. En Jávea, la conexión con Sorolla y la tradición marinera hace la experiencia más auténtica.',
  },
  {
    zona: 'Restaurantes de autor en Valencia',
    desc: 'Los chefs de los restaurantes de referencia de Valencia hacen versiones del senyoret con ingredientes de temporada de la lonja: galera, coquina, langostino rojo y pescado del día.',
  },
];

export default function ArrozSenyoret() {
  return (
    <div className="sen-page">

      {/* Hero */}
      <div className="sen-hero">
        <div className="sen-hero-overlay" />
        <div className="sen-hero-content">
          <div className="sen-eyebrow">Gastronomía · Arròs del Senyoret · El arroz de los señoritos que conquistó la costa</div>
          <h1>Arroz del<br />Senyoret</h1>
          <p>Todo el marisco pelado. Sin cáscaras, sin mancharse. El arroz donde la comodidad es el lujo: gambas, calamares, sepia y rape limpios, sobre un fumet de morralla y salmorreta alicantina.</p>
        </div>
        <div className="sen-hero-stats">
          <div className="sen-stat">
            <span className="sen-stat-num">c.1950</span>
            <span className="sen-stat-label">origen Malvarrosa</span>
          </div>
          <div className="sen-stat-sep" />
          <div className="sen-stat">
            <span className="sen-stat-num">Pelado</span>
            <span className="sen-stat-label">todo el marisco</span>
          </div>
          <div className="sen-stat-sep" />
          <div className="sen-stat">
            <span className="sen-stat-num">Salmorreta</span>
            <span className="sen-stat-label">el secreto alicantino</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="sen-intro">
        <p>El arroz del senyoret es el arroz más "sin excusas" de la cocina valenciana. No hay cáscaras que separar, no hay espinas que sacar, no hay manos que lavar. Todo el marisco llega ya pelado y limpio directamente integrado en el grano de arroz. Es el arroz que se puede comer mirando al mar con una copa de vino blanco en la mano, sin interrupciones.</p>
        <p>Su popularidad en toda la costa valenciana y alicantina es enorme. Aparece en casi todas las cartas de los restaurantes de playa, en las arrocerías del centro de Valencia y en las mesas de los restaurantes de Jávea, Altea y Dénia. Es el arroz más agradecido para el comensal sin experiencia con los arroces de marisco: el sabor es igual de potente, pero la experiencia mucho más cómoda.</p>
      </div>

      {/* Section title */}
      <div className="sen-section-title">
        <h2>Todo sobre el arròs del senyoret</h2>
        <p>Historia, marisco pelado, la salmorreta, la diferencia con el arroz a banda y las claves del fumet perfecto.</p>
      </div>

      {/* Secciones */}
      <div className="sen-routes">
        {secciones.map(s => (
          <div className="sen-route-item" key={s.num}>
            <div className="sen-route-num">{s.num}</div>

            <div className="sen-route-text">
              <h2>{s.nombre}</h2>
              <div className="sen-subtitulo">{s.subtitulo}</div>
              <p className="sen-desc">{s.desc}</p>

              <div className="sen-dato-box">
                <span>{s.dato}</span>
              </div>

              <div className="sen-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="sen-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="sen-route-img">
              <div className={`sen-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Claves */}
      <div className="sen-claves-wrap">
        <h3>Las 6 claves del senyoret perfecto</h3>
        <div className="sen-claves-grid">
          {claves.map((c, i) => (
            <div className="sen-clave-item" key={c.clave}>
              <span className="sen-clave-num">0{i + 1}</span>
              <div>
                <div className="sen-clave-titulo">{c.clave}</div>
                <div className="sen-clave-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dónde comerlo */}
      <div className="sen-rest-wrap">
        <h3>Dónde comer arroz del senyoret</h3>
        <div className="sen-rest-grid">
          {restaurantes.map(r => (
            <div className="sen-rest-card" key={r.zona}>
              <span className="sen-rest-icono">{r.icono}</span>
              <div className="sen-rest-zona">{r.zona}</div>
              <p className="sen-rest-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="sen-info-box">
        <h3>Lo que debes saber del arroz del senyoret</h3>
        <ul className="sen-info-list">
          <li>El <strong>senyoret</strong> no es lo mismo que el arroz a banda — el a banda no tiene tropezones; el senyoret sí, pero todos pelados</li>
          <li>La <strong>salmorreta</strong> (ñora, ajo, tomate, perejil) es el ingrediente diferencial — sin ella es simplemente una paella de marisco</li>
          <li>El mejor <strong>fumet</strong> del senyoret se hace con las cabezas y cáscaras del propio marisco que va en el plato — nada se desperdicia</li>
          <li>Las <strong>gambas peladas se añaden al final</strong> — los últimos 5 minutos de cocción, o quedarán gomosas</li>
          <li>El arroz del senyoret admite <strong>bogavante pelado</strong> como versión de lujo — en ese caso se llama "senyoret de bogavante"</li>
          <li>Se sirve con <strong>alioli</strong> aparte para quien quiera añadirlo — combina perfectamente con el sabor marino del fumet y la salmorreta</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}