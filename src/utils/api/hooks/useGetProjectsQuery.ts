import { useQuery } from "@tanstack/react-query";
import { getProjects } from "../requests";

export const useGetProjectsQuery = () => 
  useQuery({
    queryKey: ['get-projects'],
    queryFn: () => getProjects()
  })