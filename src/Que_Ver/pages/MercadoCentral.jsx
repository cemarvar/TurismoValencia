import '../assets/css/MercadoCentral.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var elementos = [
  {
    num: '01',
    nombre: 'La Cúpula y la Arquitectura Modernista',
    tipo: 'Bien de Interés Cultural · Modernismo valenciano',
    subtitulo: 'Hierro forjado · Azulejos · Vidrieras · Cúpula de 30 m',
    desc: 'El edificio del Mercado Central es una de las construcciones más espectaculares y visitadas de Valencia. Proyectado por los arquitectos Alejandro Soler March y Francisco Guardia Vial —formados en la Escuela de Arquitectura de Barcelona y colaboradores de Lluís Domènech i Montaner—, fue construido entre 1914 y 1928. Su arquitectura modernista es un homenaje al potencial agrícola de la huerta valenciana. La cúpula central de hierro, cristal y cerámica alcanza los 30 metros de altura y está coronada por la famosa veleta de la cotorra, símbolo del bullicio del mercado. Las vidrieras policromas bañan de luz mágica el interior creando uno de los ambientes más fotografiados de Valencia.',
    datos: [
      { d: 'Arquitectos', v: 'Alejandro Soler March y Francisco Guardia Vial · Escuela de Barcelona' },
      { d: 'Construcción', v: '1914–1928 · Inaugurado el 23 de enero de 1928 por Alfonso XIII' },
      { d: 'Cúpula central', v: '30 metros de altura · Hierro, cristal y cerámica · Coronada por la cotorra' },
      { d: 'Declaración', v: 'Bien de Interés Cultural · El mayor mercado modernista de Europa' },
    ],
    imgClass: 'img-cupulamc',
  },
  {
    num: '02',
    nombre: 'Más de 250 Puestos de Productos Frescos',
    tipo: 'Gastronomía · Producto de proximidad',
    subtitulo: '8.000 m² · Productos de la Huerta valenciana y el Mediterráneo',
    desc: 'Con más de 250 puestos activos distribuidos en 8.000 m², el Mercado Central es el mayor mercado de productos frescos de Europa. Los colores y aromas de sus paradas recorren todas las secciones: aves, carnicería, charcutería, especias, frutas, frutos secos, gourmet, panadería y pastelería, pescados y mariscos, salazones y encurtidos, y productos internacionales. El producto de proximidad domina los mostradores: la huerta valenciana, el mar Mediterráneo y los productores locales son los grandes protagonistas. Muchos puestos ofrecen productos con Denominación de Origen de la Comunitat Valenciana.',
    datos: [
      { d: 'Superficie', v: '8.000 m² · Más de 250 puestos activos' },
      { d: 'Secciones', v: 'Aves, carnicería, charcutería, especias, frutas, frutos secos, panadería, pescados, salazones, gourmet' },
      { d: 'Producto', v: 'De proximidad · Huerta valenciana · Denominaciones de Origen locales' },
      { d: 'Horario compra', v: 'Lunes a sábado 7:30–15:00 h · Cerrado domingos y festivos' },
    ],
    imgClass: 'img-puestosmc',
  },
  {
    num: '03',
    nombre: 'Central Bar · Ricard Camarena',
    tipo: 'Gastronomía de autor · Dentro del Mercado',
    subtitulo: 'El restaurante del chef con estrella Michelin en el corazón del mercado',
    desc: 'El Central Bar es la propuesta gastronómica más reconocida dentro del Mercado Central, a cargo del chef valenciano Ricard Camarena, uno de los cocineros más reconocidos de España y con estrella Michelin. El concepto combina la tradición del bar de mercado con la cocina de autor: tapas, raciones y bocadillos con ingredientes comprados directamente a los vendedores del mercado, elaborados en el momento. El espacio ocupa un rincón estratégico del edificio y tiene terraza interior bajo las vidrieras. Es imprescindible para el esmorzaret valenciano o para un almuerzo de calidad después de pasear por los puestos.',
    datos: [
      { d: 'Chef', v: 'Ricard Camarena · Estrella Michelin · Cocinero del año' },
      { d: 'Concepto', v: 'Bar de mercado con cocina de autor · Tapas, raciones y bocadillos' },
      { d: 'Ingredientes', v: 'Comprados directamente a los vendedores del propio mercado' },
      { d: 'Recomendación', v: 'Ideal para el esmorzaret (desayuno valenciano) o un almuerzo ligero' },
    ],
    imgClass: 'img-centralbarmc',
  },
  {
    num: '04',
    nombre: 'Productos Típicos Valencianos para Llevar',
    tipo: 'Compras y recuerdos gastronómicos',
    subtitulo: 'Arroz valenciano · Chufas · Azafrán · Turrón · Vinos DO · Horchata',
    desc: 'El Mercado Central es el mejor lugar de Valencia para llevarse a casa los auténticos sabores de la ciudad. El arroz valenciano se vende en sus tres variedades de Denominación de Origen: Senia, Bomba y Albufera. Las chufas de Valencia —con DO propia— son el ingrediente de la horchata, bebida árabe popularizada en la ciudad. El azafrán, las especias, el turrón artesanal, los salazones envasados al vacío, el jamón serrano, las olivas y los vinos DO Valencia completan el escaparate. También encontrarás cerámica valenciana y paellas —el recipiente— de todos los tamaños entre los souvenirs más auténticos.',
    datos: [
      { d: 'Arroces DO', v: 'Senia, Bomba y Albufera · Las tres variedades de arroz valenciano' },
      { d: 'Chufa de Valencia', v: 'Denominación de Origen · Ingrediente de la horchata tradicional' },
      { d: 'Souvenirs gastronómicos', v: 'Azafrán, turrón, salazones, jamón, olivas, vinos DO Valencia' },
      { d: 'Bebidas', v: 'Horchata, Agua de Valencia, Mistela y vinos de la Comunitat' },
    ],
    imgClass: 'img-productosmc',
  },
  {
    num: '05',
    nombre: 'Entorno · Lonja de la Seda e Iglesia de los Santos Juanes',
    tipo: 'Patrimonio · Centro histórico de Valencia',
    subtitulo: 'Plaza del Mercado · Tres monumentos frente a frente',
    desc: 'La ubicación del Mercado Central en la Plaza del Mercado crea uno de los conjuntos monumentales más singulares de la ciudad: frente a frente con la Lonja de la Seda —Patrimonio de la Humanidad— y flanqueado por la Iglesia de los Santos Juanes, de fachada barroca. Los tres edificios conviven en una misma plaza desde hace siglos y crean un escenario arquitectónico único en el que el modernismo del mercado dialoga con el gótico civil del siglo XV y el barroco del XVII. Desde la Plaza del Mercado también se accede fácilmente al Barrio del Carmen y al Barrio de Ruzafa.',
    datos: [
      { d: 'Frente al mercado', v: 'Lonja de la Seda · Patrimonio de la Humanidad (UNESCO, 1996)' },
      { d: 'Al lado', v: 'Iglesia de los Santos Juanes · Fachada barroca del siglo XVII' },
      { d: 'Barrios cercanos', v: 'Barrio del Carmen (5 min a pie) · Barrio de Ruzafa (10 min)' },
      { d: 'Acceso', v: 'Metro L1/L2 parada Xàtiva · Bus líneas 5, 7, 8, 27, 60, 70, 71, 81' },
    ],
    imgClass: 'img-entornomc',
  },
];


