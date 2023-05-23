import styled from 'styled-components/macro'

const Titulo = styled.h1`
        color: blue;
    `
/* mejores practicas de desestructuracion de PROPS */
export const ItemListContainer = ({nombre, edad}) => {
    
    /* desestructuracion del objeto props */
   /*  const { nombre, edad} = props */

  return (
    <>
    {/* en vez de usar la palabra props.nombre y props.edad .. desestructuramos el objeto props */}
    <Titulo> Hola soy {nombre} y tengo {edad} años</Titulo>
    </>
  )
}
