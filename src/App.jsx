import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { menuRoutes } from "./routes/menuRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            {menuRoutes.map(({ id, path, Element }) => (
              <Route key={id} path={path} element={<Element />} />
            ))}
          </Route>
          {/* <Route path="*" element={<h1>404 not found</h1>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
