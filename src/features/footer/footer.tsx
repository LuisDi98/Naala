"use client";

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react";
import { Home, Save, Printer, Send } from "lucide-react";
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "../../components/ui/dialog";

// Define props for the Footer
interface FooterProps {
  totalPrice: number;
}

export default function Footer({ totalPrice }: FooterProps) {
  return (
    <Box
      as="footer"
      borderTop="1px"
      borderColor="gray.200"
      p={4}
      bg="white"
      w="100%"
      position="sticky"
      bottom="0"
      zIndex="10"
    >
      <Container maxW="container.xl">
        <Flex justify="space-between" align="center" wrap="wrap" gap={4}>
          <Flex gap={4}>
            <Button variant="ghost">
              <Home size={16} />
              Inicio
            </Button>
            <Button variant="ghost">
              <Save size={16} />
              Guardar
            </Button>
            <Button variant="ghost">
              <Printer size={16} />
              Imprimir
            </Button>
          </Flex>
          <Flex align="center" gap={4}>
            <Flex align="center" gap={2}>
              <Home size={16} />
              <Text fontWeight="bold">
                Valor de extras: ${totalPrice.toLocaleString()}
              </Text>
            </Flex>

            <DialogRoot>
              <DialogTrigger asChild>
                <Button bgColor="#000" color="#fff" size="lg" p={2}>
                  <Send size={8} />
                  Terminar
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Descargar Contrato</DialogTitle>
                </DialogHeader>
                <DialogBody>
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
                    CR2154774849851561489
                  </Text>

                  <Text fontSize="lg" fontWeight="medium" mt={4}>
                    Y el comprobante al correo:
                  </Text>

                  <Text fontSize="xl" fontWeight="bold" color="green.500" textAlign="center">
                    mfernandez@urbania.cr
                  </Text>
                </DialogBody>
                <DialogFooter>
                  <DialogActionTrigger asChild>
                    <Button variant="outline">Cancelar</Button>
                  </DialogActionTrigger>
                  <Button colorScheme="blue">Descargar</Button>
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
