import "../assets/css/map.css";
import "../assets/css/estilo_footer.css";
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div className="container" id="contacto">

      <section className="Map">
        <Map />
      </section>

      <footer className="footer">
        <div className="footer-inner">

          {/* Columna 1 — Marca */}
          <div className="footer-col footer-brand">
            <h3 className="footer-logo">
              <span>Valencia</span> Mejor esta vida
            </h3>
            <p className="footer-desc">
              Descubre la ciudad del sol, la paella y las fiestas. Tu guía de viaje en Valencia.
            </p>
          </div>

          {/* Columna 2 — Contacto */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contacto</h4>
            <ul className="footer-list">
              <li><FontAwesomeIcon icon={faCalendarDays} /> Lun - Vie: 9:00 - 18:00</li>
              <li><FontAwesomeIcon icon={faPhone} /> +34 963 000 000</li>
              <li><FontAwesomeIcon icon={faEnvelope} /> info@valencia.com</li>
              <li><FontAwesomeIcon icon={faLocationDot} /> Valencia, España</li>
            </ul>
          </div>

          {/* Columna 3 — Redes */}
          <div className="footer-col">
            <h4 className="footer-col-title">Síguenos</h4>
            <ul className="footer-list footer-socials">
              <li><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</li>
              <li><FontAwesomeIcon icon={faFacebook} /> Facebook</li>
              <li><FontAwesomeIcon icon={faSquareInstagram} /> Instagram</li>
              <li><FontAwesomeIcon icon={faTwitter} /> X</li>
            </ul>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="footer-bottom">
          <span>© 2026 Valencia · Todos los derechos reservados</span>
        </div>
        <div className="footer-links">
          <span>Política de privacidad</span> &nbsp;·&nbsp; <span>Aviso legal</span>
        </div>
      </footer>

    </div>
  );
}