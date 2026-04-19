import '../assets/css/Esgarraet.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'Qué es el Esgarraet · El Nombre lo Explica Todo',
    subtitulo: 'Desgarrado con las manos · Bacalao + pimiento asado · El secreto mejor guardado de Valencia',
    desc: 'El esgarraet —del valenciano "desgarrar"— es quizás el plato más humilde y al mismo tiempo más delicioso de toda la gastronomía valenciana. Su nombre describe perfectamente su método de elaboración: tanto el bacalao en salazón como el pimiento rojo asado se desgarran a mano en tiras finas, sin cuchillo ni tijeras, antes de mezclarse con ajo laminado y un chorro generoso de aceite de oliva virgen extra. El resultado es una ensalada fría de sabores intensos y equilibrados: el punto salado del bacalao contrasta a la perfección con la dulzura del pimiento asado, y el aceite actúa como hilo conductor que integra todo el conjunto. Perfecto para abrir boca, para acompañar arroces o simplemente para mojar pan —sucar, como se dice en Valencia— en el aceite que queda en el plato. Es sorprendente cómo una preparación tan sencilla puede dar como resultado algo tan rico en matices.',
    dato: 'Ingredientes mínimos: 4 · Tiempo de elaboración: 20 min · Reposo en nevera: mínimo 2–5 h · Ideal de un día para otro',
    imgClass: 'img-platoesg',
    tags: [{ label: 'Desgarrado a mano' }, { label: 'Semana Santa' }, { label: '4 ingredientes' }],
  },
  {
    num: '02',
    nombre: 'El Bacalao Inglés · El Ingrediente Estrella',
    subtitulo: 'Bacalao curado en sal · Parcialmente desalado · Carne compacta y dorada',
    desc: 'El bacalao que se usa en el esgarraet es el llamado "bacalao inglés": un bacalao curado en sal y parcialmente desalado tras el proceso de curado, de modo que está listo para su consumo directo sin necesidad de desalar previamente. Tiene la carne compacta y un característico color dorado que lo distingue del bacalao fresco. Su punto de sal es el elemento que da al esgarraet su carácter: ese contraste entre lo salado del bacalao y la dulzura del pimiento asado es la base de toda la receta. Se puede usar también bacalao en migas ya desmigado, pero la versión más auténtica parte de un trozo que se desmiga manualmente, desgarrando la carne en tiras siguiendo la fibra natural del pescado. Cuanto mejor sea el bacalao, mejor será el esgarraet: no hay ingredientes que ocultar.',
    dato: 'Bacalao inglés: curado en sal, parcialmente desalado, listo para consumo directo · Color dorado · Carne compacta',
    imgClass: 'img-bacalaoesg',
    tags: [{ label: 'Bacalao inglés' }, { label: 'Sin desalar' }, { label: 'Desgarrado a mano' }],
  },
  {
    num: '03',
    nombre: 'La Técnica · Las Manos Son el Instrumento',
    subtitulo: 'Sin cuchillo · Sin tijeras · Desgarrar el pimiento · Desmigar el bacalao · Macerar en nevera',
    desc: 'La preparación del esgarraet tiene su propio ritual. El pimiento rojo se asa directamente sobre la llama o en el horno hasta que la piel se separa de la carne. Se deja enfriar, se pela y se desgarra a mano en tiras irregulares —nunca cortadas con cuchillo, porque el corte cambia la textura y la maceración. Lo mismo con el bacalao: se desmiga con los dedos siguiendo la fibra natural. Todo se coloca en un cuenco o fuente amplia, se añade el ajo laminado o picado (sin pasarse) y se riega generosamente con aceite de oliva virgen extra —abundante, que luego hay que sucar el pan. Se tapa con film y se deja reposar en la nevera. El truco fundamental es la paciencia: el mínimo son 2 horas, lo ideal es de un día para otro. Durante ese reposo el aceite se impregna del sabor del bacalao y el pimiento, el bacalao se hidrata, el ajo suaviza su potencia y todo el conjunto se transforma en algo mucho más que la suma de sus partes.',
    dato: 'Pimientos: asados al fuego directo o en el horno · Desgarrado con las manos · Reposo: mínimo 2 h, ideal 24 h',
    imgClass: 'img-tecnicaesg',
    tags: [{ label: 'Con las manos' }, { label: 'Maceración 24 h' }, { label: 'Sin cuchillo' }],
  },
  {
    num: '04',
    nombre: 'El Sucar · El Aceite es el Protagonista Silencioso',
    subtitulo: 'Sucar · Mojar el pan · El AOVE como hilo conductor · La recompensa final',
    desc: 'En valenciano, "sucar" significa mojar el pan en el aceite o la salsa de un plato. Y en el esgarraet, el sucar no es un complemento: es el clímax de la experiencia. El aceite de oliva virgen extra, empapado durante horas con los jugos del bacalao y del pimiento asado, adquiere una complejidad de sabor imposible de conseguir de otra manera. Es salado, dulce, ahumado y redondo al mismo tiempo. El fondo del plato —ese charco de aceite oscuro y aromático— es lo que los valencianos más disfrutan al final de la comida. Se sirve siempre con mucho pan. Algunos lo acompañan también con aceitunas negras o mojama en finas lonchas. El esgarraet se come frío, directo de la nevera, y con la mano si hace falta. Es el plato más mediterráneo de Valencia.',
    dato: 'Sucar = mojar el pan en valenciano · El aceite AOVE + jugo del bacalao + pimiento = la mejor salsa del mundo',
    imgClass: 'img-sucaresg',
    tags: [{ label: 'Sucar' }, { label: 'AOVE' }, { label: 'Con pan' }],
  },
  {
    num: '05',
    nombre: 'Variantes · El Esgarraet en toda la Comunitat',
    subtitulo: 'Con aceitunas negras · Con mojama · Con berenjena asada · Con ñora · Estilo Ribera',
    desc: 'Siendo puristas, el esgarraet auténtico solo lleva bacalao, pimiento rojo asado, ajo y aceite. Pero la receta tiene variantes tan apreciadas como el original. La presentación con aceitunas negras es la más habitual en los bares de Valencia. La versión con mojama en finas lonchas por encima añade un punto de sabor marino concentrado e inigualable. En los pueblos del interior de Castellón existe la variante con berenjena asada, que sustituye o se añade al pimiento. El esgarraet estilo Ribera usa pimientos asados directamente a la llama —no en horno—, un bacalao más grueso y bien desalado, mucho aceite y un reposo largo: el resultado es más intenso y potente. En todos los casos, la esencia es la misma: el contraste entre el bacalao salado y la dulzura del pimiento, con el aceite como puente.',
    dato: 'Versión básica: bacalao + pimiento + ajo + AOVE · Variantes: + aceitunas negras / + mojama / + berenjena asada',
    imgClass: 'img-variantesesg',
    tags: [{ label: 'Con mojama' }, { label: 'Con aceitunas' }, { label: 'Berenjena en Castellón' }],
  },
];

