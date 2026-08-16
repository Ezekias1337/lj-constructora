// src/types/routes.ts
export interface LoginSearchParams {
  redirect?: string;
}

export interface VerifyEmailSearchParams {
  id: string;
}

export interface PasswordResetSearchParams {
  token: string;
  userId: string;
}