import { useEffect, useState } from "react";
import { productAxios } from "../../../api/axiosInstance";

export const Fetching = () => {
  const [products, setProducts] = useState([]);

  /* Llamando al servidor para GET todos los productos */
  useEffect(() => {
    const promiseData = productAxios.get("");
    
    promiseData.then((res) =>
      setProducts(res.data)
    ); /* Usamos un solo .then y para acceder res.data*/
    promiseData.catch((err) => console.log(err));
  }, []);

  /* Llamando al servidor para GET 1 solo producto */
  useEffect(() => {
    const getProduct = productAxios.get("/3");
    getProduct.then((res) => console.log(res.data));
  }, []);

  /* Llamando al servidor para POST(agregar) un producto nuevo (en el body)*/
  const createProduct = () => {
    let data = {
      name: "Nike 360",
      price: 15000,
      stock: 2,
      description: "Estas son las mejores zapatillas",
      category: "deportivas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
    };

    const promiseProduct = productAxios.post("",data);
    promiseProduct
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  /* Llamando al servidor para PUT(modificar) un producto existente */
  const modifyProduct = () => {
    let data = {
      name: "adidas",
      price: 12000,
      stock: 2,
      description: "Estas son las mejores zapatillas",
      category: "deportivas",
      img: "https://res.cloudinary.com/dnqfh2chg/image/upload/v1669326932/free-metcon-4-zapatillas-de-entrenamiento-TQMCZg_fvia3m.png",
    };

    /* Puedo hacerlo directamente sin la PROMESA */

    const modifyPromise = productAxios.put("/2", data);
    modifyPromise
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  /* Llamando al servidor para PATCH(modificar una parte) del producto */
  const cambiarParteDelProducto = () => {
    let data = {
      name: "cambiado con patch"
    };
    const changePart = productAxios.patch("/2", data);
    changePart
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  /* Llamando al servidor para DELETE un producto */
  const eliminarProducto = () => {
    productAxios.delete("/5")
  }
  return (
    <div>
      {products.map((product) => (
        <h1 key={product.id}> {product.name} </h1>
      ))}
      <button onClick={createProduct}>Crear producto</button>
      <button onClick={modifyProduct}>Modificar producto</button>
      <button onClick={cambiarParteDelProducto}>Modificar producto</button>
      <button onClick={eliminarProducto}>Eliminar producto</button>
    </div>
  );
};
