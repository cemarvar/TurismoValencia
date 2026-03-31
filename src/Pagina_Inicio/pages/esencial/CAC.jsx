import { useState } from 'react';
import '../../assets/cssEsencial/CAC.css';
import Footer from '../../FOOTER/Footer';

var recintos = [
  {
    num: '01',
    nombre: 'Oceanogràfic',
    subtitulo: 'El mayor acuario de Europa',
    arquitecto: 'Félix Candela',
    desc: 'Con cerca de 45.000 ejemplares de más de 500 especies marinas, el Oceanogràfic es el mayor acuario de Europa y un referente mundial en investigación y conservación del mundo marino. Sus edificios, diseñados por Félix Candela con cubiertas en forma de flores y conchas, albergan ecosistemas del Mediterráneo, el Ártico, los Trópicos y el Antártico.',
    destacados: [
      { item: 'Túnel submarino', desc: 'Camina rodeado de tiburones y rayas en un pasaje acristalado' },
      { item: 'Delfinario', desc: 'Exhibición diaria con delfines mulares en el espacio exterior' },
      { item: 'Arrecife de coral', desc: 'El mayor ecosistema de arrecife tropical de España' },
      { item: 'Pingüinos y belugas', desc: 'Especies polares en instalaciones adaptadas a su hábitat natural' },
    ],
    duracion: '3–4 horas',
    precio: 'Desde 39,45 € adulto · Desde 29,65 € reducida · Gratuito menores de 3 años',
    horario: 'Temporada alta 10:00–20:00 h · Temporada baja 10:00–18:00 h',
    recomendado: 'Todas las edades · Especial familias',
    tags: [{ label: 'Familia' }, { label: 'Naturaleza' }, { label: 'Ciencia' }, { label: '3–4 h' }],
    imgClass: 'img-ogf',
  },
  {
    num: '02',
    nombre: 'Hemisfèric',
    subtitulo: 'El ojo del conocimiento: cine 3D y planetario',
    arquitecto: 'Santiago Calatrava',
    desc: 'El edificio más fotogénico de la CAC, diseñado por Santiago Calatrava como un enorme ojo que se refleja en el lago. Alberga tres sistemas de proyección y una pantalla cóncava de 900 m²: cine IMAX Dome, cine digital 3D y sistema de proyección digital para representaciones astronómicas. Las películas tienen carácter divulgativo y una duración aproximada de 45 minutos.',
    destacados: [
      { item: 'Pantalla cóncava de 900 m²', desc: 'La mayor de España, con tecnología IMAX Dome' },
      { item: 'Cine digital 3D', desc: 'Proyecciones en alta definición con efecto tridimensional inmersivo' },
      { item: 'Planetario digital', desc: 'Representaciones astronómicas del cielo nocturno' },
      { item: 'Cartelera científica', desc: 'Varias sesiones al día sobre astronomía, naturaleza y exploración' },
    ],
    duracion: '1 hora',
    precio: 'Desde 10,60 € adulto · Desde 8,20 € reducida',
    horario: '10:00–19:00 h · Consultar cartelera de sesiones',
    recomendado: 'A partir de 6 años · Adultos y familias',
    tags: [{ label: 'Cine IMAX' }, { label: 'Planetario' }, { label: '1 h' }, { label: 'Reserva sesión' }],
    imgClass: 'img-hemisferic',
  },
  {
    num: '03',
    nombre: 'Museu de les Ciències',
    subtitulo: 'Ciencia interactiva en el esqueleto de un dinosaurio',
    arquitecto: 'Santiago Calatrava',
    desc: 'Con más de 26.000 m² de exposiciones, el Museu de les Ciències es un referente mundial de la divulgación científica interactiva. Su edificio, diseñado por Calatrava para evocar el esqueleto de un ser vivo, acoge exposiciones permanentes y temporales sobre ciencia, tecnología, naturaleza y evolución, además de talleres, espectáculos científicos y un simulador espacial.',
    destacados: [
      { item: 'Exposiciones interactivas', desc: 'Más de 26.000 m² de ciencia para explorar, tocar y experimentar' },
      { item: 'Teatro de la Ciencia', desc: 'Espectáculos musicales y científicos incluidos en la entrada general' },
      { item: 'Simulador Espacial', desc: 'Experiencia de 3,50 € adicionales para vivir el vuelo espacial' },
      { item: 'Exposición Leonardo', desc: 'Hasta abril de 2026: máquinas e inventos del genio del Renacimiento' },
    ],
    duracion: '2–3 horas',
    precio: 'Desde 8,90 € adulto · Desde 6,90 € reducida',
    horario: 'Temporada alta 10:00–21:00 h · Temporada baja 10:00–19:00 h',
    recomendado: 'Todas las edades · Especial niños y jóvenes',
    tags: [{ label: 'Interactivo' }, { label: 'Familia' }, { label: '2–3 h' }, { label: 'Talleres' }],
    imgClass: 'img-mdlc',
  },
  {
    num: '04',
    nombre: 'Palau de les Arts Reina Sofía',
    subtitulo: 'El gran templo de la ópera y las artes escénicas',
    arquitecto: 'Santiago Calatrava',
    desc: 'Sede de la ópera, el ballet, los conciertos sinfónicos y las artes escénicas de Valencia. Con 40.000 m² de superficie y una silueta que evoca un casco o un enorme ser marino varado en el cauce del Turia, el Palau de les Arts es uno de los auditorios más espectaculares del mundo. La temporada artística se extiende de mediados de septiembre a primeros de julio.',
    destacados: [
      { item: 'Sala Principal', desc: 'Aforo de 1.700 localidades para ópera, ballet y grandes espectáculos' },
      { item: 'Auditori', desc: 'Sala de cámara con 400 localidades para recitales y conciertos íntimos' },
      { item: 'Visita arquitectónica', desc: 'Recorridos guiados por el interior del edificio con entrada independiente' },
      { item: 'Temporada sept–julio', desc: 'Programación de ópera, ballet y conciertos de primer nivel internacional' },
    ],
    duracion: '1–3 horas (según espectáculo)',
    precio: 'Visita arquitectónica desde 14 € · Espectáculos según programación',
    horario: 'Según programación · Visita arquitectónica: consultar',
    recomendado: 'Adultos · Amantes de la música y la arquitectura',
    tags: [{ label: 'Ópera' }, { label: 'Conciertos' }, { label: 'Arquitectura' }, { label: 'Temporada sept–jul' }],
    imgClass: 'img-palau',
  },
  {
    num: '05',
    nombre: 'Umbracle',
    subtitulo: 'El jardín mediterráneo entre esculturas y el lago',
    arquitecto: 'Santiago Calatrava',
    desc: 'Un jardín ajardinado de más de 17.000 m² elevado sobre el aparcamiento del complejo, abierto y de acceso libre. Entre sus arcos de hormigón y metal crecen especies vegetales mediterráneas y subtropicales, y se exhiben esculturas de gran formato en mármol y granito. En las noches de verano se convierte en uno de los espacios de ocio nocturno más singulares de Valencia.',
    destacados: [
      { item: 'Acceso libre y gratuito', desc: 'El único recinto de la CAC de entrada libre durante todo el año' },
      { item: 'Escultura al aire libre', desc: 'Ocho obras de gran formato en mármol y granito en el Paseo del Arte' },
      { item: 'Especies mediterráneas', desc: 'Naranjos, palmeras, buganvillas y más de 100 especies vegetales' },
      { item: 'Ocio nocturno en verano', desc: 'Terraza y eventos especiales bajo las estrellas en los meses cálidos' },
    ],
    duracion: '30–60 min',
    precio: 'Gratuito · Acceso libre todo el año',
    horario: 'Abierto durante el horario del complejo',
    recomendado: 'Todas las edades · Paseo y fotografía',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Esculturas' }, { label: 'Fotografía' }, { label: 'Nocturno verano' }],
    imgClass: 'img-umbracle',
  },
  {
    num: '06',
    nombre: 'Àgora · CaixaForum València',
    subtitulo: 'Arte, cultura y exposiciones en el corazón del complejo',
    arquitecto: 'Santiago Calatrava',
    desc: 'El Àgora, diseñado por Calatrava, acoge el CaixaForum València, un espacio cultural polivalente con un programa anual de exposiciones de arte internacional, ciclos de conferencias, conciertos, espectáculos y talleres educativos. Situado entre el Puente de l\'Assut de l\'Or y el Oceanogràfic, también cuenta con librería y restaurante. El acceso al edificio es libre; las exposiciones requieren entrada.',
    destacados: [
      { item: 'Exposiciones internacionales', desc: 'Arte contemporáneo, ciencia y cultura de todo el mundo' },
      { item: 'Conferencias y conciertos', desc: 'Programa cultural diverso para todos los públicos' },
      { item: 'Talleres familiares', desc: 'Actividades educativas para niños y familias todos los fines de semana' },
      { item: 'Restaurante y librería', desc: 'Con vistas al lago del complejo, abierto de 8:00 a 00:00 h' },
    ],
    duracion: '1–2 horas',
    precio: 'Acceso libre · Exposiciones según precio de cada muestra',
    horario: 'Lun–Dom 8:00–00:00 h',
    recomendado: 'Todas las edades · Cultura y arte',
    tags: [{ label: 'Arte' }, { label: 'Exposiciones' }, { label: 'Familia' }, { label: 'Acceso libre' }],
    imgClass: 'img-agora',
  },
];

