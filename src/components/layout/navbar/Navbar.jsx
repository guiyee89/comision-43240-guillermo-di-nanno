/* Importando desde React Icons. "BS" (primeras letras del icono) + pegar nombre de icono en llaves */
import { BsFillCartFill } from "react-icons/bs"


export const Navbar = () => {

  return (
    <div>
        {/* Imagen en Cloudinary o Google Drive*/}
        <img 
        src="https://res.cloudinary.com/derdim3m6/image/upload/v1685736175/samples/animals/kitten-playing.gif" 
        alt="Shoes image" />
        {/* Imagen en carpeta public */}
        <img src="/public/images/2023-06-01_00h41_15.png" alt="" />
        <ul>
            <li>Todos</li>
            <li>Remeras</li>
            <li>Buzos</li>
            <li>Camperas</li>
        </ul>

        {/* Carrito con contador */}
        <div>
          {/* Le pasamos props en base a lo que especifique la libreria */}
          <BsFillCartFill color="steelblue" size={"30px"}/>
        </div>

    </div>
  )
}
