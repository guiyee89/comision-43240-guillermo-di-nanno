import { ProductDetail } from "./ProductDetail"
import { useEffect, useState } from "react";
import { products } from "../../../ProductsMocks";

export const ProductDetailContainer = () => {

    const [productSelected, setProductSelected] = useState({});
    
    let id = 2

    useEffect(()=>{

        let productFind = products.find( (product) => product.id === id )
        
        const getProduct = new Promise((res, rej) => {
            res(productFind)
        })

        getProduct
            .then((res) => setProductSelected(res) )
            .catch((err) => console.log("No se encuentra el detalle: ", err))

          },[id])
          
          console.log(productSelected)

          return (
    <ProductDetail productSelected={productSelected} />
  )
}
