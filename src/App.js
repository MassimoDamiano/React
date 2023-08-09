import Formulario from './componentes/formulario/Formulario'; 
import Header from "./componentes/header/Header"; 
import MiOrg from './componentes/miorg';
import {useState} from "react"

function App() {
  const [mostrarFormulario, actualiazarMostrar ] = useState(true)
  const cambiarMostrar = () => {
    actualiazarMostrar(!mostrarFormulario)
  }
  return (
    <div >
      <Header>  
        
      </Header>
      
      {mostrarFormulario  && <Formulario />}
      

      
      <MiOrg cambiarMostrar={cambiarMostrar} />
    </div>
  );
}

export default App;
