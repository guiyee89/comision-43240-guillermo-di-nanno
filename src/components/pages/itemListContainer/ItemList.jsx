import {Button,Card,CardActionArea,CardActions,CardContent,CardMedia,Typography,} from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

export const ItemList = ({ items }) => {
  console.log(items);

  return (
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
              <Link to={`/productDetail/${elemento.id}`}>
                <Button size="small" color="primary">
                  Show Details
                </Button>
                
              </Link>
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
