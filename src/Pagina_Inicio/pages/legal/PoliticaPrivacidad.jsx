import '../../assets/css/estilo_legal.css';
import Footer from '../../FOOTER/Footer';

export default function PoliticaPrivacidad() {
  return (
    <div className="legal-page">

      <div className="legal-hero">
        <div className="legal-hero-eyebrow">Turismo Valencia · Información legal</div>
        <h1>Política de Privacidad</h1>
        <p>Transparencia total sobre cómo tratamos tus datos personales</p>
      </div>

      <div className="legal-body">

        <p className="legal-date">Última actualización: <span>27 de abril de 2026</span></p>

        <div className="legal-section">
          <h2>1. Responsable del tratamiento</h2>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD),
            el responsable del tratamiento de tus datos es <strong>Valencia Mejor Esta Vida</strong>,
            con domicilio en Calle Gran Vía 10, 46002 Valencia, España.
          </p>
          <p>Contacto para asuntos de privacidad: <strong>privacidad@valenciaeslavida.com</strong></p>
        </div>

        <div className="legal-section">
          <h2>2. Datos que recopilamos</h2>
          <p>Dependiendo de cómo uses el sitio, podemos recopilar:</p>
          <ul>
            <li><strong>Datos de navegación:</strong> dirección IP, navegador, páginas visitadas y duración de la visita.</li>
            <li><strong>Datos de contacto:</strong> nombre, correo y mensaje cuando rellenas el formulario.</li>
            <li><strong>Consultas al chatbot:</strong> las preguntas realizadas al asistente virtual.</li>
            <li><strong>Cookies:</strong> ficheros en tu dispositivo para mejorar la experiencia de navegación.</li>
          </ul>
          <p>No recopilamos datos especialmente sensibles ni datos de menores sin consentimiento parental.</p>
        </div>

        <div className="legal-section">
          <h2>3. Finalidad del tratamiento</h2>
          <ul>
            <li>Responder las consultas enviadas a través del formulario o el chatbot.</li>
            <li>Mejorar el sitio web mediante análisis estadístico anónimo de la navegación.</li>
            <li>Enviarte información turística si nos has dado tu consentimiento expreso.</li>
            <li>Cumplir con las obligaciones legales que nos resulten de aplicación.</li>
          </ul>
          <div className="legal-note">
            <strong>Importante:</strong> nunca usaremos tus datos con fines publicitarios de terceros ni los venderemos a ninguna empresa externa.
          </div>
        </div>

        <div className="legal-section">
          <h2>4. Base jurídica</h2>
          <ul>
            <li><strong>Consentimiento (art. 6.1.a RGPD):</strong> aceptación de cookies no esenciales o suscripción a comunicaciones.</li>
            <li><strong>Ejecución contractual (art. 6.1.b RGPD):</strong> gestión de reservas o compras de entradas.</li>
            <li><strong>Interés legítimo (art. 6.1.f RGPD):</strong> análisis estadístico anónimo para mejora del servicio.</li>
            <li><strong>Obligación legal (art. 6.1.c RGPD):</strong> conservación de datos exigida por normativa.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>5. Conservación de los datos</h2>
          <ul>
            <li><strong>Formulario de contacto:</strong> hasta resolver la consulta y como máximo 2 años.</li>
            <li><strong>Cookies de análisis:</strong> nunca más de 2 años.</li>
            <li><strong>Datos de transacciones:</strong> 5 años conforme a la normativa fiscal.</li>
            <li><strong>Consultas al chatbot:</strong> sesión activa más 90 días para control de calidad.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>6. Destinatarios</h2>
          <p>No cedemos tus datos a terceros salvo en los siguientes supuestos:</p>
          <ul>
            <li><strong>Proveedores tecnológicos</strong> (alojamiento, analítica) bajo contrato de confidencialidad y como encargados del tratamiento.</li>
            <li><strong>Administraciones públicas</strong> cuando la ley nos obligue (requerimientos judiciales o tributarios).</li>
            <li><strong>Google LLC</strong> para Google Analytics, con transferencia cubierta por cláusulas contractuales estándar de la UE.</li>
          </ul>
        </div>

        <div className="legal-section">
          <h2>7. Tus derechos</h2>
          <p>Puedes ejercer en cualquier momento los derechos de <strong>acceso, rectificación, supresión, limitación, portabilidad y oposición</strong> enviando un correo a <strong>privacidad@valenciaeslavida.com</strong> con copia de tu documento de identidad.</p>
          <p>Si consideras que vulneramos tus derechos, puedes reclamar ante la <strong>Agencia Española de Protección de Datos (AEPD)</strong> en <em>www.aepd.es</em>.</p>
        </div>

        <div className="legal-section">
          <h2>8. Cookies</h2>
          <ul>
            <li><strong>Cookies técnicas (esenciales):</strong> necesarias para la navegación. No requieren consentimiento.</li>
            <li><strong>Cookies de análisis:</strong> Google Analytics para estadísticas anónimas. Requieren consentimiento.</li>
            <li><strong>Cookies de preferencias:</strong> recuerdan el idioma y configuración elegida.</li>
          </ul>
          <p>Puedes configurar o rechazar las cookies no esenciales en el banner de cookies o en la configuración de tu navegador.</p>
        </div>

        <div className="legal-section">
          <h2>9. Menores de edad</h2>
          <p>
            Nuestro sitio está dirigido a mayores de 14 años. Si eres padre/madre o tutor y crees que tu hijo/a nos ha proporcionado datos sin tu consentimiento, contáctanos en <strong>privacidad@valenciaeslavida.com</strong> para proceder a su eliminación inmediata.
          </p>
        </div>

        <div className="legal-section">
          <h2>10. Cambios en esta política</h2>
          <p>
            Podemos actualizar esta política para reflejar cambios normativos o mejoras en nuestra gestión de datos. Publicaremos la nueva versión en esta página con la fecha de actualización visible. Si los cambios son significativos, te notificaremos por correo electrónico.
          </p>
        </div>

        <hr className="legal-divider" />
        <p className="legal-footer-note">
          ¿Tienes dudas sobre privacidad? Escríbenos a <strong>privacidad@valenciaeslavida.com</strong>
        </p>

      </div>

      <Footer />
    </div>
  );
}
