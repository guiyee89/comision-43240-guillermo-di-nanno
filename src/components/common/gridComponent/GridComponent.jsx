import { Box, Grid } from "@mui/material";

export const GridComponent = () => {
  return (
    <Box
      sx={{
        backgroundColor: { xs: "red", sm: "steelblue" },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      {/*  Grid container --> Es el padre de los hijos */}
      <Grid container>
        <Grid
          item
          xs={12}
          sm={10}
          md={6}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          <h2>Hola</h2>
        </Grid>
        <Grid item xs={12} sm={10} md={6}>
          <h2>Hola</h2>
        </Grid>
      </Grid>
    </Box>
  );
};
