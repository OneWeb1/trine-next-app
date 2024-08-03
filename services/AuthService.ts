import $api from "@/http";
import { AuthResponse } from "@/models/response/AuthResponse";

import { AxiosResponse } from "axios";

export default class AuthService {
  static async login(formData: FormData): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/signin", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async registration(
    formData: FormData
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/signup", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async verify(code: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.get<AuthResponse>(`/auth/verify?code=${code}`);
  }

  static async recovery(
    formData: FormData
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>("/auth/recovery", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async prolong(token: string): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>(`/auth/prolong?token=${token}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
