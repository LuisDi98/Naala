import api from "./api";
// Asi se llama la funcion: await downloadDocx(selectedOptions, clientEmail, fecha, finca, modelo, propietario);
export const downloadDocx = async (
  selectedOptions: { [key: string]: [{ name: string; price: number }] },
  clientEmail: string,
  fecha: string,
  finca: string,
  modelo: string,
  propietario: string,
  proyecto: string
) => {
  try {
    console.log("Datos enviados al servidor:", {
      selectedOptions,
      clientEmail,
      fecha,
      modelo,
      propietario,
      finca,
      proyecto
    });
    
    const response = await api.post(
      "/docx/generateDocx",
      { selectedOptions, clientEmail, fecha, finca, modelo, propietario, proyecto },
      {
        responseType: 'blob',
      }
    );
    const blob = new Blob([response.data], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Contrato_${clientEmail}.pdf`; // Cambiar extensión a .pdf
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error descargando el contrato:", error);
    alert("Hubo un problema al descargar el contrato.");
  }
};
