import "./regalos.css";
import regalo from "../../assets/caja-de-regalo.png";

export default function Regalos() {
  return (
    <>
      <div className="dress">
        <div className="dresscode">
          <h3 className="title_primary">REGALOS</h3>
          <img className="imagen" src={regalo} alt="" />
          <div className="info">
            <p>
              Nuestro mejor regalo sera tu compañia, pero si un obsequio quieres
              hacernos, te agradecemos que sea por este medio:
            </p>
            <div className="cuenta">
              <h4 className="lluvia">LLUVIA DE SOBRES</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
