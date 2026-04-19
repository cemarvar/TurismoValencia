import '../assets/css/AllPebre.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'All i Pebre · Ajo y Pimentón · El Rival de la Paella',
    subtitulo: 'Guiso de pescadores · Albufera de Valencia · La esencia del lago en un cuenco',
    desc: 'El all i pebre —literalmente "ajo y pimentón" en valenciano— es el gran plato desconocido de la gastronomía valenciana fuera de la Comunitat. Mientras la paella ha conquistado el mundo, el all i pebre ha permanecido como el secreto mejor guardado de las orillas de la Albufera: el plato de los pescadores, el que se comparte mojando pan en el caldo rojo y picante, bebiendo vino y charlando al atardecer junto al lago. Más que una receta, es un método culinario tradicional para guisar pescado con una base potente de ajo, pimentón y guindilla. Pero en Valencia, cuando se dice "all i pebre" sin más, todo el mundo sabe de qué se habla: la anguila de la Albufera, cocinada a fuego lento en cazuela de barro, con patatas chascadas y un caldo espeso y rojizo que exige pan y tiempo.',
    dato: 'Albufera de Valencia · Catarroja y El Palmar · Guiso de cazuela de barro · Plato del carácter hortelano y marinero',
    imgClass: 'img-alp-platoap',
    tags: [{ label: 'All i pebre' }, { label: 'Albufera' }, { label: 'Rival de la paella' }],
  },
  {
    num: '02',
    nombre: 'La Anguila · El Ingrediente Protagonista',
    subtitulo: 'Anguila de la Albufera · Carne untuosa y dulce · Pescado azul de la Albufera',
    desc: 'La anguila es el pescado de la Albufera por excelencia. Este pez de apariencia alargada y piel resbaladiza —que se reproduce en el Mar de los Sargazos en el Atlántico y emigra al Mediterráneo— fue durante siglos el alimento de subsistencia de los pescadores de Catarroja y El Palmar. Su carne tiene notas dulces e intensas a la vez, y una textura untuosa y firme que hace que absorba perfectamente el caldo de ajo y pimentón. La anguila se corta en trozos de tres a cinco centímetros, se sazona y se incorpora al guiso cerca del final de la cocción, porque su carne se cuece más rápido que la patata. Hoy la anguila silvestre de la Albufera es cada vez más escasa —la especie está en riesgo de conservación— y muchos restaurantes recurren a piscifactorías de la zona. Fuera de El Palmar y Catarroja, encontrarla fresca en el mercado es complicado.',
    dato: 'Trozos de 3–5 cm · Se añade al final de la cocción · En riesgo de conservación · Alternativa: rape o mújol',
    imgClass: 'img-alp-anguilaap',
    tags: [{ label: 'Anguila Albufera' }, { label: 'Pez azul' }, { label: 'En riesgo' }],
  },
  {
    num: '03',
    nombre: 'El Mortero · La Técnica del All i Pebre',
    subtitulo: 'Ajos machacados · Guindilla · Pan frito y almendras opcionales · Cazuela de barro',
    desc: 'La técnica del all i pebre comienza en el mortero. Los ajos —en algunas versiones se usa la cabeza entera en camisa, en otras se machacan— se trabajan junto a la guindilla de Cayena hasta obtener una pasta. Este majado es el alma del plato: potente, aromático, picante. En una cazuela de barro (preferentemente) o una olla alta, se sofríe el majado en aceite de oliva a fuego suave —el ajo no puede quemarse, pues amargaría todo el caldo—, se añade el pimentón dulce rápidamente y se moja enseguida con agua para evitar que se queme. La versión más ortodoxa incorpora también pan frito y almendras machacadas en el mortero, que espesa el caldo de manera natural y redondea el sabor. Las patatas se chascar —se rompen en lugar de cortarse con cuchillo— para que el almidón que liberan espese el caldo durante la cocción lenta.',
    dato: 'Mortero: ajos + guindilla + (pan frito + almendras opcional) · Cazuela de barro · Cocción a fuego lento 45–60 min',
    imgClass: 'img-alp-morteroap',
    tags: [{ label: 'Mortero' }, { label: 'Patatas chascadas' }, { label: 'Fuego lento' }],
  },
  {
    num: '04',
    nombre: 'Suc d\'Anguila vs All i Pebre · La Diferencia Importa',
    subtitulo: 'Con patata = Suc d\'Anguila · Sin patata = All i Pebre puro · Los puristas lo saben',
    desc: 'Entre los puristas valencianos existe un debate claro: el all i pebre auténtico no lleva patata. Cuando se añade patata al guiso, el plato pasa a llamarse "suc d\'anguila" (literalmente, caldo de anguila), que es diferente en textura y en nombre, aunque sigue siendo delicioso. Los ingredientes únicos permitidos en el concurso tradicional de all i pebre de Catarroja son: aceite, ajo, sal, patata, pimentón, guindilla, anguila y agua. La versión sin patata —el all i pebre puro— tiene un caldo más líquido y concentrado, donde el sabor del ajo y el pimentón es más protagonista. La versión con patatas chascadas —el suc d\'anguila— tiene el caldo más espeso y meloso, y la patata absorbe todos los jugos del guiso. En los restaurantes de El Palmar y Catarroja, la versión con patata es la más habitual y la que los turistas conocen como "all i pebre".',
    dato: 'All i pebre puro: sin patata · Suc d\'anguila: con patata chascada · Ambas versiones en los concursos de Catarroja y El Palmar',
    imgClass: 'img-alp-sucap',
    tags: [{ label: 'Suc d\'anguila' }, { label: 'Puristas' }, { label: 'Concurso Catarroja' }],
  },
  {
    num: '05',
    nombre: 'Variantes · Espardenyà, Cebollà y Más Allá',
    subtitulo: 'Espardenyà: con pollo y conejo · Cebollà: con cebolla · Rape o mújol en all i pebre',
    desc: 'El all i pebre ha generado un árbol de variantes que hablan de su versatilidad. La espardenyà es la versión de mar y montaña: se añade al guiso un sofrito de pollo y conejo (o pato), creando un plato de una riqueza y profundidad extraordinarias. La cebollà sustituye la patata por cebolla, con un resultado más dulce y meloso. El all i pebre de rape —llamado así por analogía— es la versión más fácil de encontrar fuera de la Albufera: el rape, por su textura correosa, resiste perfectamente la cocción lenta y adopta el sabor de la salsa de forma excepcional. También existen versiones con mújol, pulpo y sepia. En Catarroja, los restaurantes con más historia —como La Primitiva o Anguilas El Galet— llevan décadas manteniendo las versiones más auténticas. En Serra, el restaurante Casa Granero ha ganado varios galardones nacionales con su all i pebre.',
    dato: 'Espardenyà: + pollo y conejo · Cebollà: + cebolla en lugar de patata · All i pebre de rape: la alternativa más fácil',
    imgClass: 'img-alp-variantesap',
    tags: [{ label: 'Espardenyà' }, { label: 'Cebollà' }, { label: 'All i pebre de rape' }],
  },
];

