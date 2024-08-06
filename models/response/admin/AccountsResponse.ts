export interface AdminAccountResponse {
  id: number;
  nickname: string;
  avatar_id: string;
  created_at: string;
  is_admin: boolean;
  is_super_admin: boolean;
  email: string;
  balance: number;
  verified: boolean;
}

export interface AccountsPageDataResponse {
  pages: number;
  page: number;
  items_count: number;
  items: AdminAccountResponse[];
}

export interface AccountStatisticsResponse {
  won_times: number;
  defeat_times: number;
}
