import '../../assets/cssEntradas/ValenciaCard.css';
import Footer from '../../../Pagina_Inicio/FOOTER/Footer';

var modalidades = [
  {
    num: '01',
    nombre: 'Valencia Tourist Card 24, 48 y 72 horas',
    tipo: 'La más completa · Transporte incluido · Activación en el primer uso',
    subtitulo: 'Transporte gratis · 14 museos y monumentos · Tapa con consumición · Descuentos hasta 50%',
    desc: 'La modalidad estrella de la Valencia Tourist Card. Durante 24, 48 o 72 horas te permite viajar gratis en todos los autobuses urbanos EMT y metropolitanos Metrobus, metro (zonas A y B, con la parada del aeropuerto incluida), tranvía y trenes de cercanías Renfe en la zona AB. Incluye también entrada gratuita a 14 museos y monumentos municipales, descuentos de hasta el 50% en los principales atractivos turísticos —Ciudad de las Artes y las Ciencias, Oceanogràfic, Bioparc, Bus Turístico, 50% de descuento en el Marqués de Dos Aguas, 20% en la Catedral— y una tapa con consumición de regalo. La tarjeta se activa en el primer uso y tiene validez continua desde ese momento. Disponible también en packs de 72 horas combinados con entrada a la CAC, el Oceanogràfic y el Bioparc.',
    incluye: [
      '✔ Transporte: bus EMT, Metrobus, metro (zonas A–B + aeropuerto), tranvía y Renfe cercanías',
      '✔ 14 museos y monumentos municipales — entrada gratuita',
      '✔ Tapa con consumición de regalo',
      '✔ Descuentos hasta 50% en CAC, Oceanogràfic, Bioparc, Bus Turístico y más de 130 servicios',
      '✔ 20% descuento en la Catedral de Valencia',
      '✔ 50% descuento en el Palacio Marqués de Dos Aguas',
      '✗ Entrada a la Catedral: no incluida (solo descuento del 20%)',
      '✗ Entrada al IVAM: no incluida',
    ],
    precio: 'Desde 15,30 € (precio web) · PVP: 17,00 € · 10% dto. exclusivo web',
    duracion: '24 h / 48 h / 72 h desde el primer uso',
    imgClass: 'img-vtcvc',
    tags: [{ label: 'Transporte incluido' }, { label: 'La más completa' }, { label: 'Tapa gratis' }],
    url: 'https://www.visitvalencia.com/shop/valencia-tourist-card/valencia-tourist-card',
  },
  {
    num: '02',
    nombre: 'Valencia Tourist Card 7 días sin transporte',
    tipo: 'Para estancias largas · Sin transporte · Catedral + IVAM incluidos',
    subtitulo: '7 días de descuentos · Catedral gratis · IVAM gratis · 14 museos · Sin caducidad diaria',
    desc: 'La modalidad ideal para quienes se quedan una semana en Valencia y no necesitan el transporte incluido (por ejemplo, si ya tienen bono de metro o se mueven en bicicleta). Incluye entrada gratuita a la Catedral de Valencia y su Museo Catedralicio —donde se custodia el Santo Cáliz—, entrada gratuita al IVAM (Institut Valencià d\'Art Modern, el mejor museo de arte moderno de la comunidad), acceso libre a los 14 museos y monumentos municipales y descuentos de hasta el 50% en los mismos atractivos que la versión de 24–72 h. También existe la opción combinada de 7 días con Bus Turístico de 24 horas incluido.',
    incluye: [
      '✔ Entrada gratuita a la Catedral de Valencia y Museo Catedralicio (Santo Cáliz)',
      '✔ Entrada gratuita al IVAM (Institut Valencià d\'Art Modern)',
      '✔ 14 museos y monumentos municipales — entrada gratuita',
      '✔ Descuentos hasta 50% en CAC, Oceanogràfic, Bioparc, Bus Turístico y más de 130 servicios',
      '✔ 50% descuento en el Palacio Marqués de Dos Aguas',
      '✗ Transporte urbano: no incluido',
      '✗ Tapa con consumición: no incluida',
    ],
    precio: 'Desde 13,50 € (precio web) · PVP: 15,00 € · 10% dto. exclusivo web',
    duracion: '7 días continuos desde el primer uso',
    imgClass: 'img-vtc-7diasvc',
    tags: [{ label: '7 días' }, { label: 'Catedral + IVAM' }, { label: 'Estancias largas' }],
    url: 'https://www.visitvalencia.com/shop/valencia-tourist-card/valencia-discount-card',
  },
];

