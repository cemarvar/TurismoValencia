import '../assets/css/Fideua.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var tipos = [
  {
    num: '01',
    nombre: 'Fideuà Tradicional de Gandia',
    subtitulo: 'La original · Marisco del Mediterráneo · Fumet de morralla · Fideo nº3 o nº4',
    desc: 'La fideuà de Gandia es la receta original, la que salió de aquella barca del Grao hace más de un siglo. Sus ingredientes son pocos y de primera calidad: rape de carne firme, sepia o calamar, gambas y cigalas sobre un fumet de morralla —caldo de pescados de roca— concentrado y aromático. Los fideos son del nº3 o nº4, gruesos y cortos. El secreto está en el sofrito de ajo, tomate y pimentón, el tostado previo del fideo en ese mismo aceite —que potencia el sabor del trigo— y el punto de cocción exacto. Se sirve siempre con alioli artesano aparte, para que cada comensal mezcle a su gusto. El Concurso Internacional de Fideuà de Gandia —desde 1974— es el referente mundial de esta receta.',
    ingredientes: ['Fideo nº3 o nº4', 'Rape troceado', 'Sepia o calamar', 'Gambas o cigalas', 'Fumet de morralla', 'Sofrito de ajo y tomate', 'Pimentón dulce', 'Azafrán o colorante', 'Aceite de oliva virgen extra', 'Alioli artesano'],
    imgClass: 'img-tradicional',
    tags: [{ label: 'La original' }, { label: 'Gandia' }, { label: 'Concurso internacional' }],
  },
  {
    num: '02',
    nombre: 'Fideuà del Senyoret',
    subtitulo: 'Marisco ya pelado · Sin cáscaras · El más cómodo · Gamba roja valenciana',
    desc: 'La fideuà del senyoret —del señorito— es la versión más elegante y cómoda de comer: todo el marisco llega ya pelado y limpio a la mesa, sin cáscaras ni trabajo. El mismo concepto que el arroz del senyoret pero con fideos. La gamba roja valenciana, las almejas limpias y el rape sin espinas se integran directamente en el fideo, de modo que cada bocado combina pasta tostada con el trozo de marisco ya preparado. El fumet, hecho con las cabezas y cáscaras de ese mismo marisco, concentra todo el sabor del mar. En Valencia es uno de los más pedidos en los restaurantes del centro histórico y la zona de la Marina. Casa BALDO 1915 la elabora con gamba roja y es una de las más aclamadas de la ciudad.',
    ingredientes: ['Fideo nº4', 'Gamba roja pelada', 'Calamares limpios', 'Mejillones sin concha', 'Rape sin espina', 'Fumet concentrado de marisco', 'Sofrito de tomate y ajo', 'Ñora seca', 'Azafrán', 'Alioli'],
    imgClass: 'img-senyoret',
    tags: [{ label: 'Sin cáscaras' }, { label: 'Gamba roja' }, { label: 'Elegante' }],
  },
  {
    num: '03',
    nombre: 'Fideuà Negra',
    subtitulo: 'Tinta de calamar · Color y sabor intenso del mar · Alioli imprescindible',
    desc: 'La fideuà negra es la versión más espectacular visualmente y una de las más sabrosas. La tinta de calamar —incorporada al fumet o directamente al sofrito— tiñe los fideos de negro intenso y añade un sabor yodado, marino y profundo que no tiene comparación. Se elabora con calamar o sepia, gambas y a veces con chipirones, y el alioli blanco y espeso sobre el fondo negro crea un contraste visual y gustativo extraordinario. El restaurante Puerta del Mar de Valencia se ha hecho viral en redes sociales con su versión de fideuà negra con gambas rallada. Es un plato que enamora a quien lo prueba por primera vez y convierte en habitual a quien repite.',
    ingredientes: ['Fideo nº4', 'Tinta de calamar', 'Calamar o sepia troceados', 'Gambas', 'Chipirones', 'Fumet de pescado', 'Sofrito de ajo y tomate', 'Pimentón', 'Aceite de oliva', 'Alioli blanco (contraste)'],
    imgClass: 'img-negra',
    tags: [{ label: 'Tinta de calamar' }, { label: 'Espectacular' }, { label: 'Alioli' }],
  },
  {
    num: '04',
    nombre: 'Fideuà de Huerta y Variantes Creativas',
    subtitulo: 'Alcachofas · Caracoles · Pato · Boletus · La fideuà más allá del mar',
    desc: 'Valencia no se queda solo en el mar. La fideuà ha evolucionado hacia versiones de huerta y montaña que incorporan los productos más auténticos de la despensa valenciana. La de alcachofas y caracoles —muy popular en los restaurantes del centro histórico como Pelayo Gastro Trinquet— rescata el sabor de la tierra. La de pato y setas combina carnes de caza con la textura del fideo tostado. La de verduras y boletus de Masusa Paella Bar es una de las pocas opciones vegetarianas del género. Y la fideuà de bogavante —que aparece en la carta de Casa BALDO 1915— es la versión más festiva y generosa. La técnica base es siempre la misma: sofrito, fideo tostado, caldo y punto justo.',
    ingredientes: ['Fideo nº4', 'Alcachofas de temporada', 'Caracoles', 'Ajo y tomate', 'Caldo de verduras o ave', 'Aceite de oliva', 'Pimentón', 'Azafrán', 'Perejil fresco'],
    imgClass: 'img-huerta',
    tags: [{ label: 'Huerta valenciana' }, { label: 'Alcachofas' }, { label: 'Temporada' }],
  },
];

