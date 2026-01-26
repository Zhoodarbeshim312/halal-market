import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetCategory = () => {
  return useQuery<Category.resCategory, Category.reqCategory>({
    queryKey: ["category"],
    queryFn: async () => {
      const respose = await api.get("/categories");
      return respose.data;
    },
  });
};

export { useGetCategory };
