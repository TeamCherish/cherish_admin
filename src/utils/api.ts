import axios from "axios";

export const client = axios.create({
  baseURL: "https://13.209.140.85:8080",
  headers: {
    "Content-Type": "application/json",
  },
});
