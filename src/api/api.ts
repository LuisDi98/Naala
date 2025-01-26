import axios from "axios";

const api = axios.create({
  baseURL: "https://naala-api.vercel.app/api/",
  //baseURL: "http://localhost:5500/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
