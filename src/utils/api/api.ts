import axios from "axios";

export const API_URL = "http://84.201.151.248:8000";

export const api = axios.create({
  baseURL: API_URL,
});
