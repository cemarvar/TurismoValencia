import '../../assets/cssEsencial/PatrimonioHumanidad.css';
import Footer from '../../FOOTER/Footer';

var patrimoniosValencia = [
  {
    num: '01',
    ano: '1996',
    tipo: 'Patrimonio Mundial',
    tipoClass: 'material',
    nombre: 'La Lonja de la Seda',
    subtitulo: 'Joya del gótico civil y símbolo del poder mercantil',
    ubicacion: 'Plaza del Mercado · Casco Histórico',
    desc: 'Declarada Patrimonio Mundial por la UNESCO el 5 de diciembre de 1996, la Lonja de la Seda es uno de los edificios más representativos del gótico civil europeo del siglo XV. Sus esbeltas columnas helicoidales del Salón de Contratación, las gárgolas del Patio de los Naranjos y las palmeras que tocan el techo del "paraíso" la convierten en una joya arquitectónica sin igual. Dos décadas después de su declaración, la UNESCO integró además a Valencia en la Ruta de la Seda, que conecta otras 32 ciudades de Asia y Europa.',
    curiosidad: 'El Salón Columnario, donde se cerraban los tratos comerciales, está decorado con una inscripción latina que advierte a los comerciantes de actuar con honradez. Las columnas en espiral no tienen precedente directo en la arquitectura gótica valenciana.',
    visita: 'Todos los días del año de 9:30 a 19:00 h · Entrada gratuita con la València Tourist Card',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Siglo XV' }, { label: 'Gótico civil' }, { label: 'UNESCO 1996' }],
    imgClass: 'img-lonja',
  },
  {
    num: '02',
    ano: '2009',
    tipo: 'Patrimonio Inmaterial',
    tipoClass: 'inmaterial',
    nombre: 'El Tribunal de las Aguas',
    subtitulo: 'La institución de justicia más antigua de Europa en activo',
    ubicacion: 'Puerta de los Apóstoles · Catedral de Valencia',
    desc: 'Cada jueves del año, a las doce del mediodía, bajo la Puerta de los Apóstoles de la Catedral de Valencia se celebra una de las tradiciones más singulares de Europa. El Tribunal de las Aguas de la Vega de Valencia, con raíces en época romana, resuelve de manera pública y oral los conflictos entre los agricultores sobre el uso del agua de riego. En 2009 la UNESCO lo declaró Patrimonio Cultural Inmaterial de la Humanidad por su carácter único, su eficacia milenaria y su función viva dentro de la sociedad valenciana.',
    curiosidad: 'El tribunal sesiona sin actas escritas ni abogados: los síndicos de las ocho acequias históricas deliberan y dictan sentencia en valenciano en cuestión de minutos. En siglos de funcionamiento, ninguna de sus resoluciones ha sido recurrida ante un tribunal ordinario.',
    visita: 'Todos los jueves a las 12:00 h · Acceso libre · Se suspende en festivos y entre Navidad y Reyes',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Todos los jueves' }, { label: 'Tradición viva' }, { label: 'UNESCO 2009' }],
    imgClass: 'img-tribunal',
  },
  {
    num: '03',
    ano: '2016',
    tipo: 'Patrimonio Inmaterial',
    tipoClass: 'inmaterial',
    nombre: 'Las Fallas de Valencia',
    subtitulo: 'La fiesta más creativa y explosiva del Mediterráneo',
    ubicacion: 'Toda la ciudad · 15–19 de marzo',
    desc: 'Las Fallas son la celebración donde confluyen las artes plásticas, la música, la pirotecnia, la gastronomía y el arte de vivir. Monumentos efímeros de hasta varios pisos de altura, construidos por artistas falleros durante meses, se levantan en cada barrio de la ciudad para arder en la noche del 19 de marzo en la Cremà. La UNESCO las declaró Patrimonio Cultural Inmaterial de la Humanidad en 2016 por ser una fiesta única en el mundo, sin equivalente en ninguna otra cultura.',
    curiosidad: 'El último domingo de febrero, la fallera mayor proclama el inicio oficial de las Fallas desde las Torres de Serranos en el acto conocido como La Cridà. Las mascletàs, explosiones de pólvora de carácter musical, retumban en la Plaza del Ayuntamiento cada mediodía de marzo.',
    visita: 'Del 15 al 19 de marzo · Entrada gratuita a la mayoría de actos · La Cremà es la noche del 19',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Marzo' }, { label: 'Pirotecnia' }, { label: 'UNESCO 2016' }],
    imgClass: 'img-fallasph',
  },
  {
    num: '04',
    ano: '2022',
    tipo: 'Patrimonio Inmaterial',
    tipoClass: 'inmaterial',
    nombre: 'El Toque Manual de Campanas',
    subtitulo: 'Un lenguaje sonoro vivo en lo alto del Miguelete',
    ubicacion: 'Miguelete · Catedral · Iglesia de Campanar · Santos Juanes',
    desc: 'En 2022 la UNESCO declaró el toque manual de campanas español Patrimonio Cultural Inmaterial de la Humanidad. En Valencia, campaneros profesionales mantienen vivo este lenguaje sonoro en varias iglesias de la ciudad —la de Campanar, la de los Santos Juanes y la propia Catedral— utilizando diferentes técnicas de volteo y repique para convocar a la comunidad en festividades destacadas. El Miguelete alberga uno de los conjuntos más numerosos de campanas góticas de España: once ejemplares, incluidas dos de más de 1.700 kilos y la más antigua de la Corona de Aragón, del año 1305.',
    curiosidad: 'El toque puede alcanzar los 120 decibelios, pero está exento de restricciones de volumen por su condición de Bien Inmaterial de Interés Cultural. Ningún campanero ha sufrido pérdida auditiva, gracias a la técnica tradicional de posicionamiento.',
    visita: 'Visita al Miguelete con toque de campanas · Aforo limitado a 25 personas · Reserva previa obligatoria',
    tags: [{ label: 'Reserva previa' }, { label: 'Aforo limitado' }, { label: 'Tradición viva' }, { label: 'UNESCO 2022' }],
    imgClass: 'img-campanas',
  },
];

