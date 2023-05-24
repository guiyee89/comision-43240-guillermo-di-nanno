
import { TextField } from '@mui/material';

export const Login = () => {

  return (
    <div style={{margin:"50px"}}>
       <TextField style={{paddingRight:"10px"}}
       label="Email" 
       variant="outlined" 
       color="secondary" 
       size="large" 
       />
       <TextField 
       label="Contraseña" 
       variant="outlined" 
       color="secondary" 
       size="large" 
       />
    </div>
  );
};
