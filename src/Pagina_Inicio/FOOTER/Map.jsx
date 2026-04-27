import "../assets/css/map.css";

export default function Map() {
  return (
    <div className="map-container">
      <iframe
        title="Ayuntamiento de Valencia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7788.155421425193!2d-0.37959918788642716!3d39.46998551259733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4b42970bfd%3A0x717e704223149d99!2sOficina%20de%20Turismo%20del%20Ayuntamiento%20de%20Valencia!5e1!3m2!1ses!2ses!4v1777317996086!5m2!1ses!2ses"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}