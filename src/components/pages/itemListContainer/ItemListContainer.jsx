/* import styled from 'styled-components/macro' */
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../../ProductsMocks";
import { useParams } from "react-router-dom";
import { Loader } from "../../common/Loader";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryName } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosFiltrados = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        /* Si categoryName es = a productosFiltrados que traiga esos productos, sino, cuando categoryName sea "undefined", que traiga todos los productos */
        resolve(categoryName ? productosFiltrados : products);
        reject;
      }, 2100);
    });
    tarea
      .then((response) => { 
        setItems(response)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  //Rendering Condicional --> if con return temprano
  return (
    <div>
      {loading ? <Loader /> : <ItemList items={items} products={products} />}
    </div>
  );
};
