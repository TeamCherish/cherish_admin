import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:5005",
  headers: {
    "Content-Type": "application/json",
  },
});
