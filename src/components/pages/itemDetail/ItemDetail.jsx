import styled from "styled-components/macro";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ productSelected, addToCart, cantidad }) => {
  /* ItemDetail siendo el padre de ItemCount, le vamos a crear una funcion para contar los productos y pasarlo como prop a ItemCount */
  const onAdd = (cantidad) => {
    /* onAdd seria como el "carrito de compras" */
    let data = {
      ...productSelected,
      quantity: cantidad,
    };
    //Aqui es donde ejecutamos la funcion de agregar al carrito mediante nuestro CONTEXT 
    //y le pasamos la informacion del producto: variable data al CONTEXT
    addToCart(data)
  };

  return (
      <Wrapper>
        <h2>{productSelected.name}</h2>
        <img src={productSelected.img} alt="" />
        {/* Pasamos la funcion onAdd como prop */}
        <ItemCount stock={productSelected.stock} initial={cantidad} onAdd={onAdd} />
      </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
