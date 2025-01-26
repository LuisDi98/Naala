import React, { useState } from "react";
import {
  VStack,
  Container,
  Heading,
  Box,
  Input,
  createListCollection,
  Text
} from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select"
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useMutation } from "@tanstack/react-query";
import { generatePin } from "../api/pin";
import useFormSetter from "../hooks/useFormSetter";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router";

const CreatePin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  
  const [formState, setField] = useFormSetter({
    proyecto: "",
    finca: "",
    modelo: "",
    nombre: "",
    cedula: "",
    telefono: "",
    correo: "",
    adminPassword: "",
  });

  const models = createListCollection({
    items: [
      { label: "Modelo tipo 1", value: "Modelo_1" },
      { label: "Modelo tipo 2", value: "Modelo_2" },
      { label: "Modelo tipo 3", value: "Modelo_3" },
    ],
  });

  const { mutate, isPending } = useMutation({
    mutationFn: generatePin,
    onSuccess: (data) => {
      navigate("/pin");
    },
    onError: (error) => {
      setError("Hubo un error generando el PIN. Intenta de nuevo.");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Validación de campos vacíos
    for (const key in formState) {
      if (formState[key as keyof typeof formState].trim() === "") {
        setError("Todos los campos son obligatorios. Por favor, complétalos.");
        return;
      }
    }

    const adminSecretPass = import.meta.env.VITE_ADMIN_SECRET_PIN_PASS;
    if (formState.adminPassword !== adminSecretPass) {
      setError("Contraseña de administrador incorrecta. No puedes generar un PIN.");
      return;
    }

    mutate(formState); 
  };

  return (
    <Container maxW="md" py={8}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={6} align="stretch">
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "3xl" }} fontWeight="bold" textAlign="center" mb={6}>
            Formulario para PIN
          </Heading>

          {error && (
            <Text color="red.500" textAlign="center" fontWeight="bold">
              {error}
            </Text>
          )}

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
              name="finca"
              placeholder="Ingresa la Finca Filial"
              value={formState.finca}
              onChange={(e) => setField("finca")(e.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Modelo</FormLabel>
            <SelectRoot
              collection={models}
              size="sm"
              width="320px"
              value={formState.modelo}
              onValueChange={(value: any) => setField("modelo")(value.value[0])}
            >
              <SelectLabel>Selecciona un modelo</SelectLabel>
              <SelectTrigger>
                <SelectValueText placeholder="Selecciona un modelo" />
              </SelectTrigger>
              <SelectContent>
                {models.items.map((model) => (
                  <SelectItem item={model} key={model.value}>
                    {model.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </SelectRoot>
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
              placeholder="Ingresa la cédula del cliente"
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

          <FormControl isRequired>
            <FormLabel>Contraseña de administrador</FormLabel>
            <Input
              name="adminPassword"
              placeholder="Ingrese la contraseña de administrador"
              type="password"
              value={formState.adminPassword}
              onChange={(e) => setField("adminPassword")(e.target.value)}
            />
          </FormControl>

          <Box pt={4}>
            <Button
              type="submit"
              colorScheme="black"
              size="lg"
              width="full"
              isLoading={isPending}
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
