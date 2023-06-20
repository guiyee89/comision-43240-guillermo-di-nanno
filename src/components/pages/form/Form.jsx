import { useState } from "react";
import styled from 'styled-components/macro'

export const Form = () => {
  const [userData, setUserData] = useState( {
    name: "",
    lastName: "",
  } )  


//mandarle info al back-end en onSubmit={handleSubmit}
  const handleSubmit = (evento) => {
    //evitamos default de inputs
    evento.preventDefault();
   
    let data = {
        nombreUsuario: userData.name,
        apellidoUsuario: userData.lastName
    }
    console.log(data)
  };

  const handleName = (evento) => {
    setUserData({...userData , ["name"]: evento.target.value})
  };
  const handleLastName = (evento) => {
    setUserData( {...userData , ["lastName"]: evento.target.value } )
  }

  return (
    <>
    <Wrapper>
      {/* pasamos la funcion de evento para prevenir default de formulario */}
      <form onSubmit={handleSubmit} action="" aria-label="form">
        <label htmlFor="nombre"></label>
        <input
          type="text"
          placeholder="ingrese su nombre"
          name="name"/* es importante poner bien esto para FORMIK */
          aria-label="ingrese su nombre"
          onChange={handleName}/* Los onChange toman cada chambio */
        />
        <label htmlFor="apellido"></label>
        <input
          type="text"
          placeholder="ingrese su apellido"
          name="lastName"/* es importante poner bien esto para FORMIK */
          aria-label="ingrese su apellido"
          onChange={handleLastName}/* Los onChange toman cada chambio */
        />

        {/* No hace falta aclarar type="submit" en el boton, porque al estar dentro de 
            <form> automaticamente el 1er button que encuentre sera "submit" */}
        <button>Enviar</button>
      </form>
    </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
    width: 100%;
    height: 400px;
`