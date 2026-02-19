import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetAdmin = () => {
  return useQuery<Product.ResProduct, Product.ReqProduct>({
    queryKey: ["admins"],
    queryFn: async () => {
      const responce = await api.get("/admins/");
      return responce.data;
    },
  });
};
export { useGetAdmin };