var restaurantes = [
  {
    nombre: 'Pelayo Gastro Trinquet',
    especialidad: 'Fideuà de pollo y alcachofa · 25 min de elaboración',
    barrio: 'Extramus',
    nota: '4,3 ★',
    precio: '€€',
    desc: 'Enclavado en la mítica Catedral de la Pilota Valenciana, el jefe de cocina Chimo Faubell elabora la fideuà al momento. La de pollo y alcachofa no puede faltar en su menú del día.',
  },
  {
    nombre: 'Casa BALDO 1915',
    especialidad: 'Fideuà del senyoret con gamba roja · Fideuà de bogavante',
    barrio: 'Ciutat Vella',
    nota: '4,0 ★',
    precio: '€€',
    desc: 'En un comercio centenario que evoca la Valencia de los años 50. El jefe de cocina Jorge Parra domina todas las variantes, incluyendo la innovadora fideuà de tataki de picaña madurada.',
  },
  {
    nombre: 'Vaqueta Gastro Mercat',
    especialidad: 'Fideuà de caracoles y alcachofas · Fideuà de tartar de atún rojo',
    barrio: 'Ciutat Vella',
    nota: '4,2 ★',
    precio: '€€€',
    desc: 'Junto al Mercat Central, Félix Escoto firma fideuàs de autor con producto de temporada. La de presa ibérica con boletus sorprende incluso a los más puristas del género marinero.',
  },
  {
    nombre: 'Alquería del Pou',
    especialidad: 'Fideuà de marisco · Fideuà de boletus',
    barrio: 'Quatre Carreres',
    nota: '4,6 ★',
    precio: '€€',
    desc: 'A 500 m de la CAC, en una alquería rehabilitada con vistas a la huerta. Fundada por Rafa Soler Orient, su fideuà de marisco con producto fresco es una de las más valoradas de Valencia.',
  },
  {
    nombre: 'Puerta del Mar',
    especialidad: 'Fideuà de pato y setas · Fideuà negra con gambas rallada',
    barrio: 'Ciutat Vella',
    nota: '4,5 ★',
    precio: '€€',
    desc: 'El fumet de su fideuà negra —viral en redes sociales— se elabora con los productos más frescos de la lonja. Símbolo de la cocina mediterránea en Valencia.',
  },
  {
    nombre: 'El Paeller Valencià',
    especialidad: 'Fideuà tradicional cocinada con caldo a leña',
    barrio: 'Ciutat Vella',
    nota: '4,6 ★',
    precio: '€€',
    desc: 'El caldo del fumet se cocina a leña, lo que da a los fideos un sabor marino intensísimo. Calamar, mejillones, rape, gamba pelada y potón. La fideuà tal como debe ser.',
  },
];

