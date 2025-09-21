import { useRef, useState } from "react";
import audioFile from "../../assets/Por_el_resto_de_mi_vida.mp3";
import play_icon from "../../assets/Play_music.png";
import iniciales_2 from "../../assets/iniciales_2.png";
import "./musica.css";

export default function Musica() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  return (
    <>
      <div className="musica">
        <p>Escucha nuestra canción</p>
        <audio ref={audioRef} src={audioFile}>
          Your browser does not support the <code>audio</code> element.
        </audio>
        <div className="container_incon_play">
          <img
            src={play_icon}
            alt="Play icon"
            style={{ cursor: "pointer", width: "200px" }}
            onClick={handlePlayAudio}
          />
        </div>
      </div>
      <div className="text-container">
        <img src={iniciales_2} alt="" />
      </div>
    </>
  );
}
