//Creo el contexto
import { createContext, useState } from "react";
export const CartContext = createContext();

//Creo el componente proveedor del contexto
const CartContextProvider = ( {children} ) => {
    const [cart, setCart] = useState( [] )

    const addToCart = ( newProduct) => {
        //Usamos la funcion para corroborar si ya existe en el carrito 
        //y hacemos un condicional para agregarlo al carrito.
        let exist = isInCart(newProduct.id)
        if(exist){
            let newArray = cart.map(product => {
                //en caso que ya exista, se suma el mismo producto y se resta el stock
                //si no existe se suma al carrito y resta stock
                if(product.id === newProduct.id){
                    return {
                        ...product, 
                        quantity: newProduct.quantity
                    }
                }else {
                    return product
                }
            })
            //setear carrito con nuevo arreglo
            setCart(newArray)
        }else{
        //setCarteamos TODOS los productos (objetos) del "cart" y luego 
        //le pasamos el nuevo producto dentro del array de objetos
        setCart( [ ...cart, newProduct])
        }
    }

    //Funcion para retornar si ya existe el producto en el carrito
    const isInCart = (id) =>{
        let exist = cart.some(product => product.id === id)
        return exist
    }

    //Funcion para limpiar el CART
    const clearCart = () => {
       setCart([])
    }

    //Funcion para eliminar productos completos x ID
    const removeById = (id) => {
        let newArray = cart.filter((product) => product.id !== id)
        setCart(newArray)
    }
    //Funcion para eliminar Quantity de productos hasta dejarlo vacio
    const removeQuantity = (id) => {
        let exist = isInCart(id);
        if (exist) {
          let newArray = cart.map((product) => {
            if (product.id === id) {
              return {
                ...product,
                quantity: product.quantity - 1,
              };
            } else {
              return product;
            }
          });
          // Remove the product from the cart if its quantity reaches zero
          newArray = newArray.filter((product) => product.quantity > 0);
          setCart(newArray);
        }
      };
    //Identificar Quantity de productos que selecciona el usuario para que se mantenga en todas las rutas
    const getTotalQuantityById = (id) => {
        //le pasamos el id de useParams() pero le agregamos el + para que lo transforme de "string" a "number"
        let productos = cart.find(producto => producto.id === +id)
        return productos?.quantity
    }

    let data = {
        cart,
        addToCart,
        clearCart,
        removeQuantity,
        removeById,
        getTotalQuantityById,
    }

    return <CartContext.Provider value={ data }> {children} </CartContext.Provider>
}
export default CartContextProvider;