import '../../assets/cssSostenible/ViajeResponsable.css';
import Footer from '../../FOOTER/Footer';

var compromisos = [
  {
    num: '01',
    area: 'Agua y energía',
    color: 'azul',
    titular: 'Usa el agua y la energía con responsabilidad',
    desc: 'En tu alojamiento, no cambies las toallas cada día si no es necesario. Evita los baños largos. Apaga el aire acondicionado cuando salgas de la habitación. En Valencia, el agua del grifo es completamente potable: no necesitas comprar agua embotellada. Las fuentes PUSDAR repartidas por toda la ciudad ofrecen agua filtrada y refrigerada de forma gratuita.',
    acciones: [
      'Reutiliza las toallas durante varios días',
      'El agua del grifo en Valencia es potable · Úsala',
      'Rellena tu botella en las +50 fuentes PUSDAR gratuitas',
      'Apaga luces y climatización al salir del alojamiento',
    ],
  },
  {
    num: '02',
    area: 'Residuos y plástico',
    color: 'verde',
    titular: 'Minimiza los residuos y elimina el plástico',
    desc: 'Lleva siempre una bolsa reutilizable para las compras en mercados y tiendas. Evita las botellas de plástico de un solo uso aprovechando las fuentes de agua filtrada de la ciudad. En Valencia encontrarás contenedores de reciclaje bien diferenciados con los colores habituales en cada calle y plaza. El aceite de cocina usado tiene contenedores específicos repartidos por toda la ciudad.',
    acciones: [
      'Bolsa de tela para compras en mercados y tiendas',
      'Botella reutilizable en lugar de plástico de un solo uso',
      'Recicla en los contenedores de colores de cada calle',
      'El aceite usado tiene contenedores de reciclaje propios',
    ],
  },
  {
    num: '03',
    area: 'Movilidad',
    color: 'verde',
    titular: 'Muévete sin coche: a pie, en bici o en transporte público',
    desc: 'Valencia es completamente llana, con más de 160 km de carril bici y un centro histórico mayoritariamente peatonal. El sistema Valenbisi tiene 276 estaciones con 2.750 bicicletas disponibles las 24 horas. La red de autobuses EMT, el metro y el tranvía conectan todos los puntos de interés. La Tourist Card incluye transporte ilimitado desde 15,30 € y es la opción más inteligente para una estancia de 2-3 días.',
    acciones: [
      'El centro histórico es peatonal: no necesitas coche',
      'Valenbisi: 276 estaciones · 30 min gratis por trayecto',
      'Tourist Card: transporte ilimitado desde 15,30 €',
      'Metro L3/L5 desde el aeropuerto: 25 min y 1,50 €',
    ],
  },
  {
    num: '04',
    area: 'Gastronomía local',
    color: 'naranja',
    titular: 'Consume gastronomía autóctona y de proximidad',
    desc: 'La gastronomía valenciana está construida sobre la huerta propia y el Mediterráneo como despensa directa. Comer en restaurantes que trabajan con producto de temporada y de kilómetro 0 es la forma más sabrosa y sostenible de conocer la ciudad. Los mercados municipales son el mejor lugar para comprar alimento fresco sin packaging industrial. Busca el arroz DO Valencia, el vino de Utiel-Requena y la horchata de Alboraya.',
    acciones: [
      'Menú del día en restaurantes de barrio: 10-15 € con todo',
      'Mercados municipales: producto fresco sin plástico',
      'Vino DO Valencia y DO Utiel-Requena: calidad local',
      'Paella valenciana en El Palmar: la más auténtica y km 0',
    ],
  },
  {
    num: '05',
    area: 'Comercio local',
    color: 'naranja',
    titular: 'Compra en el pequeño comercio y artesanía local',
    desc: 'Cada euro gastado en una tienda local, un mercado municipal o un artesano valenciano tiene un impacto económico en la ciudad varias veces mayor que el mismo euro gastado en una gran franquicia. La cerámica de Manises, los abanicos artesanos, la seda pintada a mano de Ensedarte o los productos de la huerta son recuerdos auténticos con historia. El Barrio del Carmen, el Mercado Central y la Plaza Redonda son los mejores puntos de compra responsable.',
    acciones: [
      'Cerámica de Manises y Paterna: tradición de 800 años',
      'Abanicos artesanos en el centro histórico',
      'Mercado Central: productos de la huerta directamente',
      'Evita los recuerdos fabricados fuera de España',
    ],
  },
  {
    num: '06',
    area: 'Naturaleza',
    color: 'verde',
    titular: 'Disfruta de los espacios naturales con respeto',
    desc: 'El Parque Natural de la Albufera, las playas del Saler y la Devesa, y los parques naturales del interior de la provincia son ecosistemas frágiles que requieren un comportamiento consciente. No acceder a zonas restringidas, mantenerse en los senderos señalizados, no molestar a la fauna y no abandonar residuos son las normas básicas del ecoturismo responsable. Para llegar a estos espacios, usa el autobús o la bicicleta, no el coche.',
    acciones: [
      'Mantente en los senderos señalizados en parques naturales',
      'No abandones residuos en playas naturales ni dunas',
      'Observa las aves desde los observatorios sin acercarte',
      'Bus 24 o 25 a la Albufera: gratis con Tourist Card',
    ],
  },
  {
    num: '07',
    area: 'Fauna marina',
    color: 'azul',
    titular: 'Protege la fauna marina del Mediterráneo',
    desc: 'El Mediterráneo que baña Valencia es el hogar de la tortuga boba (Caretta caretta), el delfín mular, la posidonia oceánica y otras especies protegidas. Si en la playa o en el mar encuentras una tortuga boba u otra especie que parece necesitar ayuda, lo más eficaz es llamar al 112 para activar la Red de Varamientos. No toques ni manipules el animal: los expertos sabrán cómo ayudarle mejor.',
    acciones: [
      'Si encuentras una tortuga herida en la playa: llama al 112',
      'No fondees en los bosques de posidonia oceánica',
      'No alimentes ni manipules la fauna marina silvestre',
      'Usa cremas solares libres de oxibenzona y octinoxato',
    ],
  },
  {
    num: '08',
    area: 'Cultura y convivencia',
    color: 'azul',
    titular: 'Respeta la cultura local y el descanso de los vecinos',
    desc: 'Los valencianos tienen sus propios horarios, costumbres y espacios. El descanso nocturno empieza pronto en los barrios residenciales: evita el ruido a partir de las 22 h en zonas no destinadas al ocio. Respeta los espacios sagrados y los rituales de las fiestas. Aprende algunas palabras en valenciano y en castellano: la actitud y el esfuerzo son siempre bienvenidos. Los mercados, los parques y el transporte público son espacios compartidos con los residentes.',
    acciones: [
      'Evita el ruido en zonas residenciales después de las 22 h',
      'Respeta los rituales y espacios de las fiestas locales',
      'Los mercados son espacios de los vecinos, no solo turísticos',
      'Aprende: "gràcies" y "bon dia" abren muchas puertas',
    ],
  },
  {
    num: '09',
    area: 'Sin papel',
    color: 'verde',
    titular: 'Prescinde del papel y viaja en digital',
    desc: 'Visit Valencia pone a disposición de todos los viajeros ediciones online y descargables de todas sus guías, mapas y planos turísticos, sin necesidad de imprimir nada. Descarga los mapas en tu móvil antes de llegar para usarlos sin conexión. Guarda las entradas en digital. Usa las apps de transporte en lugar de los billetes físicos. Cada pequeña decisión sin papel suma.',
    acciones: [
      'Guías y mapas de Valencia descargables en visitvalencia.com',
      'Entradas a museos y atracciones en formato digital',
      'Apps EMT y Valenbisi: sin ticket físico',
      '+400 puntos WiFi gratuitos para conectarte sin datos',
    ],
  },
];


