import { ProductDetail } from "./ProductDetail";
import { useEffect, useState } from "react";
import { products } from "../../../ProductsMocks";
import { useParams } from "react-router-dom";

export const ProductDetailContainer = () => {

  const [productSelected, setProductSelected] = useState({});

  /* el useParams() de react-router-dom, busca la ruta del objeto. En este caso el objeto clickeado, por ende busca el ID del producto */
  const { id } = useParams()

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

  return <ProductDetail productSelected={productSelected} />;
};
