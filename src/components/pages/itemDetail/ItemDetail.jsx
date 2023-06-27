import styled from "styled-components/macro";
import { ItemCount } from "../itemCount/ItemCount";

export const ItemDetail = ({ productSelected, cantidad, onAdd }) => {
  /* ItemDetail siendo el padre de ItemCount, le vamos a crear una funcion para contar los productos y pasarlo como prop a ItemCount */
 
  return (
    <Wrapper>
      <h2>{productSelected.name}</h2>
      <img src={productSelected.img} alt="" />
      {productSelected.stock > 0 ? (
        //Pasamos la funcion onAdd como prop
        <ItemCount
          stock={productSelected.stock}
          initial={cantidad}
          onAdd={onAdd}
        />
      ) : (
        <h2>No hay stock</h2>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
