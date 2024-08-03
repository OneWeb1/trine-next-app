import { ProfileMeResponse } from "../models/response/UserResponse";
import $api from "../http";
import { AxiosResponse } from "axios";

export default class UserService {
  static async getMeProfile(): Promise<AxiosResponse<ProfileMeResponse>> {
    return $api.get<ProfileMeResponse>("/profile/me");
  }

  static async getAvatars(): Promise<AxiosResponse<string[]>> {
    return $api.get<string[]>("/profile/avatars");
  }

  static async changeNickname(name: string): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/profile/change_nickname?nickname=${name}`);
  }

  static async changePassword(
    formData: FormData
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/profile/change_password`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
