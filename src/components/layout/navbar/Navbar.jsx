/* Importando desde React Icons. "BS" (primeras letras del icono) + pegar nombre de icono en llaves */
import { BsFillCartFill } from "react-icons/bs"
import { Counter } from "../../common/counter/Counter"

export const Navbar = () => {

  return (
    <div>

        <h4>Logo</h4>
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
          <Counter />
        </div>

    </div>
  )
}
