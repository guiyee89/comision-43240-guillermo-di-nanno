import { ProductCard } from '../../common/productCard/ProductCard';
import styled from 'styled-components/macro'

export const ItemList = ({ items }) => {
  console.log(items);

  // TECNICAS DE RENDERING - RENDERIZADO CONDICIONAL

  // if (!items || !items[0]) {
  //   return <div>Rendering the products</div>;
  // }

  return (
    /* TERNARIO */
    /* && esto significa ENTONCES tambien en React aparte de Y */

    // ESTA ES UNA MANERA DE HACERLO
    // <div>
    //   {items.length > 0 ? (
    //     <div>
    //       <h2>{items[0].name}</h2>
    //       <img src={items[0].img} alt="" />
    //       <h3>{items[0].price}</h3>
    //     </div>
    //   ) : (
    //     <h1>Cargando....</h1>
    //   )}
    // </div>

    // ESTA ES CON MAP
    <ProductsWrapper>
      {items.map((elemento) => {
        return (
         <ProductCard key={elemento.id} elemento={elemento}/>
        );
      })}
    </ProductsWrapper>
  );
};
const ProductsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  align-items: flex-end;
`