import "./boton.css"
function Boton(props) {
    
  return (
    <div><button className="boton">{props.texto}</button></div>
  )
}

export default Boton