var entradas = [
  { tipo: 'Pack completo (3 recintos)', precio: 'Desde 47,75 €', reducida: '37,40 € reducida', nota: '3 días consecutivos · Oceanogràfic + Museu + Hemisfèric', destacada: true },
  { tipo: 'Oceanogràfic + Museu de les Ciències', precio: 'Desde 38,90 €', reducida: '29,40 € reducida', nota: '2 días consecutivos', destacada: false },
  { tipo: 'Oceanogràfic + Hemisfèric', precio: 'Desde 38,60 €', reducida: '29,00 € reducida', nota: '2 días consecutivos', destacada: false },
  { tipo: 'Solo Oceanogràfic', precio: 'Desde 39,45 €', reducida: '29,65 € reducida', nota: 'Incluye todas las exhibiciones', destacada: false },
  { tipo: 'Solo Museu de les Ciències', precio: 'Desde 8,90 €', reducida: '6,90 € reducida', nota: 'Teatro de la Ciencia incluido', destacada: false },
  { tipo: 'Solo Hemisfèric', precio: 'Desde 10,60 €', reducida: '8,20 € reducida', nota: 'Consultar cartelera de sesiones', destacada: false },
];

var comoLlegar = [
  { medio: 'Autobús', detalle: 'Líneas 13, 14, 15, 19, 35, 40, 94 y 95 · Línea 95 y 15 directas al Oceanogràfic' },
  { medio: 'Metro', detalle: 'Líneas 3, 5, 7 y 9 · Parada Alameda · 15 min a pie por el Jardín del Turia' },
  { medio: 'Bicicleta', detalle: 'Por el Jardín del Turia · Carril bici continuo desde el centro histórico' },
  { medio: 'Coche', detalle: 'Aparcamiento propio en el Umbracle · 7 €/día con entrada a cualquier recinto' },
];

