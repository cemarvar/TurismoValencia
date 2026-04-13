import { useState } from 'react';
import '../../assets/cssPlanes/Familia.css';
import Footer from '../../FOOTER/Footer';

var planes = [
  {
    num: '01',
    nombre: 'Oceanogràfic',
    categoria: 'naturaleza',
    edades: '2+ años',
    ubicacion: 'Ciudad de las Artes y las Ciencias',
    desc: 'El mayor acuario de Europa con más de 45.000 ejemplares de 500 especies marinas. El túnel submarino con tiburones y rayas, el delfinario y el aviario en una esfera de 27 metros son los momentos estrella de la visita. Reserva con antelación: los fines de semana se agota.',
    destacado: 'El túnel submarino donde los tiburones pasan por encima de tu cabeza',
    precio: 'Desde 39,45 € adulto · Desde 29,65 € niño · Gratis menores de 3 años',
    duracion: '3–4 horas',
    tags: [{ label: 'Todas las edades' }, { label: 'Naturaleza' }, { label: 'Ciencia' }],
    imgClass: 'img-ocgfamilia',
  },
  {
    num: '02',
    nombre: 'BIOPARC Valencia',
    categoria: 'naturaleza',
    edades: '1+ años',
    ubicacion: 'Parque de Cabecera · Av. Pío Baroja',
    desc: 'Un zoológico de nueva generación donde las barreras son prácticamente invisibles y los animales campan por espacios que recrean sus hábitats africanos. Elefantes, leones, gorilas, hipopótamos, lémures y más de 6.000 animales de 150 especies. Uno de los mejores parques de animales de Europa.',
    destacado: 'Ver los hipopótamos nadar bajo el agua desde los cristales sumergidos',
    precio: 'Desde 32,50 € adulto · Desde 24 € niño · Gratis menores de 3 años',
    duracion: '3–4 horas',
    tags: [{ label: 'Todas las edades' }, { label: 'Animales' }, { label: 'Naturaleza' }],
    imgClass: 'img-biofamilia',
  },
  {
    num: '03',
    nombre: 'Parque Gulliver',
    categoria: 'gratuito',
    edades: '3–12 años',
    ubicacion: 'Jardín del Turia · Entre puente del Ángel y Pont del Regne',
    desc: 'El parque infantil más original de Valencia: una figura de Gulliver tumbado de 70 metros de longitud convertida en parque de juegos. Su cuerpo está lleno de toboganes de todos los tamaños, cuerdas para escalar y escaleras. Los niños se convierten en los habitantes de Liliput. Acceso totalmente gratuito.',
    destacado: 'Los toboganes integrados en el cuerpo del gigante: hay más de 10 de distintos tamaños',
    precio: 'Gratuito · Acceso libre todo el año',
    duracion: '1–2 horas',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: '3–12 años' }, { label: 'Al aire libre' }],
    imgClass: 'img-gulliver',
  },
  {
    num: '04',
    nombre: 'Museu de les Ciències',
    categoria: 'ciencia',
    edades: '3+ años',
    ubicacion: 'Ciudad de las Artes y las Ciencias',
    desc: 'Bajo el lema "prohibido no tocar", el museo interactivo de ciencia y tecnología más grande de la Comunitat Valenciana. El Espai dels Xiquets está pensado especialmente para niños de 3 a 8 años con propuestas sobre los sentidos, el agua y los animales. El Teatro de la Ciencia ofrece espectáculos incluidos en la entrada.',
    destacado: 'El Espai dels Xiquets: zona diseñada específicamente para niños de 3 a 8 años',
    precio: 'Desde 8,90 € adulto · Desde 6,90 € niño',
    duracion: '2–3 horas',
    tags: [{ label: '3+ años' }, { label: 'Interactivo' }, { label: 'Educativo' }],
    imgClass: 'img-museufamilia',
  },
  {
    num: '05',
    nombre: 'Parque Natural de l\'Albufera',
    categoria: 'naturaleza',
    edades: 'Todas las edades',
    ubicacion: 'A 10 km del centro · Bus 24 y 25',
    desc: 'Un paraíso ecológico a diez kilómetros del centro con paseos en barca tradicional por el lago, arrozales, dunas y fauna de humedal. El lugar donde nació la paella valenciana. Los atardeceres desde la barca son una experiencia mágica para toda la familia. Los autobuses 24 y 25 salen del centro y son gratuitos con Tourist Card.',
    destacado: 'El paseo en barca albuferenca al atardecer: uno de los momentos más bonitos que verá la familia',
    precio: 'Paseo en barca: desde 8 € · Pack barca + paella desde 26 €',
    duracion: 'Medio día',
    tags: [{ label: 'Todas las edades' }, { label: 'Naturaleza' }, { label: 'Gastronomía' }],
    imgClass: 'img-albufamilia',
  },
  {
    num: '06',
    nombre: 'Jardín del Turia y ruta en bici',
    categoria: 'gratuito',
    edades: 'Todas las edades',
    ubicacion: '9 km · Desde el Parque de Cabecera hasta la CAC',
    desc: 'El parque lineal más largo de Valencia, 9 kilómetros sin coches por el antiguo cauce del río. Perfecto para recorrerlo en bicicleta en familia, con el Bioparc y el Parque Gulliver en el camino y la Ciudad de las Artes al final. Hay alquiler de bicicletas familiares con opciones de sillas para los más pequeños.',
    destacado: 'Recorrer los 9 km en bici con los niños: el Bioparc, el Gulliver y la CAC en un solo trayecto',
    precio: 'Gratuito · Alquiler de bici familiar desde 10 €/día',
    duracion: '2–4 horas según ritmo',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Bici' }, { label: 'Todas las edades' }],
    imgClass: 'img-tufamilia',
  },
  {
    num: '07',
    nombre: 'Tour de Indiana Jones y el Santo Grial',
    categoria: 'tour',
    edades: '6+ años',
    ubicacion: 'Centro histórico · Catedral de Valencia',
    desc: 'Un tour de dos horas por el casco histórico con el propio Indiana Jones como guía. Juegos, adivinanzas y leyendas sobre el Santo Grial que se conserva en la Catedral de Valencia. Una forma divertidísima de que los niños descubran la historia de la ciudad sin aburrirse. Muy recomendado para familias con niños a partir de 6 años.',
    destacado: 'El momento en que los niños ven el Santo Grial real en la Catedral después del tour',
    precio: 'Desde 12 € adulto · Descuentos para niños',
    duracion: '2 horas',
    tags: [{ label: '6+ años' }, { label: 'Historia' }, { label: 'Aventura' }],
    imgClass: 'img-indfamilia',
  },
  {
    num: '08',
    nombre: 'Museo Iluziona',
    categoria: 'interior',
    edades: '5+ años',
    ubicacion: 'Centro histórico',
    desc: 'Un museo de ilusiones ópticas y experiencias interactivas que juega con la percepción visual. Escenarios inspirados en leyendas, películas, parajes naturales y tradiciones valencianas. También incluye una experiencia de realidad virtual con dinosaurios y un circuito de motocross. Perfecto para familias con niños que aman las fotos y los retos visuales.',
    destacado: 'La experiencia de realidad virtual con dinosaurios: los niños quedarán alucinados',
    precio: 'Desde 13 € adulto · Desde 10 € niño',
    duracion: '1–2 horas',
    tags: [{ label: '5+ años' }, { label: 'Interactivo' }, { label: 'Realidad virtual' }],
    imgClass: 'img-iluzfamilia',
  },
  {
    num: '09',
    nombre: 'Museo Fallero',
    categoria: 'cultura',
    edades: 'Todas las edades',
    ubicacion: 'Plaza Monteolivete · Cerca del Parque Gulliver',
    desc: 'El museo donde se conservan los ninots indultados de las Fallas desde 1934. Las caricaturas y los carteles premiados son una manera muy divertida de conocer la historia y la cultura valenciana. La entrada está incluida en la Valencia Tourist Card. Se puede visitar cómodamente en paralelo al Parque Gulliver, ya que están muy cerca.',
    destacado: 'Descubrir cómo son los ninots que se salvan del fuego cada año desde 1934',
    precio: 'Gratuito con Tourist Card · Entrada: 2 €',
    duracion: '45–60 min',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Cultura' }, { label: 'Fallas' }],
    imgClass: 'img-fallerofamilia',
  },
  {
    num: '10',
    nombre: 'Almacén del Ratoncito Pérez',
    categoria: 'interior',
    edades: '3–8 años',
    ubicacion: 'Centro histórico',
    desc: 'Una visita guiada teatralizada de 45 minutos pensada especialmente para los más pequeños de la familia. Los niños aprenden sobre higiene bucal, geografía y música mientras descubren el mágico almacén donde el Ratoncito Pérez guarda los dientes. Una experiencia cargada de arte, cariño e imaginación que los pequeños no olvidarán.',
    destacado: 'La cara de sorpresa de los niños cuando descubren el almacén del ratoncito',
    precio: 'Desde 9 € por persona',
    duracion: '45 minutos',
    tags: [{ label: '3–8 años' }, { label: 'Teatralizado' }, { label: 'Magia' }],
    imgClass: 'img-ratoncitofamilia',
  },
  {
    num: '11',
    nombre: 'Playas urbanas: Malvarrosa y Cabanyal',
    categoria: 'playa',
    edades: 'Todas las edades',
    ubicacion: 'Poblados Marítimos · Metro L3 o bus',
    desc: 'Más de 4 kilómetros de playas urbanas con bandera azul a las que se llega fácilmente en metro o autobús desde el centro. La playa de la Malvarrosa es la más concurrida y animada, con restaurantes en primera línea. El Cabanyal tiene un ambiente más marinero y barrios con arquitectura modernista única. En verano, el agua del Mediterráneo alcanza los 26 °C.',
    destacado: 'El agua del Mediterráneo en verano: cálida, limpia y perfecta para los niños',
    precio: 'Gratuito · Metro o bus desde el centro',
    duracion: 'Medio día o día completo',
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Playa' }, { label: 'Verano' }],
    imgClass: 'img-playafamilia',
  },
  {
    num: '12',
    nombre: 'Bus Turístico The Red Bus',
    categoria: 'tour',
    edades: 'Todas las edades',
    ubicacion: 'Recorre toda la ciudad · 2 rutas',
    desc: 'El clásico bus turístico de dos pisos, descapotable, con paradas en los principales puntos de interés de Valencia. Los niños disfrutan especialmente del piso superior y de poder subir y bajar cuantas veces quieran durante 24 o 48 horas. Es también una buena forma de orientarse en la ciudad el primer día de visita. Descuento con la Tourist Card.',
    destacado: 'El piso de arriba descubierto: a los niños les encanta ver la ciudad desde las alturas',
    precio: 'Desde 26 € adulto · Desde 13 € niño (5–15 años) · Gratis menores de 4',
    duracion: '24 o 48 horas de validez',
    tags: [{ label: 'Todas las edades' }, { label: 'Ciudad' }, { label: '24/48 h' }],
    imgClass: 'img-busfamilia',
  },
];

