import { api } from "..";
import { AxiosResponse } from "axios";
import {
  PasswordResetConfirmRequest,
  PasswordResetConfirmResponse,
  PasswordResetRequest,
  PasswordResetResponse,
  PasswordResetValidateTokenRequest,
  PasswordResetValidateTokenResponse,
  PasswordResetVerifyCodeRequest,
  PasswordResetVerifyCodeResponse,
} from "./type";

export const requestPasswordReset = (
  payload: PasswordResetRequest,
): Promise<PasswordResetResponse> => {
  return api
    .post<PasswordResetResponse>("/password_reset/", payload)
    .then((res: AxiosResponse<PasswordResetResponse>) => res.data);
};

export const confirmPasswordReset = (
  payload: PasswordResetConfirmRequest,
): Promise<PasswordResetConfirmResponse> => {
  return api
    .post<PasswordResetConfirmResponse>("/password_reset/confirm/", payload)
    .then((res: AxiosResponse<PasswordResetConfirmResponse>) => res.data);
};

export const validateToken = (
  payload: PasswordResetValidateTokenRequest,
): Promise<PasswordResetValidateTokenResponse> => {
  return api
    .post<PasswordResetValidateTokenResponse>(
      "/password_reset/validate_token/",
      payload,
    )
    .then((res: AxiosResponse<PasswordResetValidateTokenResponse>) => res.data);
};

export const verifyCode = (
  payload: PasswordResetVerifyCodeRequest,
): Promise<PasswordResetVerifyCodeResponse> => {
  return api
    .post<PasswordResetVerifyCodeResponse>(
      "/password_reset/verify_code/",
      payload,
    )
    .then((res: AxiosResponse<PasswordResetVerifyCodeResponse>) => res.data);
};
