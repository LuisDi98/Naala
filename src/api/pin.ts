export const generatePin = async (data:any) => {
  try {
      const response = await api.post("pins/generate", data);
      return response.data;
  } catch (error) {
      console.error("Error generating PIN:", error);
      throw error;
  }
};

export const verifyPin = async (data:any) => {
  try {
      const response = await api.post("pins/verifyPin", data);
      return response.data;
  } catch (error) {
      console.error("Error verifying PIN:", error);
      throw error;
  }
};
