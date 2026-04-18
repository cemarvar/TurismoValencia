import '../assets/css/Paella.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var tipos = [
  {
    num: '01',
    nombre: 'Paella Valenciana',
    subtitulo: 'La original · Pollo, conejo y verduras de la huerta',
    desc: 'La madre de todas las paellas. Nació en los pueblos de l\'Albufera y de l\'Horta, donde los campesinos cocinaban al aire libre con lo que tenían a mano: arroz cultivado junto al lago, pollo y conejo de corral, bajoqueta (judía verde plana), garrofó (alubia blanca grande y plana), tomate natural rallado, aceite de oliva, azafrán y sal. Todo cocido en una paella —la sartén de hierro con dos asas, de mucha base y poco fondo— sobre fuego de leña. Este plato de origen humilde, nacido del ingenio de los agricultores valencianos, se ha convertido en el plato más internacional de la gastronomía española. La Universidad Católica de Valencia publicó en 2022 un estudio científico que acredita los diez ingredientes auténticos. Sin chorizo. Sin cebolla. Sin guisantes.',
    ingredientes: ['Arroz DO Valencia', 'Pollo de corral', 'Conejo', 'Bajoqueta (judía verde plana)', 'Garrofó (alubia blanca)', 'Tomate natural rallado', 'Aceite de oliva virgen extra', 'Azafrán natural', 'Pimentón dulce', 'Sal'],
    opcionales: ['Caracoles', 'Alcachofa', 'Pato', 'Romero', 'Ajo'],
    imgClass: 'img-valencianapll',
    tags: [{ label: 'La original' }, { label: 'BIC 2021' }, { label: 'Albufera' }],
  },
  {
    num: '02',
    nombre: 'Paella de Marisco',
    subtitulo: 'El Mediterráneo en una sartén · Gambas, mejillones, calamares',
    desc: 'La segunda gran paella valenciana, nacida de la relación histórica del litoral con el mar. Prescinde de la carne y sustituye el agua por un fumet de pescado o marisco que concentra el sabor del Mediterráneo en cada grano de arroz. Los ingredientes varían según la temporada y el mercado, pero el resultado es siempre un arroz de color intenso —con el azafrán y el caldo de marisco como protagonistas— que el Cabanyal, la Malvarrosa y el Puerto de Valencia bordan como nadie. Las clóchinas (mejillones valencianos), la gamba roja, la sepia y el calamar son los protagonistas más habituales. Comerla frente al mar, con la brisa del Mediterráneo, es una de las experiencias gastronómicas más completas de la ciudad.',
    ingredientes: ['Arroz DO Valencia', 'Gambas o langostinos', 'Mejillones (clóchinas)', 'Calamares o sepia', 'Cigalas o galeras', 'Fumet de marisco', 'Tomate rallado', 'Ñora seca', 'Aceite de oliva', 'Azafrán natural'],
    opcionales: ['Almejas', 'Bogavante', 'Cangrejo', 'Pimiento rojo'],
    imgClass: 'img-mariscopll',
    tags: [{ label: 'Litoral valenciano' }, { label: 'Clóchinas' }, { label: 'Fumet' }],
  },
  {
    num: '03',
    nombre: 'Arroz del Senyoret',
    subtitulo: 'Marisco ya pelado · El más cómodo de comer · El arroz del señorito',
    desc: 'El "arroz del señorito" —del senyoret en valenciano— es la versión de la paella de marisco en la que todo el marisco se sirve ya pelado y limpio, sin cáscaras ni trabajos. Su nombre alude irónicamente a quien no quería mancharse los dedos comiendo. Comer sin trabajar. El resultado es un arroz igual de sabroso que la paella de marisco pero más cómodo para el comensal: cada tenedada combina directamente el grano de arroz con el trozo de gamba o calamar ya limpio. Es habitual en los restaurantes del barrio del Carmen, el centro histórico y la zona de la CAC, y es uno de los arroces más pedidos por los visitantes que quieren sabor de paella sin líos.',
    ingredientes: ['Arroz DO Valencia', 'Gambas peladas', 'Calamares limpios', 'Mejillones sin concha', 'Cigalas peladas', 'Fumet de marisco', 'Sofrito de tomate y ñora', 'Aceite de oliva', 'Azafrán'],
    opcionales: ['Almejas', 'Rape limpio', 'Sepia'],
    imgClass: 'img-senyoretpll',
    tags: [{ label: 'Sin cáscaras' }, { label: 'Cómodo' }, { label: 'Marisco limpio' }],
  },
  {
    num: '04',
    nombre: 'Arroz a Banda',
    subtitulo: 'Arroz aparte · Origen marinero · DO Arroz de Valencia',
    desc: 'El arroz a banda —"aparte" en valenciano— es uno de los arroces valencianos más valorados por los chefs y los sibaritas. Su nombre explica su origen: en las barcas pesqueras, los marineros cocinaban el pescado del día con agua, patata y cebolla para hacer el caldo. Con ese caldo —concentrado, marino, intenso— cocían el arroz aparte en la paella. Así nacieron dos platos: el pescado hervido (que se comía primero, "a banda") y el arroz (que se comía después). Hoy se sirve el arroz solo, con alioli y a veces también el pescado. Es un arroz seco, de color dorado, con un sabor profundo del mar que no tiene comparación. Los restaurantes del Cabanyal y El Palmar de la Albufera lo elaboran con especial maestría.',
    ingredientes: ['Arroz DO Valencia', 'Fumet de pescado concentrado', 'Ñora seca', 'Ajo', 'Tomate rallado', 'Aceite de oliva', 'Pimentón', 'Azafrán', 'Sal'],
    opcionales: ['Alioli (para acompañar)', 'Pescado hervido del caldo', 'Sepia'],
    imgClass: 'img-bandapll',
    tags: [{ label: 'Origen marinero' }, { label: 'Alioli' }, { label: 'El Palmar' }],
  },
];

