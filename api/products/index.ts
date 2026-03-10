import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
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

// const usePostProduct = () => {
//   const queryClient = useQueryClient();
//   return useMutation<Product.ResPostProduct, Error, Product.ReqPostProduct>({
//     mutationFn: async (product) => {
//       const formData = new FormData();

//       formData.append(
//         "product_subcategory",
//         String(product.product_subcategory),
//       );
//       formData.append("product_name", product.product_name ?? "");
//       formData.append("price", String(product.price ?? ""));
//       formData.append("country", product.country ?? "");
//       formData.append("ingredients", product.ingredients ?? "");
//       if (product.best_before_date) {
//         formData.append("best_before_date", product.best_before_date);
//       }
//       formData.append("auction", product.auction ?? "");
//       formData.append("description", product.description ?? "");

//       // ✅ добавляем каждый файл
//       product.images?.forEach((image) => {
//         formData.append("images", image);
//       });
//       const response = await api.post("/products_create/", formData, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("token")}`,
//         },
//       });
//       return response.data;
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["product"] });
//     },
//   });
// };

const usePostProduct = () => {
  const queryClient = useQueryClient();
  return useMutation<Product.ResPostProduct, Error, Product.ReqPostProduct>({
    mutationFn: async (product) => {
      const formData = new FormData();

      // ✅ Обязательное поле
      formData.append(
        "product_subcategory",
        String(product.product_subcategory),
      );

      // ✅ Необязательные поля — добавляем только если не пустые
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

      // ✅ Дата — только если выбрана
      if (product.best_before_date) {
        formData.append("best_before_date", product.best_before_date);
      }

      // ✅ Файлы
      product.images?.forEach((image) => {
        formData.append("images", image);
      });

      // ✅ Убрали Content-Type — axios сам поставит с boundary
      const response = await api.post("/products_create/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });
};

export { useGetProduct, useGetById, usePostProduct };
