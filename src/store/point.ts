import { StateCreator } from "zustand";

export interface PointState {
    point: number;
    incrementPoint(): void;
}

const getInitialState = () => ({
    point: 0,
})

export const createPointStore: StateCreator<PointState> = (set) => ({
    ...getInitialState(),
    incrementPoint: () => set((state) => ({ point: state.point + 1 })),
})
