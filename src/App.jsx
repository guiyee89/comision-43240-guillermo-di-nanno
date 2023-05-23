import { useState } from "react";
import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";



 function App() {
  
  const [nombre, setNombre] = useState("pepe")
  const [ isDark, setIsDark ] = useState(false)

  /* PROPS --> Voy pasando propiedades y todo cae dentro de un objeto(props)*/
  let edad = 22

  return(
    <>
     <Navbar />
     <ItemListContainer nombre={nombre} edad={edad} />
     <button onClick={()=>setNombre("maria")}>Cambiar nombre</button>
     {/* Cambiar estado isDark al contrario de lo que tenga --> !isDark */}
     <button onClick={()=>setIsDark(!isDark)}>{isDark ? "cambiar a claro": "cambiar a oscuro"}</button>
     <Footer />
    </>
  )
}

export default App;
