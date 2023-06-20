/* Importando desde React Icons. "BS" (primeras letras del icono) + pegar nombre de icono en llaves */
import { Badge } from "@mui/material";
import { BsFillCartFill } from "react-icons/bs";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import { menuNavigate } from "../../../routes/menuNavigate";

export const Navbar = () => {
  return (
    <>
      <Header>
        {/* Imagen en Cloudinary o Google Drive*/}
        {/* <img 
        src="https://res.cloudinary.com/derdim3m6/image/upload/v1685736175/samples/animals/kitten-playing.gif" 
        alt="Shoes image" /> */}
        {/* Imagen en carpeta public */}
        <Nav>
          <Link to="/">
            <Logo src="/images/2023-06-01_00h41_15.png" alt="Logo" />
          </Link>
          <NavList>
            {menuNavigate.map(({ id, path, title }) => {
              return (
                <LinkButton key={id} to={path}>{title}</LinkButton>
              );
            })}
          </NavList>

          {/* Carrito con contador */}
          <Link to="/cart">
            <Badge badgeContent={4} color="success">
              {/* Le pasamos props en base a lo que especifique la libreria */}
              <BsFillCartFill color="black" size={"30px"} />
            </Badge>
          </Link>
        </Nav>
      </Header>
    </>
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
const NavList = styled.ul`
  display: flex;
`;
// const ListLink = styled.li`
//   list-style: none;
//   padding: 16px;
// `;
const LinkButton = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: bold;
  font-size: 1.2rem;
  list-style: none;
  padding: 16px;
  &:hover {
    text-decoration: underline;
  }
`;
