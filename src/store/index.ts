"use client";

import { createContext, useContext } from "react";
import {
  StateCreator,
  createStore as createZustandStore,
  useStore as useZustandStore,
} from "zustand";
import { devtools } from "zustand/middleware";
import { PointState, createPointStore } from "./point";
import { UserState, createUserStore } from "./user";

export type Store = UserState & PointState;

const zustandContext = createContext<Store | null>(null);

export const Provider = zustandContext.Provider;

export const createStore = (props: Partial<Store>) =>
  createZustandStore<Store>(
    devtools(
      (...a) => ({
      ...createUserStore(...a),
      ...createPointStore(...a),
      ...props,
    })) as StateCreator<Store, [], []> // devtoolsを挟むと型が壊れるので、型を強制的に戻す
  );

export const StoreContext = createContext<ReturnType<
  typeof createStore
> | null>(null);

export const useStore = (selector?: (state: Store) => Store) => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error("Store is missing the provider");
  }
  return useZustandStore(store, selector ?? ((s) => s));
};
