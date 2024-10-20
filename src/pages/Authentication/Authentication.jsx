import { AuthContainer, Section } from "./AuthenticationStyled";
import { Input } from "../../components/Input/Input";
import { Button } from "../../components/Button/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";


export function Authentication() {
  const {
    register :registerSignUp,
    handleSubmit : handleSubmitSignUp ,    
    formState: { ErrorsSignUp },
  } = useForm();

    const {
    register :registerSignIn,
    handleSubmit : handleSubmitSignIn ,    
    formState: { ErrorsSignIn },
  } = useForm();

function inHandleSubmit(data){
  console.log(data);
  
}

function upHandleSubmit(data){
  console.log(data);
  
}
  return (
    <AuthContainer>
      <Section type="signin">
        <h2>Entrar</h2>
        <form onSubmit={handleSubmitSignIn(inHandleSubmit)}>
          <Input type="email" placeholder="Email" name="email"  register={registerSignIn}/>
          <Input type="password" placeholder="Senha" name="password" register={registerSignIn} />
          <Button type="submit" text="Entrar" />
        </form>
      </Section>
      <Section type="signup">
        <h2>Cadastrar</h2>
        <form onSubmit={handleSubmitSignUp(upHandleSubmit)}>
          <Input type="text" placeholder="Nome" name="name" register={registerSignUp} />
          <Input type="email" placeholder="Email" name="email"  register={registerSignUp} />
          <Input type="password" placeholder="Password" name="password" register={registerSignUp} />
          <Input
            type="password"
            placeholder="Confirmar Senha"
            name="password" register={registerSignUp}
          />

          <Button type="submit" text="Cadastrar" />
        </form>
      </Section>
    </AuthContainer>
  );
}