var datosVisita = [
  { label: 'Dirección', val: 'Plaza del Mercado, s/n · 46001 Valencia · Centro histórico' },
  { label: 'Horario', val: 'Lunes a sábado 7:30–15:00 h · Cerrado domingos y festivos' },
  { label: 'Entrada', val: 'Acceso libre y gratuito · No requiere entrada' },
  { label: 'Superficie', val: '8.000 m² · Más de 250 puestos activos' },
  { label: 'Construcción', val: '1914–1928 · Arquitectos Soler March y Guardia Vial' },
  { label: 'Central Bar', val: 'Dentro del mercado · Chef Ricard Camarena · Abre de 7:30 a 15:00 h' },
  { label: 'Junto al mercado', val: 'Lonja de la Seda (UNESCO) y la Iglesia de los Santos Juanes · misma plaza' },
  { label: 'Mejor momento', val: 'Entre semana por la mañana · Menos concurrido que los fines de semana' },
];

export default function MercadoCentral() {
  return (
    <div className="mc-page">

      {/* Hero */}
      <div className="mc-hero">
        <div className="mc-hero-overlay" />
        <div className="mc-hero-content">
          <div className="mc-eyebrow">Centro histórico · Bien de Interés Cultural · Lun–Sáb 7:30–15:00 h</div>
          <h1>Mercado Central<br />de Valencia</h1>
          <p>El mayor mercado de productos frescos de Europa. Una catedral modernista de hierro, vidrieras y azulejos donde los aromas de la huerta y del Mediterráneo llenan cada rincón desde 1928.</p>
        </div>
        <div className="mc-hero-stats">
          <div className="mc-stat">
            <span className="mc-stat-num">8.000 m²</span>
            <span className="mc-stat-label">de superficie</span>
          </div>
          <div className="mc-stat-sep" />
          <div className="mc-stat">
            <span className="mc-stat-num">+250</span>
            <span className="mc-stat-label">puestos frescos</span>
          </div>
          <div className="mc-stat-sep" />
          <div className="mc-stat">
            <span className="mc-stat-num">1928</span>
            <span className="mc-stat-label">inauguración</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="mc-intro">
        <p>En el mismo espacio donde se celebraron mercados ambulantes desde la primera expansión medieval de la ciudad, el Mercado Central de Valencia lleva funcionando de forma ininterrumpida desde su inauguración el 23 de enero de 1928. Su arquitectura modernista —proyectada para 959 puestos— fue concebida como un homenaje al potencial agrícola de la huerta valenciana, y hoy es considerada la "catedral de los sentidos": la luz que entra por las vidrieras, el susurro permanente y la explosión de colores y aromas hacen de cada visita una experiencia única.</p>
        <p>La entrada al mercado es <strong>completamente gratuita</strong>. Abre de lunes a sábado de 7:30 a 15:00 h y cierra los domingos y festivos. Para vivirlo en plenitud, llega entre semana a primera hora de la mañana.</p>
      </div>

      {/* Elementos principales */}
      <div className="mc-section-title">
        <h2>Qué ver y hacer en el Mercado Central</h2>
        <p>Cinco razones para visitar el mercado más espectacular de España.</p>
      </div>

      <div className="mc-routes">
        {elementos.map(el => (
          <div className="mc-route-item" key={el.num}>
            <div className="mc-route-num">{el.num}</div>

            <div className="mc-route-text">
              <div className="mc-tipo">{el.tipo}</div>
              <h2>{el.nombre}</h2>
              <div className="mc-subtitulo">{el.subtitulo}</div>
              <p className="mc-desc">{el.desc}</p>

              <div className="mc-datos-titulo">Datos clave</div>
              <ul className="mc-datos">
                {el.datos.map(d => (
                  <li key={d.d}>
                    <span className="mc-dato-label">{d.d}:</span>
                    <span className="mc-dato-val"> {d.v}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mc-route-img">
              <div className={`mc-route-img-inner ${el.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla información práctica */}
      <div className="mc-info-practica">
        <h3>Información práctica · Mercado Central de Valencia</h3>
        <div className="mc-tabla">
          {datosVisita.map(d => (
            <div className="mc-tabla-fila" key={d.label}>
              <div className="mc-tabla-label">{d.label}</div>
              <div className="mc-tabla-val">{d.val}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="mc-info-box">
        <h3>Consejos para visitar el Mercado Central</h3>
        <ul className="mc-info-list">
          <li>El mercado <strong>cierra los domingos y festivos</strong> — comprueba el horario antes de ir</li>
          <li>Entre semana a las <strong>8:00 o 9:00 h</strong> es cuando más variedad hay y menos gente</li>
          <li>El <strong>Central Bar de Ricard Camarena</strong> se llena rápido: llega pronto si quieres sitio para el esmorzaret</li>
          <li>Los <strong>arroces DO Valenciana</strong> (Senia, Bomba y Albufera) son el mejor souvenir gastronómico que puedes llevarte</li>
          <li>La <strong>Lonja de la Seda</strong> está justo enfrente — combina la visita al mercado con la entrada al monumento UNESCO</li>
          <li>Puedes comprar <strong>online o por WhatsApp</strong> a los vendedores del mercado con entrega a domicilio</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}