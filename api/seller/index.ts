import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { api } from "..";

const useSellerCreate = (): UseMutationResult<
  SellerCreateResponse,
  unknown,
  SellerCreateRequest
> => {
  return useMutation({
    mutationFn: async (
      data: SellerCreateRequest,
    ): Promise<SellerCreateResponse> => {
      const payload = {
        phone_number: "+996" + data.phone.replace(/\D/g, ""),
        message: "Seller registration",
      };
      console.log("📤 POST payload:", payload);
      const res = await api.post<SellerCreateResponse>(
        "/seller_requests/",
        payload,
      );
      return res.data;
    },
  });
};

const useSellerVerify = (): UseMutationResult<
  SellerVerifyResponse,
  unknown,
  SellerVerifyRequest
> => {
  return useMutation({
    mutationFn: async (
      data: SellerVerifyRequest,
    ): Promise<SellerVerifyResponse> => {
      const res = await api.patch<SellerVerifyResponse>(
        `/seller_requests/${data.id}/`,
        {
          code: data.code,
        },
      );
      return res.data;
    },
  });
};

export { useSellerCreate, useSellerVerify };
