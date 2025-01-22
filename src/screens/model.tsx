import {
  Input,
  Box,
  Button,
  Flex,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Radio, RadioGroup } from "./../components/ui/radio";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from "@chakra-ui/accordion";
import { Search, Expand } from "lucide-react";
import { Footer } from "../features/footer";
import { useLocation } from "react-router-dom";
import { modelsData } from "../data/form";
import Bg from "../assets/Naala_assets/bg_4.png";
import { useState } from "react";

export default function ModelViewer() {
  const { pathname } = useLocation();
  const modelName = pathname.split("/").pop();
  const model = modelsData.find((m) => m.model === modelName);

  const [selectedOptions, setSelectedOptions] = useState<{ [key: string]: { name: string; price: number } }>({});
  const [totalPrice, setTotalPrice] = useState(0);

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

  const handleOptionChange = (
    selectedValue: string, 
    question: any, 
    questionOptions: any[]
  ) => {
    const selectedOption = questionOptions.find(option => option.name === selectedValue);
    console.log("Opción encontrada:", selectedOption);
    if (!selectedOption) return;
    setSelectedOptions((prevSelectedOptions) => {
      const updatedOptions = { ...prevSelectedOptions };
      if (updatedOptions[question.text]) {
        const prevOption = updatedOptions[question.text];
        setTotalPrice((prevPrice) => prevPrice - prevOption.price);
      }
      updatedOptions[question.text] = { name: selectedOption.name, price: selectedOption.price };
      setTotalPrice((prevPrice) => prevPrice + selectedOption.price);
      console.log("Opciones seleccionadas:", updatedOptions);
      return updatedOptions;
    });
  };

  return (
    <Flex direction="column" minH="100vh">
      <Flex flex={1} direction={{ base: "column", lg: "row" }}>
        <Box flex={1} position="relative" p={4}>
          <Box position="relative" borderRadius="lg" overflow="hidden">
            <Image src={Bg} alt={`${model.model} Interior`} width="100%" height="auto" />
            <Button position="absolute" top={4} right={4} size="sm" colorScheme="blackAlpha">
              <Expand color="#fff" />
            </Button>
          </Box>
        </Box>

        <Box w={{ base: "100%", lg: "500px" }} p={4} bg="transparent">
          <Flex direction="column" gap={4}>
            

            <Text fontSize="2xl" fontWeight="bold">
              Bienvenido, marque las opciones que desea agregar a su modelo.
            </Text>

            <Accordion className="gap-8 p-5" defaultIndex={[0]}>
              {model.categories.map((category, categoryIndex) => (
                <AccordionItem key={categoryIndex} bg="#FFF" className="mt-4 p-4 rounded-lg">
                  <h2>
                    <AccordionButton>
                      <Box className="mb-5" flex={1} textAlign="left" fontSize="2xl" fontWeight="bold">
                        {category.title}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Flex direction="column" gap={2}>
                      {category.questions.map((question, questionIndex) => (
                        <Box key={questionIndex} mb={4} p={4} bg="#F9F9F9" borderRadius="lg">
                          <Text mb={4} fontWeight="bold" fontSize="lg">
                            {question.text}
                          </Text>
                          <RadioGroup
                          key={"subtle"}
                          variant={"subtle"}
                          onChange={(event) => handleOptionChange(event.target.value, question, question.options)}
                          >
                            <VStack gap="4" align="start">
                              {question.options.map((option, optionIndex) => (
                                <Radio 
                                  key={optionIndex}
                                  value={String(option.name)}
                                >
                                  <Text fontSize="lg">{option.name} - ${option.price}</Text>
                                </Radio>
                              ))}
                            </VStack>
                          </RadioGroup>
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

      <Footer totalPrice={totalPrice} />
    </Flex>
  );
}
