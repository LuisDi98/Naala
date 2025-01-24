import api from "./api";

export const generatePin = async (data:any) => {
    const response = await api.post("pins/generate", data);
    return response.data;
  };
  
  export const verifyPin = async (data:any) => {
    const response = await api.post("pins/verifyPin", data);
    return response.data;
  };