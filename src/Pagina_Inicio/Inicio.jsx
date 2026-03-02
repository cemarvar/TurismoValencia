import Video from './components/VIDEO/Video';
import Both_Esencial from './components/ESENCIAL/Both_Esencial';
import Both_Planes from './components/PLANES/Both_Planes';
import Both_Sostenbile from './components/SOSTENIBLE/Both_Sostenible';
import Footer from './FOOTER/Footer';

export default function Inicio() 
{
  return (
    <section className="Inicio">
        <Video />
        <Both_Esencial />
        <Both_Planes />
        <Both_Sostenbile />
        <Footer />
    </section>
  );
}

