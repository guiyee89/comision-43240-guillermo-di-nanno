import { useState } from "react";
import { Navbar } from "./components/layout/navBar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";

/* LOS COMPONENTES SE ACTUALIZAN, CUANDO CAMBIAN LOS ESTADOS INTERNOS O CUANDO CAMBIA UNA PROP */
function App() {
  const [montado, setMontado] = useState(false);
  const [nombre, setNombre] = useState("pepito");
  console.log(nombre);

  return (
    <>
      <Navbar /> {/* pass contador and setContador as props */}
      {/* Montar o desmontar un componente */}
      {montado && <ItemListContainer nombre={nombre} />}
      <button onClick={() => setMontado(!montado)}>Montar</button>
      <button onClick={() => setNombre("Maria")}>Cambiar nombre</button>
    </>
  );
}

export default App;