var packs = [
  {
    nombre: 'VTC 72h + Oceanogràfic + Museo Ciencias + Hemisfèric + Bioparc',
    precio: 'Desde 99,48 € (antes 110,70 €)',
    url: 'https://www.visitvalencia.com/shop/entradas-turisticas/entradas-conjuntas/valencia-tourist-card-72-horas-entrada-oceanografic-museo-ciencias-hemisferic-bioparc',
  },
  {
    nombre: 'VTC 72h + Oceanogràfic + Museo de las Ciencias + Hemisfèric',
    precio: 'Desde 69,98 € (antes 79,80 €)',
    url: 'https://www.visitvalencia.com/shop/entradas-turisticas/entradas-conjuntas/oferta-valencia-card-oceanografic-y-hemisferic',
  },
  {
    nombre: 'VTC 72h + Entrada al Oceanogràfic',
    precio: 'Desde 62,51 € (antes 71,80 €)',
    url: 'https://www.visitvalencia.com/shop/entradas-turisticas/entradas-conjuntas/oferta-oceanografic-y-valencia-card',
  },
  {
    nombre: 'VTC 7 días sin transporte + Bus Turístico 24 horas',
    precio: 'Desde 37,00 €',
    url: 'https://www.visitvalencia.com/shop/entradas-turisticas/entradas-conjuntas/oferta-autobus-turistico-y-valencia-card-7-dias',
  },
];

var faqs = [
  {
    q: '¿Dónde se compra y recoge la Valencia Tourist Card?',
    a: 'Se puede comprar online en visitvalencia.com con un 10% de descuento. También se vende en las Oficinas de Turismo de Valencia (Plaza de la Reina, Estación del Nord, Aeropuerto) y en puntos de recarga de la ciudad. La versión digital se activa directamente en el móvil.',
  },
  {
    q: '¿Cuándo empieza a contar el tiempo de la tarjeta?',
    a: 'La tarjeta se activa en el primer uso —ya sea en transporte o en la entrada a un museo—. A partir de ese momento empieza el período de validez continuo (24, 48, 72 horas o 7 días).',
  },
  {
    q: '¿Incluye el aeropuerto en el transporte?',
    a: 'Sí. La modalidad de 24/48/72 horas incluye la zona AB del metro, que engloba la parada del Aeropuerto de Valencia (L3 y L5). El trayecto aeropuerto-centro está cubierto.',
  },
  {
    q: '¿Cuántas veces se puede usar cada descuento?',
    a: 'El acceso gratuito a los museos y monumentos municipales es una vez por museo. Los descuentos en atracciones turísticas y establecimientos son por persona y visita, según las condiciones de cada atracción.',
  },
  {
    q: '¿Existe tarjeta para grupos?',
    a: 'Sí. Existe la modalidad Valencia Tourist Card para grupos, disponible en visitvalencia.com, con condiciones especiales para grupos organizados y agencias de viaje.',
  },
];

