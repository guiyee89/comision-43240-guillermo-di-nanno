//Creo el contexto
import { createContext, useState } from "react";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css"

export const CartContext = createContext();

//Creo el componente proveedor del contexto
const CartContextProvider = ({ children }) => {


  //Le indicamos al estado que traiga los datos del localStorage O en su defecto que traiga un arreglo vacio
  //Lo llevamos de "string" a un objeto nuevamente con JSON.parse
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem("cart")) || []);


  const addToCart = (newProduct) => {
    //Usamos la funcion para corroborar si ya existe en el carrito
    //y hacemos un condicional para agregarlo al carrito.
    let exist = isInCart(newProduct.id);
    if (exist) {
      let newArray = cart.map((product) => {
        //en caso que ya exista, se suma el mismo producto y se resta el stock
        //si no existe se suma al carrito y resta stock
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: newProduct.quantity,
          };
        } else {
          return product;
        }
      });
      //setear carrito con nuevo arreglo
      setCart(newArray);
      //Almacenamos los productos en localStorage del nuevo arreglo
      localStorage.setItem("cart", JSON.stringify(newArray))
    } else {
      //setCarteamos los productos (objetos) del "cart" y luego
      //le pasamos el nuevo producto dentro del array de objetos
      setCart([...cart, newProduct]);
      //Almacenamos los productos en caso que no haya newArray
      localStorage.setItem("cart", JSON.stringify([...cart, newProduct]))
    }
  };


  //Funcion para retornar si ya existe el producto en el carrito
  const isInCart = (id) => {
    let exist = cart.some((product) => product.id === id);
    return exist;
  };


  //Funcion para limpiar el CART
  const clearCart = () => {
    Swal.fire({
      title: "Are you sure you want to delete all?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        setCart([]);
        //Para que no deje residuos en el localStorage. Es decir, un [] vacio
        localStorage.removeItem("cart")
      }
    });
  };


  //Funcion para eliminar productos completos x ID
  const removeById = (id) => {
    let newArray = cart.filter((product) => product.id !== id);
    setCart(newArray);
    localStorage.setItem("cart", JSON.stringify(newArray))
  };


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
      localStorage.setItem("cart", JSON.stringify(newArray))
    }
  };


  //Identificar Quantity de productos que selecciona el usuario para que se mantenga en todas las rutas
  const getTotalQuantityById = (id) => {
    //le pasamos el id de useParams() pero le agregamos el + para que lo transforme de "string" a "number"
    let productos = cart.find((producto) => producto.id === +id);
    return productos?.quantity;
  };


  //Funcion para mostrar la cantidad de productos en carrito
  const getTotalItems = () => {
    let total = cart.reduce((accumulator, element) => {
      return accumulator + element.quantity
    }, 0)
    return total
  }


  //Funcion que retorna el precio total de los elementos(objetos) en el carrito
  const getTotalPrice = () => {
    let total = cart.reduce( (acc, element) => {
      return acc + (element.quantity * element.price)
    }, 0)
    return total
  }

  //Almacenamos TODA las funciones con "data" del context en esta variable
  let data = {
    cart,
    addToCart,
    clearCart,
    removeQuantity,
    removeById,
    getTotalQuantityById,
    getTotalItems,
    getTotalPrice
  };

  //Proveemos con la "data" a los "children" del CartContext
  return <CartContext.Provider value={data}> {children} </CartContext.Provider>;
};
export default CartContextProvider;
