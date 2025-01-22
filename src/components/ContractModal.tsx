import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";

export default function ContractModal() {
  const { open: isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
        colorScheme="blackAlpha"
        size="lg"
        fontSize="lg"
        fontWeight="bold"
        borderRadius="md"
      >
        Descargar Contrato
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent borderRadius="lg" p={6}>
          <ModalHeader textAlign="center" fontSize="2xl" fontWeight="bold">
            Descargar Contrato
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <VStack spacing={4} textAlign="center">
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
              >
                CR2154774849851561489
              </Text>

              <Text fontSize="lg" fontWeight="medium">
                Y el comprobante al correo:
              </Text>

              <Text fontSize="xl" fontWeight="bold" color="green.500">
                mfernandez@urbania.cr
              </Text>

              <Button colorScheme="blue" size="lg" mt={4}>
                Descargar Contrato
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
