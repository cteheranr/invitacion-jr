import flores from '../../assets/flores.png';
import iniciales1 from '../../assets/iniciales_1.png';
import './portada.css';


export default function Portada() {
  return( 
    <>
        <div className='zona_img'>
            <img className='img_portada' src={flores} alt="Foto portada" />
            <img className='img_portada2' src={iniciales1} alt="Foto portada" />
        </div>
    </>
  );
}
