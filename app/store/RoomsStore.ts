import { RoomsPageDataResponse } from "@/models/response/GameResponse";
import GameService from "@/services/GameService";
import create from "zustand";

interface IRoomsStore {
  rooms: RoomsPageDataResponse;
  getRoomsData: () => void;
}

const useRoomsStore = create<IRoomsStore>((set) => ({
  rooms: {} as RoomsPageDataResponse,
  isAuthenticated: false,
  getRoomsData: async () => {
    try {
      const { data: rooms } = await GameService.getRooms({
        offset: 0,
        limit: 20,
      });
      console.log(rooms);

      return set({
        rooms: rooms,
      });
    } catch (e) {
      return set({
        rooms: {} as RoomsPageDataResponse,
      });
    }
  },
}));

export default useRoomsStore;
