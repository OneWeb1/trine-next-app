import { create } from "zustand";

interface IOpenModal {
  name: string;
}

interface IModalsState {
  openModals: IOpenModal[];
  currentOpenModal: IOpenModal;
  confirmText: string;
  confirmHandlers: any[];
  setConfirmText: (text: string) => void;
  setConfirmHandlers: (handlers: any[]) => void;
  addOpenModal: (openModal: IOpenModal) => void;
  removeOpenModal: () => void;
}

const useModalsStore = create<IModalsState>((set) => ({
  openModals: [],
  currentOpenModal: {} as IOpenModal,
  confirmText: "",
  confirmHandlers: [],
  setConfirmText: (text: string) =>
    set((state) => ({
      confirmText: text,
    })),
  setConfirmHandlers: (handlers: any[]) =>
    set((state) => ({
      confirmHandlers: handlers,
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
