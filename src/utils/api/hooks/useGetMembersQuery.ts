import { useQuery } from "@tanstack/react-query";
import { getMembers } from "../requests/getMembers";

export const useGetMembersQuery = () =>
  useQuery({
    queryKey: ["get-members"],
    queryFn: () => getMembers(),
  });
