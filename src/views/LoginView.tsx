import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { isAxiosError } from "axios";
import { toast } from "sonner";

import api from "../config/axios";
import { LoginForm } from "../types";

export default function LoginView() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();

  const handleLogin = async (formData: LoginForm) => {
    try {
      const { data } = await api.post(`/auth/login`, formData);
      localStorage.setItem("AUTH_TOKEN", data.message);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response?.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Iniciar Sesión</h1>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="bg-white px-5 py-16 rounded-lg mt-10 space-y-4"
      >
        <Input
          isRequired
          type="email"
          label="Correo electrónico"
          isInvalid={!!errors.email}
          errorMessage={`${errors.email?.message}`}
          {...register("email", {
            required: "El correo electrónico es obligatorio",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "El formato del correo no es válido",
            },
          })}
        />
        <Input
          isRequired
          type="password"
          label="Contraseña"
          isInvalid={!!errors.password}
          errorMessage={`${errors.password?.message}`}
          {...register("password", {
            required: "La contraseña es obligatoria",
          })}
        />
        <Button
          type="submit"
          size="lg"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-700 rounded-lg font-bold cursor-pointer"
        >
          Iniciar Sesión
        </Button>
      </form>
      <nav className="mt-10">
        <Link to="/auth/register" className="text-center text-white block">
          ¿No tienes cuenta? Crea una aquí
        </Link>
      </nav>
    </>
  );
}
