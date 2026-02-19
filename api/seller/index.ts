import { useMutation } from "@tanstack/react-query";
import { api } from "..";
import { ISeller } from "./type";

const useSeller = () => {
  return useMutation({
    mutationFn: async (newSeller: ISeller) => {
      const response = await api.post("/seller_requests/", newSeller);
      console.log(newSeller);
      return response.data;
    },
  });
};
export { useSeller };
