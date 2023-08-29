import "./campotexto.css"
import { useState } from "react"
 function Campotexto(props) {
  const placeholderModificado = `${props.placeholder}...`
  const [valor, actualizarValor] = useState("")

  const manejarCambio = (e) =>{
    console.log(e.target.value)
    props.actualizarValor(e.target.value)
  }
  const { type = "text"} = props
  console.log(type)
  return (
    <div className="container">
      <label htmlFor="name">{props.titulo}</label>
      <input 
       
       
       placeholder={placeholderModificado} 
       
       required={props.required}
       
       value={props.valor}
       
       onChange={manejarCambio}

       type ={type}
       />
      
    </div>
  )
}

export default Campotexto