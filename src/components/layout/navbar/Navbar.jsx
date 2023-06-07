/* Importando desde React Icons. "BS" (primeras letras del icono) + pegar nombre de icono en llaves */
import { Badge } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";
import styled from "styled-components/macro";

export const Navbar = () => {
  return (
    <Header>
      {/* Imagen en Cloudinary o Google Drive*/}
      {/* <img 
        src="https://res.cloudinary.com/derdim3m6/image/upload/v1685736175/samples/animals/kitten-playing.gif" 
        alt="Shoes image" /> */}
      {/* Imagen en carpeta public */}
      <Nav>
        <Logo src="/images/2023-06-01_00h41_15.png" alt="Logo" />
        <NavListLinks>
          <ListLink>
            <PageLink href="#">Todos</PageLink>
          </ListLink>
          <ListLink>
            <PageLink href="#">Remeras</PageLink>
          </ListLink>
          <ListLink>
            <PageLink href="#">Buzos</PageLink>
          </ListLink>
          <ListLink>
            <PageLink href="#">Zapatillas</PageLink>
          </ListLink>
        </NavListLinks>

        {/* Carrito con contador */}
        <Badge badgeContent={4} color="success">
          {/* Le pasamos props en base a lo que especifique la libreria */}
          <BsFillCartFill color="black" size={"30px"} />
        </Badge>
      </Nav>
    </Header>
  );
};
const Header = styled.header`
  display: flex;
`;
const Nav = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;
const Logo = styled.img`
  width: 150px;
`;
const NavListLinks = styled.ul`
  display: flex;
`;
const ListLink = styled.li`
  list-style: none;
  padding: 16px;
`;
const PageLink = styled.a`
  text-decoration: none;
  font-family: bold;
  font-size: 1.2rem;
  color: black;
`;
