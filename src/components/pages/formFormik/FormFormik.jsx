import styled from "styled-components/macro";
import { Button, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

export const FormFormik = () => {
  //palabras reservada del hook
  const { handleSubmit, handleChange, errors } = useFormik({
    //palabra reservada del hook
    initialValues: {
      nombre: "",
      email: "",
      telefono: "",
    },
    //palabra reservada del hook
    onSubmit: (datos) => {
      console.log("el formulario se envio");
      //conecto con la api
      console.log(datos);
    },
    //Yup
    validateOnChange: false,
    validationSchema: Yup.object({
      nombre: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "Minimo 3 caracteres")
        .max(30, "Maximo 30 caracteres")
        .matches(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,{message:"el nombre esta mal"}),//RegExp Nombre
      email: Yup.string()
        .required("Este campo es obligatorio")
        .min(3, "El campo requiere mas de 3 caracteres")
        .email("no es un email valido")
        .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,{message:"el email esta mal"}),//RexExp Email
      password: Yup.string()
        .required("La contraseña es obligatoria")
        .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,{message:"La contraseña requiere 1 mayuscula, 1 numero, 1 caracter especial"}),//RegExp Password
      repeatPassword: Yup.string()
        .required("Este campo es obligatorio")
        .oneOf([Yup.ref("password")], "Las contraseñas no coinciden"),
      telefono: Yup.number()
      .min(3, "das"),
    }),
  });

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <TextField
            name="nombre"
            label="Nombre"
            variant="outlined"
            onChange={handleChange}
            error={errors.nombre ? true : false}
            helperText={errors.nombre}
          />
          {/* <span>{errors.nombre}</span> */}
        </InputWrapper>
        <InputWrapper>
          <TextField
            name="email"
            label="Email"
            variant="outlined"
            onChange={handleChange}
            error={errors.email ? true : false}
            helperText={errors.email}
          />
          {/* <span>{errors.email}</span> */}
        </InputWrapper>
        <InputWrapper>
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            onChange={handleChange}
            error={errors.password ? true : false}
            helperText={errors.password}
          />
          {/* <span>{errors.pass}</span> */}
        </InputWrapper>
        <InputWrapper>
          <TextField
            name="repeatPassword"
            label="Repeat Password"
            variant="outlined"
            onChange={handleChange}
            error={errors.repeatPassword ? true : false}
            helperText={errors.repeatPassword}
          />
          {/* <span>{errors.pass}</span> */}
        </InputWrapper>
        <InputWrapper>
          <TextField
            name="telefono"
            label="Telefono (opcional)"
            variant="outlined"
            onChange={handleChange}
            error={errors.telefono ? true : false}
            helperText={errors.telefono}
          />
          {/* <span>{errors.telefono}</span> */}
        </InputWrapper>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </Form>
    </div>
  );
};
const Form = styled.form`
  display: flex;
  margin: 50px;
  align-items: baseline;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
