import "./Contactenos.css";

export const Contactenos = () => {
  return (
    <section className="contactenos" id="contactenos">
      <h2>Contáctame</h2>

      <p>
        Si deseas contactarme, puedes hacerlo a través de los siguientes
        medios:
      </p>

      <div className="contacto-info">
        <div className="contacto-item">
          <span>📧</span>
          <div>
            <h3>Correo electrónico</h3>
            <p>correo@gmail.com</p>
          </div>
        </div>

        <div className="contacto-item">
          <span>📱</span>
          <div>
            <h3>Celular</h3>
            <p>+57 300 000 0000</p>
          </div>
        </div>

        <div className="contacto-item">
          <span>📲</span>
          <div>
            <h3>Contacto de emergencia</h3>
            <p>606 000 00 00</p>
          </div>
        </div>
      </div>
    </section>
  );
};