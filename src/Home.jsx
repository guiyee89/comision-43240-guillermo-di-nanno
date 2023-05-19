
import styles from "./Home.module.css"

export const Home = () => {

    let nombre = "Juan"

    let mascota = {
        nombre: "Jack",
        raza: "callejero",
        color: "blanco"
    }
    const saludarJack = () =>{
        console.log("hola Jack")
    }

    /* Desestructurando styles */
    const {card} = styles
  return (
    /* Para agregar estilos "styles" seria un objeto */
    <div className={styles.container}>
        {/* Podemos desestructurar styles dado que es un objeto */}
        <h1 className={card}>{mascota.nombre}</h1>
        <h3>{3+3}</h3>
        {
            saludarJack()
        }
        <h4>{nombre}</h4>
    </div>
  )
}
