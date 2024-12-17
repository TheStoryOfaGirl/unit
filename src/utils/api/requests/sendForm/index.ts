import { api, API_URL } from "@utils";
import { FormValues } from "types";

export const sendForm = async (formValues: FormValues) =>
  await api.post(`${API_URL}/api-app/create-apply/`, formValues);
