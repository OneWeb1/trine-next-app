import { RoomsPageDataResponse } from "@/models/response/GameResponse";
import GameService from "@/services/GameService";
import create from "zustand";
import UserApi from "../api/user/UserApi";
import RoomsApi from "../api/rooms/RoomsApi";

interface IRoomsStore {
  rooms: RoomsPageDataResponse;
  loading: boolean;
  error: any;
  getRoomsData: () => Promise<void>;
}

const useRoomsStore = create<IRoomsStore>((set) => ({
  rooms: {} as RoomsPageDataResponse,
  loading: false,
  error: null,
  getRoomsData: async () => {
    await RoomsApi.getRoomsData(set);
  },
}));

export default useRoomsStore;
