"use client";

import UserService from "@/services/UserService";
import create from "zustand";
import UserApi from "../api/user/UserApi";
import { ProfileMeResponse } from "@/models/response/UserResponse";

interface IUserStore {
  avatars: string[];
  profile: ProfileMeResponse | null;
  loading: boolean;
  error: boolean;

  changeAvatar: (id: string) => void;
  changeNickname: (name: string) => void;

  getAvatars: () => void;
  getProfile: () => void;
}

const useUserStore = create<IUserStore>((set, get) => ({
  avatars: [],

  profile: null,
  loading: false,
  error: false,
  changeAvatar: async (id: string) => {
    await UserApi.changeAvatar(id, set, get);
  },
  changeNickname: async (name: string) => {
    await UserApi.changeNickname(name, set, get);
  },
  getAvatars: async () => {
    await UserApi.getAvatars(set);
  },
  getProfile: async () => {
    await UserApi.getProfile(set, get);
  },
}));

export default useUserStore;
