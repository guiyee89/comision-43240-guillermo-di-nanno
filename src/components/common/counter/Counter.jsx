import { useState } from "react"

export const Counter = () => {

     /* Desestructuramos el array en base a la posicion */
     /* contador = variable  -- setContador = funcion */
    const [ contador , setContador ] = useState(0) /* el 0 inicializa la variable "contador" */
    
     /* Llamamos a la funcion del useState para indicarle que contador se modifique + 1 por onClick */
    //  const sumar = () => {
    //      setContador(contador + 1)
    //  }
    
  return (
    <div>
        <h2>{contador}</h2>
        <button onClick={()=>{setContador(contador + 1)}}>Sumar</button>
        <button onClick={()=>{setContador(contador - 1)}}>Restar</button>
    </div>
  )
}
