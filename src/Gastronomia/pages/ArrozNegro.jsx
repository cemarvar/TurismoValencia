import '../assets/css/ArrozNegro.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'Arròs Negre · El Arroz del Mar Oscuro',
    subtitulo: 'Tinta de calamar o sepia · Color negro intenso · Sabor marino profundo',
    desc: 'El arroz negro —arròs negre en valenciano— es uno de los arroces más espectaculares y sorprendentes de la cocina mediterránea. Su color negro intenso no viene de ningún ingrediente exótico, sino de la tinta natural del calamar o la sepia: un líquido que los cefalópodos usan para escapar de sus depredadores y que, en la cocina, da al arroz un color único y un sabor marino concentrado, yodado y profundo. Es un arroz seco tipo paella, cocinado en el mismo recipiente y con la misma técnica, pero con una identidad visual y gustativa completamente diferente. Nacido en el Mediterráneo, su paternidad se la disputan los pescadores de Valencia, Castellón, Alicante, Tarragona y la Costa Brava —lo que dice mucho de su arraigo en toda la costa levantina.',
    dato: 'Arroz seco tipo paella · Cocinado en paella plana · Siempre servido con alioli · Sepia como ingrediente estrella',
    imgClass: 'img-arros',
    tags: [{ label: 'Arròs negre' }, { label: 'Tinta de sepia' }, { label: 'Mediterráneo' }],
  },
  {
    num: '02',
    nombre: 'La Tinta · El Ingrediente que lo Cambia Todo',
    subtitulo: 'Tinta de sepia o calamar · Sabor marino concentrado · Color y aroma únicos',
    desc: 'La tinta es el alma del arroz negro. Se sabe que ya en el siglo XVII se utilizaba la tinta de calamar para dar sabor y color a los platos de los pescadores mediterráneos. En el arroz negro, la tinta se añade diluida en el fumet caliente antes de incorporarlo al sofrito, tiñendo cada grano de arroz de negro y aportando un sabor marino único. La sepia es el cefalópodo preferido para este plato —más sabrosa que el calamar—, y se puede usar tanto la tinta natural de la sepia fresca como las bolsitas de tinta que se venden en la sección de congelados del supermercado. La tinta de la sepia fresca se extrae de la bolsa con cuidado, se mezcla con un poco de caldo y se incorpora. El resultado: un arroz completamente negro por fuera pero con el grano perfectamente cocido y lleno de sabor marino por dentro.',
    dato: 'Tinta natural de sepia fresca o bolsitas congeladas (4–5 g/bolsa) · Se diluye siempre en el fumet antes de añadir',
    imgClass: 'img-tinta',
    tags: [{ label: 'S. XVII documentado' }, { label: 'Sepia > calamar' }, { label: 'Tinta natural' }],
  },
  {
    num: '03',
    nombre: 'El Sofrito y el Fumet · Las Dos Bases del Plato',
    subtitulo: 'Sofrito de cebolla, ajo y tomate · Fumet de morralla o cabezas de gamba · La diferencia se nota',
    desc: 'Como ocurre con todos los grandes arroces valencianos, el secreto del arroz negro está en el sofrito y en el fumet. El sofrito se prepara pochando cebolla muy picada a fuego lento —con paciencia, hasta que esté transparente y dulce—, añadiendo ajo, pimentón dulce y tomate rallado. La sepia se marca primero a fuego fuerte, se retira y se añade al sofrito. El fumet debe ser concentrado y sabroso: se elabora con cabezas de gambas, espinas de pescado blanco o morralla (peces de roca pequeños), y es el que aporta la profundidad marina que el arroz negro necesita. Una vez listo el sofrito, se añade el arroz, se rehoga brevemente, y se incorpora el fumet caliente con la tinta diluida. El tiempo de cocción es el mismo que la paella: 10 minutos a fuego fuerte y 8–10 a fuego medio-bajo.',
    dato: 'Fumet: siempre caliente antes de añadir · Proporción: 2–2,5 partes de fumet por 1 de arroz · Fuego fuerte al inicio',
    imgClass: 'img-sofrito',
    tags: [{ label: 'Sofrito con paciencia' }, { label: 'Fumet de morralla' }, { label: '10+10 min' }],
  },
  {
    num: '04',
    nombre: 'El Alioli · El Acompañamiento Imprescindible',
    subtitulo: 'Emulsión de ajo y aceite · El contraste blanco y negro · El toque final',
    desc: 'El arroz negro se sirve siempre con alioli. El contraste visual —el arroz completamente negro con una cucharada de alioli blanco y cremoso encima— es uno de los momentos más bonitos de la cocina valenciana. Pero es el contraste de sabor el que convierte el arroz negro con alioli en un plato extraordinario: la intensidad marina del arroz negro, el toque amargo y potente del ajo, la suavidad del aceite. El alioli valenciano auténtico —ajo, aceite y sal, emulsionado a mano en el mortero— es el ideal. La versión con huevo o leche es más fácil y también funciona. En la Comunidad Valenciana, el alioli es también el acompañamiento del arroz a banda, la fideuà y otras preparaciones marineras. Los iberos de la región ya lo consumían antes de la llegada de los romanos.',
    dato: 'Alioli auténtico: ajo + aceite + sal · Emulsionado en mortero · La versión con huevo es más fácil pero diferente',
    imgClass: 'img-alioli',
    tags: [{ label: 'Alioli obligatorio' }, { label: 'Contraste blanco/negro' }, { label: 'Tradición ibérica' }],
  },
  {
    num: '05',
    nombre: 'Variantes · Del Clásico al Contemporáneo',
    subtitulo: 'Con bogavante · Con chipirones · En cazuela de barro al horno · Fideuà negra',
    desc: 'La receta base —sepia, gambas, tinta y fumet— es la más extendida y auténtica, pero el arroz negro admite variantes notables. La versión con bogavante es la más festiva y generosa, habitual en restaurantes de referencia. La elaborada con chipirones frescos pequeños da una textura más delicada. En algunos restaurantes se gratina brevemente en el horno para crear una costra en la superficie. La fideuà negra —con fideos en lugar de arroz y tinta de calamar— es la variante que primero popularizó el restaurante Puerta del Mar en Valencia, haciéndose viral en redes sociales. En Castellón existe también la variante con arroz negro en cazuela de barro al estilo del arroz al horno, que combina la técnica y los sabores de ambas tradiciones.',
    dato: 'Variante más festiva: con bogavante · Variante viral: fideuà negra · Con chipirones: más delicada · Al horno: también existe',
    imgClass: 'img-variantes',
    tags: [{ label: 'Con bogavante' }, { label: 'Fideuà negra' }, { label: 'Chipirones' }],
  },
];

