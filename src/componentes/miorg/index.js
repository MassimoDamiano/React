import {useState} from "react"
import "./miorg.css"


function MiOrg(props) {
    const [mostrar, actualiazarMostrar] = useState(true);
    const manejarClick = () =>{
        console.log("hola")
        actualiazarMostrar(!mostrar)
    }
  return (
    <section className='orgSection'>
        <h3 className="title">Mi organizacion</h3>
        <img src="/img/add.png" alt="add" onClick={props .cambiarMostrar} />

    </section>
  )
}

export default MiOrg