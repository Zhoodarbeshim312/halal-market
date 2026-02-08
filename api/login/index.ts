import { useMutation } from "@tanstack/react-query";
import { api } from "..";
import { TUser } from "./type";

const useLogin = () => {
  return useMutation({
    mutationFn: async (user: TUser) => {
      const response = await api.post("/login/", user);
      console.log(user);
      return response.data;
    },
  });
};

export { useLogin };
