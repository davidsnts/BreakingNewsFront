import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import { ErrorSpam, ImageLogo, InputSpace, Nav } from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/button";

const searchSchema = z.object({
  title: z.string().trim().min(1, "A pesquisa não pode ser vazia"),
});
export function Navbar() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(searchSchema) });
  const navigate = useNavigate();
  function onSearch(data) {
    const { title } = data;
    reset();
    navigate(`/search/${title}`);
  }

  function goAuth() {
    navigate("/auth");
  }
  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
            <input
              {...register("title")}
              type="text"
              placeholder="Pesquise por um título"
            />
          </InputSpace>
        </form>
        <Link to="/">
          <ImageLogo src={logo} alt="Logo do Breaking News" />
        </Link>
        <Link to="/auth">
          <Button type="button" text={"Entrar"}>
            Entrar
          </Button>
        </Link>
      </Nav>
      {errors.title && <ErrorSpam>{errors.title.message} </ErrorSpam>}
      <Outlet />
    </>
  );
}
