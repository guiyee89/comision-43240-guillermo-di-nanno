import { useNavigate } from "react-router-dom"

export const CartContainer = () => {

    const navigate = useNavigate()

    const realizarCompra = () => {
        console.log("compra realizada")
        navigate("/")
    }

  return (
    <div>
        <h1>Carrito</h1>
        <button onClick={realizarCompra}>Comprar</button>
    </div>
  )
}
