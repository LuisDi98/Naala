import React from "react";
import {
  Button,
  VStack,
  Container,
  Heading,
  Box,
  Input,
} from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useMutation } from "@tanstack/react-query"; // Import useMutation
import { generatePin } from "../api/pin"; // Import the API function
import useFormSetter from "../hooks/useFormSetter"; // Import the useFormSetter hook

const CreatePin = () => {
  // Initialize form state with useFormSetter
  const [formState, setField] = useFormSetter({
    proyecto: "",
    fincaFilial: "",
    modelo: "",
    nombre: "",
    cedula: "",
    telefono: "",
    correo: "",
  });

  // useMutation for generating PIN
  const { mutate } = useMutation({
    mutationFn: generatePin, // Ensure generatePin is a properly defined async function
    onSuccess: (data) => {
      console.log("Mutation successful:", data);
    },
    onError: (error) => {
      console.error("Mutation error:", error);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate(formState); // Call mutate directly with formState
  };

  return (
    <Container maxW="md" py={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" mb={6}>
            Formulario para pin
          </Heading>

          <FormControl isRequired>
            <FormLabel>Proyecto</FormLabel>
            <Input
              name="proyecto"
              placeholder="Ingresa el proyecto"
              value={formState.proyecto}
              onChange={(e) => setField("proyecto")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Finca Filial</FormLabel>
            <Input
              name="fincaFilial"
              placeholder="Ingresa la Finca Filial"
              value={formState.fincaFilial}
              onChange={(e) => setField("fincaFilial")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Modelo</FormLabel>
            <Input
              name="modelo"
              placeholder="Ingresa el modelo de casa"
              value={formState.modelo}
              onChange={(e) => setField("modelo")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Nombre</FormLabel>
            <Input
              name="nombre"
              placeholder="Ingresa el nombre del cliente"
              value={formState.nombre}
              onChange={(e) => setField("nombre")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Cédula</FormLabel>
            <Input
              name="cedula"
              placeholder="Ingresa la Cédula del cliente"
              value={formState.cedula}
              onChange={(e) => setField("cedula")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Teléfono</FormLabel>
            <Input
              name="telefono"
              placeholder="Ingresa el teléfono"
              type="tel"
              value={formState.telefono}
              onChange={(e) => setField("telefono")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Correo</FormLabel>
            <Input
              name="correo"
              placeholder="Ingresa el correo del cliente"
              type="email"
              value={formState.correo}
              onChange={(e) => setField("correo")(e.target.value)}
            />
          </FormControl>

          <Box pt={4}>
            <Button
              type="submit"
              colorScheme="blue"
              size="lg"
              width="full"
            >
              Generar Pin
            </Button>
          </Box>
        </VStack>
      </form>
    </Container>
  );
};

export default CreatePin;