export default function CAC() {
  const [recintActivo, setRecintoActivo] = useState(null);

  return (
    <div className="cac-page">

      {/* Hero */}
      <div className="cac-hero">
        <div className="cac-hero-overlay" />
        <div className="cac-hero-content">
          <div className="cac-eyebrow">Valencia · Arquitectura · Calatrava · Candela</div>
          <h1>Ciutat de les<br />Arts i les Ciències</h1>
          <p>Seis recintos únicos en casi dos kilómetros del antiguo cauce del Turia. El icono arquitectónico más reconocible de Valencia y uno de los complejos culturales más espectaculares de Europa.</p>
        </div>
        <div className="cac-hero-stats">
          <div className="cac-stat">
            <span className="cac-stat-num">6</span>
            <span className="cac-stat-label">Recintos</span>
          </div>
          <div className="cac-stat-sep" />
          <div className="cac-stat">
            <span className="cac-stat-num">2 km</span>
            <span className="cac-stat-label">de extensión</span>
          </div>
          <div className="cac-stat-sep" />
          <div className="cac-stat">
            <span className="cac-stat-num">500+</span>
            <span className="cac-stat-label">especies marinas</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="cac-intro">
        <p>La Ciutat de les Arts i les Ciències se extiende a lo largo de casi dos kilómetros en el antiguo cauce del río Turia, en el extremo sur de Valencia. Obra de dos arquitectos españoles de proyección internacional —Santiago Calatrava y Félix Candela—, el complejo combina ciencia interactiva, el mayor acuario de Europa, ópera, cine IMAX y jardines mediterráneos en un entorno arquitectónico sin igual.</p>
        <p>Para aprovechar el complejo al máximo se recomienda <strong>dedicarle un día completo</strong>, aunque los recintos pueden visitarse de forma independiente. Comprar las entradas online con antelación es siempre la mejor opción para evitar colas y conseguir los mejores precios.</p>
      </div>

      {/* Recintos */}
      <div className="cac-routes">
        {recintos.map(r => (
          <div className="cac-route-item" key={r.num}>
            <div className="cac-route-num">{r.num}</div>

            <div className="cac-route-text">
              <div className="cac-arquitecto">Arquitecto: {r.arquitecto}</div>
              <h2>{r.nombre}</h2>
              <div className="cac-subtitulo">{r.subtitulo}</div>
              <p className="cac-desc">{r.desc}</p>

              {/* Destacados */}
              <div className="cac-destacados-titulo">Qué encontrarás</div>
              <ul className="cac-destacados">
                {r.destacados.map(d => (
                  <li key={d.item}>
                    <span className="cac-dest-item">{d.item}:</span>
                    <span className="cac-dest-desc"> {d.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Info práctica */}
              <div className="cac-info-row">
                <div className="cac-info-dato">
                  <span className="cac-info-label">Duración</span>
                  <span className="cac-info-val">{r.duracion}</span>
                </div>
                <div className="cac-info-dato">
                  <span className="cac-info-label">Recomendado</span>
                  <span className="cac-info-val">{r.recomendado}</span>
                </div>
              </div>

              <div className="cac-visita">
                <span className="cac-visita-icon">🕐</span>
                <span>{r.horario}</span>
                <span className="cac-visita-sep">·</span>
                <span className="cac-visita-precio">{r.precio}</span>
              </div>

              <div className="cac-tags">
                {r.tags.map(t => (
                  <span key={t.label} className={`cac-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

              <a className="cac-link" href="#">Comprar entradas →</a>
            </div>

            <div className="cac-route-img">
              <div className={`cac-route-img-inner ${r.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Tabla de entradas */}
      <div className="cac-entradas-section">
        <h3>Precios de entrada</h3>
        <p className="cac-entradas-nota">Las entradas combinadas permiten visitar varios recintos en días consecutivos sin repetir acceso. Los menores de 3 años acceden gratis al Oceanogràfic.</p>
        <div className="cac-entradas-tabla">
          {entradas.map(e => (
            <div className={`cac-entrada-fila ${e.destacada ? 'destacada' : ''}`} key={e.tipo}>
              <div className="cac-entrada-tipo">
                {e.destacada && <span className="cac-entrada-badge">Recomendado</span>}
                {e.tipo}
              </div>
              <div className="cac-entrada-precios">
                <span className="cac-entrada-precio">{e.precio}</span>
                <span className="cac-entrada-reducida">{e.reducida}</span>
              </div>
              <div className="cac-entrada-nota">{e.nota}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Cómo llegar */}
      <div className="cac-llegar-section">
        <h3>Cómo llegar</h3>
        <div className="cac-llegar-grid">
          {comoLlegar.map(c => (
            <div className="cac-llegar-item" key={c.medio}>
              <div className="cac-llegar-medio">{c.medio}</div>
              <div className="cac-llegar-detalle">{c.detalle}</div>
            </div>
          ))}
        </div>
        <div className="cac-direccion">
          📍 Av. del Professor López Piñero, 7 · 46013 Valencia · Tel. 96 197 46 86
        </div>
      </div>

      {/* Info box */}
      <div className="cac-info-box">
        <h3>Consejos para visitar la Ciutat de les Arts i les Ciències</h3>
        <ul className="cac-info-list">
          <li>Compra las entradas <strong>online con antelación</strong> para evitar colas y asegurar horario en el Hemisfèric</li>
          <li>El <strong>pack de 3 recintos</strong> es válido para días consecutivos: ideal para repartir la visita</li>
          <li>El <strong>Umbracle es gratuito</strong> y de libre acceso: el mejor lugar para las fotos del complejo</li>
          <li>Dedica <strong>al menos un día completo</strong> si quieres visitar el Oceanogràfic y el Museu de les Ciències</li>
          <li>El aparcamiento baja a <strong>7 €/día</strong> si presentas tu entrada a cualquier recinto</li>
          <li>La <strong>València Tourist Card</strong> ofrece un 10 % de descuento en la mayoría de entradas</li>
        </ul>
      </div>

      <Footer />

    </div>
  );
}