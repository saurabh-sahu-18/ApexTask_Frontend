import axios from "axios";

const api = axios.create({
  baseURL: "https://apex-task-backend.vercel.app/api",
});

export default api;