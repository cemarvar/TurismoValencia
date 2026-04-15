import { useState } from 'react';
import '../../assets/cssPlanes/FiestasTradicionales.css';
import Footer from '../../FOOTER/Footer';

var fiestas = [
  {
    num: '01',
    mes: 'Enero',
    mesNum: '01',
    nombre: 'San Antonio Abad y la Cabalgata de Reyes',
    fecha: '5–17 de enero',
    tipo: 'Religiosa y popular',
    tipoClass: 'religiosa',
    desc: 'El ciclo navideño valenciano cierra con la Cabalgata de Reyes el 5 de enero, una de las más antiguas y emotivas de España, seguida de la festividad de San Antonio Abad el 17 de enero, cuando los animales domésticos son bendecidos en las puertas de las iglesias en un ritual que se mantiene vivo desde hace siglos en varios barrios de Valencia.',
    momentos: [
      { m: 'Cabalgata de Reyes', d: '5 de enero por la tarde: los Reyes Magos recorren las calles del centro' },
      { m: 'Bendición de animales', d: '17 de enero en iglesias de los barrios tradicionales de la ciudad' },
    ],
    gratuito: true,
    imgClass: 'img-FTreyes',
    tags: ['Enero', 'Familia', 'Tradición'],
  },
  {
    num: '02',
    mes: 'Febrero',
    mesNum: '02',
    nombre: 'San Vicente Mártir',
    fecha: '22 de enero (festividad) · Procesión en febrero',
    tipo: 'Religiosa',
    tipoClass: 'religiosa',
    desc: 'San Vicente Mártir es el patrón de Valencia y su festividad, el 22 de enero, se celebra con misa solemne en la Catedral y procesión por el centro histórico. El diácono valenciano Vicente fue martirizado en el siglo IV en el año 304. La Cripta de la Cárcel de San Vicente, bajo el Ayuntamiento, muestra los vestigios del lugar donde según la tradición estuvo prisionero.',
    momentos: [
      { m: 'Misa solemne en la Catedral', d: '22 de enero: celebración con asistencia de autoridades civiles y religiosas' },
      { m: 'Procesión por el centro', d: 'Recorrido por las calles históricas con la imagen del mártir' },
    ],
    gratuito: true,
    imgClass: 'img-FTsanvicente',
    tags: ['Enero', 'Religioso', 'Centro histórico'],
  },
  {
    num: '03',
    mes: 'Marzo',
    mesNum: '03',
    nombre: 'Las Fallas',
    fecha: '1–19 de marzo',
    tipo: 'Patrimonio UNESCO · Inmaterial 2016',
    tipoClass: 'unesco',
    desc: 'La fiesta más grande y explosiva del Mediterráneo. Del 1 al 19 de marzo, Valencia se convierte en un museo de arte efímero en la calle: más de 350 comisiones falleras plantan monumentos de hasta varios pisos que arden en la noche del 19. La mascletà retumba cada mediodía en la Plaza del Ayuntamiento, la Ofrenda de Flores moviliza más de 100.000 falleros y la Nit del Foc ilumina el cielo la madrugada del 18 al 19. Declaradas Patrimonio Cultural Inmaterial de la Humanidad por la UNESCO en 2016.',
    momentos: [
      { m: 'La Cridà', d: 'Último domingo de febrero: la fallera mayor proclama el inicio de las Fallas desde las Torres de Serranos' },
      { m: 'Mascletà', d: 'Del 1 al 19 de marzo a las 14:00 h en la Plaza del Ayuntamiento' },
      { m: 'Plantà', d: 'Noche del 15 al 16 de marzo: los monumentos se erigen en cada barrio' },
      { m: 'Ofrenda de Flores', d: 'Días 17 y 18: más de 100.000 falleros llevan flores a la Virgen de los Desamparados' },
      { m: 'Nit del Foc', d: 'Madrugada del 18 al 19: el mayor castillo de fuegos artificiales de España' },
      { m: 'La Cremà', d: 'Noche del 19 de marzo: todos los monumentos arden al unísono en cada barrio' },
    ],
    gratuito: true,
    imgClass: 'img-FTfallas',
    tags: ['Marzo', 'UNESCO', 'Pólvora', 'Arte efímero'],
  },
  {
    num: '04',
    mes: 'Abril',
    mesNum: '04',
    nombre: 'Semana Santa Marinera',
    fecha: 'Semana Santa (marzo o abril)',
    tipo: 'Religiosa · Bien de Interés Cultural',
    tipoClass: 'religiosa',
    desc: 'La Semana Santa más marinera de España se celebra en los barrios del Cabanyal, Canyamelar y Cap de França, los antiguos poblados de pescadores de Valencia. Sus procesiones son únicas: el Cristo Yacente de la Semana Santa Marinera, las figuras de vestir y el ambiente íntimo de los barrios pescadores le dan un carácter diferente a las procesiones del interior. Declarada Bien de Interés Cultural.',
    momentos: [
      { m: 'Procesión del Encuentro', d: 'Domingo de Ramos: inicio de los actos en los barrios marineros' },
      { m: 'Cristo Yacente', d: 'Viernes Santo: la procesión más emotiva, con el Cristo Yacente por las calles del Cabanyal' },
      { m: 'Procesión de la Soledad', d: 'Sábado Santo: la Virgen de la Soledad recorre los barrios en silencio' },
    ],
    gratuito: true,
    imgClass: 'img-FTsemanasanta',
    tags: ['Semana Santa', 'Marinero', 'Procesiones'],
  },
  {
    num: '05',
    mes: 'Mayo',
    mesNum: '05',
    nombre: 'Virgen de los Desamparados y San Vicente Ferrer',
    fecha: '2º domingo de mayo · Lunes después de Pascua',
    tipo: 'Religiosa · Patrona de Valencia',
    tipoClass: 'religiosa',
    desc: 'El segundo domingo de mayo, Valencia celebra a su patrona con la magna procesión de la Virgen de los Desamparados desde la Basílica hasta la Catedral. Es uno de los actos religiosos más multitudinarios y emotivos de la ciudad. Pocos días antes, el lunes de Pascua, se celebra la festividad de San Vicente Ferrer con los populares Misteris de Sant Vicent: teatralizaciones en altares callejeros de los milagros del santo dominico valenciano del siglo XIV.',
    momentos: [
      { m: 'Misteris de Sant Vicent', d: 'Lunes de Pascua: nueve escenificaciones de milagros del santo en las calles del centro' },
      { m: 'Traslado de la Virgen', d: '2º domingo de mayo: procesión de la Basílica a la Catedral ante miles de fieles' },
      { m: 'La Seua', d: 'La canción a la Virgen entonada por la multitud en la Plaza de la Virgen' },
    ],
    gratuito: true,
    imgClass: 'img-FTvirgen',
    tags: ['Mayo', 'Patrona', 'Procesión', 'Multitudinaria'],
  },
  {
    num: '06',
    mes: 'Junio',
    mesNum: '06',
    nombre: 'Corpus Christi',
    fecha: '60 días después de Pascua (mayo o junio)',
    tipo: 'Religiosa · Tradición medieval',
    tipoClass: 'religiosa',
    desc: 'La procesión del Corpus Christi de Valencia es una de las más antiguas e importantes de España, con un cortejo que incorpora elementos únicos desde el siglo XIV: las rocas o carrozas procesionales —custodias en el Museo del Corpus—, la Moma y los Misteris, personajes alegóricos que representan el triunfo del bien sobre el mal. Recorre el casco histórico en un espectáculo medieval irrepetible.',
    momentos: [
      { m: 'Las Rocas', d: 'Carrozas procesionales medievales del siglo XIV que recorren el centro histórico' },
      { m: 'La Moma', d: 'Personaje alegórico que representa el bien persiguiendo y venciendo a los vicios' },
      { m: 'La Procesión General', d: 'El cortejo completo recorre el casco histórico al atardecer' },
    ],
    gratuito: true,
    imgClass: 'img-FTcorpus',
    tags: ['Junio', 'Medieval', 'Tradición', 'Religioso'],
  },
  {
    num: '07',
    mes: 'Julio',
    mesNum: '07',
    nombre: 'Gran Fira de València',
    fecha: 'Todo el mes de julio',
    tipo: 'Festiva y popular · Un mes de fiesta',
    tipoClass: 'popular',
    desc: 'Durante todo el mes de julio Valencia celebra su Gran Feria con una agenda inagotable de conciertos, corridas de toros, la batalla de flores, el festival de bandas y las noches de teatro y espectáculos al aire libre en los Jardines de Viveros. La Batalla de Flores, en la que las carrozas se lanzan pétalos entre sí en el Paseo de la Alameda, es el acto más fotogénico y alegre de la feria.',
    momentos: [
      { m: 'Batalla de Flores', d: 'Último domingo de julio: carrozas adornadas y pétalos de flores en el Paseo de la Alameda' },
      { m: 'Noches de teatro', d: 'Espectáculos gratuitos al aire libre en los Jardines de Viveros durante todo julio' },
      { m: 'Conciertos', d: 'Festival de música con artistas nacionales e internacionales en distintas sedes' },
      { m: 'Mascletà fallera', d: 'Algunos días de julio también hay mascletà en la Plaza del Ayuntamiento' },
    ],
    gratuito: true,
    imgClass: 'img-FTferia',
    tags: ['Julio', 'Flores', 'Conciertos', 'Un mes'],
  },
  {
    num: '08',
    mes: 'Octubre',
    mesNum: '10',
    nombre: '9 d\'Octubre · Día de la Comunitat Valenciana',
    fecha: '9 de octubre',
    tipo: 'Festiva · Día nacional valenciano',
    tipoClass: 'popular',
    desc: 'El 9 de octubre de 1238, el rey Jaume I de Aragón entró en Valencia con sus tropas y la ciudad fue reconquistada a los musulmanes. Ese día, declarado fiesta nacional de la Comunitat Valenciana, se celebra con una gran procesión cívica, la Processó Cívica, que recorre el centro histórico con personalidades, bandas de música y representaciones de la historia valenciana. Los actos incluyen la entrega de premios Jaume I.',
    momentos: [
      { m: 'Processó Cívica', d: 'Desfile cívico por el centro histórico con autoridades, bandas y colectivos valencianos' },
      { m: 'Entrega de premios Jaume I', d: 'Gala de los premios más importantes de la Comunitat Valenciana' },
      { m: 'Actos en la Plaza de la Virgen', d: 'Ofrenda floral y discursos institucionales en el corazón de la ciudad' },
    ],
    gratuito: true,
    imgClass: 'img-FT9octubre',
    tags: ['Octubre', 'Día nacional', 'Historia', 'Cívico'],
  },
  {
    num: '09',
    mes: 'Diciembre',
    mesNum: '12',
    nombre: 'Navidad en Valencia',
    fecha: 'Diciembre – 6 de enero',
    tipo: 'Festiva y familiar',
    tipoClass: 'popular',
    desc: 'El ciclo navideño valenciano tiene su propio ritmo mediterráneo: el encendido de luces a finales de noviembre, el gran árbol de Navidad en la Plaza del Ayuntamiento, el mercado tradicional con turrones y artesanía, la Feria del Juguete en Expojove, los conciertos de villancicos en el Palau de la Música y la Cabalgata de Reyes el 5 de enero, una de las más antiguas de España.',
    momentos: [
      { m: 'Encendido de luces', d: 'Finales de noviembre: más de 800.000 luces iluminan el centro histórico' },
      { m: 'Mercado navideño', d: 'Plaza del Ayuntamiento: artesanía, turrones y figuras de belén todo diciembre' },
      { m: 'Expojove', d: 'La mayor feria del juguete de España, un evento familiar imprescindible' },
      { m: 'Cabalgata de Reyes', d: '5 de enero: una de las cabalgatas más antiguas y emotivas de España' },
    ],
    gratuito: true,
    imgClass: 'img-FTnavidad',
    tags: ['Diciembre', 'Familia', 'Luces', 'Mercado'],
  },
];

