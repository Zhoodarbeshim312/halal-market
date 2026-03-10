import { api } from "./../index";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const useGetSubCategory = () => {
  return useQuery<TODO.SubCategoryRes, TODO.SubCategoryReq>({
    queryKey: ["subcategory"],
    queryFn: async () => {
      const response = await api.get("/subcategories");
      return response.data;
    },
  });
};

const usePostSubCategory = () => {
  const queryClient = useQueryClient();
  return useMutation<TODO.resPostSubcategory, Error, TODO.reqPostSubcategory>({
    mutationFn: async (body: TODO.reqPostSubcategory) => {
      const formData = new FormData();
      formData.append("category_id", String(body.category_id));
      formData.append("subcategory_name", body.subcategory_name);
      formData.append("subcategory_image", body.subcategory_image);

      const response = await api.post("/subcategories/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["subcategory"] });
    },
  });
};

export { useGetSubCategory, usePostSubCategory };
