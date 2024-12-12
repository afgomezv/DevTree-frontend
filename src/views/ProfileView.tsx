import { ChangeEvent } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { ProfileForm, User } from "../types";
import { updateProfile, uploadImage } from "../api/getUser";
import { toast } from "sonner";

export default function ProfileView() {
  const queryClient = useQueryClient();
  const data: User = queryClient.getQueryData(["user"])!;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileForm>({
    defaultValues: {
      handle: data.handle,
      description: data.description,
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: updateProfile,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
  });

  const uploadImageMutation = useMutation({
    mutationFn: uploadImage,
    onError: (error) => {
      console.log(error);
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], (prevData: User) => {
        return {
          ...prevData,
          image: data,
        };
      });
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      uploadImageMutation.mutate(e.target.files[0]);
    }
  };

  const handleUserProfileForm = (formData: ProfileForm) => {
    const user: User = queryClient.getQueryData(["user"])!;
    user.description = formData.description;
    user.handle = formData.handle;
    updateProfileMutation.mutate(user);
  };

  return (
    <form
      className="bg-white p-10 rounded-lg space-y-5"
      onSubmit={handleSubmit(handleUserProfileForm)}
    >
      <legend className="text-2xl text-slate-800 text-center">
        Editar Información
      </legend>
      <div className="grid grid-cols-1 gap-2">
        <Input
          type="text"
          size="lg"
          label="Handle o nombre de usuario"
          isInvalid={!!errors.handle}
          errorMessage={`${errors.handle?.message}`}
          {...register("handle", {
            required: "El nombre de usuario es obligatorio",
          })}
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <Textarea
          label="Descripción"
          isInvalid={!!errors.description}
          errorMessage={`${errors.description?.message}`}
          {...register("description", {
            required: "La descripción es obligatoria",
          })}
        />
      </div>

      <div className="grid grid-cols-1 gap-2">
        <label htmlFor="handle">Imagen:</label>
        <Input
          type="file"
          size="lg"
          name="handle"
          accept="image/*"
          onChange={handleChange}
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="bg-cyan-400 p-2 text-lg w-full uppercase
        text-slate-600 rounded-lg font-bold cursor-pointer"
      >
        Guardar Cambios
      </Button>
    </form>
  );
}
