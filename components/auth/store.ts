import create from "zustand";
import AuthApi from "@/app/api/auth/AuthApi";

interface IAuthState {
  user: any;
  loading: boolean;
  error: boolean;
  resetForm: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => void;
  registration: (email: string, password: string) => void;
  setLoading: (isLoading: boolean) => void;
  setResetForm: (resetForm: boolean) => void;
  logout: () => void;
}

interface IFormData {
  email: string;
  password: string;
}

const useAuthStore = create<IAuthState>((set, get) => ({
  user: null,
  loading: false,
  error: false,
  resetForm: false,
  isAuthenticated: false,

  setLoading: (isLoading: boolean) => {
    return set({
      loading: isLoading,
    });
  },
  setResetForm: (resetForm: boolean) => {
    return set({
      resetForm: true,
    });
  },

  async login(email: string, password: string) {
    AuthApi.login(email, password, set, get);
  },

  async registration(email: string, password: string) {
    AuthApi.registration(email, password, set, get);
  },

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("prolongToken");

    set({ isAuthenticated: false, user: null });
  },
}));

export default useAuthStore;