export default function ValenciaCard() {
  return (
    <div className="vtc-page">

      {/* Hero */}
      <div className="vtc-hero">
        <div className="vtc-hero-overlay" />
        <div className="vtc-hero-content">
          <div className="vtc-eyebrow">Entradas · Tarjeta turística oficial de Valencia</div>
          <h1>Valencia<br />Tourist Card</h1>
          <p>La tarjeta que te abre Valencia entera: transporte gratis, 14 museos incluidos, tapa de regalo y descuentos de hasta el 50% en más de 130 servicios turísticos.</p>
        </div>
        <div className="vtc-hero-stats">
          <div className="vtc-stat">
            <span className="vtc-stat-num">14</span>
            <span className="vtc-stat-label">Museos gratis</span>
          </div>
          <div className="vtc-stat-sep" />
          <div className="vtc-stat">
            <span className="vtc-stat-num">50%</span>
            <span className="vtc-stat-label">Descuento máx.</span>
          </div>
          <div className="vtc-stat-sep" />
          <div className="vtc-stat">
            <span className="vtc-stat-num">+130</span>
            <span className="vtc-stat-label">Servicios incluidos</span>
          </div>
        </div>
      </div>

      {/* Section title */}
      <div className="vtc-section-title">
        <h2>Modalidades de la Valencia Tourist Card</h2>
        <p>Elige la opción que mejor se adapte a la duración y el tipo de tu viaje.</p>
      </div>

      {/* Modalidades */}
      <div className="vtc-routes">
        {modalidades.map(mod => (
          <div className="vtc-route-item" key={mod.num}>
            <div className="vtc-route-num">{mod.num}</div>

            <div className="vtc-route-text">
              <div className="vtc-tipo">{mod.tipo}</div>
              <h2>{mod.nombre}</h2>
              <div className="vtc-subtitulo">{mod.subtitulo}</div>
              <p className="vtc-desc">{mod.desc}</p>

              <div className="vtc-datos-titulo">Qué incluye</div>
              <ul className="vtc-incluye">
                {mod.incluye.map((item, i) => (
                  <li key={i} className={item.startsWith('✗') ? 'vtc-no-incluye' : ''}>{item}</li>
                ))}
              </ul>

              <div className="vtc-precio-wrap">
                <div className="vtc-precio-label">Precio</div>
                <div className="vtc-precio">{mod.precio}</div>
                <div className="vtc-duracion">{mod.duracion}</div>
              </div>

              <div className="vtc-tags">
                {mod.tags.map(t => (
                  <span key={t.label} className="vtc-tag">{t.label}</span>
                ))}
              </div>

              <a
                href={mod.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vtc-comprar-btn"
              >
                Comprar en visitvalencia.com →
              </a>
            </div>

            <div className="vtc-route-img">
              <div className={`vtc-route-img-inner ${mod.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Packs con entradas */}
      <div className="vtc-packs-section">
        <h3>Valencia Card con entradas incluidas · Packs ahorro</h3>
        <p className="vtc-packs-desc">Combina la VTC de 72 horas con entrada a las atracciones más populares y ahorra respecto a comprar por separado.</p>
        <div className="vtc-packs-grid">
          {packs.map(pack => (
            <div className="vtc-pack-card" key={pack.nombre}>
              <div className="vtc-pack-nombre">{pack.nombre}</div>
              <div className="vtc-pack-precio">{pack.precio}</div>
              <a
                href={pack.url}
                target="_blank"
                rel="noopener noreferrer"
                className="vtc-pack-link"
              >
                Ver pack →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Dónde comprar */}
      <div className="vtc-compra-box">
        <h3>Dónde comprar y recoger la Valencia Tourist Card</h3>
        <div className="vtc-compra-tabla">
          <div className="vtc-compra-fila">
            <div className="vtc-compra-label">Web oficial</div>
            <div className="vtc-compra-val">visitvalencia.com · 10% de descuento exclusivo · Versión digital directa al móvil</div>
          </div>
          <div className="vtc-compra-fila">
            <div className="vtc-compra-label">Oficinas de turismo</div>
            <div className="vtc-compra-val">Plaza de la Reina · Estación del Nord · Aeropuerto de Valencia · Centro de información turística</div>
          </div>
          <div className="vtc-compra-fila">
            <div className="vtc-compra-label">Puntos de recarga</div>
            <div className="vtc-compra-val">Distribuidos por la ciudad · Consultar guía de puntos de venta en visitvalencia.com</div>
          </div>
          <div className="vtc-compra-fila">
            <div className="vtc-compra-label">Modalidad grupos</div>
            <div className="vtc-compra-val">VTC Grupos con condiciones especiales · Disponible para agencias y grupos organizados</div>
          </div>
          <div className="vtc-compra-fila">
            <div className="vtc-compra-label">Activación</div>
            <div className="vtc-compra-val">En el primer uso (transporte o museo) · El período de validez empieza desde ese momento</div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="vtc-faq-section">
        <h3>Preguntas frecuentes · Valencia Tourist Card</h3>
        <div className="vtc-faq-lista">
          {faqs.map((faq, i) => (
            <div className="vtc-faq-item" key={i}>
              <div className="vtc-faq-q">{faq.q}</div>
              <div className="vtc-faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="vtc-info-box">
        <h3>Consejos para sacar el máximo a la Valencia Tourist Card</h3>
        <ul className="vtc-info-list">
          <li>Compra siempre en la <strong>web oficial de visitvalencia.com</strong>: obtienes un 10% de descuento que no está disponible en otros canales</li>
          <li>La modalidad de <strong>72 horas es la más rentable</strong> para la mayoría de viajeros: cubre transporte, museos y permite hacer toda la ciudad sin preocupaciones</li>
          <li>Si ya tienes el transporte cubierto o te mueves en bicicleta, la <strong>tarjeta de 7 días</strong> incluye la Catedral e IVAM y sale más económica</li>
          <li>La tarjeta <strong>activa el aeropuerto</strong> en las modalidades de 24/48/72 horas: puedes llegar del aeropuerto al centro sin pagar nada extra</li>
          <li>Los <strong>packs con entradas</strong> a la CAC y el Oceanogràfic son la opción más económica si tienes pensado visitar esas atracciones: el ahorro respecto a comprar por separado es notable</li>
          <li>La <strong>tapa con consumición</strong> incluida es válida en establecimientos seleccionados; consulta la guía de descuentos en visitvalencia.com para ver el listado completo</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}