var ingredientes = [
  { nombre: 'Arroz bomba DO Valencia', icono: '🌾', desc: 'Grano redondo · Absorbe hasta el doble · No se rompe ni se pasa' },
  { nombre: 'Sepia fresca', icono: '🦑', desc: 'El cefalópodo principal · Más sabrosa que el calamar · La tinta viene incluida' },
  { nombre: 'Tinta de sepia', icono: '⚫', desc: 'Natural de la sepia o bolsitas congeladas · Da el color y el sabor marino único' },
  { nombre: 'Gambas o langostinos', icono: '🦐', desc: 'Cabezas para el fumet · Cuerpos en el arroz al final de la cocción' },
  { nombre: 'Fumet de morralla', icono: '🍲', desc: 'Caldo de peces de roca y cabezas de gamba · Siempre caliente al añadir' },
  { nombre: 'Sofrito de ajo y cebolla', icono: '🧅', desc: 'Cebolla pochada muy despacio + ajo + tomate rallado + pimentón dulce' },
  { nombre: 'Aceite de oliva virgen extra', icono: '🫒', desc: 'Para el sofrito y para el alioli de acompañamiento' },
  { nombre: 'Alioli', icono: '🤍', desc: 'Imprescindible · Ajo + aceite + sal · El contraste blanco y negro del plato' },
];

var secretos = [
  { clave: 'Sepia, no calamar', desc: 'La sepia es más sabrosa y la tinta más concentrada — el resultado es más redondo' },
  { clave: 'Fumet siempre caliente', desc: 'El caldo frío rompe la cocción del arroz — mantenlo hirviendo antes de añadir' },
  { clave: 'Sofrito con paciencia', desc: 'La cebolla debe pocharse muy despacio hasta quedar transparente y casi caramelizada' },
  { clave: 'Tinta diluida en fumet', desc: 'Nunca añadir la tinta directamente — diluirla en el fumet caliente antes de incorporar' },
  { clave: 'Sin tocar el arroz', desc: 'Como en la paella, una vez repartido el arroz no se remueve — el grano debe quedar suelto' },
  { clave: 'Reposo 5 minutos', desc: 'Apagar el fuego y dejar reposar tapado antes de servir con el alioli al lado' },
];

