import '../assets/css/ArrozHorno.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'El Arròs Passejat · La Historia del Plato',
    subtitulo: 'Del puchero al horno del panadero · Cocina de aprovechamiento medieval',
    desc: 'El arroz al horno —arròs al forn en valenciano— es uno de los platos más auténticos y desconocidos de la cocina valenciana. Durante la Valencia medieval ya existía una receta llamada "arròs en cassola al forn", y se sabe que los árabes lo elaboraban al menos desde el siglo XVI. Pero su historia más cercana y entrañable viene de la cocina de aprovechamiento: al día siguiente de cocinar el puchero valenciano (el cocido local), el caldo sobrante, rico en colágeno, junto con los garbanzos, carnes y embutidos no consumidos, se convertía en la base del arroz al horno. El nombre popular "arròs passejat" —arroz paseado— describe a la perfección otra tradición: como las casas no tenían horno propio, las mujeres preparaban la cazuela de barro en casa y la "paseaban" por las calles hasta el horno del panadero, que la cocinaba aprovechando el calor residual tras cocer el pan. Una costumbre que todavía pervive en algunos pueblos de la Comunitat.',
    dato: 'Plato del sur de Valencia · Especialmente típico entre Xàtiva y el norte de Alicante · Cocinado en cazuela de barro al horno',
    imgClass: 'img-historia',
    tags: [{ label: 'Arròs passejat' }, { label: 'Medieval' }, { label: 'Aprovechamiento' }],
  },
  {
    num: '02',
    nombre: 'La Cazuela de Barro · El Recipiente Es el Plato',
    subtitulo: 'Gorgues · Barro poroso · Calor uniforme · La costra dorada',
    desc: 'En el arroz al horno, el recipiente no es opcional: es parte esencial del plato. La cazuela de barro valenciana —conocida como gorgues— es un material poroso que retiene el calor de manera uniforme y permite una evaporación lenta, muy diferente al rápido calor de la paella metálica. Esta cocción suave y continua es la que produce la característica costra dorada y crujiente en la superficie —las patatas y la piel de las morcillas se tuestan uniformemente— mientras el interior queda eixut (seco), suelto y perfectamente impregnado del colágeno y los aromas del caldo del puchero. Además, el barro mantiene la temperatura mucho tiempo después de salir del horno, lo que permite un reposo natural que termina de perfeccionar el punto del arroz. En cazuela de metal o de otro material, el resultado nunca será el mismo.',
    dato: 'Cazuela de barro (gorgues) · 220°C durante 20–25 min · Arroz seco (eixut) · Costra dorada en la superficie',
    imgClass: 'img-cazuela',
    tags: [{ label: 'Cazuela de barro' }, { label: 'Costra dorada' }, { label: 'Eixut' }],
  },
  {
    num: '03',
    nombre: 'Los Ingredientes · El ADN del Puchero',
    subtitulo: 'Garbanzos · Morcilla de cebolla · Costilla · Panceta · Cabeza de ajos',
    desc: 'La receta base del arroz al horno es un catálogo de los productos del cerdo y la huerta valenciana. Los garbanzos —herencia directa del puchero— aportan textura terrosa que contrasta con la elasticidad del arroz. La morcilla de cebolla es el embutido estrella: su rotura controlada durante el horneado tiñe y aromatiza el arroz de forma inconfundible. La costilla de cerdo y la panceta entregan grasa y potencia al caldo. Las rodajas de patata absorben el exceso de caldo y se doran por arriba. El tomate, también en rodajas sobre la superficie, aporta frescura y humedad. Y la cabeza de ajos entera, presidiendo el centro de la cazuela, es el elemento más visual y aromático: al finalizar la cocción los ajos quedan cremosos y dulces, y la tradición dicta que quien reparte el arroz los ofrece a los comensales como manjar. El caldo del puchero —nunca agua— es el ingrediente que distingue un arroz mediocre de uno memorable.',
    dato: 'Proporción: 2 partes de caldo caliente por 1 de arroz · Arroz de grano redondo DO Valencia (bomba, senia, albufera)',
    imgClass: 'img-ingredientes',
    tags: [{ label: 'Garbanzos' }, { label: 'Morcilla de cebolla' }, { label: 'Caldo de puchero' }],
  },
  {
    num: '04',
    nombre: 'Variantes · Más Allá de la Receta Tradicional',
    subtitulo: 'Arroz con costra · Con manitas · Vegetal · De bogavante · Regional y de temporada',
    desc: 'La receta tradicional admite variaciones tan apreciadas como la original. El arroz con costra —especialmente típico en Alicante— lleva un huevo batido que se vierte al final y se gratina, creando una capa dorada y esponjosa en la superficie que es todo un espectáculo. El arroz al horno con manitas de cerdo, que prepara por encargo la arrocería Casa Chaparro en Riba-Roja del Turia, añade una textura gelatinosa y melosa al caldo que lo convierte en una variante extraordinariamente sabrosa. Las versiones más modernas incluyen la de bogavante (en restaurantes de cocina de autor), la de conejo y pollo (alternativa a las carnes de cerdo) y la versión vegetariana con verduras de temporada, alcachofas, habas y setas. El restaurante La Riuà de Valencia elabora hasta 6 tipos distintos de arroz al horno, incluyendo el de coca y el grava.',
    dato: 'Arroz con costra: típico de Alicante · Con manitas: meloso y gelatinoso · Con costra de huevo batido al gratinar',
    imgClass: 'img-variantes',
    tags: [{ label: 'Arroz con costra' }, { label: 'Con manitas' }, { label: '6 variantes en La Riuà' }],
  },
];

