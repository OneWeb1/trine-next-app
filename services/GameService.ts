import $api from "@/http";
import {
  MoveResponse,
  RoomsPageDataResponse,
  RoomsResponse,
} from "@/models/response/GameResponse";
import { AxiosResponse } from "axios";

export default class GameService {
  static async getRooms({
    offset,
    limit,
  }: {
    offset: number;
    limit: number;
  }): Promise<AxiosResponse<RoomsPageDataResponse>> {
    return $api.get<RoomsPageDataResponse>(
      `/room?offset=${offset}&limit=${limit}`
    );
  }

  static async joinRoom(id: string): Promise<AxiosResponse<RoomsResponse>> {
    return $api.post<RoomsResponse>(`/room/join?id=${id}`);
  }

  static async do(params: {
    action: string;
    sum?: number;
  }): Promise<AxiosResponse<MoveResponse>> {
    const query =
      (params.action === "raise" && {
        params: { sum: params.sum },
      }) ||
      {};
    return $api.post<MoveResponse>(`/room/do/${params.action}`, null, query);
  }
}
