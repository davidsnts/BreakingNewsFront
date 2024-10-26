import { Outlet, useNavigate, Link } from "react-router-dom";
import logo from "../../images/LogoBN.png";
import {
  ErrorSpam,
  ImageLogo,
  InputSpace,
  Nav,
  UserLoggedSpace,
} from "./NavbarStyled";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/button";
import { searchSchema } from "../../schemas/searchSchema";
import { userLogged } from "../../services/userServices";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";
import {UserContext} from "../../Context/UserContext";

export function Navbar() {
  const navigate = useNavigate();
  const { user, setUser} = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(searchSchema) });

  function signOut() {
    Cookies.remove("token");
    setUser(undefined);
    navigate("/");
  }

  function onSearch(data) {
    const { title } = data;
    reset();
    navigate(`/search/${title}`);
  }

  async function findUserLogged() {
    try {
      const response = await userLogged();
      setUser(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (Cookies.get("token")) findUserLogged();
  }, []);
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

        {Cookies.get("token") && user ? (
          <>
            <Link to="/profile">
              <UserLoggedSpace>
                <h2>{user.name}</h2>
              </UserLoggedSpace>
            </Link>
            <i className="bi bi-box-arrow-right" onClick={signOut}></i>
          </>
        ) : (
          <Link to="/auth">
            <Button type="button" text={"Entrar"}>
              Entrar
            </Button>
          </Link>
        )}
      </Nav>
      {errors.title && <ErrorSpam>{errors.title.message} </ErrorSpam>}
      <Outlet />
    </>
  );
}