var secretos = [
  { titulo: 'El fumet casero', desc: 'Con cabezas de gambas, espinas de pescado blanco y verduras. Mantenerlo caliente antes de añadirlo' },
  { titulo: 'Tostar el fideo', desc: 'Rehogar los fideos en el sofrito 1 min antes del caldo — activa los aromas del trigo' },
  { titulo: 'Remover con criterio', desc: 'A diferencia del arroz, el fideo necesita movimiento suave para no pegarse ni agruparse' },
  { titulo: 'Proporción 3,5:1', desc: '3,5 partes de fumet por cada parte de fideo nº4 — ajustar según el fuego' },
  { titulo: 'El socarrat sutil', desc: 'Subir el fuego 1 minuto al final para crear la costra dorada en la base' },
  { titulo: 'Reposo 5 minutos', desc: 'Apagar el fuego y dejar reposar tapada con un paño antes de servir con alioli' },
];

export default function Fideua() {
  return (
    <div className="fid-page">

      {/* Hero */}
      <div className="fid-hero">
        <div className="fid-hero-overlay" />
        <div className="fid-hero-content">
          <div className="fid-eyebrow">Gastronomía · Originaria de Gandia · El plato marinero por excelencia</div>
          <h1>La Fideuà<br />Valenciana</h1>
          <p>Nacida por accidente en una barca del Grao de Gandia, la fideuà es la prima marinera de la paella: misma técnica, mismo fuego, mismo ritual. Pero con fideos en lugar de arroz y el Mediterráneo en cada bocado.</p>
        </div>
        <div className="fid-hero-stats">
          <div className="fid-stat">
            <span className="fid-stat-num">S. XX</span>
            <span className="fid-stat-label">Barca Santa Isabel</span>
          </div>
          <div className="fid-stat-sep" />
          <div className="fid-stat">
            <span className="fid-stat-num">1974</span>
            <span className="fid-stat-label">Concurso Internacional</span>
          </div>
          <div className="fid-stat-sep" />
          <div className="fid-stat">
            <span className="fid-stat-num">Gandia</span>
            <span className="fid-stat-label">cuna de la fideuà</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="fid-historia-box">
        <div className="fid-historia-icono">⚓</div>
        <div className="fid-historia-content">
          <div className="fid-historia-titulo">Nació en una barca · El cocinero que engañó al patrón</div>
          <p>La fideuà nació en el primer cuarto del siglo XX a bordo de la barca <strong>Santa Isabel</strong>, en el Grao de Gandia. El cocinero de a bordo, <strong>Gabriel Rodríguez Pastor</strong> —"Gabrielo"—, preparaba habitualmente arroz a banda para la tripulación. El problema: el patrón era tan aficionado al arroz que casi nunca les llegaba la ración al resto de marineros. La solución de Gabrielo fue astuta: sustituir el arroz por fideos, pensando que al patrón no le resultaría tan apetitoso. El resultado sorprendió a todos: el fideo absorbía el fumet de morralla con una intensidad diferente, con una textura propia y un sabor único. El plato se extendió por las tabernas del puerto y en <strong>1974</strong> Gandia celebró la primera edición del Concurso Internacional de Fideuà, hoy referente mundial. En 2015, el Ayuntamiento de Gandia declaró la fideuà como "plato típico local".</p>
        </div>
      </div>

      {/* Diferencias con la paella */}
      <div className="fid-diferencias-wrap">
        <div className="fid-dif-titulo">Fideuà vs Paella · Las diferencias clave</div>
        <div className="fid-dif-grid">
          <div className="fid-dif-col">
            <div className="fid-dif-label">Fideuà</div>
            <ul className="fid-dif-list">
              <li>Fideos nº3 o nº4 (pasta de trigo)</li>
              <li>Base siempre marinera: fumet de morralla</li>
              <li>Se remueve durante la cocción</li>
              <li>Proporción fumet:fideo = 3,5:1</li>
              <li>Siempre se sirve con alioli artesano</li>
              <li>Originaria de Gandia (s. XX)</li>
            </ul>
          </div>
          <div className="fid-dif-vs">VS</div>
          <div className="fid-dif-col fid-dif-col--right">
            <div className="fid-dif-label fid-dif-label--right">Paella</div>
            <ul className="fid-dif-list fid-dif-list--right">
              <li>Arroz DO Valencia (Senia, Bomba, Albufera)</li>
              <li>Valenciana: pollo, conejo, huerta / Marisco: fumet</li>
              <li>No se remueve jamás tras añadir el arroz</li>
              <li>Proporción agua:arroz = 3:1</li>
              <li>Se come directamente de la paella</li>
              <li>Originaria de la Albufera (s. XVIII)</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="fid-intro">
        <p>La fideuà no es una paella con fideos: es un plato con identidad propia. La técnica es similar —sofrito, tostado, fumet, reposo— pero el fideo absorbe el caldo de manera diferente al arroz, creando una textura más densa y un sabor concentrado que es el sello de este plato marinero. La palabra <em>fideuà</em> viene del valenciano <em>fideuada</em>, "gran cantidad de fideos", y este a su vez del árabe hispano <em>fidaws</em>.</p>
        <p>En Valencia hay versiones para todos los gustos: la clásica de marisco, la del senyoret con marisco limpio, la negra con tinta de calamar, la de huerta con alcachofas y caracoles, e incluso la de bogavante o la de pato y boletus. El <strong>alioli artesano</strong> —nunca de bote— es el acompañamiento imprescindible de cualquier fideuà que se precie.</p>
      </div>

      {/* Section title tipos */}
      <div className="fid-section-title">
        <h2>Los tipos de fideuà</h2>
        <p>De la receta original de Gandia a las versiones más creativas de los restaurantes de Valencia.</p>
      </div>

      {/* Tipos */}
      <div className="fid-routes">
        {tipos.map(t => (
          <div className="fid-route-item" key={t.num}>
            <div className="fid-route-num">{t.num}</div>

            <div className="fid-route-text">
              <h2>{t.nombre}</h2>
              <div className="fid-subtitulo">{t.subtitulo}</div>
              <p className="fid-desc">{t.desc}</p>

              <div className="fid-ing-wrap">
                <div className="fid-ing-titulo">Ingredientes principales</div>
                <div className="fid-ing-chips">
                  {t.ingredientes.map(ing => (
                    <span key={ing} className="fid-ing-chip">{ing}</span>
                  ))}
                </div>
              </div>

              <div className="fid-tags">
                {t.tags.map(tag => (
                  <span key={tag.label} className="fid-tag">{tag.label}</span>
                ))}
              </div>
            </div>

            <div className="fid-route-img">
              <div className={`fid-route-img-inner ${t.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Secretos */}
      <div className="fid-secretos-wrap">
        <h3>Los 6 secretos de la fideuà perfecta</h3>
        <div className="fid-secretos-grid">
          {secretos.map((s, i) => (
            <div className="fid-secreto-item" key={s.titulo}>
              <span className="fid-secreto-num">0{i + 1}</span>
              <div>
                <div className="fid-secreto-titulo">{s.titulo}</div>
                <div className="fid-secreto-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Restaurantes */}
      <div className="fid-rest-wrap">
        <h3>Dónde comer fideuà en Valencia</h3>
        <div className="fid-rest-grid">
          {restaurantes.map(r => (
            <div className="fid-rest-card" key={r.nombre}>
              <div className="fid-rest-header">
                <span className="fid-rest-nombre">{r.nombre}</span>
                <span className="fid-rest-nota">{r.nota}</span>
              </div>
              <div className="fid-rest-meta">
                <span className="fid-rest-barrio">{r.barrio}</span>
                <span className="fid-rest-precio">{r.precio}</span>
              </div>
              <div className="fid-rest-especialidad">{r.especialidad}</div>
              <p className="fid-rest-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="fid-info-box">
        <h3>Lo que debes saber antes de pedir fideuà en Valencia</h3>
        <ul className="fid-info-list">
          <li>El <strong>alioli artesano</strong> no es opcional: es parte integral del plato — pídelo siempre y mézclalo en cada bocado a tu gusto</li>
          <li>La <strong>fideuà auténtica</strong> lleva fumet casero de morralla — desconfía si el caldo sabe a sobre de sobres</li>
          <li>El fideo <strong>nº3 o nº4</strong> es el correcto: ni demasiado fino (se deshace) ni demasiado grueso (no absorbe el fumet)</li>
          <li>Como la paella, la fideuà es <strong>plato de mediodía</strong> — los valencianos no cenan fideuà; es plato de sol y compartir</li>
          <li>El <strong>socarrat</strong> también existe en la fideuà — el fondo ligeramente tostado es igual de deseable que en la paella</li>
          <li>El <strong>Concurso Internacional de Fideuà de Gandia</strong> se celebra anualmente — si visitas la costa valenciana en verano, no te lo pierdas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}