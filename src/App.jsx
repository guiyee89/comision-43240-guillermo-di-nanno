import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";
import { ProductDetailContainer } from "./components/pages/productDetail/ProductDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { CartContainer } from "./components/pages/cart/CartContainer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:categoryName" element={<ItemListContainer />} />
            <Route path="/productDetail/:id" element={<ProductDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="*" element={<h1>404 not found</h1>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
