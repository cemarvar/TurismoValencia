import "../assets/css/map.css";
import "../assets/css/estilo_footer.css";
import Map from './Map';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCalendarDays, 
  faPhone, 
  faEnvelope, 
  faLocationDot 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faLinkedin, 
  faFacebook, 
  faSquareInstagram, 
  faTwitter 
} from '@fortawesome/free-brands-svg-icons';


export default function Footer() 
{
  return (

    <div className="container" id="contacto">
      <section className="Map">
        <Map />
      </section>
      <div className="container_footer" >
        <div className='txt_contact'>
           <h2>Contacto</h2>
        </div>
        <div className='contact'>
          <p className="horario">Horario<FontAwesomeIcon icon={faCalendarDays} /></p>
          <p className="telefono">Teléfono <FontAwesomeIcon icon={faPhone} /></p>
          <p className="email">Email <FontAwesomeIcon icon={faEnvelope} /></p>
          <p className="direccion">Dirección <FontAwesomeIcon icon={faLocationDot} /></p>
        </div>
        <div className="socials">
          <p className="linkedin">LinkedIn <FontAwesomeIcon icon={faLinkedin} /></p>
          <p className="facebook">Facebook <FontAwesomeIcon icon={faFacebook} /></p>
          <p className="instagram">Instagram <FontAwesomeIcon icon={faSquareInstagram}  /></p>
          <p className="x">X <FontAwesomeIcon icon={faTwitter} /></p>
        </div>
      </div>
    </div>
  );
}

