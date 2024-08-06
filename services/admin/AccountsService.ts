import $api from "@/http";
import {
  AccountsPageDataResponse,
  AccountStatisticsResponse,
  AdminAccountResponse,
} from "@/models/response/admin/AccountsResponse";
import { AxiosResponse } from "axios";

class AccountsService {
  static async getAccounts(
    offset: number,
    limit: number
  ): Promise<AxiosResponse<AccountsPageDataResponse>> {
    return $api.get<AccountsPageDataResponse>("/admin/profile/", {
      params: { offset, limit },
    });
  }
  static async getProfileById(
    id: number
  ): Promise<AxiosResponse<AdminAccountResponse>> {
    return $api.get<AdminAccountResponse>(`/admin/profile/${id}`);
  }

  static async getTotalBalance(): Promise<
    AxiosResponse<{ totalBalance: number }>
  > {
    return $api.get<{ totalBalance: number }>("/admin/profile/total-balance");
  }

  static async getAccountStats(
    id: number
  ): Promise<AxiosResponse<AccountStatisticsResponse>> {
    return $api.get(`/stat/player/${id}`);
  }
  static async removeAccountById(id: number): Promise<AxiosResponse<string>> {
    return $api.delete<string>(`/admin/profile/${id}`);
  }

  static async changeBalance(
    id: number,
    balance: string
  ): Promise<AxiosResponse<string>> {
    return $api.post<string>(`/admin/profile/${id}/update`, null, {
      params: { balance },
    });
  }
}

export default AccountsService;