var categorias = [
  { id: 'todos', label: 'Todos los planes' },
  { id: 'naturaleza', label: 'Naturaleza' },
  { id: 'gratuito', label: 'Gratuitos' },
  { id: 'interior', label: 'Días de lluvia' },
  { id: 'tour', label: 'Tours' },
  { id: 'playa', label: 'Playa' },
  { id: 'cultura', label: 'Cultura' },
  { id: 'ciencia', label: 'Ciencia' },
];

var consejos = [
  { titulo: 'Moverse en familia', desc: 'El metro y el autobús son fáciles y económicos. La Tourist Card incluye transporte ilimitado y la ciudad es totalmente llana, ideal para carritos y sillas de ruedas.' },
  { titulo: 'Mejor época', desc: 'Valencia tiene playa de abril a octubre. En invierno, el clima suave (10–18 °C) permite visitar la ciudad sin abrigos pesados. Evita agosto si eres sensible al calor.' },
  { titulo: 'Carritos y accesibilidad', desc: 'La ciudad es mayoritariamente llana. Los museos más grandes y el Jardín del Turia son totalmente accesibles con carritos y sillas de ruedas.' },
  { titulo: 'Valencia Tourist Card', desc: 'Para familias con niños es especialmente rentable: transporte ilimitado, museos municipales gratis y hasta un 15 % de descuento en el Oceanogràfic y la CAC.' },
];

