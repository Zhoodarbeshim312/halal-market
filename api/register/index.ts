import { useMutation } from "@tanstack/react-query";
import { api } from "..";
import { TUser } from "./type";

const useRegister = () => {
  return useMutation({
    mutationFn: async (newRegister: TUser) => {
      const response = await api.post("/register/", newRegister);
      console.log(newRegister);
      return response.data;
    },
  });
};

export { useRegister };
