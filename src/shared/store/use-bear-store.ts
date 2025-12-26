import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const STORAGE_KEY = "bear-storage";

interface BearState {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  updateBears: (newBears: number) => void;
}

export const useBearStore = create<BearState>()(
  persist(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      updateBears: (newBears) => set({ bears: newBears }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
    }
  )
);
