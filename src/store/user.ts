import { StateCreator } from "zustand";

export interface UserState {
    userName: string;
    setUserName: (name: string) => void;
}

const getInitialState = () => ({
    userName: 'unknown',
})

export const createUserStore: StateCreator<UserState> = (set) => ({
    ...getInitialState(),
    setUserName: (name: string) => set({ userName: name }),
})
