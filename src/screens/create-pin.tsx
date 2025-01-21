import React from "react"
import { Button, VStack, Container, Heading, Box, Input } from "@chakra-ui/react"
import { FormControl, FormLabel } from "@chakra-ui/form-control"

const CreatePin = () => {
  return (
    <Container maxW="md" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="xl" textAlign="center" mb={6}>
          Formulario para pin
        </Heading>

        <FormControl isRequired>
          <FormLabel>Proyecto</FormLabel>
          <Input name="project" placeholder="Ingresa el proyecto" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Finca Filial</FormLabel>
          <Input name="fincaFilial" placeholder="Ingresa la Finca Filial" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Modelo</FormLabel>
          <Input name="modelo" placeholder="Ingresa el modelo de casa" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Nombre</FormLabel>
          <Input name="nombre" placeholder="Ingresa el nombre del cliente" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Cédula</FormLabel>
          <Input name="cedula" placeholder="Ingresa la Cédula del cliente" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Teléfono</FormLabel>
          <Input name="telefono" placeholder="Ingresa el teléfono" type="tel" />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Correo</FormLabel>
          <Input name="correo" placeholder="Ingresa el correo del cliente" type="email" />
        </FormControl>

        <Box pt={4}>
          <Button type="submit" colorScheme="blue" size="lg" width="full">
            Generar Pin
          </Button>
        </Box>
      </VStack>
    </Container>
  )
}

export default CreatePin