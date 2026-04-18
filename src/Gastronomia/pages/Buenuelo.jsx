import '../assets/css/Buenuelo.css';
import Footer from '../../Pagina_Inicio/FOOTER/Footer';

var secciones = [
  {
    num: '01',
    nombre: 'Bunyol de Carabassa · El Dulce de las Fallas',
    subtitulo: 'Buñuelo de calabaza · Agujero central · Cono de papel · Con chocolate caliente',
    desc: 'El buñuelo de calabaza —bunyol de carabassa en valenciano— es el postre más fallero de la gastronomía valenciana. Imposible imaginar unas Fallas sin el olor a aceite caliente, sin los conos de cartón llenos de buñuelos recién fritos y sin el chocolate espeso que los acompaña. Son esponjosos por dentro, ligeramente crujientes por fuera, dulces y anaranjados gracias a la calabaza de la huerta valenciana. Su forma de rosquilla con agujero en el centro es característica e inconfundible: ese "foraet" (agujero) nace de la forma en que el buñolero coge la masa con los dedos untados en aceite y la deja caer al aceite caliente. Se comen recién hechos, rebozados en azúcar, en un cono de papel, mientras la ciudad arde en Fallas. Pero también los 365 días del año en las buñolerías y chocolaterías con más historia de Valencia.',
    dato: 'Temporada principal: Fallas (1–19 marzo) · También: Todos los Santos, Navidades y todo el año en buñolerías',
    imgClass: 'img-bun-platobl',
    tags: [{ label: 'Bunyol de carabassa' }, { label: 'Fallas' }, { label: 'Con chocolate' }],
  },
  {
    num: '02',
    nombre: 'Las Buñoleras · Las Pioneras del Dulce Fallero',
    subtitulo: 'Siglo XIX · Gremio de carpinteros · Bidones de hierro · Buñuelos de viento',
    desc: 'La historia del buñuelo de calabaza comienza en el siglo XIX, cuando el gremio de carpinteros de Valencia obtuvo permiso del Ayuntamiento para sacar sus sobrantes de madera a la calle y quemarlos en hogueras el día de San José. Fue el origen de las Fallas. Alrededor de aquellas primeras hogueras, las mujeres de los carpinteros —las primeras buñoleras, descritas como "repeinadas, muy aseadas y con impolutos delantales blancos"— colocaban bidones de hierro a modo de fogón, calentaban aceite con leña y preparaban buñuelos de viento para los asistentes. Aquellos primeros buñuelos seguían una antigua receta simple: harina, agua, levadura y sal, fritos en aceite. Los vecinos los tomaban con anís o aguardiente, no con chocolate. Años después, los campesinos de la huerta empezaron a incorporar la calabaza de temporada —que aguanta meses almacenada— para dar al buñuelo un toque más dulce. Así nació el bunyol de carabassa que hoy conocemos.',
    dato: 'Origen: siglo XIX · Primera buñolera: gremio de carpinteros de Valencia · Primero con anís, después con chocolate',
    imgClass: 'img-bun-historiabl',
    tags: [{ label: 'Siglo XIX' }, { label: 'Las buñoleras' }, { label: 'Origen fallero' }],
  },
  {
    num: '03',
    nombre: 'La Receta · Calabaza, Naranja y Agua de Azahar',
    subtitulo: 'Calabaza cocida · Levadura de panadero · Ralladura de naranja · Agua de azahar · Aceite de freír',
    desc: 'La masa de los buñuelos de calabaza valencianos es sencilla pero aromática. La calabaza se cuece hasta que queda tierna, se escurre y se aplasta con un tenedor hasta obtener una masa suave. A esa pasta se le añaden el azúcar, el agua de azahar y la ralladura de naranja —los aromas más valencianos que existen—, la levadura fresca disuelta en el agua de la cocción (que conserva sus nutrientes), y finalmente la harina tamizada. La masa resultante debe reposar unos 15 minutos para que la levadura haga su trabajo. Para freír, los dedos se untan en aceite para que la masa no se pegue, se coge una porción, se forma una bola y se hace el agujero central con el pulgar antes de dejarla caer en el aceite muy caliente. Se doran por ambos lados, se escurren y se rebozan en azúcar al momento. Se sirven calientes, en cono de papel.',
    dato: 'Para 7 unidades: 200 g calabaza · 225 g harina · 12 g levadura fresca · agua de azahar · ralladura naranja · azúcar',
    imgClass: 'img-bun-masabl',
    tags: [{ label: 'Agua de azahar' }, { label: 'Levadura fresca' }, { label: 'Ralladura de naranja' }],
  },
  {
    num: '04',
    nombre: 'El Agujero · El Arte del Foraet',
    subtitulo: 'La forma característica · Dedos untados en aceite · La técnica del buñolero',
    desc: 'El agujero central —el "foraet"— es la seña de identidad del buñuelo valenciano. No es solo un detalle estético: tiene su razón técnica. Al hundir el pulgar en el centro de la masa antes de sumergirla en el aceite, la fritura es más uniforme y el interior queda más esponjoso. La técnica parece simple pero tiene su arte: los dedos deben estar bien untados en aceite para que la masa no se pegue, la bola debe tener el tamaño justo para que la cocción sea correcta, y el agujero debe hacerse con decisión para que mantenga la forma durante la fritura. El aceite debe estar muy caliente pero no quemante —si humea, el buñuelo se dora por fuera antes de cocinarse por dentro. Este gesto —masa en la mano, agujero, aceite— es lo que convierte al buñolero en artesano. En los puestos callejeros durante las Fallas, los buñoleros hacen cientos por hora con una destreza que solo da la práctica.',
    dato: 'Aceite muy caliente · Dedos untados · Agujero central con el pulgar · Dorar por ambos lados · Rebozan en azúcar caliente',
    imgClass: 'img-bun-foraetbl',
    tags: [{ label: 'El foraet' }, { label: 'Técnica artesana' }, { label: 'Arte del buñolero' }],
  },
  {
    num: '05',
    nombre: 'Variantes · Más Allá de la Calabaza',
    subtitulo: 'Naranja · Boniato · Higo · Horchata · Vainilla · Buñuelos de viento clásicos',
    desc: 'La receta de calabaza es la estrella, pero el mundo de los buñuelos valencianos tiene muchas variantes. Los buñuelos de naranja aprovechan el ácido cítrico de la fruta —que repele el aceite— para conseguir un buñuelo más ligero. Los de boniato son una alternativa de otoño con un sabor más dulce y terroso. Los de higo son los más aromáticos. Los de horchata son la innovación más valenciana posible: la leche de chufa en la masa. Y los buñuelos de viento clásicos —sin calabaza— son los originales del siglo XIX: harina, agua, levadura y sal, crujientes y ligeros, con una tradición romana que llega hasta nuestros días. Las versiones más modernas incluyen coberturas de chocolate blanco o negro. También hay recetas que añaden canela, vainilla, cardamomo o clavos de olor para personalizar el dulce.',
    dato: 'Variantes: naranja · boniato · higo · horchata · vainilla · viento clásico · Nuevas: con cobertura de chocolate',
    imgClass: 'img-bun-variantesbl',
    tags: [{ label: 'Buñuelo de naranja' }, { label: 'De boniato' }, { label: 'De viento clásico' }],
  },
];

