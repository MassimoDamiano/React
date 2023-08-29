import "./equipo.css"
import Colaborador from "../colaboradores"
import hexToRgba from "hex-to-rgba"

const Equipo = (props) => {
    
    
     //Destructuracion
    const {colorPrimario , colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor,like} = props

    const estiloTitulo = {borderColor: hexToRgba(colorPrimario, 0.6)}

    const estiloFondo = {backgroundColor: hexToRgba(colorPrimario, 0.6)}

    return <>
    {colaboradores.length > 0 &&
        
        <section className="equipo" style={estiloFondo}>
            <label htmlFor="">Cambiar color</label>
            <input 
            className="color-fondo"
                type="color" 
                value={hexToRgba(colorPrimario, 0.6)} 
                onChange={(evento) =>{
                    actualizarColor(evento.target.value, id)
                }}
            />
            <div className="title-equipos">
            
            <h3 style={estiloTitulo}>{titulo}</h3>
        
            </div>

            <div className="colaboradores">
                { 
                    colaboradores.map((colaborador , index) => <Colaborador 
                    eliminarColaborador = {eliminarColaborador}
                    datos={colaborador} 
                    key={index} 
                    colorPrimario={colorPrimario} 
                    like= {like}
                    />
                    )
                }
            </div>
        </section>
    }
    </>
}


export default Equipo