var ingredientes = [
  { nombre: 'Arroz DO Valencia', icono: '🌾', desc: 'Bomba, Senia o Albufera · Grano redondo · Absorbe el caldo sin deshacerse' },
  { nombre: 'Caldo de puchero', icono: '🍲', desc: 'Nunca agua · Rico en colágeno · Concentrado y lleno de matices' },
  { nombre: 'Garbanzos cocidos', icono: '🫘', desc: 'Textura terrosa · Herencia directa del cocido valenciano' },
  { nombre: 'Morcilla de cebolla', icono: '⚫', desc: 'El embutido estrella · Tiñe y aromatiza el arroz durante el horneado' },
  { nombre: 'Costilla de cerdo', icono: '🥩', desc: 'Dorada en aceite antes de hornear · Potencia y sabor al conjunto' },
  { nombre: 'Panceta', icono: '🥓', desc: 'Grasa natural que impregna el arroz durante la cocción en el horno' },
  { nombre: 'Cabeza de ajos', icono: '🧄', desc: 'Entera en el centro · Al final queda cremosa y dulce · La tradición la ofrece como manjar' },
  { nombre: 'Patata y tomate', icono: '🍅', desc: 'En rodajas sobre el arroz · Se doran por arriba · Regulan la humedad' },
];

var restaurantes = [
  {
    nombre: 'Restaurante La Riuà',
    especialidad: 'Hasta 6 tipos distintos de arroz al horno',
    barrio: 'Ciutat Vella',
    precio: '€€',
    desc: 'El referente valenciano del arroz al horno. La versión tradicional —garbanzos, tomate, ajos, costilla, morcilla y patata— cuesta 16 €/persona. También elabora arroz de coca, con costra y grava.',
    direccion: 'Carrer del Mar, 27, Valencia',
  },
  {
    nombre: 'Racó del Turia',
    especialidad: 'Arroz al horno tradicional · Por encargo',
    barrio: 'L\'Eixample',
    precio: '€€',
    desc: 'Uno de los restaurantes más tradicionales y visitados para arroz en el Eixample. Por 21 €, cazuela de barro con costillas, panceta, morcilla, tomate, garbanzos, patata y ajos. Solo por encargo.',
    direccion: 'Carrer de Ciscar, 10, Valencia',
  },
  {
    nombre: 'Casa Chaparro',
    especialidad: 'Tradicional y con manitas de cerdo · Por encargo',
    barrio: 'Riba-Roja del Turia',
    precio: '€€',
    desc: 'Dos versiones: la tradicional y la extraordinaria con manitas de cerdo, melosa y gelatinosa. Por 15 €/persona. Solo por encargo. Una de las joyas gastronómicas del área metropolitana.',
    direccion: 'C/ Sequia Marxitana nº8, Riba-Roja del Turia',
  },
  {
    nombre: 'Asador Alfàbega',
    especialidad: 'Arroz DO Valencia variedad Albufera · Por encargo',
    barrio: 'Alginet',
    precio: '€€',
    desc: 'Preparado con arroz variedad «Albufera» D.O. Valencia, a 14,50 € la ración. Se elabora por encargo en este asador especializado en carnes de Alginet, dentro del menú Alfàbega.',
    direccion: 'Pol. Ind. Norte, C. del Censal, 21, Alginet',
  },
  {
    nombre: 'Forn de Sant Pere · Xàtiva',
    especialidad: 'Horno de leña centenario · De lunes a domingo',
    barrio: 'Xàtiva',
    precio: '€',
    desc: 'La capital del arroz al horno. Este horno de Xàtiva prepara el arròs al forn en un horno de leña centenario, disponible todos los días de la semana. La experiencia más auténtica posible.',
    direccion: 'Plaça Sant Pere, 5, Xàtiva',
  },
  {
    nombre: 'Restaurante La Cova',
    especialidad: 'Arroz al horno de barra · Fontanars dels Alforins',
    barrio: 'Fontanars dels Alforins',
    precio: '€',
    desc: 'El tapado de la lista. En este bar-restaurante de Fontanars dels Alforins, además de excelente vino local, sirven un arroz al horno de generosas proporciones que enamora a quien lo prueba.',
    direccion: 'Plaza Virgen del Rosario, 9, Fontanars dels Alforins',
  },
];

