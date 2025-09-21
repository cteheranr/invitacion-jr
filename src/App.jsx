import './App.css';
import Confirmacion from './components/confirmacion/confirmacion';
import Conteo from './components/conteo/conteo';
import Info from './components/info/info';
import Musica from './components/musica/musica';
import Portada from './components/portada/portada';
import Regalos from './components/regalos/regalos';
import Dresscode from './components/dresscode/dresscode'

function App() {

  return (
    <>
      <div className="bodyy">
        <Portada />
        <Musica />
        <Info />
        <Dresscode />
        <Regalos />
        <Conteo />
        <Confirmacion />
      </div>
    </>
  )
}

export default App
