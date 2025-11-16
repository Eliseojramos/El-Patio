import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { userSchema, type FormData } from "../schemas/user";
import Reg from "./Reg.tsx";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

import { useState } from "react";
import { CardContent, Card } from "./ui/card";

const UserForm = () => {
  const [users, setUsers] = useState<FormData[]>([]);
  const form = useForm<FormData>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      name: "",
      lastname: "",
      email: "",
      pass: "",
    },
  });

  const onSubmit = (data: FormData) => {
    setUsers((prev) => [...prev, data]);
  };
  const eliminar = () => form.reset();
  const deleteUser = (index: number) => {
    setUsers((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <Card className="m-auto mt-10 w-96 p-4 shadow-lg">
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Apellido</FormLabel>
                    <FormControl>
                      <Input placeholder="Apellido" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Correo electrónico" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="pass"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Contraseña</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Contraseña"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Enviar
              </Button>
            </form>
          </Form>
          <Button
            onClick={() => eliminar()}
            type="button"
            className="w-full mt-5"
          >
            reset
          </Button>
        </CardContent>
      </Card>

      <Reg users={users} onDelete={deleteUser} />
    </>
  );
};
export default UserForm;
