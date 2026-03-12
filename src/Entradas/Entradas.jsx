import Both_Ticket from './components/ENTRADAS/Both_Ticket';
import Footer from '../Pagina_Inicio/FOOTER/Footer';
import Both_Tours from './components/TOURS/Both_Tours';
import Both_Experiencias from './components/EXPERIENCIAS/Both_Experiencias';


export default function Entradas() 
{
  return (
    <section className="Entradas">
        <Both_Ticket />
        <Both_Tours />
        <Both_Experiencias />
        <Footer />
    </section>
  );
}

