import { Button, Input, Spinner } from "@nextui-org/react";
import slugify from "react-slugify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { searchByHandle } from "../api/getUser";
import { Link } from "react-router-dom";

export default function SearchForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const mutation = useMutation({
    mutationFn: searchByHandle,
  });

  const handle = watch("handle");

  const handleSearch = () => {
    const slug = slugify(handle);
    mutation.mutate(slug);
  };

  return (
    <form onSubmit={handleSubmit(handleSearch)} className="space-y-5">
      <div className="relative flex items-center bg-white pt-4 pb-2  px-3 rounded-xl">
        <Input
          type="text"
          size="lg"
          startContent={
            <span className="text-lg font-semibold">devtree.com/</span>
          }
          classNames={{
            input: "-ml-1.5",
          }}
          placeholder="elonmusk, jeffbezos"
          isInvalid={!!errors.handle}
          errorMessage={`${errors.handle?.message}`}
          {...register("handle", {
            required: "Un nombre de usuario es obligatorio",
          })}
        />
      </div>

      <div className="mt-10">
        {mutation.isPending && (
          <div className="text-center">
            <Spinner />
          </div>
        )}
        {mutation.isError && (
          <p className="text-center text-red-500 font-black">
            {mutation.error.message}
          </p>
        )}
        {mutation.data && (
          <p className="text-center text-cyan-500 font-black">
            {mutation.data} ir a{" "}
            <Link to="/auth/register" state={{ handle: slugify(handle) }}>
              Registro
            </Link>
          </p>
        )}{" "}
      </div>

      <Button
        type="submit"
        className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
      >
        Obtener mi DevTree
      </Button>
    </form>
  );
}
