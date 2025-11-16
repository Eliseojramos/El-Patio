import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(3, { message: "el nombre debe tener al menos 3 caracteres" })
    .nonempty({ message: "El nombre no puede estar vacío" }),

  lastname: z
    .string()
    .min(3, { message: "el apellido debe tener al menos 3 caracteres" })
    .nonempty({ message: "El apellido no puede estar vacío" }),

  email: z
    .string()
    .email({ message: "Correo inválido" })
    .nonempty({ message: "El correo no puede estar vacío" }),
  pass: z
    .string()
    .min(6, { message: "La contraseña debe tener al menos 6 caracteres" })
    .nonempty({ message: "La contraseña no puede estar vacía" }),
});

export type FormData = z.infer<typeof userSchema>;