export default function FiestasTradicionales() {
  const [filtroActivo, setFiltroActivo] = useState('Todas');
  const filtros = ['Todas', 'UNESCO', 'Religiosa', 'Popular'];

  const fiestasFiltradas = filtroActivo === 'Todas'
    ? fiestas
    : fiestas.filter(f =>
        filtroActivo === 'UNESCO' ? f.tipoClass === 'unesco'
        : filtroActivo === 'Religiosa' ? f.tipoClass === 'religiosa'
        : f.tipoClass === 'popular'
      );

  return (
    <div className="ft-page">

      {/* Hero */}
      <div className="ft-hero">
        <div className="ft-hero-overlay" />
        <div className="ft-hero-content">
          <div className="ft-eyebrow">Valencia · Tradición · Todo el año</div>
          <h1>Fiestas y<br />tradiciones</h1>
          <p>Valencia celebra durante todo el año fiestas populares y religiosas donde se mezclan el rito y el ingenio, la pólvora, las flores, la música y el fuego purificador.</p>
        </div>
        <div className="ft-hero-stats">
          <div className="ft-stat">
            <span className="ft-stat-num">9</span>
            <span className="ft-stat-label">fiestas</span>
          </div>
          <div className="ft-stat-sep" />
          <div className="ft-stat">
            <span className="ft-stat-num">3</span>
            <span className="ft-stat-label">UNESCO</span>
          </div>
          <div className="ft-stat-sep" />
          <div className="ft-stat">
            <span className="ft-stat-num">365</span>
            <span className="ft-stat-label">días de fiesta</span>
          </div>
        </div>
      </div>

      {/* Intro */}
      <div className="ft-intro">
        <p>El carácter extrovertido y bullicioso de los valencianos se manifiesta en un calendario festivo único: fiestas religiosas y profanas que se celebran mayoritariamente en la calle, donde se mezclan rituales, creatividad, pólvora, música y flores. Tres de sus tradiciones han merecido el reconocimiento de la UNESCO como Patrimonio Cultural Inmaterial de la Humanidad.</p>
        <p>Todas las fiestas que encontrarás aquí son de <strong>acceso gratuito</strong>. Forman parte de la identidad de la ciudad y están abiertas a cualquiera que quiera vivirlas.</p>
      </div>

      {/* Filtros */}
      <div className="ft-filter-bar">
        {filtros.map(f => (
          <button
            key={f}
            className={`ft-pill ${filtroActivo === f ? 'active' : ''}`}
            onClick={() => setFiltroActivo(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Fichas de fiestas */}
      <div className="ft-routes">
        {fiestasFiltradas.map(fiesta => (
          <div className="ft-route-item" key={fiesta.num}>
            <div className="ft-route-num">{fiesta.num}</div>

            <div className="ft-route-text">
              <div className="ft-meta-row">
                <span className={`ft-tipo-badge ${fiesta.tipoClass}`}>{fiesta.tipo}</span>
                <span className="ft-fecha"> {fiesta.fecha}</span>
              </div>
              <h2>{fiesta.nombre}</h2>
              <p className="ft-desc">{fiesta.desc}</p>

              <div className="ft-momentos-titulo">Momentos clave</div>
              <ul className="ft-momentos">
                {fiesta.momentos.map(m => (
                  <li key={m.m}>
                    <span className="ft-momento-nombre">{m.m}:</span>
                    <span className="ft-momento-desc"> {m.d}</span>
                  </li>
                ))}
              </ul>

              <div className="ft-tags">
                {fiesta.gratuito && <span className="ft-tag free">Gratuito</span>}
                {fiesta.tags.map(t => (
                  <span key={t} className="ft-tag">{t}</span>
                ))}
              </div>

            </div>

            <div className="ft-route-col">
              <div className="ft-mes-label">{fiesta.mes}</div>
              <div className="ft-route-img">
                <div className={`ft-route-img-inner ${fiesta.imgClass}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info box */}
      <div className="ft-info-box">
        <h3>Lo que debes saber antes de vivir las fiestas de Valencia</h3>
        <ul className="ft-info-list">
          <li>Todas las fiestas principales son de <strong>acceso libre y gratuito</strong></li>
          <li>Las Fallas son el evento más concurrido: reserva alojamiento con <strong>meses de antelación</strong></li>
          <li>Durante las Fallas, el transporte público funciona con horarios especiales ampliados</li>
          <li>La Ofrenda de Flores (17–18 marzo) es imprescindible: llega con tiempo para ver el desfile</li>
          <li>La mascletà empieza exactamente a las <strong>14:00 h</strong> en la Plaza del Ayuntamiento</li>
          <li>La Batalla de Flores en julio: lleva ropa que no te importe manchar con pétalos</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}