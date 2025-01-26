import axios from "axios";

const api = axios.create({
  baseURL: "https://naala-api.vercel.app/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,  // Asegura que se envían cookies y credenciales
});

export default api;
