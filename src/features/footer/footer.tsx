import { useState } from "react";
import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { downloadDocx } from "../../api/contract";
import {
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
  DialogActionTrigger
} from "../../components/ui/dialog";

interface FooterProps {
  totalPrice: number;
  selectedOptions: { [key: string]: { name: string; price: number } };
  clientEmail: string;
}

export default function Footer({ totalPrice, selectedOptions, clientEmail }: FooterProps) {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAcceptContract = async () => {
    console.log("Aceptando contrato...");
    console.log("Opciones seleccionadas:", selectedOptions);
    //Datos que ocupamos para el contrato
    // const { selectedOptions, clientEmail, fecha, finca, modelo, propietario } = req.body;
    // Los haremos quemados por probar
    const fecha = "2021-10-10";
    const finca = "Alfa";
    const modelo = "Modelo_1";
    const propietario = "Luis Diego";
    await downloadDocx(selectedOptions, clientEmail, fecha, finca, modelo, propietario);
    setIsAccepted(true);
  };

  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" p={4} bg="white" w="100%" position="sticky" bottom="0" zIndex="10">
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Flex gap={4}>
            <Button variant="ghost">Inicio</Button>
          </Flex>

          <Flex align="center" gap={4}>
            <Text fontWeight="bold">Valor de extras: ${totalPrice.toLocaleString()}</Text>

            <DialogRoot>
              <DialogTrigger asChild>
                <Button bgColor="#000" color="#fff" size="lg" p={2}>
                  Finalizar Contrato
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{isAccepted ? "Información de Pago" : "Descargar Contrato"}</DialogTitle>
                </DialogHeader>

                <DialogBody>
                  {!isAccepted ? (
                    <>
                      <Text fontSize="lg" fontWeight="medium">
                        Descarga el contrato y revísalo antes de continuar.
                      </Text>
                      <Button border={"black"} colorScheme="blue" mt={4} onClick={() => handleAcceptContract()}>
                        Descargar Contrato
                      </Button>
                    </>
                  ) : (
                    <>
                      <Text fontSize="lg" fontWeight="medium">
                        Favor enviar la transferencia a la cuenta:
                      </Text>
                      <Text
                        fontSize="xl"
                        fontWeight="bold"
                        color="blue.500"
                        border="1px solid"
                        borderColor="gray.300"
                        borderRadius="md"
                        p={2}
                        textAlign="center"
                      >
                        IBAN: CR21010200009317285965 <br /> BAC: 931728596
                      </Text>
                      <Text fontSize="lg" fontWeight="medium" mt={4}>
                        Y envíe el comprobante al correo:
                      </Text>
                      <Text fontSize="xl" fontWeight="bold" color="green.500" textAlign="center">
                        mfernandez@urbania.cr
                      </Text>
                    </>
                  )}
                </DialogBody>

                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogActionTrigger>

                  {!isAccepted ? (
                    <Button colorScheme="green" onClick={handleAcceptContract}>
                      Aceptar
                    </Button>
                  ) : null}
                </DialogFooter>

                <DialogCloseTrigger />
              </DialogContent>
            </DialogRoot>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}