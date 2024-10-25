import { AuthContainer, Section } from "./AuthenticationStyled";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "../../schemas/signInSchema";
import { ErrorSpam } from "../../components/Navbar/NavbarStyled";
import { signUpSchema } from "../../schemas/signUpSchema";
import { signin, signUp } from "../../services/userServices";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export function Authentication() {
  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorsSignup },
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorsSignin },
  } = useForm({ resolver: zodResolver(signInSchema) });

  const navigate = useNavigate();

  async function inHandleSubmit(data) {
    try {
      const response = await signin(data);
      console.log(data);
      
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (err) {}
  }

  async function upHandleSubmit(data) {
    try {
      const response = await signUp(data);
      Cookies.set("token", response.data, { expires: 1 });
      navigate("/");
    } catch (err) {}
  }
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignIn(inHandleSubmit)}>
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignIn}
          />

          {errorsSignin.email && (
            <ErrorSpam> {errorsSignin.email.message}</ErrorSpam>
          )}
          <Input
            type="password"
            placeholder="Senha"
            name="password"
            register={registerSignIn}
          />

          {errorsSignin.password && (
            <ErrorSpam> {errorsSignin.password.message}</ErrorSpam>
          )}
          <Button type="submit" text="Entrar" />
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignUp(upHandleSubmit)}>
          <Input
            type="text"
            placeholder="Nome"
            name="name"
            register={registerSignUp}
          />
          {errorsSignup.name && (
            <ErrorSpam> {errorsSignup.name.message}</ErrorSpam>
          )}
          <Input
            type="email"
            placeholder="Email"
            name="email"
            register={registerSignUp}
          />
          {errorsSignup.email && (
            <ErrorSpam> {errorsSignup.email.message}</ErrorSpam>
          )}
          <Input
            type="password"
            placeholder="Password"
            name="password"
            register={registerSignUp}
          />

          {errorsSignup.password && (
            <ErrorSpam> {errorsSignup.password.message}</ErrorSpam>
          )}
          <Input
            type="password"
            placeholder="Confirmar Senha"
            name="confirmPassword"
            register={registerSignUp}
          />
          {errorsSignup.confirmPassword && (
            <ErrorSpam> {errorsSignup.confirmPassword.message}</ErrorSpam>
          )}
          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}
