import { create } from "zustand";

interface IOpenModal {
  name: string;
}

interface IModalsState {
  openModals: IOpenModal[];
  currentOpenModal: IOpenModal;
  confirmText: string;
  setConfirmText: (text: string) => void;
  addOpenModal: (openModal: IOpenModal) => void;
  removeOpenModal: () => void;
}

const useModalsStore = create<IModalsState>((set) => ({
  openModals: [],
  currentOpenModal: {} as IOpenModal,
  confirmText: "",
  setConfirmText: (text: string) =>
    set((state) => ({
      confirmText: text,
    })),
  addOpenModal: (openModal: IOpenModal) =>
    set((state) => ({
      openModals: [...state.openModals, openModal],
    })),
  removeOpenModal: () =>
    set((state) => ({
      openModals: state.openModals.filter(
        (openModal: IOpenModal, idx: number) =>
          idx !== state.openModals.length - 1
      ),
    })),
}));

export default useModalsStore;