var zonas = [
  { zona: 'En la playa', desc: 'Cabanyal, Malvarrosa, La Marina · Brisa del Mediterráneo + paella de marisco = perfección'},
  { zona: 'Centro histórico', desc: 'Más de 2.000 años de historia y decenas de locales con arroces de maestría' },
  { zona: 'El Palmar · Albufera', desc: 'El pueblo lacustre cuna de la paella · All i pebre y arroz a banda incomparables'},
  { zona: 'Ciudad de las Artes', desc: 'Arroces contemporáneos frente a la arquitectura más espectacular de Valencia'},
];

var reglas = [
  { regla: 'Fuego de leña', desc: 'El fuego de leña —preferiblemente de naranjo— da el socarrat y el aroma auténtico' },
  { regla: 'Paella nivelada', desc: 'El recipiente debe estar perfectamente nivelado para que el arroz quede parejo' },
  { regla: 'Sin remover el arroz', desc: 'Una vez añadido el arroz, jamás se remueve: el grano debe absorber el caldo solo' },
  { regla: 'El socarrat', desc: 'La capa dorada del fondo —el socarrat— es la firma del buen paellero. Es la recompensa' },
  { regla: 'Reposo de 5 min', desc: 'Tras apagar el fuego, 5 minutos de reposo tapada con un paño antes de servir' },
  { regla: 'Comer de la paella', desc: 'Tradición valenciana: la paella se pone en el centro y todos comen directamente de ella' },
];

