import PizZip from 'pizzip';
import Docxtemplater from 'docxtemplater';
import JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver';

const convertImageToBase64 = (imagePath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        const image = fetch(imagePath)
            .then(response => response.blob())
            .then(blob => {
                reader.onloadend = () => resolve(reader.result as string);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
    });
};

const generateDocument = async () => {
    try {
        const docxPath = '/Naala_Contrato.docx';
        const imagePath = '/naala-logo.png';

        JSZipUtils.getBinaryContent(docxPath, async (error: any, content: any) => {
            if (error) {
                throw new Error(`Error al cargar el archivo DOCX: ${error}`);
            }

            const imageBase64 = await convertImageToBase64(imagePath);

            const zip = new PizZip(content);
            const doc = new Docxtemplater(zip, {
                paragraphLoop: true,
                linebreaks: true,
            });

            doc.setData({
                fecha: new Date().toLocaleDateString(),
                finca: 'Finca La Esperanza',
                modelo: 'Modelo 3A',
                propietario: 'Luis Di',
                firma: imageBase64,
            });

            try {
                doc.render();
            } catch (renderError) {
                console.error('Error al renderizar el documento:', renderError);
            }

            const output = doc.getZip().generate({
                type: 'blob',
                mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            });

            saveAs(output, 'Contrato_Completado.docx');

            console.log('Documento generado exitosamente.');
        });
    } catch (error) {
        console.error('Error:', error);
    }
};

export { generateDocument };