import api from "./api";

export const generatePin = async (data:any) => {
    const response = await api.post("/generate", data);
    console.log(response.data)
    return response.data; // Return the response data
  };
  
  export const verifyPin = async (data:any) => {
    const response = await api.post("pins/verifyPin", data);
    return response.data;
  };