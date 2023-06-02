/* import styled from 'styled-components/macro' */
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = ({ nombre }) => {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    console.log("peticion a la API");
  }, []); /* Esto es un arreglo/array de dependencia vacio */
  useEffect(() => {
    console.log("Me ejecuto de forma condicional");
  }, [contador,nombre]); /* damos la variable contador a el arreglo de dependencia */

  return (
    <ItemList contador={contador} setContador={setContador}/>
  );
};
