"use client";

import Link from "next/link";
import { useStore } from "@/store";
import { useEffect } from "react";

interface Props {
  name: string;
}

/**
 * display user's name and point
 */
const User: React.FC<Props> = (props) => {
  // Using global store
  const { userName, setUserName, point, incrementPoint } = useStore();

  useEffect(() => {
    // Set name fetched from API
    setUserName(props.name);
  }, [props.name, setUserName]);

  return (
    <>
      Hi, {userName}! You have {point} points.
      <br />
      <br />
      <button onClick={() => setUserName("unknown")}>reset name</button>
      <button onClick={incrementPoint}>get point</button>
      <br />
      <br />
      <Link href="/">Go to Home Page</Link>
    </>
  );
};

export default User;
