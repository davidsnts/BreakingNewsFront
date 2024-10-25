import { z } from "zod";

export const signInSchema = z.object({
    email: z.string().email({ message: "E-mail inválido"}).toLowerCase(),
    password: z.string().min(3, {message:"Senha deve ter no mínimo 3 caracteres"})
})
