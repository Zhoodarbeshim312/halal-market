import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { api } from "..";

const useGetComent = () => {
  return useQuery<USER.resGetComent, USER.reqGetComent>({
    queryKey: ["coment"],
    queryFn: async () => {
      const response = await api.get("/comments/");
      return response.data;
    },
  });
};

const usePostComent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data) => {
      const response = await api.post("/comments/", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["me"],
      });
    },
  });
};

export { useGetComent, usePostComent };
