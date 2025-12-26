import { create } from "zustand";
import { persist } from "zustand/middleware";

interface PointState {
  point: number;
  setPoint: (point: number) => void;
  addPoint: (amount: number) => void;
  subtractPoint: (amount: number) => void;
}

export const usePointStore = create<PointState>()(
  persist(
    (set) => ({
      point: 10,
      setPoint: (point) => set({ point }),
      addPoint: (amount) => set((state) => ({ point: state.point + amount })),
      subtractPoint: (amount) =>
        set((state) => ({ point: Math.max(0, state.point - amount) })),
    }),
    {
      name: "point-storage",
    }
  )
);
