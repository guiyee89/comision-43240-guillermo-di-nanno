import { CartContainer } from "../components/pages/cart/CartContainer";
import { Form } from "../components/pages/form/Form";
import { FormFormik } from "../components/pages/formFormik/FormFormik";
import { ItemDetailContainer } from "../components/pages/itemDetail/ItemDetailContainer";
import { ItemListContainer } from "../components/pages/itemListContainer/ItemListContainer";

export const menuRoutes = [
    {
        id: "home",
        path: "/",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/category/:categoryName",
        Element: ItemListContainer
    },
    {
        id: "category",
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: "cart",
        path: "/cart",
        Element: CartContainer
    },
    {
        id: "form",
        path: "/form",
        Element: Form
    }, 
    {
        id: "form-formik",
        path: "/form-formik",
        Element: FormFormik
    }, 
]