export default function Paella() {
  return (
    <div className="pa-page">

      {/* Hero */}
      <div className="pa-hero">
        <div className="pa-hero-overlay" />
        <div className="pa-hero-content">
          <div className="pa-eyebrow">Gastronomía · La joia de la cuina valenciana</div>
          <h1>La Paella<br />Valenciana</h1>
          <p>El plato más internacional de la gastronomía valenciana. Nuestra contribución a la cocina universal. Nacida en la Albufera en el siglo XVIII, hoy es el símbolo gastronómico de Valencia ante el mundo.</p>
        </div>
        <div className="pa-hero-stats">
          <div className="pa-stat">
            <span className="pa-stat-num">S. XVIII</span>
            <span className="pa-stat-label">origen en la Albufera</span>
          </div>
          <div className="pa-stat-sep" />
          <div className="pa-stat">
            <span className="pa-stat-num">10</span>
            <span className="pa-stat-label">ingredientes auténticos</span>
          </div>
          <div className="pa-stat-sep" />
          <div className="pa-stat">
            <span className="pa-stat-num">BIC</span>
            <span className="pa-stat-label">Bien de Interés Cultural</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="pa-historia-box">
        <div className="pa-historia-content">
          <div className="pa-historia-titulo">Un plato humilde que conquistó el mundo</div>
          <p>La paella nació en el siglo XVIII en los pueblos de la <strong>Albufera de Valencia</strong>, donde los campesinos y jornaleros cocinaban al aire libre usando los ingredientes que tenían a mano: el arroz cultivado en el lago, los animales de corral —pollo y conejo— y las verduras de la huerta. Todo se cocinaba en una sartén ancha de hierro con dos asas —la <strong>"paella"</strong>, del latín <em>patella</em>— sobre fuego de leña. El boom del turismo de los años 60 la convirtió en fenómeno internacional. Declarada <strong>Bien de Interés Cultural</strong> por la Generalitat Valenciana en 2021, se busca desde hace años su reconocimiento por la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad. El nombre del recipiente —<em>paella</em>, "sartén" en valenciano— acabó dando nombre al plato. No se llama paellera: se llama paella.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="pa-intro">
        <p>En Valencia, una buena paella no se improvisa: es una ceremonia. El fuego de leña —preferiblemente de naranjo o algarrobo— el nivel perfecto de la sartén, el sofrito lento, el punto exacto de agua, el azafrán natural y la paciencia de no remover el arroz. Cada paso tiene su razón. El resultado, si todo sale bien, es un arroz seco, suelto y sabroso con el legendario <strong>socarrat</strong> en el fondo —esa capa dorada y ligeramente tostada que es la firma del buen paellero y que los valencianos disputan con cariño.</p>
        <p>Para encontrar la paella auténtica, la iniciativa <strong>Wikipaella</strong> —sin ánimo de lucro— recopila restaurantes que respetan la receta original. También puedes consultar la sección de arrocerías de visitvalencia.com. Elige el entorno: ¿frente al Mediterráneo en el Cabanyal? ¿en el centro histórico? ¿en El Palmar junto a la Albufera? Cada lugar tiene su magia.</p>
      </div>

      {/* Tipos */}
      <div className="pa-section-title">
        <h2>Los grandes arroces valencianos</h2>
        <p>Cuatro variedades que definen la riqueza arrocera de Valencia. La paella valenciana y sus grandes parientes.</p>
      </div>

      <div className="pa-routes">
        {tipos.map(t => (
          <div className="pa-route-item" key={t.num}>
            <div className="pa-route-num">{t.num}</div>

            <div className="pa-route-text">
              <h2>{t.nombre}</h2>
              <div className="pa-subtitulo">{t.subtitulo}</div>
              <p className="pa-desc">{t.desc}</p>

              <div className="pa-ingredientes-lista">
                <div className="pa-ing-titulo">Ingredientes principales</div>
                <div className="pa-ing-chips">
                  {t.ingredientes.map(ing => (
                    <span key={ing} className="pa-ing-chip">{ing}</span>
                  ))}
                </div>
                {t.opcionales.length > 0 && (
                  <div className="pa-opcionales">
                    <span className="pa-opc-label">Opcionales:</span> {t.opcionales.join(' · ')}
                  </div>
                )}
              </div>

              <div className="pa-tags">
                {t.tags.map(tag => (
                  <span key={tag.label} className="pa-tag">{tag.label}</span>
                ))}
              </div>
            </div>

            <div className="pa-route-img">
              <div className={`pa-route-img-inner ${t.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Zonas */}
      <div className="pa-zonas-wrap">
        <div className="pa-zonas-titulo">¿Dónde comer paella en Valencia?</div>
        <div className="pa-zonas-grid">
          {zonas.map(z => (
            <div className="pa-zona-card" key={z.zona}>
              <div className="pa-zona-nombre">{z.zona}</div>
              <div className="pa-zona-desc">{z.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Reglas del paellero */}
      <div className="pa-reglas-wrap">
        <h3>Las 6 reglas del buen paellero valenciano</h3>
        <div className="pa-reglas-grid">
          {reglas.map((r, i) => (
            <div className="pa-regla-item" key={r.regla}>
              <span className="pa-regla-num">0{i + 1}</span>
              <div>
                <div className="pa-regla-titulo">{r.regla}</div>
                <div className="pa-regla-desc">{r.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="pa-info-box">
        <h3>Lo que debes saber antes de pedir paella en Valencia</h3>
        <ul className="pa-info-list">
          <li>La <strong>paella valenciana auténtica</strong> lleva pollo, conejo, bajoqueta, garrofó y azafrán natural — si lleva chorizo o guisantes, no es valenciana</li>
          <li>El recipiente se llama <strong>"paella"</strong>, no paellera — en valenciano significa sartén</li>
          <li>La paella <strong>siempre se come al mediodía</strong> — los valencianos no cenan paella; es un plato de domingo y familia</li>
          <li>El <strong>socarrat</strong> —el arroz tostado del fondo— es lo más valorado; pídelo si te gusta y el restaurante lo domina</li>
          <li>Consulta <strong>Wikipaella</strong> (wikipaella.org) para encontrar restaurantes que garantizan la receta auténtica</li>
          <li>En <strong>El Palmar</strong> junto a la Albufera, la paella y el arroz a banda son especialmente auténticos — es la cuna del plato</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}