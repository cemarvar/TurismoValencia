import '../../assets/cssEsencial/CiudadAmurallada.css';
import Footer from '../../FOOTER/Footer';

var torres = [
  {
    num: '01',
    nombre: 'Torres de Serranos',
    subtitulo: 'La puerta principal de la Valencia medieval',
    ubicacion: 'Plaza de los Fueros · Barrio del Carmen',
    ano: '1392 – 1398',
    autor: 'Pere Balaguer',
    altura: '33 m',
    estilo: 'Gótico militar',
    desc: 'Construidas entre 1392 y 1398 por el maestro Pere Balaguer, las Torres de Serranos eran la entrada principal al recinto amurallado de Valencia, orientadas hacia la comarca dels Serrans y el camino a Zaragoza. Declaradas Monumento Histórico Artístico Nacional, son uno de los mejores ejemplos de arquitectura militar del siglo XIV en Europa.',
    historia: [
      {
        titulo: 'Puerta del poder y el comercio',
        texto: 'El portal recogía hasta el 95 % del tránsito de mercancías que entraban y salían de la ciudad. En la fachada exterior, una pequeña campana de bronce verde —instalada en 1399— alertaba de los peligros; quedó muda en enero de 1812, dañada por una granada napoleónica, y todavía puede verse con la raja en su parte inferior.'
      },
      {
        titulo: 'Prisión de nobles y refugio del Prado',
        texto: 'Tras el incendio de la cárcel municipal en 1586, las torres se convirtieron en prisión para nobles y caballeros, función que mantendrían hasta 1888. Este uso carcelario las salvó de la demolición de la muralla en 1865. Durante la Guerra Civil española, su robustez las convirtió en depósito de obras del Museo del Prado, protegiéndolas de los bombardeos de Madrid mediante una bóveda de hormigón armado y un sistema de control de humedad.'
      },
      {
        titulo: 'Símbolo vivo de la ciudad',
        texto: 'Hoy las torres son uno de los iconos más reconocibles de Valencia. Cada último domingo de febrero, la fallera mayor proclama desde su portal la inauguración oficial de las Fallas en el acto conocido como La Cridà. Desde las terrazas almenadas se obtienen unas de las mejores vistas del río Turia y del casco histórico.'
      }
    ],
    arquitectura: [
      { dato: 'Dos torres poligonales', desc: 'flanquean una puerta central de arco de medio punto' },
      { dato: 'Fachada interior abierta', desc: 'estancias abovedadas que servían de tribuna para recibir embajadores y reyes' },
      { dato: 'Bóvedas de crucería', desc: 'en las salas nobles del cuerpo interior' },
      { dato: 'Inspirada en la Puerta Real', desc: 'del Monasterio de Poblet, en Cataluña' },
    ],
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Vistas panorámicas' }, { label: 'Siglo XIV' }, { label: 'Monumento Nacional' }],
    imgClass: 'img-serranos',
    info: 'Plaza de los Fueros, s/n · Entrada gratuita · Mar–Sáb 10:00–19:00 h · Dom 10:00–14:00 h'
  },
  {
    num: '02',
    nombre: 'Torres de Quart',
    subtitulo: 'La puerta de poniente, con las cicatrices de la guerra',
    ubicacion: 'C/ Quart · C/ Guillem de Castro',
    ano: '1441 – 1468',
    autor: 'Francesc Baldomar · Pere Compte',
    altura: '34 m',
    estilo: 'Gótico arcaizante de influencia provenzal',
    desc: 'La fachada oeste de la ciudad medieval, orientada hacia Castilla por el camino que pasaba por Quart de Poblet. Con 34 metros de altura —un metro más que las de Serranos— son las torres defensivas góticas mejor conservadas de Europa. Su fachada exterior aún conserva las marcas de los cañonazos del asedio napoleónico de 1808: 132 impactos de bala de cañón y más de 1.000 perforaciones de proyectiles de fusil.',
    historia: [
      {
        titulo: 'La puerta hacia Castilla',
        texto: 'Su nombre proviene del latín at quartum milliarium —cuatro millas romanas, la distancia que la separaba de Quart de Poblet—. Eran una de las cuatro puertas mayores de la Valencia medieval, construidas a partir de 1441 para sustituir un portillo anterior considerado insuficiente para el tráfico de personas y carros del interior peninsular.'
      },
      {
        titulo: 'Defensa heroica contra Napoleón',
        texto: 'El 28 de junio de 1808, entre 8.000 y 10.000 soldados del mariscal Moncey fueron detenidos ante estas torres por la defensa del mariscal Saint Marcq. Valencia resistió el asedio. Las huellas de ese bombardeo se conservaron deliberadamente durante la restauración como testimonio de la resistencia de la ciudad.'
      },
      {
        titulo: 'De almacén de pólvora a cárcel de mujeres',
        texto: 'En 1562, la Generalitat almacenó pólvora en su interior. En 1626 se habilitaron como prisión de mujeres —la Casa Galera—, uso que mantendrían hasta el siglo XIX. Al igual que las Serranos, este uso carcelario las salvó de la demolición de la muralla en 1865. Declaradas Monumento Histórico Artístico Nacional en 1931, la restauración integral entre 1976 y 1982 recuperó su aspecto original.'
      }
    ],
    arquitectura: [
      { dato: 'Dos torres cilíndricas', desc: 'de base en talud, seccionadas verticalmente en la parte posterior (gola abierta)' },
      { dato: 'Galerías ojivales', desc: 'en los pisos superiores, abiertas hacia el interior de la ciudad' },
      { dato: 'Planta ligeramente oblicua', desc: 'adaptada al trazado diagonal del camino de Quart respecto a la muralla' },
      { dato: 'Modelo del Castelnuovo de Nápoles', desc: 'construido bajo el reinado de Alfonso V el Magnánimo' },
    ],
    tags: [{ label: 'Gratuito', type: 'free' }, { label: 'Historia bélica' }, { label: 'Siglo XV' }, { label: 'Monumento Nacional' }],
    imgClass: 'img-quart',
    info: 'C/ Guillem de Castro, 90 · Entrada gratuita · Mar–Sáb 10:00–19:00 h · Dom 10:00–14:00 h'
  },
];

