import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetProduct = () => {
  return useQuery<Product.resProduct, Product.reqProduct>({
    queryKey: ["product"],
    queryFn: async () => {
      const responce = await api.get("/products");
      return responce.data;
    },
  });
};

export { useGetProduct };
