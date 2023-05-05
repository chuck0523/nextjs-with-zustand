"use client";

import { PropsWithChildren } from "react";
import { StoreContext, createStore } from ".";

const StoreProvider = ({ children, ...props }: PropsWithChildren) => {
  return (
    <StoreContext.Provider value={createStore(props)}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;