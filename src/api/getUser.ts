import { isAxiosError } from "axios";
import api from "../config/axios";
import { ProfileForm, User, UserHandle } from "../types";

export const getUser = async () => {
  try {
    const { data } = await api<User>(`/user`);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const updateProfile = async (formData: ProfileForm) => {
  try {
    const { data } = await api.patch<string>(`/user`, formData);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const uploadImage = async (file: File) => {
  let formData = new FormData();
  formData.append("file", file);

  try {
    const {
      data: { image },
    }: { data: { image: string } } = await api.post("/user/image", formData);
    return image;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const getUserByHandle = async (handle: string) => {
  try {
    const url = `/${handle}`;

    const { data } = await api<UserHandle>(url);
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};

export const searchByHandle = async (handle: string) => {
  try {
    const { data } = await api.post<string>("/search", { handle });
    return data;
  } catch (error) {
    if (isAxiosError(error) && error.response) {
      throw new Error(error.response.data.error);
    }
  }
};
