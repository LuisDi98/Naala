import api from "./api";

export const generatePin = async (data:any) => {
    const response = await api.post("/generate", data);
    return response.data; // Return the response data
  };
  
  // API call for verifying PIN
  export const verifyPin = async (data:any) => {
    const response = await api.post("/verifyPin", data);
    return response.data; // Return the response data
  };