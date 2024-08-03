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
    const { data: user } = await UserService.getMeProfile();
    console.log(user);

    return set({
      user: user,
    });
  },
}));

export default useUserStore;
