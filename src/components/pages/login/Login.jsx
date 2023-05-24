import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    /* Box = component para especificar */
    <Box
      /* sx = style */
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <TextField
        label="Email"
        variant="outlined"
        color="secondary"
        size="large"
        
      />
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel color="secondary" htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          color="secondary"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={()=>setShowPassword(!showPassword)}
                edge="end"
              >
                {showPassword ? <VisibilityOff color="secondary"/> : <Visibility color="secondary"/>}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button variant="contained" color="secondary">
        Success
      </Button>
    </Box>
  );
};
