import "./info.css";
import iglesia from "../../assets/iglesia.png";
import recepcion from "../../assets/recepcion.png";

export default function Info() {
  return (
    <>
      <div className="container-info">
        <h3 className="title_primary">NOS CASAMOS...</h3>
        <div className="info-lugares">
          <div className="iglesia">
            <div className="title">CEREMONIA</div>
            <div className="imagen">
              <img src={iglesia} alt="" />
            </div>
            <div className="info">
              <h3>Parroquia de Nuestra Señora de la Consolata</h3>
              <p>Cartagena, Bolívar</p>
            </div>
            <a href="https://maps.app.goo.gl/goWpmNgH7Ct3zWic6" target="blank">
              <button className="button-55">Como llegar</button>
            </a>
          </div>
          <div className="recepcion">
            <div className="title">RECEPCIÓN</div>
            <div className="imagen">
              <img src={recepcion} alt="" />
            </div>
            <div className="info">
              <h3>Salón de Eventos Veleros</h3>
              <p>Cartagena, Bolívar</p>
            </div>
            <a href="https://maps.app.goo.gl/PFNHkCBvsjgbTKSN7" target="blank">
              <button className="button-55">Como llegar</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}