var bunolerías = [
  {
    nombre: 'Buñolería El Contraste',
    desc: 'Cinco generaciones. Institución del barrio de Ruzafa. Su propietario Mariano Catalán cocinó buñuelos en el Central Park de Nueva York en 2006. Los hacen durante todo el año.',
    dir: 'Calle San Valero, 12 · Ruzafa',
  },
  {
    nombre: 'Chocolatería Dr. Collado',
    desc: 'Desde 1892. Chocolate espeso y buñuelos crujientes protagonistas. En Fallas se forma una larga cola a su puerta que vale la pena. Una de las más veteranas de la ciudad.',
    dir: 'Calle Ercilla, 13 · Centro',
  },
  {
    nombre: 'Horchatería Santa Catalina',
    desc: 'En la emblemática Plaza de Santa Catalina. Buñuelos de calabaza y chocolate clásico en uno de los rincones más bonitos del centro histórico de Valencia.',
    dir: 'Plaza Santa Catalina, 6 · Centro histórico',
  },
  {
    nombre: 'Bertal · Chocolatería Valor',
    desc: 'Dos clásicos de la Plaza de la Reina para combinar buñuelos con un buen chocolate caliente en el corazón de Valencia.',
    dir: 'Plaza de la Reina, 12 y 20 · Centro',
  },
  {
    nombre: 'Bienve · Vilamarxant',
    desc: 'Su fama traspasa barrios y generaciones. El secreto: calabazas naturales cultivadas en Vilamarxant, seleccionadas año tras año. La calabaza de verdad.',
    dir: 'Avenida Regne de València, 24',
  },
  {
    nombre: 'Els Tonets · El Carmen',
    desc: 'En el corazón del barrio del Carmen. Parada obligatoria para quienes buscan el sabor auténtico del buñuelo recién hecho en el centro histórico.',
    dir: 'Calle Sant Dionís, 1 · El Carmen',
  },
];

