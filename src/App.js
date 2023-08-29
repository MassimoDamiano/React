import Colaborador from './componentes/colaboradores';
import Equipo from './componentes/equipo';
import Formulario from './componentes/formulario/Formulario'; 
import Header from "./componentes/header/Header"; 
import MiOrg from './componentes/miorg';
import Footer from './componentes/footer';
import {useState} from "react"
import {v4 as uuid} from   "uuid"


function App() {
  const [mostrarFormulario, actualiazarMostrar ] = useState(true)
  
  
  const [colaboradores, actualiazarColaboradores ] = useState([
    {
      id: uuid(),
    equipo: "Programacion",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Massimo Damiano",
    puesto: "Font-End Developer",
    fav: true
  },
    {
      id: uuid(),
    equipo: "Front End",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Massimo Damiano",
    puesto: "Font-End Developer",
    fav: false

  },
    {
      id: uuid(),
    equipo: "Movil",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Massimo Damiano",
    puesto: "Font-End Developer",
    fav: false

  },
    {
      id: uuid(),
    equipo: "Devops",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Massimo Damiano",
    puesto: "Font-End Developer",
    fav: false

  },
    {
    id: uuid(),
    equipo: "UX y Diseño",
    foto: "https://github.com/harlandlohora.png",
    nombre: "Massimo Damiano",
    puesto: "Font-End Developer",

  }
])
  
  const [equipos,actualiazarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57c278",
      colorSecundario: "#d9f7e9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovación y  Gestión",
      colorPrimario: "#FF8A29",
      colorSecundario: "#FFEEDF"
    }


    
  ])
  
  
  const cambiarMostrar = () => {
    actualiazarMostrar(!mostrarFormulario)
  }

  const registrarColaborador = (colaborador) =>{
    //Spread Operator = toma los valores actuales del arregllo, los copia y agrega uno nuevo(colaborador)
    actualiazarColaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) =>{
    console.log(id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualiazarColaboradores(nuevosColaboradores)
  }
  
  const actualizarColor = (color,id) =>{
    console.log(color,id)
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualiazarEquipos(equiposActualizados)
  }

const crearEquipo = (nuevoEquipo) =>{
  actualiazarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
}


const like = (id) =>{
  console.log("like",id)
  const colaboradoresActualizados = colaboradores.map((colaborador) =>{
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualiazarColaboradores(colaboradoresActualizados)
}



  return (
    <div >
      <Header>  
        
      </Header>
      
      {mostrarFormulario  && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)} 
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }
      

      
      <MiOrg cambiarMostrar={cambiarMostrar} />
      { 
        equipos.map((equipo ) => <Equipo 
                                    datos={equipo} 
                                    key={equipo.titulo} 
                                    colaboradores = {colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
                                    eliminarColaborador = {eliminarColaborador}
                                    actualizarColor = {actualizarColor}
                                    like={like}
        />
        )
      }

  <Footer />
    </div>

  );
}

export default App;