var datosComparativos = [
  { label: 'Estilo', serranos: 'Gótico militar', quart: 'Gótico arcaizante' },
  { label: 'Período', serranos: '1392 – 1398', quart: '1441 – 1468' },
  { label: 'Autor principal', serranos: 'Pere Balaguer', quart: 'Francesc Baldomar' },
  { label: 'Altura', serranos: '33 m', quart: '34 m' },
  { label: 'Orientación', serranos: 'Norte · Camino a Zaragoza', quart: 'Oeste · Camino a Castilla' },
  { label: 'Torres', serranos: 'Planta poligonal', quart: 'Planta cilíndrica' },
];

export default function CiudadAmurallada() {
  return (
    <div className="cam-page">

      {/* Hero */}
      <div className="cam-hero">
        <div className="cam-hero-overlay" />
        <div className="cam-hero-content">
          <div className="cam-eyebrow">Valencia Medieval · Siglos XIV–XV</div>
          <h1>La ciudad<br />amurallada</h1>
          <p>Las Torres de Serranos y las Torres de Quart son las dos únicas puertas que sobreviven de la muralla cristiana que protegió Valencia durante cuatro siglos.</p>
        </div>
        <div className="cam-hero-badge">
          <span>2</span>
          <small>puertas</small>
          <small>medievales</small>
        </div>
      </div>

      {/* Intro */}
      <div className="cam-intro">
        <p>La Valencia medieval estuvo rodeada por una imponente muralla cristiana construida a partir de 1356 durante el reinado de Pedro IV el Ceremonioso. Contaba con cuatro puertas mayores y numerosos portillos secundarios. De todo ese sistema defensivo, solo dos monumentos han sobrevivido hasta hoy: las Torres de Serranos al norte y las Torres de Quart al oeste.</p>
        <p>Ambas fueron declaradas <strong>Monumento Histórico Artístico Nacional</strong>, han servido como prisión, depósito de pólvora y refugio de obras de arte, y hoy son dos de los emblemas más reconocibles de la ciudad. La entrada a las dos es gratuita.</p>
      </div>

      {/* Tabla comparativa */}
      <div className="cam-comparativa">
        <div className="cam-comparativa-header">
          <div className="cam-comparativa-vacia"></div>
          <div className="cam-comparativa-col-titulo">Torres de Serranos</div>
          <div className="cam-comparativa-col-titulo">Torres de Quart</div>
        </div>
        {datosComparativos.map(fila => (
          <div className="cam-comparativa-fila" key={fila.label}>
            <div className="cam-comparativa-label">{fila.label}</div>
            <div className="cam-comparativa-val">{fila.serranos}</div>
            <div className="cam-comparativa-val">{fila.quart}</div>
          </div>
        ))}
      </div>

      {/* Fichas de las torres */}
      <div className="cam-routes">
        {torres.map(torre => (
          <div className="cam-route-item" key={torre.num}>

            <div className="cam-route-num">{torre.num}</div>

            <div className="cam-route-text">
              <div className="cam-ubicacion">{torre.ubicacion}</div>
              <h2>{torre.nombre}</h2>
              <div className="cam-subtitulo">{torre.subtitulo}</div>
              <p className="cam-desc">{torre.desc}</p>

              {/* Historia */}
              <div className="cam-historia">
                {torre.historia.map(h => (
                  <div className="cam-historia-bloque" key={h.titulo}>
                    <div className="cam-historia-titulo">{h.titulo}</div>
                    <p className="cam-historia-texto">{h.texto}</p>
                  </div>
                ))}
              </div>

              {/* Datos arquitectónicos */}
              <div className="cam-arq-titulo">Rasgos arquitectónicos</div>
              <ul className="cam-arq-lista">
                {torre.arquitectura.map(a => (
                  <li key={a.dato}>
                    <span className="cam-arq-dato">{a.dato}:</span>
                    <span className="cam-arq-desc"> {a.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="cam-tags">
                {torre.tags.map(t => (
                  <span key={t.label} className={`cam-tag ${t.type === 'free' ? 'free' : ''}`}>{t.label}</span>
                ))}
              </div>

              {/* Info práctica */}
              <div className="cam-info-practica">
                <span className="cam-info-icon">📍</span>
                {torre.info}
              </div>

              <a className="cam-link" href="#">Ver en el mapa →</a>
            </div>

            <div className="cam-route-col-derecha">
              <div className="cam-route-img">
                <div className={`cam-route-img-inner ${torre.imgClass}`} />
              </div>
              <div className="cam-ficha">
                <div className="cam-ficha-item"><span className="cam-ficha-label">Año</span><span className="cam-ficha-valor">{torre.ano}</span></div>
                <div className="cam-ficha-item"><span className="cam-ficha-label">Autor</span><span className="cam-ficha-valor">{torre.autor}</span></div>
                <div className="cam-ficha-item"><span className="cam-ficha-label">Altura</span><span className="cam-ficha-valor">{torre.altura}</span></div>
                <div className="cam-ficha-item"><span className="cam-ficha-label">Estilo</span><span className="cam-ficha-valor">{torre.estilo}</span></div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="cam-info-box">
        <h3>Información práctica para la visita</h3>
        <ul className="cam-info-list">
          <li>Ambas torres tienen <strong>entrada gratuita</strong> todo el año</li>
          <li>Horario general: martes a sábado 10:00–19:00 h / domingos 10:00–14:00 h</li>
          <li>Las Torres de Quart son accesibles a pie desde las de Serranos en 10 minutos</li>
          <li>Los impactos de bala napoleónica en Quart son visibles en la fachada exterior</li>
          <li>Desde las terrazas de Serranos hay vistas al Jardín del Turia y el casco histórico</li>
          <li>Lunes cerrado en ambos monumentos</li>
        </ul>
      </div>

      <Footer />

    </div>
  );
}