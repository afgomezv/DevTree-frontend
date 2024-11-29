export type User = {
  name: string;
  email: string;
  handle: string;
  password: string;
};

export type RegisterFrom = Pick<User, "handle" | "email" | "name"> & {
  password: string;
  passwordConfirmation: string;
};
