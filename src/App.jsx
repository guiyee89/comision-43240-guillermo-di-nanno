import { Footer } from "./components/layout/footer/Footer";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer";



 function App() {
  
  /* PROPS --> Voy pasando propiedades y todo cae dentro de un objeto(props)*/
  let nombre = "juan"
  let edad = 22

  return(
    <>
     <Navbar />
     <ItemListContainer nombre={nombre} edad={edad} />
     <Footer />
    </>
  )
}

export default App;
