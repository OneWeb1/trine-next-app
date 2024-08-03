import create from "zustand";

interface IAuthState {
  user: any;
  isAuthenticated: boolean;
  login: (accessToken: string, prolongToken: string) => void;
  logout: () => void;
}

const useAuthStore = create<IAuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: (accessToken, prolongToken) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("prolongToken", prolongToken);

    set({ isAuthenticated: true });
  },

  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("prolongToken");

    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