export default function Familia() {
  const [filtroActivo, setFiltroActivo] = useState('todos');

  const planesFiltrados = filtroActivo === 'todos'
    ? planes
    : planes.filter(p => p.categoria === filtroActivo);

  return (
    <div className="fam-page">

      {/* Hero */}
      <div className="fam-hero">
        <div className="fam-hero-overlay" />
        <div className="fam-hero-content">
          <div className="fam-eyebrow">Valencia · En familia · Planes para niños</div>
          <h1>Valencia<br />con niños</h1>
          <p>Si ellos están felices, tú más. Valencia es una ciudad llana, con playa, naturaleza y actividades para todos los gustos y edades. El destino familiar perfecto del Mediterráneo.</p>
        </div>
        <div className="fam-hero-stats">
          <div className="fam-stat">
            <span className="fam-stat-num">12</span>
            <span className="fam-stat-label">Planes</span>
          </div>
          <div className="fam-stat-sep" />
          <div className="fam-stat">
            <span className="fam-stat-num">4</span>
            <span className="fam-stat-label">Gratuitos</span>
          </div>
          <div className="fam-stat-sep" />
          <div className="fam-stat">
            <span className="fam-stat-num">6 km</span>
            <span className="fam-stat-label">de playa</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="fam-intro">
        <p>Valencia tiene todo lo que una familia necesita: distancias cortas, transporte fácil, una ciudad completamente llana, seis meses de temporada de playa y una oferta de actividades que abarca desde el mayor acuario de Europa hasta un parque de juegos gigante en pleno centro. Y todo en un clima mediterráneo suave durante prácticamente todo el año.</p>
        <p>Aquí van los <strong>12 mejores planes para hacer en Valencia con niños</strong>, con información de precios, edades recomendadas y el detalle que hace especial cada visita.</p>
      </div>

      {/* Filtros por categoría */}
      <div className="fam-filter-bar">
        {categorias.map(c => (
          <button
            key={c.id}
            className={`fam-pill ${filtroActivo === c.id ? 'active' : ''}`}
            onClick={() => setFiltroActivo(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Planes */}
      <div className="fam-routes">
        {planesFiltrados.map(plan => (
          <div className="fam-route-item" key={plan.num}>
            <div className="fam-route-num">{plan.num}</div>

            <div className="fam-route-text">
              <div className="fam-meta-row">
                <span className="fam-edades">👶 {plan.edades}</span>
                <span className="fam-ubicacion">{plan.ubicacion}</span>
              </div>
              <h2>{plan.nombre}</h2>
              <p className="fam-desc">{plan.desc}</p>

              <div className="fam-destacado">
                <span className="fam-destacado-icon">⭐</span>
                <span>{plan.destacado}</span>
              </div>

              <div className="fam-info-row">
                <div className="fam-info-dato">
                  <span className="fam-info-label">Duración</span>
                  <span className="fam-info-val">{plan.duracion}</span>
                </div>
                <div className="fam-info-dato">
                  <span className="fam-info-label">Precio</span>
                  <span className="fam-info-val">{plan.precio}</span>
                </div>
              </div>

              <div className="fam-tags">
                {plan.tags.map(t => (
                  <span key={t.label} className={`fam-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

            </div>

            <div className="fam-route-img">
              <div className={`fam-route-img-inner ${plan.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Consejos prácticos */}
      <div className="fam-consejos-section">
        <div className="fam-section-title">
          <h2>Consejos prácticos para venir con niños</h2>
        </div>
        <div className="fam-consejos-grid">
          {consejos.map(c => (
            <div className="fam-consejo-card" key={c.titulo}>
              <div className="fam-consejo-titulo">{c.titulo}</div>
              <p className="fam-consejo-desc">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="fam-info-box">
        <h3>Lo más importante antes de viajar a Valencia con niños</h3>
        <ul className="fam-info-list">
          <li>Reserva el <strong>Oceanogràfic y el BIOPARC online</strong> con antelación para evitar colas</li>
          <li>El <strong>Parque Gulliver</strong> y el Jardín del Turia son gratuitos y perfectos para descansar entre visitas</li>
          <li>La <strong>Tourist Card de 72 h</strong> incluye transporte y descuentos en la CAC y BIOPARC</li>
          <li>Los <strong>menores de 3 años</strong> tienen entrada gratuita en el Oceanogràfic y el BIOPARC</li>
          <li>El bus 24 y 25 llega a la Albufera y es <strong>gratuito con Tourist Card</strong></li>
          <li>El tour de Indiana Jones es uno de los <strong>mejores planes culturales para niños</strong> de 6 años en adelante</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}