var patrimoniosComunitat = [
  { ano: '1998', nombre: 'Arte Rupestre del Arco Mediterráneo', tipo: 'Patrimonio Mundial', desc: 'Pinturas rupestres prehistóricas repartidas por múltiples municipios de la Comunitat Valenciana.' },
  { ano: '2000', nombre: 'Palmeral de Elche', tipo: 'Patrimonio Mundial', desc: 'El mayor palmeral de Europa, con más de 200.000 ejemplares en el casco urbano de Elche.' },
  { ano: '2001', nombre: 'El Misteri d\'Elx', tipo: 'Patrimonio Inmaterial', desc: 'Drama litúrgico medieval en dos actos que se representa cada agosto en la Basílica de Santa María de Elche.' },
  { ano: '2011', nombre: 'Festa de la Mare de Déu de la Salut de Algemesí', tipo: 'Patrimonio Inmaterial', desc: 'Celebración con muixeranga, dolçaina y tabalet que se remonta al siglo XIII en la ciudad de Algemesí.' },
  { ano: '2018', nombre: 'Las Tamboradas', tipo: 'Patrimonio Inmaterial', desc: 'Repiques rituales de tambores de Alzira y l\'Alcora que marcan el inicio de la Semana Santa.' },
  { ano: '2018', nombre: 'Construcción de Muros en Piedra Seca', tipo: 'Patrimonio Inmaterial', desc: 'Técnica tradicional compartida con Croacia, Francia, Grecia, Italia y otros países europeos.' },
  { ano: '2022', nombre: 'La Maderada', tipo: 'Patrimonio Inmaterial', desc: 'Tradición del transporte fluvial de madera en balsa, candidatura multinacional con otros países europeos.' },
];

