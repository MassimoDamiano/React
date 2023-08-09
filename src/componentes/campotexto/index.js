import "./campotexto.css"
import { useState } from "react"
 function Campotexto(props) {
  const placeholderModificado = `${props.placeholder}...`
  const [valor, actualizarValor] = useState("")

  const manejarCambio = (e) =>{
    console.log(e.target.value)
    props.actualizarValor(e.target.value)
  }
  
  return (
    <div className="container">
      <label htmlFor="name">{props.titulo}</label>
      <input 
       type="text" name="name" id="name"
       
       placeholder={placeholderModificado} 
       
       required={props.required}
       
       value={props.valor}
       
       onChange={manejarCambio}
       />
      
    </div>
  )
}

export default Campotexto