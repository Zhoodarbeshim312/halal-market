import { api } from "./../index";
import { useQuery } from "@tanstack/react-query";

const useGetSubCategory = () => {
  return useQuery<TODO.SubCategoryRes, TODO.SubCategoryReq >({
    queryKey: ["subcategory"],
    queryFn: async () => {
      const response = await api.get("/subcategories");
      return response.data;
    },
  });
};
export { useGetSubCategory };