export default function PatrimonioHumanidad() {
  return (
    <div className="ph-page">

      {/* Hero */}
      <div className="ph-hero">
        <div className="ph-hero-overlay" />
        <div className="ph-hero-content">
          <div className="ph-eyebrow">Valencia · UNESCO · Patrimonio de la Humanidad</div>
          <h1>Patrimonio<br />de la Humanidad</h1>
          <p>Valencia atesora cuatro reconocimientos UNESCO: un monumento gótico del siglo XV, una institución milenaria de justicia, la fiesta más explosiva del Mediterráneo y un lenguaje sonoro único.</p>
        </div>
        <div className="ph-hero-badge">
          <span>4</span>
          <small>bienes</small>
          <small>UNESCO</small>
        </div>
      </div>

      {/* Intro */}
      <div className="ph-intro">
        <p>La UNESCO reconoce el valor universal excepcional del patrimonio de Valencia con cuatro declaraciones que abarcan dos siglos de historia: desde la joya del gótico civil de la Lonja de la Seda hasta el más reciente reconocimiento del toque manual de campanas en 2022. Tres de ellos son patrimonio inmaterial —tradiciones vivas que se pueden presenciar en cualquier visita— y uno es un monumento visitable todo el año.</p>
        <p>Además, la Comunitat Valenciana acumula otros <strong>siete bienes Patrimonio de la Humanidad</strong>, entre los que se cuentan el Palmeral de Elche, el Misteri d'Elx o la Festa de Algemesí.</p>
      </div>

      {/* Leyenda de tipos */}
      <div className="ph-leyenda">
        <div className="ph-leyenda-item">
          <span className="ph-badge material">Patrimonio Mundial</span>
          <span className="ph-leyenda-desc">Bienes materiales: monumentos, conjuntos o lugares de valor universal excepcional</span>
        </div>
        <div className="ph-leyenda-item">
          <span className="ph-badge inmaterial">Patrimonio Inmaterial</span>
          <span className="ph-leyenda-desc">Tradiciones, expresiones y prácticas culturales transmitidas de generación en generación</span>
        </div>
      </div>

      {/* Patrimonios de Valencia ciudad */}
      <div className="ph-routes">
        {patrimoniosValencia.map(p => (
          <div className="ph-route-item" key={p.num}>
            <div className="ph-route-num">{p.num}</div>

            <div className="ph-route-text">
              <div className="ph-ubicacion">{p.ubicacion}</div>
              <div className="ph-tipo-row">
                <span className={`ph-badge ${p.tipoClass}`}>{p.tipo}</span>
                <span className="ph-ano">Declarado en {p.ano}</span>
              </div>
              <h2>{p.nombre}</h2>
              <div className="ph-subtitulo">{p.subtitulo}</div>
              <p className="ph-desc">{p.desc}</p>

              <div className="ph-curiosidad">
                <span className="ph-curiosidad-label">Sabías que</span>
                <p>{p.curiosidad}</p>
              </div>

              <div className="ph-visita">
                <span className="ph-visita-icon"></span>
                {p.visita}
              </div>

              <div className="ph-tags">
                {p.tags.map(t => (
                  <span key={t.label} className={`ph-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

            </div>

            <div className="ph-route-img">
              <div className={`ph-route-img-inner ${p.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Sección Comunitat Valenciana */}
      <div className="ph-comunitat">
        <div className="ph-comunitat-header">
          <h3>Más Patrimonio de la Humanidad en la Comunitat Valenciana</h3>
          <p>Además de los cuatro bienes de la ciudad de Valencia, la Comunitat Valenciana suma siete reconocimientos UNESCO más, repartidos entre Alicante, Castellón y los municipios del interior.</p>
        </div>
        <div className="ph-comunitat-grid">
          {patrimoniosComunitat.map(p => (
            <div className="ph-comunitat-card" key={p.nombre}>
              <div className="ph-comunitat-ano">{p.ano}</div>
              <div className="ph-comunitat-nombre">{p.nombre}</div>
              <div className={`ph-badge small ${p.tipo === 'Patrimonio Mundial' ? 'material' : 'inmaterial'}`}>{p.tipo}</div>
              <p className="ph-comunitat-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ph-info-box">
        <h3>Información práctica para vivir el Patrimonio UNESCO</h3>
        <ul className="ph-info-list">
          <li>La Lonja de la Seda abre todos los días de 9:30 a 19:00 h</li>
          <li>El Tribunal de las Aguas sesiona todos los jueves a las 12:00 h en la Catedral</li>
          <li>Las Fallas se celebran del 15 al 19 de marzo cada año</li>
          <li>El toque de campanas en el Miguelete requiere reserva previa — aforo máximo 25 personas</li>
          <li>La València Tourist Card incluye entrada gratuita a la Lonja de la Seda</li>
          <li>El Tribunal de las Aguas no se celebra en festivos ni entre Navidad y Reyes</li>
        </ul>
      </div>

      <Footer />

    </div>
  );
}