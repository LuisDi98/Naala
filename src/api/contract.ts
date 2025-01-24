import api from "./api";
// Asi se llama la funcion: await downloadDocx(selectedOptions, clientEmail, fecha, finca, modelo, propietario);
export const downloadDocx = async (
  selectedOptions: { [key: string]: { name: string; price: number } },
  clientEmail: string,
  fecha: string,
  finca: string,
  modelo: string,
  propietario: string
) => {
  try {
    const response = await api.post(
      "/docx/generateDocx",
      { selectedOptions, clientEmail, fecha, finca, modelo, propietario },
      {
        responseType: 'blob',
      }
    );
    const blob = new Blob([response.data], {
      type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `Contrato_${clientEmail}.docx`;
    document.body.appendChild(a);
    a.click();
    a.remove();
  } catch (error) {
    console.error("Error descargando el contrato:", error);
    alert("Hubo un problema al descargar el contrato.");
  }
};
