"use client";
import { useUser } from "@repo/react-query";

const TextComp = () => {
  const { data, isLoading } = useUser();
  console.log("ekchbdvsakcvJKBISVC WUY", data);
  if (isLoading) {
    return <div>loading....</div>;
  }
  return <div>dummy data 231 {JSON.stringify(data)}</div>;
};

export default TextComp;
