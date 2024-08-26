import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../apis/user.ts";

export const useUser = () => {
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });
  return query;
};
