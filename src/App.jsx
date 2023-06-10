import styled from 'styled-components/macro'
import { useState } from "react";
import { Navbar } from "./components/layout/navBar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { TextField } from "@mui/material";
import { CounterContainer } from "./components/common/counter/CounterContainer";
import { FetchingDatosContainer } from './components/pages/fetchingDatos/FetchingDatosContainer';
import { ProductDetailContainer } from './components/pages/productDetail/ProductDetailContainer';
import { Fetching } from './components/pages/fetching/Fetching';


/* LOS COMPONENTES SE ACTUALIZAN, CUANDO CAMBIAN LOS ESTADOS INTERNOS O CUANDO CAMBIA UNA PROP */
function App() {

  // const [montado, setMontado] = useState(false);
  
  return (
    <>
      {/* <Navbar /> */} {/* pass contador and setContador as props */}
      {/* Montar o desmontar un componente */}
      {/* {montado && <ItemListContainer /> }
      <Button onClick={() => setMontado(!montado)}>Montar</Button>
      <CounterContainer />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <FetchingDatosContainer /> 
      <ProductDetailContainer />*/}
      <Fetching />
    </>
  );
}

// const Button = styled.button`
//   width: fit-content;
// `

export default App;



