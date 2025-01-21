"use client";

import {
  Input,
  Box,
  Button,
  Flex,
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
import { Search, Expand } from "lucide-react";
import { Footer } from "../features/footer";
import { useLocation } from "react-router-dom"; // Dynamically get pathname
import { modelsData } from "../data/form"; // Import the hardcoded data
import Bg from "../assets/Naala_assets/bg_4.png";

export default function ModelViewer() {
  console.log("modelsData", modelsData);
  
  const { pathname } = useLocation();
  const modelName = pathname.split("/").pop(); // Extract model name from the path
  const model = modelsData.find((m) => m.model === modelName);

  if (!model) {
    return (
      <Flex direction="column" minH="100vh">
        <Box p={6} textAlign="center">
          <Text fontSize="2xl" color="red.500">
            Modelo "{modelName}" no encontrado.
          </Text>
        </Box>
      </Flex>
    );
  }

  return (
    <Flex direction="column" minH="100vh">
      {/* Main Content */}
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
        {/* Image Section */}
        <Box flex={1} position="relative" p={4}>
          <Box position="relative" borderRadius="lg" overflow="hidden">
            <Image src={Bg} alt={`${model.model} Interior`} width="100%" height="auto" />
            <Button position="absolute" top={4} right={4} size="sm" colorScheme="blackAlpha">
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
              {model.categories.map((category, index) => (
                <AccordionItem
                  key={index}
                  bg="#FFF"
                  className="mt-4 p-4 rounded-lg"
                >
                  <h2>
                    <AccordionButton>
                      <Box flex={1} textAlign="left">
                        {category.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Flex direction="column" gap={2}>
                      {category.questions.map((question, qIndex) => (
                        <Box key={qIndex} mb={4}>
                          <Text fontWeight="semibold">{question.text}</Text>
                          {question.options.map((option, oIndex) => (
                            <Flex key={oIndex} align="center" gap={2}>
                              <Checkbox variant="subtle">
                                {option.name}
                              </Checkbox>
                              {option.image && (
                                <Image
                                  src={option.image}
                                  alt={option.name}
                                  boxSize="50px"
                                  objectFit="cover"
                                />
                              )}
                            </Flex>
                          ))}
                        </Box>
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
