import { ItemDetail } from "./ItemDetail";
import { useContext, useEffect, useState } from "react";
import { products } from "../../../ProductsMocks";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const ItemDetailContainer = () => {

  const [productSelected, setProductSelected] = useState({});
      //le proveemos del contexto, no el proveedor
  const { addToCart, getTotalQuantityById } = useContext(CartContext)

  /* el useParams() de react-router-dom, busca la ruta del objeto. En este caso el objeto clickeado, por ende busca el ID del producto */
  const { id } = useParams();

  const cantidad = getTotalQuantityById(id);

  //Toastify alert para onAdd function
  const notify = () => {
    toast.promise(
        // Promise function
        new Promise((resolve) => {
          // Simulate asynchronous operation
          setTimeout(() => {
            // Resolve the promise after 1.5 seconds
            resolve();
          }, 1200);
        }),
        {
          pending: "Adding to Cart...",
          success: "Added successfully!",
          error: "Error on adding product!",
        }
      )
      .then(() => {
        // Promise resolved
        console.log("Promise resolved");
      })
      .catch((error) => {
        // Promise encountered an error
        console.log("Promise error:", error);
      });
  };

  const cantidad = getTotalQuantityById(id)

  useEffect(() => {
    let productFind = products.find((product) => product.id === Number(id) /* o "+id" es lo mismo */);

    const getProduct = new Promise((res) => {
      res(productFind);
    });

    getProduct
      .then((res) => setProductSelected(res))
      .catch((err) => console.log("No se encuentra el detalle: ", err));
  }, [id]);

  console.log(productSelected);

  return <ItemDetail cantidad={cantidad} productSelected={productSelected} addToCart={addToCart}/>;
};
