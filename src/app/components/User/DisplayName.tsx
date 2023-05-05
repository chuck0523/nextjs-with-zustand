"use client";

import { useStore } from "@/store";

/**
 * Display User's name
 */
const DisplayName: React.FC = () => {
  const { name } = useStore();
  return <div> Hi, {name} </div>;
};

export default DisplayName;
