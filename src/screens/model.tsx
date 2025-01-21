"use client";

import {
  Input,
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/accordion";
import { Search, Edit, Expand } from "lucide-react";
import { Footer } from "../features/footer";
import Bg from "../assets/Naala_assets/bg_4.png"

export default function ModelViewer() {
  return (
    <Flex direction="column" minH="100vh">
      {/* Header */}
      <Box p={4} borderBottom="1px">
        <Container maxW="container.xl">
          <Heading size="lg">Modelo 2</Heading>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
        {/* Image Section */}
        <Box flex={1} position="relative" p={4}>
          <Box position="relative" borderRadius="lg" overflow="hidden">
            <Image
              src={Bg}
              alt="Modelo 2 Interior"
              width="100%"
              height="auto"
            />
            <Button
              position="absolute"
              top={4}
              right={4}
              size="sm"
              colorScheme="blackAlpha"
            >
              <Expand color="#fff" />
            </Button>
          </Box>
        </Box>

        {/* Sidebar */}
        <Box w={{ base: "100%", lg: "400px" }} p={4} bg="transparent">
          <Flex direction="column" gap={4}>
            {/* Search */}
            <InputGroup startElement={<Search size={20} color="gray.400" />}>
              <Input placeholder="Buscar un acabado" bg="white" />
            </InputGroup>

            {/* Details Section */}
            <Flex justify="space-between" px={2}>
              <Text fontSize="sm">Detalles</Text>
              <Text fontSize="sm">Acabados estándar</Text>
            </Flex>

            {/* Accordion Sections */}
            <Accordion className="gap-8 p-8">
              {[
                {
                  title: "Acabado de muebles",
                  items: [
                    "Arctic Grey",
                    "Chalk",
                    "Aventurine Green Metallic",
                    "Ice Grey Metallic",
                  ],
                },
                {
                  title: "Extras Cocina",
                  items: ["Isla central", "Despensa adicional"],
                },
                {
                  title: "Previstas eléctricas",
                  items: ["Tomacorrientes adicionales", "Iluminación LED"],
                },
                {
                  title: "Acabados enchapes",
                  items: ["Porcelanato premium", "Mármol"],
                },
                {
                  title: "Equipamiento",
                  items: ["Electrodomésticos", "Sistema de seguridad"],
                },
              ].map((section, index) => (
                <AccordionItem
                  key={index}
                  bg="#FFF"
                  className="mt-4 p-4 rounded-lg"
                >
                  <h2>
                    <AccordionButton>
                      <Box flex={1} textAlign="left">
                        {section.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Flex direction="column" gap={2}>
                      {section.items.map((item) => (
                        <Checkbox variant="subtle">{item}</Checkbox>
                      ))}
                    </Flex>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </Box>
      </Flex>

      {/* Footer */}
      <Footer />
    </Flex>
  );
}
