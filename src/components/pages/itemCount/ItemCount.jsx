import { useCount } from "../../hooks/useCount";
import styled from "styled-components/macro";

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
  /* Y aqui recibimos la data del contador y los productos del padre ProductDetail */
  const { count, decrement, increment, reset } = useCount(initial, stock);

  return (
    <>
      <CountWrapper>
        <CountButton onClick={decrement}> - </CountButton>
        <CountNumber> {count} </CountNumber>
        <CountButton onClick={increment}> + </CountButton>
        <CountButton onClick={reset}> Reset </CountButton>

        <AddButton onClick={() => onAdd(count)}> Agregar al carrito </AddButton>
      </CountWrapper>
    </>
  );
};

const CountWrapper = styled.div``;
const CountButton = styled.button`
  width: 50px;
  margin: 8px;
`;
const AddButton = styled.button`
  width: 50px;
  margin: 8px;
`;
const CountNumber = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
`;
