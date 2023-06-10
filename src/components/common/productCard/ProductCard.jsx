import styled from "styled-components/macro";

export const ProductCard = ({ elemento }) => {
  return (
    <ProductContainer>
      <h2>{elemento.title}</h2>
      <ProductImage src={elemento.img} alt="" />
      <h3>{elemento.price}</h3>
    </ProductContainer>
  );
};

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductImage = styled.img`
  max-width: 250px;
`;
