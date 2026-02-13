import { create } from "zustand";

interface IModalState {
  openModal: boolean;
  toggle: () => void;
  close: () => void;
}

export const useModalStore = create<IModalState>((set) => ({
  openModal: false,
  toggle: () => set((state) => ({ openModal: !state.openModal })),
  close: () => set({ openModal: false }),
}));
