import { useQuery } from "@tanstack/react-query";
import { api } from "..";

const useGetClients = () => {
  return useQuery({
    queryKey: ["clients"],
    queryFn: async () => {
      const response = await api.get("/clients/");
      return response.data;
    },
  });
};
export { useGetClients };
