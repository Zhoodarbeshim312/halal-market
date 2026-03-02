import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "..";

const getSellerRequests = () => {
  return useQuery<SELLER_REQUESTS.ReqSeller[]>({
    queryKey: ["seller_requests"],
    queryFn: async () => {
      const response = await api.get("/seller_requests/");
      return response.data;
    },
  });
};
const getByIdSellerRequests = (id: number) => {
  return useQuery({
    queryKey: ["seller_requests"],
    queryFn: async () => {
      const response = await api.get(`/seller_requests/${id}`);
      return response.data;
    },
  });
};
type PatchSellerRequest = {
  id: number;
  data: {
    phone_number?: string;
    status?: "pending" | "approved" | "rejected";
  };
};

const usePatchSellerRequest = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: PatchSellerRequest) => {
      const response = await api.patch(`/seller_requests/${id}/`, data);
      return response.data;
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["seller_requests"],
      });
      queryClient.invalidateQueries({
        queryKey: ["seller_request", variables.id],
      });
    },
  });
};
export { getSellerRequests, getByIdSellerRequests, usePatchSellerRequest };
