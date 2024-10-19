import logo from "../../images/LogoBN.png";
import { Button, ImgLogo, InputSpace, Nav } from "./NavbarStyled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>
        <ImgLogo src={logo} alt="Logo do Breaking News" />
        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
