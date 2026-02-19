import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const getSellerRequests = () => {
  return useQuery<SELLER_REQUESTS.req_sellers[]>({
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
export { getSellerRequests, getByIdSellerRequests };