var restaurantes = [
  {
    nombre: 'La Primitiva · Catarroja',
    desc: 'Uno de los restaurantes más antiguos del embarcadero de Catarroja. Comenzó a principios del siglo XX como tasca de trabajadores del puerto. Primitiva Cases fue su primera cocinera y fundó una institución.',
    lugar: 'Puerto de Catarroja · A orillas de la Albufera',
  },
  {
    nombre: 'Anguilas El Galet · Catarroja',
    desc: 'Toda una vida consagrada a la anguila. Leonor Guillén la convirtió en referente. Venden anguila viva y cocinan el all i pebre con paciencia, fuego controlado y cazuela de barro.',
    lugar: 'Puerto de Catarroja · Embarcadero',
  },
  {
    nombre: 'Casa Baina · Catarroja',
    desc: 'Clásico del puerto de Catarroja. El mismo menú que La Primitiva: all i pebre auténtico con ensalada de llisa y pimientos asados como entrante. Cocina tradicional sin artificios.',
    lugar: 'Puerto de Catarroja',
  },
  {
    nombre: 'Restaurantes de El Palmar',
    desc: 'El pueblo lacustre de 700 habitantes tiene más de treinta restaurantes típicos. Cañas y Barro, Ca Jaume, La Perleta, Llar del Pescador, El Redolí y Mornell son algunos de los nombres de referencia.',
    lugar: 'El Palmar · 10 km al sur de Valencia',
  },
  {
    nombre: 'Casa Granero · Serra',
    desc: 'Sorpresa: en plena Sierra Calderona, este restaurante ha ganado varios galardones nacionales de all i pebre. Lo mismo triunfan con un arroz caldoso que con el guiso de anguila.',
    lugar: 'Serra · Sierra Calderona',
  },
  {
    nombre: 'Concurso de Catarroja y El Palmar',
    desc: 'Catarroja celebra el concurso más antiguo de all i pebre. El Palmar tiene también su "Concurs d\'all i pebre tradicional de l\'Illa d\'El Palmar", que reúne más de 2.500 personas y 200 profesionales.',
    lugar: 'Anual · Catarroja y El Palmar',
  },
];

var claves = [
  { clave: 'El ajo no puede quemarse', desc: 'Si el ajo se dora en exceso, el caldo amarga — sofrito suave y controlado' },
  { clave: 'Pimentón y agua, rápido', desc: 'El pimentón se quema en segundos — añadir agua inmediatamente tras el sofrito' },
  { clave: 'Patatas chascadas', desc: 'Romper en lugar de cortar — el almidón que sale espesa el caldo de forma natural' },
  { clave: 'Anguila al final', desc: 'La anguila se cuece antes que la patata — añadir los últimos 15–20 min de cocción' },
  { clave: 'Fuego lento', desc: 'Un borbotón ligero, tapado, 45–60 min — la prisa arruina este guiso' },
  { clave: 'Mejor de un día para otro', desc: 'Las patatas se asientan y la anguila coge todo el aroma de la salsa con el reposo' },
];

