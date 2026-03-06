import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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
const usePostCategory = () => {
  const queryClient = useQueryClient();

  return useMutation<Category.resPostCategory, Error, Category.reqPostCategory>(
    {
      mutationFn: async (data) => {
        const response = await api.post("/categories/", data, {
          headers: { "Content-Type": "application/json" },
        }); // просто JSON
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["category"] });
      },
    },
  );
};

const useGetIdCategory = (id: number) => {
  return useQuery<Category.CategoryDetail>({
    queryKey: ["category", id],
    queryFn: async () => {
      const respose = await api.get(`/categories/${id}`);
      return respose.data;
    },
  });
};

export { useGetCategory, usePostCategory, useGetIdCategory };