export default function ArrozNegro() {
  return (
    <div className="an-page">

      {/* Hero */}
      <div className="an-hero">
        <div className="an-hero-overlay" />
        <div className="an-hero-content">
          <div className="an-eyebrow">Gastronomía · Arròs Negre · El arroz más misterioso de Valencia</div>
          <h1>Arroz Negro<br />Valenciano</h1>
          <p>Negro como el mar de noche. La tinta de la sepia tiñe cada grano de arroz y concentra el sabor del Mediterráneo en un plato que sorprende tanto por el aspecto como por su intensidad. Con alioli, siempre.</p>
        </div>
        <div className="an-hero-stats">
          <div className="an-stat">
            <span className="an-stat-num">S. XVII</span>
            <span className="an-stat-label">documentado</span>
          </div>
          <div className="an-stat-sep" />
          <div className="an-stat">
            <span className="an-stat-num">Negro</span>
            <span className="an-stat-label">tinta de sepia</span>
          </div>
          <div className="an-stat-sep" />
          <div className="an-stat">
            <span className="an-stat-num">+Alioli</span>
            <span className="an-stat-label">siempre</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="an-historia-box">
        <div className="an-historia-icono">🦑</div>
        <div className="an-historia-content">
          <div className="an-historia-titulo">Nacido entre pescadores · El color que viene del mar</div>
          <p>El arroz negro tiene su origen en las cocinas de los pescadores mediterráneos. Desde el siglo XVII hay constancia del uso de la tinta de calamar para dar sabor y color a los platos de pescado en la costa levantina. Los pescadores cocinaban el arroz con los cefalópodos frescos del día —sepia, calamar, chipirón— y el caldo de morralla (peces de roca pequeños) que había sobrado de la pesca. La tinta, que la sepia lanza para escapar de sus depredadores, pasó de ser un elemento incómodo a convertirse en el ingrediente definitorio de un plato único. En Venecia también existe el <strong>riso al nero di sepia</strong>, lo que habla de la conectividad gastronómica del Mediterráneo. Hoy el arroz negro se elabora en toda la costa valenciana —Valencia, Castellón, Alicante— y cada cocinero defiende su versión con el mismo entusiasmo con el que los valencianos defienden la paella.</p>
        </div>
      </div>

      {/* Ingredientes */}
      <div className="an-ingredientes-wrap">
        <div className="an-ingredientes-titulo">Los ingredientes del arròs negre</div>
        <div className="an-ingredientes-grid">
          {ingredientes.map(i => (
            <div className="an-ing-card" key={i.nombre}>
              <span className="an-ing-icono">{i.icono}</span>
              <div className="an-ing-nombre">{i.nombre}</div>
              <div className="an-ing-desc">{i.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Intro */}
      <div className="an-intro">
        <p>El arroz negro es el arroz más dramático de Valencia. No el más complicado —la técnica es exactamente la misma que la paella de marisco— sino el más sorprendente para el comensal que lo ve por primera vez. Un arroz completamente negro en el plato, humeante, con el aroma concentrado del mar, y encima una cucharada de alioli blanco y cremoso. El contraste visual es implacable.</p>
        <p>La clave que separa un arroz negro mediocre de uno excepcional son dos cosas: el <strong>fumet casero</strong> —elaborado con las cabezas y cáscaras de las gambas, espinas de pescado y morralla— y la <strong>paciencia del sofrito</strong>. Si el caldo es pobre, el arroz negro es un arroz teñido de negro. Si el fumet es rico, el arroz negro es una experiencia marina completa.</p>
      </div>

      {/* Section title */}
      <div className="an-section-title">
        <h2>Todo sobre el arroz negro valenciano</h2>
        <p>Del origen del plato a la técnica, la tinta, el alioli y las variantes contemporáneas.</p>
      </div>

      {/* Secciones */}
      <div className="an-routes">
        {secciones.map(s => (
          <div className="an-route-item" key={s.num}>
            <div className="an-route-num">{s.num}</div>

            <div className="an-route-text">
              <h2>{s.nombre}</h2>
              <div className="an-subtitulo">{s.subtitulo}</div>
              <p className="an-desc">{s.desc}</p>

              <div className="an-dato-box">
                <span className="an-dato-icon">⚫</span>
                <span>{s.dato}</span>
              </div>

              <div className="an-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="an-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="an-route-img">
              <div className={`an-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Secretos */}
      <div className="an-secretos-wrap">
        <h3>Los 6 secretos del arroz negro perfecto</h3>
        <div className="an-secretos-grid">
          {secretos.map((s, i) => (
            <div className="an-secreto-item" key={s.clave}>
              <span className="an-secreto-num">0{i + 1}</span>
              <div>
                <div className="an-secreto-titulo">{s.clave}</div>
                <div className="an-secreto-desc">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="an-info-box">
        <h3>Lo que debes saber del arroz negro</h3>
        <ul className="an-info-list">
          <li>El <strong>arroz negro auténtico</strong> lleva sepia, no pollo — es un arroz marinero, no tiene nada que ver con la paella valenciana</li>
          <li>El <strong>alioli es obligatorio</strong> — sin él, el plato está incompleto. El contraste negro/blanco es parte de la experiencia</li>
          <li>El color negro viene de la <strong>tinta de sepia o calamar</strong> — el arroz en sí es blanco, se tiñe durante la cocción con el fumet y la tinta</li>
          <li><strong>No se le añaden verduras</strong> — ni pimiento verde ni judías ni espárragos. Es un arroz de mar, puro y directo</li>
          <li>La <strong>sepia es mejor que el calamar</strong> para este plato — su tinta es más concentrada y la carne más tierna y sabrosa</li>
          <li>Es un plato de <strong>mediodía</strong> — como todos los arroces valencianos. Se hace fresco y se come recién hecho</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}