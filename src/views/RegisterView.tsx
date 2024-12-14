import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, Input } from "@nextui-org/react";
import { isAxiosError } from "axios";
import { toast } from "sonner";

import api from "../config/axios";
import type { RegisterForm } from "../types";

export default function RegisterView() {
  const location = useLocation();
  const navigate = useNavigate();

  const initialValue: RegisterForm = {
    name: "",
    email: "",
    handle: location?.state?.handle || "",
    password: "",
    passwordConfirmation: "",
  };

  const {
    register,
    watch,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({ defaultValues: initialValue });

  const password = watch("password");

  const handleRegister = async (formData: RegisterForm) => {
    try {
      const { data } = await api.post(`/auth/register`, formData);
      toast.success(data.message);
      reset();
      navigate(`/auth/login`);
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response?.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl text-white font-bold">Crear Cuenta</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-16 rounded-lg mt-10 space-y-4"
      >
        <Input
          isRequired
          type="text"
          label="Nombre"
          isInvalid={!!errors.name}
          errorMessage={`${errors.name?.message}`}
          {...register("name", {
            required: "El nombre es obligatorio",
          })}
        />
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
          type="text"
          label="Handle"
          isInvalid={!!errors.handle}
          errorMessage={`${errors.handle?.message}`}
          {...register("handle", {
            required: "El handle es obligatorio",
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
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
          })}
        />
        <Input
          isRequired
          type="password"
          label="Confirmar Contraseña"
          isInvalid={!!errors.passwordConfirmation}
          errorMessage={`${errors.passwordConfirmation?.message}`}
          {...register("passwordConfirmation", {
            required: "La contraseña de confirmación es obligatoria",
            validate: (value) =>
              value === password || "La contraseña no coinciden",
          })}
        />
        <Button
          type="submit"
          size="lg"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-700 rounded-lg font-bold cursor-pointer"
        >
          Crear Cuenta
        </Button>
      </form>
      <nav className="mt-10">
        <Link to="/auth/login" className="text-center text-white block">
          ¿Ya tienes cuenta? Iniciar sesión
        </Link>
      </nav>
    </>
  );
}