var claves = [
  { clave: 'Agua de cocción de la calabaza', desc: 'Usar el agua donde se coció la calabaza para disolver la levadura — tiene más nutrientes y sabor' },
  { clave: 'El reposo de 15 minutos', desc: 'Dejar reposar la masa tapada es clave — la levadura actúa y el buñuelo queda más esponjoso' },
  { clave: 'Dedos bien untados en aceite', desc: 'Sin aceite en los dedos la masa se pega y el buñuelo pierde la forma antes de caer al aceite' },
  { clave: 'Aceite muy caliente', desc: 'El aceite debe estar caliente pero sin humear — si humea, el exterior se quema antes de cocinarse el interior' },
  { clave: 'Rebozan en azúcar en caliente', desc: 'El azúcar se adhiere mucho mejor cuando el buñuelo está caliente — no esperes a que se enfríe' },
  { clave: 'Comerlos recién hechos', desc: 'El buñuelo es mejor recién frito — si sobran, guardar en recipiente hermético para que no pierdan textura' },
];

export default function Buenuelo() {
  return (
    <div className="bun-page">

      {/* Hero */}
      <div className="bun-hero">
        <div className="bun-hero-overlay" />
        <div className="bun-hero-content">
          <div className="bun-eyebrow">Gastronomía · Bunyol de Carabassa · El postre más fallero de Valencia</div>
          <h1>Buñuelos de<br />Calabaza</h1>
          <p>El olor que define las Fallas de Valencia. Esponjosos por dentro, crujientes por fuera, rebozados en azúcar y con chocolate caliente. El dulce más valenciano, nacido de las primeras hogueras del siglo XIX.</p>
        </div>
        <div className="bun-hero-stats">
          <div className="bun-stat">
            <span className="bun-stat-num">S. XIX</span>
            <span className="bun-stat-label">origen fallero</span>
          </div>
          <div className="bun-stat-sep" />
          <div className="bun-stat">
            <span className="bun-stat-num">45 min</span>
            <span className="bun-stat-label">de elaboración</span>
          </div>
          <div className="bun-stat-sep" />
          <div className="bun-stat">
            <span className="bun-stat-num">+Choco</span>
            <span className="bun-stat-label">chocolate caliente</span>
          </div>
        </div>
      </div>

      {/* Historia box */}
      <div className="bun-historia-box">
        <div className="bun-historia-content">
          <div className="bun-historia-titulo">De las hogueras del gremio a los puestos callejeros de las Fallas</div>
          <p>La historia del buñuelo valenciano arranca en el siglo XIX, cuando el gremio de carpinteros de Valencia empezó a quemar sus sobrantes de madera el día de San José —el germen de las Fallas. Alrededor de aquellas primeras hogueras, las <strong>buñoleras</strong> —las mujeres del gremio— sacaban grandes bidones de hierro y preparaban buñuelos de viento con una receta romana básica: harina, agua, levadura y sal. Los vecinos los tomaban con <em>anís o aguardiente</em>, no con chocolate. Con el tiempo, los campesinos de la huerta incorporaron la <strong>calabaza de temporada</strong> —que aguanta meses sin estropearse— para dar al buñuelo más dulzura y color. Los bidones de hierro se convirtieron en puestos callejeros con cocinas de gas. El anís se sustituyó por chocolate caliente. Y el bunyol de carabassa se convirtió en el símbolo gastronómico más reconocible de las Fallas, Patrimonio Inmaterial de la Humanidad desde 2017.</p>
        </div>
      </div>

      {/* Intro */}
      <div className="bun-intro">
        <p>El buñuelo de calabaza es el único dulce que Valencia ha convertido en símbolo de toda una fiesta. Durante las Fallas —del 1 al 19 de marzo— la ciudad entera huele a aceite caliente y calabaza frita. Los puestos de buñuelos se convierten en puntos de encuentro, en paradas obligadas, en el pretexto perfecto para quedarse charlando al lado de la hoguera con un cono en la mano y una taza de chocolate caliente en la otra.</p>
        <p>La receta es sencilla pero tiene sus secretos. El agua de azahar y la ralladura de naranja son los aromas que distinguen el buñuelo valenciano de cualquier otro. La levadura fresca garantiza esa textura esponjosa interior. Y la calabaza —preferiblemente de la huerta valenciana, de Vilamarxant si es posible— da el color anaranjado y el dulzor natural que hace que una vez pruebes uno, sea muy difícil parar.</p>
      </div>

      {/* Section title */}
      <div className="bun-section-title">
        <h2>Todo sobre el bunyol de carabassa</h2>
        <p>Historia, receta, el arte del foraet y todas las variantes del dulce más fallero de Valencia.</p>
      </div>

      {/* Secciones */}
      <div className="bun-routes">
        {secciones.map(s => (
          <div className="bun-route-item" key={s.num}>
            <div className="bun-route-num">{s.num}</div>

            <div className="bun-route-text">
              <h2>{s.nombre}</h2>
              <div className="bun-subtitulo">{s.subtitulo}</div>
              <p className="bun-desc">{s.desc}</p>

              <div className="bun-dato-box">
                <span>{s.dato}</span>
              </div>

              <div className="bun-tags">
                {s.tags.map(t => (
                  <span key={t.label} className="bun-tag">{t.label}</span>
                ))}
              </div>
            </div>

            <div className="bun-route-img">
              <div className={`bun-route-img-inner ${s.imgClass}`} />
            </div>
          </div>
        ))}
      </div>

      {/* Claves */}
      <div className="bun-claves-wrap">
        <h3>Las 6 claves del buñuelo perfecto</h3>
        <div className="bun-claves-grid">
          {claves.map((c, i) => (
            <div className="bun-clave-item" key={c.clave}>
              <span className="bun-clave-num">0{i + 1}</span>
              <div>
                <div className="bun-clave-titulo">{c.clave}</div>
                <div className="bun-clave-desc">{c.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Buñolerías */}
      <div className="bun-rest-wrap">
        <h3>Dónde comer buñuelos en Valencia</h3>
        <div className="bun-rest-grid">
          {bunolerías.map(b => (
            <div className="bun-rest-card" key={b.nombre}>
              <div className="bun-rest-nombre">{b.nombre}</div>
              <div className="bun-rest-dir"> {b.dir}</div>
              <p className="bun-rest-desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Info box */}
      <div className="bun-info-box">
        <h3>Lo que debes saber de los buñuelos valencianos</h3>
        <ul className="bun-info-list">
          <li>El <strong>chocolate caliente</strong> es el acompañamiento obligatorio — espeso, no líquido, para mojar el buñuelo</li>
          <li>Durante las <strong>Fallas</strong> (1–19 de marzo) los puestos callejeros los sirven todo el día en conos de papel por toda Valencia</li>
          <li>La <strong>calabaza de Vilamarxant</strong> es la más valorada para los buñuelos valencianos — su dulzor natural es incomparable</li>
          <li><strong>Buñolería El Contraste</strong> (Ruzafa) es la única que los hace durante todo el año — cinco generaciones de tradición</li>
          <li>El <strong>agujero central</strong> no es decorativo — garantiza una fritura más uniforme y un interior más esponjoso</li>
          <li>Se pueden encontrar todo el año también en <strong>Todos los Santos y Navidades</strong> — no solo en Fallas</li>
        </ul>
      </div>

      <Footer />
    </div>
  );
}