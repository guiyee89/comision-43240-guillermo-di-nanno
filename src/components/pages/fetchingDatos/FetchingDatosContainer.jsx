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

  return <FetchingDatos users={users}/>;
};
