export interface ProfileMeResponse {
  id: number;
  nickname: string;
  avatar_id: string;
  created_at: string;
  is_admin: boolean;
  is_super_admin: boolean;
  email: string;
  balance: number;
  verified: false;
}