export default function AllPebre() {
  return (
    <div className="alp-page">

      {/* Hero */}
      <div className="alp-hero">
        <div className="alp-hero-overlay" />
        <div className="alp-hero-content">
          <div className="alp-eyebrow">Gastronomía · All i Pebre · El plato de los pescadores de la Albufera</div>
          <h1>All i Pebre<br />d'Anguila</h1>
          <p>Ajo y pimentón. El guiso de los pescadores de la Albufera que rivaliza en historia y solera con la paella valenciana. Catarroja, El Palmar y el lago que lo vio nacer.</p>
        </div>
        <div className="alp-hero-stats">
          <div className="alp-stat">
            <span className="alp-stat-num">Catarroja</span>
            <span className="alp-stat-label">cuna del plato</span>
          </div>
          <div className="alp-stat-sep" />
          <div className="alp-stat">
            <span className="alp-stat-num">1 h</span>
            <span className="alp-stat-label">cocción lenta</span>
          </div>
          <div className="alp-stat-sep" />
          <div className="alp-stat">
            <span className="alp-stat-num">Albufera</span>
            <span className="alp-stat-label">lago de origen</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="alp-intro">
        <p>El all i pebre es el plato más "de aquí" de toda la gastronomía valenciana. Mientras la paella se puede hacer en cualquier parte del mundo con los ingredientes correctos, el all i pebre pertenece a un territorio concreto: la Albufera, sus pescadores, sus acequias, sus anguilas. Es un plato de identidad, de memoria y de lugar. Potente por la presencia del ajo y el pimentón, y llamativo por recurrir a la anguila —un animal que se da en las desembocaduras de los ríos levantinos y en el lago de la Albufera— el all i pebre es uno de los guisos más afamados de la cocina valenciana.</p>
        <p>Un buen all i pebre no debe ser tacaño en ajo, guindilla, pimentón ni anguila. Y siempre, siempre, <strong>pan para mojar el caldo</strong>. La carne magra e intensa de la anguila merece rechupetearse hasta el hueso.</p>
      </div>

      {/* Section title */}
      <div className="alp-section-title">
        <h2>Todo sobre el all i pebre</h2>
        <p>Historia, anguila, técnica, variantes y restaurantes del plato más auténtico de la Albufera de Valencia.</p>
      </div>

      {/* Secciones */}
      <div className="alp-routes">
        {secciones.map(s => (
          <div className="alp-route-item" key={s.num}>
            <div className="alp-route-num">{s.num}</div>

            <div className="alp-route-text">
              <h2>{s.nombre}</h2>
              <div className="alp-subtitulo">{s.subtitulo}</div>
              <p className="alp-desc">{s.desc}</p>

              <div className="alp-dato-box">
                <span>{s.dato}</span>
              </div>

              <div className="alp-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="alp-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="alp-route-img">
              <div className={`alp-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Claves */}
      <div className="alp-claves-wrap">
        <h3>Las 6 claves del all i pebre perfecto</h3>
        <div className="alp-claves-grid">
          {claves.map((c, i) => (
            <div className="alp-clave-item" key={c.clave}>
              <span className="alp-clave-num">0{i + 1}</span>
              <div>
                <div className="alp-clave-titulo">{c.clave}</div>
                <div className="alp-clave-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurantes */}
      <div className="alp-rest-wrap">
        <h3>Dónde comer all i pebre · La ruta de la Albufera</h3>
        <div className="alp-rest-grid">
          {restaurantes.map(r => (
            <div className="alp-rest-card" key={r.nombre}>
              <div className="alp-rest-nombre">{r.nombre}</div>
              <div className="alp-rest-lugar"> {r.lugar}</div>
              <p className="alp-rest-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="alp-info-box">
        <h3>Lo que debes saber del all i pebre</h3>
        <ul className="alp-info-list">
          <li>El <strong>all i pebre con patata</strong> se llama técnicamente "suc d'anguila" entre los puristas — aunque los restaurantes lo llaman all i pebre igualmente</li>
          <li>La <strong>anguila silvestre</strong> de la Albufera es cada vez más escasa y cara — muchos restaurantes usan ya anguila de piscifactoría de la zona</li>
          <li>Si no encuentras anguila, el <strong>rape</strong> es la mejor alternativa — su textura correosa resiste la cocción lenta igual de bien</li>
          <li>El all i pebre está <strong>mejor de un día para otro</strong> — las patatas se asientan y la salsa gana profundidad con el reposo</li>
          <li>Para comerlo como los <strong>pescadores de la Albufera</strong>: pan de pueblo, vino tinto y sin prisa — el caldo del fondo es la recompensa</li>
          <li>El <strong>Concurso de Catarroja</strong> y el <strong>Concurs de El Palmar</strong> son los eventos más auténticos para vivir el all i pebre de primera mano</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}