import { create } from 'zustand'

const useStore = create((set) => ({
  isIntract: false,
  setIntraction:()=>set((state) => ({ isIntract: !state.isIntract })),
}))

export default useStore;