var claves = [
  { clave: 'Caldo, nunca agua', desc: 'La diferencia entre un arroz correcto y uno memorable está en el caldo del puchero' },
  { clave: 'Cazuela de barro', desc: 'Material poroso que distribuye el calor uniformemente y crea la costra dorada' },
  { clave: 'Proporción 2:1', desc: 'Dos partes de caldo caliente por cada parte de arroz — el caldo debe estar hirviendo' },
  { clave: '220°C / 20–25 min', desc: 'El horno bien caliente desde el principio garantiza una cocción uniforme sin pasarse' },
  { clave: 'Capa de 2 dedos', desc: 'El arroz nunca debe superar dos dedos de grosor en la cazuela para cocerse bien' },
  { clave: 'Reposo con paño', desc: '5 min tapado con un paño después de salir del horno — el arroz termina de cocinarse solo' },
];

export default function ArrozHorno() {
  return (
    <div className="ah-page">

      {/* Hero */}
      <div className="ah-hero">
        <div className="ah-hero-overlay" />
        <div className="ah-hero-content">
          <div className="ah-eyebrow">Gastronomía · Arròs al Forn · El gran desconocido de la cocina valenciana</div>
          <h1>Arroz<br />al Horno</h1>
          <p>El plato que los valencianos guardan para sí mismos. Nacido del puchero y del horno del panadero, el arròs al forn es la cara más auténtica, contundente y hogareña de la cocina valenciana.</p>
        </div>
        <div className="ah-hero-stats">
          <div className="ah-stat">
            <span className="ah-stat-num">S. XVI</span>
            <span className="ah-stat-label">origen documentado</span>
          </div>
          <div className="ah-stat-sep" />
          <div className="ah-stat">
            <span className="ah-stat-num">220°C</span>
            <span className="ah-stat-label">en cazuela de barro</span>
          </div>
          <div className="ah-stat-sep" />
          <div className="ah-stat">
            <span className="ah-stat-num">Xàtiva</span>
            <span className="ah-stat-label">capital del plato</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="ah-historia-box">
        <div className="ah-historia-icono">🏺</div>
        <div className="ah-historia-content">
          <div className="ah-historia-titulo">El arroz paseado · La cocina que viajaba hasta el panadero</div>
          <p>Mientras la paella nació al aire libre y en el campo, el arroz al horno nació en las cocinas de los hogares valencianos y en el horno comunal del barrio. <strong>Arròs passejat</strong> —arroz paseado— era el nombre popular, porque las mujeres preparaban la cazuela con todos los ingredientes y la llevaban caminando hasta el horno del panadero, que aprovechaba el calor residual tras cocer el pan para terminar la cocción. A cambio, el panadero cobraba una pequeña cantidad o una porción del arroz, creando un vínculo social único alrededor de este plato. Su ADN es el <strong>puchero valenciano</strong>: el caldo sobrante, los garbanzos y las carnes del cocido del día anterior se reutilizaban al día siguiente en el arroz al horno. No era solo economía doméstica: era inteligencia culinaria. Una costumbre que todavía pervive en algunos pueblos de la Comunitat, especialmente en la zona sur de Valencia, donde <strong>Xàtiva</strong> es considerada la capital del plato.</p>
        </div>
      </div>

      {/* Ingredientes */}
      <div className="ah-ingredientes-wrap">
        <div className="ah-ingredientes-titulo">Los ingredientes del arròs al forn</div>
        <div className="ah-ingredientes-grid">
          {ingredientes.map(i => (
            <div className="ah-ing-card" key={i.nombre}>
              <span className="ah-ing-icono">{i.icono}</span>
              <div className="ah-ing-nombre">{i.nombre}</div>
              <div className="ah-ing-desc">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="ah-intro">
        <p>El arroz al horno es el gran desconocido de la cocina valenciana fuera de la Comunitat. Mientras la paella ha conquistado el mundo, el arròs al forn ha permanecido como un secreto celosamente guardado por los valencianos: el plato de domingo, de familia, de invierno, de "el de toda la vida". La razón de este carácter tan local está en su propia naturaleza: es un plato contundente, de sabores profundos y cocción lenta, muy alejado de la imagen ligera y solar que proyecta la paella.</p>
        <p>La combinación de <strong>caldo de puchero, garbanzos, morcilla de cebolla y la cabeza de ajos entera</strong> en el centro de la cazuela de barro es una imagen inconfundible. Al sacarlo del horno, la costra dorada en la superficie —las patatas y las morcillas tostadas— anuncia un plato que exige respeto y tiempo. Y siesta obligatoria después.</p>
      </div>

      {/* Secciones */}
      <div className="ah-section-title">
        <h2>Todo sobre el arròs al forn</h2>
        <p>Historia, técnica, ingredientes y variantes del plato más auténtico de la cocina valenciana del interior.</p>
      </div>

      <div className="ah-routes">
        {secciones.map(s => (
          <div className="ah-route-item" key={s.num}>
            <div className="ah-route-num">{s.num}</div>

            <div className="ah-route-text">
              <h2>{s.nombre}</h2>
              <div className="ah-subtitulo">{s.subtitulo}</div>
              <p className="ah-desc">{s.desc}</p>

              <div className="ah-dato-box">
                <span className="ah-dato-icon">🍶</span>
                <span>{s.dato}</span>
              </div>

              <div className="ah-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="ah-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="ah-route-img">
              <div className={`ah-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Claves */}
      <div className="ah-claves-wrap">
        <h3>Las 6 claves del arroz al horno perfecto</h3>
        <div className="ah-claves-grid">
          {claves.map((c, i) => (
            <div className="ah-clave-item" key={c.clave}>
              <span className="ah-clave-num">0{i + 1}</span>
              <div>
                <div className="ah-clave-titulo">{c.clave}</div>
                <div className="ah-clave-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurantes */}
      <div className="ah-rest-wrap">
        <h3>Dónde comer arroz al horno en Valencia</h3>
        <div className="ah-rest-grid">
          {restaurantes.map(r => (
            <div className="ah-rest-card" key={r.nombre}>
              <div className="ah-rest-nombre">{r.nombre}</div>
              <div className="ah-rest-meta">
                <span className="ah-rest-barrio">{r.barrio}</span>
                <span className="ah-rest-precio">{r.precio}</span>
              </div>
              <div className="ah-rest-especialidad">{r.especialidad}</div>
              <p className="ah-rest-desc">{r.desc}</p>
              <div className="ah-rest-dir">📍 {r.direccion}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="ah-info-box">
        <h3>Lo que debes saber antes de pedir arroz al horno</h3>
        <ul className="ah-info-list">
          <li>El <strong>arroz al horno auténtico</strong> se prepara con caldo del puchero, no con agua — pregunta siempre cómo está elaborado</li>
          <li>Es un plato de <strong>mediodía y de invierno</strong> — contundente y calórico, idealmente los jueves (día tradicional de cocido en muchos hogares)</li>
          <li>Muchos restaurantes lo sirven <strong>solo por encargo</strong> — llama con 24–48 h de antelación para asegurarte</li>
          <li>La <strong>cabeza de ajos entera</strong> presidiendo la cazuela es la forma más auténtica — pide los ajos asados, quedan cremosos y dulces</li>
          <li>La <strong>morcilla de cebolla</strong> valenciana es diferente a la morcilla de arroz — es más suave y perfumada, el ingrediente más específico del plato</li>
          <li>Si visitas <strong>Xàtiva</strong>, el arroz al horno en horno de leña del Forn de Sant Pere es una experiencia gastronómica única e irrepetible</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}