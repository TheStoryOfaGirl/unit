import { News } from "types";
import { api, API_URL } from "../../api";

export const getNews = async () =>
  await api.get<News[]>(`${API_URL}/api-app/all-news/`);
