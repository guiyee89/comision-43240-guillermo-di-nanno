import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import styled from "styled-components/macro";

export const CartContainer = () => {

  const { cart, clearCart, removeQuantity, removeById, getTotalPrice } = useContext(CartContext);

  //Variable que contiene el calculo del precio total de la funcion getTotalPrice 
  const totalPrice = getTotalPrice()

  return (
    <Wrapper>
      {/* Botton para limpiar cart */}
      {
       cart.length > 0 && <button onClick={clearCart}>Limpiar carrito</button>
      }
      {
        cart.map(product => {
          return <div key={product.id}>
            <img src={product.img} alt="" />
            <h2>{product.name}</h2>
            <h3>{product.price}</h3>
            <h4>{product.quantity}</h4>
            {/* Boton para eliminar quantity x ID */}
            <BtnQuantity onClick={()=>removeQuantity(product.id)}>-</BtnQuantity>
            {/* Boton para eliminar item x ID */}
            <BtnDelete onClick={()=>removeById(product.id)}>Eliminar</BtnDelete>
          </div>
        })
      }
      <h4>El Total es: ${totalPrice}</h4>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BtnQuantity = styled.button`
  width: 30px;
`
const BtnDelete = styled.button`
  width: 60px;
`
