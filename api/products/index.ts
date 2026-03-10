import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<Product.ResPostProduct, Error, Product.ReqPostProduct>({
    mutationFn: async (product) => {
      const formData = new FormData();
      formData.append(
        "product_subcategory",
        String(product.product_subcategory),
      );
      const optionalFields: (keyof Product.ReqPostProduct)[] = [
        "product_name",
        "price",
        "country",
        "ingredients",
        "auction",
        "description",
      ];
      optionalFields.forEach((key) => {
        const value = product[key];
        if (value !== undefined && value !== "") {
          formData.append(key, String(value));
        }
      });
      if (product.best_before_date) {
        formData.append("best_before_date", product.best_before_date);
      }
      product.images?.forEach((image) => {
        formData.append("images", image, image.name);
      });
      console.log("FORMDATA entries:");
      for (let [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const response = await api.post("/products_create/", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      console.log("SERVER RESPONSE:", response.data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};

export { useGetProduct, useGetById, usePostProduct };
