import { useEffect, useState } from "react";
import "./conteo.css";
import moment from "moment";
import "moment/locale/es";
import fotoPortada from "../../assets/Circle.png";

function Conteo() {
  const targetDate = "2025-11-01 15:59:59";
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    let now = moment();
    const targetDateM = moment(targetDate, true);

    if (now > targetDateM) {
      now = targetDateM;
    }

    const futureDate = moment(targetDate);
    const duration = moment.duration(futureDate.diff(now));

    const days = Math.floor(duration.asDays());
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <>
      <div className="zona_img zona_conteo">
        <div className="fondo">
          <img className="img_portada1" src={fotoPortada} alt="Foto portada" />
        </div>
        <div className="text">
          <p>NOS VEMOS</p>
          <div className="fecha">
            <div>{timeRemaining.days}</div>
            <p>:</p>
            <div>{timeRemaining.hours}</div>
            <p>:</p>
            <div>{timeRemaining.minutes}</div>
            <p>:</p>
            <div>{timeRemaining.seconds}</div>
          </div>
          <div className="label-text">
            <p>D</p>
            <p>H</p>
            <p>M</p>
            <p>S</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Conteo;
