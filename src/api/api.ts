import axios from 'axios';
//'https://naala-api-steel.vercel.app/api/'
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://naala-api-steel.vercel.app/api/pins/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
