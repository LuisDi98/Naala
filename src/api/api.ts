import axios from 'axios';
//'https://naala-api-steel.vercel.app/api/'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5500/api/',
  timeout: 100000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