var claves = [
  { clave: 'Siempre con las manos', desc: 'Nunca cuchillo ni tijeras — el desgarrado a mano da una textura que el corte no puede replicar' },
  { clave: 'Bacalao inglés, no fresco', desc: 'El curado en sal es imprescindible — el punto salado es el ADN del plato' },
  { clave: 'Pimiento asado de calidad', desc: 'A la llama directa o en el horno — si es de bote, que sea bueno, porque el resultado lo nota' },
  { clave: 'AOVE abundante', desc: 'No escatimes: el aceite se va a impregnar de todo el sabor y luego se moja pan' },
  { clave: 'Reposo mínimo 2 horas', desc: 'Idealmente de un día para otro — la paciencia es el único truco de esta receta' },
  { clave: 'Servir bien frío', desc: 'Directamente de la nevera, con mucho pan y sin prisas — el esgarraet no espera' },
];

export default function Esgarraet() {
  return (
    <div className="esg-page">

      {/* Hero */}
      <div className="esg-hero">
        <div className="esg-hero-overlay" />
        <div className="esg-hero-content">
          <div className="esg-eyebrow">Gastronomía · Tapa tradicional valenciana · Semana Santa y todo el año</div>
          <h1>L'Esgarraet<br />Valencià</h1>
          <p>El secreto mejor guardado de la gastronomía valenciana. Cuatro ingredientes, las manos y paciencia. El contraste entre el bacalao salado y la dulzura del pimiento asado, unidos por el mejor aceite de oliva de la terreta.</p>
        </div>
        <div className="esg-hero-stats">
          <div className="esg-stat">
            <span className="esg-stat-num">4</span>
            <span className="esg-stat-label">ingredientes</span>
          </div>
          <div className="esg-stat-sep" />
          <div className="esg-stat">
            <span className="esg-stat-num">24 h</span>
            <span className="esg-stat-label">maceración ideal</span>
          </div>
          <div className="esg-stat-sep" />
          <div className="esg-stat">
            <span className="esg-stat-num">Sucar</span>
            <span className="esg-stat-label">con pan, obligatorio</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="esg-intro">
        <p>El esgarraet es el antípoda de la paella: mientras la paella requiere técnica, fuego, proporciones exactas y un recipiente específico, el esgarraet solo pide cuatro ingredientes buenos, las manos y tiempo. Es el plato que los valencianos preparan de un día para otro y sacan de la nevera cuando llega la visita, cuando hay que hacer un aperitivo rápido o cuando simplemente apetece algo frío, sabroso y redondo.</p>
        <p>Se encuentra en las barras de los bares del Cabanyal y la Malvarrosa, en las cocinas de los pueblos de la Ribera, en las mesas del Carmen durante la Semana Santa. Es un plato de barra, de casa, de verano y de Cuaresma. La única regla invariable: <strong>mucho pan para sucar el aceite</strong> del fondo del plato. Sin eso, no es esgarraet.</p>
      </div>

      {/* Section title */}
      <div className="esg-section-title">
        <h2>Todo sobre el esgarraet</h2>
        <p>Cinco aspectos del plato valenciano más sencillo y más delicioso de la gastronomía de la terreta.</p>
      </div>

      {/* Secciones */}
      <div className="esg-routes">
        {secciones.map(s => (
          <div className="esg-route-item" key={s.num}>
            <div className="esg-route-num">{s.num}</div>

            <div className="esg-route-text">
              <h2>{s.nombre}</h2>
              <div className="esg-subtitulo">{s.subtitulo}</div>
              <p className="esg-desc">{s.desc}</p>

              <div className="esg-dato-box">
                <span className="esg-dato-icon"></span>
                <span>{s.dato}</span>
              </div>

              <div className="esg-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="esg-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="esg-route-img">
              <div className={`esg-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Claves */}
      <div className="esg-claves-wrap">
        <h3>Las 6 claves del esgarraet perfecto</h3>
        <div className="esg-claves-grid">
          {claves.map((c, i) => (
            <div className="esg-clave-item" key={c.clave}>
              <span className="esg-clave-num">0{i + 1}</span>
              <div>
                <div className="esg-clave-titulo">{c.clave}</div>
                <div className="esg-clave-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dónde comerlo */}
      <div className="esg-donde-wrap">
        <h3>Dónde encontrar esgarraet en Valencia</h3>
        <div className="esg-donde-grid">
          <div className="esg-donde-card">
            <div className="esg-donde-titulo">Poblados Marítimos</div>
            <p className="esg-donde-desc">El Cabanyal, El Canyamelar y El Grao son la cuna del esgarraet. Las bodegas y bares de barrio como Casa Guillermo en El Canyamelar lo preparan en su versión más auténtica, especialmente en Semana Santa.</p>
          </div>
          <div className="esg-donde-card">
            <div className="esg-donde-titulo">Bodegas y tabernas del Carmen</div>
            <p className="esg-donde-desc">En las tabernas del centro histórico, el esgarraet aparece junto a la titaina y las olivas como aperitivo clásico. Se sirve en una fuente amplia con mucho pan para compartir.</p>
          </div>
          <div className="esg-donde-card">
            <div className="esg-donde-titulo">La Ribera · Xàtiva</div>
            <p className="esg-donde-desc">En los pueblos del sur de Valencia, el esgarraet se prepara con pimientos asados directamente a la llama y se sirve como plato principal del almuerzo. La versión de la Ribera es más potente y abundante.</p>
          </div>
          <div className="esg-donde-card">
            <div className="esg-donde-titulo">La cocina de casa</div>
            <p className="esg-donde-desc">El mejor esgarraet es el de casa. Con el pimiento asado la víspera, el bacalao desmigado con calma y el reposo de una noche entera en la nevera. Es el plato más fácil de hacer y el que más gusta a todos.</p>
          </div>
        </div>
      </div>

      {/* Info box */}
      <div className="esg-info-box">
        <h3>Lo que debes saber del esgarraet</h3>
        <ul className="esg-info-list">
          <li>El <strong>bacalao inglés</strong> no necesita desalación previa — ya viene parcialmente desalado y listo para consumir directo</li>
          <li><strong>Nunca uses cuchillo</strong> para desmenuzar el pimiento o el bacalao — el desgarrado a mano es parte de la receta, no un detalle</li>
          <li>El <strong>aceite de oliva</strong> debe ser abundante y de calidad — es el ingrediente que transforma el plato durante la maceración</li>
          <li>La Semana Santa es la época más tradicional, pero el esgarraet es <strong>perfecto todo el año</strong> — especialmente en verano, bien frío</li>
          <li>Las <strong>aceitunas negras y la mojama</strong> son los acompañamientos clásicos — añaden profundidad sin robar protagonismo</li>
          <li><strong>Pan</strong>, mucho pan — el "sucar" en el aceite del fondo del plato es la parte más valenciana de toda la experiencia</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}