export default function ViajeResponsable() {
  return (
    <div className="vr-page">

      {/* Hero */}
      <div className="vr-hero">
        <div className="vr-hero-overlay" />
        <div className="vr-hero-content">
          <div className="vr-eyebrow">Valencia · Turismo responsable · Compromisos del viajero</div>
          <h1>Viaje<br />responsable</h1>
          <p>Ser un turista responsable en Valencia no requiere esfuerzo: son pequeñas decisiones cotidianas que suman. Aquí están los compromisos que puedes adoptar durante tu estancia para dejar una huella positiva.</p>
        </div>
        <div className="vr-hero-cita">
          <blockquote>
            "Mucha gente pequeña, en pequeños lugares, haciendo cosas pequeñas, puede cambiar el mundo."
            <cite>Eduardo Galeano</cite>
          </blockquote>
        </div>
      </div>

      {/* Intro */}
      <div className="vr-intro">
        <p>Si te mueves de forma sostenible, consumes con consciencia y practicas el turismo responsable, ya estás contribuyendo activamente a la conservación de Valencia para las generaciones que vendrán. Estos nueve compromisos no te supondrán ningún esfuerzo, pero tendrán un impacto real en la ciudad, su naturaleza y sus vecinos.</p>
      </div>

      {/* Compromisos detallados */}
      <div className="vr-section-header">
        <h2>Los 9 compromisos en detalle</h2>
        <p>Cada compromiso explicado con acciones concretas que puedes tomar durante tu estancia.</p>
      </div>

      <div className="vr-compromisos">
        {compromisos.map(c => (
          <div className={`vr-compromiso-item vr-color-${c.color}`} key={c.num}>

            <div className="vr-compromiso-left">
              <div className="vr-compromiso-num">{c.num}</div>
              <div className="vr-compromiso-icono">{c.icono}</div>
              <div className="vr-compromiso-area">{c.area}</div>
            </div>

            <div className="vr-compromiso-body">
              <h2>{c.titular}</h2>
              <p className="vr-desc">{c.desc}</p>
              <div className="vr-acciones-titulo">Acciones concretas</div>
              <ul className="vr-acciones">
                {c.acciones.map(a => (
                  <li key={a}>
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        ))}
      </div>

      {/* CTA · Teléfono de emergencias fauna */}
      <div className="vr-emergencia-box">
        <div className="vr-emergencia-content">
          <div className="vr-emergencia-titulo">¿Encuentras fauna marina herida en la playa?</div>
          <p className="vr-emergencia-desc">Si ves una tortuga boba u otra especie que necesita ayuda en la costa valenciana, llama al <strong>112</strong> para activar la Red de Varamientos. No toques ni manipules el animal: los expertos sabrán cómo actuar.</p>
        </div>
        <div className="vr-emergencia-num">112</div>
      </div>

      {/* Info box */}
      <div className="vr-info-box">
        <h3>Lo más importante en un solo vistazo</h3>
        <ul className="vr-info-list">
          <li><strong>Agua del grifo</strong> en Valencia: completamente potable y de calidad · Fuentes PUSDAR gratuitas por toda la ciudad</li>
          <li>Muévete en <strong>bici con Valenbisi</strong>: 276 estaciones · Primeros 30 min gratis · Semanal desde 13,30 €</li>
          <li>Recicla: <strong>contenedores de colores</strong> en cada calle · Aceite usado tiene contenedores específicos</li>
          <li>Come en <strong>restaurantes de barrio</strong>: menú del día 10-15 € · Producto de la huerta y el Mediterráneo</li>
          <li>Fauna herida en la costa: <strong>llama al 112</strong> · Red de Varamientos del Mediterráneo</li>
          <li>Guías y mapas <strong>descargables gratis</strong> en visitvalencia.com · Sin papel, sin impresión</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}