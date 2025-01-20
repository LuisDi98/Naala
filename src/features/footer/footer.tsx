"use client"

import { Box, Button, Container, Flex, Text } from "@chakra-ui/react"
import { Home, Save, Printer } from "lucide-react"

export default function Footer() {
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
              <Text>Valor de extras: 3,000</Text>
            </Flex>
            <Text>Valor del modelo: 143,000</Text>
            <Button colorScheme="black" size="lg">
              Terminar
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  )
}
