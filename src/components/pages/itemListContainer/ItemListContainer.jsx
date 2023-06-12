/* import styled from 'styled-components/macro' */
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../ProductsMocks";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        /* Si categoryName es = a productosFiltrados que traiga esos productos, sino, cuando categoryName sea "undefined", que traiga todos los productos */
        resolve(categoryName ? productosFiltrados : products);
        reject;
      }, 500);
    });
    tarea
      .then((response) => setItems(response))
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <>
      <ItemList items={items} products={products} />
    </>
  );
};
