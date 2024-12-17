import { useQuery } from "@tanstack/react-query";
import { getNews } from "../requests/getNews";

export const useGetNewsQuery = () =>
  useQuery({
    queryKey: ["get-news"],
    queryFn: () => getNews(),
  });
