export interface PasswordResetRequest {
  email: string;
}
export interface PasswordResetResponse {
  token?: string;
  detail?: string;
}
export interface PasswordResetConfirmRequest {
  email: string;
  reset_code: string;
  new_password: string;
  confirm_password: string;
}
export interface PasswordResetConfirmResponse {
  success?: boolean;
  detail?: string;
}
export interface PasswordResetValidateTokenRequest {
  email: string;
  token: string;
}
export interface PasswordResetValidateTokenResponse {
  valid: boolean;
  detail?: string;
}
export interface PasswordResetVerifyCodeRequest {
  email: string;
  reset_code: string;
  new_password: string;
  confirm_password: string;
}
export interface PasswordResetVerifyCodeResponse {
  valid: boolean;
  detail?: string;
}
