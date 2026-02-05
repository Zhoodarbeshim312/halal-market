import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetProduct = () => {
  return useQuery<Product.ResProduct, Product.ReqProduct>({
    queryKey: ["product"],
    queryFn: async () => {
      const responce = await api.get("/products");
      return responce.data;
    },
  });
};

const useGetById = (id: number) => {
  return useQuery<Product.getByIdRes>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await api.get(`/products/${id}`);
      return response.data;
    },
  });
};

export { useGetProduct, useGetById };
