import "./Formulario.css"
import Campotexto from "../campotexto"
import ListaOpciones from "../listaopciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario =(props) => {
    
    const [nombre, actualiazarNombre] = useState("")
    const [puesto, actualiazarPuesto] = useState("")
    const [foto, actualiazarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")
    

    const [titulo, actualiazarTitulo] = useState("")
    const [color, actualiazarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props
    
    
    const manejarEnvio =(e) =>{
        console.log("manejar e envio")
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }        
        registrarColaborador(datosAEnviar)
     }
    
     const manejarNuevoEnvio = (e) =>{
        e.preventDefault()
        crearEquipo({titulo,colorPrimario: color})
     }


    
    return ( <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <div className="form__container">

                <h2>Rellena el fomrulario para crear el colaborador.</h2>
                
                <Campotexto 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre}
                actualizarValor={actualiazarNombre}
                
                /> 
                
                <Campotexto 
                titulo="Puesto"
                 placeholder="Ingresar puesto" 
                 required 
                 valor={puesto}
                actualizarValor={actualiazarPuesto}/> 
                
                <Campotexto 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required 
                valor={foto}
                actualizarValor={actualiazarFoto}/> 
                
                <ListaOpciones 
                    titulo="Elija un equipo"
                    valor={equipo}
                    actualizarEquipo={actualizarEquipo}
                    equipos = {props.equipos}
                   
                />
                
                <Boton texto="Crear" />
                
                
            </div>

        </form>
        
        
        <form onSubmit={manejarNuevoEnvio} className="form__container">

                <h2>Rellena el fomrulario para crear el equipo</h2>
                
                <Campotexto 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo}
                actualizarValor={actualiazarTitulo}
                
                /> 
                
                <Campotexto 
                titulo="Color"
                 placeholder="Ingresar el color en Hex" 
                 required 
                 valor={color}
                type = "color"
                actualizarValor={actualiazarColor}
                />

                <Boton texto="Registrar equipo" />
        </form>
    </section>
    )
}




export default Formulario