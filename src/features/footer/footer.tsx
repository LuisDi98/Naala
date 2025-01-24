import { useState } from "react";
import { Box, Button, Container, Flex, Text, VStack, Separator } from "@chakra-ui/react";
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
} from "../../components/ui/dialog";
import { toaster } from "../../components/ui/toaster";

interface FooterProps {
  totalPrice: number;
  selectedOptions: { [key: string]: { name: string; price: number } };
}

export default function Footer({ totalPrice, selectedOptions }: FooterProps) {
  const [isAccepted, setIsAccepted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAcceptContract = async () => {
    console.log("Aceptando contrato...");
    console.log("Opciones seleccionadas:", selectedOptions);
    // Obtener datos desde localStorage
    const storedData = localStorage.getItem("pinData");
    if (!storedData) {
      toaster.create({
        description: "No se encontraron datos del contrato. Verifique el PIN.",
        type: "error",
      });
      return;
    }
    
    const pinData = JSON.parse(storedData);
    const fecha = new Date().toLocaleDateString();
    const { correo, modelo, nombre, finca } = pinData;
    const clientEmail = correo;
    const propietario = nombre;
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

            <DialogRoot open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button bgColor="#000" color="#fff" size="lg" p={2}>
                  Revisar
                </Button>
              </DialogTrigger>

              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{isAccepted ? "Información de Pago" : "Resumen del Contrato"}</DialogTitle>
                </DialogHeader>

                <DialogBody>
                  {!isAccepted ? (
                    <>
                      <Text fontSize="lg" fontWeight="medium">
                        Por favor verificar y confirmar sus personalizaciones, una vez confirmado se generará el contrato.
                      </Text>
                      <VStack spacing={3} align="start" mt={4}>
                        {Object.entries(selectedOptions).map(([question, option], index) => (
                          <Box key={index} p={2} border="1px solid #ddd" borderRadius="md" w="100%">
                            <Text fontWeight="bold">{question}</Text>
                            <Text color="gray.600">Opción: {option.name}</Text>
                            <Text color="gray.600">Costo: ${option.price}</Text>
                          </Box>
                        ))}
                      </VStack>

                      <Separator my={4} />
                      <Text fontWeight="bold">Total a pagar: ${totalPrice.toLocaleString()}</Text>
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
                  <DialogCloseTrigger asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogCloseTrigger>

                  {!isAccepted ? (
                    <Button colorScheme="green" onClick={handleAcceptContract}>
                      Finalizar Contrato
                    </Button>
                  ) : null}
                </DialogFooter>
              </DialogContent>
            </DialogRoot>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
