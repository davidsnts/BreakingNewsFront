import { ButtonStyled } from "./ButtonStyled";
export function Button({ type, text}){
    return <ButtonStyled type={type}>{text}</ButtonStyled>
}