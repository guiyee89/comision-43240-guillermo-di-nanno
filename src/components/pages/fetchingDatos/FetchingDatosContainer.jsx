import { useState, useEffect } from "react";
import { FetchingDatos } from "./FetchingDatos";

export const FetchingDatosContainer = () => {
  const [users, setUsers] = useState([]);
    console.log(users)

  useEffect(() => {
    const promiseDatos = fetch("https://jsonplaceholder.typicode.com/users");
    promiseDatos
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.log("Catcheamos el error: ", err));
  }, []);

  const createUser = () => {
    let data = {
      name:"pepito",
      userName:"perez",
      email: "pepito@gmail.com"
    };

   const promise = fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(data)
    })
    
    promise
      .then((res) => res.json())
      .then((data) => console.log("El usuario fue creado con la siguiente informacion: ", data))
      .catch(err => console.log(err))

  }
  

  return <FetchingDatos users={users} createUser={createUser}/>;
};
