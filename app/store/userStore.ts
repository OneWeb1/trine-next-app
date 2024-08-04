"use client";

import UserService from "@/services/UserService";
import create from "zustand";

interface IUserStore {
  user: any;
  getUser: () => void;
}

const useUserStore = create<IUserStore>((set) => ({
  user: null,
  isAuthenticated: false,
  getUser: async () => {
    try {
      const { data: user } = await UserService.getMeProfile();
      console.log(user);

      return set({
        user: user,
      });
    } catch (e) {
      return set({
        user: null,
      });
    }
  },
}));

export default useUserStore;
