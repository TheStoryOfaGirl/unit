import { Project } from "types";
import { api, API_URL } from "../../api";

export const getProjects = async () => 
  await api.get<Project[]>(`${API_URL}/api-auth/all-projects/`)