import { create } from "zustand";

const useStore = create((set) => ({
  isIntract: false,
  setIntraction: () => set((state) => ({ isIntract: !state.isIntract })),
  intracted: false,
  setIntracted: (value) => set(() => ({ intracted: value })),
}));

export default useStore;
