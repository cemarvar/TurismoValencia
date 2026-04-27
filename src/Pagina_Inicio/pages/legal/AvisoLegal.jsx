import '../../assets/css/estilo_legal.css';
import Footer from '../../FOOTER/Footer';

export default function AvisoLegal() {
  return (
    <div className="legal-page">

      <div className="legal-hero">
        <div className="legal-hero-eyebrow">Turismo Valencia · Información legal</div>
        <h1>Aviso Legal</h1>
        <p>Condiciones de uso que regulan este sitio web</p>
      </div>

      <div className="legal-body">

        <p className="legal-date">Última actualización: <span>27 de abril de 2026</span></p>

        <div className="legal-section">
          <h2>1. Datos identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002 de Servicios de la Sociedad de la Información
            (LSSI-CE), el titular de este sitio web es <strong>Valencia Mejor Esta Vida</strong>, con
            domicilio en Calle Gran Vía 10, 46002 Valencia, España.
          </p>
          <p>Contacto: <strong>info@valenciaeslavida.com</strong> · +34 963 000 000</p>
        </div>

        <div className="legal-section">
          <h2>2. Condiciones de uso</h2>
          <p>
            El acceso y uso de este sitio implica la aceptación de las presentes condiciones. El usuario se
            compromete a hacer un uso correcto del portal conforme a la ley. Queda prohibido:
          </p>
          <ul>
            <li>Reproducir o distribuir los contenidos sin autorización expresa del titular.</li>
            <li>Utilizar el sitio con fines comerciales o publicitarios no autorizados.</li>
            <li>Introducir contenidos que vulneren derechos de terceros o la legislación vigente.</li>
            <li>Realizar acciones que dañen, sobrecarguen o deterioren el sitio web o sus sistemas.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>3. Propiedad intelectual e industrial</h2>
          <p>
            Todos los contenidos del sitio —textos, fotografías, vídeos, gráficos, logotipos y código fuente—
            son propiedad de <strong>Valencia Mejor Esta Vida</strong> o de terceros que han autorizado su uso,
            y están protegidos por la legislación de propiedad intelectual e industrial.
          </p>
          <p>
            Queda prohibida su reproducción, distribución o transformación sin autorización escrita del titular.
            El uso personal y no comercial está permitido siempre que se cite la fuente.
          </p>
        </div>

        <div className="legal-section">
          <h2>4. Contenidos del asistente virtual (IA)</h2>
          <p>
            Este portal incorpora un asistente virtual basado en inteligencia artificial con el objetivo de
            ofrecer información turística sobre Valencia. Las respuestas generadas son orientativas y pueden
            contener imprecisiones.
          </p>
          <div className="legal-note">
            Recomendamos contrastar la información del chatbot con fuentes oficiales antes de tomar decisiones
            de viaje (horarios, precios, disponibilidad). El titular no se responsabiliza de los errores
            generados automáticamente por el asistente.
          </div>
        </div>

        <div className="legal-section">
          <h2>5. Limitación de responsabilidad</h2>
          <p>El titular no responde por los daños derivados de:</p>
          <ul>
            <li>Interrupciones o fallos técnicos del servicio debidos a causas ajenas a su control.</li>
            <li>Desactualización de precios, horarios u otra información dependiente de terceros.</li>
            <li>El uso que los usuarios hagan de los contenidos del portal.</li>
            <li>Inexactitudes en la información generada por el asistente de inteligencia artificial.</li>
          </ul>
          <p>Los contenidos de este portal tienen carácter meramente orientativo y no constituyen asesoramiento profesional.</p>
        </div>

        <div className="legal-section">
          <h2>6. Política de enlaces</h2>
          <p>
            <strong>Salientes:</strong> los hipervínculos a páginas de terceros se facilitan solo a efectos informativos. El titular no controla ni responde de dichos sitios externos.
          </p>
          <p>
            <strong>Entrantes:</strong> para enlazar a este portal desde otro sitio, el enlace no podrá reproducirse dentro de frames que generen confusión sobre su origen ni afirmar que el titular avala al sitio enlazante.
          </p>
        </div>

        <div className="legal-section">
          <h2>7. Legislación aplicable</h2>
          <p>Las presentes condiciones se rigen por la legislación española, en particular:</p>
          <ul>
            <li>Ley 34/2002 de Servicios de la Sociedad de la Información (LSSI-CE).</li>
            <li>Reglamento (UE) 2016/679 de Protección de Datos (RGPD).</li>
            <li>Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).</li>
            <li>Texto Refundido de la Ley de Propiedad Intelectual (RDL 1/1996).</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>8. Resolución de litigios</h2>
          <p>
            Para cualquier conflicto derivado del uso del sitio, las partes se someten a los Juzgados y
            Tribunales de <strong>Valencia</strong>, con renuncia a cualquier otro fuero.
          </p>
          <p>
            Si eres consumidor en la UE, puedes acceder a la plataforma europea de resolución de litigios
            en línea (ODR) en <strong>ec.europa.eu/consumers/odr</strong>.
          </p>
        </div>

        <hr className="legal-divider" />
        <p className="legal-footer-note">
          ¿Tienes alguna consulta legal? Escríbenos a <strong>info@valenciaeslavida.com</strong>
        </p>

      </div>

      <Footer />
    </div>
  );
}
