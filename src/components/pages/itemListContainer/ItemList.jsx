// import { ProductCard } from "../../common/productCard/ProductCard";
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import styled from "styled-components/macro";

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
          //  <ProductCard key={elemento.id} elemento={elemento}/>
          <Card sx={{ maxWidth: 345 }} key={elemento.id}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={elemento.img}
                alt="green iguana"
                sx={{
                  width: "fit-content",
                  margin: "0 auto",              
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {elemento.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {elemento.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Show Details
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </ProductsWrapper>
  );
};
const ProductsWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  align-items: center;
  justify-content: space-around;
  align-items: flex-end;
`;


  
