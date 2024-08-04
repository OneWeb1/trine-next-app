import { ProfileMeResponse } from "./UserResponse";

export interface IPlayerRoom {
  id: number;
  nickname: string;
  cards: string[];
  cards_sum: number;
  last_bid: number;
  full_bid: number;
  avatar_id: string;
  state: string;
  last_move: string;
  last_polling_time: number;
  me: false;
  time_for_move: number;
  fight: boolean;
}

export interface RoomsResponse {
  name: string;
  id: string;
  tax: number;
  players: IPlayerRoom[];
  bank: number;
  deck: string[];
  join_tax: number;
  bid: number;
  max_players: number;
  max_bid: number;
  template: boolean;
  creator_id: number;
  svara: boolean;
  svara_pending: boolean;
  state: string;
  time_to_start: number;
}

export interface RoomsPageDataResponse {
  pages: number;
  page: number;
  items_count: number;
  items: RoomsResponse[];
}

export interface RoomsCountResponse {
  player_recruitment: number;
  // inactive_rooms_count: number;
  rooms_count: number;
}

export interface MoveResponse {
  effective_room: RoomsResponse;
  effective_profile: ProfileMeResponse;
}
