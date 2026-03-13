import "../assets/css/map.css";

export default function Map() {
  return (
    <div className="map-container">
      <iframe
        title="Ayuntamiento de Valencia"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.9793330974007!2d-0.37705320000000003!3d39.4697956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6048ad7bf45aab%3A0x2ba4baea5a36e1e2!2sAyuntamiento%20de%20Valencia!5e0!3m2!1ses!2ses!4v1773403700852!5m2!1ses!2ses"
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