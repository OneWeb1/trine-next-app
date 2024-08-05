import { RoomsPageDataResponse } from "@/models/response/GameResponse";
import GameService from "@/services/GameService";

class RoomsApi {
  static async getRoomsData(set: any) {
    set({ loading: true, error: null });
    try {
      const { data: rooms } = await GameService.getRooms({
        offset: 0,
        limit: 20,
      });

      set({
        rooms: rooms,
      });
    } catch (e) {
      set({
        rooms: {} as RoomsPageDataResponse,
        error: e,
      });
    } finally {
      set({ loading: false });
    }
  }
}

export default RoomsApi;
