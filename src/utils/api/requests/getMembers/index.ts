import { Member } from "types";
import { api, API_URL } from "../../api";

export const getMembers = async () =>
  await api.get<Member[]>(`${API_URL}/api-auth/all-users/`);
