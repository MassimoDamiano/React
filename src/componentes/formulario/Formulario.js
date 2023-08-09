import "./Formulario.css"
import Campotexto from "../campotexto"
import ListaOpciones from "../listaopciones"
import Boton from "../Boton"
import { useState } from "react"

const Formulario =() => {
    
    const [nombre, actualiazarNombre] = useState("")
    const [puesto, actualiazarPuesto] = useState("")
    const [foto, actualiazarFoto] = useState("")
    const [equipo, actualiazarEquipo] = useState("")
    
    
    
    const manejarEnvio =(e) =>{
        console.log("manejar e envio")
        e.preventDefault()
        let datosAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosAEnviar)
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
                    actualiazarEquipo={actualiazarEquipo}
                />
                
                <Boton texto="Crear" />
                
                
            </div>

        </form>

    </section>
    )
}




export default Formulario