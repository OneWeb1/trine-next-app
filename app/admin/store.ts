import { create } from "zustand";

interface IAdminState {
  currentPage: string;
  setCurrentPage: (currentPage: string) => void;
}

const useAdminStore = create<IAdminState>((set) => ({
  currentPage: "accounts",
  setCurrentPage: (currentPage: string) =>
    set((state) => ({
      currentPage,
    })),
}));

export default useAdminStore;
