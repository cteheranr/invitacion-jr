import "./confirmacion.css";

function Confirmacion() {
  return (
    <>
      <div className="info">
        <h3 className="title_primary">CONFIRMACION</h3>
        <div className="text-info">
          <div>
            <p className="italic">
              “Aunque cambien los montes y se tambaleen las colinas, no cambiará
              mi amor por ti.”
            </p>
            <p> Isaías 54:10,</p>
          </div>
          <p>
            Celebrar nuestro amor es un sueño hecho realidad, para que sea
            perfecto, nos encantaría contar contigo en nuestra lista de
            invitados.
          </p>
          <p className="conf">
            Confírmanos tu asistencia hasta el 20 de Octubre.
          </p>
        </div>
        <a
          target="_blank"
          href="https://wa.me/573246184389?text=Hola%20Ruby,%0D%0AQuiero%20confirmar%20mi%20asistencia%20a%20su%20boda.%20"
        >
          <button>SI, ASISTIRÉ</button>
        </a>
      </div>
    </>
  );
}

export default Confirmacion;
