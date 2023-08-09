import  "./listaopciones.css"

const  ListaOpciones = (props) => {
 
 //Para recorrer un array en JSX no se usa FOREACH , se usa el metodo  MAP 
 // (nombre de arreglo.map( (equipo(elemento del array),index(posicion del elemento)) => {
//  
//
// }))
//
  const equipos = [
    "Programacion",
    "Front End",
    "Data Science",
    "Devops",
    "UX y Diseño",
    "Móvil",
    "Innovacion y Gestion",

  ]
  
  const manejarCambio = (e) =>{
    console.log(e.target.value)
    props.actualizarEquipo(e.target.value)
  } 

  return (
    <div>
        <label htmlFor="">Equipo</label>
        <select value={props.valor} onChange={manejarCambio}>
          <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {equipos.map( (equipo, index) =>  <option key={index} value={equipo}>{equipo}</option>
           )}
        </select>
    </div>
  )
}

export default ListaOpciones