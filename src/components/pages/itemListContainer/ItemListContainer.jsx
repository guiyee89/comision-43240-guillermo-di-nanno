/* import styled from 'styled-components/macro' */
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../ProductsMocks";

export const ItemListContainer = () => {

  const [ items , setItems] = useState([])
  
  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products);
        reject("la promesa salio mal")
      }, 3000);
    });

    // const getData = async () => {
    //   let response = await tarea;
    //   setFrase(response)
    // }
    // getData()

     tarea
       .then((response) => setItems(response))
       .catch((error) => {
         console.log(error);
       });
  }, []);

  return <ItemList items={items} products={products}/>;
};
